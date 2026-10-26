import {
  SiCaddy,
  SiCss,
  SiDotnet,
  SiFlutter,
  SiHtml5,
  SiJavascript,
  SiLinux,
  SiMongodb,
  SiNextdotjs,
  SiNginx,
  SiReact,
  SiSpringboot,
  SiTailwindcss,
  SiWordpress,
} from "react-icons/si";
import { FaJava, FaWindows } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { TbBrandCSharp } from "react-icons/tb";
import { FileChartColumn, Globe, Server } from "lucide-react";
import { OracleIcon } from "../../components/icons";

// `color` is each brand's own colour; neutral icons use the page's soft ink
const skills = [
  {
    area: "Frontend",
    items: [
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
      { name: "React", icon: SiReact, color: "#149ECA" },
      { name: "Flutter", icon: SiFlutter, color: "#02569B" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "JavaScript", icon: SiJavascript, color: "#F0DB4F" },
      { name: "HTML", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS", icon: SiCss, color: "#663399" },
      { name: "WordPress", icon: SiWordpress, color: "#21759B" },
    ],
  },
  {
    area: "Backend",
    items: [
      { name: "Java", icon: FaJava, color: "#E76F00" },
      { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
      { name: "C#", icon: TbBrandCSharp, color: "#512BD4" },
      { name: ".NET", icon: SiDotnet, color: "#512BD4" },
    ],
  },
  {
    area: "Databases",
    items: [
      { name: "Oracle Database", icon: OracleIcon, color: "#C74634" },
      { name: "MySQL", icon: DiMysql, color: "#00758F" },
      { name: "MongoDB", icon: SiMongodb, color: "#00A35C" },
    ],
  },
  {
    area: "Infrastructure",
    items: [
      {
        name: "Server administration",
        icon: Server,
        color: "#2563EB",
        // the platforms it covers, shown as small marks after the name
        platforms: [
          { name: "Linux", icon: SiLinux, color: "#1F1F1F" },
          { name: "Windows Server", icon: FaWindows, color: "#0078D4" },
        ],
      },
      { name: "Nginx", icon: SiNginx, color: "#009639" },
      { name: "Caddy", icon: SiCaddy, color: "#1F88C0" },
      { name: "Domains & DNS", icon: Globe, color: "#6B6B6B" },
    ],
  },
  {
    area: "Enterprise",
    items: [{ name: "IFS reporting", icon: FileChartColumn, color: "#7C3AED" }],
  },
];

export default skills;
