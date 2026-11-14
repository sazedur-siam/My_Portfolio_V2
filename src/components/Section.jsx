import { cn } from "@/lib/utils";
import Reveal from "./Reveal";

// Rounded panel used for the stacked page sections (Projects, Contact): a left-aligned
// heading with an optional description and an optional right-hand `aside`.
const Section = ({ id, title, description, aside, className, children }) => (
  <Reveal
    as="section"
    id={id}
    className={cn("rounded-2xl border border-border bg-sidebar p-5 sm:p-8", className)}
  >
    <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
      <div>
        <h2 className="text-lg font-medium tracking-tight">{title}</h2>
        {description && <p className="mt-1 text-sm text-muted-foreground">{description}</p>}
      </div>
      {aside}
    </div>
    {children}
  </Reveal>
);

export default Section;
