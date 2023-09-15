import React from "react";
import profileImage from "../assets/images/heroImage.png";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <>
      <section id="hero" className="w-full h-screen">
        <div className="flex flex-col md:flex-row pt-[20%] sm:pt-0 sm:justify-center items-center h-full gap-2 sm:gap-8 sm:px-8">
          <div className="flex justify-center rounded-[50%] md:mb-5 ">
            <img
            className="heroImage w-[100%] max-w-[300px] sm:max-w-[350px] heroFadeIn"
              src={profileImage}
              alt="Profile Image"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col text-center md:w-[50%] md:text-left">
            <h1 className="text-primaryBlack text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-1">
              Hello there!
            </h1>
            <p className="text-secondary font-medium md:font-normal text-lg sm:text-xl md:text-2xl mb-3">
              <TypeAnimation
                sequence={[
                  "I'm Ruchira Bogahawatta",
                  1000,
                  "A Full Stack Developer",
                  1000,
                  "An Undergraduate at UCSC",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </p>
            <p className="text-primaryBlack font-normal text-center text-sm sm:text-lg px-5 sm:px-10 md:px-0 text-opacity-80 md:text-justify">
              A driven undergraduate pursuing a BSc (Hons) in Information
              Systems at the University of Colombo School of Computing with the
              aim of building expertise in the field of Software Engineering
            </p>
            <div>
              {/* Social Icons */}
              <ul className="flex justify-center md:justify-start gap-4 mt-2">
                <li className="text-primaryBlack opacity-40 text-3xl transition duration-300 ease-in-out hover:scale-110 hover:text-githubColor  hover:opacity-80 ">
                  <a
                    href="https://github.com/ruchira-bogahawatta"
                    target="_blank"
                  >
                    <FaGithub />
                  </a>
                </li>
                <li className="text-3xl text-primaryBlack opacity-40 transition duration-300 ease-in-out hover:scale-110 hover:text-linkedlnColor  hover:opacity-100 ">
                  <a
                    href="https://www.linkedin.com/in/ruchira-bogahawatta"
                    target="_blank"
                  >
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
export default Hero;
