import PageHeader from "@/components/layout/PageHeader";
import About from "@/components/sections/About";
import Education from "@/components/sections/Education";

export default function AboutPage({ lang }) {
  const L = lang === "fr"
    ? { label: "À propos", title: "Une trajectoire guidée par les personnes, les opportunités et l’impact.", desc: "Une perspective professionnelle où les relations internationales, l’entrepreneuriat et l’action communautaire se renforcent mutuellement." }
    : { label: "About", title: "A path shaped by people, opportunity, and impact.", desc: "A professional perspective where international relations, entrepreneurship, and community action reinforce one another." };
  return <><PageHeader label={L.label} title={L.title} description={L.desc} /><About lang={lang} /><Education lang={lang} /></>;
}
