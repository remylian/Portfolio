export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative mt-20 bg-black/40 backdrop-blur-sm"
    >
      {/* Neon top glow separator */}
      <div className="pointer-events-none absolute top-0 left-0 h-[1px] w-full bg-gradient-to-r from-violet-500/60 via-cyan-400/60 to-violet-500/60 blur-[1px]" />

      <div className="container-page py-10">
        <p className="text-xs text-white/50">
          © {new Date().getFullYear()} Remy Lian · Built with React + TypeScript
        </p>
      </div>
    </footer>
  );
}
