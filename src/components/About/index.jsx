import { Briefcase, Clock, Download, MapPin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import { Bio } from "@/data/constants";
import { accentAt } from "@/lib/accents";

const fields = [
  { label: "Role", value: Bio.roles[0], icon: Briefcase },
  { label: "Experience", value: Bio.experience, icon: Clock },
  { label: "Focus", value: Bio.focus, icon: Sparkles },
  { label: "Location", value: `${Bio.location} · ${Bio.availability}`, icon: MapPin },
];

const About = () => (
  <Section id="about" eyebrow="Who I am" title="About Me">
    <Reveal className="mx-auto max-w-4xl rounded-2xl border border-border bg-card p-6 md:p-8">
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
  </Section>
);

export default About;
