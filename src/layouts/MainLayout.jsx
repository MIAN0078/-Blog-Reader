import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function MainLayout() {
  const { pathname } = useLocation();

  // Har naye page par upar scroll karo (useEffect + dependency array)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Navbar />
      <main className="container page">
        {/* Yahan current page dikhta hai */}
        <Outlet />
      </main>
      <footer className="footer">© 2026 DevBlog. Built with React Router.</footer>
    </>
  );
}