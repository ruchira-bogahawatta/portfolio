import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import profileImage from "../assets/images/prof.jpeg";
import { GoLink } from "react-icons/go";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <>
      <section name="hero" className="w-full h-screen p-5 bg-backgroundColor">
        <div className="flex flex-col md:flex-row justify-center items-center h-full  gap-3 sm:gap-5 md:gap-10 md:px-10">
          <div className="flex justify-center">
            <img
              className="heroImage w-[80%] max-w-[350px] "
              src={profileImage}
              alt="Profile Image"
            />
          </div>
          <div className="flex flex-col text-center md:w-[50%] md:text-left">
            <h1 className="text-primaryBlack text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-1">
              Hello there!
            </h1>
            <p className="text-greyColor font-medium text-lg sm:text-xl md:text-2xl mb-3">
              I am Ruchira Bogahawatta
            </p>
            <p className="text-primaryBlack font-normal text-center md:text-left text-sm sm:text-lg px-5 sm:px-10 md:px-0 text-opacity-80">
              I'm an enthusiastic Full-Stack Developer, motivated by self-drive,
              currently pursuing a BSc (Hons) in Information Systems degree at
              UCSC
            </p>
            <div>
              {/* Social Icons */}
              <ul className="flex justify-center md:justify-start gap-4 mt-3">
                <li className="text-greyColor  text-2xl md:text-3xl hover:text-githubColor transition duration-300 ease-in-out hover:scale-110">
                  <a href="">
                    <FaGithub />
                  </a>
                </li>
                <li className="text-greyColor text-2xl md:text-3xl hover:text-linkedlnColor transition duration-300 ease-in-out hover:scale-110">
                  <a href="">
                    <FaLinkedin />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
// I am Ruchira Bogahawatta These are the Typer Lines
// a Full Stack Developer
// Following BSc(Hons) in Information Systems @ UCSC
export default Hero;
