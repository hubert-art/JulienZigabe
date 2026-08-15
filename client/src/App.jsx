import { useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Home from "@/pages/Home";
import AboutPage from "@/pages/AboutPage";
import ExpertisePage from "@/pages/ExpertisePage";
import ExperiencePage from "@/pages/ExperiencePage";
import ImpactPage from "@/pages/ImpactPage";
import ContactPage from "@/pages/ContactPage";

const pages = { "/": Home, "/about": AboutPage, "/expertise": ExpertisePage, "/experience": ExperiencePage, "/impact": ImpactPage, "/contact": ContactPage };
const titles = { "/": "Home", "/about": "About", "/expertise": "Expertise", "/experience": "Experience", "/impact": "Impact & Initiatives", "/contact": "Contact" };

export default function App() {
  const [lang, setLang] = useState(() => localStorage.getItem("lang") || "en");
  const [path, setPath] = useState(() => window.location.pathname);
  const Page = pages[path] || Home;

  useEffect(() => {
    const onPopState = () => setPath(window.location.pathname);
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);
  useEffect(() => { document.title = `${titles[path] || "Home"} — Julien Zigabe`; window.scrollTo({ top: 0, behavior: "smooth" }); }, [path]);
  const navigate = (href) => { if (href !== path) { window.history.pushState({}, "", href); setPath(href); } };

  return <div className="min-h-screen bg-white text-slate-950"><Navbar lang={lang} setLang={setLang} path={path} navigate={navigate} /><main className="animate-fade-in"><Page lang={lang} /></main><Footer lang={lang} /></div>;
}
