import { ArrowUpRight, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Tint from "@/components/Tint";
import { accentAt } from "@/lib/accents";

const stop = (event) => event.stopPropagation();

const ProjectCard = ({ project, onOpen }) => (
  <article
    onClick={onOpen}
    className="group flex h-full cursor-pointer flex-col rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-ring/60 hover:shadow-soft md:p-6"
  >
    <div className="flex items-start justify-between gap-3">
      <button
        type="button"
        onClick={(event) => {
          stop(event);
          onOpen();
        }}
        className="text-left text-base font-medium tracking-tight outline-none group-hover:text-primary-deep focus-visible:underline"
      >
        {project.title}
      </button>
      <Badge variant="secondary" className="capitalize">
        {project.category}
      </Badge>
    </div>

    <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
      {project.description}
    </p>

    <ul className="mt-4 flex flex-wrap gap-1.5">
      {project.tags.map((tag, i) => (
        <li key={tag}>
          <Tint color={accentAt(i)} className="px-2 py-0.5">
            {tag}
          </Tint>
        </li>
      ))}
    </ul>

    <div className="mt-auto flex flex-wrap items-center gap-2 pt-5">
      {project.webapp && project.webapp !== project.github && (
        <Button asChild size="sm" variant="secondary" onClick={stop}>
          <a href={project.webapp} target="_blank" rel="noreferrer">
            <ExternalLink data-icon="inline-start" />
            Live
          </a>
        </Button>
      )}
      {project.github && (
        <Button asChild size="sm" variant="outline" onClick={stop}>
          <a href={project.github} target="_blank" rel="noreferrer">
            <FaGithub data-icon="inline-start" />
            Code
          </a>
        </Button>
      )}
      <span className="ml-auto inline-flex items-center gap-1 text-xs text-muted-foreground group-hover:text-primary">
        Details
        <ArrowUpRight className="size-3.5" />
      </span>
    </div>
  </article>
);

export default ProjectCard;
