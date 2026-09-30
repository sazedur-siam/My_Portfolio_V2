import { GiBearFace } from "react-icons/gi";
import {
  SiAndroidstudio,
  SiAntdesign,
  SiExpo,
  SiExpress,
  SiFigma,
  SiFirebase,
  SiGit,
  SiJavascript,
  SiMongodb,
  SiMui,
  SiNetlify,
  SiNodedotjs,
  SiPostman,
  SiReact,
  SiRedux,
  SiShadcnui,
  SiStyledcomponents,
  SiTailwindcss,
} from "react-icons/si";
import { TbBrandReactNative, TbRoute } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";

export const Bio = {
  name: "Md. Sazedur Rahman",
  roles: ["Software Engineer"],
  description:
    "Software Engineer with 2+ years of production experience building scalable web applications using React, Next.js, TypeScript, Node.js, Express, and MongoDB. Experienced in developing customer-facing platforms, real-time systems, analytics dashboards, and AI-powered features used by 1,000+ customers.",
  github: "https://github.com/sazedur-siam",
  resume:
    "https://drive.google.com/file/d/1ZZVw9LoLzhKHRan4hdTnwIR6GHBwE5Zk/view?usp=sharing",
  linkedin: "https://www.linkedin.com/in/md-sazedur-rahman-837179335/",
};

export const skills = [
  {
    title: "Frontend",
    skills: [
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "React Js", icon: SiReact, color: "#61DAFB" },
      { name: "Redux", icon: SiRedux, color: "#764ABC" },
      { name: "Zustand", icon: GiBearFace, color: "#C9853A" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Ant Design", icon: SiAntdesign, color: "#1677FF" },
      { name: "Material UI", icon: SiMui, color: "#007FFF" },
      { name: "Styled Components", icon: SiStyledcomponents, color: "#DB7093" },
      { name: "Shadcn UI", icon: SiShadcnui },
    ],
  },
  {
    title: "Backend",
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
    title: "Others",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
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
    company: "Strativ",
    location: "Dhaka, Bangladesh",
    date: "Oct 2024 - Present",
    tagline:
      "Swedish software company with teams in Stockholm and Dhaka, building software for Scandinavian clients",
    roles: [
      {
        title: "Associate Software Engineer",
        team: "Scandinavian Fullstack BD",
        date: "Dec 2025 - Present",
        projects: [
          {
            name: "Pricer",
            type: "client",
            summary: "Returns (RMA) portal",
            team: "team of 3",
            stack: ["React", "Redux Toolkit", "Ant Design", "react-intl"],
            points: [
              "Built package-photo upload for return tickets, with a QR code for direct upload from the customer's phone",
              "Implemented a responsive layout for handheld scanners (PDAs) used by warehouse staff to process returns",
              "Delivered illustrated Claim Instructions per claim reason and a checklist that gates ticket submission",
            ],
          },
          {
            name: "Strativ AI Analytics",
            type: "internal",
            summary: "AI usage observability",
            team: "team of 5-10",
            stack: ["Next.js 16", "TypeScript", "Recharts"],
            points: [
              "Engineered a six-section AI usage and cost dashboard on Next.js 16 async Server Components",
              "Built Recharts views of cost and token usage by project, user, tool, and model, scoped by user role",
            ],
          },
          {
            name: "Recruitment AI",
            type: "internal",
            summary: "AI interview platform",
            team: "team of 5",
            stack: ["React 19", "TypeScript", "Zustand", "WebSocket"],
            points: [
              "Developed a real-time interview UI streaming AI responses token by token over WebSocket",
              "Built chunked video/audio capture with IndexedDB buffering and auto-retry, so recordings survive failed uploads",
              "Created an integrity monitor flagging tab switches, clipboard events, DevTools use, and typing anomalies",
            ],
          },
        ],
      },
      {
        title: "Software Engineer (Frontend)",
        team: "Strativ BD",
        date: "Oct 2024 - Nov 2025",
        projects: [
          {
            name: "IMS",
            summary: "Investment management system",
            team: "team of 5",
            stack: ["React", "TypeScript", "TanStack Query", "Lexical", "dnd kit"],
            points: [
              "Delivered 5 modules (Actions, Decisions, Dealflow, HotDeals, API Keys) from UI design to API integration",
              "Built a Lexical rich-text editor with real-time WebSocket sync and a drag-and-drop Kanban board (dnd kit)",
              "Optimized rendering of large record sets with list virtualization and pagination",
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
    role: "Software Engineer Intern",
    company: "Spring Rain Pvt. Ltd.",
    date: "Feb 2024 - June 2024",
    desc: "During my internship at Spring Rain Pvt. Ltd., I worked as a Software Engineer Intern where I was responsible for developing and maintaining web applications using Next.js and Node.js. I collaborated with senior developers to implement new features, fix bugs, and optimize application performance. This experience enhanced my skills in full-stack development and provided me with valuable insights into the software development lifecycle.",
    skills: [
      "JavaScript",
      "TypeScript",
      "Next Js",
      "Tailwind CSS",
      "Material UI",
      "Node Js",
      "Express JS",
      "MongoDB",
      "Postman",
      "Docker",
      "AWS",
    ],
  }
];

export const education = [
  {
    id: 0,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6W1vSMEDqTzLh8VYEXlBJVrKkBV_mPOSrGA&s",
    school: "Daffodil International University",
    date: "April 2018 - July 2022",
    grade: "3.62 CGPA",
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
    title: "DevFit",
    description:
      "An AI-assisted tool that finds the best-fit developer for a codebase. Paste a public GitHub repo URL and DevFit builds a digest of the repository, uses Gemini to derive what kind of developer it needs, then ranks a team with deterministic, auditable scores and plain-language explanations. Includes role-based accounts, an admin dashboard, analysis history, and per-user API keys encrypted with AES-256-GCM.",
    tags: ["Next.js", "TypeScript", "React", "Tailwind CSS", "MongoDB", "NextAuth", "Gemini AI"],
    category: "web app",
    github: "https://github.com/sazedur-siam/dev-fit-ai",
    webapp: "https://dev-fit-ai.vercel.app",
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
    id: 9,
    title: "E-Medic",
    description:
      "I made an appointment site for making appointments with doctors. Users can also store their previous prescriptions and upload prescriptions during an appointment. This helps users to store their previous checkup history easily.",
    image:
      "https://cdn.dribbble.com/userupload/13614735/file/original-323207698cdce4d4155355da751f77ee.jpg?crop=0x0-5601x4201&resize=400x300&vertical=center",
    tags: ["React Js", "MongoDb", "Node Js", "Express Js", "Redux", "Firebase"],
    category: "web app",
    github: "https://github.com/sazedur-siam/E-Med-Appointment",
    webapp: "https://emedic-appointment.netlify.app/",
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
