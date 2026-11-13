import { useState } from "react";
import ProjectCard from "@/components/Cards/ProjectCard";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { projects } from "@/data/constants";

const filters = [
  { value: "all", label: "All" },
  { value: "web app", label: "Web" },
  { value: "extension", label: "Extensions" },
  { value: "android app", label: "Mobile" },
];

const Projects = ({ setOpenModal }) => {
  const [filter, setFilter] = useState("all");
  const visible =
    filter === "all" ? projects : projects.filter((project) => project.category === filter);

  return (
    <Section
      id="projects"
      eyebrow="Work"
      title="Projects"
      description="Side projects across web, browser and editor extensions, and mobile, from AI tooling to full-stack apps."
      tone="muted"
    >
      <div className="mb-8 flex justify-center">
        <Tabs value={filter} onValueChange={setFilter}>
          <TabsList className="h-10! rounded-full border border-border bg-background p-1">
            {filters.map((item) => (
              <TabsTrigger
                key={item.value}
                value={item.value}
                className="rounded-full px-4 data-active:bg-secondary data-active:text-secondary-foreground data-active:shadow-none!"
              >
                {item.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {visible.map((project, index) => (
          <Reveal key={project.id} delay={(index % 2) * 0.05} className="h-full">
            <ProjectCard
              project={project}
              onOpen={() => setOpenModal({ state: true, project })}
            />
          </Reveal>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
