import { withBase } from "../../lib/paths";

export default function Footer() {
  return (
    <footer id="contact" className="mt-16 border-t border-white/10">
      <div className="container-page grid gap-6 py-10 md:grid-cols-2">
        <div className="glass rounded-2xl p-6">
          <h2 className="text-lg font-semibold text-white">
            Let’s build something
          </h2>
          <p className="mt-2 text-sm text-white/70">
            If you want a developer who enjoys clean UI, solid structure, and
            shipping real projects — hit me up.
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            <a
              className="rounded-lg border border-white/12 bg-white/5 px-3 py-2 text-sm text-white/85 transition hover:border-white/20 hover:bg-white/8"
              href="mailto:your@email.com"
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
              href="#"
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

          <p className="mt-4 text-xs text-white/50">
            © {new Date().getFullYear()} Remy Lian · Built with React +
            TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
}
