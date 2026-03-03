type Project = {
  title: string;
  logoSrc: string;
  repoUrl: string;
  liveUrl: string;
};

type Props = {
  project: Project;
  isOpen: boolean;
  isHovered: boolean;
  baseZ: string;
  origin: string;
  baseTransform: string;
  onEnter: () => void;
  onLeave: () => void;
};

export default function ProjectCard({
  project,
  isOpen,
  isHovered,
  baseZ,
  origin,
  baseTransform,
  onEnter,
  onLeave,
}: Props) {
  const activeGlow = "0 0 1.6rem rgba(34, 211, 238, 0.22)";
  const hoverGlow = "0 0 1.0rem rgba(255, 255, 255, 0.10)";

  return (
    <article
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className={`absolute inset-0 rounded-lg border border-white/12 bg-zinc-950/55 shadow-lg transition-transform ${
        isOpen ? "duration-500" : "duration-700"
      } ${origin} ${isOpen ? baseTransform : ""} ${
        isOpen && isHovered ? "z-50 -translate-y-6 scale-[1.02]" : baseZ
      } `}
      style={{
        boxShadow: isOpen ? activeGlow : isHovered ? hoverGlow : undefined,
      }}
    >
      <div className="flex h-full flex-col items-center justify-between p-4">
        <h3 className="text-center text-sm font-semibold text-white">
          {project.title}
        </h3>

        <div className="flex flex-1 items-center justify-center">
          <img
            src={project.logoSrc}
            alt={`${project.title} logo`}
            className="max-h-24 w-auto object-contain"
            loading="lazy"
            draggable={false}
          />
        </div>

        {isOpen ? (
          <div className="flex gap-2 pb-1">
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded border border-white/15 bg-white/8 px-3 py-1 text-xs text-white/85 transition hover:bg-white/12"
            >
              Repo
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded border border-white/15 bg-white/8 px-3 py-1 text-xs text-white/85 transition hover:bg-white/12"
            >
              Live
            </a>
          </div>
        ) : null}
      </div>
    </article>
  );
}
