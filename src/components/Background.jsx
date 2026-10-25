import { FaAward, FaBriefcase, FaGraduationCap } from "react-icons/fa";
import {
  Timeline,
  TimelineContent,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "@/components/reui/timeline";
import background from "../assets/data/backgroundData";

const icons = {
  work: FaBriefcase,
  education: FaGraduationCap,
  certificate: FaAward,
};

const Background = () => {
  return (
    <section id="background" className="w-full h-full p-5 pt-8 sm:pt-0 scroll-mt-24">
      <div className="flex w-full flex-col items-center">
        <h2 className="text-primaryBlack text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-1">
          Background
        </h2>
        <p className="text-primaryBlack/50 font-normal text-center text-sm sm:text-lg px-5 sm:px-10 md:px-0 my-5">
          A look into my academic and professional journey so far.
        </p>

        <Timeline defaultValue={0} className="w-full max-w-2xl mt-4">
          {background.map((entry, index) => {
            const Icon = icons[entry.type];

            return (
              <TimelineItem
                key={entry.title}
                step={index + 1}
                className="group-data-[orientation=vertical]/timeline:ms-12 group-data-[orientation=vertical]/timeline:not-last:pb-10"
              >
                <TimelineHeader>
                  <TimelineSeparator className="bg-greyColor group-data-[orientation=vertical]/timeline:-left-8 group-data-[orientation=vertical]/timeline:h-[calc(100%-2rem-0.25rem)] group-data-[orientation=vertical]/timeline:translate-y-8.5" />
                  <TimelineDate className="text-sm">{entry.date}</TimelineDate>
                  <TimelineTitle className="flex items-center gap-2 text-sm md:text-base font-bold text-primaryBlack">
                    <img src={entry.logo} alt="" className="w-10 rounded-full" />
                    {entry.title}
                  </TimelineTitle>
                  <TimelineIndicator className="flex size-8 items-center justify-center border-greyColor bg-white text-brand group-data-[orientation=vertical]/timeline:-left-8">
                    <Icon className="size-3.5" />
                  </TimelineIndicator>
                </TimelineHeader>
                <TimelineContent className="text-primaryBlack">
                  <p className="text-brand text-sm md:text-base font-semibold mt-1">{entry.subtitle}</p>
                  {entry.details.map((detail) => (
                    <p key={detail} className="mt-2 text-xs md:text-base">
                      {detail}
                    </p>
                  ))}
                </TimelineContent>
              </TimelineItem>
            );
          })}
        </Timeline>
      </div>
    </section>
  );
};

export default Background;
