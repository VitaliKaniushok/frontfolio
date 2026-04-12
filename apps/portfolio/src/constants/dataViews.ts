import { Activity, GitCommit, Clock, Zap } from "lucide-react";

// Quotes data is currently hardcoded, but will be fetched from an API in the future.
export const QUOTES = [
  '"Any fool can write code that a computer can understand. Good programmers write code that humans can understand." — Martin Fowler',
  '"First, solve the problem. Then, write the code." — John Johnson',
  '"Simplicity is prerequisite for reliability." — Edsger W. Dijkstra',
  '"The best architectures emerge from self-organizing teams." — Agile Manifesto',
];

// Stats data is currently hardcoded, but will be fetched from an API in the future.
export const STATS = [
  { label: "Years Experience", value: "9+", icon: Clock },
  { label: "LINES OF CODE", value: "1M+", icon: GitCommit },
  { label: "UI Components", value: "200+", icon: Zap },
  { label: "Dockerized Workflow", value: "100%", icon: Activity },
];

// Experience data is currently hardcoded, but will be fetched from an API in the future.
export const EXPERIENCE = [
  {
    company: "Ostendi Global Sp. z o.o. (Warsaw)",
    role: "Frontend Engineer",
    dates: "2022 – Present",
    tech: [
      "React",
      "JavaScript",
      "TypeScript",
      "Redux",
      "Tanstack Query",
      "GraphQL",
      "REST API",
      "Node.js",
      "Webpack",
      "Docker",
      "CI/CD (GitLab)",
      "SCSS",
      "Bootstrap",
      "Postman",
      "ESlint",
      "Prettier",
      "Jira",
    ],
    achievements: [
      "Designing and developing HR platform features using React and TypeScript in an Agile environment",
      "Refactoring the legacy codebase, resulting in improved performance (approximately 30% faster load times) and reduced technical debt",
      "Taking responsibility for frontend architectural decisions for new modules (component structure, state management)",
      "Integrating complex REST APIs and ensuring reliable data flow between services",
      "Conducting code reviews and maintaining coding standards",
      "Collaborating with backend, QA teams, and product stakeholders to deliver end-to-end functionality",
    ],
    architecture: "Coming soon.",
  },
  {
    company: "Wavy Apps / Brightforce Sp. z o.o. (Warsaw)",
    role: "Mid Frontend Developer",
    dates: "2020 – 2022",
    tech: [
      "JavaScript",
      "Apex",
      "SOQL",
      "HTML5",
      "CSS3",
      "REST API",
      "Salesforce",
      "Veeva CRM",
      "Bitbucket",
    ],
    achievements: [
      "Developing and maintaining scalable web applications for real estate and sales automation platforms",
      "Integrating the frontend layer with Salesforce CRM and external APIs",
      "Delivering solutions based on Veeva CRM and Veeva Vault for enterprise clients",
      "Optimizing existing legacy modules, leading to improved system stability and performance",
    ],
    architecture: "Coming soon.",
  },
  {
    company: "Active Pharma Sp. z o.o (Warsaw)",
    role: "Junior Frontend Developer - Frontend Developer",
    dates: "2016 – 2020",
    tech: [
      "JavaScript",
      "Node.js",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "Salesforce",
      "Wordpress",
      "Git",
    ],
    achievements: [
      "Developing web applications and interactive marketing tools for pharmaceutical clients (GSK, Pfizer, Takeda, Adamed, Johnson & Johnson)",
      "Integrating applications with Salesforce and Veeva CRM systems",
      "Collaborating directly with business stakeholders to translate requirements into functional features",
    ],
    architecture: "Coming soon.",
  },
  {
    company: "Tusson, Belarus",
    role: "Electronics Engineer / Deputy Branch Manager",
    dates: "2011 – 2015",
    tech: [],
    achievements: [
      "Maintaining and servicing ATMs and payment terminals for financial institutions",
      "Diagnosing and repairing electronic systems in compliance with strict SLAs",
      "Coordinating the technical team’s work (leadership responsibilities)",
      "Collaborating with banks and enterprise clients",
    ],
    architecture: "",
  },
];

// Tech stack data is currently hardcoded, but will be fetched from an API in the future.
export interface Tech {
  name: string;
  level: number;
  description: string;
}

export interface TechCategory {
  title: string;
  items: Tech[];
}

export const TECH_STACK: TechCategory[] = [
  {
    title: "Frontend",
    items: [
      {
        name: "React & Next.js",
        level: 95,
        description: "Hooks, Server Components, SSR/SSG",
      },
      {
        name: "TypeScript & JS",
        level: 95,
        description: "ES6+, strict typing, design patterns, asynchronous logic",
      },
      {
        name: "State & Data Management",
        level: 90,
        description: "Redux, TanStack Query",
      },
      {
        name: "UI & Styling",
        level: 92,
        description: "CSS3, SCSS, Tailwind CSS, Responsive Design Systems",
      },
    ],
  },
  {
    title: "Backend",
    items: [
      {
        name: "Node.js",
        level: 80,
        description:
          "Runtime environment, build tools, script automation, NestJS (Learning)",
      },
      {
        name: "Databases & APIs",
        level: 85,
        description: "REST API, GraphQL, PostgreSQL (Basics/Learning)",
      },
    ],
  },
  {
    title: "Architecture & Infrastructure",
    items: [
      {
        name: "Microfrontends",
        level: 85,
        description: "Module Federation, scalable frontend architecture",
      },
      {
        name: "Enterprise Solutions",
        level: 80,
        description: "Salesforce ecosystem, Veeva CRM integration",
      },
      {
        name: "DevOps & Deployment",
        level: 85,
        description: "Docker, GitHub Actions, CI/CD pipelines, Webpack",
      },
    ],
  },
  {
    title: "Tooling & Quality (DX)",
    items: [
      {
        name: "Version Control & Workflow",
        level: 90,
        description: "Git, Jira, Agile methodologies",
      },
      {
        name: "Code Quality",
        level: 95,
        description: "ESLint, Prettier, automated linting, peer code reviews",
      },
      {
        name: "Testing & Debugging",
        level: 90,
        description: "Postman, Browser DevTools, API mocking",
      },
    ],
  },
];

// Education data is currently hardcoded, but will be fetched from an API in the future.
export const EDUCATION = [
  {
    degree: "Master’s degree in Electronics",
    institution: "Yanka Kupala State University of Grodno",
    year: "2006",
    focus: "Electronics",
  },
];

export const COURSES = [
  "Programming Course – GoWork (2016)",
  "Online Training: React, TypeScript, Next.js, Node.js, Docker, Git",
];
