import { useEffect, useRef, useState } from "react";
import {
  User,
  HeartHandshake,
  Award,
  GraduationCap,
  Languages,
  MapPin,
  Mail,
  Link,
  Sparkles,
} from "lucide-react";

export default function About({ lang }) {
  const t = {
    fr: {
      title: "À propos",
      intro1:
        "Étudiant en relations internationales à USIU-Africa, passionné par le développement communautaire, le leadership et l’innovation sociale. Mon objectif est de contribuer à des solutions durables ayant un impact global.",
      intro2:
        "Expérience avec plusieurs organisations internationales, ONG et programmes d’innovation en Afrique.",
      vision:
        "Profil construit autour de l’impact social & du développement international",

      careerTitle: "Objectif de carrière",
      career:
        "Je suis fortement motivé à poursuivre des opportunités exigeantes qui me permettent d’exploiter mes compétences organisationnelles et de contribuer au changement social.",

      contact: "Contact",
      interests: "Intérêts",
      profile: "Profil personnel",
      education: "Éducation",
      certificates: "Certificats",
      languages: "Langues",

      contactInfo: {
        birth: "Date de naissance : 11 avril 2001",
        nationality: "Nationalité : Congolaise",
        status: "Statut marital : Célibataire",
        hobbies: "Centres d’intérêt : écriture, recherche, création vidéo",
      },

      interestsText:
        "Développement des affaires • Développement communautaire • Innovation sociale • Entrepreneuriat",

      educationText:
        "United States International University Africa; Licence en relations internationales (en cours)",

      certificatesText:
        "SIYB ILO • Leadership & entrepreneuriat • Communication non violente • Coaching de vie",

      languagesText:
        "Anglais • Français • Swahili • Luganda • Kinyarwanda",
    },

    en: {
      title: "About",
      intro1:
        "International Relations student at USIU-Africa, passionate about community development, leadership, and social innovation. My goal is to contribute to sustainable solutions with global impact.",
      intro2:
        "Experienced working with international organizations, NGOs, and innovation programs across Africa.",
      vision:
        "Profile built around social impact & international development",

      careerTitle: "Career Objective",
      career:
        "I am highly motivated to pursue challenging opportunities that allow me to leverage my organizational skills and contribute to societal change.",

      contact: "Contact",
      interests: "Interests",
      profile: "Personal Profile",
      education: "Education",
      certificates: "Certificates",
      languages: "Languages",

      contactInfo: {
        birth: "Date of birth: 11 April 2001",
        nationality: "Nationality: Congolese",
        status: "Marital status: Single",
        hobbies: "Interests: writing, research, video creation",
      },

      interestsText:
        "Business Development • Community Development • Social Innovation • Entrepreneurship",

      educationText:
        "United States International University Africa; Bachelor of International Relations (In Progress)",

      certificatesText:
        "SIYB ILO • Leadership & Entrepreneurship • Non-Violent Communication • Life Coaching",

      languagesText:
        "English • French • Swahili • Luganda • Kinyarwanda",
    },
  };

  const L = t[lang];

  const itemsRef = useRef([]);
  const [visible, setVisible] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        setVisible((prev) => {
          let updated = [...prev];

          entries.forEach((entry) => {
            const index = itemsRef.current.indexOf(entry.target);
            if (entry.isIntersecting) {
              if (!updated.includes(index)) updated.push(index);
            } else {
              updated = updated.filter((i) => i !== index);
            }
          });

          return updated;
        });
      },
      { threshold: 0.2 }
    );

    itemsRef.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const block = (index) => {
    const isVisible = visible.includes(index);
    const fromLeft = index % 2 === 0;

    return `
      transition-all duration-700 ease-out
      ${isVisible ? "opacity-100 translate-x-0" : "opacity-0"}
      ${!isVisible && (fromLeft ? "-translate-x-12" : "translate-x-12")}
    `;
  };

  return (
    <section id="about" className="py-20 px-6 bg-white">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-start">

        {/* LEFT */}
        <div ref={(el) => (itemsRef.current[0] = el)} className={block(0)}>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            {L.title}
          </h2>

          <p className="mt-6 text-slate-600 leading-relaxed">
            {L.intro1}
          </p>

          <p className="mt-4 text-slate-600 leading-relaxed">
            {L.intro2}
          </p>

          <div className="mt-10 flex items-center gap-3 text-slate-500 text-sm">
            <Sparkles size={16} className="text-blue-500" />
            <span>{L.vision}</span>
          </div>
        </div>

        {/* RIGHT */}
        <div className="space-y-6">

          {/* CAREER */}
          <div ref={(el) => (itemsRef.current[1] = el)} className={`p-6 rounded-2xl bg-slate-50 ${block(1)}`}>
            <div className="flex items-center gap-3 mb-3 text-blue-600">
              <User size={18} />
              <h3 className="font-semibold text-slate-900">{L.careerTitle}</h3>
            </div>
            <p className="text-sm text-slate-600">{L.career}</p>
          </div>

          {/* CONTACT */}
          <div ref={(el) => (itemsRef.current[2] = el)} className={`p-6 rounded-2xl bg-white ${block(2)}`}>
            <div className="flex items-center gap-3 mb-3 text-slate-700">
              <Mail size={18} className="text-orange-500" />
              <h3 className="font-semibold text-slate-900">{L.contact}</h3>
            </div>

            <div className="text-sm text-slate-600 space-y-1">
              <p>julienzigabe10@gmail.com</p>
              <p>+254 119 526 770</p>
              <p>+256 760 325 737</p>

              <p className="flex items-center gap-2">
                <Link size={14} className="text-blue-500" />
                linkedin.com/in/julienz24
              </p>

              <p className="flex items-center gap-2">
                <MapPin size={14} className="text-green-500" />
                Nairobi, Kenya
              </p>
            </div>
          </div>

          {/* INTERESTS */}
          <div ref={(el) => (itemsRef.current[3] = el)} className={`p-6 rounded-2xl bg-slate-50 ${block(3)}`}>
            <div className="flex items-center gap-3 mb-3 text-green-600">
              <HeartHandshake size={18} />
              <h3 className="font-semibold text-slate-900">{L.interests}</h3>
            </div>
            <p className="text-sm text-slate-600">{L.interestsText}</p>
          </div>

          {/* PROFILE */}
          <div ref={(el) => (itemsRef.current[4] = el)} className={`p-6 rounded-2xl bg-white ${block(4)}`}>
            <div className="flex items-center gap-3 mb-3 text-indigo-600">
              <User size={18} />
              <h3 className="font-semibold text-slate-900">{L.profile}</h3>
            </div>

            <div className="text-sm text-slate-600 space-y-1">
              <p>{L.contactInfo.birth}</p>
              <p>{L.contactInfo.nationality}</p>
              <p>{L.contactInfo.status}</p>
              <p>{L.contactInfo.hobbies}</p>
            </div>
          </div>

          {/* EDUCATION */}
          <div ref={(el) => (itemsRef.current[5] = el)} className={`p-6 rounded-2xl bg-slate-50 ${block(5)}`}>
            <div className="flex items-center gap-3 mb-3 text-blue-600">
              <GraduationCap size={18} />
              <h3 className="font-semibold text-slate-900">{L.education}</h3>
            </div>
            <p className="text-sm text-slate-600">{L.educationText}</p>
          </div>

          {/* CERTIFICATES */}
          <div ref={(el) => (itemsRef.current[6] = el)} className={`p-6 rounded-2xl bg-white ${block(6)}`}>
            <div className="flex items-center gap-3 mb-3 text-orange-500">
              <Award size={18} />
              <h3 className="font-semibold text-slate-900">{L.certificates}</h3>
            </div>
            <p className="text-sm text-slate-600">{L.certificatesText}</p>
          </div>

          {/* LANGUAGES */}
          <div ref={(el) => (itemsRef.current[7] = el)} className={`p-6 rounded-2xl bg-slate-50 ${block(7)}`}>
            <div className="flex items-center gap-3 mb-3 text-green-600">
              <Languages size={18} />
              <h3 className="font-semibold text-slate-900">{L.languages}</h3>
            </div>
            <p className="text-sm text-slate-600">{L.languagesText}</p>
          </div>

        </div>
      </div>
    </section>
  );
}