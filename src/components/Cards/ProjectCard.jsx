import { ArrowUpRight } from "lucide-react";

const categoryLabels = { "web app": "Web app", extension: "Extension", "android app": "Mobile app" };

// Numbered project card. The whole card opens the details dialog.
const ProjectCard = ({ project, index, onOpen }) => (
  <button
    type="button"
    onClick={onOpen}
    aria-haspopup="dialog"
    className="group flex h-full w-full flex-col rounded-xl border border-border bg-background p-5 text-left transition-all outline-none hover:-translate-y-0.5 hover:border-ring hover:shadow-soft focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
  >
    <span className="flex w-full items-start justify-between">
      <span className="text-3xl font-light text-muted-foreground/40 tabular-nums">
        {String(index).padStart(2, "0")}
      </span>
      <ArrowUpRight
        className="size-5 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary"
        aria-hidden
      />
    </span>

    <span className="mt-6 font-mono text-[11px] tracking-wide text-muted-foreground uppercase">
      {categoryLabels[project.category] ?? project.category}
    </span>
    <span className="mt-1 text-base font-medium tracking-tight group-hover:text-primary-deep">
      {project.title}
    </span>
    <span className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
      {project.description}
    </span>
    <span className="mt-auto pt-4 font-mono text-[11px] tracking-wide text-muted-foreground uppercase">
      {project.tags.slice(0, 3).join(" · ")}
    </span>
  </button>
);

export default ProjectCard;
