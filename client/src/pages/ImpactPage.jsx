import PageHeader from "@/components/layout/PageHeader";
import Projects from "@/components/sections/Projects";
import Achievements from "@/components/sections/Achievements";

export default function ImpactPage({ lang }) {
  const L = lang === "fr"
    ? { label: "Impact & initiatives", title: "Créer des opportunités grâce au leadership et à l’innovation inclusive.", desc: "Des initiatives qui mettent le développement des jeunes, l’entrepreneuriat et l’inclusion des talents réfugiés au centre." }
    : { label: "Impact & Initiatives", title: "Creating opportunities through leadership and inclusive innovation.", desc: "Initiatives that place youth development, entrepreneurship, and refugee talent inclusion at the center." };
  return <><PageHeader label={L.label} title={L.title} description={L.desc} /><Projects lang={lang} showHeader={false} /><Achievements lang={lang} /></>;
}
