import { useMemo, useState } from "react";
import { withBase } from "../../lib/paths";
import { projects, type Project } from "../../data/projects";

type Props = {
  onInfo: (project: Project) => void;
};

function getActionClasses(theme: "link-1" | "link-2" | "link-3") {
  const base =
    "px-[0.5rem] py-[0.2rem] text-[0.8rem] no-underline border rounded-[4px] transition-[opacity,background-color,color,box-shadow,border] duration-500";

  if (theme === "link-1") {
    return `${base} bg-[#0a3641] text-[#fbaf00] border-[#ccc] font-['Girassol'] hover:opacity-80 hover:bg-[#fbaf00] hover:text-[#0a3641] hover:border-[#0a3641]`;
  }

  if (theme === "link-2") {
    return `${base} bg-[#e0dfd5] text-[#262d32] border-[#b7b8c0] font-['Oldenburg'] hover:shadow-[0_0_0.5rem_#f7f6f2] hover:bg-[#e0e2f0]`;
  }

  return `${base} bg-[#0b4d41] text-[whitesmoke] border-[#ccc] hover:shadow-[2px_2px_2px_#13212c] hover:bg-white hover:text-[#0b4d41]`;
}

function getStackOffset(index: number) {
  if (index === 0) return "translate-x-0 translate-y-0";
  if (index === 1) return "translate-x-[3px] translate-y-[3px]";
  return "translate-x-[6px] translate-y-[6px]";
}

export default function ProjectDeck({ onInfo }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState<number | null>(null);

  const ordered = useMemo(() => projects, []);

  // One consistent "fan-out spot" for every active card
  const ACTIVE_SPOT = "translate-x-[240px] translate-y-0 rotate-[10deg]";
  const ACTIVE_SPOT_MOBILE =
    "max-[900px]:translate-x-0 max-[900px]:-translate-y-[18px] max-[900px]:rotate-0 max-[900px]:scale-[1.03]";

  function openTOC() {
    setIsOpen(true);
  }

  function closeTOC() {
    setIsOpen(false);
    setActiveId(null);
  }

  function toggleCover() {
    setIsOpen((prev) => {
      const next = !prev;
      if (!next) setActiveId(null);
      return next;
    });
  }

  function selectProject(project: Project) {
    setActiveId(project.id);
    onInfo(project);
  }

  return (
    <section
  className="
    flex
    flex-col-reverse
    items-center
    gap-6

    min-[901px]:flex-row
    min-[901px]:items-start
  "
>
      {/* TOC panel */}
      <nav
        aria-hidden={!isOpen}
        className={`
          w-[min(520px,92vw)] min-[901px]:w-[260px]
          rounded-md border border-zinc-200/30
          bg-[#e0dfd5]
          p-3
          shadow-lg
          transition-all duration-500
          ${
            isOpen
              ? "opacity-100 translate-y-0"
              : "pointer-events-none opacity-0 -translate-y-2"
          }
        `}
      >
        <div className="mb-2 flex items-center justify-between gap-3">
          <h3 className="text-sm font-semibold text-black-100">
            Table of Contents
          </h3>

          {/* UX-friendly close button (primary on mobile) */}
          <button
            type="button"
            onClick={closeTOC}
            className="
              rounded
              border border-black/20
              bg-black/10
              px-2 py-1
              text-xs text-black-100
              transition
              hover:bg-black/15
            "
          >
            Close ✕
          </button>
        </div>

        <ul className="space-y-2">
          {ordered.map((p) => {
            const selected = p.id === activeId;
            return (
              <li key={p.id}>
                <button
                  type="button"
                  onClick={() => selectProject(p)}
                  className={`
                    w-full rounded
                    border px-3 py-2
                    text-left text-sm
                    transition
                    ${
                      selected
                        ? "border-black/50 bg-black/10 text-black"
                        : "border-black/15 bg-black/5 text-black-100 hover:bg-black/10"
                    }
                  `}
                >
                  {p.title}
                </button>
              </li>
            );
          })}
        </ul>

        <div className="mt-3 flex items-center justify-between">
          <p className="text-xs text-black-200/70">
            {activeId ? "Selected project is shown on the deck." : "Pick a project to open it."}
          </p>

          <button
            type="button"
            onClick={() => setActiveId(null)}
            className="rounded border border-black/15 bg-black/5 px-2 py-1 text-xs text-black-100 hover:bg-black/10"
          >
            Clear
          </button>
        </div>
      </nav>

      {/* Deck visual */}
      <div className="relative h-[300px] w-[200px] shrink-0 overflow-visible">
        {/* Cards */}
        {ordered.map((card, index) => {
          const isActive = isOpen && activeId === card.id;
          const stackOffset = getStackOffset(index);

          return (
            <div
              key={card.id}
              className={`
                absolute inset-0
                rounded-lg border shadow-md
                transition-transform duration-500
                ${card.bg}
                ${card.origin}
                ${stackOffset}
                ${isActive ? `z-[60] ${ACTIVE_SPOT} ${ACTIVE_SPOT_MOBILE}` : card.z}
              `}
            >
              <div className="flex h-full w-full flex-col items-center justify-between p-4">
                <h3
                  className={`
                    text-center text-[11px] font-semibold tracking-wide
                    ${card.bg.includes("#0a3641") ? "text-zinc-100" : "text-zinc-800"}
                  `}
                >
                  {card.title}
                </h3>

                <div className="flex flex-1 items-center justify-center">
                  <img
                    src={withBase(card.logoSrc)}
                    alt={card.logoAlt}
                    className="max-h-24 w-auto object-contain"
                    loading="lazy"
                    draggable={false}
                  />
                </div>

                {isActive ? (
                  <div className="flex gap-2 pb-1">
                    <a
                      href={card.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className={getActionClasses(card.theme)}
                    >
                      repo
                    </a>

                    <a
                      href={card.liveUrl}
                      target="_blank"
                      rel="noreferrer"
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
          );
        })}

        {/* Cover toggle */}
        <button
          type="button"
          onClick={() => {
            // On desktop, clicking cover toggles TOC (nice).
            // On mobile, opening TOC is still fine; closing is handled by the TOC close button.
            if (isOpen) {
              toggleCover();
            } else {
              openTOC();
            }
          }}
          aria-expanded={isOpen}
          aria-label="Toggle project table of contents"
          style={{ backgroundImage: `url(${withBase("assets/book-cover.png")})` }}
          className={`
            absolute inset-0
            rounded-lg
            bg-cover bg-center
            shadow-lg
            transition-[opacity,filter] duration-300

            z-50

            ${
              isOpen
                ? `
                  opacity-80
                  min-[901px]:opacity-95
                  max-[900px]:opacity-30
                  max-[900px]:pointer-events-none
                `
                : "opacity-100"
            }
          `}
        >
          <div className="flex h-full w-full items-center justify-center">
            <h2 className="bg-zinc-700/80 px-3 py-2 text-sm font-semibold text-white">
              {isOpen ? "Table of Contents" : "My Projects"}
            </h2>
          </div>
        </button>
      </div>
    </section>
  );
}
