import { useRef } from "react";
import type { Project } from "../../data/projects";
import AboutPanel from "./AboutPanel";
import ProjectDeck from "../projects/ProjectDeck";
import InfoNote from "../info/InfoNote";

type Display = {
  key: string;
  title: string;
  content: string;
};

type Props = {
  isAboutOpen: boolean;
  onCloseAbout: () => void;

  display: Display;
  onDisplay: (next: { title: string; content: string }) => void;
  onClearDisplay: () => void;
};

export default function ProjectsSection({
  isAboutOpen,
  onCloseAbout,
  display,
  onDisplay,
  onClearDisplay,
}: Props) {
  const noteRef = useRef<HTMLDivElement | null>(null);

  function handleProjectInfo(project: Project) {
    onDisplay({
      title: project.infoTitle,
      content: project.infoContent,
    });

    requestAnimationFrame(() => {
      noteRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  return (
    <section className="mx-auto w-full max-w-5xl px-4 pb-24">
      {/* About panel (above deck) */}
      <div className="pt-6">
        <AboutPanel
          isOpen={isAboutOpen}
          onClose={onCloseAbout}
          onDisplay={onDisplay}
        />
      </div>

      {/* Deck in the middle */}
      <div className="flex justify-center pt-10">
        <ProjectDeck onInfo={handleProjectInfo} />
      </div>

      {/* InfoNote below the deck */}
      <div ref={noteRef} className="pt-10">
        <InfoNote
          key={display.key}
          title={display.title}
          content={display.content}
          onClose={display.key !== "placeholder" ? onClearDisplay : undefined}
        />
      </div>
    </section>
  );
}
