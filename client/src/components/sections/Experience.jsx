import {
  Briefcase,
  GraduationCap,
  Globe2,
  Handshake,
  TrendingUp,
  Users,
} from "lucide-react";

export default function Experience({ lang, limit, showHeader = true }) {
  const L = {
    fr: {
      label: "Expérience sélectionnée",
      title: "Une trajectoire entre développement et impact",
      subtitle:
        "Des rôles qui relient développement international, conseil, entrepreneuriat, formation et inclusion économique.",
      impact: "Domaine de contribution",
      experiences: [
        {
          title: "Integrated UPSHIFT Consultant",
          org: "UNICEF - War Child Alliance Uganda",
          date: "2025",
          desc: "Accompagnement de jeunes dans l'idéation, la résolution de problèmes et la structuration de projets à impact.",
          icon: Globe2,
        },
        {
          title: "Business Strengthening Trainer",
          org: "The Innovation Village - Save the Children, USAID Uthabiti Project",
          date: "2023",
          desc: "Formation d'entrepreneurs et de groupes communautaires sur la gestion, la planification et la croissance durable.",
          icon: TrendingUp,
        },
        {
          title: "Business Development Consultant",
          org: "KOICA - INNOPORT Uganda Country Office",
          date: "2023",
          desc: "Appui au développement d'initiatives entrepreneuriales et de modèles de prestation orientés résultats.",
          icon: Briefcase,
        },
        {
          title: "Business Consultant",
          org: "Jesuit Refugee Services",
          date: "2023",
          desc: "Conseil et mentorat pour soutenir l'autonomie économique de communautés réfugiées et hôtes.",
          icon: Handshake,
        },
        {
          title: "Business Trainer & Mentor",
          org: "Starthub Africa Consulting Ltd",
          date: "2023",
          desc: "Animation de sessions pratiques sur l'entrepreneuriat, la stratégie et la préparation au marché.",
          icon: GraduationCap,
        },
        {
          title: "Financial Education Consultant",
          org: "International Labour Organization",
          date: "2022",
          desc: "Facilitation de contenus d'éducation financière et de compétences économiques inclusives.",
          icon: Globe2,
        },
        {
          title: "Founder & Managing Director",
          org: "Anzisha Impact Hub",
          date: "2020 - Present",
          desc: "Direction d'une plateforme dédiée au leadership des jeunes, à l'innovation sociale et à l'entrepreneuriat.",
          icon: Briefcase,
        },
        {
          title: "Co-founder & Director",
          org: "Refugee Global Talent",
          date: "2018",
          desc: "Co-création d'une initiative valorisant les talents réfugiés et leur potentiel de leadership.",
          icon: Users,
        },
      ],
    },
    en: {
      label: "Selected Experience",
      title: "A path across development and impact",
      subtitle:
        "Roles connecting international development, consulting, entrepreneurship, training, and economic inclusion.",
      impact: "Contribution area",
      experiences: [
        {
          title: "Integrated UPSHIFT Consultant",
          org: "UNICEF - War Child Alliance Uganda",
          date: "2025",
          desc: "Supported youth through ideation, problem solving, and structuring community-centered impact projects.",
          icon: Globe2,
        },
        {
          title: "Business Strengthening Trainer",
          org: "The Innovation Village - Save the Children, USAID Uthabiti Project",
          date: "2023",
          desc: "Trained entrepreneurs and community groups in business management, planning, and sustainable growth.",
          icon: TrendingUp,
        },
        {
          title: "Business Development Consultant",
          org: "KOICA - INNOPORT Uganda Country Office",
          date: "2023",
          desc: "Supported entrepreneurial initiatives and outcome-oriented service models for program delivery.",
          icon: Briefcase,
        },
        {
          title: "Business Consultant",
          org: "Jesuit Refugee Services",
          date: "2023",
          desc: "Provided consulting and mentoring to strengthen economic independence for refugee and host communities.",
          icon: Handshake,
        },
        {
          title: "Business Trainer & Mentor",
          org: "Starthub Africa Consulting Ltd",
          date: "2023",
          desc: "Facilitated practical sessions on entrepreneurship, strategy, and market readiness.",
          icon: GraduationCap,
        },
        {
          title: "Financial Education Consultant",
          org: "International Labour Organization",
          date: "2022",
          desc: "Delivered financial education content and inclusive economic skills facilitation.",
          icon: Globe2,
        },
        {
          title: "Founder & Managing Director",
          org: "Anzisha Impact Hub",
          date: "2020 - Present",
          desc: "Leads a platform focused on youth leadership, social innovation, and entrepreneurship.",
          icon: Briefcase,
        },
        {
          title: "Co-founder & Director",
          org: "Refugee Global Talent",
          date: "2018",
          desc: "Co-created an initiative elevating refugee talent and leadership potential.",
          icon: Users,
        },
      ],
    },
  }[lang];

  return (
    <section
      id="experience"
      className="bg-linear-to-b from-white via-slate-50 to-white px-5 py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {showHeader && <div className="mx-auto max-w-3xl text-center">
          <p className="section-kicker justify-center">
            <Briefcase size={16} />
            {L.label}
          </p>
          <h2 className="section-title mt-4">{L.title}</h2>
          <p className="mt-4 text-base leading-7 text-slate-600">{L.subtitle}</p>
        </div>}

        <div className={`${showHeader ? "mt-14" : ""} grid gap-5 lg:grid-cols-2`}>
          {L.experiences.slice(0, limit).map((exp, index) => {
            const Icon = exp.icon;

            return (
              <article
                key={`${exp.title}-${exp.org}`}
                className="group premium-card reveal relative overflow-hidden"
                style={{ animationDelay: `${index * 70}ms` }}
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-blue-600 via-slate-300 to-orange-500 opacity-0 transition group-hover:opacity-100" />
                <div className="flex items-start gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                    <Icon size={21} />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-md bg-orange-50 px-2.5 py-1 text-xs font-bold text-orange-600">
                        {exp.date}
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                        {L.impact}
                      </span>
                    </div>
                    <h3 className="mt-3 text-lg font-bold text-slate-950">{exp.title}</h3>
                    <p className="mt-1 text-sm font-semibold text-blue-700">{exp.org}</p>
                    <p className="mt-4 text-sm leading-7 text-slate-600">{exp.desc}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
