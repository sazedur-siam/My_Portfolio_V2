import { useEffect, useState } from "react";
import { Download, Menu } from "lucide-react";
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

const Wordmark = () => (
  <a href="#home" className="text-lg font-medium tracking-tight">
    Sazedur <span className="text-primary">Rahman</span>
  </a>
);

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // The sheet is mobile-only; close it if the viewport grows to the desktop layout.
  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 768px)");
    const close = (event) => event.matches && setOpen(false);
    desktop.addEventListener("change", close);
    return () => desktop.removeEventListener("change", close);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Wordmark />

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <Button asChild size="lg" className="hidden px-4 md:inline-flex">
          <a href={Bio.resume} target="_blank" rel="noreferrer">
            <Download data-icon="inline-start" />
            Download CV
          </a>
        </Button>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open menu">
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72 p-0">
            <SheetHeader className="border-b border-border p-4">
              <SheetTitle className="font-medium">
                Sazedur <span className="text-primary">Rahman</span>
              </SheetTitle>
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
            <div className="px-6 pt-2">
              <Button asChild size="lg" className="w-full">
                <a href={Bio.resume} target="_blank" rel="noreferrer">
                  <Download data-icon="inline-start" />
                  Download CV
                </a>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
};

export default Navbar;
