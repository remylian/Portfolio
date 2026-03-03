import { Link, useParams } from "react-router-dom";

import { projects } from "../data/projects";
import { withBase, getProjectPath } from "../lib/paths";

function isValidId(raw: string | undefined): raw is string {
  return typeof raw === "string" && raw.trim().length > 0;
}

export default function ProjectPage() {
  const { id } = useParams();

  const projectId = isValidId(id) ? Number(id) : NaN;
  const project = projects.find((p) => p.id === projectId);

  async function handleCopyLink() {
    const url = window.location.href;
    try {
      await navigator.clipboard.writeText(url);
      // Keep it simple; if you prefer, we can wire this into your InfoNote.
      alert("Link copied!");
    } catch {
      alert("Could not copy link (browser blocked clipboard).");
    }
  }

  if (!project) {
    return (
      <section className="mx-auto w-full max-w-3xl px-4 py-10">
        <h1 className="text-2xl font-semibold">Project not found</h1>
        <p className="mt-2 text-zinc-700">
          That project does not exist (or the link is wrong).
        </p>

        <Link
          to="/"
          className="mt-6 inline-flex rounded border border-zinc-900/30 bg-white/60 px-3 py-2 text-sm transition hover:bg-white/85"
        >
          ← Back to home
        </Link>
      </section>
    );
  }

  return (
    <article className="mx-auto w-full max-w-3xl px-4 py-10">
      <header className="flex flex-col gap-3">
        <p className="text-sm text-zinc-600">Project</p>
        <h1 className="text-3xl font-semibold text-zinc-900">
          {project.title}
        </h1>

        <div className="mt-2 flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={handleCopyLink}
            className="inline-flex rounded border border-zinc-900/30 bg-white/60 px-3 py-2 text-sm transition hover:bg-white/85"
          >
            Copy/share link
          </button>

          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded border border-zinc-900/30 bg-white/60 px-3 py-2 text-sm transition hover:bg-white/85"
          >
            Open live site ↗
          </a>

          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded border border-zinc-900/30 bg-white/60 px-3 py-2 text-sm transition hover:bg-white/85"
          >
            GitHub README ↗
          </a>

          <Link
            to="/"
            className="inline-flex rounded border border-zinc-900/30 bg-white/60 px-3 py-2 text-sm transition hover:bg-white/85"
          >
            ← Home
          </Link>
        </div>
      </header>

      <figure className="mt-8">
        <img
          src={withBase(project.imageSrc)}
          alt={project.imageAlt}
          className="w-full rounded-lg border border-zinc-900/20 object-cover"
          draggable={false}
        />
        <figcaption className="mt-2 text-sm text-zinc-700">
          {project.imageCaption}
        </figcaption>
      </figure>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-zinc-900">
          {project.infoTitle}
        </h2>
        <p className="mt-3 leading-relaxed whitespace-pre-line text-zinc-900">
          {project.infoContent}
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-zinc-900">Quick summary</h2>
        <p className="mt-3 text-zinc-900">{project.shortDescription}</p>
      </section>

      <footer className="mt-12">
        <Link
          to={getProjectPath(project.id)}
          className="text-sm text-zinc-700 underline underline-offset-4 hover:text-zinc-900"
        >
          Refresh this page link (stable route)
        </Link>
      </footer>
    </article>
  );
}
