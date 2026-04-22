import {
  Brain,
  Users,
  Lightbulb,
  Presentation,
  FileText,
  Target,
} from "lucide-react";

export default function Skills({ lang }) {
  const skills = [
    {
      icon: <Users size={18} />,
      title: lang === "fr" ? "Communication" : "Communication",
      desc:
        lang === "fr"
          ? "Capacité à transmettre des idées clairement et collaborer efficacement."
          : "Ability to clearly communicate ideas and collaborate effectively.",
    },
    {
      icon: <Brain size={18} />,
      title: lang === "fr" ? "Résolution de problèmes" : "Problem Solving",
      desc:
        lang === "fr"
          ? "Analyse stratégique et résolution de défis complexes."
          : "Strategic thinking and solving complex challenges.",
    },
    {
      icon: <Presentation size={18} />,
      title: lang === "fr" ? "Formation & Facilitation" : "Training & Facilitation",
      desc:
        lang === "fr"
          ? "Animation d’ateliers et formation de groupes divers."
          : "Facilitating workshops and training diverse groups.",
    },
    {
      icon: <Lightbulb size={18} />,
      title: lang === "fr" ? "Innovation sociale" : "Social Innovation",
      desc:
        lang === "fr"
          ? "Création de solutions à impact pour les communautés."
          : "Designing impactful solutions for communities.",
    },
    {
      icon: <Target size={18} />,
      title: lang === "fr" ? "Leadership" : "Leadership",
      desc:
        lang === "fr"
          ? "Encadrement d’équipes et gestion de projets."
          : "Leading teams and managing impactful projects.",
    },
    {
      icon: <FileText size={18} />,
      title:
        lang === "fr"
          ? "Rédaction professionnelle"
          : "Proposal & Report Writing",
      desc:
        lang === "fr"
          ? "Rédaction de rapports, propositions et documents stratégiques."
          : "Writing reports, proposals, and strategic documents.",
    },
  ];

  return (
    <section id="skills" className="py-16 px-4 bg-white">

      <div className="max-w-5xl mx-auto">

        {/* TITLE */}
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center">
          {lang === "fr" ? "Compétences" : "Skills"}
        </h2>

        {/* SUBTITLE */}
        <p className="mt-3 text-sm text-slate-600 text-center max-w-xl mx-auto">
          {lang === "fr"
            ? "Compétences clés développées à travers des expériences internationales, le leadership et l'engagement communautaire."
            : "Key competencies developed through international experience, leadership, and community engagement."}
        </p>

        {/* GRID */}
        <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-4">

          {skills.map((skill, i) => (
            <div
              key={i}
              className="group p-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white hover:shadow-md transition"
            >

              {/* ICON */}
              <div className="w-9 h-9 flex items-center justify-center rounded-md bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition">
                {skill.icon}
              </div>

              {/* TITLE */}
              <h3 className="mt-3 text-sm font-semibold text-slate-800">
                {skill.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                {skill.desc}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}