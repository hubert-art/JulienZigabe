import { ArrowRight } from "lucide-react";

const partners = ["UNICEF", "War Child", "Save the Children", "USAID", "KOICA", "INNOPORT", "Jesuit Refugee Service", "International Labour Organization", "The Innovation Village", "StartHub Africa Consulting"];

export default function ExperiencePage({ lang }) {
  const L = lang === "fr"
    ? {
        label: "Parcours professionnel",
        title: "Des expériences qui relient les idées, les personnes et l’action.",
        intro: "Un parcours construit au service de l’entrepreneuriat, du développement économique inclusif et de l’innovation sociale.",
        see: "Échanger sur une mission",
        journey: "Repères de parcours",
        trusted: "Collaborations et organisations",
        items: [
          ["Juin 2018", "Co-fondateur & Directeur", "Refugee Global Talent", "Lancement d’une initiative qui valorise les talents réfugiés et leur potentiel de leadership.", "/1777012665101.jpg", "Initiative collective avec des jeunes"],
          ["Jan. 2019 — Mars 2021", "Mentor, formateur & coach", "Unleashed Potentials in Motion", "Accompagnement de porteurs d’idées et d’entrepreneurs dans la création et le développement de leurs activités.", "/trandf.JPG", "Atelier participatif"],
          ["Depuis déc. 2020", "Fondateur & Managing Director", "Anzisha Impact Hub", "Direction d’une plateforme dédiée au leadership des jeunes, à l’innovation sociale et à l’entrepreneuriat.", "/MG1.jpeg", "Julien en session de formation"],
          ["2022", "Consultant en éducation financière", "International Labour Organization · Opportunity Bank Uganda", "Facilitation de contenus de finance inclusive et de compétences économiques pour les communautés.", "/1.JPG", "Atelier d’éducation financière"],
          ["2023", "Consultant, formateur & mentor", "StartHub Africa · JRS · KOICA–INNOPORT · The Innovation Village", "Missions de développement d’entreprise, de renforcement des capacités et d’accompagnement entrepreneurial, notamment avec Save the Children / USAID Uthabiti.", "/3.jpg", "Julien s’adressant à une audience"],
          ["2025", "Integrated UPSHIFT Consultant", "UNICEF · War Child Alliance Uganda", "Accompagnement des jeunes dans l’idéation, la résolution de problèmes et la structuration de projets à impact.", "/_MG_0411.jpg.jpeg", "Julien facilitant une session"],
        ],
      }
    : {
        label: "Professional journey",
        title: "Experiences connecting ideas, people, and action.",
        intro: "A career built in service of entrepreneurship, inclusive economic development, and social innovation.",
        see: "Discuss an assignment",
        journey: "Career milestones",
        trusted: "Collaborations and organizations",
        items: [
          ["June 2018", "Co-founder & Director", "Refugee Global Talent", "Launched an initiative that elevates refugee talent and leadership potential.", "/1777012665101.jpg", "Collective youth initiative"],
          ["Jan. 2019 — Mar. 2021", "Mentor, trainer & coach", "Unleashed Potentials in Motion", "Supported idea holders and entrepreneurs in starting and developing their businesses.", "/trandf.JPG", "Participatory workshop"],
          ["Since Dec. 2020", "Founder & Managing Director", "Anzisha Impact Hub", "Leads a platform focused on youth leadership, social innovation, and entrepreneurship.", "/MG1.jpeg", "Julien facilitating a training"],
          ["2022", "Financial Education Consultant", "International Labour Organization · Opportunity Bank Uganda", "Facilitated inclusive finance content and economic skills for communities.", "/1.JPG", "Financial education workshop"],
          ["2023", "Consultant, trainer & mentor", "StartHub Africa · JRS · KOICA–INNOPORT · The Innovation Village", "Business development, capacity-strengthening, and entrepreneurship support assignments, including the Save the Children / USAID Uthabiti project.", "/3.jpg", "Julien speaking to an audience"],
          ["2025", "Integrated UPSHIFT Consultant", "UNICEF · War Child Alliance Uganda", "Supported youth through ideation, problem-solving, and the structuring of impact projects.", "/_MG_0411.jpg.jpeg", "Julien facilitating a session"],
        ],
      };

  return (
    <>
      <section className="bg-slate-50 px-5 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="section-kicker">{L.label}</p>
          <div className="mt-4 grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <div><h1 className="section-title max-w-3xl">{L.title}</h1><p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">{L.intro}</p></div>
            <a href="/contact" className="inline-flex w-fit items-center gap-2 bg-[#1e3a8a] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#4682b4]">{L.see}<ArrowRight size={18} /></a>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#4a6fa5]">{L.journey}</p>
          <div className="mt-7">
            {L.items.map(([date, title, organization, description, image, alt], index) => (
              <article key={`${date}-${organization}`} className="grid gap-6 border-t border-slate-200 py-10 md:grid-cols-[10rem_1fr] lg:grid-cols-[10rem_1fr_20rem] lg:gap-10">
                <p className="text-sm font-extrabold uppercase tracking-[0.1em] text-[#4682b4]">{date}</p>
                <div><h2 className="text-xl font-bold text-[#191970]">{title}</h2><p className="mt-2 text-sm font-bold text-[#1e3a8a]">{organization}</p><p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">{description}</p></div>
                <figure className="md:max-w-md lg:max-w-none"><img src={image} alt={alt} loading={index === 0 ? "eager" : "lazy"} decoding="async" className="aspect-[4/3] w-full object-cover" /><figcaption className="mt-2 text-xs text-slate-500">{index + 1 < 10 ? `0${index + 1}` : index + 1} · {date}</figcaption></figure>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden border-y border-slate-200 bg-slate-950 py-8 text-white">
        <p className="mb-6 text-center text-xs font-bold uppercase tracking-[0.18em] text-blue-200">{L.trusted}</p>
        <div className="partner-marquee"><div className="partner-track text-white">{[...partners, ...partners].map((partner, index) => <span key={`${partner}-${index}`} className="inline-flex items-center gap-3 whitespace-nowrap text-base font-bold"><span className="size-2 bg-orange-400" />{partner}</span>)}</div></div>
      </section>
    </>
  );
}
