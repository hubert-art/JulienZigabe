import { Award, BadgeCheck, Globe2, Medal, Star, Trophy } from "lucide-react";
import { createElement } from "react";

export default function Achievements({ lang }) {
  const L = {
    fr: {
      label: "Reconnaissances",
      title: "Réalisations & Certifications",
      subtitle:
        "Distinctions, programmes et certificats qui renforcent un profil orienté leadership, entrepreneuriat et impact social.",
      achievements: [
        ["RIHAM GO EXTREME Challenge", "Lauréat d'un challenge international valorisant l'initiative et la performance.", Trophy],
        ["YALI East Africa Regional Fellow", "Programme de leadership régional soutenu par les États-Unis.", Globe2],
        ["SAVVY Fellowship Program", "Programme mondial pour entrepreneurs à impact.", Star],
        ["Young African Leaders Awards", "Nomination parmi les jeunes leaders africains émergents.", Medal],
        ["SINA Global Acceleration", "Programme d'accélération pour solutions d'innovation sociale.", Award],
        ["Global Startup Ecosystem", "Participation à un réseau international de startups et d'innovation.", Globe2],
      ],
      certifications: [
        "SIYB - International Labour Organization",
        "Leadership & Entrepreneurship",
        "Non-Violent Communication",
        "Life Coaching",
      ],
    },
    en: {
      label: "Recognition",
      title: "Achievements & Certifications",
      subtitle:
        "Awards, programs, and certifications that strengthen a leadership, entrepreneurship, and social impact profile.",
      achievements: [
        ["RIHAM GO EXTREME Challenge", "Winner in an international challenge recognizing initiative and performance.", Trophy],
        ["YALI East Africa Regional Fellow", "Regional leadership program supported by the United States.", Globe2],
        ["SAVVY Fellowship Program", "Global fellowship for impact-driven entrepreneurs.", Star],
        ["Young African Leaders Awards", "Nominee among emerging African leaders.", Medal],
        ["SINA Global Acceleration", "Acceleration program for social innovation solutions.", Award],
        ["Global Startup Ecosystem", "Participation in an international startup and innovation network.", Globe2],
      ],
      certifications: [
        "SIYB - International Labour Organization",
        "Leadership & Entrepreneurship",
        "Non-Violent Communication",
        "Life Coaching",
      ],
    },
  }[lang];

  return (
    <section id="achievements" className="bg-slate-950 px-5 py-24 text-white lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-200">
              <Award size={16} />
              {L.label}
            </p>
            <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">
              {L.title}
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-300">{L.subtitle}</p>

            <div className="mt-8 rounded-lg border border-white/10 bg-white/5 p-6">
              <h3 className="flex items-center gap-2 font-bold">
                <BadgeCheck size={19} className="text-orange-400" />
                {lang === "fr" ? "Certifications clés" : "Key Certifications"}
              </h3>
              <div className="mt-5 grid gap-3">
                {L.certifications.map((item) => (
                  <p key={item} className="rounded-lg bg-white/10 px-4 py-3 text-sm text-slate-100">
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {L.achievements.map(([title, desc, Icon], index) => (
              <article
                key={title}
                className="rounded-lg border border-white/10 bg-white/[0.06] p-5 transition hover:-translate-y-1 hover:border-orange-400/50 hover:bg-white/[0.09]"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="flex size-11 items-center justify-center rounded-lg bg-white text-orange-500">
                  {createElement(Icon, { size: 20 })}
                </div>
                <h3 className="mt-5 font-bold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
