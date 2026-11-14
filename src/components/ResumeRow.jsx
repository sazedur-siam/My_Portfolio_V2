import Reveal from "./Reveal";

// One row of the résumé block (About, Skills, Experience, Education): a mono label on the
// left, a connector line with a dot in the middle, and a panel on the right. Rows must be
// siblings so the line runs continuously from the first dot to the last.
const ResumeRow = ({ id, label, children }) => (
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
      <span className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-input group-first/row:top-4 group-last/row:bottom-auto group-last/row:h-4" />
      <span className="absolute top-4 left-1/2 size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary ring-4 ring-background" />
    </div>

    <Reveal className="min-w-0 pb-4 group-last/row:pb-0">
      <div className="rounded-2xl border border-border bg-sidebar p-5 md:p-6">{children}</div>
    </Reveal>
  </section>
);

export default ResumeRow;
