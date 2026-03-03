import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <section className="mx-auto w-full max-w-3xl px-4 py-10">
      <h1 className="text-2xl font-semibold">404</h1>
      <p className="mt-2 text-zinc-700">This page doesn’t exist.</p>

      <Link
        to="/"
        className="mt-6 inline-flex rounded border border-zinc-900/30 bg-white/60 px-3 py-2 text-sm transition hover:bg-white/85"
      >
        ← Back to home
      </Link>
    </section>
  );
}
