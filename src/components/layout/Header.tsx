import { withBase } from "../../lib/paths";

type Props = {
  onAboutClick?: () => void;
};

export default function Header({ onAboutClick }: Props) {
  return (
    <header
      style={{ backgroundImage: `url(${withBase("assets/header-bg.png")})` }}
      className="z-50-w-full sticky top-0 flex flex-col items-center justify-center bg-cover bg-center text-center"
    >
      <h1 className="py-8 [font-family:'Diplomata',serif] text-[2.5rem] text-[#333436]">
        The Daily Portfolio!
      </h1>

      <section className="pb-6">
        <img
          src={withBase("assets/profile.jpg")}
          alt="Portrait of Remy Lian"
          className="mx-auto mb-4 h-[12.5rem] w-[12.5rem] rounded-full border border-[#4b4c50] object-cover"
          draggable={false}
        />

        <button
          type="button"
          onClick={onAboutClick}
          className="mx-auto mb-4 w-full max-w-[12.5rem] rounded border border-[#4b4c50] bg-white/70 py-2 [font-family:monospace] text-[#333436] shadow-sm transition hover:bg-white/90"
        >
          About me!
        </button>
      </section>
    </header>
  );
}
