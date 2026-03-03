import { useState } from "react";

import ProjectsSection from "../components/sections/ProjectsSection";

type Display = {
  key: string; // changes to restart typewriter
  title: string;
  content: string;
};

export default function HomePage() {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [display, setDisplay] = useState<Display>({
    key: "init",
    title: "",
    content: "",
  });

  function showDisplay(next: Omit<Display, "key">) {
    setDisplay({
      ...next,
      key: String(Date.now()), // simple + reliable remount key
    });
  }

  function clearDisplay() {
    setDisplay({ key: String(Date.now()), title: "", content: "" });
  }

  return (
    <ProjectsSection
      isAboutOpen={isAboutOpen}
      onCloseAbout={() => setIsAboutOpen(false)}
      display={display}
      onDisplay={showDisplay}
      onClearDisplay={clearDisplay}
    />
  );
}
