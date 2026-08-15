import { ArrowUpRight, Lightbulb, UsersRound, FileSearch } from "lucide-react";

export default function Projects({ lang, showHeader = true }) {
  const L = {
    fr: {
      label: "Initiatives portées",
      title: "Leadership en action",
      subtitle:
        "Deux initiatives qui rendent visible un engagement durable pour le leadership des jeunes, l’innovation sociale et l’inclusion des talents réfugiés.",
      view: "Travaillons ensemble",
      projects: [
        {
          title: "Anzisha Impact Hub",
          type: "Fondateur & Directeur général",
          desc: "Direction d’une plateforme dédiée au leadership des jeunes, à l’innovation sociale et à l’entrepreneuriat.",
          icon: Lightbulb,
        },
        {
          title: "Refugee Global Talent",
          type: "Cofondateur & Directeur",
          desc: "Co-création d’une initiative qui valorise les talents réfugiés et leur potentiel de leadership.",
          icon: UsersRound,
        },
      ],
    },
    en: {
      label: "Initiatives Led",
      title: "Leadership in action",
      subtitle:
        "Two initiatives that make a sustained commitment to youth leadership, social innovation, and refugee talent inclusion visible.",
      view: "Work together",
      projects: [
        {
          title: "Anzisha Impact Hub",
          type: "Founder & Managing Director",
          desc: "Leads a platform focused on youth leadership, social innovation, and entrepreneurship.",
          icon: Lightbulb,
        },
        {
          title: "Refugee Global Talent",
          type: "Co-founder & Director",
          desc: "Co-created an initiative elevating refugee talent and leadership potential.",
          icon: UsersRound,
        },
      ],
    },
  }[lang];

  return (
    <section id="projects" className="bg-white px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {showHeader && <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
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
        </div>}

        <div className={`${showHeader ? "mt-12" : ""} grid gap-5 md:grid-cols-2`}>
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
