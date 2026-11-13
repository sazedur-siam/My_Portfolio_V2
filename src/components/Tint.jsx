import { cn } from "@/lib/utils";

// Tinted chip: the colour mixed at 10% into white for the background and 80% into the
// foreground for the text (see `.tint` in index.css).
const Tint = ({ color, className, children, as: Comp = "span", ...props }) => (
  <Comp
    className={cn(
      "tint inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium",
      className,
    )}
    style={color ? { "--c": color } : undefined}
    {...props}
  >
    {children}
  </Comp>
);

export default Tint;
