export const pl = {
  common: {
    languages: {
      en: "English",
      pl: "Polski",
    },
  },
  shell: {
    meta: {
      title: "Devfolio",
      description: "Devfolio - nowoczesna platforma portfolio Vitalija.",
    },
    nav: {
      experience: "Doświadczenie",
      techStack: "Stack technologiczny",
      education: "Wykształcenie",
      communication: "Komunikacja",
      projects: "Projekty",
      news: "Aktualności",
      toggleMenu: "Przełącz menu",
    },
    footer: {
      rightsReserved: "Wszelkie prawa zastrzeżone.",
    },
    home: {
      loadingPortfolio: "Ładowanie portfolio...",
    },
    errors: {
      generic: "Coś poszło nie tak",
    },
    logo: {
      ariaLabel: "Logo Devfolio",
    },
    theme: {
      label: "Motyw",
      dark: "Ciemny",
      light: "Jasny",
    },
  },
  portfolio: {
    hero: {
      role: "Frontend Engineer",
      titlePrefix: "Buduję",
      titleHighlight: "skalowalne",
      titleSuffix: "systemy cyfrowe.",
      description:
        "Tworzę wysokowydajne aplikacje oparte na nowoczesnej architekturze. Ponad 9 lat dostarczania oprogramowania produkcyjnego.",
      viewExperience: "Zobacz doświadczenie",
      viewProjects: "Zobacz projekty",
      portraitAlt: "Portret developera",
      quotes: [
        '"Każdy głupiec potrafi napisać kod, który zrozumie komputer. Dobry programista pisze kod, który zrozumie człowiek." — Martin Fowler',
        '"Najpierw rozwiąż problem. Potem napisz kod." — John Johnson',
        '"Prostota jest warunkiem niezawodności." — Edsger W. Dijkstra',
        '"Najlepsze architektury powstają w samoorganizujących się zespołach." — Manifest Agile',
      ],
    },
    stats: [
      { label: "Doświadczenie zawodowe", value: "9+" },
      { label: "Skalowalna architektura", value: "Mikrofrontendy" },
      { label: "Reużywalność UI", value: "Design Systems" },
      { label: "Podejście do developmentu", value: "End-to-End" },
    ],
    experience: {
      overTitle: "Kariera",
      title: "Doświadczenie",
      items: [
        {
          company: "Ostendi Global Sp. z o.o. (Warszawa)",
          role: "Frontend Engineer",
          dates: "2022 - obecnie",
          achievements: [
            "Projektowanie i rozwój funkcjonalności platformy HR z wykorzystaniem React i TypeScript w środowisku Agile",
            "Refaktoryzacja legacy codebase’u, co przełożyło się na poprawę wydajności (ok. 30% szybsze czasy ładowania) oraz redukcję długu technologicznego",
            "Odpowiedzialność za decyzje architektoniczne w obszarze frontendu dla nowych modułów (struktura komponentów, zarządzanie stanem)",
            "Integracja złożonych API REST oraz zapewnienie niezawodnego przepływu danych pomiędzy usługami",
            "Przeprowadzanie code review oraz dbanie o utrzymanie standardów kodowania",
            "Współpraca z zespołami backend, QA oraz interesariuszami produktowymi w celu kompleksowego dostarczania funkcjonalności (end-to-end)",
          ],
        },
        {
          company: "Wavy Apps / Brightforce Sp. z o.o. (Warszawa)",
          role: "Mid Frontend Developer",
          dates: "2020 - 2022",
          achievements: [
            "Tworzenie i utrzymywanie skalowalnych aplikacji webowych dla platform z obszaru nieruchomości oraz automatyzacji sprzedaży",
            "Integracja warstwy frontendowej z systemem Salesforce CRM oraz zewnętrznymi API",
            "Dostarczanie rozwiązań opartych na Veeva CRM oraz Veeva Vault dla klientów enterprise",
            "Optymalizacja istniejących modułów legacy, prowadząca do poprawy stabilności i wydajności systemu",
          ],
        },
        {
          company: "Active Pharma Sp. z o.o. (Warszawa)",
          role: "Junior Frontend Developer - Frontend Developer",
          dates: "2016 - 2020",
          achievements: [
            "Tworzenie aplikacji webowych oraz interaktywnych narzędzi marketingowych dla klientów z branży farmaceutycznej (GSK, Pfizer, Takeda, Adamed, Johnson & Johnson)",
            "Budowanie komponentów UI wielokrotnego użytku oraz zwiększanie spójności rozwiązań pomiędzy projektami",
            "Integracja aplikacji z systemami Salesforce oraz Veeva CRM",
            "Bezpośrednia współpraca z interesariuszami biznesowymi w celu przekładania wymagań na funkcjonalności",
          ],
        },
        {
          company: "Tusson, Białoruś",
          role: "Electronics Engineer / Deputy Branch Manager",
          dates: "2011 - 2015",
          achievements: [
            "Utrzymanie i serwisowanie bankomatów oraz terminali płatniczych dla instytucji finansowych",
            "Diagnozowanie i naprawa systemów elektronicznych zgodnie z rygorystycznymi SLA",
            "Koordynowanie pracy zespołu technicznego (obowiązki liderskie)",
            "Współpraca z bankami oraz klientami enterprise w celu zapewnienia ciągłości działania usług",
          ],
        },
      ],
    },
    techStack: {
      overTitle: "Umiejętności",
      title: "Stack technologiczny",
      categories: [
        {
          title: "Frontend",
          items: [
            {
              name: "React i Next.js",
              level: 95,
              description: "Hooks, Server Components, SSR/SSG",
            },
            {
              name: "TypeScript i JS",
              level: 95,
              description:
                "ES6+, ścisłe typowanie, wzorce projektowe, logika asynchroniczna",
            },
            {
              name: "Zarządzanie stanem i danymi",
              level: 90,
              description: "Redux, TanStack Query",
            },
            {
              name: "UI i stylowanie",
              level: 92,
              description:
                "CSS3, SCSS, Tailwind CSS, responsywne systemy projektowe",
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
                "Środowisko uruchomieniowe, narzędzia buildowe, automatyzacja skryptów, NestJS (nauka)",
            },
            {
              name: "Bazy danych i API",
              level: 85,
              description:
                "REST API, GraphQL, PostgreSQL (podstawy/w trakcie nauki)",
            },
          ],
        },
        {
          title: "Architektura i infrastruktura",
          items: [
            {
              name: "Mikrofrontendy",
              level: 85,
              description:
                "Module Federation, skalowalna architektura frontendowa",
            },
            {
              name: "Rozwiązania enterprise",
              level: 80,
              description: "Ekosystem Salesforce, integracja z Veeva CRM",
            },
            {
              name: "DevOps i wdrożenia",
              level: 85,
              description: "Docker, GitHub Actions, pipeline'y CI/CD, Webpack",
            },
          ],
        },
        {
          title: "Tooling i jakość (DX)",
          items: [
            {
              name: "Kontrola wersji i workflow",
              level: 90,
              description: "Git, Jira, metodyki Agile",
            },
            {
              name: "Jakość kodu",
              level: 95,
              description:
                "ESLint, Prettier, automatyczny linting, peer code review",
            },
            {
              name: "Testowanie i debugowanie",
              level: 90,
              description: "Postman, Browser DevTools, mockowanie API",
            },
          ],
        },
      ],
    },
    education: {
      overTitle: "Zaplecze",
      title: "Edukacja",
      coursesTitle: "Kursy",
      items: [
        {
          degree: "Magister elektroniki",
          institution: "Państwowy Uniwersytet im. Janki Kupały w Grodnie",
          year: "2006",
          focus: "Elektronika",
        },
      ],
      courses: [
        "Kurs programowania - GoWork (2016)",
        "Szkolenia online: React, TypeScript, Next.js, Node.js, Docker, Git",
      ],
    },
    languages: {
      overTitle: "Komunikacja",
      title: "Języki",
      items: [
        {
          name: "Polski",
          level: "fluent",
          levelLabel: "Płynny",
          code: "PL",
        },
        {
          name: "Angielski",
          level: "b2",
          levelLabel: "B2 - Upper Intermediate",
          code: "EN",
        },
        {
          name: "Białoruski",
          level: "native",
          levelLabel: "Ojczysty",
          code: "BE",
        },
        {
          name: "Rosyjski",
          level: "native",
          levelLabel: "Ojczysty",
          code: "RU",
        },
      ],
    },
    news: {
      overTitle: "Czytam",
      title: "Nowości technologiczne",
      readMore: "Czytaj więcej",
      items: [
        {
          title: "Przyszłość Server Components w React 19",
          source: "React Blog",
          date: "Mar 2026",
          excerpt:
            "Jak React Server Components zmieniają sposób budowania aplikacji opartych na danych.",
          url: "#",
        },
        {
          title: "Skalowanie Kubernetesa do 10 000 węzłów",
          source: "CNCF Blog",
          date: "Lut 2026",
          excerpt:
            "Wnioski z uruchamiania Kubernetesa w bardzo dużej skali w środowiskach produkcyjnych.",
          url: "#",
        },
        {
          title: "TypeScript 6.0: co nowego",
          source: "TypeScript Blog",
          date: "Lut 2026",
          excerpt:
            "Pattern matching, lepsza inferencja i nowe API metadanych dekoratorów.",
          url: "#",
        },
        {
          title: "Edge Computing: kolejna granica",
          source: "Vercel Blog",
          date: "Sty 2026",
          excerpt:
            "Przenoszenie obliczeń bliżej użytkownika dzięki edge functions i rozproszonym bazom danych.",
          url: "#",
        },
      ],
    },
  },
} as const;
