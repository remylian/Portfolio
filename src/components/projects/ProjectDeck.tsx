import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

import { withBase, getProjectPath } from "../../lib/paths";
import { projects, type Project } from "../../data/projects";

type Props = {
  onInfo: (project: Project) => void;
};

function getStackOffset(index: number) {
  if (index === 0) return "translate-x-0 translate-y-0";
  if (index === 1) return "translate-x-[3px] translate-y-[3px]";
  return "translate-x-[6px] translate-y-[6px]";
}

// Page-theme (dark + neon) — same style for all TOC buttons
function getTocButtonClasses(selected: boolean) {
  const base =
    "w-full rounded border px-3 py-2 text-left text-sm transition " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70";

  if (selected) {
    return (
      base +
      " border-white/25 bg-white/10 text-white shadow-[0_0_1.0rem_rgba(34,211,238,0.18)]"
    );
  }

  return (
    base +
    " border-white/12 bg-white/5 text-white/85 hover:bg-white/8 hover:border-white/18"
  );
}

/** Page-theme cover styling (fixed; does not change per project) */
const COVER_TINT = "from-violet-500/22 via-black/15 to-cyan-400/18";
const COVER_GLOW = "0 0 1.6rem rgba(34,211,238,0.16)";
const COVER_TEXT = "text-white [text-shadow:0_0_10px_rgba(34,211,238,0.18)]";

export default function ProjectDeck({ onInfo }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState<number | null>(null);

  const ordered = useMemo(() => projects, []);

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
    <section className="flex flex-col-reverse items-center gap-6 min-[901px]:flex-row min-[901px]:items-start">
      {/* TOC panel */}
      <nav
        aria-hidden={!isOpen}
        className={`w-[min(520px,92vw)] rounded-md border border-white/12 bg-zinc-950/85 p-3 shadow-lg transition-all duration-500 min-[901px]:w-[260px] ${
          isOpen
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        } `}
        style={{
          boxShadow: isOpen ? "0 0 1.6rem rgba(34,211,238,0.16)" : undefined,
        }}
      >
        <div className="mb-2 flex items-center justify-between gap-3">
          <h3 className="text-sm font-semibold text-white">
            Table of Contents
          </h3>

          <button
            type="button"
            onClick={closeTOC}
            className="rounded border border-white/15 bg-white/8 px-2 py-1 text-xs text-white/80 transition hover:bg-white/12"
          >
            Close ✕
          </button>
        </div>

        {/* Fixed height area that scrolls internally + thin scrollbar */}
        <div className="thin-scroll h-[210px] overflow-auto pr-1">
          <ul className="space-y-2">
            {ordered.map((p) => {
              const selected = p.id === activeId;
              return (
                <li key={p.id}>
                  <button
                    type="button"
                    onClick={() => selectProject(p)}
                    className={getTocButtonClasses(selected)}
                  >
                    {p.title}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="mt-3 flex items-center justify-between">
          <p className="text-xs text-white/60">
            {activeId
              ? "Selected project is shown on the deck."
              : "Pick a project to open it."}
          </p>

          <button
            type="button"
            onClick={() => setActiveId(null)}
            className="rounded border border-white/12 bg-white/6 px-2 py-1 text-xs text-white/75 transition hover:bg-white/10"
          >
            Clear
          </button>
        </div>
      </nav>

      {/* Deck visual */}
      <div className="relative h-[300px] w-[200px] shrink-0 overflow-visible">
        {ordered.map((card, index) => {
          const isActive = isOpen && activeId === card.id;
          const stackOffset = getStackOffset(index);

          return (
            <div
              key={card.id}
              className={`absolute inset-0 rounded-lg border border-white/12 shadow-md transition-transform duration-500 ${card.bg} ${card.origin} ${stackOffset} ${
                isActive
                  ? // IMPORTANT: active must be on top (mobile only), but non-active cards must maintain their original stacking order (desktop + mobile) to preserve the layered “stack” look
                    `z-[40] max-[900px]:z-[60] ${ACTIVE_SPOT} ${ACTIVE_SPOT_MOBILE} shadow-[0_0_1.6rem_rgba(34,211,238,0.22)]`
                  : card.z
              } `}
            >
              <div className="relative flex h-full w-full flex-col items-center justify-between p-4">
                {/* Clickable “article link” area */}
                <Link
                  to={getProjectPath(card.id)}
                  className="w-full rounded outline-none focus-visible:ring-2 focus-visible:ring-white/35"
                  aria-label={`Open article page for ${card.title}`}
                >
                  <h3 className="text-center text-[11px] font-semibold tracking-wide text-white">
                    {card.title}
                  </h3>

                  <p className="mt-1 line-clamp-3 text-center text-[10px] leading-snug text-white/70">
                    {card.shortDescription}
                  </p>

                  <div className="mt-2 flex flex-1 items-center justify-center">
                    <img
                      src={withBase(card.logoSrc)}
                      alt={card.logoAlt}
                      className="max-h-24 w-auto object-contain"
                      loading="lazy"
                      draggable={false}
                    />
                  </div>
                </Link>

                {isActive ? (
                  <div className="flex gap-2 pb-1">
                    <a
                      href={card.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded border border-white/15 bg-white/8 px-3 py-1 text-xs text-white/90 transition hover:border-white/25 hover:bg-white/14 focus-visible:ring-2 focus-visible:ring-cyan-300/70 focus-visible:outline-none"
                      style={{
                        boxShadow: "0 0 0.6rem rgba(34, 211, 238, 0.18)",
                      }}
                    >
                      repo
                    </a>

                    <a
                      href={card.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded border border-white/15 bg-white/8 px-3 py-1 text-xs text-white/90 transition hover:border-white/25 hover:bg-white/14 focus-visible:ring-2 focus-visible:ring-cyan-300/70 focus-visible:outline-none"
                      style={{
                        boxShadow: "0 0 0.6rem rgba(124, 58, 237, 0.18)",
                      }}
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

        {/* Cover toggle (consistent page-theme tint/glow/text) */}
        <button
          type="button"
          onClick={() => {
            if (isOpen) toggleCover();
            else openTOC();
          }}
          aria-expanded={isOpen}
          aria-label="Toggle project table of contents"
          style={{
            backgroundImage: `url(${withBase("assets/book-cover.png")})`,
            boxShadow: COVER_GLOW,
          }}
          className={`group absolute inset-0 rounded-lg bg-cover bg-center shadow-lg transition-[opacity,filter,box-shadow] duration-300 ${
            isOpen
              ? // MOBILE: cover goes behind active card
                "opacity-80 max-[900px]:pointer-events-none max-[900px]:z-0 max-[900px]:opacity-25 min-[901px]:z-50 min-[901px]:opacity-95"
              : "z-50 opacity-100"
          } hover:brightness-110`}
        >
          {/* fixed page-theme tint */}
          <div
            className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${COVER_TINT}`}
          />

          {/* slight hover glow */}
          <div
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{ boxShadow: COVER_GLOW }}
          />

          <div className="relative flex h-full w-full items-center justify-center">
            <h2
              className={`rounded px-3 py-2 text-sm font-semibold ${COVER_TEXT}`}
            >
              {isOpen ? "Choose a project" : "My Projects"}
            </h2>
          </div>
        </button>
      </div>
    </section>
  );
}
