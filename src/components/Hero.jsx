import profileImage from "../assets/images/heroImage.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <>
      <section id="hero" className="w-full h-screen">
        <div className="flex flex-col md:flex-row pt-[20%] sm:pt-0 sm:justify-center items-center h-full gap-2 sm:gap-8 sm:px-8">
          <div className="flex justify-center rounded-[50%] md:mb-5 ">
            <img
              className="heroImage w-full max-w-[300px] sm:max-w-[350px]"
              src={profileImage}
              alt="Profile Image"
            />
          </div>
          <div className="flex flex-col text-center md:w-[50%] md:text-left">
            <h1 className="text-primaryBlack text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-1">
              Hello there!
            </h1>
            <p className="text-brand font-medium md:font-normal text-lg sm:text-xl md:text-2xl mb-3">
              I&apos;m Ruchira Bogahawatta, a Software Engineer
            </p>
            <p className="text-primaryBlack/80 font-normal text-center text-sm sm:text-base px-5 sm:px-10 md:px-0 md:text-justify">
              A BSc (Hons) Information Systems graduate from the University of Colombo School of Computing,
              with hands-on experience in full-stack development, IFS reporting, and automation tools. Enjoy collaborating with teams to turn ideas into real solutions, bringing creativity, practicality, and focus to every project.
            </p>
            <div>
              {/* Social Icons */}
              <ul className="flex justify-center md:justify-start gap-4 mt-2">
                <li className="text-primaryBlack opacity-40 text-3xl transition duration-300 ease-in-out hover:scale-110 hover:text-githubColor  hover:opacity-80 ">
                  <a href="https://github.com/ruchira-bogahawatta" target="_blank" rel="noreferrer" aria-label="GitHub">
                    <FaGithub />
                  </a>
                </li>
                <li className="text-3xl text-primaryBlack opacity-40 transition duration-300 ease-in-out hover:scale-110 hover:text-linkedlnColor  hover:opacity-100 ">
                  <a href="https://www.linkedin.com/in/ruchira-bogahawatta" target="_blank" rel="noreferrer" aria-label="LinkedIn">
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
