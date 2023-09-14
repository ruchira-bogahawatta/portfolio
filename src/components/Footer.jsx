import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";

const Footer = () => {
  return (
    <>
      <section className="w-full flex justify-center items-center">
        <div className="bg-white shadow-md shadow-[#cacaca] rounded-3xl w-[80%] max-w-[300px] p-5 my-10 flex flex-col gap-2">
          <h2 className="text-primaryBlack text-opacity-70 text-lg m-auto font-semibold">
            Ruchira Bogahawatta
          </h2>
          <div className="flex items-center justify-center gap-5">
            <a
              href="https://github.com/ruchira-bogahawatta"
              target="_blank"
              className="text-2xl text-primaryBlack opacity-40 transition duration-300 ease-in-out hover:scale-110 hover:text-linkedlnColor hover:opacity-100 "
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.linkedin.com/in/ruchira-bogahawatta"
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
      </section>
    </>
  );
};

export default Footer;
