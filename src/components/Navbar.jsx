import React, { useState } from "react";
import { FaBars, FaTimes, FaCode, FaUserAlt, FaCoffee } from "react-icons/fa";
import backgroundImage from "../assets/images/darkmode.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [activeNav, setActiveNav] = useState("about");

  const handleClick = () => setNav(!nav);

  return (
    <>
      <div className="hidden md:flex fixed w-full justify-center left-0 top-2 z-30">
        {/* Main Menu */}
        <ul
          className="py-4 px-8 md:flex group gap-8 rounded-3xl bg-white text-center shadow-boxShadowOne text-primaryBlack cursor-pointer font-medium"
          // style={{
          //   backgroundImage: `url(${backgroundImage})`,
          //   objectFit: "contain",
          //   // Add other CSS properties as needed
          // }}
        >
          <li className="nav-link font-medium">About</li>
          <li className="nav-link font-medium">Skills</li>
          <li className="nav-link font-medium">Projects</li>
        </ul>
      </div>

      {/* Mobile Menu */}
      <div
        className={
          !nav
            ? "hidden"
            : "md:hidden w-full fixed justify-center p-3 bottom-0 right-0 bg-white rounded-tl-3xl rounded-tr-3xl  z-40 shadow-lg shadow-[rgb(27,27,27)] "
        }
      >
        <ul className="pb-12 pt-5 px-5 md:flex w-full grid grid-cols-3 gap-10 text-center  ">
          <li className=" flex flex-col gap-1 items-center text-sm text-greyColor cursor-pointer active:text-gray-300 group">
            <FaUserAlt className="text-xl group-hover:text-secondary" />
            <p className="text-primaryBlack group-hover:text-secondary">
              About
            </p>
          </li>
          <li className="flex flex-col gap-1 items-center text-sm text-greyColor cursor-pointer group">
            <FaCoffee className="text-xl group-hover:text-secondary" />
            <p className="text-primaryBlack group-hover:text-secondary">
              Skills
            </p>
          </li>
          <li className="flex flex-col gap-1 items-center text-sm text-greyColor cursor-pointer group ">
            <FaCode className="text-xl group-hover:text-secondary" />
            <p className="text-primaryBlack group-hover:text-secondary">
              Projects
            </p>
          </li>
        </ul>
      </div>

      {/* Close Icon or Hamburger Item */}
      <div
        onClick={handleClick}
        className="md:hidden right-4 fixed bottom-3 border border-greyColor p-2 rounded-md cursor-pointer z-40 text-greyColor bg-white shadow-md shadow-[#cacaca]"
      >
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
    </>
  );
};

export default Navbar;
