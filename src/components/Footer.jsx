import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import profileImg from "../assets/images/profileImg.jpg";

const Footer = () => {
  return (
    <>
      <section className="w-full flex justify-center items-center">
        <div className="bg-white shadow-md shadow-[#cacaca] rounded-3xl  max-w-[380px] p-5 my-10 flex gap-4 items-center">
          <img
            src={profileImg}
            alt="Profile Image"
            id="footerImage"
            className="heroImage rounded-full h-[80px] w-[80px] object-cover hover:scale-110 shadow-md shadow-[#cacaca] transition-all ease-in-out duration-800"
          />
          <div className="flex gap-1 flex-col items-start">
            <h2 className="text-primaryBlack text-lg lg:text-2xl font-['Dancing_Script'] m-auto font-medium text-opacity-70">
              Ruchira Bogahawatta
            </h2>
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/ruchira-bogahawatta"
                target="_blank"
                className="text-2xl text-primaryBlack opacity-40 transition duration-300 ease-in-out hover:scale-110 hover:text-linkedlnColor hover:opacity-100 "
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/ruchira-bogahawatta"
                target="_blank"
                className="text-2xl text-primaryBlack opacity-40 transition duration-300 ease-in-out hover:scale-110 hover:text-githubColor  hover:opacity-80 "
              >
                <FaGithub />
              </a>
              <a
                href="mailto:ruchira.bogahawatta@gmail.com"
                target="_blank"
                className="text-2xl text-primaryBlack opacity-40 transition duration-300 ease-in-out hover:scale-110 hover:text-primaryBlack  hover:opacity-90 "
              >
                <MdAttachEmail />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
