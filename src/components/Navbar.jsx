import React, { useState } from "react";
import { FaBars, FaTimes, FaCode, FaUserAlt, FaCoffee } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [activeNav, setActiveNav] = useState("about");

  const handleClick = () => setNav(!nav);

  return (
    <>
      <div className="hidden md:flex fixed w-full justify-center left-0 top-2 z-50">
        {/* Main Menu */}
        <ul className="py-4 px-8 md:flex group gap-8 rounded-3xl  bg-white text-center shadow-boxShadowOne text-primaryBlack cursor-pointer font-medium">
          <li className="nav-link">About</li>
          <li className="nav-link">Skills</li>
          <li className="nav-link">Projects</li>
          <li className="nav-link">Contact</li>
        </ul>
      </div>

      {/* Mobile Menu */}
      <div
        className={
          !nav
            ? "hidden"
            : "md:hidden fixed justify-center p-3 bottom-0 right-0 bg-backgroundColor rounded-tl-3xl rounded-tr-3xl shadow-boxShadowOne z-40"
        }
      >
        <ul className="pb-12 pt-5 px-5 md:flex w-full grid grid-cols-2 grid-rows-2 gap-10 text-center ">
          <li className=" flex flex-col gap-1 items-center text-sm text-greyColor cursor-pointer active:text-gray-300">
            <FaUserAlt className="text-xl" />
            <p className="text-primaryBlack">About</p>
          </li>
          <li className="flex flex-col gap-1 items-center text-sm text-greyColor cursor-pointer">
            <FaCoffee className="text-xl" />
            <p className="text-primaryBlack">Skills</p>
          </li>
          <li className="flex flex-col gap-1 items-center text-sm text-greyColor cursor-pointer">
            <FaCode className="text-xl" />
            <p className="text-primaryBlack">Projects</p>
          </li>
          <li className="flex flex-col gap-1 items-center text-sm text-greyColor cursor-pointer">
            <FaCoffee className="text-xl" />
            <p className="text-primaryBlack">Contact</p>
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
