import { Link, NavLink, useNavigate } from "react-router-dom";

function navLinkClass({ isActive }: { isActive: boolean }) {
  return [
    "rounded-md px-3 py-2 text-sm transition",
    "hover:bg-white/5 hover:text-white",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70",
    isActive ? "bg-white/8 text-white" : "text-white/75",
  ].join(" ");
}

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-100 border-b border-white/10 bg-black/25 backdrop-blur">
      <div className="container-page flex items-center justify-between py-3">
        <Link to="/" className="group flex items-center gap-3">
          <div className="leading-tight">
            <div className="text-sm font-semibold tracking-wide text-white">
              Remy Lian
            </div>
            <div className="text-xs text-white/65">Front-End Developer</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          <NavLink to="/" className={navLinkClass} end>
            Home
          </NavLink>

          <button
            type="button"
            onClick={() => navigate("/#about")}
            className="rounded-md px-3 py-2 text-sm text-white/75 transition hover:bg-white/5 hover:text-white focus-visible:ring-2 focus-visible:ring-cyan-300/70 focus-visible:outline-none"
          >
            About
          </button>
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => navigate("/#contact")}
            className="rounded-md px-3 py-2 text-sm text-white/75 transition hover:bg-white/5 hover:text-white focus-visible:ring-2 focus-visible:ring-cyan-300/70 focus-visible:outline-none"
          >
            Contact
          </button>
        </div>
      </div>
    </header>
  );
}
