
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