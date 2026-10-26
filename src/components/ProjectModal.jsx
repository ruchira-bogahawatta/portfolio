import { FaGithub, FaArrowRight } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import SlideShow from "./SlideShow";

const ProjectModal = ({ project, open, onOpenChange }) => {
  if (!project) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[calc(100svh-2rem)] gap-0 overflow-y-auto p-0 sm:max-w-2xl">
        <SlideShow imgUrl={project.imgUrl} title={project.title} />
        <div className="flex flex-col gap-4 p-6 sm:p-8">
          <DialogHeader className="gap-1 text-left">
            <DialogTitle className="text-2xl font-semibold tracking-tight">{project.title}</DialogTitle>
            <p className="text-sm text-ink-soft">{project.kind}</p>
          </DialogHeader>
          <DialogDescription className="text-base text-ink">{project.description}</DialogDescription>
          <p className="text-sm text-ink-soft">Built with {project.technologies.join(", ")}</p>
          {project.siteUrl && (
            <Button asChild className="h-10 self-start px-4">
              <a href={project.siteUrl} target="_blank" rel="noreferrer">
                {project.github ? (
                  <>
                    <FaGithub /> View the code
                  </>
                ) : (
                  <>
                    Visit the site <FaArrowRight />
                  </>
                )}
              </a>
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
