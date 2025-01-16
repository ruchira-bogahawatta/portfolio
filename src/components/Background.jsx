import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaAward, FaBriefcase, FaGraduationCap } from "react-icons/fa";
import ucscLogo from "../assets/images/logos/ucsc.svg";
import mitlogo from "../assets/images/logos/mitesp.svg";
import ctpLogo from "../assets/images/logos/ctp.svg";
import nibmLogo from "../assets/images/logos/nibm.svg";
import stjLogo from "../assets/images/logos/stj.svg";
import ccLogo from "../assets/images/logos/cc.svg";


const Background = () => {
  return (
    <section id="background" className="w-full h-full p-5 pt-8 sm:pt-0">
      <div className="flex w-full flex-col items-center">
        <h1 className="text-primaryBlack text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-1">
          Background
        </h1>
        <p className="text-primaryBlack font-normal text-center text-sm sm:text-lg px-5 sm:px-10 md:px-0 text-opacity-50 my-5">
          An overview of my academic journey and professional experiences up to date
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
              <h3 className="font-semibold mb-3 text-sm md:text-base flex items-center gap-1">
                <img src={ucscLogo} className="rounded-full w-14" alt="ucsc logo" />
                University of Colombo School of Computing
              </h3>
              <h4 className="text-secondary m-0 text-sm md:text-base">BSc. (Hons) in Information Systems</h4>
              <h4 className=" font-medium !m-0 !mt-2 text-xs md:text-base">CGPA : 3.74</h4>
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
              date="Nov 2023 - May 2024"
              iconStyle={{
                background: "rgb(245, 245, 245)",
                color: "#34be82",
                boxShadow: "none",
                border: "2px solid #cacaca",
              }}
              icon={<FaBriefcase />}
            >

              <h3 className="font-semibold mb-3 text-sm md:text-base flex items-center gap-1">
              <img src={mitlogo} className="rounded-full w-14" alt="mitesp logo" />
              Software Engineer Intern</h3>
              <h4 className="text-secondary m-0 text-sm md:text-base">MillenniumIT ESP</h4>
              <h4 className="!font-normal !m-0 !mt-2 text-justify text-xs md:text-base">
                Contributed to the development of a real-world CSR project using JavaScript and Java
                frameworks for the frontend and backend. Actively took part in code reviews and knowledge transfer sessions to enhance code quality, consistency, and team collaboration.
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
              <h3 className="font-semibold mb-3 text-sm md:text-base flex items-center gap-0">
              <img src={ctpLogo} className="rounded-full w-14" alt="ctp logo" />
                SEO & Digital Marketing Intern</h3>
              <h4 className="text-secondary m-0 text-sm md:text-base">Commercial Technologies Plus</h4>
              <h4 className="!font-normal !m-0 !mt-2 text-justify text-xs md:text-base">
                Engaged in key aspects of digital marketing. This included SEO work on the Billable
                Global website, alongside responsibilities in social media marketing and web content
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
              <h3 className="font-semibold mb-3 text-sm md:text-base flex items-center gap-0">
              <img src={stjLogo} className="rounded-full w-12" alt="stj logo" />
              St. Joseph’s College</h3>
              <h4 className="text-secondary m-0 text-sm md:text-base">2A's 1B - GCE Advanced Level</h4>
              <h4 className="font-medium !m-0 !mt-2 text-xs md:text-base">Z-Score : 1.91</h4>
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
              <h3 className="font-semibold mb-3 text-sm md:text-base flex items-center gap-0">
              <img src={nibmLogo} className="rounded-full w-14" alt="nibm logo" />
                National Institute of Business Management
              </h3>
              <h4 className="text-secondary m-0 text-sm md:text-base">Certificate in Computer Science</h4>
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
              <h3 className="font-semibold mb-3 text-sm md:text-base flex items-center gap-0">
              <img src={ccLogo} className="rounded-full w-12" alt="cc logo" />
              Carey College</h3>
              <h4 className="text-secondary m-0 text-sm md:text-base">8A's 1B - GCE Ordinary Level</h4>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};

export default Background;
