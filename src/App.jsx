import Navbar from "./components/Navbar";
import About_1 from "./components/About_1";
import About_2 from "./components/About_2";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./index.css";
import { useState } from "react";
import {
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
// import { SiTypescript } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import LogoPondok from "./assets/Logo.jpg";
function App() {
  const [theme, setTheme] = useState(false);
  const toggleTheme = () => {
    // if (theme === "light") {
    //   setTheme("dark");
    // } else {
    //   setTheme("light");
    // }
    setTheme(!theme);
  };
  const style = {
    // backgroundColor: theme ? "rgb(15 23 42)" : "white",
    backgroundColor: theme ? "#2C2C2C" : "white",
    color: theme ? "#BDBDBD" : "#212121",
    // secondaryColor: theme ? "white" : "rgb(15 23 42)",
    // textAlign: "center",
    // minHeight: "100vh",
  };
  const skillsList = [
    {
      id: 1,
      skill: "JavaScript",
      color: "yellow",
      icon: <FaJsSquare />,
    },
    {
      id: 2,
      skill: "TypeScript",
      color: "blue",
      icon: <BiLogoTypescript />,
    },
    {
      id: 3,
      skill: "React",
      color: "blue",
      icon: <FaReact />,
    },
    {
      id: 4,
      skill: "Next.js",
      color: theme ? "white" : "black",
      icon: <RiNextjsFill />,
    },
    {
      id: 5,
      skill: "Node.js",
      color: "green",
      icon: <FaNodeJs />,
    },
    {
      id: 6,
      skill: "TailwindCSS",
      color: "blue",
      icon: <RiTailwindCssFill />,
    },
    {
      id: 7,
      skill: "Github",
      color: theme ? "white" : "black",
      icon: <FaGithub />,
    },
    {
      id: 8,
      skill: "HTML",
      color: "red",
      icon: <FaHtml5 />,
    },
    {
      id: 9,
      skill: "CSS",
      color: "blue",
      icon: <FaCss3Alt />,
    },
  ];

  const experienceList = [
    {
      id: 1,
      image: LogoPondok,
      company: "Pondok Pesantren Tahfidzul Qur'an An-Nahl",
      jobTitle: "Teacher Arabic Language",
      jobDesc: [
        "Delivering lessons on Arabic grammar (nahwu and sharaf), speaking skills (muhadatsah), writing (kitabah), reading (qira'ah), and listening (istima’).",
        "Preparing syllabi, lesson plans, and teaching materials aligned with the school curriculum.",
        "Training students to use Arabic in daily life through programs like public speaking (muhadharah), discussions, or conversational practice.",
      ],
      Date: "July 2024 - Present",
    },
    {
      id: 2,
      company: "Pondok Pesantren Tahfidzul Qur'an An-Nahl",
      image: LogoPondok,
      jobTitle: "Secretary in a Boarding School",
      jobDesc: [
        "Organizing and maintaining important documents such as student data, correspondence, schedules, and financial reports.",
        "Compiling activity reports, financial reports, and documentation for the leadership or relevant stakeholders.",
        "Acting as a liaison between the school and students’ parents, educational institutions, or external parties.",
        "Assisting in arranging daily, weekly, or annual schedules, including major events like graduation ceremonies.",
      ],
      Date: "July 2024 - Present",
    },
  ];
  const styleExperience = {backgroundColor: theme ? "rgb(15 23 42)" : "white"}
  return (
    <div style={style}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <About_1 />
      <About_2 />
      <Skills skillsList={skillsList} />
      <Experience experienceList={experienceList} style={styleExperience} />
      <Contact style={style}/>
      <Footer />
    </div>
  );
}

export default App;
