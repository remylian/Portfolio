import { useRef } from "react";
import type { Project } from "../../data/projects";
import InfoNote from "../info/InfoNote";
import ProjectDeck from "../projects/ProjectDeck";
import AboutPanel from "./AboutPanel";

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

  function handleInfo(project: Project) {
    onDisplay({
      title: project.infoTitle,
      content: project.infoContent,
    });

    // Smooth UX: bring the note into view after selecting a project.
    requestAnimationFrame(() => {
      noteRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  return (
    <section className="mx-auto w-full max-w-5xl px-4 pb-24">
      {/* About panel sits directly above the InfoNote */}
      <div className="pt-6">
        <AboutPanel
          isOpen={isAboutOpen}
          onClose={onCloseAbout}
          onDisplay={onDisplay}
        />
      </div>

      {/* Info note area (the single “display”) */}
      <div ref={noteRef} className="pt-4">
        <InfoNote
          key={display.key} // keyed remount restarts typewriter
          title={display.title}
          content={display.content}
          onClose={display.key !== "placeholder" ? onClearDisplay : undefined}
        />
      </div>

      {/* Deck below */}
      <div className="flex justify-center pt-10">
        <ProjectDeck onInfo={handleInfo} />
      </div>
    </section>
  );
}
