import ResumeRow from "@/components/ResumeRow";
import { Bio } from "@/data/constants";

const About = () => (
  <ResumeRow id="about" label="About me">
    <p className="text-xl leading-snug font-medium tracking-tight sm:text-2xl">
      {Bio.aboutLead[0]} <span className="text-muted-foreground">{Bio.aboutLead[1]}</span>
    </p>
    <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">{Bio.description}</p>

    <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-border pt-6 sm:grid-cols-4">
      {Bio.stats.map((stat) => (
        <div key={stat.label} className="flex flex-col-reverse justify-end gap-1.5">
          <dt className="font-mono text-[11px] leading-snug tracking-wide text-muted-foreground uppercase">
            {stat.label}
          </dt>
          <dd className="text-3xl font-medium tracking-tight">{stat.value}</dd>
        </div>
      ))}
    </dl>
  </ResumeRow>
);

export default About;
