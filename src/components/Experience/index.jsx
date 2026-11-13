import ExperienceCard from "@/components/Cards/ExperienceCard";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import { experiences } from "@/data/constants";

const Experience = ({
  id = "experience",
  eyebrow = "Career",
  title = "Work Experience",
  description = "Where I've worked and what I've built: production apps for Scandinavian clients and internal AI tools.",
  items = experiences,
  tone = "plain",
}) => (
  <Section id={id} eyebrow={eyebrow} title={title} description={description} tone={tone}>
    <ol className="relative mx-auto max-w-4xl border-l border-border pl-6 md:pl-10">
      {items.map((item, index) => (
        <li key={item.id ?? index} className="relative pb-8 last:pb-0">
          <span
            className="absolute top-6 -left-[calc(1.5rem+5px)] size-2.5 rounded-full bg-primary ring-4 ring-secondary md:-left-[calc(2.5rem+5px)]"
            aria-hidden
          />
          <Reveal delay={index * 0.05}>
            <ExperienceCard experience={item} />
          </Reveal>
        </li>
      ))}
    </ol>
  </Section>
);

export default Experience;
