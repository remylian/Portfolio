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

  // function scrollToInfoIfNeeded() {
  //   const el = infoRef.current;
  //   if (!el) return;

  //   const rect = el.getBoundingClientRect();
  //   const isFullyVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;

  //   if (!isFullyVisible) {
  //     el.scrollIntoView({ behavior: "smooth", block: "start" });
  //   }
  // }

  function handleProjectInfo(project: Project) {
    onDisplay({
      title: project.infoTitle,
      content: project.infoContent,
    });

    // scrollToInfoIfNeeded();
  }

  return (
    <section className="container-page pb-24">
      <div className="flex flex-col items-center">
        <div className="pt-6">
          <ProjectDeck onInfo={handleProjectInfo} />
        </div>

        <div ref={infoRef} className="w-full scroll-mt-24 pt-10">
          <div className="flex justify-center">
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
