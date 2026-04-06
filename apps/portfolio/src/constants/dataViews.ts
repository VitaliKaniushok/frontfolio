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
        name: "JavaScript",
        level: 95,
        description: "ES6+, asynchronous programming, design patterns",
      },
      {
        name: "React",
        level: 95,
        description:
          "Primary UI framework – hooks, suspense, server components",
      },
      {
        name: "TypeScript",
        level: 92,
        description: "Strict typing, generics, utility types",
      },
      {
        name: "Next.js",
        level: 55,
        description: "SSR, SSG, API routes, middleware",
      },
      // {
      //   name: "Tailwind CSS",
      //   level: 90,
      //   description: "Utility-first CSS, design systems",
      // },
      {
        name: "GraphQL",
        level: 65,
        description: "Apollo Client, codegen, subscriptions",
      },
    ],
  },
  {
    title: "Backend",
    items: [
      {
        name: "Node.js",
        level: 65,
        description: " NestJS, streaming",
      },
      {
        name: "PostgreSQL",
        level: 88,
        description: "Indexing, partitioning, query optimization",
      },
      {
        name: "Postman",
        level: 80,
        description: "API testing, documentation",
      },
      {
        name: "REST APIs",
        level: 92,
        description: "OpenAPI, versioning",
        // description: "OpenAPI, versioning, HATEOAS",
      },
    ],
  },
  {
    title: "DevOps",
    items: [
      {
        name: "Docker",
        level: 88,
        description: "Multi-stage builds, compose, optimization",
      },
      {
        name: "CI/CD",
        level: 65,
        description: "GitHub Actions, pipeline design, automation",
      },
      {
        name: "Git",
        level: 90,
        description: "Version control, branching, merging",
      },
    ],
  },
  {
    title: "Architecture",
    items: [
      {
        name: "Microfrontends",
        level: 85,
        description: "Module federation, single-spa",
      },
      // {
      //   name: "CQRS",
      //   level: 78,
      //   description: "Command Query Responsibility Segregation",
      // },
      // {
      //   name: "Event-Driven",
      //   level: 82,
      //   description: "Kafka, RabbitMQ, event sourcing",
      // },
      {
        name: "System Design",
        level: 90,
        description: "Scalability, reliability, performance",
      },
      // {
      //   name: "DDD",
      //   level: 80,
      //   description: "Bounded contexts, aggregates, sagas",
      // },
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
  {
    degree: "B.Sc. Computer Science",
    institution: "State University",
    year: "2015",
    focus: "Algorithms, Data Structures & Web Technologies",
  },
];

export const COURSES = [
  "Programming Course – GoWork (2016)",
  "Online Training: React, TypeScript, Next.js, Node.js, Docker, Git",
];
