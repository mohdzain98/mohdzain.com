import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/layout/SectionHeader";
import TechList from "@/components/common/TechList";
import { projects } from "@/content/projects";

export default function Projects() {
  return (
    <div id="projects" className="px-4 py-12 lg:px-[9%]">
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
              className="card-tint text-card-foreground flex flex-col p-6 no-underline  transition-transform hover:scale-[0.99]"
            >
              <span className="text-primary mb-1 text-[11px] font-bold tracking-wider uppercase">
                {item.type}
              </span>
              <h3 className="text-foreground mb-2 text-xl font-semibold">
                {item.Name}
              </h3>
              <p className="text-muted-foreground text-sm">{item.Desc}</p>
              <TechList techs={item.Techs} className="mt-2" />
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
