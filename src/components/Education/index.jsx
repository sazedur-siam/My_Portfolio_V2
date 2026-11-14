import ResumeRow from "@/components/ResumeRow";
import { education } from "@/data/constants";

const Education = () => (
  <ResumeRow id="education" label="Education">
    <ol className="flex flex-col divide-y divide-border">
      {education.map((item) => (
        <li key={item.id} className="py-5 first:pt-0 last:pb-0">
          <p className="font-mono text-xs tracking-wide text-muted-foreground uppercase">
            {item.date}
          </p>
          <h3 className="mt-2 font-mono text-sm font-medium tracking-wide uppercase">
            {item.degree}
          </h3>
          <p className="mt-1 text-sm text-primary-deep">
            {item.school}
            <span className="text-muted-foreground"> · </span>
            <span className="font-mono text-xs text-muted-foreground">
              {/^\d/.test(item.grade) ? `GPA ${item.grade}` : item.grade}
            </span>
          </p>
          {item.desc && (
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
          )}
        </li>
      ))}
    </ol>
  </ResumeRow>
);

export default Education;
