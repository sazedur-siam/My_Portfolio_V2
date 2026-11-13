import { Badge } from "@/components/ui/badge";
import Tint from "@/components/Tint";
import { accentAt } from "@/lib/accents";

const Logo = ({ src, alt }) =>
  src ? (
    <img
      src={src}
      alt={alt}
      className="size-12 shrink-0 rounded-xl border border-border bg-background object-contain p-1"
    />
  ) : null;

const DateBadge = ({ children }) => (
  <span className="shrink-0 rounded-full bg-muted px-2.5 py-1 font-mono text-[11px] whitespace-nowrap text-muted-foreground">
    {children}
  </span>
);

const ChipList = ({ items }) => (
  <ul className="flex flex-wrap gap-1.5">
    {items.map((item, i) => (
      <li key={item}>
        <Tint color={accentAt(i)} className="px-2 py-0.5">
          {item}
        </Tint>
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
  <div className="rounded-xl border border-border bg-sidebar p-4">
    <div className="flex flex-wrap items-center gap-2">
      <h5 className="text-sm font-medium">{project.name}</h5>
      {project.type && (
        <Badge variant="secondary" className="capitalize">
          {project.type}
        </Badge>
      )}
      {project.summary && (
        <span className="text-xs text-muted-foreground">· {project.summary}</span>
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
  </div>
);

const DetailedCard = ({ experience }) => (
  <>
    <div className="flex items-start gap-4">
      <Logo src={experience.img} alt={experience.company} />
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-start justify-between gap-2">
          <div>
            <h3 className="text-base font-medium tracking-tight">{experience.company}</h3>
            {experience.location && (
              <p className="text-xs text-muted-foreground">{experience.location}</p>
            )}
          </div>
          <DateBadge>{experience.date}</DateBadge>
        </div>
        {experience.tagline && (
          <p className="mt-2 text-sm text-muted-foreground">{experience.tagline}</p>
        )}
      </div>
    </div>

    {experience.roles.map((role) => (
      <div key={role.title} className="mt-6">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2 border-b border-border pb-2">
          <h4 className="text-sm font-medium text-primary-deep">
            {role.title}
            {role.team && <span className="text-muted-foreground"> · {role.team}</span>}
          </h4>
          {role.date && role.date !== experience.date && <DateBadge>{role.date}</DateBadge>}
        </div>
        <div className="flex flex-col gap-3">
          {role.projects?.map((project) => (
            <ProjectBlock key={project.name} project={project} />
          ))}
        </div>
      </div>
    ))}
  </>
);

const SimpleCard = ({ experience }) => (
  <>
    <div className="flex items-start gap-4">
      <Logo src={experience.img} alt={experience.company} />
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-start justify-between gap-2">
          <div>
            <h3 className="text-base font-medium tracking-tight">{experience.role}</h3>
            <p className="text-xs text-muted-foreground">{experience.company}</p>
          </div>
          <DateBadge>{experience.date}</DateBadge>
        </div>
      </div>
    </div>
    {experience.desc && (
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{experience.desc}</p>
    )}
    {experience.skills && (
      <div className="mt-4">
        <ChipList items={experience.skills} />
      </div>
    )}
  </>
);

const ExperienceCard = ({ experience }) => (
  <article className="rounded-2xl border border-border bg-card p-5 transition-shadow hover:shadow-soft md:p-6">
    {experience.roles ? (
      <DetailedCard experience={experience} />
    ) : (
      <SimpleCard experience={experience} />
    )}
  </article>
);

export default ExperienceCard;
