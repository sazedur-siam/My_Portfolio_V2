import { cn } from "@/lib/utils";
import Reveal from "./Reveal";

// Page section with the shared centred heading. `tone="muted"` gives the faint blue surface
// used to alternate sections.
const Section = ({ id, eyebrow, title, description, tone = "plain", className, children }) => (
  <section
    id={id}
    className={cn(
      "py-16 md:py-24",
      tone === "muted" ? "bg-sidebar border-y border-border/60" : "bg-background",
      className,
    )}
  >
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <Reveal className="mx-auto mb-10 flex max-w-2xl flex-col items-center text-center md:mb-14">
        {eyebrow && (
          <span className="mb-2 font-mono text-xs tracking-wide text-primary uppercase">
            {eyebrow}
          </span>
        )}
        <h2 className="text-2xl font-medium tracking-tight md:text-3xl">{title}</h2>
        <span className="mt-3 h-1 w-10 rounded-full bg-primary" aria-hidden />
        {description && (
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
            {description}
          </p>
        )}
      </Reveal>
      {children}
    </div>
  </section>
);

export default Section;
