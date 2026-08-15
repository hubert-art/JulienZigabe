import PageHeader from "@/components/layout/PageHeader";
import Skills from "@/components/sections/Skills";

export default function ExpertisePage({ lang }) {
  const L = lang === "fr"
    ? { label: "Expertise", title: "Là où l’expérience rencontre l’action pratique.", desc: "Des domaines de contribution construits à travers le conseil, la formation, l’entrepreneuriat et le développement inclusif." }
    : { label: "Expertise", title: "Where experience meets practical action.", desc: "Areas of contribution built through consulting, training, entrepreneurship, and inclusive development." };
  return <><PageHeader label={L.label} title={L.title} description={L.desc} /><Skills lang={lang} /></>;
}
