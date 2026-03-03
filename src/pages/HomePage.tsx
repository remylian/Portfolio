import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import ProjectsSection from "../components/sections/ProjectsSection";
import { withBase } from "../lib/paths";

type Display = {
  key: string; // changes to restart typewriter
  title: string;
  content: string;
};

const DEFAULT_DISPLAY: Display = {
  key: "default",
  title: "Welcome",
  content:
    "Pick a project from the deck to see a quick preview, then open the full article page.",
};

const ABOUT_TEXT =
  "Hello there! I’m a frontend developer based in Trondheim, Norway, currently finishing my studies at Noroff.\n\n" +
  "I enjoy building clean, user-focused interfaces and turning design ideas into reliable, maintainable code. I care about structure, polish, and shipping.\n\n" +
  "Outside of development, I’m a family man and I practice martial arts — both keep me grounded, focused, and consistent.\n\n" +
  "I’m actively applying for junior frontend roles where I can contribute to real products and keep growing with a team.";

const HERO_EASE = "ease-[cubic-bezier(0.22,1,0.36,1)]";
const HERO_DUR = "duration-500";

export default function HomePage() {
  const location = useLocation();
  const navigate = useNavigate();

  const heroMode: "default" | "about" | "contact" =
    location.hash === "#about"
      ? "about"
      : location.hash === "#contact"
        ? "contact"
        : "default";

  const [display, setDisplay] = useState<Display>(DEFAULT_DISPLAY);

  function showDisplay(next: Omit<Display, "key">) {
    setDisplay({
      ...next,
      key: String(Date.now()),
    });
  }

  function clearDisplay() {
    setDisplay({
      ...DEFAULT_DISPLAY,
      key: String(Date.now()),
    });
  }

  return (
    <main className="pb-10">
      {/* HERO */}
      <section className="container-page pt-10 md:pt-14">
        <div className="relative max-w-4xl overflow-hidden">
          {/* Default Hero */}
          <div
            className={[
              "transition-all",
              HERO_DUR,
              HERO_EASE,
              "will-change-transform",
              heroMode !== "default"
                ? "pointer-events-none absolute inset-0 -translate-y-6 scale-[0.985] opacity-0 blur-[1px]"
                : "blur-0 relative translate-y-0 scale-100 opacity-100",
            ].join(" ")}
          >
            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
              Clean interfaces{" "}
              <span style={{ color: "var(--accent)" }}>with personality</span>.
            </h1>

            <p className="mt-4 max-w-prose text-base leading-relaxed text-white/70">
              This is my course portfolio — designed to feel modern, sharp, and
              a bit neon.
            </p>

            <div className="mt-6 flex gap-2">
              <button
                type="button"
                onClick={() => navigate("/#about")}
                className="rounded-lg border border-white/12 bg-white/5 px-4 py-2 text-sm text-white/85 transition hover:border-white/20 hover:bg-white/8 focus-visible:ring-2 focus-visible:ring-cyan-300/70 focus-visible:outline-none"
              >
                About me
              </button>

              <button
                type="button"
                onClick={() => navigate("/#contact")}
                className="rounded-lg border border-white/12 bg-white/5 px-4 py-2 text-sm text-white/85 transition hover:border-white/20 hover:bg-white/8 focus-visible:ring-2 focus-visible:ring-cyan-300/70 focus-visible:outline-none"
                style={{ boxShadow: "var(--glow)" }}
              >
                Contact
              </button>
            </div>
          </div>

          {/* About Hero */}
          <div
            className={[
              "transition-all",
              HERO_DUR,
              HERO_EASE,
              "will-change-transform",
              heroMode === "about"
                ? "blur-0 relative translate-y-0 scale-100 opacity-100"
                : "pointer-events-none absolute inset-0 translate-y-6 scale-[0.985] opacity-0 blur-[1px]",
            ].join(" ")}
          >
            <div className="glass-strong rounded-2xl p-5 md:p-6">
              <div className="mb-4 flex items-center justify-between gap-3">
                <h2 className="text-base font-semibold text-white">About me</h2>

                <button
                  type="button"
                  onClick={() => navigate("/", { replace: true })}
                  className="rounded-lg border border-white/12 bg-white/5 px-3 py-1.5 text-sm text-white/80 transition hover:border-white/20 hover:bg-white/8 focus-visible:ring-2 focus-visible:ring-cyan-300/70 focus-visible:outline-none"
                >
                  Back
                </button>
              </div>

              <div className="grid gap-5 md:grid-cols-12 md:items-start">
                <div className="md:col-span-4">
                  <div className="relative overflow-hidden rounded-2xl border border-white/12 bg-black/20 p-2">
                    <img
                      src={withBase("assets/profile.jpg")}
                      alt="Portrait of Remy Lian"
                      className="h-[220px] w-full rounded-xl object-cover md:h-[260px]"
                      loading="lazy"
                      draggable={false}
                    />
                  </div>
                </div>

                <div className="md:col-span-8">
                  <p className="text-sm leading-relaxed whitespace-pre-line text-white/75">
                    {ABOUT_TEXT}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Hero */}
          <div
            className={[
              "transition-all",
              HERO_DUR,
              HERO_EASE,
              "will-change-transform",
              heroMode === "contact"
                ? "blur-0 relative translate-y-0 scale-100 opacity-100"
                : "pointer-events-none absolute inset-0 translate-y-6 scale-[0.985] opacity-0 blur-[1px]",
            ].join(" ")}
          >
            <div className="glass-strong rounded-2xl p-5 md:p-6">
              <div className="mb-4 flex items-center justify-between gap-3">
                <h2 className="text-base font-semibold text-white">Contact</h2>

                <button
                  type="button"
                  onClick={() => navigate("/", { replace: true })}
                  className="rounded-lg border border-white/12 bg-white/5 px-3 py-1.5 text-sm text-white/80 transition hover:border-white/20 hover:bg-white/8 focus-visible:ring-2 focus-visible:ring-cyan-300/70 focus-visible:outline-none"
                >
                  Back
                </button>
              </div>

              <p className="text-sm leading-relaxed text-white/70">
                If you want a developer who enjoys clean UI, solid structure,
                and shipping real projects — hit me up.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                <a
                  className="rounded-lg border border-white/12 bg-white/5 px-3 py-2 text-sm text-white/85 transition hover:border-white/20 hover:bg-white/8"
                  href="mailto:remylian@gmail.com"
                >
                  <span className="inline-flex items-center gap-2">
                    <img
                      src={withBase("assets/mailicon.svg")}
                      alt=""
                      className="h-4 w-4 opacity-80"
                    />
                    Email
                  </span>
                </a>

                <a
                  className="rounded-lg border border-white/12 bg-white/5 px-3 py-2 text-sm text-white/85 transition hover:border-white/20 hover:bg-white/8"
                  href="https://github.com/remylian"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="inline-flex items-center gap-2">
                    <img
                      src={withBase("assets/githublogo.svg")}
                      alt=""
                      className="h-4 w-4 opacity-80"
                    />
                    GitHub
                  </span>
                </a>

                <a
                  className="rounded-lg border border-white/12 bg-white/5 px-3 py-2 text-sm text-white/85 transition hover:border-white/20 hover:bg-white/8"
                  href="https://www.linkedin.com/in/remy-lian-585518a1/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="inline-flex items-center gap-2">
                    <img
                      src={withBase("assets/linkedinlogo.svg")}
                      alt=""
                      className="h-4 w-4 opacity-80"
                    />
                    LinkedIn
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DECK + PROJECTS */}
      <section id="deck" className="mt-16">
        <div className="container-page">
          <div className="mb-4 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold text-white">Project deck</h2>
              <p className="mt-1 text-sm text-white/65">
                Three required course projects — open each one to read the full
                article page.
              </p>
            </div>
          </div>
        </div>

        <ProjectsSection
          display={display}
          onDisplay={showDisplay}
          onClearDisplay={clearDisplay}
        />
      </section>

      <div id="work" />
    </main>
  );
}
