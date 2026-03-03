import { useTypewriter } from "./useTypewriter";

type Props = {
  title: string;
  content: string;
  onClose?: () => void;
};

export default function InfoNote({ title, content, onClose }: Props) {
  const typed = useTypewriter(content, 6);

  return (
    <aside
      className="relative w-[min(900px,92vw)] overflow-hidden rounded-2xl bg-gradient-to-br from-violet-500/55 via-white/10 to-cyan-400/55 p-[1px] shadow-[0_0_26px_rgba(124,58,237,0.18),0_0_26px_rgba(34,211,238,0.14)]"
      role="region"
      aria-label="Project information"
    >
      <div className="relative h-[240px] rounded-2xl border border-white/10 bg-zinc-950/75 min-[901px]:h-[260px]">
        {/* subtle glow blobs */}
        <div className="pointer-events-none absolute -top-16 -left-16 h-48 w-48 rounded-full bg-violet-500/12 blur-2xl" />
        <div className="pointer-events-none absolute -right-20 -bottom-20 h-56 w-56 rounded-full bg-cyan-400/10 blur-2xl" />

        {/* header */}
        <div className="relative flex items-start justify-between gap-4 border-b border-white/10 px-4 py-3">
          <h2 className="text-sm font-semibold text-white">{title}</h2>

          {onClose ? (
            <button
              type="button"
              onClick={onClose}
              aria-label="Close info"
              className="-mt-0.5 rounded-lg border border-white/15 bg-white/8 px-2 py-1 text-sm text-white/85 transition hover:border-white/25 hover:bg-white/12 focus-visible:ring-2 focus-visible:ring-cyan-300/70 focus-visible:outline-none"
            >
              ✕
            </button>
          ) : null}
        </div>

        {/* scrollable content area */}
        <div className="thin-scroll relative h-[calc(220px-52px)] overflow-auto px-4 py-3 min-[901px]:h-[calc(260px-52px)]">
          <p className="text-sm leading-relaxed whitespace-pre-line text-white/75">
            {typed}
          </p>
        </div>
      </div>
    </aside>
  );
}
