import React, { useState } from "react";
import { Link } from "react-scroll";
import {
  FaBars,
  FaTimes,
  FaCode,
  FaUserAlt,
  FaCoffee,
  FaShapes,
} from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <>
      <div className="hidden md:flex fixed w-full justify-center left-0 top-2 z-30">
        {/* Main Menu */}
        <ul
          className="py-4 px-8 md:flex group gap-8 rounded-3xl bg-white text-center shadow-boxShadowOne text-primaryBlack cursor-pointer font-medium"
        >
          <li className="nav-link font-medium">
            <Link
              activeClass="active"
              to="hero"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              {" "}
              About
            </Link>
          </li>
          <li className="nav-link font-medium">
            {" "}
            <Link
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              {" "}
              Skills
            </Link>{" "}
          </li>
          <li className="nav-link font-medium">
            {" "}
            <Link
              activeClass="active"
              to="background"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              {" "}
              Background
            </Link>
          </li>
          <li className="nav-link font-medium">
            {" "}
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              {" "}
              Projects
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      <div
        className={
          !nav
            ? "hidden"
            : "md:hidden fixed justify-center p-3 bottom-0 right-0 bg-white rounded-tl-3xl rounded-tr-3xl  z-40 shadow-md shadow-[#cacaca] "
        }
      >
        <ul className="pb-12 pt-5 px-5 md:flex w-full grid grid-cols-2 grid-rows-2 gap-10 text-center  ">
          <li className=" flex flex-col gap-1 items-center text-sm text-greyColor cursor-pointer active:text-gray-300 group">
            <Link
              activeClass="active"
              to="hero"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="nav-link flex items-center flex-col group-hover:text-secondary"
            >
              <FaUserAlt className="text-xl" />
              About
            </Link>
          </li>
          <li className="flex flex-col gap-1 items-center text-sm text-greyColor cursor-pointer group">
            <Link
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="nav-link flex items-center flex-col group-hover:text-secondary"
            >
              <FaCoffee className="text-xl " />
              Skills
            </Link>
          </li>
          <li className="nav-link flex flex-col gap-1 items-center text-sm text-greyColor cursor-pointer group ">
            <Link
              activeClass="active"
              to="background"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              className="flex items-center flex-col group-hover:text-secondary"
            >
              <FaShapes className="text-xl " />
              Background
            </Link>
          </li>
          <li className="nav-link flex flex-col gap-1 items-center text-sm text-greyColor cursor-pointer group ">
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-40}
              duration={500}
              className="flex items-center flex-col group-hover:text-secondary"
            >
              <FaCode className="text-xl " /> Projects
            </Link>
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
