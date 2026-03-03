export type ProjectTheme = "link-1" | "link-2" | "link-3";

export type Project = {
  id: number;
  title: string;
  theme: ProjectTheme;

  logoSrc: string;
  logoAlt: string;

  bg: string;

  transform: string;
  mobileTransform: string;

  z: string;
  origin: string;

  repoUrl: string;
  liveUrl: string;

  shortDescription: string;
  imageSrc: string;
  imageAlt: string;
  imageCaption: string;

  infoTitle: string;
  infoContent: string;
};

const DECK_CARD_BG =
  "bg-[#0b1020] bg-gradient-to-br from-violet-500/20 via-transparent to-cyan-400/15";

export const projects: readonly Project[] = [
  // --- Existing deck projects (disabled by comment for the Portfolio assignment) ---
  // {
  //   id: 1,
  //   title: "Rainydays",
  //   theme: "link-1",

  //   shortDescription:
  //     "A responsive storefront UI with clean layout and styling (placeholder).",

  //   imageSrc: "/assets/rainydays-logo.svg",
  //   imageAlt: "Rainy Days project image",
  //   imageCaption:
  //     "Rainy Days — placeholder caption (replace with a real screenshot caption).",

  //   logoSrc: "/assets/rainydays-logo.svg",
  //   logoAlt: "Rainydays logo",

  //   bg: DECK_CARD_BG,

  //   transform: "translate-x-[15px] rotate-[2deg]",
  //   mobileTransform:
  //     "max-[900px]:translate-x-[0%] max-[900px]:translate-y-[-15%] max-[900px]:rotate-0",

  //   z: "z-50",
  //   origin: "origin-bottom-center",

  //   repoUrl: "https://github.com/NoroffFEU/html-css-course-assignment-remylian",
  //   liveUrl: "https://norofffeu.github.io/html-css-course-assignment-remylian/",

  //   infoTitle: "Rainydays",
  //   infoContent:
  //     "An online shop for outdoor jackets.\n\nFocus: layout, structure, and a clear product presentation.",
  // },
  // {
  //   id: 2,
  //   title: "Adventurer’s Alehouse",
  //   theme: "link-2",

  //   shortDescription:
  //     "A D&D-inspired tavern concept site blending fantasy theming with modern frontend architecture.",

  //   imageSrc: "/assets/alehouse-hero.png",
  //   imageAlt: "Adventurer's Alehouse homepage hero section",
  //   imageCaption:
  //     "Adventurer’s Alehouse — fantasy tavern concept site with immersive theming.",

  //   logoSrc: "/assets/logo.svg",
  //   logoAlt: "Adventurer’s Alehouse logo",

  //   bg: DECK_CARD_BG,

  //   transform: "translate-x-[-140px] -rotate-[55deg]",
  //   mobileTransform:
  //     "max-[900px]:translate-x-[-25%] max-[900px]:translate-y-[-10%] max-[900px]:rotate-0",

  //   z: "z-40",
  //   origin: "origin-bottom",

  //   repoUrl: "https://github.com/NoroffFEU/FED1-PE1-remylian",
  //   liveUrl: "https://norofffeu.github.io/FED1-PE1-remylian/",

  //   infoTitle: "Adventurer’s Alehouse",
  //   infoContent:
  //     "A themed blog-style site.\n\nFocus: content structure and cohesive visual identity.",
  // },
  // {
  //   id: 3,
  //   title: "Community Science Museum",
  //   theme: "link-3",

  //   shortDescription:
  //     "A responsive community museum site focused on accessibility, structure, and clear content hierarchy.",

  //   imageSrc: "/assets/community-museum-hero.png",
  //   imageAlt: "Community Museum homepage showcasing exhibitions",
  //   imageCaption:
  //     "Community Museum — responsive layout built with accessibility in focus.",

  //   logoSrc: "/assets/logo-final.svg",
  //   logoAlt: "Community Science Museum logo",

  //   bg: DECK_CARD_BG,

  //   transform: "translate-x-[250px] rotate-[15deg]",
  //   mobileTransform:
  //     "max-[900px]:translate-x-[25%] max-[900px]:translate-y-[-20%] max-[900px]:rotate-0",

  //   z: "z-30",
  //   origin: "origin-bottom-center",

  //   repoUrl: "https://github.com/remylian/Semester-project-1",
  //   liveUrl: "https://remylian.github.io/Semester-project-1/index.html",

  //   infoTitle: "Community Science Museum",
  //   infoContent:
  //     "A semester project.\n\nFocus: accessibility, responsive design, and navigation.",
  // },

  // --- Brief-required featured projects ---

  {
    id: 4,
    title: "JavaScript Frameworks",
    theme: "link-2",

    shortDescription:
      "A React + Vite webshop with product listing, cart flow, checkout, and a validated contact form for polished UX.",

    imageSrc: "/assets/js-frameworks.webp",
    imageAlt: "JavaScript Frameworks webshop screenshot",
    imageCaption:
      "JavaScript Frameworks — React webshop with product browsing and cart flow.",

    logoSrc: "/assets/Webshop-logo.png",
    logoAlt: "React Webshop logo",

    bg: DECK_CARD_BG,

    transform: "translate-x-[0px] rotate-[0deg]",
    mobileTransform:
      "max-[900px]:translate-x-0 max-[900px]:translate-y-0 max-[900px]:rotate-0",

    z: "z-10",
    origin: "origin-bottom-center",

    repoUrl: "https://github.com/NoroffFEU/jsfw-2025-v1-remy-jsframeworks",
    liveUrl: "https://jsfw-react-remylian.netlify.app/products",

    infoTitle: "JavaScript Frameworks",
    infoContent:
      "This project is a fully functional React-based webshop built with TypeScript. It integrates with the Noroff Online Shop API and implements a complete e-commerce flow from product browsing to checkout confirmation.\n\n" +
      "What I built:\n" +
      "- A product listing page fetching data from GET /online-shop\n" +
      "- Search and sorting functionality (by title and price)\n" +
      "- Individual product detail pages using dynamic routing\n" +
      "- Discount handling with calculated percentage badges\n" +
      "- A persistent shopping cart using React Context + reducer pattern\n" +
      "- Adjustable quantities, remove item functionality, and total price calculation\n" +
      "- A checkout success page that clears cart state\n" +
      "- A fully validated contact form using React Hook Form and Zod\n" +
      "- Toast notifications for key interactions (add to cart, remove, checkout, validation)\n" +
      "- Component and page tests using Vitest and React Testing Library\n\n" +
      "Framework choice and why:\n" +
      "I chose React with TypeScript because I wanted to deepen my understanding of modern frontend architecture and strengthen my TypeScript skills. This assignment required structured state management, API integration, routing, and reusable components — all areas where React excels. Using TypeScript ensured strict typing for API responses, cart state, and component props, reducing potential runtime errors.\n\n" +
      "Challenges and solutions:\n" +
      "The biggest challenge was structuring the application in a scalable way. Moving from smaller projects to a multi-page application with shared state required rethinking how components communicate. Implementing a cart using Context and a reducer pattern helped centralize logic and avoid prop drilling. Another challenge was properly typing API responses and ensuring queries only ran when parameters were available. Using TanStack Query's configuration options and well-defined interfaces solved this. Careful use of documentation and incremental testing helped stabilize complex features.\n\n" +
      "What I learned:\n" +
      "This project strengthened my understanding of real-world React architecture. I learned how separating concerns — API layer, state management, UI components, and utility functions — improves maintainability. TypeScript made data flow more predictable and safer, especially when working with external APIs. I also gained practical experience with form validation using schema-based validation (Zod), which ensures reliable input handling.\n\n" +
      "What I would improve next:\n" +
      "If I were to extend this project, I would refactor the cart logic into a custom hook abstraction for even clearer separation of concerns. I would also improve accessibility further, refine loading skeleton states for better perceived performance, and potentially introduce integration tests for full user flows such as adding to cart and completing checkout.",
  },

  {
    id: 5,
    title: "Semester Project 2",
    theme: "link-3",

    shortDescription:
      "An auction marketplace with authentication, listings, bidding flow, profile features, and API-driven data.",

    imageSrc: "/assets/sp2.webp",
    imageAlt: "Semester Project 2 auction platform screenshot",
    imageCaption:
      "Semester Project 2 — full auction platform with listing and bidding features.",

    logoSrc: "/assets/logo-auction.png",
    logoAlt: "Auction House logo",

    bg: DECK_CARD_BG,

    transform: "translate-x-[0px] rotate-[0deg]",
    mobileTransform:
      "max-[900px]:translate-x-0 max-[900px]:translate-y-0 max-[900px]:rotate-0",

    z: "z-0",
    origin: "origin-bottom-center",

    repoUrl: "https://github.com/remylian/FED2-SP2",
    liveUrl: "https://fed-2-sp-2.vercel.app/",

    infoTitle: "Semester Project 2",
    infoContent:
      "Auction House is a fully functional auction platform built with vanilla TypeScript and TailwindCSS, integrating with the Noroff Auction House API (v2). The goal was to develop a dynamic front-end application without using React or other frontend frameworks, focusing on structure, modularization, and clean architecture.\n\n" +
      "What I built:\n" +
      "- User registration restricted to @stud.noroff.no emails\n" +
      "- Secure login/logout with persistent session handling\n" +
      "- Profile management with editable bio, avatar, and banner\n" +
      "- Real-time credit display visible while logged in\n" +
      "- Full CRUD functionality for listings (create, update, delete)\n" +
      "- Media gallery rendering with flexible API response handling\n" +
      "- Bidding system with live bid history\n" +
      "- Self-overbid prevention logic\n" +
      "- Search and browse functionality for guest users\n" +
      "- Real-time auction countdown\n" +
      "- Lazy-loaded images and loading skeleton states\n\n" +
      "Unlike framework projects, this assignment required vanilla JavaScript/TypeScript without frontend frameworks. This pushed me to rely on strong architectural decisions instead of framework abstractions. I used Vite for tooling and TailwindCSS for consistent styling, allowing me to focus on modular code structure, API integration, and state handling without React's component system.\n\n" +
      "Challenges and solutions:\n" +
      "The bidding system was the most complex part. Initially, users could outbid themselves if the page wasn’t refreshed. I solved this by validating active bids in memory before submitting new ones, preventing self-overbidding in real time. Another challenge was inconsistent API media responses, which sometimes returned simple strings and other times structured objects. I built a flexible gallery renderer that handled both cases safely.\n\n" +
      "Deployment also presented challenges. GitHub Pages caused module-loading issues, so I pivoted to Vercel to ensure stable production hosting. This experience reinforced the importance of adaptability during the deployment phase.\n\n" +
      "What I learned:\n" +
      "Building a complex application without a frontend framework strengthened my understanding of core JavaScript architecture. I had to think carefully about separation of concerns, organizing API calls, UI rendering, and utility functions into clear modules. I learned how important predictable state management is when frameworks are not handling it for you.\n\n" +
      "I also gained deeper experience with debugging real-world issues, such as race conditions in bidding and edge cases in user interaction. This project improved both my technical discipline and my problem-solving persistence.\n\n" +
      "What I would improve next:\n" +
      "If I were to extend this project, I would further refactor larger modules into smaller, single-responsibility files. I would also introduce light automated testing for critical flows like bidding and listing creation. From a UX perspective, I would enhance accessibility further and improve edge-case handling for broken media URLs or expired sessions.",
  },

  {
    id: 6,
    title: "CSS Frameworks",
    theme: "link-1",

    shortDescription:
      "A responsive multi-page site built with Tailwind CSS, focusing on layout, reusable components, and a consistent design system.",

    imageSrc: "/assets/css-frameworks-screenshot.webp",
    imageAlt: "CSS Frameworks project screenshot",
    imageCaption:
      "CSS Frameworks — responsive pages built with reusable components and consistent spacing and typography.",

    logoSrc: "/assets/css-frameworks-logo.webp",
    logoAlt: "CSS Frameworks logo",

    bg: DECK_CARD_BG,

    transform: "translate-x-[15px] rotate-[2deg]",
    mobileTransform:
      "max-[900px]:translate-x-[0%] max-[900px]:translate-y-[-15%] max-[900px]:rotate-0",

    z: "z-20",
    origin: "origin-bottom-center",

    repoUrl: "https://github.com/remylian/CA-css-frameworks",
    liveUrl: "https://remylian.github.io/CA-css-frameworks/",

    infoTitle: "CSS Frameworks",
    infoContent:
      "This project is a responsive multi-page social media interface built with Tailwind CSS.\n\n" +
      "What I built:\n" +
      "- A login page with HTML validation and styled feedback\n" +
      "- A feed page with search, sorting UI, and a collapsible post creation form\n" +
      "- A profile page with banner, avatar, follower stats, and post grid\n" +
      "- Reusable layout patterns using consistent spacing, typography, and utility classes\n" +
      "- Dark/light mode toggle shared across all pages\n\n" +
      "Framework choice and why:\n" +
      "I chose Tailwind CSS because I wanted to practice working with a utility-first framework. It was new to me, and I specifically wanted to challenge myself by stepping away from traditional CSS structure and thinking in utilities instead.\n\n" +
      "Challenges and solutions:\n" +
      "The biggest challenge was adapting to a new way of thinking. Instead of writing separate CSS rules, I had to build layout and styling directly in the markup using utility classes. Memorizing key spacing, layout, and typography utilities took time. I relied heavily on the official documentation, which became an important part of my workflow. Over time, I started recognizing patterns and working more efficiently.\n\n" +
      "What I learned:\n" +
      "Utility-first CSS can be extremely practical. It removes the mental overhead of naming classes and switching between CSS and HTML files. Because styles are applied directly in the markup, it's easier to see how a component is structured. It also encourages consistency in spacing and layout. Once the core utilities become familiar, development speed increases significantly.\n\n" +
      "What I would improve next:\n" +
      "If I were to continue this project, I would extract more repeated patterns into reusable components and possibly introduce a small design system layer. I would also improve accessibility further by refining focus states and keyboard navigation across all interactive elements.",
  },
];
