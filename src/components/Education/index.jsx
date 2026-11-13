import { useState } from "react";
import { GraduationCap } from "lucide-react";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import { education } from "@/data/constants";

// Falls back to a tinted cap icon when the logo URL is missing or fails to load.
const SchoolLogo = ({ src, alt }) => {
  const [failed, setFailed] = useState(false);
  if (!src || failed) {
    return (
      <span className="tint flex size-12 items-center justify-center rounded-xl">
        <GraduationCap className="size-5" />
      </span>
    );
  }
  return (
    <img
      src={src}
      alt={alt}
      onError={() => setFailed(true)}
      // Dead Google thumbnail links answer with a 1x1 placeholder instead of an error.
      onLoad={(event) => event.currentTarget.naturalWidth <= 1 && setFailed(true)}
      className="size-12 rounded-xl border border-border bg-background object-contain p-1"
    />
  );
};

const Education = () => (
  <Section
    id="education"
    eyebrow="Background"
    title="Education"
    description="My academic path, from secondary school to a degree in Computer Science and Engineering."
    tone="muted"
  >
    <div className="grid gap-5 md:grid-cols-3">
      {education.map((item, index) => (
        <Reveal
          key={item.id}
          delay={index * 0.05}
          className="flex flex-col rounded-2xl border border-border bg-card p-5 transition-shadow hover:shadow-soft"
        >
          <div className="flex items-center justify-between gap-3">
            <SchoolLogo src={item.img} alt={item.school} />
            <span className="rounded-full bg-muted px-2.5 py-1 font-mono text-[11px] text-muted-foreground">
              {item.date}
            </span>
          </div>
          <h3 className="mt-4 text-base font-medium tracking-tight">{item.degree}</h3>
          <p className="mt-1 text-sm text-primary-deep">{item.school}</p>
          <p className="mt-3 line-clamp-4 text-sm leading-relaxed text-muted-foreground">
            {item.desc}
          </p>
          <p className="mt-auto pt-4 text-xs text-muted-foreground">
            Grade <span className="font-mono font-medium text-foreground">{item.grade}</span>
          </p>
        </Reveal>
      ))}
    </div>
  </Section>
);

export default Education;
