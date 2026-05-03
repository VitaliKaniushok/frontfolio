export const en = {
  common: {
    languages: {
      en: "English",
      pl: "Polski",
    },
  },
  shell: {
    meta: {
      title: "Devfolio",
      description: "Devfolio - Vitali's modern portfolio platform.",
    },
    nav: {
      experience: "Experience",
      techStack: "Tech Stack",
      education: "Education",
      communication: "Communication",
      projects: "Projects",
      news: "News",
      toggleMenu: "Toggle menu",
    },
    footer: {
      rightsReserved: "All rights reserved.",
    },
    home: {
      loadingPortfolio: "Loading portfolio...",
    },
    errors: {
      generic: "Something went wrong",
    },
    logo: {
      ariaLabel: "Devfolio logo",
    },
    theme: {
      label: "Theme",
      dark: "Dark",
      light: "Light",
    },
  },
  portfolio: {
    hero: {
      role: "Frontend Engineer",
      titlePrefix: "Building",
      titleHighlight: "scalable",
      titleSuffix: "digital systems.",
      description:
        "Crafting high-performance applications with modern architectures. 9+ years of shipping production-grade software.",
      viewExperience: "View Experience",
      viewProjects: "View Projects",
      downloadCV: "Download CV",
      portraitAlt: "Developer portrait",
      quotes: [
        '"Any fool can write code that a computer can understand. Good programmers write code that humans can understand." — Martin Fowler',
        '"First, solve the problem. Then, write the code." — John Johnson',
        '"Simplicity is prerequisite for reliability." — Edsger W. Dijkstra',
        '"The best architectures emerge from self-organizing teams." — Agile Manifesto',
      ],
    },
    stats: [
      { label: "Professional Experience", value: "9+" },
      { label: "Scalable Architecture", value: "Microfrontends" },
      { label: "UI/UI reusability", value: "Design Systems" },
      { label: "Development Mindset", value: "End-to-End" },
    ],
    experience: {
      overTitle: "Career",
      title: "Experience",
      items: [
        {
          id: "ostendi",
          company: "Ostendi Global Sp. z o.o. (Warsaw)",
          role: "Frontend Engineer",
          dates: "2022 - Present",
          achievements: [
            "Designing and developing HR platform features using React and TypeScript in an Agile environment",
            "Refactoring the legacy codebase, resulting in improved performance (approximately 30% faster load times) and reduced technical debt",
            "Taking responsibility for frontend architectural decisions for new modules (component structure, state management)",
            "Integrating complex REST APIs and ensuring reliable data flow between services",
            "Conducting code reviews and maintaining coding standards",
            "Collaborating with backend, QA teams, and product stakeholders to deliver end-to-end functionality",
          ],
        },
        {
          id: "wavy",
          company: "Wavy Apps / Brightforce Sp. z o.o. (Warsaw)",
          role: "Mid Frontend Developer",
          dates: "2020 - 2022",
          achievements: [
            "Developing and maintaining scalable web applications for real estate and sales automation platforms",
            "Integrating the frontend layer with Salesforce CRM and external APIs",
            "Delivering solutions based on Veeva CRM and Veeva Vault for enterprise clients",
            "Optimizing existing legacy modules, leading to improved system stability and performance",
          ],
        },
        {
          id: "activePharma",
          company: "Active Pharma Sp. z o.o. (Warsaw)",
          role: "Junior Frontend Developer - Frontend Developer",
          dates: "2016 - 2020",
          achievements: [
            "Developing web applications and interactive marketing tools for pharmaceutical clients (GSK, Pfizer, Takeda, Adamed, Johnson & Johnson)",
            "Integrating applications with Salesforce and Veeva CRM systems",
            "Collaborating directly with business stakeholders to translate requirements into functional features",
          ],
        },
        {
          id: "tusson",
          company: "Tusson, Belarus",
          role: "Electronics Engineer / Deputy Branch Manager",
          dates: "2011 - 2015",
          achievements: [
            "Maintaining and servicing ATMs and payment terminals for financial institutions",
            "Diagnosing and repairing electronic systems in compliance with strict SLAs",
            "Coordinating the technical team's work (leadership responsibilities)",
            "Collaborating with banks and enterprise clients",
          ],
        },
      ],
    },
    techStack: {
      overTitle: "Skills",
      title: "Tech Stack",
      categories: [
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
              description:
                "ES6+, strict typing, design patterns, asynchronous logic",
            },
            {
              name: "State & Data Management",
              level: 90,
              description: "Redux, TanStack Query",
            },
            {
              name: "UI & Styling",
              level: 92,
              description:
                "CSS3, SCSS, Tailwind CSS, Responsive Design Systems",
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
              description:
                "ESLint, Prettier, automated linting, peer code reviews",
            },
            {
              name: "Testing & Debugging",
              level: 90,
              description: "Postman, Browser DevTools, API mocking",
            },
          ],
        },
      ],
    },
    education: {
      overTitle: "Background",
      title: "Education",
      coursesTitle: "Courses",
      items: [
        {
          degree: "Master's degree in Electronics",
          institution: "Yanka Kupala State University of Grodno",
          year: "2006",
          focus: "Electronics",
        },
      ],
      courses: [
        "Programming Course - GoWork (2016)",
        "Online Training: React, TypeScript, Next.js, Node.js, Docker, Git",
      ],
    },
    languages: {
      overTitle: "Communication",
      title: "Languages",
      items: [
        {
          name: "Polish",
          level: "fluent",
          levelLabel: "Fluent",
          code: "PL",
        },
        {
          name: "English",
          level: "b2",
          levelLabel: "B2 - Upper Intermediate",
          code: "EN",
        },
        {
          name: "Belarusian",
          level: "native",
          levelLabel: "Native",
          code: "BE",
        },
        {
          name: "Russian",
          level: "native",
          levelLabel: "Native",
          code: "RU",
        },
      ],
    },
    news: {
      overTitle: "Reading",
      title: "Tech News",
      readMore: "Read more",
      items: [
        {
          title: "The Future of Server Components in React 19",
          source: "React Blog",
          date: "Mar 2026",
          excerpt:
            "How React Server Components are reshaping the way we build data-driven applications.",
          url: "#",
        },
        {
          title: "Scaling Kubernetes to 10,000 Nodes",
          source: "CNCF Blog",
          date: "Feb 2026",
          excerpt:
            "Lessons learned from running Kubernetes at massive scale in production environments.",
          url: "#",
        },
        {
          title: "TypeScript 6.0: What's New",
          source: "TypeScript Blog",
          date: "Feb 2026",
          excerpt:
            "Pattern matching, improved inference, and the new decorator metadata API.",
          url: "#",
        },
        {
          title: "Edge Computing: The Next Frontier",
          source: "Vercel Blog",
          date: "Jan 2026",
          excerpt:
            "Moving compute closer to users with edge functions and distributed databases.",
          url: "#",
        },
      ],
    },
    projects: {
      overTitle: "Realizations",
      title: "Projects and Architecture",
      description:
        "My professional experience is based on building closed business systems (CRM/HR Tech). Therefore, the projects presented here are enterprise-class systems and subscription-based platforms with restricted access. To demonstrate my engineering skills in practice, I invite you to explore the source code of my Portfolio, which I designed as a showcase Monorepo architecture.",
      items: [
        {
          title: "Personal Portfolio System (Open Source Showcase)",
          company: "Personal Demonstration Project - Devfolio",
          role: "Lead Architect / Fullstack Developer",
          tech: [
            "Next.js",
            "TypeScript",
            "Monorepo",
            "Microfrontends",
            "Module Federation",
            "pnpm",
            "Turbopack",
            "Docker",
            "GitHub Actions",
          ],
          description:
            "Demonstration project presenting a modern approach to frontend architecture. Focused on maximum performance, scalability, and CI/CD automation.",
          keyFeatures: [
            "Implementation of Microfrontends architecture using Module Federation",
            "Monorepo management with pnpm workspaces and Turborepo",
            "Application containerization (Docker) and full CI/CD pipeline in GitHub Actions",
            "Optimization for server-side rendering (Next.js)",
          ],
          status: "Public",
          link: "https://github.com/VitaliKaniushok/frontfolio",
          linkType: "github",
        },
        {
          title: "Comprehensive SaaS HR Tech Platform",
          company: "Ostendi Global",
          role: "Frontend Engineer",
          tech: [
            "React",
            "TypeScript",
            "Redux",
            "REST API",
            "State Management",
            "CI/CD (GitLab)",
            "Agile",
          ],
          description:
            "Advanced HR ecosystem supporting the full employee lifecycle in an organization — from recruitment, competency diagnosis and development, to payroll analytics.",
          keyFeatures: [
            "Modernization of architecture (Legacy code refactoring), resulting in a 30% performance increase",
            "Designing a modular structure of reusable UI components",
            "Implementation of advanced application state management mechanisms",
            "Ensuring data security in accordance with enterprise standards",
            "Development of key platform modules such as Onboarding/Offboarding, HCM, Training Management, Absences, Time Tracking, Skills Matrix, Requests and Whistleblowers, Pay Transparency",
          ],
          status: "Enterprise SaaS (Subscription required)",
          link: "https://ostendihr.pl/",
          linkType: "external",
        },
        {
          title: "Real Estate & Sales Automation Systems",
          company: "Wavy Apps / Brightforce",
          role: "Mid Frontend Developer",
          tech: [
            "Salesforce SDK",
            "Salesforce LWC",
            "Veeva CRM",
            "Apex",
            "JavaScript",
            "External APIs",
          ],
          description:
            "Dedicated business applications integrating sales processes with Enterprise-class systems. Solutions for the real estate and pharmaceutical industries, based on the Salesforce platform.",
          keyFeatures: [
            "Design and implementation of complex real estate sales flows, including SAP data flow integration",
            "Deep integration with Salesforce CRM and external provider APIs",
            "Development of applications for the Interparking platform using LWC (Lightning Web Components)",
            "Creating dedicated solutions for the Pharmaceutical industry (Veeva Vault/CRM)",
          ],
          status: "Commercial / Salesforce Platform",
          link: "https://wavyapps.com/",
          linkType: "external",
        },
        {
          title: "Digital Pharma, CLM & Web Management",
          company: "Active Pharma",
          role: "Junior-Frontend Developer",
          tech: [
            "JavaScript",
            "HTML5/CSS3",
            "Salesforce",
            "Veeva",
            "WordPress",
          ],
          description:
            "Interactive marketing tools and web infrastructure maintenance for leading pharmaceutical brands.",
          keyFeatures: [
            "Project delivery for brands: GSK, Pfizer, Takeda, J&J, Sanofi, Adamed",
            "Comprehensive maintenance, updates, and development of websites based on the WordPress CMS",
            "Integration of applications with Veeva Vault and Salesforce CRM ecosystems",
            "Optimization of assets for smooth performance on mobile devices",
          ],
          status: "Confidential / Closed Platform",
          link: "https://www.activepharma.pl/",
          linkType: "external",
        },
      ],
    },
  },
} as const;
