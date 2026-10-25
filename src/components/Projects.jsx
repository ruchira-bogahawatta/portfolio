import { useState } from "react";
import data from "../assets/data/projectsData";
import ProjectModal from "./ProjectModal";

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeID, setActiveID] = useState(null);

  const showModalHandler = (id) => {
    setShowModal(true);
    setActiveID(id);
  };

  // Kept after closing so the dialog can animate out with its content
  const activeProject = data.find((project) => project.id === activeID);

  return (
    <section id="projects" className="w-full h-full p-5 pt-12 sm:pt-0 mt-12 scroll-mt-24">
      <div className="flex w-full flex-col items-center">
        <h2 className="text-primaryBlack text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-1">
          Projects
        </h2>
        <p className="text-primaryBlack/50 font-normal text-center text-sm sm:text-lg px-5 sm:px-10 md:px-0 my-5">
          Take a peek at the recent projects I have worked on
        </p>
        <div className="w-full sm:w-[90%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-5 lg:px-10">
          {data.map((project) => (
            <button
              key={project.id}
              type="button"
              onClick={() => showModalHandler(project.id)}
              className="group rounded-lg overflow-hidden relative shadow-md shadow-greyColor"
            >
              <img src={project.imgUrl[0]} alt={project.title} />
              <span className="absolute inset-0 hidden items-center justify-center bg-primaryBlack/40 group-hover:flex group-focus-visible:flex">
                <span className="bg-[#fead4f] px-4 py-2 rounded-md text-white text-sm group-hover:bg-brand transition-colors">
                  See Details
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>

      <ProjectModal project={activeProject} open={showModal} onOpenChange={setShowModal} />
    </section>
  );
};

export default Projects;
