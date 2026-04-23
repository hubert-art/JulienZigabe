import { useState } from "react";
import { Menu } from "lucide-react";

export default function Navbar({ lang, setLang }) {
  const [open, setOpen] = useState(false);

  const t = {
    fr: {
      about: "À propos",
      experience: "Expérience",
      skills: "Compétences",
      achievements: "Réalisations",
      contact: "Contact",
      contactBtn: "Contact",
    },
    en: {
      about: "About",
      experience: "Experience",
      skills: "Skills",
      achievements: "Achievements",
      contact: "Contact",
      contactBtn: "Contact",
    },
  };

  const L = t[lang];

  const toggleLang = (l) => {
    setLang(l);
    localStorage.setItem("lang", l);
  };

  return (
    <header className="sticky top-0 z-50 bg-white backdrop-blur-xl shadow-sm">

      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">

        {/* LOGO */}
        <div className="text-xl font-bold tracking-tight">
          <span className="text-blue-600">Julien</span>
          <span className="text-orange-500"> Zigabe</span>
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-700">
          <a href="#about" className="hover:text-blue-600 transition">
            {L.about}
          </a>
          <a href="#experience" className="hover:text-blue-600 transition">
            {L.experience}
          </a>
          <a href="#skills" className="hover:text-blue-600 transition">
            {L.skills}
          </a>
          <a href="#achievements" className="hover:text-blue-600 transition">
            {L.achievements}
          </a>
          <a href="#contact" className="hover:text-blue-600 transition">
            {L.contact}
          </a>
        </nav>

        {/* ACTIONS */}
        <div className="flex items-center gap-2">

          {/* LANGUAGE SWITCH */}
          <div className="flex bg-slate-100 rounded-lg p-1">

            <button
              onClick={() => toggleLang("en")}
              className={`px-3 py-1 text-xs rounded font-medium transition ${
                lang === "en"
                  ? "bg-white text-black shadow-sm"
                  : "text-black hover:bg-white/60"
              }`}
            >
              EN
            </button>

            <button
              onClick={() => toggleLang("fr")}
              className={`px-3 py-1 text-xs rounded font-medium transition ${
                lang === "fr"
                  ? "bg-white text-black shadow-sm"
                  : "text-black hover:bg-white/60"
              }`}
            >
              FR
            </button>

          </div>

          {/* CTA */}
          <a
            href="#contact"
            className="hidden sm:inline-block px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white text-sm rounded-lg transition"
          >
            {L.contactBtn}
          </a>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2"
          >
            <Menu color="#000000" />
          </button>

        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-3 text-slate-700 bg-white">

          <a href="#about" className="hover:text-blue-600">{L.about}</a>
          <a href="#experience" className="hover:text-blue-600">{L.experience}</a>
          <a href="#skills" className="hover:text-blue-600">{L.skills}</a>
          <a href="#achievements" className="hover:text-blue-600">{L.achievements}</a>
          <a href="#contact" className="hover:text-blue-600">{L.contact}</a>

        </div>
      )}
    </header>
  );
}