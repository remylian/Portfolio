export type ProjectTheme = "link-1" | "link-2" | "link-3";

export type Project = {
  id: number;
  title: string;
  theme: ProjectTheme;

  logoSrc: string;
  logoAlt: string;

  bg: string;
  transform: string;
  z: string;
  origin: string;

  repoUrl: string;
  liveUrl: string;

  infoTitle: string;
  infoContent: string;
};

export const projects: readonly Project[] = [
  {
    id: 1,
    title: "Rainydays",
    theme: "link-1",
    logoSrc: "assets/rainydays-logo.svg",
    logoAlt: "Rainydays logo",

    bg: "bg-[#0a3641]",
    transform: "translate-x-[15px] rotate-[2deg]",
    z: "z-30",
    origin: "origin-bottom-center",

    repoUrl: "https://github.com/NoroffFEU/html-css-course-assignment-remylian",
    liveUrl: "https://norofffeu.github.io/html-css-course-assignment-remylian/",

    infoTitle: "Rainydays",
    infoContent:
      "An online shop for outdoor jackets.\n\nFocus: layout, structure, and a clear product presentation.",
  },
  {
    id: 2,
    title: "Adventurer’s Alehouse",
    theme: "link-2",
    logoSrc: "assets/logo.svg",
    logoAlt: "Adventurer’s Alehouse logo",

    bg: "bg-[#e0dfd5]",
    transform: "translate-x-[-140px] -rotate-[55deg]",
    z: "z-20",
    origin: "origin-bottom",

    repoUrl: "https://github.com/NoroffFEU/FED1-PE1-remylian",
    liveUrl: "https://norofffeu.github.io/FED1-PE1-remylian/",

    infoTitle: "Adventurer’s Alehouse",
    infoContent:
      "A themed blog-style site.\n\nFocus: content structure and cohesive visual identity.",
  },
  {
    id: 3,
    title: "Community Science Museum",
    theme: "link-3",
    logoSrc: "assets/logo-final.svg",
    logoAlt: "Community Science Museum logo",

    bg: "bg-[#e0dfd5]",
    transform: "translate-x-[250px] rotate-[15deg]",
    z: "z-10",
    origin: "origin-bottom-center",

    repoUrl: "https://github.com/remylian/Semester-project-1",
    liveUrl: "https://remylian.github.io/Semester-project-1/index.html",

    infoTitle: "Community Science Museum",
    infoContent:
      "A semester project.\n\nFocus: accessibility, responsive design, and navigation.",
  },
];
