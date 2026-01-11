import { useMemo, useState } from "react";
import { withBase } from "../lib/paths";
import Header from "../components/layout/Header";
import ProjectsSection from "../components/sections/ProjectsSection";
import Footer from "../components/layout/Footer";

type Display = {
  key: string; // changes to restart typewriter
  title: string;
  content: string;
};

export default function App() {
  const placeholder = useMemo<Display>(
    () => ({
      key: "placeholder",
      title: "Project info",
      content: 'Click "info" on a project card to read more.',
    }),
    []
  );

  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [display, setDisplay] = useState<Display>(placeholder);

  function showDisplay(next: Omit<Display, "key">) {
    setDisplay({
      key: String(Date.now()), // simple + reliable remount key
      title: next.title,
      content: next.content,
    });
  }

  function clearDisplay() {
    setDisplay(placeholder);
  }

  return (
    <div
      className="flex min-h-screen flex-col bg-zinc-950 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${withBase("assets/dark-oak.png")})` }}
    >
      <Header onAboutClick={() => setIsAboutOpen((prev) => !prev)} />

      <main className="flex-1">
        <ProjectsSection
          isAboutOpen={isAboutOpen}
          onCloseAbout={() => setIsAboutOpen(false)}
          display={display}
          onDisplay={showDisplay}
          onClearDisplay={clearDisplay}
        />
      </main>

      <Footer />
    </div>
  );
}
