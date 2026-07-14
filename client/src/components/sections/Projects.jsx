import { ArrowUpRight, FileSearch, Globe2, Lightbulb, UsersRound } from "lucide-react";

export default function Projects({ lang }) {
  const L = {
    fr: {
      label: "Recherche & projets",
      title: "Projets à impact",
      subtitle:
        "Des initiatives qui montrent la capacité à transformer l'analyse en action, avec un accent sur la jeunesse, les réfugiés et l'entrepreneuriat social.",
      view: "Explorer",
      projects: [
        {
          title: "Anzisha Impact Hub",
          type: "Leadership social",
          desc: "Plateforme d'accompagnement des jeunes autour de l'entrepreneuriat, du mentorat et de l'innovation communautaire.",
          icon: Lightbulb,
        },
        {
          title: "Refugee Global Talent",
          type: "Inclusion & talent",
          desc: "Initiative cofondée pour valoriser les talents réfugiés et renforcer leur visibilité professionnelle.",
          icon: UsersRound,
        },
        {
          title: "Youth Enterprise Training",
          type: "Formation pratique",
          desc: "Sessions de renforcement des compétences entrepreneuriales, financières et de planification de projet.",
          icon: Globe2,
        },
        {
          title: "Community Research Notes",
          type: "Recherche appliquée",
          desc: "Axes de recherche sur la jeunesse, la mobilité, l'autonomie économique et la cohésion communautaire.",
          icon: FileSearch,
        },
      ],
    },
    en: {
      label: "Research & Projects",
      title: "Impact Projects",
      subtitle:
        "Initiatives showing the ability to turn analysis into action, with a focus on youth, refugees, and social entrepreneurship.",
      view: "Explore",
      projects: [
        {
          title: "Anzisha Impact Hub",
          type: "Social leadership",
          desc: "A youth-centered platform supporting entrepreneurship, mentorship, and community innovation.",
          icon: Lightbulb,
        },
        {
          title: "Refugee Global Talent",
          type: "Inclusion & talent",
          desc: "A co-founded initiative elevating refugee talent and strengthening professional visibility.",
          icon: UsersRound,
        },
        {
          title: "Youth Enterprise Training",
          type: "Practical training",
          desc: "Capacity-building sessions in entrepreneurship, financial literacy, and project planning.",
          icon: Globe2,
        },
        {
          title: "Community Research Notes",
          type: "Applied research",
          desc: "Research interests around youth, mobility, economic independence, and community cohesion.",
          icon: FileSearch,
        },
      ],
    },
  }[lang];

  return (
    <section id="projects" className="bg-white px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="section-kicker">
              <FileSearch size={16} />
              {L.label}
            </p>
            <h2 className="section-title mt-4">{L.title}</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">{L.subtitle}</p>
          </div>
          <a
            href="#contact"
            className="inline-flex w-fit items-center gap-2 rounded-lg border border-slate-200 px-4 py-3 text-sm font-bold text-slate-700 transition hover:border-blue-600 hover:text-blue-600"
          >
            {L.view}
            <ArrowUpRight size={17} />
          </a>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {L.projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <article
                key={project.title}
                className="group premium-card overflow-hidden"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex size-12 items-center justify-center rounded-lg bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                    <Icon size={21} />
                  </div>
                  <span className="rounded-lg bg-orange-50 px-3 py-2 text-xs font-bold text-orange-600">
                    {project.type}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-black text-slate-950">{project.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{project.desc}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
