import ayura from "../images/ayura.png";
import ayura2 from "../images/ayura2.png";
import internarc from "../images/internarc.png";
import internarc2 from "../images/internarc2.png";
import nw from "../images/nw.png";
import nw2 from "../images/nw2.png";

const projects = [
  {
    id: "01",
    imgUrl: [ayura, ayura2],
    title: "Ayura (A Personal Health App)",
    description:
      "Ayura is an all in one mobile application where users can proactively maintain and track their personal health. It serves as the user’s constant companion, providing them with the tools, guidance, and support to stay on top of their well-being.",
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
  {
    id: "03",
    imgUrl: [nw, nw2],
    title: "Northwest Website",
    description:
      "A WordPress site created for Northwest, a reputable staffing and recruitment agency based in New Zealand.",
    technologies: ["Wordpress"],
    siteUrl: "https://northwestfacility.co.nz/",
    github: false,
  },
];

export default projects;
