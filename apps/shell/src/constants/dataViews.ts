export const NAV_LINKS = [
  { label: "Experience", href: "#experience" },
  { label: "Tech Stack", href: "#techstack" },
  { label: "Education", href: "#education" },
  { label: "Communication", href: "#languages" },
  { label: "Projects", href: "#projects" },
  { label: "News", href: "#news" },
];

export const LANGUAGES = ["en", "pl"] as const;

export const LANGUAGE_LABELS: Record<(typeof LANGUAGES)[number], string> = {
  pl: "Polski",
  en: "English",
};
