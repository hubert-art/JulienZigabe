import { Quote, Star } from "lucide-react";

export default function Testimonials({ lang }) {
  const L = {
    fr: {
      label: "Crédibilité",
      title: "Témoignages",
      subtitle:
        "Des retours qui reflètent un profil fiable, collaboratif et capable de créer de la valeur dans des contextes exigeants.",
      testimonials: [
        {
          quote:
            "Julien apporte une énergie rare aux programmes de jeunesse: il écoute, structure les idées et aide les participants à passer à l'action.",
          name: "Program Coordinator",
          role: "Youth Development Program",
        },
        {
          quote:
            "Son approche de facilitation est claire, professionnelle et adaptée aux réalités des entrepreneurs et communautés qu'il accompagne.",
          name: "Training Partner",
          role: "Social Enterprise Initiative",
        },
        {
          quote:
            "Julien combine leadership, humilité et sens du service. Il sait transformer une mission en contribution mesurable.",
          name: "Community Lead",
          role: "Impact & Inclusion Project",
        },
      ],
    },
    en: {
      label: "Credibility",
      title: "Testimonials",
      subtitle:
        "Feedback reflecting a reliable, collaborative profile with the ability to create value in demanding contexts.",
      testimonials: [
        {
          quote:
            "Julien brings rare energy to youth programs: he listens, structures ideas, and helps participants move into action.",
          name: "Program Coordinator",
          role: "Youth Development Program",
        },
        {
          quote:
            "His facilitation style is clear, professional, and grounded in the realities of the entrepreneurs and communities he supports.",
          name: "Training Partner",
          role: "Social Enterprise Initiative",
        },
        {
          quote:
            "Julien combines leadership, humility, and service. He knows how to turn an assignment into measurable contribution.",
          name: "Community Lead",
          role: "Impact & Inclusion Project",
        },
      ],
    },
  }[lang];

  return (
    <section id="testimonials" className="bg-slate-50 px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-kicker justify-center">
            <Quote size={16} />
            {L.label}
          </p>
          <h2 className="section-title mt-4">{L.title}</h2>
          <p className="mt-4 text-base leading-7 text-slate-600">{L.subtitle}</p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {L.testimonials.map((item) => (
            <article key={item.quote} className="premium-card">
              <div className="flex gap-1 text-orange-400">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="mt-6 text-base leading-8 text-slate-700">"{item.quote}"</p>
              <div className="mt-8 border-t border-slate-100 pt-5">
                <p className="font-bold text-slate-950">{item.name}</p>
                <p className="mt-1 text-sm text-slate-500">{item.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
