import { Activity, GitCommit, Clock, Zap } from "lucide-react";

export const QUOTES = [
  '"Any fool can write code that a computer can understand. Good programmers write code that humans can understand." — Martin Fowler',
  '"First, solve the problem. Then, write the code." — John Johnson',
  '"Simplicity is prerequisite for reliability." — Edsger W. Dijkstra',
  '"The best architectures emerge from self-organizing teams." — Agile Manifesto',
];

export const STATS = [
  { label: "Years Experience", value: "9+", icon: Clock },
  { label: "LINES OF CODE", value: "1M+", icon: GitCommit },
  { label: "UI Components", value: "200+", icon: Zap },
  { label: "Dockerized Workflow", value: "100%", icon: Activity },
];

export const EXPERIENCE = [
  {
    company: "Ostendi Global Sp. z o.o. (Warsaw)",
    role: "Frontend Developer",
    dates: "2022 – Present",
    tech: ["React", "TypeScript", "Redux", "Node.js", "Webpack", "Docker"],
    achievements: [
      "Developed and maintained HR applications using React and TypeScript",
      "Refactored legacy code and improved application performance",
      "Implemented new features according to business requirements",
      "Integrated with REST APIs",
      "Conducted code reviews and maintained coding standards",
      "Collaborated with backend and product teams in an Agile environment",
    ],
    architecture: "Coming soon.",
  },
  {
    company: "Wavy Apps / Brightforce Sp. z o.o. (Warsaw)",
    role: "Frontend Developer",
    dates: "2020 – 2022",
    tech: ["JavaScript", "HTML5", "CSS3", "Salesforce", "REST API"],
    achievements: [
      "Built web applications for the real estate sector (sales automation)",
      "Integrated with Salesforce CRM",
      "Developed systems based on Veeva CRM and Veeva Vault",
      "Maintained and optimized existing solutions",
    ],
    architecture: "Coming soon.",
  },
  {
    company: "Active Pharma Sp. z o.o (Warsaw)",
    role: "Frontend Developer",
    dates: "2016 – 2020",
    tech: ["JavaScript", "HTML5", "CSS3", "Salesforce", "Wordpress"],
    achievements: [
      "Developed and maintained web applications for pharmaceutical companies",
      "Implemented interactive marketing materials",
      "Worked with Salesforce and Veeva CRM systems",
    ],
    architecture: "Coming soon.",
  },
  {
    company: "Tusson, Belarus",
    role: "Electronics Engineer / Deputy Branch Manager",
    dates: "2011 – 2015",
    tech: [],
    achievements: [
      "Serviced and maintained payment terminals and ATMs for financial institutions",
      "Diagnosed and repaired electronic devices",
      "Coordinated technical team operations (Deputy Branch Manager from 2012)",
      "Collaborated with banks and business clients",
    ],
    architecture: "",
  },
];
