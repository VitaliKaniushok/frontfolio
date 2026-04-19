export const NAV_LINKS = [
  { label: "Experience", href: "#experience" },
  { label: "Tech Stack", href: "#techstack" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "News", href: "#news" },
];

export const LANGUAGES = ["en", "pl"] as const;

export const LANGUAGE_LABELS: Record<(typeof LANGUAGES)[number], string> = {
  pl: "Polski",
  en: "English",
};
