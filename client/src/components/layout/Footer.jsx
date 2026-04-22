
export default function Footer({ lang = "en" }) {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-white border-t border-slate-100 px-6 pt-16">

      <div className="max-w-5xl mx-auto text-center space-y-10 pb-20">

        {/* TITLE */}
        <h2 className="text-3xl font-semibold text-slate-900">
          {lang === "fr" ? "Travaillons ensemble" : "Let’s work together"}
        </h2>

        <p className="text-sm text-slate-500 max-w-xl mx-auto">
          International Relations • Development • Social Impact • Consulting
        </p>

        {/* CONTACT LINKS */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">

          {/* EMAIL */}
          <a
            href="mailto:julienzigabe10@gmail.com"
            className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-blue-200 bg-blue-50/40 text-blue-700 hover:bg-blue-100/60 transition"
          >
            {/* <Mail size={18} /> */}
            Email
          </a>

          {/* WHATSAPP */}
          <a
            href="https://wa.me/254119526770"
            target="_blank"
            className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-green-200 bg-green-50/40 text-green-700 hover:bg-green-100/60 transition"
          >
            {/* <MessageCircle size={18} /> */}
            WhatsApp
          </a>

          {/* LINKEDIN */}
          <a
            href="https://www.linkedin.com/in/julienz24/"
            target="_blank"
            className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100 transition"
          >
            {/* <Linkedin size={18} /> */}
            LinkedIn
          </a>

        </div>

        {/* BACK TO TOP */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-xs text-slate-400 hover:text-slate-700 transition"
        >
          Back to top ↑
        </button>

      </div>

      {/* COPYRIGHT BAR FULL WIDTH */}
      <div className="w-full bg-slate-900 text-slate-300 text-center py-4 text-xs">
        © {year} Julien Zigabe <br /> International Relations • Social Impact • Leadership
      </div>

    </footer>
  );
}