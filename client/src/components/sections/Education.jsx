import { BookOpenCheck, Calendar, GraduationCap, MapPin } from "lucide-react";

export default function Education({ lang }) {
  const L = {
    fr: {
      label: "Formation académique",
      title: "Éducation",
      subtitle:
        "Une base académique en relations internationales enrichie par des programmes de leadership, d'entrepreneuriat et de développement.",
      degree: "Licence en Relations Internationales",
      school: "United States International University Africa",
      status: "En cours",
      location: "Nairobi, Kenya",
      highlights: [
        "Analyse des affaires internationales et des dynamiques régionales",
        "Développement, gouvernance, sécurité humaine et diplomatie",
        "Recherche appliquée sur les communautés, la jeunesse et l'impact social",
      ],
      timeline: [
        ["USIU-Africa", "Relations internationales, recherche et analyse"],
        ["Programmes de leadership", "YALI, entrepreneuriat social et mentorat"],
        ["Apprentissage terrain", "Consulting, facilitation et développement communautaire"],
      ],
    },
    en: {
      label: "Academic Foundation",
      title: "Education",
      subtitle:
        "An International Relations foundation strengthened by leadership, entrepreneurship, and development programs.",
      degree: "Bachelor of International Relations",
      school: "United States International University Africa",
      status: "In progress",
      location: "Nairobi, Kenya",
      highlights: [
        "Analysis of international affairs and regional dynamics",
        "Development, governance, human security, and diplomacy",
        "Applied research on communities, youth, and social impact",
      ],
      timeline: [
        ["USIU-Africa", "International relations, research, and analysis"],
        ["Leadership Programs", "YALI, social entrepreneurship, and mentorship"],
        ["Field Learning", "Consulting, facilitation, and community development"],
      ],
    },
  }[lang];

  return (
    <section id="education" className="bg-slate-50 px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-kicker justify-center">
            <GraduationCap size={16} />
            {L.label}
          </p>
          <h2 className="section-title mt-4">{L.title}</h2>
          <p className="mt-4 text-base leading-7 text-slate-600">{L.subtitle}</p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="premium-card">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
                  {L.school}
                </p>
                <h3 className="mt-3 text-2xl font-black text-slate-950">{L.degree}</h3>
              </div>
              <span className="w-fit rounded-lg bg-orange-50 px-3 py-2 text-xs font-bold text-orange-600">
                {L.status}
              </span>
            </div>

            <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-600">
              <span className="inline-flex items-center gap-2 rounded-lg bg-slate-100 px-3 py-2">
                <MapPin size={16} className="text-orange-500" />
                {L.location}
              </span>
              <span className="inline-flex items-center gap-2 rounded-lg bg-slate-100 px-3 py-2">
                <Calendar size={16} className="text-blue-600" />
                {L.status}
              </span>
            </div>

            <div className="mt-8 grid gap-3">
              {L.highlights.map((item) => (
                <p key={item} className="flex gap-3 rounded-lg border border-slate-100 p-4 text-sm leading-6 text-slate-600">
                  <BookOpenCheck className="mt-0.5 shrink-0 text-blue-600" size={18} />
                  {item}
                </p>
              ))}
            </div>
          </article>

          <div className="grid gap-4">
            {L.timeline.map(([title, desc], index) => (
              <article key={title} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-center gap-4">
                  <span className="flex size-10 items-center justify-center rounded-lg bg-slate-950 text-sm font-black text-white">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-bold text-slate-950">{title}</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">{desc}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
