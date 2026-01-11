import { withBase } from "../../lib/paths";

export default function Footer() {
  return (
    <footer
      style={{ backgroundImage: `url(${withBase("assets/header-bg.png")})` }}
      className="w-full bg-cover bg-center py-12 text-center"
    >
      <p className="text-sm text-[#333436]">&copy; Remy Lian 2025</p>
    </footer>
  );
}
