import { withBase } from "../../lib/paths";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onDisplay: (next: { title: string; content: string }) => void;
  onAfterDisplay: () => void;
};

const ABOUT_TEXT =
  "I’m a frontend developer based in Trondheim, Norway, currently finishing my studies at Noroff and working on my final project exam.\n\n" +
  "I enjoy building clean, user-focused interfaces and turning design ideas into reliable, maintainable code. Problem-solving is what keeps me engaged, and I’m always looking to refine how things work — not just how they look.\n\n" +
  "Outside of development, my family is a major source of balance and motivation in my life. I also practice martial arts, which has taught me discipline, focus, and persistence — qualities I bring into my work as a developer.\n\n" +
  "I’m actively applying for junior frontend roles where I can contribute to real products, collaborate with a team, and continue growing through hands-on experience.";

export default function AboutPanel({
  isOpen,
  onClose,
  onDisplay,
  onAfterDisplay,
}: Props) {
  return (
    <div
      aria-hidden={!isOpen}
      className={`
        flex justify-center
        transition-all duration-700
        ${
          isOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-3 opacity-0 pointer-events-none"
        }
      `}
    >
      <aside
        className="w-[min(360px,92vw)]"
        style={{ backgroundImage: `url(${withBase("assets/info-note.png")})` }}
      >
        <div
          className="
            relative
            rounded-md
            border border-[#4b4c50]
            bg-cover bg-center
            p-4
            shadow-lg
            [font-family:monospace]
            text-[#333436]
          "
        >
          <div className="flex items-start justify-between gap-3">
            <h2 className="text-base font-semibold">Who Dis?</h2>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close About panel"
              className="
                -mt-1
                rounded
                border border-zinc-900/30
                bg-white/60
                px-2 py-1
                text-sm
                transition
                hover:bg-white/85
              "
            >
              ✕
            </button>
          </div>

          <button
            type="button"
            onClick={() => {
              onDisplay({
                title: "About Me:",
                content: ABOUT_TEXT,
              });
              onAfterDisplay();
            }}
            className="
              mt-3
              w-full
              rounded
              border border-[#4b4c50]
              bg-white/70
              py-2
              shadow-sm
              transition
              hover:bg-white/90
            "
          >
            Click to find out!
          </button>

          <div className="mt-4 space-y-2 text-sm">
            <div className="flex items-center justify-between gap-3">
              <span>Send me a mail:</span>
              <a className="underline" href="mailto:remylian@gmail.com">
                remylian@gmail.com
              </a>
            </div>

            <div className="flex items-center justify-between gap-3">
              <span>Check my GitHub:</span>
              <a
                className="underline"
                href="https://github.com/remylian"
                target="_blank"
                rel="noreferrer"
              >
                github.com/remylian
              </a>
            </div>

            <div className="flex items-center justify-between gap-3">
              <span>Visit my LinkedIn:</span>
              <a
                className="underline"
                href="https://www.linkedin.com/in/remy-lian-585518a1/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn profile
              </a>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}