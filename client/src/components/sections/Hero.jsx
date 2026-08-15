import { ArrowDown, Mail, MapPin } from "lucide-react";

export default function Hero({ lang }) {
  const L = {
    fr: {
      eyebrow: "Développement international • Impact social • Entrepreneuriat",
      title: "Julien Zigabe",
      headline: "Créer des opportunités inclusives par l’entrepreneuriat, le leadership et l’action communautaire.",
      body: "Professionnel du développement international et de l’impact social, j’accompagne des jeunes, entrepreneurs et communautés à travers le conseil, la formation et des initiatives orientées vers l’action.",
      explore: "Explorer mon expérience",
      contact: "Échanger",
      scroll: "Découvrir mon approche",
      location: "Basé à Nairobi, Kenya",
      availability: "Conseil • formation • programmes à impact",
      badges: ["YALI Fellow", "ILO Trainer", "UNICEF Consultant", "Startup Mentor"],
    },
    en: {
      eyebrow: "International Development • Social Impact • Entrepreneurship",
      title: "Julien Zigabe",
      headline: "Creating inclusive opportunities through entrepreneurship, leadership, and community action.",
      body: "An international development and social impact professional supporting youth, entrepreneurs, and communities through consulting, training, and action-oriented initiatives.",
      explore: "Explore my experience",
      contact: "Let's connect",
      scroll: "Discover my approach",
      location: "Based in Nairobi, Kenya",
      availability: "Consulting • training • impact programs",
      badges: ["YALI Fellow", "ILO Trainer", "UNICEF Consultant", "Startup Mentor"],
    },
  }[lang];

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.08),transparent_34%),linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] px-5 py-16 sm:py-20 lg:px-8"
    >
      <div className="mx-auto grid min-h-[78vh] max-w-7xl items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="animate-rise">
          <p className="inline-flex items-center gap-2 rounded-lg border border-blue-100 bg-blue-50 px-3 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-blue-700">
            {L.eyebrow}
          </p>

          <h1 className="mt-7 max-w-4xl text-5xl font-black leading-[1.02] tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
            {L.title}
            <span className="mt-3 block text-3xl font-extrabold leading-tight text-slate-800 sm:text-4xl lg:text-5xl">
              {L.headline}
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            {L.body}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#experience"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              <ArrowDown size={18} />
              {L.explore}
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-orange-200 bg-white px-6 py-3 text-sm font-semibold text-orange-600 shadow-sm transition hover:-translate-y-0.5 hover:border-orange-500 hover:bg-orange-500 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
            >
              <Mail size={18} />
              {L.contact}
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {L.badges.map((item) => (
              <span
                key={item}
                className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-600 shadow-sm"
              >
                {item}
              </span>
            ))}
          </div>

        </div>

        <div className="relative mx-auto w-full max-w-md animate-fade-in lg:max-w-lg">
          <div className="absolute right-5 -top-4 hidden rounded-lg border border-slate-200 bg-white p-4 shadow-xl shadow-slate-200/70 md:block z-10">
            <p className="flex items-center gap-2 text-xs font-semibold text-slate-600">
              <MapPin size={15} className="text-orange-500" />
              {L.location}
            </p>
          </div>

          <div className="relative rounded-[2rem] border border-slate-200 bg-white p-3 shadow-2xl shadow-slate-200">
            <img
              src="/JZ.png"
              alt="Julien Zigabe portrait"
              className="aspect-[4/5] w-full rounded-[1.55rem] object-cover"
            />
            <div className="absolute -bottom-5 left-6 right-6 rounded-lg border border-blue-100 bg-white p-4 shadow-xl">
              <p className="text-sm font-semibold text-slate-900">{L.availability}</p>
              <div className="mt-3 h-1.5 overflow-hidden rounded-lg bg-slate-100">
                <div className="h-full w-4/5 rounded-lg bg-linear-to-r from-blue-600 to-orange-500" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="mx-auto mt-10 hidden w-fit items-center gap-2 rounded-lg text-sm font-semibold text-slate-500 transition hover:text-blue-600 md:flex"
      >
        {L.scroll}
        <ArrowDown size={16} className="animate-bounce" />
      </a>
    </section>
  );
}
