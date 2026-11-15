import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const categoryLabels = { "web app": "Web app", extension: "Extension", "android app": "Mobile app" };

// Project card with its cover image. `featured` lays it out side by side (image left, text right)
// so it can span both grid columns. The whole card opens the details dialog.
const ProjectCard = ({ project, index, featured, onOpen }) => (
  <button
    type="button"
    onClick={onOpen}
    aria-haspopup="dialog"
    className={cn(
      "group flex h-full w-full flex-col overflow-hidden rounded-xl border border-border bg-background text-left transition-all outline-none hover:-translate-y-0.5 hover:border-ring hover:shadow-soft focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
      featured && "sm:flex-row",
    )}
  >
    {project.image && (
      <span
        className={cn(
          "block aspect-[5/4] shrink-0 overflow-hidden border-b border-border bg-muted",
          featured && "sm:w-1/2 sm:border-r sm:border-b-0",
        )}
      >
        <img
          src={project.image}
          alt={project.imageAlt ?? project.title}
          loading="lazy"
          className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </span>
    )}

    <span className={cn("flex flex-1 flex-col p-5", featured && "sm:justify-center sm:p-8")}>
      <span className="flex items-center justify-between gap-3">
        <span className="font-mono text-[11px] tracking-wide text-muted-foreground uppercase">
          {String(index).padStart(2, "0")} · {categoryLabels[project.category] ?? project.category}
        </span>
        <ArrowUpRight
          className="size-5 shrink-0 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary"
          aria-hidden
        />
      </span>
      <span
        className={cn(
          "mt-2 font-medium tracking-tight group-hover:text-primary-deep",
          featured ? "text-xl" : "text-base",
        )}
      >
        {project.title}
      </span>
      <span
        className={cn(
          "mt-2 text-sm leading-relaxed text-muted-foreground",
          featured ? "line-clamp-4" : "line-clamp-2",
        )}
      >
        {project.description}
      </span>
      <span
        className={cn(
          "pt-4 font-mono text-[11px] tracking-wide text-muted-foreground uppercase",
          !featured && "mt-auto",
        )}
      >
        {project.tags.slice(0, 3).join(" · ")}
      </span>
    </span>
  </button>
);

export default ProjectCard;
