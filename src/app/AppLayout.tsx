import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export default function AppLayout() {
  const location = useLocation();

  // Small UX polish: route change resets scroll
  // If we're navigating to a hash on the same page (e.g. /#about),
  // let the target page handle scrolling smoothly.
  useEffect(() => {
    if (location.hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [location.pathname, location.hash]);

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
