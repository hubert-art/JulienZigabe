import {
  User,
  Globe,
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
    },
  };

  const L = t[lang];

  return (
    <section id="about" className="py-20 px-6 bg-white">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-start">

        {/* LEFT SIDE */}
        <div className="animate-[fadeIn_0.8s_ease-out]">

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

        {/* RIGHT SIDE */}
        <div className="space-y-6">

          {/* CAREER */}
          <div className="p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:shadow-md transition duration-300 hover:-translate-y-1">

            <div className="flex items-center gap-3 mb-3 text-blue-600">
              <User size={18} />
              <h3 className="font-semibold text-slate-900">
                {L.careerTitle}
              </h3>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              {L.career}
            </p>

          </div>

          {/* CONTACT */}
          <div className="p-6 rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-md transition">

            <div className="flex items-center gap-3 mb-3 text-slate-700">
              <Mail size={18} className="text-orange-500" />
              <h3 className="font-semibold text-slate-900">
                {L.contact}
              </h3>
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
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-md transition duration-300 hover:-translate-y-1">

            <div className="flex items-center gap-3 mb-3 text-green-600">
              <HeartHandshake size={18} />
              <h3 className="font-semibold text-slate-900">
                {L.interests}
              </h3>
            </div>

            <p className="text-sm text-slate-600">
              Business Development • Community Development • Social Innovation • Entrepreneurship
            </p>

          </div>

          {/* PERSONAL */}
          <div className="p-6 rounded-2xl bg-white border border-slate-100 hover:shadow-md transition">

            <div className="flex items-center gap-3 mb-3 text-indigo-600">
              <User size={18} />
              <h3 className="font-semibold text-slate-900">
                {L.profile}
              </h3>
            </div>

            <div className="text-sm text-slate-600 space-y-1">
              <p>Date of Birth: 11/April/2001</p>
              <p>Nationality: Congolese</p>
              <p>Marital Status: Single</p>
              <p>Hobbies: Writing, research, video creation</p>
            </div>

          </div>

          {/* EDUCATION */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-md transition">

            <div className="flex items-center gap-3 mb-3 text-blue-600">
              <GraduationCap size={18} />
              <h3 className="font-semibold text-slate-900">
                {L.education}
              </h3>
            </div>

            <p className="text-sm text-slate-600">
              United States International University Africa — Bachelor of International Relations (In Progress)
            </p>

          </div>

          {/* CERTIFICATES */}
          <div className="p-6 rounded-2xl bg-white border border-slate-100 hover:shadow-md transition">

            <div className="flex items-center gap-3 mb-3 text-orange-500">
              <Award size={18} />
              <h3 className="font-semibold text-slate-900">
                {L.certificates}
              </h3>
            </div>

            <p className="text-sm text-slate-600">
              SIYB ILO • Leadership & Entrepreneurship • Non-Violent Communication • Life Coaching
            </p>

          </div>

          {/* LANGUAGES */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-md transition">

            <div className="flex items-center gap-3 mb-3 text-green-600">
              <Languages size={18} />
              <h3 className="font-semibold text-slate-900">
                {L.languages}
              </h3>
            </div>

            <p className="text-sm text-slate-600">
              English • French • Swahili • Luganda • Kinyarwanda
            </p>

          </div>

        </div>
      </div>

      {/* SIMPLE KEYFRAME (GLOBAL SAFE) */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(12px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>

    </section>
  );
}