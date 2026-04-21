import { SECTION_IDS } from "./sectionLinks";

export const NAV_LABEL_KEYS = {
  experience: "shell.nav.experience",
  techStack: "shell.nav.techStack",
  education: "shell.nav.education",
  communication: "shell.nav.communication",
  projects: "shell.nav.projects",
  news: "shell.nav.news",
  toggleMenu: "shell.nav.toggleMenu",
} as const;

export const NAV_LINKS = [
  { labelKey: NAV_LABEL_KEYS.experience, href: `#${SECTION_IDS.experience}` },
  { labelKey: NAV_LABEL_KEYS.techStack, href: `#${SECTION_IDS.techStack}` },
  { labelKey: NAV_LABEL_KEYS.education, href: `#${SECTION_IDS.education}` },
  { labelKey: NAV_LABEL_KEYS.communication, href: `#${SECTION_IDS.languages}` },
  { labelKey: NAV_LABEL_KEYS.projects, href: `#${SECTION_IDS.projects}` },
  { labelKey: NAV_LABEL_KEYS.news, href: `#${SECTION_IDS.news}` },
] as const;
