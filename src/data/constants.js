import {
  SiAnthropic,
  SiAntdesign,
  SiClaude,
  SiCss,
  SiDocker,
  SiExpress,
  SiGithubactions,
  SiGooglegemini,
  SiHtml5,
  SiJavascript,
  SiModelcontextprotocol,
  SiMongodb,
  SiMui,
  SiNextdotjs,
  SiNodedotjs,
  SiOllama,
  SiPostgresql,
  SiPython,
  SiReact,
  SiReactquery,
  SiRedux,
  SiShadcnui,
  SiSocketdotio,
  SiStyledcomponents,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { GiBearFace } from "react-icons/gi";
import {
  TbBrain,
  TbBrandReactNative,
  TbCoins,
  TbFileText,
  TbInfinity,
  TbPrompt,
  TbRobot,
  TbSitemap,
  TbSparkles,
  TbSql,
  TbTerminal2,
  TbTestPipe,
  TbTopologyStar3,
} from "react-icons/tb";

export const Bio = {
  name: "Md. Sazedur Rahman",
  roles: ["Fullstack Software Engineer"],
  title: "Fullstack Software Engineer",
  // Hero statement: [dark part, muted part].
  tagline: [
    "Turning complex ideas into simple, user-friendly solutions,",
    "following the best practices of AI tools.",
  ],
  intro: "Fullstack engineer working with React, Next.js, Node.js and LLMs.",
  location: "Dhaka, Bangladesh",
  // IANA zone for the live local-time clock in the top bar.
  timezone: "Asia/Dhaka",
  availability: "Open to remote & international roles",
  experience: "2.5 years",
  // Leave empty to hide the email row in Contact.
  email: "",
  stats: [
    { value: "2.5", label: "Years shipping production apps" },
    { value: "650K+", label: "Companies screened in Dealflow" },
    { value: "50+", label: "Developers tracked on AI Analytics" },
    { value: "5", label: "Investment targets found via IMS" },
  ],
  description:
    "I'm a Fullstack Software Engineer who builds web applications from database to UI, with a growing focus on AI engineering. Over the past 2.5 years at a Swedish software company, I've shipped features for an investment management platform covering 650K+ companies, an AI usage observability platform tracking 50+ developers, and an AI-driven interview platform. I work closely with clients to turn business needs into clear requirements and reliable, user-friendly software.",
  github: "https://github.com/sazedur-siam",
  resume:
    "https://drive.google.com/file/d/1j7WgpYKSRDY-KgBz-6IF7w5PWFxFzr1J/view?usp=drive_link",
  linkedin: "https://www.linkedin.com/in/md-sazedur-rahman-837179335/",
};

export const skills = [
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", iconBg: "#000000" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "HTML", icon: SiHtml5, color: "#E34F26" },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
      { name: "React Native", icon: TbBrandReactNative, color: "#61DAFB" },
      { name: "Redux Toolkit", icon: SiRedux, color: "#764ABC" },
      { name: "Zustand", icon: GiBearFace, color: "#443E38" },
      { name: "TanStack Query", icon: SiReactquery, color: "#FF4154" },
      { name: "WebSocket", icon: SiSocketdotio, color: "#010101" },
    ],
  },
  {
    title: "UI & Styling",
    skills: [
      { name: "CSS", icon: SiCss, color: "#663399" },
      { name: "shadcn/ui", icon: SiShadcnui, color: "#000000" },
      { name: "MUI", icon: SiMui, color: "#007FFF" },
      { name: "Ant Design", icon: SiAntdesign, color: "#0170FE" },
      { name: "styled-components", icon: SiStyledcomponents, color: "#DB7093" },
    ],
  },
  {
    title: "Backend & DB",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
      { name: "Express.js", icon: SiExpress, color: "#000000" },
      { name: "SQL", icon: TbSql, color: "#336791" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    ],
  },
  {
    title: "Testing, DevOps & Cloud",
    skills: [
      { name: "Playwright", icon: TbTestPipe, color: "#2EAD33" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "GitHub Actions", icon: SiGithubactions, color: "#2088FF" },
      { name: "CI/CD", icon: TbInfinity, color: "#0A66C2" },
      { name: "Vercel", icon: SiVercel, color: "#000000" },
    ],
  },
  {
    title: "AI Engineering",
    skills: [
      { name: "Prompt Engineering", icon: TbPrompt },
      { name: "Context Engineering", icon: TbBrain },
      { name: "RAG", icon: TbTopologyStar3 },
      { name: "Agentic Workflows", icon: TbRobot },
      { name: "Token Optimization", icon: TbCoins },
    ],
  },
  {
    title: "LLMs & Agents",
    skills: [
      { name: "Claude API", icon: SiAnthropic, color: "#191919" },
      { name: "Gemini API", icon: SiGooglegemini, color: "#8E75B2" },
      { name: "MCP Servers", icon: SiModelcontextprotocol, color: "#000000" },
      { name: "Claude Code Skills", icon: TbTerminal2 },
      { name: "Ollama (Local LLMs)", icon: SiOllama, color: "#000000" },
    ],
  },
  {
    title: "AI Practices",
    skills: [
      { name: "AI-Native SDLC", icon: TbSitemap },
      { name: "Claude Code", icon: SiClaude, color: "#D97757" },
      { name: "OpenSpec", icon: TbFileText },
    ],
  },
];

// Points may start with a short "Label: " prefix, which renders in bold.
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
            summary: "Investment Management System",
            stack: ["React", "TypeScript", "TanStack Query", "Lexical", "dnd kit"],
            points: [
              "Dealflow: Built a company screening and analysis module for 650K+ Swedish companies, using investment metrics data to help users identify suitable investment opportunities. Helped to find 5 potential investment companies.",
              "Hot Deals: Built a deal management workflow for moving selected companies from Dealflow into active opportunities, with outreach tracking, communication history, and deal stages.",
              "Actions: Built a centralized task management module for internal, portfolio, and personal work, allowing users to create, assign, and track tasks in one place.",
              "Meetings: Built a meeting management module with a customized Lexical-based rich text editor for recording discussions, decisions, and follow-ups.",
            ],
          },
          {
            name: "Strativ AI Analytics",
            summary: "AI usage observability",
            stack: ["Next.js", "TypeScript", "Recharts"],
            points: [
              "Built an AI usage observability platform that currently tracks Claude usage across 50+ developers, enabling the team to monitor usage patterns, analyze AI adoption, and make data-driven decisions around AI tool utilization.",
            ],
          },
          {
            name: "Recruitment AI",
            summary: "AI interview platform",
            stack: ["React", "TypeScript", "Zustand", "WebSocket"],
            points: [
              "Developed an AI interview platform for first-round interviews, making it easier to sort candidates.",
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
    desc: "Completed professional training in JavaScript, Node.js, Express.js, React, Git, ClickUp, and basic SQA.",
    skills: ["JavaScript", "Node.js", "Express.js", "React", "Git", "ClickUp", "SQA"],
  },
];

export const education = [
  {
    id: 0,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6W1vSMEDqTzLh8VYEXlBJVrKkBV_mPOSrGA&s",
    school: "Daffodil International University",
    date: "Apr 2018 - Jul 2022",
    grade: "CGPA 3.62/4.00",
    desc: "I completed my Bachelor's degree in Computer Science and Engineering from Daffodil International University. During my time there, I gained a strong foundation in software development, algorithms, data structures, and web technologies. I also participated in various projects and internships that helped me apply my theoretical knowledge to real-world scenarios.", 
    degree: "B.Sc. in Computer Science & Engineering",
  },
  {
    id: 1,
    img: "https://udayan.edu.bd/image/ub_logo.jpg",
    school: "Udayan Uchcha Madhyamik Bidyalaya",
    date: "July 2015 - Apr 2017",
    grade: "4.42",
    desc: "I completed my Higher Secondary degree from here.",
    degree: "Higher Secondary Certificate (Science)",
  },
  {
    id: 2,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPi56jTJH68vU1EsRc1_1o1y15iLzqOinxTPh9DKCYYw&s",
    school: "Abdur Rob School and College",
    date: "Jan 2014 - Apr 2015",
    grade: "5.00",
    desc: "I completed my Secondary School Certificate here.",
    degree: "Secondary School Certificate (Science)",
  },
];

export const projects = [
  {
    id: 13,
    title: "DepThreat Analytics",
    description:
      "A VS Code extension, published on the Visual Studio Marketplace, that reads the source code of your installed dependencies and flags behavior that could compromise your machine or leak data: credential theft, data exfiltration, hidden shells, install-time attacks, invisible Unicode payloads and typosquats. It runs 108 checks tuned against real 2025–2026 supply-chain attacks across six ecosystems (npm/pnpm/Yarn, PyPI, Go, Cargo, Composer, Maven/Gradle), with inline diagnostics, Quick Fixes, a findings sidebar, policy gates and shareable Markdown reports. CVE and reputation checks via OSV.dev are opt-in; everything else runs locally.",
    tags: ["TypeScript", "VS Code API", "esbuild", "Vitest", "Zod", "OSV.dev"],
    category: "extension",
    github: "https://github.com/sazedur-siam/deep-threat-analytics",
    webapp: "https://depthreat-analytics.vercel.app",
  },
  {
    id: 14,
    title: "LUI",
    description:
      "A course player for your own folders. LUI turns a folder of videos, PDFs, notebooks and notes into a course you can work through in the browser, with modules and lessons, a video player, notes, transcripts and progress tracking that remembers where you stopped. The hosted version reads folders in the browser and repackages MKV on the fly; run locally, it uses ffmpeg to convert almost any video format.",
    tags: ["Next.js", "React 19", "TypeScript", "shadcn/ui", "Tailwind CSS", "Video.js", "ffmpeg"],
    category: "web app",
    github: "https://github.com/sazedur-siam/LUI",
    webapp: "https://luilearn.vercel.app",
  },
  {
    id: 11,
    title: "Autofill AI",
    description:
      "A Chrome extension that fills job application forms on Greenhouse, Lever, Ashby and custom sites from your resume, using the Gemini API. Upload your resume once and Gemini turns it into an editable profile; on an application page it reads every empty field and the job description, proposes answers you review in a side panel, then fills the form and attaches your resume. It also scores your fit for a LinkedIn job, marking each requirement as met, partial or missing with evidence from your resume. You always submit the form yourself.",
    tags: ["TypeScript", "React", "Chrome Extension", "Gemini API", "Vite", "Vitest"],
    category: "extension",
    github: "https://github.com/sazedur-siam/autofill_ai",
  },
  {
    id: 10,
    title: "DevFit AI",
    description:
      "An AI-powered developer evaluation tool that analyzes GitHub repositories, matches developers against required skillsets, and provides explainable rankings to help teams identify suitable developers for specific projects. Paste a public repo URL and DevFit builds a digest of the codebase, uses Gemini to derive the developer profile it needs, then ranks a team with deterministic, auditable scores and plain-language explanations.",
    tags: ["Next.js", "TypeScript", "MongoDB", "Gemini API"],
    category: "web app",
    github: "https://github.com/sazedur-siam/dev-fit-ai",
    webapp: "https://dev-fit-ai.vercel.app",
  },
  {
    id: 12,
    title: "Kuk Website",
    description:
      "The product website for Kuk – Hide N Seek (কুক – লুকোচুরি), a free 3D multiplayer hide-and-seek game set in a Bangladeshi village at night. Every page (features, the village and its places, how to play, updates and the tech behind the game) is prerendered from Markdown and JSON content files, so new features and changelog entries need no code changes.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Markdown"],
    category: "web app",
    webapp: "https://kuk-website.vercel.app",
    github: "https://github.com/sazedur-siam/kuk-website",
  },
  {
    id: 9,
    title: "E-Medic Appointment",
    description:
      "A medical appointment platform for patients, doctors, and admins with booking and digital prescriptions. Patients book appointments with doctors, keep their previous prescriptions, and upload prescriptions during an appointment, so their checkup history stays in one place.",
    tags: ["React", "Node.js", "Express.js", "MongoDB"],
    category: "web app",
    github: "https://github.com/sazedur-siam/E-Med-Appointment",
    webapp: "https://emedic-appointment.netlify.app/",
  },
  {
    id: 7,
    title: "TrackTheSun",
    description:
      "A mobile app that uses geolocation and solar-position APIs to suggest the most comfortable commute seat. It plans the route with OSRM and OpenStreetMap, works out the sun's angle along the way with suncalc, and recommends the side of the vehicle with the least sun exposure.",
    tags: ["React Native", "OSRM", "OpenStreetMap", "suncalc", "react-native-maps", "expo-router"],
    category: "android app",
    github: "https://github.com/sazedur-siam/track-the-sun",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Training", href: "#training" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
