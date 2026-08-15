import { ArrowUp, ExternalLink, Mail } from "lucide-react";

export default function Footer({ lang = "en" }) {
  const year = new Date().getFullYear();
  const L = {
    fr: {
      title: "Julien Zigabe",
      subtitle: "Développement international • Entrepreneuriat • Impact social",
      top: "Retour en haut",
      rights: "Tous droits réservés.",
    },
    en: {
      title: "Julien Zigabe",
      subtitle: "International Development • Entrepreneurship • Social Impact",
      top: "Back to top",
      rights: "All rights reserved.",
    },
  }[lang];

  return (
    <footer className="bg-slate-950 px-5 pt-16 text-white lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 pb-12 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-black tracking-tight">{L.title}</h2>
          <p className="mt-3 max-w-xl text-sm leading-6 text-slate-300">{L.subtitle}</p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href="mailto:julienzigabe10@gmail.com"
            className="inline-flex size-10 items-center justify-center rounded-lg bg-white/10 text-slate-200 transition hover:bg-blue-600 hover:text-white"
            aria-label="Email Julien Zigabe"
          >
            <Mail size={18} />
          </a>
          <a
            href="https://linkedin.com/in/julienz24"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex size-10 items-center justify-center rounded-lg bg-white/10 text-slate-200 transition hover:bg-blue-600 hover:text-white"
            aria-label="LinkedIn profile"
          >
            <ExternalLink size={18} />
          </a>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-bold text-slate-950 transition hover:bg-orange-500 hover:text-white"
          >
            {L.top}
            <ArrowUp size={16} />
          </button>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-xs text-slate-400">
        © {year} Julien Zigabe. {L.rights}
      </div>
    </footer>
  );
}
