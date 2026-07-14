import { useEffect, useState } from "react";
import { BriefcaseBusiness, Menu, X } from "lucide-react";

export default function Navbar({ lang, setLang }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const t = {
    fr: {
      about: "Àpropos",
      education: "Éducation",
      experience: "Expérience",
      skills: "Compétences",
      achievements: "Réalisations",
      projects: "Recherche",
      testimonials: "Témoignages",
      contact: "Contact",
      contactBtn: "Discuter",
      menu: "Ouvrir le menu",
    },
    en: {
      about: "About",
      education: "Education",
      experience: "Experience",
      skills: "Skills",
      achievements: "Achievements",
      projects: "Research",
      testimonials: "Testimonials",
      contact: "Contact",
      contactBtn: "Let's talk",
      menu: "Open menu",
    },
  };

  const L = t[lang];
  const navItems = [
    ["#about", L.about],
    ["#education", L.education],
    ["#experience", L.experience],
    ["#skills", L.skills],
    ["#achievements", L.achievements],
    ["#projects", L.projects],
    ["#testimonials", L.testimonials],
    ["#contact", L.contact],
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleLang = (l) => {
    setLang(l);
    localStorage.setItem("lang", l);
  };

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-slate-200/80 bg-white/90 shadow-sm backdrop-blur-xl"
          : "border-transparent bg-white/75 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a
          href="#home"
          className="group flex items-center gap-3 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          aria-label="Julien Zigabe home"
        >
          <span className="flex size-10 items-center justify-center rounded-lg bg-slate-950 text-white shadow-sm transition group-hover:bg-blue-600">
            <BriefcaseBusiness size={18} />
          </span>
          <span className="leading-tight">
            <span className="block text-base font-bold tracking-tight text-slate-950">
              Julien <span className="text-orange-500">Zigabe</span>
            </span>
            <span className="hidden text-[11px] uppercase tracking-[0.22em] text-slate-500 sm:block">
              International Relations
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navItems.map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div
            className="flex rounded-lg border border-slate-200 bg-slate-100 p-1"
            aria-label="Language selector"
          >
            {["en", "fr"].map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => toggleLang(code)}
                className={`rounded-md px-3 py-1.5 text-xs font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                  lang === code
                    ? "bg-white text-slate-950 shadow-sm"
                    : "text-slate-500 hover:text-slate-900"
                }`}
                aria-pressed={lang === code}
              >
                {code.toUpperCase()}
              </button>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden rounded-lg bg-orange-500 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-orange-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 sm:inline-flex"
          >
            {L.contactBtn}
          </a>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="inline-flex size-10 items-center justify-center rounded-lg border border-slate-200 text-slate-800 transition hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 lg:hidden"
            aria-label={L.menu}
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-slate-100 bg-white px-5 pb-5 pt-2 shadow-lg lg:hidden">
          <nav className="grid gap-1" aria-label="Mobile primary">
            {navItems.map(([href, label]) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
