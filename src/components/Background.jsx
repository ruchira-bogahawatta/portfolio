import { Award, Briefcase, GraduationCap } from "lucide-react";
import background from "../assets/data/backgroundData";
import SectionHeading from "./SectionHeading";
import { cn } from "@/lib/utils";
import { useReveal } from "@/hooks/use-reveal";
import { useTimelineProgress } from "@/hooks/use-timeline-progress";

const typeIcons = {
  work: { icon: Briefcase, label: "Work" },
  education: { icon: GraduationCap, label: "Education" },
  certificate: { icon: Award, label: "Certificate" },
};

const TypeIcon = ({ type }) => {
  const { icon: Icon, label } = typeIcons[type];
  return (
    <span
      title={label}
      className="absolute top-5 right-5 shrink-0 rounded-md border border-line p-1.5 text-ink-soft sm:static"
    >
      <Icon className="size-4" aria-hidden="true" />
      <span className="sr-only">{label}</span>
    </span>
  );
};

const Background = () => {
  const ref = useReveal();
  const { trackRef, fillRef, dotRefs, reached } = useTimelineProgress(background.length);

  return (
    <section id="experience" ref={ref} className="scroll-mt-24 py-16 md:py-24">
      <SectionHeading title="Experience" note="My academic and professional journey so far, most recent first." />

      <div className="relative">
        {/* The line: a grey track from the first dot to the last, filled dark as far as the visitor has scrolled */}
        <div
          ref={trackRef}
          aria-hidden="true"
          className="absolute left-[15px] w-0.5 -translate-x-1/2 bg-line md:left-1/2"
        >
          <div ref={fillRef} className="w-full bg-ink" />
        </div>

        <ol className="flex flex-col gap-10 md:gap-14">
          {background.map((entry, index) => {
            const isReached = reached[index];
            const cardLeft = index % 2 === 1;

            return (
              <li
                key={entry.title}
                data-reveal
                style={{ "--i": Math.min(index, 3) }}
                className="grid grid-cols-[2rem_minmax(0,1fr)] gap-x-4 md:grid-cols-[minmax(0,1fr)_2rem_minmax(0,1fr)] md:gap-x-8"
              >
                {/* Dot */}
                <div className="flex justify-center pt-2 md:col-start-2 md:row-start-1">
                  <span
                    ref={(element) => {
                      dotRefs.current[index] = element;
                    }}
                    aria-hidden="true"
                    className={cn(
                      "size-4 rounded-full border-2 bg-paper transition-colors duration-300",
                      isReached ? "border-ink bg-ink" : "border-line-strong"
                    )}
                  />
                </div>

                {/* Date */}
                <div
                  className={cn(
                    "pt-1 md:row-start-1 md:pt-1.5",
                    cardLeft ? "md:col-start-3 md:justify-self-start" : "md:col-start-1 md:justify-self-end"
                  )}
                >
                  <time
                    className={cn(
                      "inline-block rounded-md px-3 py-1 text-sm font-medium transition-colors duration-300",
                      isReached ? "bg-ink text-paper" : "bg-paper-soft text-ink-soft"
                    )}
                  >
                    {entry.date}
                  </time>
                </div>

                {/* Card */}
                <article
                  className={cn(
                    "relative col-start-2 mt-4 rounded-xl border border-line p-5 md:row-start-1 md:mt-0 md:p-6",
                    cardLeft ? "md:col-start-1" : "md:col-start-3"
                  )}
                >
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-4">
                    <img
                      src={entry.logo}
                      alt=""
                      loading="lazy"
                      className="h-12 w-auto max-w-32 shrink-0 self-start object-contain"
                    />
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="text-base leading-snug">{entry.title}</h3>
                        <TypeIcon type={entry.type} />
                      </div>
                      <p className="mt-1 text-ink-soft">{entry.subtitle}</p>
                    </div>
                  </div>
                  {entry.details.length > 0 && (
                    <div className="mt-4 space-y-2">
                      {entry.details.map((detail) => (
                        <p key={detail}>{detail}</p>
                      ))}
                    </div>
                  )}
                </article>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};

export default Background;
