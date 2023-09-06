import React from "react";
import cSharp from "../assets/images/csharp.svg";
import dotNet from "../assets/images/dotnet.svg";
import express from "../assets/images/express.svg";
import flutter from "../assets/images/flutter.svg";
import html from "../assets/images/html.svg";
import javascript from "../assets/images/javascript.svg";
import nodeJs from "../assets/images/nodejs.svg";
import php from "../assets/images/php.svg";
import react from "../assets/images/react.svg";
import tailwindcss from "../assets/images/tailwindcss.svg";
import wordpress from "../assets/images/wordpress.svg";
import css from "../assets/images/css3.svg";
import dart from "../assets/images/dart.svg";
import mysql from "../assets/images/mysql.svg";
import mongodb from "../assets/images/mongodb.svg";

const Skills = () => {
  return (
    <>
      <section
        name="skills"
        className="w-full h-full min-h-[100vh] p-5 bg-backgroundColor"
      >
        <div className="flex w-full flex-col items-center">
          <h1 className="text-primaryBlack text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-1">
            Tech Stack
          </h1>
          <p className="text-primaryBlack font-normal text-center text-sm sm:text-lg px-5 sm:px-10 md:px-0 text-opacity-50">
            These are the technologies I've had hands-on experience with,
            including various libraries and frameworks.
          </p>
        </div>
        <div className="flex justify-center flex-col md:flex-row w-full gap-8 mt-10">
          <div className="w-full px-5 md:px-0">
            <div className="flex justify-center mb-5">
              <h2 className="font-medium text-primaryBlack">Front-End</h2>
            </div>
            <div className="grid grid-cols-2  md:grid-cols-3 gap-5 text-center px-2 lg:px-8">
              <div className="rounded-lg shadow-md shadow-[#cacaca] p-2">
                <img
                  className="w-[50%] max-w-[50px] mx-auto"
                  src={react}
                  alt="React icon"
                />
              </div>
              <div className="rounded-lg shadow-md shadow-[#cacaca] p-2">
                <img
                  className="w-[50%] max-w-[50px] mx-auto scale-90"
                  src={flutter}
                  alt="Flutter icon"
                />
              </div>
              <div className="rounded-lg shadow-md shadow-[#cacaca] p-2">
                <img
                  className="w-[70%] max-w-[50px] scale-150 mx-auto object-cover"
                  src={tailwindcss}
                  alt="TailwindCSS icon"
                />
              </div>
              <div className="rounded-lg shadow-md shadow-[#cacaca] p-2">
                <img
                  className="w-[50%] max-w-[50px] mx-auto"
                  src={dart}
                  alt="Dart icon"
                />
              </div>
              <div className="rounded-lg shadow-md shadow-[#cacaca] p-2">
                <img
                  className="w-[50%] max-w-[50px] mx-auto"
                  src={html}
                  alt="HTML icon"
                />
              </div>
              <div className="rounded-lg shadow-md shadow-[#cacaca] p-2">
                <img
                  className="w-[50%] max-w-[50px] mx-auto"
                  src={javascript}
                  alt="Javascript icon"
                />
              </div>
              <div className="rounded-lg shadow-md shadow-[#cacaca] p-2">
                <img
                  className="w-[50%] max-w-[50px] mx-auto"
                  src={css}
                  alt="CSS icon"
                />
              </div>
              <div className="rounded-lg shadow-md shadow-[#cacaca] p-2">
                <img
                  className="w-[50%] max-w-[50px] mx-auto"
                  src={wordpress}
                  alt="Wordpress icon"
                />
              </div>
            </div>
          </div>
          <div className="w-full px-5 md:px-0 mb-8 md:mb-0">
            <div className="flex justify-center mb-5">
              <h2 className="font-medium text-primaryBlack">Back-End & DBMS</h2>
            </div>
            <div className="grid grid-cols-2  md:grid-cols-3 gap-5 text-center px-2 lg:px-8">
              <div className="rounded-lg shadow-md shadow-[#cacaca] p-2">
                <img
                  className="w-[50%] max-w-[50px] mx-auto scale-90"
                  src={dotNet}
                  alt="DotNet Core icon"
                />
              </div>
              <div className="rounded-lg shadow-md shadow-[#cacaca] p-2">
                <img
                  className="w-[50%] max-w-[50px] md:scale-150 mx-auto"
                  src={nodeJs}
                  alt="Node Js icon"
                />
              </div>
              <div className="rounded-lg shadow-md shadow-[#cacaca] p-2">
                <img
                  className="w-[50%] max-w-[50px] mx-auto md:scale-150"
                  src={express}
                  alt="Express icon"
                />
              </div>
              <div className="rounded-lg shadow-md shadow-[#cacaca] p-2">
                <img
                  className="w-[50%] max-w-[50px] mx-auto"
                  src={php}
                  alt="PHP icon"
                />
              </div>
              <div className="rounded-lg shadow-md shadow-[#cacaca] p-2">
                <img
                  className="w-[50%] max-w-[50px] mx-auto scale-90"
                  src={cSharp}
                  alt="c# icon"
                />
              </div>
              <div className="rounded-lg shadow-md shadow-[#cacaca] p-2">
                <img
                  className="w-[50%] max-w-[50px] mx-auto md:scale-125"
                  src={mongodb}
                  alt="MongoDB icon"
                />
              </div>
              <div className="rounded-lg shadow-md shadow-[#cacaca] p-2">
                <img
                  className="w-[50%] max-w-[50px] mx-auto md:scale-125"
                  src={mysql}
                  alt="MYSQL icon"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
