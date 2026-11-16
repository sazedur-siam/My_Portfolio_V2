import { cn } from "@/lib/utils";
import Reveal from "./Reveal";

// One row of the résumé block: a mono label on the left, a middle column, and a panel on the
// right. Only the work rows (Experience, Training) pass `timeline`, which draws a
// dot and a connector line in the middle column: "first" starts the line at its dot, "last"
// ends it there, and "middle" runs it straight through. Timeline rows must be adjacent siblings.
const ResumeRow = ({ id, label, timeline, children }) => (
  <section
    id={id}
    className="group/row grid md:grid-cols-[150px_24px_minmax(0,1fr)] md:gap-x-5"
  >
    <div className="pb-3 md:pb-0">
      <h2 className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-3 py-1.5 font-mono text-xs font-medium tracking-wide uppercase">
        <span className="size-1.5 rounded-full bg-primary" aria-hidden />
        {label}
      </h2>
    </div>

    <div className="relative hidden md:block" aria-hidden>
      {timeline && (
        <>
          <span
            className={cn(
              "absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-input",
              timeline === "first" && "top-4",
              timeline === "last" && "bottom-auto h-4",
            )}
          />
          <span className="absolute top-4 left-1/2 size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary ring-4 ring-background" />
        </>
      )}
    </div>

    <Reveal className="min-w-0 pb-4 group-last/row:pb-0">
      <div className="rounded-2xl border border-border bg-sidebar p-5 md:p-6">{children}</div>
    </Reveal>
  </section>
);

export default ResumeRow;
