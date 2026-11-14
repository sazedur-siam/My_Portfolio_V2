import ProjectCard from "@/components/Cards/ProjectCard";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import { projects } from "@/data/constants";
import { cn } from "@/lib/utils";

const Projects = ({ setOpenModal }) => (
  <Section
    id="projects"
    title="Projects"
    description="Side projects across web, editor extensions and mobile, from AI tooling to full-stack apps."
  >
    <div className="grid gap-3 sm:grid-cols-2">
      {projects.map((project, index) => (
        <Reveal
          key={project.id}
          delay={(index % 2) * 0.05}
          // With an odd count, the first project spans both columns so the grid ends evenly.
          className={cn(index === 0 && projects.length % 2 === 1 && "sm:col-span-2")}
        >
          <ProjectCard
            project={project}
            index={index + 1}
            onOpen={() => setOpenModal({ state: true, project })}
          />
        </Reveal>
      ))}
    </div>
  </Section>
);

export default Projects;
