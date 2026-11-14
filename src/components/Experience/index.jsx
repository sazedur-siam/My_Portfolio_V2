import ExperienceCard from "@/components/Cards/ExperienceCard";
import ResumeRow from "@/components/ResumeRow";
import { experiences } from "@/data/constants";

// Also used for Training: pass `id`, `label` and `items`.
const Experience = ({ id = "experience", label = "Experience", items = experiences }) => (
  <ResumeRow id={id} label={label}>
    <ol className="flex flex-col divide-y divide-border">
      {items.map((item, index) => (
        <li key={item.id ?? index} className="py-6 first:pt-0 last:pb-0">
          <ExperienceCard experience={item} />
        </li>
      ))}
    </ol>
  </ResumeRow>
);

export default Experience;
