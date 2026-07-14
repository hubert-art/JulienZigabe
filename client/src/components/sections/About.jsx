import {
  HeartHandshake,
  Languages,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  User,
} from "lucide-react";

export default function About({ lang }) {
  const L = {
    fr: {
      label: "Profil professionnel",
      title: "À propos",
      intro:
        "Julien est un étudiant en relations internationales et jeune professionnel orienté impact.   Mon parcours relie diplomatie, développement communautaire, entrepreneuriat social et formation pratique pour accompagner des jeunes, des réfugiés et des entrepreneurs émergents.",
      objectiveTitle: "Objectif de carrière",
      objective:
        "Contribuer à des programmes internationaux exigeants où l'analyse, la facilitation et le leadership servent des solutions durables pour les communautés.",
      focusTitle: "Axes d'impact",
      focus: [
        "Développement communautaire et inclusion des jeunes",
        "Renforcement des capacités entrepreneuriales",
        "Recherche, communication et innovation sociale",
      ],
      contact: "Contact direct",
      details: [
        ["Nationalité", "Congolaise"],
        ["Statut", "Étudiant en relations internationales"],
        ["Basé à", "Nairobi, Kenya"],
      ],
      languages: "Anglais • Français • Swahili • Lingala",
      values: ["Leadership", "Service", "Diplomatie", "Innovation"],
    },
    en: {
      label: "Professional Profile",
      title: "About",
      intro:
        "Julien is an International Relations student and impact-driven young professional. My work connects diplomacy, community development, social entrepreneurship, and practical training to support youth, refugees, and emerging entrepreneurs.",
      objectiveTitle: "Career Objective",
      objective:
        "To contribute to demanding international programs where analysis, facilitation, and leadership help deliver sustainable solutions for communities.",
      focusTitle: "Impact Focus",
      focus: [
        "Community development and youth inclusion",
        "Entrepreneurial capacity strengthening",
        "Research, communication, and social innovation",
      ],
      contact: "Direct contact",
      details: [
        ["Nationality", "Congolese"],
        ["Status", "International Relations student"],
        ["Based in", "Nairobi, Kenya"],
      ],
      languages: "English • French • Swahili • Lingala",
      values: ["Leadership", "Service", "Diplomacy", "Innovation"],
    },
  }[lang];

  return (
    <section id="about" className="bg-white px-5 py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="reveal">
          <p className="section-kicker">
            <User size={16} />
            {L.label}
          </p>
          <h2 className="section-title mt-4">{L.title}</h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">{L.intro}</p>

          <div className="mt-8 rounded-lg border border-blue-100 bg-blue-50/60 p-6">
            <div className="flex items-center gap-3 text-blue-700">
              <ShieldCheck size={20} />
              <h3 className="font-bold text-slate-950">{L.objectiveTitle}</h3>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-600">{L.objective}</p>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {L.values.map((value) => (
              <span
                key={value}
                className="rounded-lg bg-slate-950 px-3 py-2 text-xs font-semibold text-white"
              >
                {value}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div className="premium-card sm:col-span-2">
            <div className="flex items-center gap-3 text-orange-500">
              <Sparkles size={20} />
              <h3 className="text-lg font-bold text-slate-950">{L.focusTitle}</h3>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {L.focus.map((item, index) => (
                <div key={item} className="rounded-lg bg-slate-50 p-4">
                  <span className="text-xs font-black text-blue-600">
                    0{index + 1}
                  </span>
                  <p className="mt-3 text-sm font-semibold leading-6 text-slate-700">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="premium-card">
            <div className="flex items-center gap-3 text-blue-600">
              <Mail size={19} />
              <h3 className="font-bold text-slate-950">{L.contact}</h3>
            </div>
            <div className="mt-5 space-y-3 text-sm text-slate-600">
              <a className="block hover:text-blue-600" href="mailto:julienzigabe10@gmail.com">
                julienzigabe10@gmail.com
              </a>
              <p className="flex items-center gap-2">
                <Phone size={15} className="text-orange-500" />
                +254 119 526 770
              </p>
              <p className="flex items-center gap-2">
                <Phone size={15} className="text-orange-500" />
                +256 760 325 737
              </p>
              <p className="flex items-center gap-2">
                <MapPin size={15} className="text-green-600" />
                Nairobi, Kenya
              </p>
            </div>
          </div>

          <div className="premium-card">
            <div className="flex items-center gap-3 text-green-600">
              <Languages size={19} />
              <h3 className="font-bold text-slate-950">
                {lang === "fr" ? "Langues" : "Languages"}
              </h3>
            </div>
            <p className="mt-5 text-sm leading-7 text-slate-600">{L.languages}</p>
          </div>

          <div className="premium-card sm:col-span-2">
            <div className="flex items-center gap-3 text-orange-500">
              <HeartHandshake size={20} />
              <h3 className="font-bold text-slate-950">
                {lang === "fr" ? "Informations clés" : "Key Details"}
              </h3>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {L.details.map(([label, value]) => (
                <div key={label} className="rounded-lg border border-slate-100 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                    {label}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-slate-800">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
