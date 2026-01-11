import { useState } from "react";
import { withBase } from "../../lib/paths";
import { projects, type Project } from "../../data/projects";

type Props = {
  onInfo: (project: Project) => void;
};

function getActionClasses(theme: "link-1" | "link-2" | "link-3") {
  const base =
    "px-[0.5rem] py-[0.2rem] text-[0.8rem] no-underline border rounded-[4px] transition-[opacity,background-color,color,box-shadow,border] duration-500";

  if (theme === "link-1") {
    return `${base} bg-[#0a3641] text-[#fbaf00] border-[#ccc] font-['Girassol']
      hover:opacity-80 hover:bg-[#fbaf00] hover:text-[#0a3641] hover:border-[#0a3641]`;
  }

  if (theme === "link-2") {
    return `${base} bg-[#e0dfd5] text-[#262d32] border-[#b7b8c0] font-['Oldenburg']
      hover:shadow-[0_0_0.5rem_#f7f6f2] hover:bg-[#e0e2f0]`;
  }

  return `${base} bg-[#0b4d41] text-[whitesmoke] border-[#ccc]
    hover:shadow-[2px_2px_2px_#13212c] hover:bg-white hover:text-[#0b4d41]`;
}

export default function ProjectDeck({ onInfo }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="relative h-[300px] w-[200px] shrink-0 overflow-visible">
      {/* Deck cover */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-label="Toggle project deck"
        style={{ backgroundImage: `url(${withBase("assets/book-cover.png")})` }}
        className={`
          absolute inset-0 z-40
          rounded-lg
          bg-cover bg-center
          shadow-lg
          transition-transform duration-500
          origin-bottom-center
          ${isOpen ? "translate-y-[350px] rotate-[270deg]" : ""}
        `}
      >
        <div className="flex h-full w-full items-center justify-center">
          <h2 className="bg-zinc-700/80 px-3 py-2 text-sm font-semibold text-white">
            My Projects
          </h2>
        </div>
      </button>

      {/* Cards */}
      {projects.map((card) => (
        <div
          key={card.id}
          onMouseEnter={() => isOpen && setHovered(card.id)}
          onMouseLeave={() => setHovered(null)}
          className={`
            absolute inset-0
            group relative
            rounded-lg border shadow-md
            transition-transform duration-500
            ${card.bg}
            ${card.origin}
            ${isOpen ? card.transform : ""}
            ${
              isOpen && hovered === card.id
                ? "-translate-y-6 scale-[1.02] z-50"
                : card.z
            }
          `}
        >
          <div className="flex h-full w-full flex-col items-center justify-between p-4">
            {/* Title */}
            <h3
              className={`
                text-center text-[11px] font-semibold tracking-wide
                ${card.bg.includes("#0a3641") ? "text-zinc-100" : "text-zinc-800"}
              `}
            >
              {card.title}
            </h3>

            {/* Logo */}
            <div className="flex flex-1 items-center justify-center">
              <img
                src={withBase(card.logoSrc)}
                alt={card.logoAlt}
                className="max-h-24 w-auto object-contain"
                loading="lazy"
                draggable={false}
              />
            </div>

            {/* Buttons (only when open) */}
            {isOpen ? (
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onInfo(card);
                  }}
                  className={getActionClasses(card.theme)}
                >
                  info
                </button>

                <a
                  href={card.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className={getActionClasses(card.theme)}
                >
                  repo
                </a>

                <a
                  href={card.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className={getActionClasses(card.theme)}
                >
                  live
                </a>
              </div>
            ) : (
              <div className="h-[26px]" />
            )}
          </div>
        </div>
      ))}
    </section>
  );
}
