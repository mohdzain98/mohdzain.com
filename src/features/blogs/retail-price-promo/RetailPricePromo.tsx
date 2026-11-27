import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import figure0 from "@/assets/blogs/retail-price-promo/02_elasticity_forest.webp";
import figure1 from "@/assets/blogs/retail-price-promo/03_due_to_by_category.webp";
import figure2 from "@/assets/blogs/retail-price-promo/04_price_changes_profit.webp";
import figure3 from "@/assets/blogs/retail-price-promo/05_forecast_backtest.webp";
import figure4 from "@/assets/blogs/retail-price-promo/05_frontier_profit.webp";
import figure5 from "@/assets/blogs/retail-price-promo/05_calendar_profit.webp";
import figure6 from "@/assets/blogs/retail-price-promo/05_scenarios_profit.webp";
import { MathJax, MathJaxContext } from "better-react-mathjax";
import { Icon } from "@/components/icons/Icon";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import ShadedHR from "@/components/ui/ShadedHR";
import ExpandableImage from "@/components/ui/ExpandableImage";
import { blogRegistry } from "@/features/blogs/blogRegistry";

const repo = "https://github.com/mohdzain98/retail-price-promo-optimization";
const relatedLinks = [
  { href: repo, label: "GitHub repository" },
  { href: repo + "/blob/HEAD/docs/architecture.md", label: "Architecture" },
  { href: repo + "/blob/HEAD/docs/methodology.md", label: "Methodology" },
  { href: repo + "/blob/HEAD/docs/data.md", label: "Data documentation" },
  {
    href: "https://nlopt.readthedocs.io/en/latest/",
    label: "NLopt documentation",
  },
  { href: "https://coin-or.github.io/pulp/", label: "PuLP documentation" },
  { href: "https://ergo-code.github.io/HiGHS/", label: "HiGHS documentation" },
];

const pipeline = [
  [
    "Data prep",
    "Turn weekly store sales into a product-week panel with demand drivers and a time-based holdout.",
  ],
  [
    "Elasticity",
    "Compare four models, apply quality gates, and impute missing estimates.",
  ],
  [
    "Baseline",
    "Separate temporary discounts, merchandising, and pantry loading from regular-price demand.",
  ],
  [
    "Shelf pricing",
    "Solve the portfolio problem with NLopt, then round and repair the recommendations.",
  ],
  [
    "Forecast & promos",
    "Backtest forecasts, score candidate offers, and solve the promotion calendar across several budgets.",
  ],
  [
    "Simulator",
    "Use Streamlit to adjust assumptions and rerun the pricing and promotion solvers.",
  ],
];

const equations = [
  String.raw`\[
\ln Q_{it} = \alpha_i + \beta_i \left(\ln P^{\text{base}}_{it} - \overline{\ln P^{\text{base}}_i}\right) + \delta_i \ln\frac{P_{it}}{P^{\text{base}}_{it}} + \gamma^\top X_{it} + \varepsilon_{it}
\]`,
  String.raw`\[
\text{baseline}_t = \exp\bigl(\ln \text{units}_t - \text{price}_t - \text{promo}_t - \text{pantry}_t - \text{error}_t\bigr)
\]`,
  String.raw`\[
\begin{aligned}
\Delta V &= B \cdot E \cdot \frac{P - \bar P}{\bar P} \\
\max_P &\; (B + \Delta V)\, P
\end{aligned}
\]`,
  String.raw`\[
P^* = \begin{cases} \dfrac{c_{\text{eff}}\,\beta}{1+\beta} & \beta < -1 \\[4pt] \text{upper bound} & \text{otherwise} \end{cases}
\]`,
  String.raw`\[
\begin{aligned}
\text{lift} &= (1-d)^{\delta}\, e^{\,\tau} \\[0.55em]
Q^{\text{promo}} &= F_w \cdot \text{lift} \\[0.55em]
\text{dip} &= \textstyle\sum_{l=1}^{3} F_{w+l}\left(1 - e^{\,\pi_l}\right) \\[0.55em]
\Delta Q &= Q^{\text{promo}} - F_w - \text{dip} \\[0.55em]
\Delta R &= P(1-d)\, Q^{\text{promo}} - P\,(F_w + \text{dip}) \\[0.55em]
\text{spend} &= d\, P\, Q^{\text{promo}} + f \\[0.55em]
\Delta \Pi &= \Delta R - c\,\Delta Q - f \\[0.55em]
\text{gain} &= \Delta R - c_{\text{eff}}\,\Delta Q - \frac{c_{\text{eff}}}{c}\, f
\end{aligned}
\]`,
  String.raw`\[
\begin{aligned}
\max_{x} \quad & \sum_k \text{gain}_k\, x_k \\
\text{s.t.} \quad & \sum_k \text{spend}_k\, x_k \le \text{budget} \\
& \sum_{k \in i} x_k \le 4 \quad \forall i \\
& \sum_{k \in i,\; w \le \text{week}_k \le w+3} x_k \le 1 \quad \forall i,w \\
& \sum_{k \in \text{feature},\; \text{week}_k = w} x_k \le 10 \quad \forall w \\
& \sum_{k \in \text{display},\; \text{week}_k = w} x_k \le 12 \quad \forall w
\end{aligned}
\]`,
];

const figures = [
  {
    src: figure0,
    width: 1967,
    height: 1724,
    alt: "Regular-price elasticity estimates by product and model.",
  },
  {
    src: figure1,
    width: 1367,
    height: 621,
    alt: "Weekly volume split into baseline, price, merchandising, pantry loading, and residual effects by category.",
  },
  {
    src: figure2,
    width: 1967,
    height: 1727,
    alt: "Profit-optimized regular price changes and uncertainty ranges by product.",
  },
  {
    src: figure3,
    width: 1217,
    height: 527,
    alt: "Holdout WAPE for the four baseline forecasting methods.",
  },
  {
    src: figure4,
    width: 1367,
    height: 917,
    alt: "Incremental profit across candidate trade-spend budgets.",
  },
  {
    src: figure5,
    width: 1667,
    height: 620,
    alt: "The 13-week promotion calendar selected for the profit objective.",
  },
  {
    src: figure6,
    width: 1367,
    height: 916,
    alt: "Projected volume, revenue, and profit across 13-week scenarios.",
  },
];

function ProjectFigure({ index }: { index: number }) {
  const figure = figures[index];
  return (
    <figure className="mx-auto my-6 w-full max-w-xl">
      <ExpandableImage {...figure} />
      <figcaption className="mt-2 text-center text-sm text-muted-foreground">
        {figure.alt}
      </figcaption>
    </figure>
  );
}

function Equation({ index }: { index: number }) {
  return (
    <div className="my-5 @container">
      <MathJax
        className={
          index < 2
            ? "text-[min(1rem,2.5cqw)]"
            : "text-[clamp(0.6875rem,3vw,1rem)]"
        }
      >
        {equations[index]}
      </MathJax>
    </div>
  );
}

export default function RetailPricePromo() {
  const { title, date, readTime, tags } =
    blogRegistry["retail-price-promo-optimization"];

  return (
    <MathJaxContext>
      <article className="mx-auto w-full max-w-[900px] px-6 pt-16 pb-12 md:px-12 xl:px-0 [&_section]:mt-12 [&_section]:p-0 [&_h2]:mb-4 [&_h2]:text-xl [&_h2]:font-extrabold">
        <Breadcrumbs
          className="mt-2 mb-6"
          items={[
            { label: "Home", to: "/" },
            { label: "Blogs", to: "/blogs" },
            { label: title },
          ]}
        />
        <header className="mb-6">
          <h1 className="text-[1.75rem] font-bold leading-tight">{title}</h1>
          <p className="text-muted-foreground mb-0 mt-2">
            <Icon name="calendar" className="size-[1em] mr-2" />
            {date} · {readTime}
          </p>
        </header>
        <p className="text-[1.0625rem]">
          A discount changes what shoppers buy this week and can pull sales
          forward from the next three. I built a pipeline that estimates those
          effects, sets regular shelf prices, and plans a 13-week promotion
          calendar under a trade-spend budget.
        </p>
        <p>
          <a
            href={repo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border bg-card px-4 py-2 text-sm font-medium text-card-foreground no-underline hover:bg-accent"
          >
            <Icon
              name="github"
              aria-hidden="true"
              className="size-4 text-primary"
            />
            View the project on GitHub
          </a>
        </p>
        <ShadedHR />

        <section>
          <h2>The pipeline</h2>
          <ol className="my-6 flex list-none flex-wrap gap-2 p-0">
            {pipeline.map(([title], index) => (
              <li key={title} className="flex items-center gap-2">
                {index > 0 ? (
                  <ArrowRight
                    aria-hidden="true"
                    className="size-4 shrink-0 text-primary"
                  />
                ) : null}
                <strong className="rounded-lg border bg-card px-3 py-2 text-sm">
                  {title}
                </strong>
              </li>
            ))}
          </ol>
          <ul className="space-y-2">
            {pipeline.map(([title, description]) => (
              <li key={title}>
                <strong>{title}.</strong> {description}
              </li>
            ))}
          </ul>
          <p>
            Pipeline stages exchange artifacts through{" "}
            <code>data/processed/</code>, so each stage can be rerun
            independently once its inputs exist.
          </p>
        </section>

        <section>
          <h2>Data and methodology</h2>
          <h3 className="mb-3 font-bold">The Breakfast at the Frat dataset</h3>
          <p>
            The licensed dunnhumby Breakfast at the Frat dataset contains
            524,950 store-by-product-by-week transaction records across 156
            weeks and 55 products across bag snacks, cold cereal, frozen pizza,
            and oral hygiene. I aggregate units and spending across stores,
            compute the average price paid as spend divided by units, and
            represent merchandising as the share of selling stores running each
            tactic. The last 13 weeks are held out for evaluation.
          </p>
          <p>
            Each pipeline stage reads and writes its own artifacts. Preparation
            produces a Parquet panel, elasticity estimation adds fitted models
            and posterior draws, baseline decomposition writes weekly volumes,
            and the pricing and promotion stages produce recommendations for the
            Streamlit simulator. The simulator reuses the solver code, so
            changing a constraint runs the same optimization as the batch
            pipeline.
          </p>
        </section>

        <section>
          <h2>Estimate two price responses</h2>
          <p>
            The demand model estimates weekly units sold for each product from
            prices, promotions, and other demand drivers. It uses the log of
            units and the log of prices, so a price coefficient measures
            <strong> elasticity</strong>: the approximate percentage change in
            units associated with a 1% price change, holding the other inputs
            fixed. An elasticity of −1.5 means a 1% price increase corresponds
            to about 1.5% fewer units.
          </p>
          <p>
            The model splits the price shoppers pay into the regular shelf price
            and the ratio of paid price to shelf price. The regular-price
            elasticity (β) estimates the response to a lasting shelf-price
            change and feeds the price optimizer. The promo elasticity (δ)
            estimates the response to a temporary discount and feeds the
            promotion planner.
          </p>
          <Equation index={0} />
          <p>
            The control vector covers the share of selling stores running a
            circular feature, a display, both together, or a temporary price
            reduction (TPR). Including TPR share lets the discount coefficient
            capture depth while the TPR term captures the effect of running the
            tactic. Three lagged promotion flags capture pantry loading, when
            shoppers stock up during a deal and buy less in the following weeks.
            The model also controls for store coverage, holidays, yearly Fourier
            seasonality, and a slow trend fitted with LOESS to training
            residuals after accounting for those drivers.
          </p>
          <p>
            I compared per-product OLS, pooled OLS, a mixed-effects model, and a
            Bayesian hierarchical model. The Bayesian model partially pools the
            two slopes across products and categories, so products with weak
            price signals borrow information from similar items. It had the
            lowest holdout weighted absolute percentage error (WAPE) at 16.8%.
            After applying per-product fit and elasticity checks, 43 products
            used the Bayesian regular-price estimate, six used per-product OLS,
            and six used imputed estimates from comparable products.
          </p>
          <ProjectFigure index={0} />
        </section>

        <section>
          <h2>Reconstruct demand at regular price</h2>
          <p>
            The baseline starts from actual weekly sales and removes the
            estimated effects of temporary discounts, merchandising, and pantry
            loading, plus a selected promo-week residual. Seasonal and holiday
            demand stays in the baseline.
          </p>
          <Equation index={1} />
          <p>
            Promo-week rules smooth implausible dips and spikes. The
            decomposition then allocates the difference between actual and
            baseline units to the component effects. Across the dataset,
            baseline demand accounted for 75% of units. Frozen pizza had the
            largest incremental share at about 36%.
          </p>
          <ProjectFigure index={1} />
        </section>

        <section>
          <h2>Choose regular prices under portfolio constraints</h2>
          <p>
            The project benchmarks the common linear pricing approximation
            below.
          </p>
          <Equation index={2} />
          <p>
            The production optimizer uses the constant-elasticity demand curve
            implied by the log-log model. Relative prices are bounded within
            ±20%, portfolio volume must stay above 95% of baseline, the
            revenue-weighted average increase is capped at 5%, and eligible
            private-label price ladders are preserved. The unconstrained
            one-product result provides a solver check.
          </p>
          <Equation index={3} />
          <p>
            NLopt solves the portfolio problem, then the pipeline rounds and
            repairs prices to satisfy the guardrails. In the modeled
            regular-price scenarios, the profit objective produced 12.9% higher
            profit, 6.2% higher revenue, and 0.2% lower volume. The revenue
            objective produced 15.1% higher revenue and 18.9% lower profit. Unit
            costs come from assumed category margins.
          </p>
          <ProjectFigure index={2} />
        </section>

        <section>
          <h2>Forecast demand and select a promotion calendar</h2>
          <p>
            A seasonal-index forecast had the lowest WAPE on the 13-week
            backtest at 15.7%, ahead of XGBoost, a flat baseline, and SARIMAX.
            The planner adjusts the forecast to the recommended shelf prices and
            scores up to 8,424 product, week, tactic, and discount combinations.
            Each option accounts for discount depth, merchandising lift, future
            pantry dips, and the assumed execution fee.
          </p>
          <p>
            Each option starts with forecast baseline units for the promotion
            week. The discount depth and promo elasticity set the price lift,
            while the tactic effect adds lift from merchandising. The model
            subtracts the expected sales dip over the next three weeks to
            estimate net incremental units. Revenue uses the discounted price
            for promotion-week sales and the regular price for sales displaced
            in later weeks.
          </p>
          <Equation index={4} />
          <p>
            Trade spend includes the discount on all units sold during the
            promotion plus an assumed execution fee. Incremental profit
            subtracts the unit cost of the net incremental volume and the fee
            from incremental revenue. The planner scores offers by incremental
            profit or revenue, depending on the selected objective.
          </p>
          <p>
            HiGHS solves the mixed-integer program. The weekly spacing rule
            gives each promotion room for all three pantry lags, and the
            calendar respects its budget and merchandising slots.
          </p>
          <Equation index={5} />
          <p>
            Each positive-gain option has a binary decision variable. The
            constraints cap promotions at four per SKU, one per SKU in any
            four-week window, ten circular slots per week, and twelve display
            slots per week.
          </p>
          <p>
            I also solve across a range of budgets to measure marginal return.
            The profit-focused recommendation spent about $72k across 27
            promotions and added about $33k in modeled profit over the
            recommended-price scenario without promotions.
          </p>
          <ProjectFigure index={3} />
          <ProjectFigure index={4} />
          <ProjectFigure index={5} />
        </section>

        <section>
          <h2>What the simulator lets me test</h2>
          <p>
            In Streamlit I can change margins, price guardrails, promo fees,
            discount depths, and slot limits, then rerun the solvers using the
            fitted demand and forecast. The results depend on the assumed costs
            and fees. Price can respond to expected demand in the historical
            data, and the models omit substitution and competitor reactions, so
            the scenario gains are projections under the model assumptions.
          </p>
        </section>
        <section>
          <h2>Key results</h2>
          <p>
            The table compares modeled outcomes over 13 weeks for 54 products
            under the profit objective. Profit is net of promotion costs, using
            the project’s assumed margins and fees.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[36rem] border-collapse text-left text-sm [&_td]:border-b [&_td]:p-3 [&_th]:border-b [&_th]:p-3">
              <thead>
                <tr>
                  <th scope="col">Scenario</th>
                  <th scope="col">Volume</th>
                  <th scope="col">Revenue</th>
                  <th scope="col">Profit</th>
                  <th scope="col">vs. baseline</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Current prices, no promotions</th>
                  <td>630k</td>
                  <td>$1.92M</td>
                  <td>$598.9k</td>
                  <td>Baseline</td>
                </tr>
                <tr>
                  <th scope="row">Optimized regular prices</th>
                  <td>629k</td>
                  <td>$2.04M</td>
                  <td>$678.1k</td>
                  <td>+13.2%</td>
                </tr>
                <tr>
                  <th scope="row">Optimized prices and promotions</th>
                  <td>710k</td>
                  <td>$2.27M</td>
                  <td>$711.2k</td>
                  <td>+18.7%</td>
                </tr>
                <tr>
                  <th scope="row">Last year’s promotion calendar</th>
                  <td>846k</td>
                  <td>$2.56M</td>
                  <td>$533.5k</td>
                  <td>−10.9%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4">
            The optimized calendar selected 27 promotions on $72.4k of trade
            spend. Compared with replaying last year’s calendar, it projected
            $177.7k more profit on 82% less trade spend. Optimizing for revenue
            instead yielded 38.5% more revenue and 25.5% less profit than
            baseline.
          </p>
          <ProjectFigure index={6} />
        </section>

        <hr className="mt-12" />
        <footer className="mt-6 mb-12">
          <h2>Related</h2>
          <p className="mb-2">
            For more detail, see the project and optimization tool
            documentation.
          </p>
          <ul className="mb-6 list-none p-0">
            {relatedLinks.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline"
                >
                  → {label}
                </a>
              </li>
            ))}
            <li>
              <Link
                to="/blogs"
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline"
              >
                → All blog posts
              </Link>
            </li>
          </ul>
          <p className="mb-1 font-bold">Written by Mohd Zain</p>
          <p className="mb-6 text-muted-foreground">
            Data Science | LLM Systems | Agentic AI | FDE
          </p>
          <p className="mb-1 text-muted-foreground">
            Found this useful or have questions?
          </p>
          <a href="mailto:zainmohd1998@gmail.com" className="no-underline">
            Reach out via email
          </a>
          <p className="mt-6 mb-0 text-sm text-muted-foreground">
            Last updated: {date} · Tags: {tags.join(", ")}
          </p>
        </footer>
      </article>
    </MathJaxContext>
  );
}
