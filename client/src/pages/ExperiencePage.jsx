import PageHeader from "@/components/layout/PageHeader";
import Experience from "@/components/sections/Experience";

export default function ExperiencePage({ lang }) {
  const L = lang === "fr"
    ? { label: "Expérience", title: "Une expérience au croisement du développement, du conseil et de l’impact.", desc: "Une trajectoire professionnelle qui relie accompagnement entrepreneurial, autonomisation des jeunes, inclusion économique et innovation sociale." }
    : { label: "Experience", title: "Experience across development, consulting, and impact.", desc: "A professional path connecting entrepreneurial support, youth empowerment, economic inclusion, and social innovation." };
  return <><PageHeader label={L.label} title={L.title} description={L.desc} /><Experience lang={lang} showHeader={false} /></>;
}
