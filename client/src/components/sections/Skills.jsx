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

export default function Skills({ lang }) {
  const L = {
    fr: {
      label: "Boîte à outils",
      title: "Compétences",
      subtitle:
        "Des compétences transversales adaptées aux environnements internationaux, aux programmes de terrain et aux équipes multiculturelles.",
      groups: [
        {
          title: "Relations internationales",
          icon: Languages,
          skills: ["Analyse politique", "Diplomatie", "Recherche", "Communication interculturelle"],
        },
        {
          title: "Leadership & programmes",
          icon: Target,
          skills: ["Gestion de projets", "Coordination d'équipes", "Suivi d'activités", "Facilitation"],
        },
        {
          title: "Innovation sociale",
          icon: Lightbulb,
          skills: ["Design thinking", "Entrepreneuriat", "Mentorat", "Développement communautaire"],
        },
      ],
      cards: [
        ["Communication", "Transmission claire des idées, écoute active et collaboration professionnelle.", Users],
        ["Résolution de problèmes", "Analyse stratégique, structuration des défis et recherche de solutions réalistes.", Brain],
        ["Formation", "Animation d'ateliers pratiques pour des publics divers.", Presentation],
        ["Rédaction", "Rapports, propositions, notes conceptuelles et documents de programme.", FileText],
      ],
    },
    en: {
      label: "Professional Toolkit",
      title: "Skills",
      subtitle:
        "Cross-functional skills suited for international environments, field programs, and multicultural teams.",
      groups: [
        {
          title: "International Relations",
          icon: Languages,
          skills: ["Political analysis", "Diplomacy", "Research", "Intercultural communication"],
        },
        {
          title: "Leadership & Programs",
          icon: Target,
          skills: ["Project management", "Team coordination", "Activity tracking", "Facilitation"],
        },
        {
          title: "Social Innovation",
          icon: Lightbulb,
          skills: ["Design thinking", "Entrepreneurship", "Mentorship", "Community development"],
        },
      ],
      cards: [
        ["Communication", "Clear idea delivery, active listening, and professional collaboration.", Users],
        ["Problem Solving", "Strategic analysis, challenge framing, and practical solution design.", Brain],
        ["Training", "Practical workshop facilitation for diverse audiences.", Presentation],
        ["Writing", "Reports, proposals, concept notes, and program documents.", FileText],
      ],
    },
  }[lang];

  return (
    <section id="skills" className="bg-white px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="section-kicker">
              <Brain size={16} />
              {L.label}
            </p>
            <h2 className="section-title mt-4">{L.title}</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">{L.subtitle}</p>
          </div>

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
