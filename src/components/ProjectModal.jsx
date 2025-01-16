import React from "react";
import projects from "../assets/data/projectsData";
import { FaGithub, FaArrowRight } from "react-icons/fa";
import SlideShow from "./SlideShow";

const ProjectModal = ({ activeID, setShowModal }) => {
  const project = projects.find((project) => project.id === activeID);

  return (
    <>
      <div className="w-full h-full fixed top-0 left-0 z-30 bg-primaryBlack bg-opacity-50">
        <div
          className="w-[90%] sm:w-[65%] lg:w-[50%] max-w-[450px] absolute top-1/2 left-1/2 z-40 bg-white rounded-md 
        transform -translate-x-1/2 -translate-y-1/2 p-5 md:p-7"
        >
          <figure>
            <SlideShow imgUrl={project.imgUrl} />
          </figure>
          <div className="flex flex-col w-full gap-2">
            <h2 className="text-base md:text-xl text-primaryBlack mt-3 font-semibold ">{project.title}</h2>
            <p className="text-sm text-justify">{project.description}</p>
            <div className="flex items-center flex-wrap gap-2 mt-2 ">
              <h4 className="font-medium text-sm">Technologies : </h4>
              {project.technologies.map((item, index) => (
                <span
                  key={index}
                  className="text-sm bg-greyColor bg-opacity-50 py-1 px-2 rounded-md text-primaryBlack text-opacity-70 leading-0"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="flex justify-between mt-2">
              {project.siteUrl ? (
                <button className="text-sm rounded-md bg-secondary py-2 px-4 cursor-pointer hover:bg-secondaryAccent text-white ease-in duration-200">
                  {project.github ? (
                    <a href={project.siteUrl} target="_blank" className="flex gap-1 items-center">
                      <FaGithub className="text-2xl " /> Code
                    </a>
                  ) : (
                    <a href={project.siteUrl} target="_blank" className="flex gap-[3px] items-center">
                      View <FaArrowRight className="text-base" />
                    </a>
                  )}
                </button>
              ) : (
                <div></div>
              )}

              <button
                onClick={() => setShowModal(false)}
                className="text-sm rounded-md text-dangerColor bg-back py-2 px-4 cursor-pointer border border-solid Z border-dangerColor ease-in duration-200 hover:bg-dangerColor hover:text-white"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectModal;
