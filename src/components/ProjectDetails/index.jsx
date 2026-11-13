import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Tint from "@/components/Tint";
import { accentAt } from "@/lib/accents";

const ProjectDetails = ({ openModal, setOpenModal }) => {
  const project = openModal.project;

  return (
    <Dialog
      open={openModal.state}
      onOpenChange={(state) => setOpenModal((prev) => ({ ...prev, state }))}
    >
      <DialogContent className="scrollbar-thin max-h-[90vh] overflow-y-auto rounded-2xl p-0 sm:max-w-2xl">
        {project && (
          <>
            <div className="flex flex-col gap-5 p-6">
              <DialogHeader className="gap-3 pr-8">
                <Badge variant="secondary" className="capitalize">
                  {project.category}
                </Badge>
                <DialogTitle className="text-xl font-medium tracking-tight">
                  {project.title}
                </DialogTitle>
                <DialogDescription className="text-sm leading-relaxed">
                  {project.description}
                </DialogDescription>
              </DialogHeader>

              <ul className="flex flex-wrap gap-1.5">
                {project.tags.map((tag, i) => (
                  <li key={tag}>
                    <Tint color={accentAt(i)}>{tag}</Tint>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {project.webapp && project.webapp !== project.github && (
                  <Button asChild size="lg" className="px-4">
                    <a href={project.webapp} target="_blank" rel="noreferrer">
                      <ExternalLink data-icon="inline-start" />
                      View live app
                    </a>
                  </Button>
                )}
                {project.github && (
                  <Button asChild size="lg" variant="outline" className="px-4">
                    <a href={project.github} target="_blank" rel="noreferrer">
                      <FaGithub data-icon="inline-start" />
                      View code
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDetails;
