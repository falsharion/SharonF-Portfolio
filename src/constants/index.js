import {
  EHC,
  recipe,
  scissors,
  albuelection,
} from "../assets";

import workshopcert from "../assets/company/workshopcert.png"
import workshop from "../assets/company/workshop.png"
import gdsc from "../assets/company/gdsc.png"
import diploma from "../assets/company/diploma.png"
import campus from "../assets/company/campus.png"
import gdsccert from "../assets/company/gdsccert.png"
import bootstrap from "../assets/tech/bootstrap.png";
import css from "../assets/tech/css.png";
import figma from "../assets/tech/figma.png";
import firebase from "../assets/tech/firebase.png";
import git from "../assets/tech/git.png";
import html from "../assets/tech/html.png";
import javascript from "../assets/tech/javascript.png";
import reactjs from "../assets/tech/reactjs.png";
import tailwind from "../assets/tech/tailwind.png";
import typescript from "../assets/tech/typescript.png";
import Nodejs from "../assets/tech/node.png";
import threejs from "../assets/tech/threejs.png";
import express from "../assets/tech/express.png"
import mongodb from "../assets/tech/mongodb.png"





const toolkitItems = [
  {
    title: "HTML5",
    icon: html,
  },
  {
    title: "CSS3",
    icon: css,
  },
  {
    title: "Javascript",
    icon: javascript,
  },
  {
    title: "React",
    icon: reactjs,
  },
  {
    title: "Tailwind CSS",
    icon: tailwind,
  },
  {
    title: "Bootstrap",
    icon: bootstrap,
  },
  {
    title: "Threejs",
    icon: threejs,
  },
  {
    title: "Typescript",
    icon: typescript,
  },
  {
    title: "Figma",
    icon: figma,
  },
  {
    title: "Github",
    icon: git,
  },
  {
    title: "Firebase",
    icon: firebase,
  },
  {
    title: "Nodejs",
    icon: Nodejs,
  },
  {
    title: "Express js",
    icon: express,
  },
  {
    title: "Mongo db",
    icon: mongodb,
  },
];
const hobbies = [
  {
    title: "Drawing",
    emoji: "✍🏾",
    left: "5%",
    top: "5%",
  },
  {
    title: "Cooking",
    emoji: "👩🏾‍🍳",
    left: "50%",
    top: "5%",
  },
  {
    title: "Reading",
    emoji: "📚",
    left: "10%",
    top: "35%",
  },
  {
    title: "Anime",
    emoji: "💻",
    left: "35%",
    top: "40%",
  },
  {
    title: "Music",
    emoji: "🎵",
    left: "70%",
    top: "45%",
  },
  {
    title: "Fitness",
    emoji: "👩🏾🏋🏾‍♂️",
    left: "5%",
    top: "65%",
  },
  {
    title: "Knitting",
    emoji: "🧶",
    left: "45%",
    top: "70%",
  },
];

export const navLinks = [
  {
    id: "home",
    desktop: "",
    title: "Home",
  },
  {
    id: "Experience",
    desktop: "Experience",
    title: "Experience",
  },
  {
    id: "projects",
    desktop: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    desktop: "contact",
    title: "Contact",
  },
];

const gallery = [
  {
    message: "Completed my Diploma in software engeering at Altschool",
    image: diploma,
    role:"Diploma in Frontend Engineering",
  },
  {
    message: "Held a technical workshop on web devevelopment at BUSA finance and technology week",
    image: workshopcert,
    role:"GDSC Web Track Lead",
  },
  {
    message: "Picture with interswitch babcock community members",
    image: campus,
    role:"Interswitch Babcock Campus Ambassador",
  },
  {
    message: "Certificate for being GDSC web track co-lead 2023/24",
    image: gdsc,
    role:"GDSC Web Track Co-Lead",
  },
  {
    message: "Certificate of service of being Web Track Co-Lead 2022/2023",
    image: gdsccert,
    role:"GDSC Web Track Lead",
  },
  {
    message: "Interswitch Developer Community Babcock",
    image: workshop,
    role:"Hosting Workshops",
  },
];





const portfolio = [
  {
    name: "ALBU Election App",
    projectIndex: 1,
    description:
      "I built a full stack voting system for 300+ students in my department. It features OTP based login, matric number verification, RLS to prevent multiple votes, and an admin dashboard to monitor real time results. This solution improved vote integrity, streamlined the process, and gave students a smoother, secure election experience.",
    tags: [
      {
        name: "Next js",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "Supabase",
        color: "orange-text-gradient"
      },
      {
        name: "Rechart",
        color: "pink-text-gradient",
      },
    ],
    image: albuelection,
    source_code_link:"https://albuelection.netlify.app/",
  },
  {
    name: "Recipe Finder",
    projectIndex: 2,
    description:
      "AI powered full stack recipe finder app that lets users search for meals by ingredients and delivers personalized recipe suggestions. It uses Hugging Face NLP models to classify recipes by meal time and dietary type and also summarizes cooking steps for quicker understanding.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "orange-text-gradient"
      },
      {
        name: "Spoonacular Api",
        color: "pink-text-gradient",
      },
      {
        name: "Hugging Face Api",
        color: "violet-text-gradient",
      },
    ],
    image: recipe,
    source_code_link:"https://recipefindersearch.netlify.app/",
  },
  
  {
    name: "EmpowerHerCommunity Website",
    projectIndex: 3,
    description:
      "A website for a non-profit organization that helps women trasition into tech irrespective of their background.",
    tags: [
      {
        name: "Nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "orange-text-gradient"
      },
      {
        name: "React js",
        color: "pink-text-gradient",
      },
    ],
    image: EHC,
    source_code_link:"https://empowerhercommunity.net/",
  },
  {
    name: "Scissors",
    projectIndex: 4,
    description:
      "link management platform that enable users to shorten, customize, and share links while providing a dashboard to track clicks, locations, and devices for better analytics. ",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind css",
        color: "green-text-gradient",
      },
      {
        name: "Supabase",
        color: "orange-text-gradient",
      },
      {
        name: "Shadcn ui",
        color: "pink-text-gradient"
      }
    ],
    image: scissors,
    source_code_link:"https://scissors-zeta.vercel.app/",
  },

];

const resumeData = {
  selectedTemplate: 1,
  education: [
    {
      studyType: "A Passionate Software engineer with a commitment to building responsive, standards compliant software solutions and scalable user Interfaces. My expertise spans across planning, development, designing, maintaining, testing, and deployment of applications throughout the software development lifecycle with best practices. Focusing on creating exceptional user experiences. website cross browser compatibility, consuming RESTful APls and efficient solutions. I am open to learning new technologies, with a commitment to growth. I thrive in fast paced, agile environments and creating solutions that enhances user experiences."
    }
  ],
  work: [
    {
      position: "Frontend Engineer",
      website: "",
      startDate: "October 2022",
      endDate: "Present ",
      highlights: [
        "collaborated with a team of developers (frontend and backend), designers and project manager to create a full-stack website for the organization",
        "Contributed to brainstorming sessions, troubleshooting, and the successtul delivery of project milestones",
        "Strengthened teamwork and communication skills through close collaboration with fellow engineers",
        "As the lead of the engineering team l'm in charge of maintaining and improving the site. I also translate the figma design into pixel perfect ui"
      ],
      company: "EmpowerHerCommunity",
      direction: "left"

    },
    {
      highlights: [
        "developed a dedicated church website, separate from the existing QR code system, to improve accessibility for users unable to use biometric sign-ins",
        "Collaborated with team members to plan, design, and implement the website, ensuring effective communication and task delegation.",
        "Gained hands on experience with Typescript, leveraging strict type enforcement to enhance code quality and maintainability."
      ],
      startDate: "November 2023",
      endDate: "April 2024",
      company: " HOKC Developers Team",
      position: " Frontend Developer",
      direction: "left"
    },
    {
      highlights: [
        "Conducted interactive workshops and meetings to educate students on Interswitch APIs and their application in project development.",
        "Provided technical guidance on integrating APIs into student projects, fostering collaboration and problem-solving within peer groups.",
        "Promoted the adoption of Interswitch technologies through effective communication and community engagement."
      ],
      company: " Interswitch",
      position: "IDC Babcock Campus Ambassador",
      startDate: "April 2022",
      endDate: "July 2024",
      direction: "left"

    },

    {
      highlights: [
        "Collaborated on revamping the UI design of the portal of Babcock university Lecturer's Dashoard website using Figma",
        "worked the flow of the site using Jira "
      ],
      company: "Babcock DevTeam",
      position: "UI Designer",
      startDate: "April 2022",
      endDate: "July 2022",
      direction: "left"

    }
  ],
  skills: [

    {
      keywords: [
        "Critical thinking ",
        "Creativity ",
        "Analytical thinking ",
        "Collaborative skill ",
        "Growth oriented "
      ],
      name: "Soft skill"
    }
  ],
  
};


export { portfolio,resumeData,gallery, toolkitItems, hobbies};