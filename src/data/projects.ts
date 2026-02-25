export type ProjectTheme = "link-1" | "link-2" | "link-3";

export type Project = {
  id: number;
  title: string;
  theme: ProjectTheme;

  logoSrc: string;
  logoAlt: string;

  bg: string;

  /** Desktop transform (kept for flexibility; currently not essential) */
  transform: string;

  /** Mobile-safe transform (kept for flexibility; currently not essential) */
  mobileTransform: string;

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

    bg: "bg-[#9bb3b3]",

    transform: "translate-x-[15px] rotate-[2deg]",
    mobileTransform:
      "max-[900px]:translate-x-[0%] max-[900px]:translate-y-[-15%] max-[900px]:rotate-0",

    z: "z-50",
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
    mobileTransform:
      "max-[900px]:translate-x-[-25%] max-[900px]:translate-y-[-10%] max-[900px]:rotate-0",

    z: "z-40",
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

    bg: "bg-white",

    transform: "translate-x-[250px] rotate-[15deg]",
    mobileTransform:
      "max-[900px]:translate-x-[25%] max-[900px]:translate-y-[-20%] max-[900px]:rotate-0",

    z: "z-30",
    origin: "origin-bottom-center",

    repoUrl: "https://github.com/remylian/Semester-project-1",
    liveUrl: "https://remylian.github.io/Semester-project-1/index.html",

    infoTitle: "Community Science Museum",
    infoContent:
      "A semester project.\n\nFocus: accessibility, responsive design, and navigation.",
  },

  // React Webshop (JS Frameworks)
  {
    id: 4,
    title: "React Webshop",
    theme: "link-2",

    // TODO: add this file to /public/assets/ and update name if needed
    logoSrc: "assets/Webshop-logo.png",
    logoAlt: "React Webshop logo",

    bg: "bg-white",

    transform: "translate-x-[0px] rotate-[0deg]",
    mobileTransform:
      "max-[900px]:translate-x-0 max-[900px]:translate-y-0 max-[900px]:rotate-0",

    z: "z-20",
    origin: "origin-bottom-center",

    // TODO: replace with your actual repo/live URLs
    repoUrl: "https://github.com/NoroffFEU/jsfw-2025-v1-remy-jsframeworks",
    liveUrl: "https://jsfw-react-remylian.netlify.app/products",

    infoTitle: "React Webshop",
    infoContent:
      "A React-based webshop built with Vite + React + TypeScript.\n\nIncludes product browsing, product details, cart management, checkout flow, and a validated contact form.\n\nFocus: component architecture, state handling, and API-driven UI.",
  },

  // ✅ NEW: Auction House (FED2-SP2)
  {
    id: 5,
    title: "Auction House",
    theme: "link-2",

    // TODO: add this file to /public/assets/ and update name if needed
    logoSrc: "assets/logo-auction.png",
    logoAlt: "Auction House logo",

    bg: "bg-white",

    transform: "translate-x-[0px] rotate-[0deg]",
    mobileTransform:
      "max-[900px]:translate-x-0 max-[900px]:translate-y-0 max-[900px]:rotate-0",

    z: "z-10",
    origin: "origin-bottom-center",

    // TODO: replace with your actual repo/live URLs
    repoUrl: "https://github.com/remylian/FED2-SP2",
    liveUrl: "https://fed-2-sp-2.vercel.app/",

    infoTitle: "Auction House",
    infoContent:
      "A full auction marketplace project.\n\nIncludes authentication, listings, bidding, profile features, and API integration.\n\nFocus: robust frontend architecture, reusable UI patterns, and a complete user flow.",
  },
];
