import { useState } from "react";
import { ArrowRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import profileImg from "../assets/images/profileImg.jpg";
import SectionHeading from "./SectionHeading";
import { useReveal } from "@/hooks/use-reveal";

const email = "ruchira.bogahawatta@gmail.com";

const channels = [
  { label: "Email", value: email, href: `mailto:${email}`, icon: Mail },
  {
    label: "LinkedIn",
    value: "in/ruchira-bogahawatta",
    href: "https://www.linkedin.com/in/ruchira-bogahawatta",
    icon: FaLinkedin,
  },
  { label: "GitHub", value: "ruchira-bogahawatta", href: "https://github.com/ruchira-bogahawatta", icon: FaGithub },
];

const Contact = () => {
  const [message, setMessage] = useState("");
  const ref = useReveal();

  // No form backend: the arrow is a real mailto link carrying the message, so the visitor's email app opens
  const mailto = `mailto:${email}?subject=${encodeURIComponent("Hello from your portfolio")}&body=${encodeURIComponent(message)}`;

  const handleSubmit = (event) => {
    event.preventDefault();
    window.location.assign(mailto);
  };

  return (
    <section id="contact" ref={ref} className="scroll-mt-24 py-16 md:py-24">
      <SectionHeading title="Get in touch" note="Have a role or a project in mind? Write to me." />

      <div className="max-w-xl">
        <form data-reveal style={{ "--i": 1 }} onSubmit={handleSubmit} className="relative">
          <label htmlFor="contact-message" className="sr-only">
            Your message
          </label>
          <Input
            id="contact-message"
            name="message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="Hi Ruchira, I'd like to talk about…"
            className="h-14 rounded-xl pr-16 pl-5 text-base md:text-base"
          />
          <Button asChild size="icon" className="absolute top-1/2 right-2 size-10 -translate-y-1/2 rounded-lg">
            <a href={mailto} aria-label="Send this message by email">
              <ArrowRight className="size-4" />
            </a>
          </Button>
        </form>
        <ul data-reveal style={{ "--i": 2 }} className="mt-10 flex flex-col gap-4 text-sm">
          {channels.map(({ label, value, href, icon: Icon }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group inline-flex items-center gap-3"
              >
                <span className="rounded-md border border-line p-2 text-ink-soft transition-colors group-hover:border-line-strong group-hover:text-ink">
                  <Icon className="size-4" aria-hidden="true" />
                </span>
                <span className="text-ink-soft">{label}</span>
                <span className="link font-medium break-all">{value}</span>
              </a>
            </li>
          ))}
        </ul>

        <div data-reveal style={{ "--i": 3 }} className="mt-12 flex items-center gap-4">
          <img
            src={profileImg}
            alt="Photograph of Ruchira Bogahawatta"
            width="64"
            height="64"
            loading="lazy"
            className="size-16 rounded-full border border-line object-cover"
          />
          <div>
            <p className="font-semibold">Ruchira Bogahawatta</p>
            <p className="text-sm text-ink-soft">Software Engineer, Kaizens Group</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
