import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import { skills } from "@/data/constants";
import { accentAt } from "@/lib/accents";

const Skills = () => (
  <Section
    id="skills"
    eyebrow="Toolbox"
    title="Skills & Tools"
    description="The languages, frameworks and tools I use day to day."
  >
    <div className="grid gap-5 md:grid-cols-2">
      {skills.map((group, groupIndex) => {
        const color = accentAt(groupIndex);
        return (
          <Reveal
            key={group.title}
            delay={(groupIndex % 3) * 0.05}
            className="rounded-2xl border border-border bg-card p-5"
          >
            <div className="mb-4 flex items-center gap-2">
              <span className="h-4 w-1 rounded-full" style={{ background: color }} aria-hidden />
              <h3 className="text-sm font-medium">{group.title}</h3>
              <span className="ml-auto font-mono text-xs text-muted-foreground">
                {group.skills.length}
              </span>
            </div>
            <ul className="flex flex-wrap gap-2">
              {group.skills.map(({ name, icon: Icon }) => (
                <li
                  key={name}
                  className="flex items-center gap-2 rounded-xl border border-border/70 py-1.5 pr-3 pl-1.5 transition-colors hover:bg-muted"
                >
                  <span
                    className="tint flex size-7 shrink-0 items-center justify-center rounded-lg"
                    style={{ "--c": color }}
                  >
                    {Icon && <Icon className="size-4" />}
                  </span>
                  <span className="text-sm font-medium">{name}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        );
      })}
    </div>
  </Section>
);

export default Skills;
