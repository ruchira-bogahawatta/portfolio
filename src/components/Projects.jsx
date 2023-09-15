import React, { useState } from "react";
import data from "../assets/data/projectsData";
import ProjectModal from "./ProjectModal";
import "react-slideshow-image/dist/styles.css";

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeID, setActiveID] = useState(null);

  const showModalHandler = (id) => {
    setShowModal(true);
    setActiveID(id);
  };

  return (
    <section
      id="projects"
      className="w-full h-full p-5 pt-12 sm:pt-0 mt-[3rem]"
    >
      <div className="flex w-full flex-col items-center">
        <h1 className="text-primaryBlack text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-1">
          Projects
        </h1>
        <p className="text-primaryBlack font-normal text-center text-sm sm:text-lg px-5 sm:px-10 md:px-0 text-opacity-50 my-5">
          Take a peek at the recent projects I have worked on
        </p>
        <div className="w-[100%] sm:w-[90%]  grid grid-cols-1  sm:grid-cols-2  lg:grid-cols-3  gap-5 text-center px-5 lg:px-10">
          {data?.map((project, index) => (
            <div key={index} className="group rounded-lg overflow-hidden relative z-[1]  shadow-md shadow-[#cacaca]">
              <figure>
                <img src={project.imgUrl[0]} alt="Project" />
              </figure>
              <div className="bg-primaryBlack cursor-pointer bg-opacity-40 absolute w-full h-full top-0 left-0 z-[5] hidden group-hover:block ">
                <div className="w-full h-full flex items-center justify-center">
                  <button
                    onClick={() => showModalHandler(project.id)}
                    className="bg-secondary px-4 py-2 rounded-md text-white font-normal text-sm hover:bg-secondaryAccent ease-in duration-200"
                  >
                    See Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showModal && (
        <ProjectModal setShowModal={setShowModal} activeID={activeID} />
      )}
    </section>
  );
};

export default Projects;
