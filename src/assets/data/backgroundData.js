import kaizensLogo from "../images/logos/logo.webp";
import ucscLogo from "../images/logos/ucsc.svg";
import mitLogo from "../images/logos/mitesp.svg";
import ctpLogo from "../images/logos/ctp.svg";
import stjLogo from "../images/logos/stj.svg";
import nibmLogo from "../images/logos/nibm.svg";
import ccLogo from "../images/logos/cc.svg";

// type: "work" | "education" | "certificate"
const background = [
  {
    date: "June 2025 - Present",
    type: "work",
    logo: kaizensLogo,
    title: "Software Engineer",
    subtitle: "Kaizens Group",
    details: [
      "Work on internal tools and client projects involving full-stack development and IFS reporting. Coordinate with development and cross-functional teams through design and implementation to ensure timely delivery.",
    ],
  },
  {
    date: "2021 - May 2025",
    type: "education",
    logo: ucscLogo,
    title: "University of Colombo School of Computing",
    subtitle: "BSc. (Hons) in Information Systems",
    details: ["CGPA : 3.79 (First Class)", "Recognized on the Directors List for Years 2 to 4 (2022 - 2024)"],
  },
  {
    date: "Nov 2023 - May 2024",
    type: "work",
    logo: mitLogo,
    title: "Software Engineering Intern",
    subtitle: "MillenniumIT ESP",
    details: [
      "Contributed to the development of a real-world CSR project using JavaScript and Java frameworks for the frontend and backend. Actively took part in code reviews and knowledge transfer sessions to enhance code quality, consistency, and team collaboration.",
    ],
  },
  {
    date: "Dec 2021 - Jul 2022",
    type: "work",
    logo: ctpLogo,
    title: "SEO & Digital Marketing Intern",
    subtitle: "Commercial Technologies Plus",
    details: [
      "Engaged in key aspects of digital marketing. This included SEO work on the Billable Global website, alongside responsibilities in social media marketing and web content development for various projects.",
    ],
  },
  {
    date: "2019",
    type: "education",
    logo: stjLogo,
    title: "St. Joseph’s College",
    subtitle: "2A's 1B - GCE Advanced Level",
    details: ["Z-Score : 1.91"],
  },
  {
    date: "2017",
    type: "certificate",
    logo: nibmLogo,
    title: "National Institute of Business Management",
    subtitle: "Certificate in Computer Science",
    details: [],
  },
  {
    date: "2016",
    type: "education",
    logo: ccLogo,
    title: "Carey College",
    subtitle: "8A's 1B - GCE Ordinary Level",
    details: [],
  },
];

export default background;
