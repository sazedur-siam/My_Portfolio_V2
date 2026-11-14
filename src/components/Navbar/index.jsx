import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Bio, navLinks } from "@/data/constants";
import { cn } from "@/lib/utils";

const city = Bio.location.split(",")[0];

const socials = [
  { label: "GitHub", href: Bio.github, icon: FaGithub },
  { label: "LinkedIn", href: Bio.linkedin, icon: FaLinkedin },
];

const formatTime = () =>
  new Intl.DateTimeFormat("en-US", {
    timeZone: Bio.timezone,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(new Date());

// Live local time in Bio.timezone, so remote employers see the time difference at a glance.
const useLocalTime = () => {
  const [time, setTime] = useState(formatTime);
  useEffect(() => {
    const timer = setInterval(() => setTime(formatTime()), 1000);
    return () => clearInterval(timer);
  }, []);
  return time;
};

// Highlights the nav link of the section currently in the middle of the viewport.
const useActiveSection = () => {
  const [active, setActive] = useState("");
  useEffect(() => {
    const sections = navLinks.map((link) => document.querySelector(link.href)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => entry.isIntersecting && setActive(`#${entry.target.id}`));
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  return active;
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const time = useLocalTime();
  const active = useActiveSection();

  // The sheet is mobile-only; close it if the viewport grows to the desktop layout.
  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 768px)");
    const close = (event) => event.matches && setOpen(false);
    desktop.addEventListener("change", close);
    return () => desktop.removeEventListener("change", close);
  }, []);

  return (
    <header className="sticky top-0 z-40 -mx-4 bg-background/85 px-4 backdrop-blur-md sm:-mx-6 sm:px-6">
      <nav className="flex h-16 items-center justify-between gap-4">
        <p className="flex items-baseline gap-2 text-xs">
          <time className="font-mono font-medium tabular-nums">{time}</time>
          <span className="text-muted-foreground">{city}</span>
        </p>

        <ul className="hidden items-center md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                aria-current={active === link.href ? "true" : undefined}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm transition-colors hover:text-foreground",
                  active === link.href ? "text-primary" : "text-muted-foreground",
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1.5">
          {socials.map(({ label, href, icon: Icon }) => (
            <Button key={label} asChild variant="outline" size="icon" aria-label={label}>
              <a href={href} target="_blank" rel="noreferrer">
                <Icon />
              </a>
            </Button>
          ))}

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open menu">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 p-0">
              <SheetHeader className="border-b border-border p-4">
                <SheetTitle className="font-medium">{Bio.name}</SheetTitle>
                <SheetDescription>{Bio.title}</SheetDescription>
              </SheetHeader>
              <ul className="flex flex-col gap-1 px-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-lg px-3 py-2.5 text-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
