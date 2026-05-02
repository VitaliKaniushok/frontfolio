import { Workflow, Blocks, Award, Palette } from "lucide-react";
import type { ExperienceIds } from "@/types";

export const STAT_ICONS = [Award, Blocks, Palette, Workflow] as const;

export const PROJECT_ITEM_LINK_TYPES = {
  github: "github",
  external: "external",
} as const;

export const EXPERIENCE_TECH: { [key in ExperienceIds]: string[] } = {
  personal: [
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Monorepo",
    "Microfrontends",
    "Module Federation",
    "pnpm",
    "Turbopack",
    "Webpack",
    "Docker",
    "CI/CD (GitHub Actions)",
    "SCSS",
    "ESlint",
    "Prettier",
  ],
  ostendi: [
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
  wavy: [
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
  activePharma: [
    "JavaScript",
    "Node.js",
    "HTML5",
    "CSS3",
    "Bootstrap",
    "Salesforce",
    "WordPress",
    "Git",
  ],
  tusson: [],
};
