import { withBase } from "../../lib/paths";
import { useTypewriter } from "./useTypewriter";

type Props = {
  title: string;
  content: string;
  onClose?: () => void;
};

export default function InfoNote({ title, content, onClose }: Props) {
  const typed = useTypewriter(content, 16);

  return (
    <aside
      style={{ backgroundImage: `url(${withBase("assets/info-note.png")})` }}
      className="relative w-[min(900px,92vw)] rounded-md border border-zinc-900/20 bg-cover bg-center p-10 shadow-lg"
    >
      <div className="flex items-start justify-between gap-4">
        <h2 className="mx-auto text-center text-xl font-semibold text-zinc-900">
          {title}
        </h2>

        {onClose ? (
          <button
            type="button"
            onClick={onClose}
            aria-label="Close info"
            className="-mt-1 rounded border border-zinc-900/30 bg-white/60 px-2 py-1 text-sm text-zinc-900 transition hover:bg-white/85"
          >
            ✕
          </button>
        ) : null}
      </div>

      <p className="mt-3 text-base leading-relaxed whitespace-pre-line text-zinc-900">
        {typed}
      </p>
    </aside>
  );
}
