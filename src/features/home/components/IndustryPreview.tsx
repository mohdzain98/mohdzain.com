import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/icons/Icon";
import SectionHeader from "@/components/layout/SectionHeader";
import Tag from "@/components/common/Tag";
import { exp } from "@/content/experience";

export default function IndustryPreview() {
  const items = exp.slice(0, 3);

  return (
    <div id="experience" className="home-accent-section px-4 py-12 lg:px-[9%]">
      <div className="container mx-auto mt-6 px-4 md:px-2">
        <SectionHeader
          title="Industry"
          subtitle="Building applied AI and data science systems across production workflows, experimentation, and measurable business outcomes."
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.name}
              className="bg-card text-card-foreground flex h-full flex-col rounded-lg border p-6 "
            >
              <div className="mb-4 flex items-center gap-4">
                <div className="bg-primary/10 text-primary hidden size-11 shrink-0 items-center justify-center rounded-lg md:flex">
                  <Icon name={item.icon} className="size-5" />
                </div>
                <h3 className="m-0 text-xl font-bold">{item.name}</h3>
              </div>
              <p className="text-muted-foreground text-[15px]">{item.desc}</p>
              <div className="mt-auto flex flex-wrap gap-2">
                {item.techs.map((tech) => (
                  <Tag key={`${item.name}-${tech}`}>{tech}</Tag>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 text-left">
          <Button asChild variant="outline">
            <Link to="/industry">
              View All Work <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
