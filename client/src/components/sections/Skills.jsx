import {
  Brain,
  FileText,
  Languages,
  Lightbulb,
  Presentation,
  Target,
  Users,
} from "lucide-react";
import { createElement } from "react";

export default function Skills({ lang, showHeader = true }) {
  const L = {
    fr: {
      label: "Domaines de contribution",
      title: "Expertise ancrée dans la pratique",
      subtitle:
        "Des domaines de travail développés au contact des programmes de développement, des entrepreneurs, des jeunes et des communautés.",
      groups: [
        {
          title: "Développement international",
          icon: Languages,
          skills: ["Programmes communautaires", "Développement inclusif", "Contextes multiculturels", "Mise en œuvre terrain"],
        },
        {
          title: "Entrepreneuriat & développement d’activité",
          icon: Target,
          skills: ["Renforcement d’entreprise", "Planification", "Préparation au marché", "Croissance durable"],
        },
        {
          title: "Jeunesse, leadership & innovation sociale",
          icon: Lightbulb,
          skills: ["Idéation", "Résolution de problèmes", "Mentorat", "Initiatives à impact"],
        },
      ],
      cards: [
        ["Conseil & accompagnement", "Soutien aux initiatives entrepreneuriales et aux communautés vers des réponses pratiques.", Users],
        ["Formation & renforcement de capacités", "Sessions pratiques pour entrepreneurs, groupes communautaires et jeunes.", Presentation],
        ["Inclusion économique", "Éducation financière et compétences économiques inclusives.", FileText],
        ["Facilitation", "Des espaces structurés pour l’idéation, la résolution de problèmes et l’action.", Brain],
      ],
    },
    en: {
      label: "Areas of contribution",
      title: "Expertise grounded in practice",
      subtitle:
        "Areas of work developed alongside development programs, entrepreneurs, young people, and communities.",
      groups: [
        {
          title: "International Development",
          icon: Languages,
          skills: ["Community programs", "Inclusive development", "Multicultural settings", "Field implementation"],
        },
        {
          title: "Business Development & Entrepreneurship",
          icon: Target,
          skills: ["Business strengthening", "Planning", "Market readiness", "Sustainable growth"],
        },
        {
          title: "Youth, Leadership & Social Innovation",
          icon: Lightbulb,
          skills: ["Ideation", "Problem solving", "Mentorship", "Impact initiatives"],
        },
      ],
      cards: [
        ["Consulting & Advisory", "Supporting entrepreneurial initiatives and communities towards practical responses.", Users],
        ["Training & Capacity Building", "Practical sessions for entrepreneurs, community groups, and youth.", Presentation],
        ["Economic Inclusion", "Financial education and inclusive economic skills.", FileText],
        ["Facilitation", "Structured spaces for ideation, problem solving, and action.", Brain],
      ],
    },
  }[lang];

  return (
    <section id="skills" className="bg-white px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className={`grid gap-10 lg:items-end ${showHeader ? "lg:grid-cols-[0.8fr_1.2fr]" : ""}`}>
          {showHeader && <div>
            <p className="section-kicker">
              <Brain size={16} />
              {L.label}
            </p>
            <h2 className="section-title mt-4">{L.title}</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">{L.subtitle}</p>
          </div>}

          <div className="grid gap-4 sm:grid-cols-2">
            {L.cards.map(([title, desc, Icon]) => (
              <div key={title} className="rounded-lg border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-1 hover:bg-white hover:shadow-lg">
                <div className="flex size-10 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                  {createElement(Icon, { size: 18 })}
                </div>
                <h3 className="mt-4 font-bold text-slate-950">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {L.groups.map((group) => {
            const Icon = group.icon;
            return (
              <article key={group.title} className="premium-card reveal">
                <div className="flex items-center gap-3">
                  <div className="flex size-11 items-center justify-center rounded-lg bg-orange-50 text-orange-500">
                    {createElement(Icon, { size: 20 })}
                  </div>
                  <h3 className="text-lg font-bold text-slate-950">{group.title}</h3>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-600"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
