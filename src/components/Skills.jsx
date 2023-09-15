import React from "react";
import cSharp from "../assets/images/technologies/csharp.svg";
import dotNet from "../assets/images/technologies/dotnet.svg";
import express from "../assets/images/technologies/express.svg";
import flutter from "../assets/images/technologies/flutter.svg";
import html from "../assets/images/technologies/html.svg";
import javascript from "../assets/images/technologies/javascript.svg";
import nodeJs from "../assets/images/technologies/nodejs.svg";
import php from "../assets/images/technologies/php.svg";
import react from "../assets/images/technologies/react.svg";
import tailwindcss from "../assets/images/technologies/tailwindcss.svg";
import wordpress from "../assets/images/technologies/wordpress.svg";
import css from "../assets/images/technologies/css3.svg";
import dart from "../assets/images/technologies/dart.svg";
import mysql from "../assets/images/technologies/mysql.svg";
import mongodb from "../assets/images/technologies/mongodb.svg";
import SkillCard from "./SkillCard";

const Skills = () => {
  return (
    <>
      <section
        id="skills"
        className="w-full h-full min-h-[100vh] p-5 md:mt-[12%] lg:mt-[10%]"
      >
        <div className="flex w-full flex-col items-center">
          <h1 className="text-primaryBlack text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-1">
            Tech Stack
          </h1>
          <p className="text-primaryBlack font-normal text-center text-sm sm:text-lg  my-5 sm:px-10 md:px-[5rem] text-opacity-40">
            Here is an overview of the technologies I have gained hands-on
            experience with, including various libraries and frameworks, up to
            this point
          </p>
        </div>
        <div className="flex justify-center flex-col md:flex-row w-full gap-10 sm:gap-8 mt-5">
          <div className="w-full px-5 md:px-0">
            <div className="flex justify-center mb-5">
              <h2 className="font-medium text-primaryBlack">Front-End</h2>
            </div>
            <div className="grid grid-cols-2  md:grid-cols-3 gap-5 text-center px-2 lg:px-8">
              <SkillCard IconUrl={react} alt="React" />
              <SkillCard IconUrl={flutter} alt="Flutter" scale={0.9} />
              <SkillCard
                IconUrl={tailwindcss}
                alt="TailwindCSS"
                additionalClass="scale-[1.6]"
              />
              <SkillCard IconUrl={dart} alt="Dart" scale={0.5} />
              <SkillCard IconUrl={html} alt="HTML" />
              <SkillCard IconUrl={javascript} alt="Javascript" scale={90} />
              <SkillCard IconUrl={css} alt="CSS" scale={90} />
              <SkillCard IconUrl={wordpress} alt="Wordpress" />
            </div>
          </div>
          <div className="w-full px-5 md:px-0 mb-8 md:mb-0">
            <div className="flex justify-center mb-5">
              <h2 className="font-medium text-primaryBlack">Back-End & DBMS</h2>
            </div>
            <div className="grid grid-cols-2  lg:grid-cols-3 gap-5 text-center px-2 lg:px-8">
              <SkillCard IconUrl={dotNet} alt="DotNet" scale={90} />
              <SkillCard
                IconUrl={nodeJs}
                alt="Node Js"
                additionalClass="md:scale-150"
              />
              <SkillCard
                IconUrl={express}
                alt="Express"
                additionalClass="md:scale-125"
              />
              <SkillCard IconUrl={php} alt="PHP" />
              <SkillCard IconUrl={cSharp} alt="c#" scale={90} />
              <SkillCard
                IconUrl={mongodb}
                alt="MongoDB"
                additionalClass="md:scale-125"
              />
              <SkillCard
                IconUrl={mysql}
                alt="MYSQL"
                additionalClass="md:scale-125"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
