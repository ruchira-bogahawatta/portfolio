import { useState } from "react";
import { FaGithub, FaArrowRight } from "react-icons/fa";
import data from "../assets/data/projectsData";
import ProjectModal from "./ProjectModal";
import SectionHeading from "./SectionHeading";
import { Button } from "@/components/ui/button";
import { useReveal } from "@/hooks/use-reveal";

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeID, setActiveID] = useState(null);
  const ref = useReveal();

  const showModalHandler = (id) => {
    setShowModal(true);
    setActiveID(id);
  };

  // Kept after closing so the dialog can animate out with its content
  const activeProject = data.find((project) => project.id === activeID);

  return (
    <section id="projects" ref={ref} className="scroll-mt-24 py-16 md:py-24">
      <SectionHeading title="Projects" note="A look at the recent projects I have worked on." />

      <ul className="grid gap-6 md:grid-cols-2">
        {data.map((project, index) => (
          <li key={project.id} data-reveal style={{ "--i": index + 1 }}>
            <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-line transition-colors hover:border-line-strong">
              <button
                type="button"
                onClick={() => showModalHandler(project.id)}
                aria-label={`Open ${project.title} details`}
                className="block w-full overflow-hidden bg-paper-soft"
              >
                <img
                  src={project.imgUrl[0]}
                  alt={`${project.title} cover`}
                  loading="lazy"
                  className="aspect-video w-full object-cover transition-[scale] duration-500 ease-out group-hover:scale-[1.03]"
                />
              </button>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg">{project.title}</h3>
                <p className="mt-0.5 text-sm text-ink-soft">{project.kind}</p>
                <p className="mt-3 text-ink-soft">{project.description}</p>

                <ul aria-label="Built with" className="mt-4 flex flex-wrap gap-2 text-xs font-medium">
                  {project.technologies.map((tech) => (
                    <li key={tech} className="rounded-md bg-paper-soft px-2.5 py-1">
                      {tech}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-3 pt-6">
                  <Button variant="outline" onClick={() => showModalHandler(project.id)} className="h-10 px-4">
                    Details
                  </Button>
                  {project.siteUrl && (
                    <a
                      href={project.siteUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="link inline-flex items-center gap-2 text-sm font-medium"
                    >
                      {project.github ? (
                        <>
                          <FaGithub aria-hidden="true" /> Source code
                        </>
                      ) : (
                        <>
                          Visit the site <FaArrowRight className="size-3" aria-hidden="true" />
                        </>
                      )}
                    </a>
                  )}
                </div>
              </div>
            </article>
          </li>
        ))}
      </ul>

      <ProjectModal project={activeProject} open={showModal} onOpenChange={setShowModal} />
    </section>
  );
};

export default Projects;
