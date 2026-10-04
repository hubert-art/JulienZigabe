import { ArrowRight, BriefcaseBusiness, GraduationCap, Mic2 } from "lucide-react";
import { createElement } from "react";

export default function ExperiencePage({ lang }) {
  const L = lang === "fr"
    ? {
        label: "Mon travail",
        title: "Trois expertises au service d’une progression concrète.",
        intro: "J’accompagne les entrepreneurs, les organisations et les leaders à clarifier leurs idées, renforcer leurs capacités et partager des messages qui font avancer.",
        cta: "Parlons de votre projet",
        closingTitle: "Une idée, un défi ou une scène à préparer ?",
        closingText: "Échangeons autour de votre contexte et construisons une intervention utile, claire et adaptée à vos objectifs.",
        services: [
          {
            number: "01",
            title: "Conseil en entreprise",
            description: "Un accompagnement stratégique pour clarifier les modèles économiques, structurer les priorités et transformer les idées en plans d’action réalistes.",
            details: ["Stratégie et positionnement", "Développement d’activité", "Ateliers de résolution de problèmes"],
            icon: BriefcaseBusiness,
            images: [
              ["/1.JPG", "Atelier pratique sur la proposition de valeur"],
              ["/4.JPG", "Accompagnement d’un groupe sur son modèle économique"],
              ["/5.JPG", "Session collaborative de structuration d’une idée d’entreprise"],
            ],
          },
          {
            number: "02",
            title: "Développement personnel et professionnel",
            description: "Des formations, du mentorat et des espaces de facilitation qui renforcent la confiance, le leadership et les compétences directement applicables.",
            details: ["Leadership et confiance", "Mentorat professionnel", "Formation et facilitation"],
            icon: GraduationCap,
            images: [
              ["/trandf.JPG", "Facilitation d’un atelier participatif"],
              ["/1777012665101.jpg", "Accompagnement d’un groupe de jeunes talents"],
              ["/MG1.jpeg", "Transmission de compétences lors d’une session de formation"],
            ],
          },
          {
            number: "03",
            title: "Prise de parole en public",
            description: "Des conférences, panels et conversations interactives qui rendent les idées accessibles, créent du lien et invitent le public à passer à l’action.",
            details: ["Conférences et panels", "Conversations thématiques", "Animation et modération"],
            icon: Mic2,
            images: [
              ["/conf.JPG", "Julien partageant une réflexion lors d’un panel"],
              ["/4A7A0057.jpg", "Prise de parole au micro devant un public"],
              ["/3.jpg", "Intervention devant une audience communautaire"],
            ],
          },
        ],
      }
    : {
        label: "My Work",
        title: "Three areas of expertise focused on practical progress.",
        intro: "I help entrepreneurs, organizations, and leaders clarify ideas, strengthen capabilities, and communicate messages that move people forward.",
        cta: "Discuss a project",
        closingTitle: "An idea, a challenge, or a stage to prepare for?",
        closingText: "Let’s discuss your context and shape a useful, clear engagement around your goals.",
        services: [
          {
            number: "01",
            title: "Business Consulting",
            description: "Strategic support to clarify business models, set priorities, and turn ideas into realistic plans for growth and execution.",
            details: ["Strategy and positioning", "Business development", "Problem-solving workshops"],
            icon: BriefcaseBusiness,
            images: [
              ["/1.JPG", "Practical value proposition workshop"],
              ["/4.JPG", "Guiding a group through business model development"],
              ["/5.JPG", "Collaborative session to structure a business idea"],
            ],
          },
          {
            number: "02",
            title: "Personal & Professional Development",
            description: "Training, mentorship, and facilitated learning that build confidence, leadership, and skills people can apply immediately.",
            details: ["Leadership and confidence", "Professional mentorship", "Training and facilitation"],
            icon: GraduationCap,
            images: [
              ["/trandf.JPG", "Facilitating a participatory workshop"],
              ["/1777012665101.jpg", "Supporting a group of emerging talents"],
              ["/MG1.jpeg", "Sharing practical skills during a training session"],
            ],
          },
          {
            number: "03",
            title: "Public Speaking",
            description: "Keynotes, panels, and interactive conversations that make ideas accessible, create connection, and invite audiences to act.",
            details: ["Keynotes and panels", "Thematic conversations", "Hosting and moderation"],
            icon: Mic2,
            images: [
              ["/conf.JPG", "Julien sharing insight during a panel conversation"],
              ["/4A7A0057.jpg", "Speaking to an audience with clarity and purpose"],
              ["/3.jpg", "Engaging a community audience"],
            ],
          },
        ],
      };

  return (
    <>
      <section className="bg-slate-50 px-5 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="section-kicker">{L.label}</p>
          <div className="mt-4 grid gap-8 lg:grid-cols-[1fr_0.65fr] lg:items-end">
            <div>
              <h1 className="section-title max-w-3xl">{L.title}</h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">{L.intro}</p>
            </div>
            <a href="/contact" className="inline-flex w-fit items-center gap-2 bg-[#1e3a8a] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#4682b4]">
              {L.cta}<ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          {L.services.map((service, index) => (
            <article key={service.number} className={`grid gap-10 border-t border-slate-200 py-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16 ${index === 0 ? "pt-6" : ""}`}>
              <div className="lg:sticky lg:top-28 lg:self-start">
                <div className="flex items-center gap-4">
                  <span className="flex size-12 items-center justify-center bg-blue-50 text-blue-700">{createElement(service.icon, { size: 22 })}</span>
                  <span className="text-xs font-extrabold tracking-[0.16em] text-[#4682b4]">{service.number}</span>
                </div>
                <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-[#191970]">{service.title}</h2>
                <p className="mt-5 text-base leading-8 text-slate-600">{service.description}</p>
                <ul className="mt-7 grid gap-3">
                  {service.details.map((detail) => <li key={detail} className="border-l-2 border-orange-400 pl-4 text-sm font-semibold text-slate-700">{detail}</li>)}
                </ul>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {service.images.map(([src, alt], imageIndex) => (
                  <figure key={src} className={imageIndex === 0 ? "sm:col-span-2" : ""}>
                    <img src={src} alt={alt} loading={index === 0 && imageIndex === 0 ? "eager" : "lazy"} decoding="async" className={`w-full object-cover ${imageIndex === 0 ? "aspect-[16/9]" : "aspect-[4/3]"}`} />
                    <figcaption className="mt-2 text-xs leading-5 text-slate-500">{alt}</figcaption>
                  </figure>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-950 px-5 py-20 text-white lg:px-8">
        <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div><h2 className="text-3xl font-extrabold tracking-tight">{L.closingTitle}</h2><p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">{L.closingText}</p></div>
          <a href="/contact" className="inline-flex shrink-0 items-center gap-2 bg-white px-6 py-3.5 text-sm font-bold text-slate-950 transition hover:bg-orange-400">{L.cta}<ArrowRight size={18} /></a>
        </div>
      </section>
    </>
  );
}
