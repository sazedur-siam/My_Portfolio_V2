import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Chip from "@/components/Chip";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const ProjectDetails = ({ openModal, setOpenModal }) => {
  const project = openModal.project;

  return (
    <Dialog
      open={openModal.state}
      onOpenChange={(state) => setOpenModal((prev) => ({ ...prev, state }))}
    >
      <DialogContent className="scrollbar-thin max-h-[90vh] overflow-y-auto rounded-2xl p-0 sm:max-w-2xl">
        {project && (
          <div className="flex flex-col gap-5 p-6 md:p-8">
            <DialogHeader className="gap-2 pr-8 text-left">
              <p className="font-mono text-[11px] tracking-wide text-primary uppercase">
                {project.category}
              </p>
              <DialogTitle className="text-2xl font-medium tracking-tight">
                {project.title}
              </DialogTitle>
              <DialogDescription className="text-sm leading-relaxed">
                {project.description}
              </DialogDescription>
            </DialogHeader>

            <ul className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <li key={tag}>
                  <Chip>{tag}</Chip>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 border-t border-border pt-5">
              {project.webapp && project.webapp !== project.github && (
                <Button asChild size="lg" className="h-10 px-4">
                  <a href={project.webapp} target="_blank" rel="noreferrer">
                    <ExternalLink data-icon="inline-start" />
                    View live app
                  </a>
                </Button>
              )}
              {project.github && (
                <Button asChild size="lg" variant="outline" className="h-10 px-4">
                  <a href={project.github} target="_blank" rel="noreferrer">
                    <FaGithub data-icon="inline-start" />
                    View code
                  </a>
                </Button>
              )}
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDetails;
