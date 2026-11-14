import Chip from "@/components/Chip";
import ResumeRow from "@/components/ResumeRow";
import { skills } from "@/data/constants";

// Tools shown as a row of brand-coloured logos under the grouped chips.
const featured = [
  "TypeScript",
  "JavaScript",
  "Python",
  "React",
  "Next.js",
  "TanStack Query",
  "Node.js",
  "PostgreSQL",
  "MongoDB",
  "Docker",
  "GitHub Actions",
  "Claude Code",
  "Gemini API",
];

const byName = new Map(skills.flatMap((group) => group.skills).map((s) => [s.name, s]));
const logos = featured.map((name) => byName.get(name)).filter((s) => s?.icon);

const Skills = () => (
  <ResumeRow id="skills" label="Skills">
    <div className="flex flex-col gap-4">
      {skills.map((group) => (
        <div key={group.title} className="flex flex-col gap-2 sm:flex-row sm:gap-4">
          <h3 className="shrink-0 pt-1.5 font-mono text-[11px] tracking-wide text-muted-foreground uppercase sm:w-36">
            {group.title}
          </h3>
          <ul className="flex flex-wrap gap-1.5">
            {group.skills.map(({ name }) => (
              <li key={name}>
                <Chip>{name}</Chip>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>

    <ul className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-3 border-t border-border pt-6">
      {logos.map(({ name, icon: Icon, color, iconBg }) => (
        <li key={name} title={name}>
          <Icon
            role="img"
            aria-label={name}
            className="size-7 transition-transform hover:-translate-y-0.5"
            style={{ color, background: iconBg, borderRadius: iconBg ? 2 : undefined }}
          />
        </li>
      ))}
    </ul>
  </ResumeRow>
);

export default Skills;
