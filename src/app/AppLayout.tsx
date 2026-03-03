import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export default function AppLayout() {
  const location = useLocation();

  // Small UX polish: route change resets scroll
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [location.pathname]);

  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
