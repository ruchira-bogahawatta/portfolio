import northwestRecruitment from "../images/northwest-recruitment.jpg";
import northwestRecruitment2 from "../images/northwest-recruitment-2.jpg";
import northwestFacility from "../images/northwest-facility.jpg";
import northwestFacility2 from "../images/northwest-facility-2.jpg";
import northwestFinance from "../images/northwest-finance.jpg";
import northwestFinance2 from "../images/northwest-finance-2.jpg";
import ayura from "../images/ayura.png";
import ayura2 from "../images/ayura2.png";
import internarc from "../images/internarc.png";
import internarc2 from "../images/internarc2.png";
import retailarva from "../images/retailarva.png";
import retailarvaVid from "../images/researchVid2.mp4";

const projects = [
  {
    id: "northwest-finance",
    imgUrl: [northwestFinance, northwestFinance2],
    title: "Northwest Finance",
    kind: "Corporate Website",
    description:
      "A website for a New Zealand finance company featuring a repayment calculator and an online loan application with document uploads and email notifications.",
    technologies: ["Next.js", "React", "TypeScript", "Zod", "Vercel"],
    siteUrl: "https://northwestfinance.co.nz",
    github: false,
  },
  {
    id: "northwest-recruitment",
    imgUrl: [northwestRecruitment, northwestRecruitment2],
    title: "Northwest Recruitment",
    kind: "Corporate Website",
    description:
      "A website for an Auckland-based facility services company showcasing its services and providing an online form for requesting quotes.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    siteUrl: "https://northwestrecruitment.co.nz",
    github: false,
  },
  {
    id: "northwest-facility",
    imgUrl: [northwestFacility, northwestFacility2],
    title: "Northwest Facility",
    kind: "Corporate Website",
    description:
      "Website for a cleaning and facility management company in Auckland: service pages, a quote form with confirmation emails, and search-friendly metadata, sitemap and canonical URLs on every page.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    siteUrl: "https://northwestfacility.co.nz",
    github: false,
  },
  {
    id: "retailarva",
    imgUrl: [retailarva, retailarvaVid],
    title: "RetailARVA",
    kind: "AR shopping assistant, final-year research",
    description:
      "An AR assistant powered by an LLM enhances customer engagement in mixed reality, answering queries, providing product info, and delivering personalized shopping assistance for an interactive retail experience.",
    technologies: ["Unity", "C#", "Python", "LLM"],
    siteUrl: "https://github.com/ruchira-bogahawatta/RetailARVA_App.git",
    github: true,
  },
  {
    id: "ayura",
    imgUrl: [ayura, ayura2],
    title: "Ayura",
    kind: "Personal health app",
    description:
      "A mobile app for keeping track of your personal health and staying on top of it: a constant companion for everyday well-being.",
    technologies: ["Flutter", ".NET", "MongoDB"],
    siteUrl: "https://github.com/orgs/team-ayura/repositories",
    github: true,
  },
  {
    id: "internarc",
    imgUrl: [internarc, internarc2],
    title: "InternArc",
    kind: "Internship placement platform",
    description:
      "A web platform that runs the industry placement process for UCSC undergraduates. Built from scratch without any frameworks, MVC architecture included.",
    technologies: ["PHP", "MYSQL", "Ajax", "JS", "HTML", "CSS"],
    siteUrl: "https://github.com/ruchira-bogahawatta/Intern-Arc",
    github: true,
  },
];

export default projects;
