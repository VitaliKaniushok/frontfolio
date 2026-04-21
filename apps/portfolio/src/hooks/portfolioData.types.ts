import type { Award } from "lucide-react";

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
