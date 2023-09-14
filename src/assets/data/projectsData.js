import ayura from "../images/ayura.png";
import ayura2 from "../images/ayura2.png";
import internarc from "../images/internarc.png";
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
    siteUrl: "#",
  },
  {
    id: "02",
    imgUrl: [internarc, nw],
    title: "InternArc",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
    technologies: ["PHP", "MYSQL", "Ajax", "JS", "HTML", "CSS"],
    siteUrl: "#",
  },
  {
    id: "03",
    imgUrl: [nw, nw2],
    title: "Northwest Website",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
    technologies: ["Wordpress"],
    siteUrl: "#",
  },
];

export default projects;
