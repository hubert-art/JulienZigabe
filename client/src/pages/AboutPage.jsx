import { ArrowRight } from "lucide-react";

export default function AboutPage({ lang }) {
  const L = lang === "fr" ? {
    label: "À propos", title: "Un travail qui rend les personnes, les idées et les entreprises plus solides.",
    paragraphs: ["Julien Zigabe est speaker, consultant en développement d’entreprise, investisseur et builder. Son travail se situe à l’intersection des personnes, des idées et du capital.", "Il accompagne les entrepreneurs, les professionnels, les leaders émergents et les organisations à renforcer leurs capacités, améliorer leur performance et transformer leurs idées en opportunités de croissance durables.", "À travers ses interventions, Julien aide chacun à reconnaître sa valeur, clarifier son positionnement, commercialiser ses compétences et convertir son potentiel en action."],
    action: "Échanger avec Julien", imageTitle: "Qui est Julien ?"
  } : {
    label: "About", title: "Work that makes people, ideas, and businesses stronger.",
    paragraphs: ["Julien Zigabe is a speaker, business development consultant, investor, and builder. His work sits at the intersection of people, ideas, and capital.", "He supports entrepreneurs, professionals, emerging leaders, and organizations to strengthen their capabilities, improve performance, and turn ideas into sustainable growth opportunities.", "Through his work, Julien helps people recognize their value, clarify their positioning, commercialize their skills, and translate potential into action."],
    action: "Connect with Julien", imageTitle: "Who is Julien?"
  };
  return <section className="bg-white px-5 py-16 lg:px-8 lg:py-24"><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center"><div><h1 className="mb-5 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">{L.imageTitle}</h1><img src="/Prop.jpeg" alt="Julien Zigabe" fetchPriority="high" className="aspect-[4/5] w-full object-cover object-top" /></div><div className="max-w-xl"><p className="section-kicker">{L.label}</p><h2 className="section-title mt-4">{L.title}</h2><div className="mt-8 space-y-5 text-base leading-8 text-slate-600">{L.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div><a href="/contact" className="mt-9 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-blue-700">{L.action}<ArrowRight size={18} /></a></div></div></section>;
}
