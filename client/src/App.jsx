import { useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Home from "@/pages/Home";
import AboutPage from "@/pages/AboutPage";
import ExperiencePage from "@/pages/ExperiencePage";
import ContactPage from "@/pages/ContactPage";

const pages = { "/": Home, "/about": AboutPage, "/experience": ExperiencePage, "/contact": ContactPage };
const titles = { "/": "Home", "/about": "About", "/experience": "My Work", "/contact": "Contact" };
const pageImages = {
  "/": ["/julien-eyep-panel.jpg"],
  "/about": ["/Prop-background-navy.png"],
  "/experience": ["/1.JPG", "/trandf.JPG", "/conf.JPG"],
  "/contact": [],
};

const wait = (duration) => new Promise((resolve) => window.setTimeout(resolve, duration));
const preloadImages = (sources) => Promise.all(sources.map((source) => new Promise((resolve) => {
  const image = new Image();
  image.onload = image.onerror = resolve;
  image.src = source;
})));

export default function App() {
  const [lang, setLang] = useState(() => localStorage.getItem("lang") || "en");
  const [path, setPath] = useState(() => window.location.pathname);
  const [isLoading, setIsLoading] = useState(false);
  const Page = pages[path] || Home;

  useEffect(() => {
    const onPopState = async () => {
      const nextPath = window.location.pathname;
      setIsLoading(true);
      await Promise.all([preloadImages(pageImages[nextPath] || []), wait(220)]);
      setPath(nextPath);
      setIsLoading(false);
    };
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);
  useEffect(() => { document.title = `${titles[path] || "Home"} — Julien Zigabe`; window.scrollTo({ top: 0, behavior: "smooth" }); }, [path]);
  const navigate = async (href) => {
    if (href === path || isLoading) return;
    setIsLoading(true);
    await Promise.all([preloadImages(pageImages[href] || []), wait(220)]);
    window.history.pushState({}, "", href);
    setPath(href);
    setIsLoading(false);
  };

  const handleInternalNavigation = (event) => {
    const link = event.target instanceof Element ? event.target.closest("a[href]") : null;
    if (!link || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

    const destination = new URL(link.href, window.location.href);
    const isInternalPage = destination.origin === window.location.origin && pages[destination.pathname];
    if (!isInternalPage || link.target === "_blank" || link.hasAttribute("download") || destination.hash) return;

    event.preventDefault();
    navigate(destination.pathname);
  };

  return <div className="min-h-screen bg-white text-slate-950" onClick={handleInternalNavigation}><Navbar lang={lang} setLang={setLang} path={path} navigate={navigate} /><main className="animate-fade-in"><Page lang={lang} /></main><Footer lang={lang} />{isLoading && <div className="page-loader" role="status" aria-live="polite"><div className="page-loader-mark">JZ</div><span>{lang === "fr" ? "Chargement" : "Loading"}</span></div>}</div>;
}
