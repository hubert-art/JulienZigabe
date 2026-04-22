import { Button } from "../ui/button";

export default function Hero({ lang }) {
  return (
    <section className="relative w-screen min-h-[90vh] flex items-center justify-around p-2.5 text-center overflow-hidden bg-[#fafafa] animate-[fadeIn_1s_ease-out]">

      {/* CONTENT WRAPPER */}
      <div className="relative w-full max-w-6xl min-h-[85vh] px-4 grid md:grid-cols-2 gap-10 items-center animate-[slideUp_1s_ease-out]">

        {/* LEFT CONTENT */}
        <div className="text-center md:text-left animate-[slideUp_1.2s_ease-out]">

          {/* TAG / ROLE */}
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
            {lang === "fr"
              ? "Relations internationales • Développement • Leadership"
              : "International Relations • Development • Leadership"}
          </p>

          {/* TITLE */}
          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight">
            <span className="text-blue-600">Julien Zigabe</span>
            <br />
            <span className="text-slate-800">
              {lang === "fr"
                ? "Construire des solutions pour un impact global"
                : "Building solutions for global impact"}
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-6 text-slate-600 text-lg max-w-2xl mx-auto md:mx-0">
            {lang === "fr"
              ? "Étudiant en relations internationales à USIU-Africa, spécialisé en développement communautaire, leadership et innovation sociale. Expérience avec ONU, ILO, UNICEF et programmes de transformation sociale."
              : "International Relations student at USIU-Africa focused on community development, leadership and social innovation. Experience with UN agencies, ILO, UNICEF and global impact programs."}
          </p>

          {/* BADGES */}
          <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-3">
            {["YALI Fellow", "ILO Trainer", "UNICEF Consultant", "Startup Mentor"].map((item, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs rounded-full bg-slate-100/80 border border-slate-300 text-slate-700"
              >
                {item}
              </span>
            ))}
          </div>

          {/* CTA BUTTONS */}
          <div className="mt-10 flex flex-col sm:flex-row justify-center md:justify-start gap-4">

            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-5 text-sm">
              {lang === "fr" ? "Me contacter" : "Contact me"}
            </Button>

            <Button
              asChild
              variant="outline"
              className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-6 py-5 text-sm"
            >
              <a
                href="/cv/JULIEN-ZIGABE-CV.pdf"
                download="Julien-Zigabe-CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                {lang === "fr" ? "Télécharger CV" : "Download CV"}
              </a>
            </Button>

          </div>

          {/* SOCIAL PROOF */}
          <p className="mt-10 text-xs text-slate-500">
            {lang === "fr"
            ? "Travaillé avec des agences de l’ONU • Programmes d’ONG • Écosystèmes de startups"
            : "Worked with UN agencies • NGO programs • Startup ecosystems"}
          </p>

        </div>

        {/* RIGHT SIDE - PHOTO */}
        <div className="flex justify-center md:justify-end animate-[fadeIn_1.5s_ease-out]">

          <div className="relative">

            {/* IMAGE CARD */}
            <div className="relative w-65 h-65 md:w-[320px] md:h-80 flex items-center justify-center animate-[float_6s_ease-in-out_infinite]">

              {/* VERY SOFT LIGHT GLOW */}
              <div className="absolute w-full h-full bg-slate-200/30 rounded-full blur-3xl scale-125" />

              {/* IMAGE CIRCLE */}
              <img
                src="/profil2.jpg"
                alt="Julien Zigabe"
                className="relative w-full h-full object-cover rounded-full"
              />

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}