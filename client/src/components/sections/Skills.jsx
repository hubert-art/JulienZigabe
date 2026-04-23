import { useEffect, useRef, useState } from "react";
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

  const refs = useRef([]);
  const [visible, setVisible] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        setVisible((prev) => {
          let updated = [...prev];

          entries.forEach((entry) => {
            const index = refs.current.indexOf(entry.target);

            if (entry.isIntersecting) {
              if (!updated.includes(index)) {
                updated.push(index);
              }
            } else {
              updated = updated.filter((i) => i !== index);
            }
          });

          return updated;
        });
      },
      { threshold: 0.25 }
    );

    refs.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 px-6 bg-white">

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
        <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 gap-6">

          {skills.map((skill, i) => {
            const isVisible = visible.includes(i);

            return (
              <div
                key={i}
                ref={(el) => (refs.current[i] = el)}
                className={`group p-5 rounded-2xl border transition-all duration-500 ease-out
                  
                  bg-slate-50 border-slate-200
                  
                  hover:bg-white hover:shadow-md hover:scale-[1.04] hover:border-blue-200

                  ${isVisible
                    ? "opacity-100 translate-y-0 scale-100 blur-0"
                    : "opacity-0 translate-y-12 scale-75 blur-sm"}
                `}
                style={{
                  transitionDelay: `${i * 120}ms`,
                }}
              >

                {/* ICON */}
                <div
                  className={`w-10 h-10 flex items-center justify-center rounded-lg mb-3 transition-all duration-300
                  
                  bg-blue-100 text-blue-600
                  group-hover:bg-blue-600 group-hover:text-white
                  `}
                >
                  {skill.icon}
                </div>

                {/* TITLE */}
                <h3 className="text-sm font-semibold text-slate-800">
                  {skill.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                  {skill.desc}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}