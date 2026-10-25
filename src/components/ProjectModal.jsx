import { FaGithub, FaArrowRight } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import SlideShow from "./SlideShow";

const ProjectModal = ({ project, open, onOpenChange }) => {
  if (!project) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <SlideShow imgUrl={project.imgUrl} title={project.title} />
        <DialogHeader>
          <DialogTitle className="text-base md:text-xl">{project.title}</DialogTitle>
          <DialogDescription className="text-primaryBlack">{project.description}</DialogDescription>
        </DialogHeader>
        <div className="flex items-center flex-wrap gap-2">
          <span className="font-medium text-sm">Technologies:</span>
          {project.technologies.map((item) => (
            <Badge key={item} variant="secondary">
              {item}
            </Badge>
          ))}
        </div>
        <DialogFooter>
          {project.siteUrl && (
            <Button asChild>
              <a href={project.siteUrl} target="_blank" rel="noreferrer">
                {project.github ? (
                  <>
                    <FaGithub /> Code
                  </>
                ) : (
                  <>
                    View <FaArrowRight />
                  </>
                )}
              </a>
            </Button>
          )}
          <DialogClose asChild>
            <Button variant="outline">Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
