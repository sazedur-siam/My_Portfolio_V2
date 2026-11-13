import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Bio, navLinks } from "@/data/constants";

const socials = [
  { label: "LinkedIn", href: Bio.linkedin, icon: FaLinkedin },
  { label: "GitHub", href: Bio.github, icon: FaGithub },
];

const Footer = () => (
  <footer className="border-t border-border bg-sidebar">
    <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-10 sm:px-6">
      <a href="#home" className="text-lg font-medium tracking-tight">
        Sazedur <span className="text-primary">Rahman</span>
      </a>
      <nav>
        <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex gap-2">
        {socials.map(({ label, href, icon: Icon }) => (
          <Button key={label} asChild variant="outline" size="icon-lg" className="rounded-full">
            <a href={href} target="_blank" rel="noreferrer" aria-label={label}>
              <Icon />
            </a>
          </Button>
        ))}
      </div>
      <p className="text-xs text-muted-foreground">
        © {new Date().getFullYear()} {Bio.name}. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
