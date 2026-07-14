import Experience from "@/components/sections/Experience";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import About from "@/components/sections/About";
import Education from "@/components/sections/Education";
import Skills from "@/components/sections/Skills";
import Achievements from "@/components/sections/Achievements";
import Projects from "@/components/sections/Projects";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import { useState } from "react";

export default function Home() {
  const [lang, setLang] = useState(() => localStorage.getItem("lang") || "en");

  return (
    <div className="min-h-screen bg-white text-slate-950">
      <Navbar lang={lang} setLang={setLang} />
      <Hero lang={lang} />
      <About lang={lang} />
      <Education lang={lang} />
      <Experience lang={lang} />
      <Skills lang={lang} />
      <Achievements lang={lang} />
      <Projects lang={lang} />
      <Testimonials lang={lang} />
      <Contact lang={lang} />
      <Footer lang={lang} />
    </div>
  );
}
