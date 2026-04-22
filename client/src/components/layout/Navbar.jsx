import { useState } from "react";
import { Menu } from "lucide-react";

export default function Navbar({ lang, setLang }) {
  const [open, setOpen] = useState(false);

  // LANG SWITCH
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
          <a href="#about" className="hover:text-blue-600 transition">About</a>
          <a href="#experience" className="hover:text-blue-600 transition">Experience</a>
          <a href="#skills" className="hover:text-blue-600 transition">Skills</a>
          <a href="#achievements" className="hover:text-blue-600 transition">Achievements</a>
          <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
        </nav>

        {/* ACTIONS */}
        <div className="flex items-center gap-2">

          {/* LANGUAGE */}
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
            Contact
          </a>

          {/* MOBILE MENU BUTTON (ICON ONLY, NO BORDER, NO BG) */}
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

          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#experience" className="hover:text-blue-600">Experience</a>
          <a href="#skills" className="hover:text-blue-600">Skills</a>
          <a href="#achievements" className="hover:text-blue-600">Achievements</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>

        </div>
      )}
    </header>
  );
}