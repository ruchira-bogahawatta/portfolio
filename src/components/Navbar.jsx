import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaCode,
  FaUserAlt,
  FaCoffee,
} from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [activeNav, setActiveNav] = useState("about");

  const handleClick = () => setNav(!nav);

  return (
    <>
      <div className="hidden md:flex fixed w-full justify-center left-0 top-2">
        {/* Main Menu */}
        <ul className="py-4 px-8 md:flex group gap-8 rounded-3xl bg-white text-center shadow-boxShadowOne text-primaryBlack cursor-pointer font-medium">
          <li className="nav-link">About</li>
          <li className="nav-link">Skills</li>
          <li className="nav-link">Projects</li>
          <li className="nav-link">Contact</li>
        </ul>
      </div>

      {/* Close Icon or Hamburger Item */}
      <div
        onClick={handleClick}
        className="md:hidden right-4 absolute bottom-4 border border-black p-2 rounded-md z-10 cursor-pointer"
      >
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* Mobile Menu */}
      <div
        className={
          !nav
            ? "hidden"
            : "md:hidden fixed justify-center p-3 bottom-0 right-0 bg-white rounded-tl-3xl rounded-tr-3xl shadow-boxShadowOne"
        }
      >
        <ul className="py-10 px-8 md:flex w-full grid grid-cols-2 grid-rows-2 gap-12 text-center">
          <li className="col-span-1 row-span-2 flex flex-col gap-1 items-center">
            <FaUserAlt className="text-xl" />
            <p>About</p>
          </li>
          <li className="col-span-1 row-span-2 flex flex-col gap-1 items-center">
            <FaCoffee className="text-xl" />
            <p>Skills</p>
          </li>
          <li className="col-span-1 row-span-2 flex flex-col gap-1 items-center">
            <FaCode className="text-xl" />
            <p>Projects</p>
          </li>
          <li className="col-span-1 row-span-2 flex flex-col gap-1 items-center">
            <FaCoffee className="text-xl" />
            <p>Contact</p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
