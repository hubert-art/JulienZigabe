import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Handshake,
  Lightbulb,
  Presentation,
  Users,
} from "lucide-react";
import { createElement } from "react";

const organizations = [
  "International Labour Organization",
  "The Innovation Village",
  "War Child",
  "UNICEF",
  "StartHub Africa Consulting",
  "KOICA",
  "GOAL Global",
  "UBUCHANGE",
];

export default function Home({ lang }) {
  const L = lang === "fr"
    ? {
        eyebrow: "Speaker · Consultant · Investor · Builder",
        question: "Qui suis-je ?",
        title: "Julien Zigabe.",
        intro:
          "Je vous souhaite la bienvenue. J’accompagne les entrepreneurs, organisations et leaders émergents à transformer leurs idées en possibilités concrètes, avec clarté, méthode et engagement.",
        contact: "Échanger avec Julien",
        action: "L’action en images",
        actionTitle: "Des espaces où les idées deviennent mouvement.",
        actionItems: [
          ["01", "Former avec méthode", "Des sessions pratiques qui donnent aux participants les repères nécessaires pour avancer avec confiance.", "/1.JPG", "Atelier de formation animé par Julien"],
          ["02", "Faire émerger les solutions", "Une facilitation participative pour clarifier les besoins, aligner les équipes et structurer les prochaines étapes.", "/trandf.JPG", "Atelier collaboratif"],
          ["03", "Porter les conversations utiles", "Des interventions qui relient les parcours individuels aux enjeux de leadership, d’entreprise et d’impact.", "/COG_1710.JPG", "Julien lors d’une conférence"],
        ],
        services: "Domaines d’intervention",
        servicesTitle: "Des services conçus pour déclencher une progression concrète.",
        reasons: "Pourquoi travailler avec Julien",
        reasonTitle: "Une approche claire, humaine et orientée vers l’action.",
        trusted: "Ils lui ont fait confiance",
        photoAlt: "Julien Zigabe intervenant lors d’un panel",
        bannerTitle: "Construire les personnes. Faire grandir les entreprises. Catalyser le capital.",
        bannerText: "Disponible pour les missions de conseil, les formations, les conversations stratégiques et les partenariats à impact.",
        highlights: ["Conseil", "Formation", "Capital"],
      }
    : {
        eyebrow: "Speaker · Consultant · Investor · Builder",
        question: "Who am I?",
        title: "Julien Zigabe.",
        intro:
          "Welcome. I support entrepreneurs, organizations, and emerging leaders in turning their ideas into concrete opportunities with clarity, practical methods, and commitment.",
        contact: "Connect with Julien",
        action: "Action, in focus",
        actionTitle: "Spaces where ideas become momentum.",
        actionItems: [
          ["01", "Training with method", "Practical sessions that give participants the reference points they need to move forward with confidence.", "/1.JPG", "Julien facilitating a training"],
          ["02", "Bringing solutions forward", "Participatory facilitation to clarify needs, align teams, and structure next steps.", "/trandf.JPG", "Collaborative workshop"],
          ["03", "Leading useful conversations", "Contributions that connect individual journeys with leadership, enterprise, and impact.", "/COG_1710.JPG", "Julien at a conference"],
        ],
        services: "Areas of service",
        servicesTitle: "Services designed to unlock practical progress.",
        reasons: "Why work with Julien",
        reasonTitle: "A clear, human, action-oriented approach.",
        trusted: "Trusted by",
        photoAlt: "Julien Zigabe speaking on a panel",
        bannerTitle: "Building people. Growing businesses. Catalyzing capital.",
        bannerText: "Available for consulting engagements, training, strategic conversations, and impact partnerships.",
        highlights: ["Consulting", "Training", "Capital"],
      };

  const services = lang === "fr"
    ? [
        ["Développement d’entreprise", "Stratégie, positionnement et accompagnement de croissance pour les entrepreneurs.", BriefcaseBusiness],
        ["Formation & facilitation", "Des apprentissages pratiques qui transforment les idées en décisions et en action.", Presentation],
        ["Leadership & développement personnel", "Accompagner les leaders émergents à reconnaître leur valeur et à saisir des opportunités.", Users],
        ["Innovation & impact", "Relier les besoins des communautés à des initiatives durables et inclusives.", Lightbulb],
      ]
    : [
        ["Business development", "Strategy, positioning, and growth support for entrepreneurs.", BriefcaseBusiness],
        ["Training & facilitation", "Practical learning that turns ideas into decisions and action.", Presentation],
        ["Leadership & personal development", "Supporting emerging leaders to recognize their value and pursue opportunities.", Users],
        ["Innovation & impact", "Connecting community needs with sustainable, inclusive initiatives.", Lightbulb],
      ];

  const reasons = lang === "fr"
    ? [
        "Une expérience concrète avec des entrepreneurs, jeunes et communautés.",
        "Une facilitation qui rend les sujets complexes accessibles et applicables.",
        "Une approche qui relie vision, stratégie et résultats utiles.",
      ]
    : [
        "Hands-on experience with entrepreneurs, youth, and communities.",
        "Facilitation that makes complex topics accessible and applicable.",
        "An approach that connects vision, strategy, and useful outcomes.",
      ];

  return (
    <>
      <section className="bg-[#f4f7fb] px-5 py-14 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.12fr_0.88fr] lg:gap-20">
          <div className="max-w-2xl animate-rise">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#4a6fa5]">{L.question}</p>
            <h1 className="mt-4 text-4xl font-extrabold leading-[1.05] tracking-tight text-[#191970] sm:text-5xl">{L.title}</h1>
            <div className="mt-6 h-1 w-14 bg-[#4682b4]" />
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">{L.intro}</p>
            <div className="mt-7 flex flex-wrap gap-2">
              {L.highlights.map((item) => <span key={item} className="bg-white px-3 py-1.5 text-xs font-bold text-[#1e3a8a] shadow-sm">{item}</span>)}
            </div>
            <a href="/contact" className="mt-8 inline-flex items-center gap-2 bg-[#1e3a8a] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-[#1e3a8a]/15 transition hover:-translate-y-0.5 hover:bg-[#4682b4]">
              {L.contact}<ArrowRight size={18} />
            </a>
          </div>
          <figure className="relative mx-auto w-full max-w-xl animate-rise">
            <img src="/julien-eyep-panel.jpg" alt={L.photoAlt} className="aspect-[4/3] w-full object-cover" />
            <figcaption className="mt-3 border-l-2 border-[#4682b4] pl-3 text-xs font-bold uppercase tracking-[0.14em] text-[#1e3a8a]">
              {L.eyebrow}
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="bg-white px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="section-kicker">{L.action}</p>
          <h2 className="section-title mt-4 max-w-3xl">{L.actionTitle}</h2>
          <div className="mt-12 grid gap-x-8 gap-y-12 md:grid-cols-3">
            {L.actionItems.map(([number, title, text, image, alt]) => (
              <article key={number} className="border-t border-slate-200 pt-5">
                <img src={image} alt={alt} className="aspect-[4/3] w-full object-cover" />
                <div className="mt-5 flex items-start gap-4">
                  <span className="text-xs font-extrabold tracking-[0.14em] text-[#4682b4]">{number}</span>
                  <div><h3 className="text-lg font-bold text-[#191970]">{title}</h3><p className="mt-2 text-sm leading-7 text-slate-600">{text}</p></div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="section-kicker">{L.services}</p><h2 className="section-title mt-4 max-w-3xl">{L.servicesTitle}</h2>
          <div className="mt-12 grid gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
            {services.map(([title, text, ServiceIcon]) => <article key={title} className="border-t border-slate-300 pt-5"><span className="flex size-11 items-center justify-center bg-blue-50 text-blue-600">{createElement(ServiceIcon, { size: 20 })}</span><h3 className="mt-5 text-lg font-bold text-slate-950">{title}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <img src="/4A7A0057.jpg" alt="Julien speaking" className="aspect-[4/3] w-full object-cover" />
          <div><p className="section-kicker">{L.reasons}</p><h2 className="section-title mt-4">{L.reasonTitle}</h2><div className="mt-8">{reasons.map((reason) => <p key={reason} className="flex gap-3 border-t border-slate-200 py-5 text-base leading-7 text-slate-700"><BadgeCheck className="mt-1 shrink-0 text-orange-500" size={20} />{reason}</p>)}</div></div>
        </div>
      </section>

      <section className="overflow-hidden border-y border-slate-200 bg-white py-6"><p className="mx-auto mb-5 max-w-7xl px-5 text-center text-xs font-bold uppercase tracking-[0.18em] text-slate-400">{L.trusted}</p><div className="partner-marquee"><div className="partner-track">{[...organizations, ...organizations].map((organization, index) => <span key={`${organization}-${index}`} className="inline-flex items-center gap-3 whitespace-nowrap text-sm font-bold text-slate-700"><Handshake size={17} className="text-orange-500" />{organization}</span>)}</div></div></section>

      <section className="relative overflow-hidden bg-slate-950 px-5 py-28 text-white lg:px-8"><img src="/COG_1089.JPG" alt="Professional collaboration session" className="absolute inset-0 size-full object-cover opacity-40" /><div className="absolute inset-0 bg-slate-950/55" /><div className="relative mx-auto max-w-3xl text-center"><p className="section-kicker bg-white/10 text-blue-100">Julien Zigabe</p><h2 className="mt-5 text-3xl font-extrabold leading-tight sm:text-4xl">{L.bannerTitle}</h2><p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-200">{L.bannerText}</p><a href="/contact" className="mt-9 inline-flex items-center gap-2 bg-white px-6 py-3.5 text-sm font-bold text-slate-950 transition hover:bg-[#4682b4] hover:text-white">{L.contact}<ArrowRight size={18} /></a></div></section>
    </>
  );
}
