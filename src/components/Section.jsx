import { cn } from "@/lib/utils";
import Reveal from "./Reveal";

// Rounded panel used for the stacked page sections (Projects, Contact): a left-aligned
// heading with an optional description and an optional right-hand `aside`. `size="lg"` gives
// the large display heading used by Contact.
const Section = ({ id, title, description, aside, size, className, children }) => (
  <Reveal
    as="section"
    id={id}
    className={cn("rounded-2xl border border-border bg-sidebar p-5 sm:p-8", className)}
  >
    <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
      <div>
        <h2
          className={cn(
            "font-medium tracking-tight",
            size === "lg" ? "text-3xl leading-tight sm:text-4xl" : "text-lg",
          )}
        >
          {title}
        </h2>
        {description && (
          <p className={cn("text-sm text-muted-foreground", size === "lg" ? "mt-3" : "mt-1")}>
            {description}
          </p>
        )}
      </div>
      {aside}
    </div>
    {children}
  </Reveal>
);

export default Section;
