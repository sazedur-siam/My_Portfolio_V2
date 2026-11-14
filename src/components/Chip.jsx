import { cn } from "@/lib/utils";

// Small mono, uppercase, bordered tag used for skills and tech stacks.
const Chip = ({ className, children }) => (
  <span
    className={cn(
      "inline-flex rounded-md border border-border bg-background px-2 py-1 font-mono text-[11px] tracking-wide uppercase",
      className,
    )}
  >
    {children}
  </span>
);

export default Chip;
