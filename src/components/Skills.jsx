import skills from "../assets/data/skillsData";
import SectionHeading from "./SectionHeading";
import { useReveal } from "@/hooks/use-reveal";

const Skills = () => {
  const ref = useReveal();

  return (
    <section id="skills" ref={ref} className="scroll-mt-24 py-16 md:py-24">
      <SectionHeading
        title="Tech stack"
        note="Technologies I have hands-on experience with, including libraries and frameworks."
      />
      <dl className="flex flex-col gap-8">
        {skills.map((group, index) => (
          <div
            key={group.area}
            data-reveal
            style={{ "--i": index + 1 }}
            className="grid gap-3 sm:grid-cols-[9rem_minmax(0,1fr)] sm:gap-6"
          >
            <dt className="text-sm font-medium text-ink-soft sm:pt-2.5">{group.area}</dt>
            <dd>
              <ul className="flex flex-wrap gap-2">
                {group.items.map(({ name, icon: Icon, color, platforms }) => (
                  <li
                    key={name}
                    className="inline-flex items-center gap-2.5 rounded-lg border border-line px-3.5 py-2 text-sm font-medium transition-colors hover:border-line-strong hover:bg-paper-soft"
                  >
                    <Icon className="size-4 shrink-0" style={{ color }} aria-hidden="true" />
                    {name}
                    {platforms && (
                      <span className="ml-1 inline-flex items-center gap-2 border-l border-line pl-2.5">
                        {platforms.map((platform) => (
                          <span key={platform.name} title={platform.name}>
                            <platform.icon className="size-4" style={{ color: platform.color }} aria-hidden="true" />
                            <span className="sr-only">{platform.name}</span>
                          </span>
                        ))}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
};

export default Skills;
