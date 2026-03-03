import { useState } from "react";
import { Link, useParams } from "react-router-dom";

import { projects } from "../data/projects";
import { withBase } from "../lib/paths";

function isValidId(raw: string | undefined): raw is string {
  return typeof raw === "string" && raw.trim().length > 0;
}

export default function ProjectPage() {
  const { id } = useParams();

  const projectId = isValidId(id) ? Number(id) : NaN;
  const project = projects.find((p) => p.id === projectId);

  const [copyStatus, setCopyStatus] = useState<null | "ok" | "fail">(null);

  async function handleCopyLink() {
    const url = window.location.href;

    try {
      await navigator.clipboard.writeText(url);
      setCopyStatus("ok");
      window.setTimeout(() => setCopyStatus(null), 2000);
    } catch {
      setCopyStatus("fail");
      window.setTimeout(() => setCopyStatus(null), 2500);
    }
  }

  if (!project) {
    return (
      <section className="container-page py-12">
        <div className="glass rounded-2xl p-6">
          <h1 className="text-2xl font-semibold text-white">
            Project not found
          </h1>
          <p className="mt-2 text-white/70">
            That project does not exist (or the link is wrong).
          </p>

          <Link
            to="/"
            className="mt-6 inline-flex items-center rounded-xl border border-white/12 bg-white/5 px-3 py-2 text-sm text-white/85 transition hover:border-white/20 hover:bg-white/8 focus-visible:ring-2 focus-visible:ring-cyan-300/70 focus-visible:outline-none"
          >
            Back to home
          </Link>
        </div>
      </section>
    );
  }

  return (
    <article className="container-page py-10">
      {/* Top bar */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-xl border border-white/12 bg-white/5 px-3 py-2 text-sm text-white/85 transition hover:border-white/20 hover:bg-white/8 focus-visible:ring-2 focus-visible:ring-cyan-300/70 focus-visible:outline-none"
        >
          Home
        </Link>
      </div>

      {/* Header */}
      <section className="glass-strong rounded-2xl p-6">
        <p className="text-sm text-white/60">Article</p>

        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-white md:text-4xl">
          {project.title}
        </h1>

        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/70">
          {project.shortDescription}
        </p>

        {/* Actions */}
        <div className="mt-5 flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={handleCopyLink}
            className="inline-flex items-center rounded-xl border border-white/12 bg-white/5 px-3 py-2 text-sm text-white/85 transition hover:border-white/20 hover:bg-white/8 focus-visible:ring-2 focus-visible:ring-cyan-300/70 focus-visible:outline-none"
          >
            Copy/share link
          </button>

          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-xl border border-white/12 bg-white/5 px-3 py-2 text-sm text-white/85 transition hover:border-white/20 hover:bg-white/8 focus-visible:ring-2 focus-visible:ring-cyan-300/70 focus-visible:outline-none"
          >
            Open live site
          </a>

          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-xl border border-white/12 bg-white/5 px-3 py-2 text-sm text-white/85 transition hover:border-white/20 hover:bg-white/8 focus-visible:ring-2 focus-visible:ring-cyan-300/70 focus-visible:outline-none"
          >
            GitHub README
          </a>

          {/* Copy status */}
          {copyStatus ? (
            <span
              className="ml-1 text-sm"
              style={{
                color:
                  copyStatus === "ok" ? "var(--accent-3)" : "var(--accent-2)",
                textShadow:
                  copyStatus === "ok" ? "var(--glow-3)" : "var(--glow-2)",
              }}
            >
              {copyStatus === "ok" ? "Copied!" : "Clipboard blocked"}
            </span>
          ) : null}
        </div>
      </section>

      {/* Image */}
      <figure className="mt-8">
        <div className="glass rounded-2xl p-3">
          <img
            src={withBase(project.imageSrc)}
            alt={project.imageAlt}
            className="h-auto w-full rounded-xl border border-white/10 object-cover"
            draggable={false}
            loading="lazy"
          />
        </div>

        <figcaption className="mt-3 text-sm text-white/60">
          {project.imageCaption}
        </figcaption>
      </figure>

      {/* Content */}
      <section className="mt-10">
        <div className="glass rounded-2xl p-6">
          <h2 className="text-lg font-semibold text-white">
            {project.infoTitle}
          </h2>

          <div className="mt-3 h-[2px] w-12 rounded-full bg-white/10" />

          {project.infoContent.split("\n\n").map((block, i) => (
            <p key={i} className="mt-5 text-sm leading-relaxed text-white/75">
              {block}
            </p>
          ))}
        </div>
      </section>
    </article>
  );
}
