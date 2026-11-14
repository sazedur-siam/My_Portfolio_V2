import Chip from "@/components/Chip";

const DateLine = ({ children }) => (
  <p className="font-mono text-xs tracking-wide text-muted-foreground uppercase">{children}</p>
);

const Heading = ({ children }) => (
  <h3 className="mt-2 font-mono text-sm font-medium tracking-wide uppercase">{children}</h3>
);

const Role = ({ children }) => <p className="mt-1 text-sm text-primary-deep">{children}</p>;

const ChipList = ({ items }) => (
  <ul className="flex flex-wrap gap-1.5">
    {items.map((item) => (
      <li key={item}>
        <Chip>{item}</Chip>
      </li>
    ))}
  </ul>
);

// "Dealflow: Built ..." renders the short label before the colon in bold.
const Point = ({ text }) => {
  const match = text.match(/^([^:]{1,24}):\s(.+)$/s);
  if (!match) return text;
  return (
    <>
      <span className="font-medium text-foreground">{match[1]}:</span> {match[2]}
    </>
  );
};

const ProjectBlock = ({ project }) => (
  <li className="rounded-xl border border-border bg-background p-4">
    <div className="flex flex-wrap items-center gap-2">
      <h4 className="text-sm font-medium">{project.name}</h4>
      {project.summary && (
        <span className="text-xs text-muted-foreground">{project.summary}</span>
      )}
    </div>
    {project.stack && (
      <div className="mt-3">
        <ChipList items={project.stack} />
      </div>
    )}
    <ul className="mt-3 flex list-disc flex-col gap-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-primary">
      {project.points.map((point) => (
        <li key={point}>
          <Point text={point} />
        </li>
      ))}
    </ul>
  </li>
);

const DetailedEntry = ({ experience }) => (
  <>
    <DateLine>{experience.date}</DateLine>
    <Heading>
      {experience.company}
      {experience.location && ` — ${experience.location}`}
    </Heading>
    {experience.tagline && (
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{experience.tagline}</p>
    )}

    {experience.roles.map((role) => (
      <div key={role.title} className="mt-4">
        <Role>
          {role.title}
          {role.date && role.date !== experience.date && (
            <span className="font-mono text-xs text-muted-foreground"> · {role.date}</span>
          )}
        </Role>
        <ul className="mt-3 flex flex-col gap-3">
          {role.projects?.map((project) => (
            <ProjectBlock key={project.name} project={project} />
          ))}
        </ul>
      </div>
    ))}
  </>
);

const SimpleEntry = ({ experience }) => (
  <>
    <DateLine>{experience.date}</DateLine>
    <Heading>{experience.company}</Heading>
    <Role>{experience.role}</Role>
    {experience.desc && (
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{experience.desc}</p>
    )}
    {experience.skills && (
      <div className="mt-3">
        <ChipList items={experience.skills} />
      </div>
    )}
  </>
);

const ExperienceCard = ({ experience }) => (
  <article>
    {experience.roles ? (
      <DetailedEntry experience={experience} />
    ) : (
      <SimpleEntry experience={experience} />
    )}
  </article>
);

export default ExperienceCard;
