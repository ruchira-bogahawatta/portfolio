import { useState } from "react";
import { FaBars, FaTimes, FaCode, FaUserAlt, FaCoffee, FaShapes } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { useActiveSection } from "@/hooks/use-active-section";

const links = [
  { id: "hero", label: "About", icon: FaUserAlt },
  { id: "skills", label: "Skills", icon: FaCoffee },
  { id: "background", label: "Background", icon: FaShapes },
  { id: "projects", label: "Projects", icon: FaCode },
];

const sectionIds = links.map((link) => link.id);

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const activeId = useActiveSection(sectionIds);

  return (
    <>
      <nav className="hidden md:flex fixed w-full justify-center left-0 top-2 z-30">
        {/* Main Menu */}
        <ul className="py-4 px-8 md:flex gap-8 rounded-3xl bg-white text-center shadow-boxShadowOne text-primaryBlack font-medium">
          {links.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={activeId === id ? "true" : undefined}
                className={cn(
                  "border-b-2 border-transparent transition-all duration-300 hover:text-brand",
                  activeId === id && "text-brand border-brand"
                )}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Menu */}
      <nav
        className={
          !nav
            ? "hidden"
            : "md:hidden fixed justify-center p-3 bottom-0 right-0 bg-white rounded-tl-3xl rounded-tr-3xl z-40 shadow-md shadow-greyColor"
        }
      >
        <ul className="pb-14 pt-6 px-5 w-full grid grid-cols-2 grid-rows-2 gap-8 text-center">
          {links.map(({ id, label, icon: Icon }) => (
            <li key={id} className="flex flex-col gap-1 items-center text-sm">
              <a
                href={`#${id}`}
                onClick={() => setNav(false)}
                className={cn(
                  "flex items-center flex-col transition-colors hover:text-brand",
                  activeId === id ? "text-brand" : "text-greyColor"
                )}
              >
                <Icon className="text-xl" />
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Close Icon or Hamburger Item */}
      <button
        type="button"
        onClick={() => setNav(!nav)}
        aria-label={nav ? "Close menu" : "Open menu"}
        aria-expanded={nav}
        className="md:hidden right-4 fixed bottom-4 border border-greyColor p-2 rounded-md z-40 text-greyColor bg-white shadow-md shadow-greyColor"
      >
        {!nav ? <FaBars className="text-2xl" /> : <FaTimes className="text-2xl" />}
      </button>
    </>
  );
};

export default Navbar;
