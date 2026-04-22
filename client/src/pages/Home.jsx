import Experience from "@/components/sections/Experience";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Achievements from "@/components/sections/Achievements";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import { useState } from "react";

export default function Home() {
  const [lang, setLang] = useState("en");

  return (
    <div className="min-h-screen">
      <Navbar lang={lang} setLang={setLang} />
      <Hero lang={lang} />
      <About lang={lang} />
      <Experience lang={lang} />
      <Skills lang={lang} />
      <Achievements lang={lang} />
      <Contact lang={lang} />
      <Footer lang={lang} />
    </div>
  );
}