import { FaGithub, FaLinkedin } from "react-icons/fa";
import profileImage from "../assets/images/heroImage.png";
import { useTypewriter } from "@/hooks/use-typewriter";

const phrases = ["I'm Ruchira Bogahawatta", "A UCSC Graduate", "A Software Engineer"];

const socials = [
  { label: "GitHub", href: "https://github.com/ruchira-bogahawatta", icon: FaGithub },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ruchira-bogahawatta", icon: FaLinkedin },
];

const Hero = () => {
  const typed = useTypewriter(phrases);

  return (
    <section id="hero" className="scroll-mt-24 py-16 md:py-24">
      <div className="flex flex-col items-center gap-10 md:flex-row md:gap-16">
        <img
          src={profileImage}
          alt="Cartoon of Ruchira with a Siamese cat"
          width="375"
          height="375"
          className="heroImage w-full max-w-[280px] shrink-0 md:max-w-[340px]"
        />
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl">Hello there!</h1>
          <p className="mt-3 min-h-[1.6em] text-xl font-medium text-brand md:text-2xl" aria-live="polite">
            {typed}
            <span className="cursor" aria-hidden="true" />
          </p>
          <p className="mt-5 max-w-[60ch] text-ink-soft md:text-lg">
            Software Engineer at Kaizens Group and a First Class Honours graduate in Information Systems from the
            University of Colombo School of Computing. I work with C#/.NET, React, Next.js and relational
            databases, and look after Linux and Windows servers, deployments and domain configuration. I enjoy
            turning ideas into real solutions with a team, and I&apos;m always learning something new.
          </p>
          <ul className="mt-6 flex justify-center gap-5 md:justify-start">
            {socials.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="block text-3xl text-ink-soft transition-colors hover:text-ink"
                >
                  <Icon />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;
