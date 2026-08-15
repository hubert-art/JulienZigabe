import PageHeader from "@/components/layout/PageHeader";
import Contact from "@/components/sections/Contact";

export default function ContactPage({ lang }) {
  const L = lang === "fr"
    ? { label: "Contact", title: "Parlons d’une collaboration utile.", desc: "Pour une mission de conseil, un programme à impact ou un échange professionnel, prenons contact." }
    : { label: "Contact", title: "Let’s discuss a useful collaboration.", desc: "For a consulting assignment, an impact program, or a professional conversation, let’s connect." };
  return <><PageHeader label={L.label} title={L.title} description={L.desc} /><Contact lang={lang} /></>;
}
