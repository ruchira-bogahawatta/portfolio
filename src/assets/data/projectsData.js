import ayura from "../images/ayura.png";
import ayura2 from "../images/ayura2.png";
import internarc from "../images/internarc.png";
import internarc2 from "../images/internarc2.png";
import nw from "../images/nw.png";
import nw2 from "../images/nw2.png";
import retailarva from "../images/retailarva.png";
import hiredocs from "../images/hiredocs.png";
import retailarvaVid from "../images/researchVid2.mp4";

const projects = [
  {
    id: "05",
    imgUrl: [hiredocs],
    title: "HireDocs",
    description:
      "An ongoing MVC-based project designed to manage employees, generate and send contracts, shift email notifications, and monitor document history.",
    technologies: ["SpringBoot", "NextJS", "MYSQL"],
    siteUrl: "",
    github: false,
  },
  {
    id: "04",
    imgUrl: [retailarva, retailarvaVid],
    title: "RetailARVA",
    description:
      "An AR assistant powered by an LLM enhances customer engagement in mixed reality, answering queries, providing product info, and delivering personalized shopping assistance for an interactive retail experience.",
    technologies: ["Unity", "C#", "Python", "LLM"],
    siteUrl: "https://github.com/ruchira-bogahawatta/RetailARVA_App.git",
    github: true,
  },
  {
    id: "03",
    imgUrl: [ayura, ayura2],
    title: "Ayura (A Personal Health App)",
    description:
      "Ayura is an all in one mobile application where users can proactively maintain and track their personal health. A constant companion that helps users stay on top of their well-being.",
    technologies: ["Flutter", ".NET", "MongoDB"],
    siteUrl: "https://github.com/orgs/team-ayura/repositories",
    github: true,
  },
  {
    id: "02",
    imgUrl: [internarc, internarc2],
    title: "InternArc",
    description:
      "A web platform created to streamline the industry placement process of UCSC undergraduates. Built from scratch without any frameworks including the MVC architecture.",
    technologies: ["PHP", "MYSQL", "Ajax", "JS", "HTML", "CSS"],
    siteUrl: "https://github.com/ruchira-bogahawatta/Intern-Arc",
    github: true,
  },
  // {
  //   id: "01",
  //   imgUrl: [nw, nw2],
  //   title: "Northwest Website",
  //   description:
  //     "A WordPress site created for Northwest, a reputable staffing and recruitment agency based in New Zealand.",
  //   technologies: ["Wordpress"],
  //   siteUrl: "",
  //   github: false,
  // },
];

export default projects;
