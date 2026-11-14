import { ArrowUp } from "lucide-react";
import { Bio } from "@/data/constants";

const Footer = () => (
  <footer className="flex flex-wrap items-center justify-between gap-3 py-8 text-xs text-muted-foreground">
    <p>
      © {new Date().getFullYear()} {Bio.name}
    </p>
    <a href="#top" className="inline-flex items-center gap-1 transition-colors hover:text-foreground">
      Back to top
      <ArrowUp className="size-3.5" aria-hidden />
    </a>
  </footer>
);

export default Footer;
