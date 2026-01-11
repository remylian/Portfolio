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
  return (
    <article
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className={`
        absolute inset-0
        rounded-lg
        bg-[url('/Portfolio/assets/book-cover.png')]
        shadow-lg
        transition-transform
        ${isOpen ? "duration-500" : "duration-700"}
        ${origin}
        ${isOpen ? baseTransform : ""}
        ${isOpen && isHovered ? "-translate-y-6 scale-[1.02] z-50" : baseZ}
      `}
    >
      <div className="flex h-full flex-col items-center justify-between p-4">
        <h3 className="text-center text-sm font-semibold text-zinc-100">
          {project.title}
        </h3>

        <div className="flex flex-1 items-center justify-center">
          <img
            src={project.logoSrc}
            alt={`${project.title} logo`}
            className="max-h-24 w-auto object-contain"
            loading="lazy"
          />
        </div>

        {isOpen ? (
          <div className="flex gap-2 pb-1">
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded border border-zinc-300/70 bg-zinc-900/40 px-3 py-1 text-xs text-zinc-100 hover:bg-zinc-900/70"
            >
              Repo
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded border border-zinc-300/70 bg-zinc-900/40 px-3 py-1 text-xs text-zinc-100 hover:bg-zinc-900/70"
            >
              Live
            </a>
          </div>
        ) : null}
      </div>
    </article>
  );
}
