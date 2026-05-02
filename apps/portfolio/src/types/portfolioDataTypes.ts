import type { Award } from "lucide-react";
import { PROJECT_ITEM_LINK_TYPES } from "@/constants";

export type ExperienceIds =
  | "ostendi"
  | "wavy"
  | "activePharma"
  | "tusson"
  | "personal";

export interface Tech {
  name: string;
  level: number;
  description: string;
}

export interface TechCategory {
  title: string;
  items: Tech[];
}

export interface Stat {
  label: string;
  value: string;
  icon: typeof Award;
}

export interface ExperienceEntry {
  id: ExperienceIds;
  company: string;
  role: string;
  dates: string;
  tech: string[];
  achievements: string[];
}

export interface EducationEntry {
  degree: string;
  institution: string;
  year: string;
  focus: string;
}

export interface CommunicationLanguage {
  name: string;
  level: string;
  levelLabel: string;
  code: string;
}

export interface NewsArticle {
  title: string;
  source: string;
  date: string;
  excerpt: string;
  url: string;
}

export type ProjectItemLinkType =
  (typeof PROJECT_ITEM_LINK_TYPES)[keyof typeof PROJECT_ITEM_LINK_TYPES];

export interface ProjectItemType {
  title: string;
  company: string;
  role: string;
  tech: string[];
  description: string;
  keyFeatures: string[];
  link: string;
  status: string;
  linkType: ProjectItemLinkType;
}
