import { GiBearFace } from "react-icons/gi";
import {
  SiAndroidstudio,
  SiAntdesign,
  SiClaude,
  SiCss,
  SiExpo,
  SiExpress,
  SiFigma,
  SiFirebase,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMui,
  SiNetlify,
  SiNextdotjs,
  SiNodedotjs,
  SiPostman,
  SiReact,
  SiReactquery,
  SiRedux,
  SiShadcnui,
  SiSocketdotio,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import {
  TbBrandOpenai,
  TbBrandReactNative,
  TbFileText,
  TbRoute,
} from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";

export const Bio = {
  name: "Md. Sazedur Rahman",
  roles: ["Software Engineer"],
  description:
    "Software Engineer with 2+ years of professional experience building production-grade applications with React, Next.js, and TypeScript, plus full-stack projects in Node.js, Express, and MongoDB. I work directly with Swedish clients to understand business needs, clarify requirements, and turn them into practical frontend solutions, from an investment management platform analyzing 650K+ companies to AI analytics and AI interview platforms.",
  github: "https://github.com/sazedur-siam",
  resume:
    "https://drive.google.com/file/d/1ZZVw9LoLzhKHRan4hdTnwIR6GHBwE5Zk/view?usp=sharing",
  linkedin: "https://www.linkedin.com/in/md-sazedur-rahman-837179335/",
};

export const skills = [
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "HTML", icon: SiHtml5, color: "#E34F26" },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React Js", icon: SiReact, color: "#61DAFB" },
      { name: "Next Js", icon: SiNextdotjs },
      { name: "Zustand", icon: GiBearFace, color: "#C9853A" },
      { name: "TanStack Query", icon: SiReactquery, color: "#FF4154" },
      { name: "Redux", icon: SiRedux, color: "#764ABC" },
      { name: "WebSocket", icon: SiSocketdotio },
    ],
  },
  {
    title: "UI & Styling",
    skills: [
      { name: "CSS", icon: SiCss, color: "#663399" },
      { name: "Styled Components", icon: SiStyledcomponents, color: "#DB7093" },
      { name: "Ant Design", icon: SiAntdesign, color: "#1677FF" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Material UI", icon: SiMui, color: "#007FFF" },
      { name: "Shadcn UI", icon: SiShadcnui },
    ],
  },
  {
    title: "Backend & Data",
    skills: [
      { name: "Node Js", icon: SiNodedotjs, color: "#5FA04E" },
      { name: "Express Js", icon: SiExpress },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
    ],
  },
  {
    title: "Mobile Development",
    skills: [
      { name: "React Native", icon: TbBrandReactNative, color: "#61DAFB" },
      { name: "Expo", icon: SiExpo },
      { name: "Android Studio", icon: SiAndroidstudio, color: "#3DDC84" },
      { name: "React Navigation", icon: TbRoute, color: "#8B5CF6" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "Claude", icon: SiClaude, color: "#D97757" },
      { name: "Codex", icon: TbBrandOpenai },
      { name: "OpenSpec", icon: TbFileText },
      { name: "Netlify", icon: SiNetlify, color: "#00C7B7" },
      { name: "VS Code", icon: VscVscode, color: "#007ACC" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "Figma", icon: SiFigma, color: "#F24E1E" },
    ],
  },
];

export const experiences = [
  {
    id: 1,
    img: "https://framerusercontent.com/images/45QzzHjhiZ4M16bV7RZyePZc8Ws.png",
    company: "Strativ AB",
    location: "Dhaka, Bangladesh",
    date: "Jul 2024 - Present",
    tagline:
      "Swedish software company with teams in Stockholm and Dhaka, building software for Scandinavian clients",
    roles: [
      {
        title: "Associate Software Engineer - L2",
        date: "Jul 2024 - Present",
        projects: [
          {
            name: "IMS",
            type: "client",
            summary: "Investment Management System",
            stack: ["React", "TypeScript", "TanStack Query", "Lexical", "dnd kit"],
            points: [
              "Contributed to an investment management platform that helped the client identify 5 potential companies to invest in",
              "Developed the Dealflow module for analyzing 650K+ Swedish companies using key investment metrics such as AI review, GPM, ROCE, YoY revenue growth, and gross/net revenue, helping users identify companies matching investment criteria",
              "Built the Hot Deals module for moving potential companies from Dealflow, enabling users to record outreach, track communication history, and manage companies through different deal stages",
              "Developed the Actions module to centralize internal, portfolio-related, and personal tasks, giving users a single place to organize, assign, and track day-to-day work",
              "Built the Meeting module for managing meeting notes, helping users keep track of discussions, decisions, and follow-ups",
            ],
          },
          {
            name: "Strativ AI Analytics",
            type: "internal",
            summary: "AI usage observability",
            stack: ["Next.js", "TypeScript", "Recharts"],
            points: [
              "Built an AI usage observability platform tracking Claude usage across 50+ developers, enabling the team to monitor usage patterns, analyze AI adoption, and make data-driven decisions around AI tool utilization",
              "Built Recharts views of cost and token usage by project, user, tool, and model, scoped by user role",
            ],
          },
          {
            name: "Recruitment AI",
            type: "internal",
            summary: "AI interview platform",
            stack: ["React", "TypeScript", "Zustand", "WebSocket"],
            points: [
              "Developed an AI interview platform for first-round interviews, making it easier to sort candidates",
              "Built a real-time interview UI streaming AI responses token by token over WebSocket",
            ],
          },
          {
            name: "Pricer",
            type: "client",
            summary: "Return management portal",
            stack: ["React", "Redux Toolkit", "Ant Design"],
            points: [
              "Developed a package-photo upload workflow for return items with QR code scanning, enabling users to quickly open return records on mobile and upload photos directly, simplifying the return inspection process",
            ],
          },
        ],
      },
    ],
  },
];

export const training = [
  {
    id: 1,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPFdj1NGoUXBUelRa-tlKoPUE5cxfdV96IzCg1OcNciQ&s",
    role: "Career Development Program",
    company: "Spring Rain Private Ltd, Dhaka, Bangladesh",
    date: "Jan 2024 - Jun 2024",
    desc: "Completed professional training in JavaScript, Node.js, React, AWS Lambda, Git, DynamoDB, ClickUp, and basic SQA.",
    skills: [
      "JavaScript",
      "Node Js",
      "React Js",
      "AWS Lambda",
      "DynamoDB",
      "Git",
      "ClickUp",
      "SQA",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6W1vSMEDqTzLh8VYEXlBJVrKkBV_mPOSrGA&s",
    school: "Daffodil International University",
    date: "April 2018 - July 2022",
    grade: "3.62/4.00",
    desc: "I completed my Bachelor's degree in Computer Science and Engineering from Daffodil International University. During my time there, I gained a strong foundation in software development, algorithms, data structures, and web technologies. I also participated in various projects and internships that helped me apply my theoretical knowledge to real-world scenarios.", 
    degree: "Bachelor of Science - Computer Science and Engineering",
  },
  {
    id: 1,
    img: "https://udayan.edu.bd/image/ub_logo.jpg",
    school: "Udayan Uchcha Madhyamik Bidyalaya",
    date: "July 2015 - Apr 2017",
    grade: "4.42",
    desc: "I completed my Higher Secondary degree from here.",
    degree: "Science",
  },
  {
    id: 2,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPi56jTJH68vU1EsRc1_1o1y15iLzqOinxTPh9DKCYYw&s",
    school: "Abdur Rob School and College",
    date: "Jan 2014 - Apr 2015",
    grade: "5.00",
    desc: "I completed my Seconday School from Here",
    degree: "Science",
  },
];

export const projects = [
  {
    id: 10,
    title: "DevFit AI",
    description:
      "An AI-assisted tool that finds the best-fit developer for a codebase. Paste a public GitHub repo URL and DevFit builds a digest of the repository, uses Gemini to derive what kind of developer it needs, then ranks a team with deterministic, auditable scores and plain-language explanations. Includes role-based accounts, an admin dashboard, analysis history, and per-user API keys encrypted with AES-256-GCM.",
    tags: ["Next.js", "TypeScript", "React", "Tailwind CSS", "MongoDB", "NextAuth", "Gemini API"],
    category: "web app",
    github: "https://github.com/sazedur-siam/dev-fit-ai",
    webapp: "https://dev-fit-ai.vercel.app",
  },
  {
    id: 9,
    title: "E-Medic Appointment",
    description:
      "A medical appointment platform for patients, doctors, and admins with booking and digital prescriptions. Patients book appointments with doctors, keep their previous prescriptions, and upload prescriptions during an appointment, so their checkup history stays in one place.",
    image:
      "https://cdn.dribbble.com/userupload/13614735/file/original-323207698cdce4d4155355da751f77ee.jpg?crop=0x0-5601x4201&resize=400x300&vertical=center",
    tags: ["React Js", "MongoDb", "Node Js", "Express Js", "Redux", "Firebase"],
    category: "web app",
    github: "https://github.com/sazedur-siam/E-Med-Appointment",
    webapp: "https://emedic-appointment.netlify.app/",
  },
  {
    id: 7,
    title: "TrackTheSun",
    description:
      "A React Native mobile application that tracks the sun's position in real-time to help users find the best seat in public transportation with minimal sun exposure and heat. The app uses GPS and solar position algorithms to provide optimal seating recommendations based on the sun's angle and intensity.",
    image: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=800&auto=format&fit=crop&q=60",
    tags: ["React Native", "Expo", "JavaScript", "Solar Position Algorithm", "GPS"],
    category: "android app",
    github: "https://github.com/sazedur-siam/track-the-sun",
    webapp: "https://github.com/sazedur-siam/track-the-sun",
  },
  {
    id: 0,
    title: "Ema-John",
    description:
      "I built this site a replica of Amazon where user can order item and the site will do the basic task of a ecommerce site.",
    image:
      "https://web.programming-hero.com/home/_next/image?url=https%3A%2F%2Fd3lhjpscbhcyrv.cloudfront.net%2Fproject%2FProject-7-Ema-John.jpg&w=3840&q=75",
    tags: ["React Js", "MongoDb", "Node Js", "Express Js", "Redux"],
    category: "web app",
    github: "https://github.com/sazedur-siam/ema-john-simple",
    webapp: "https://github.com/sazedur-siam/ema-john-simple",
  },
  {
    id: 5,
    title: "Todo Web App",
    description:
      " A Todo Web App made with React JS, Redux, and Material UI. It has a sidebar where users can see all the tasks and can create a new task.",
    image:
      "https://static.packt-cdn.com/products/9781788293969/graphics/assets/626fcf76-83a4-4d76-af71-e405ec211f12.png",
    tags: ["React Js", "Material UI", "Local Storage", "Redux"],
    category: "web app",
    github: "https://github.com/sazedur-siam/ToDoApp-Redux",
    webapp: "https://todot3ng.netlify.app/",
  },
];
