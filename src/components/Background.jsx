import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaBriefcase, FaTimes, FaCode, FaUserAlt, FaCoffee } from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi";
import { BiSolidBriefcase } from "react-icons/bi";
import { PiCertificateFill } from "react-icons/pi";


const Background = () => {
  return (
    <section
      name="background"
      className="w-full h-full p-5 pt-12 sm:pt-0 bg-backgroundColor"
    >
      <div className="flex w-full flex-col items-center">
        <h1 className="text-primaryBlack text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-1">
          Background
        </h1>
        <p className="text-primaryBlack font-normal text-center text-sm sm:text-lg px-5 sm:px-10 md:px-0 text-opacity-50 my-5">
          Academics and Experiences so far
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
              date="2021 - present"
              iconStyle={{
                background: "rgb(245, 245, 245)",
                color: "#cacaca",
                boxShadow: "none",
                border: "2px solid #cacaca",
              }}
              icon={<GiGraduateCap />}
            >
              <h3 className="font-semibold mb-3">
                University of Colombo School of Computing
              </h3>
              <h4 className="text-greyColor m-0">
                BSc. (Hons) in Information Systems
              </h4>
              <p className="text-base font-medium !m-0 !mt-2">CGPA : 3.76</p>
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
                color: "#cacaca",
                boxShadow: "none",
                border: "2px solid #cacaca",
              }}
              icon={<BiSolidBriefcase />}
            >
              <h3 className="font-semibold mb-3">
                Search Engine Optimization Intern
              </h3>
              <h4 className="text-greyColor m-0">
                Commercial Technologies Plus
              </h4>
              <p className="text-base !font-normal !m-0 !mt-2 text-justify">
                I actively engaged in key aspects of digital marketing. This
                included SEO work on the Billable Global website, alongside
                responsibilities in social media marketing and web content
                development for various projects.
              </p>
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
                color: "#cacaca",
                boxShadow: "none",
                border: "2px solid #cacaca",
              }}
              icon={<GiGraduateCap />}
            >
              <h3 className="font-semibold mb-3">St. Joseph’s College</h3>
              <h4 className="text-greyColor m-0">
                2A's 1B - GCE Advanced Level
              </h4>
              <p className="text-base font-medium !m-0 !mt-2">Z-Score : 1.91</p>
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
                color: "#cacaca",
                boxShadow: "none",
                border: "2px solid #cacaca",
              }}
              icon={<PiCertificateFill />}
            >
              <h3 className="font-semibold mb-3">
                National Institute of Business Management
              </h3>
              <h4 className="text-greyColor m-0">
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
                color: "#cacaca",
                boxShadow: "none",
                border: "2px solid #cacaca",
              }}
              icon={<GiGraduateCap />}
            >
              <h3 className="font-semibold mb-3">Carey College</h3>
              <h4 className="text-greyColor m-0">
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