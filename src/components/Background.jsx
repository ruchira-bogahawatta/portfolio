import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaAward, FaBriefcase, FaGraduationCap } from "react-icons/fa";

const Background = () => {
  return (
    <section id="background" className="w-full h-full p-5 pt-8 sm:pt-0">
      <div className="flex w-full flex-col items-center">
        <h1 className="text-primaryBlack text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-1">
          Background
        </h1>
        <p className="text-primaryBlack font-normal text-center text-sm sm:text-lg px-5 sm:px-10 md:px-0 text-opacity-50 my-5">
          An overview of my academic journey and professional experiences up to
          date
        </p>
        {/* timeline */}
        <div className="w-[95%] md:w-[60%] lg:w-[60%] xl:w-[90%] xl:max-w-[1200px] ">
          <VerticalTimeline className="custom-timeline">
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{
                background: "rgb(245, 245, 245)",
                color: "#3e3939",
                boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                borderRadius: "0.8rem",
                border: "1px solid rgba(202, 202, 202, 0.4)",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  #3e3939",
              }}
              date="2021 - Present"
              iconStyle={{
                background: "rgb(245, 245, 245)",
                color: "#34be82",
                boxShadow: "none",
                border: "2px solid #cacaca",
              }}
              icon={<FaGraduationCap />}
            >
              <h3 className="font-semibold mb-3 text-sm md:text-base">
                University of Colombo School of Computing
              </h3>
              <h4 className="text-secondary m-0 text-sm md:text-base">
                BSc. (Hons) in Information Systems
              </h4>
              <h4 className=" font-medium !m-0 !mt-2 text-xs md:text-base">
                CGPA : 3.78
              </h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{
                background: "rgb(245, 245, 245)",
                color: "#3e3939",
                boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                borderRadius: "0.8rem",
                border: "1px solid rgba(202, 202, 202, 0.4)",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  #3e3939",
              }}
              date="Dec 2021 - Jul 2022"
              iconStyle={{
                background: "rgb(245, 245, 245)",
                color: "#34be82",
                boxShadow: "none",
                border: "2px solid #cacaca",
              }}
              icon={<FaBriefcase />}
            >
              <h3 className="font-semibold mb-3 text-sm md:text-base">
                SEO & Digital Marketing Intern
              </h3>
              <h4 className="text-secondary m-0 text-sm md:text-base">
                Commercial Technologies Plus
              </h4>
              <h4 className="!font-normal !m-0 !mt-2 text-justify text-xs md:text-base">
                I actively engaged in key aspects of digital marketing. This
                included SEO work on the Billable Global website, alongside
                responsibilities in social media marketing and web content
                development for various projects.
              </h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{
                background: "rgb(245, 245, 245)",
                color: "#3e3939",
                boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                borderRadius: "0.8rem",
                border: "1px solid rgba(202, 202, 202, 0.4)",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  #3e3939",
              }}
              date="2019"
              iconStyle={{
                background: "rgb(245, 245, 245)",
                color: "#34be82",
                boxShadow: "none",
                border: "2px solid #cacaca",
              }}
              icon={<FaGraduationCap />}
            >
              <h3 className="font-semibold mb-3 text-sm md:text-base">
                St. Joseph’s College
              </h3>
              <h4 className="text-secondary m-0 text-sm md:text-base">
                2A's 1B - GCE Advanced Level
              </h4>
              <h4 className="font-medium !m-0 !mt-2 text-xs md:text-base">
                Z-Score : 1.91
              </h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{
                background: "rgb(245, 245, 245)",
                color: "#3e3939",
                boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                borderRadius: "0.8rem",
                border: "1px solid rgba(202, 202, 202, 0.4)",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  #3e3939",
              }}
              date="2017"
              iconStyle={{
                background: "rgb(245, 245, 245)",
                color: "#34be82",
                boxShadow: "none",
                border: "2px solid #cacaca",
              }}
              icon={<FaAward />}
            >
              <h3 className="font-semibold mb-3 text-sm md:text-base">
                National Institute of Business Management
              </h3>
              <h4 className="text-secondary m-0 text-sm md:text-base">
                Certificate in Computer Science
              </h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{
                background: "rgb(245, 245, 245)",
                color: "#3e3939",
                boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                borderRadius: "0.8rem",
                border: "1px solid rgba(202, 202, 202, 0.4)",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  #3e3939",
              }}
              date="2016"
              iconStyle={{
                background: "rgb(245, 245, 245)",
                color: "#34be82",
                boxShadow: "none",
                border: "2px solid #cacaca",
              }}
              icon={<FaGraduationCap />}
            >
              <h3 className="font-semibold mb-3 text-sm md:text-base">
                Carey College
              </h3>
              <h4 className="text-secondary m-0 text-sm md:text-base">
                8A's 1B -GCE Ordinary Level
              </h4>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};

export default Background;
