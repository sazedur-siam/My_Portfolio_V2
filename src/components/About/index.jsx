import { Briefcase, Clock, Download, MapPin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import { Bio } from "@/data/constants";
import { accentAt } from "@/lib/accents";
import HeroImg from "@/images/HeroImage.png";

const fields = [
  { label: "Role", value: Bio.roles[0], icon: Briefcase },
  { label: "Experience", value: Bio.experience, icon: Clock },
  { label: "Focus", value: Bio.focus, icon: Sparkles },
  { label: "Location", value: `${Bio.location} · ${Bio.availability}`, icon: MapPin },
];

const About = () => (
  <Section id="about" eyebrow="Who I am" title="About Me">
    <div className="grid items-center gap-10 md:grid-cols-[minmax(0,320px)_1fr] lg:gap-16">
      <Reveal className="relative mx-auto w-full max-w-xs">
        <div className="overflow-hidden rounded-2xl border border-border bg-muted">
          <img src={HeroImg} alt={Bio.name} className="aspect-[4/5] w-full object-cover" />
        </div>
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium whitespace-nowrap shadow-soft">
          <span className="text-primary">{Bio.experience}</span> experience
        </div>
      </Reveal>

      <Reveal delay={0.1} className="rounded-2xl border border-border bg-card p-6 md:p-8">
        <h3 className="text-lg font-medium tracking-tight">Professional Summary</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
          {Bio.description}
        </p>

        <dl className="mt-6 grid gap-4 sm:grid-cols-2">
          {fields.map(({ label, value, icon: Icon }, i) => (
            <div key={label} className="flex items-start gap-3">
              <span
                className="tint flex size-9 shrink-0 items-center justify-center rounded-lg"
                style={{ "--c": accentAt(i) }}
              >
                <Icon className="size-4" />
              </span>
              <div>
                <dt className="text-xs text-muted-foreground">{label}</dt>
                <dd className="text-sm font-medium">{value}</dd>
              </div>
            </div>
          ))}
        </dl>

        <Button asChild size="lg" className="mt-7 h-10 px-4">
          <a href={Bio.resume} target="_blank" rel="noreferrer">
            <Download data-icon="inline-start" />
            Download CV
          </a>
        </Button>
      </Reveal>
    </div>
  </Section>
);

export default About;
