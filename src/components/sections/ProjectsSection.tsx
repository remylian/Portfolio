import { useRef } from "react";
import type { Project } from "../../data/projects";
import ProjectDeck from "../projects/ProjectDeck";
import InfoNote from "../info/InfoNote";

type Display = {
  key: string;
  title: string;
  content: string;
};

type Props = {
  display: Display;
  onDisplay: (next: { title: string; content: string }) => void;
  onClearDisplay: () => void;
};

export default function ProjectsSection({
  display,
  onDisplay,
  onClearDisplay,
}: Props) {
  const infoRef = useRef<HTMLDivElement | null>(null);

  function handleProjectInfo(project: Project) {
    onDisplay({
      title: project.title,
      content: project.shortDescription,
    });
  }

  return (
    <section className="container-page pb-24">
      {/* left aligned stack */}
      <div className="flex flex-col items-start">
        <div className="pt-6">
          <ProjectDeck onInfo={handleProjectInfo} />
        </div>

        <div ref={infoRef} className="w-full scroll-mt-24 pt-10">
          <div className="flex justify-start">
            <InfoNote
              key={display.key}
              title={display.title}
              content={display.content}
              onClose={
                display.key !== "placeholder" ? onClearDisplay : undefined
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}
