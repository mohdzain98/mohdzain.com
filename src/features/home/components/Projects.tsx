import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/layout/SectionHeader";
import Tag from "@/components/common/Tag";
import { projects } from "@/content/projects";

export default function Projects() {
  return (
    <div id="projects" className="home-accent-section px-4 py-12 lg:px-[9%]">
      <div className="container mx-auto mt-6 px-4 md:px-2">
        <SectionHeader
          title="Projects"
          subtitle="Selected builds across Gen AI, machine learning, computer vision, and full-stack product work."
        />
        <div className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {projects.map((item) => (
            <a
              key={item.Name}
              href={item.Live}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card text-card-foreground flex flex-col rounded-lg border p-6 no-underline  transition-transform hover:scale-[0.99]"
            >
              <span className="text-primary mb-1 text-[11px] font-bold tracking-wider uppercase">
                {item.type}
              </span>
              <h3 className="text-foreground mb-2 text-xl font-semibold">
                {item.Name}
              </h3>
              <p className="text-muted-foreground text-sm">{item.Desc}</p>
              <p className="mb-1 text-sm">Tech Stack:</p>
              <ul className="m-0 flex list-none flex-wrap gap-1.5 p-0">
                {item.Techs.map((f) => (
                  <li key={f}>
                    <Tag>{f}</Tag>
                  </li>
                ))}
              </ul>
            </a>
          ))}
        </div>
        <p className="mt-6 text-left">
          <Button asChild variant="outline">
            <Link to="/projects">
              More Projects <ArrowRight className="size-4" />
            </Link>
          </Button>
        </p>
      </div>
    </div>
  );
}
