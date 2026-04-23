import {
  Briefcase,
  GraduationCap,
  Globe,
  Users,
  TrendingUp,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Experience({ lang }) {
  const experiences = [
    {
      title: "Integrated UPSHIFT Consultant",
      org: "UNICEF – War Child Alliance Uganda",
      date: "2025",
      icon: Globe,
    },
    {
      title: "Business Strengthening Trainer",
      org: "The Innovation Village – Save the Children (USAID Uthabiti Project)",
      date: "2023",
      icon: TrendingUp,
    },
    {
      title: "Business Development Consultant",
      org: "KOICA – INNOPORT (Uganda Country Office)",
      date: "2023",
      icon: Briefcase,
    },
    {
      title: "Business Consultant",
      org: "Jesuit Refugee Services (JRS)",
      date: "2023",
      icon: Users,
    },
    {
      title: "Business Trainer & Mentor",
      org: "Starthub Africa Consulting Ltd",
      date: "2023",
      icon: GraduationCap,
    },
    {
      title: "Financial Literacy Co-Facilitator",
      org: "Opportunity Bank Uganda",
      date: "2022",
      icon: TrendingUp,
    },
    {
      title: "Financial Education Consultant",
      org: "International Labour Organization (ILO)",
      date: "2022",
      icon: Globe,
    },
    {
      title: "Founder & Managing Director",
      org: "Anzisha Impact Hub",
      date: "2020 – Present",
      icon: Briefcase,
    },
    {
      title: "Program Contributor",
      org: "UNLEASHED Potentials in Motion",
      date: "2019 – 2021",
      icon: Users,
    },
    {
      title: "Co-founder & Director",
      org: "Refugee Global Talent",
      date: "2018",
      icon: GraduationCap,
    },
  ];

  const containerRef = useRef(null);
  const [visibleItems, setVisibleItems] = useState([]);
  const [lineHeight, setLineHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const items = document.querySelectorAll(".exp-item");
      const newVisible = [];

      items.forEach((item, index) => {
        const rect = item.getBoundingClientRect();

        if (rect.top < window.innerHeight * 0.85) {
          newVisible.push(index);
        }
      });

      setVisibleItems(newVisible);

      // LINE PROGRESS
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const totalHeight = containerRef.current.scrollHeight;

        let progress =
          (window.innerHeight - rect.top) / (rect.height + window.innerHeight);

        progress = Math.max(0, Math.min(1, progress));

        setLineHeight(progress * totalHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="experience"
      className="py-24 px-6 bg-linear-to-b from-white to-slate-50"
    >
      <div className="max-w-5xl mx-auto">

        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center">
          {lang === "fr" ? "Expérience" : "Experience"}
        </h2>

        <p className="text-center text-slate-500 mt-3 text-sm max-w-xl mx-auto">
          {lang === "fr"
            ? "Expérience en développement international, formation et leadership"
            : "International development, training, consulting & leadership roles"}
        </p>

        {/* TIMELINE */}
        <div ref={containerRef} className="mt-16 relative">

          {/* ANIMATED LINE */}
          <div className="absolute left-4 md:left-1/2 w-0.5 h-full bg-slate-200 opacity-30" />

          <div
            className="absolute left-4 md:left-1/2 w-0.5 bg-linear-to-b from-blue-400/30 via-slate-400/40 to-orange-400/30 transition-all duration-300"
            style={{ height: lineHeight }}
          />

          {experiences.map((exp, i) => {
            const Icon = exp.icon;
            const isVisible = visibleItems.includes(i);

            return (
              <div
                key={i}
                className={`exp-item mb-12 flex items-start gap-6 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >

                {/* ICON */}
                <div
                  className={`relative z-10 flex items-center justify-center w-11 h-11 rounded-full bg-white shadow-sm border border-slate-200 transition-all duration-500
                  ${
                    isVisible
                      ? "opacity-100 scale-100 translate-y-0"
                      : "opacity-0 scale-50 translate-y-5"
                  }`}
                >
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-50">
                    <Icon size={16} className="text-blue-600" />
                  </div>
                </div>

                {/* CARD */}
                <div
                  className={`flex-1 rounded-2xl overflow-hidden shadow-sm border border-slate-100 bg-white transition-all duration-700
                  ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                >

                  {/* TITLE */}
                  <div className="bg-white px-5 py-4">
                    <p className="text-xs text-slate-400">{exp.date}</p>

                    <h3 className="text-lg font-semibold text-slate-900 mt-1">
                      {exp.title}
                    </h3>
                  </div>

                  {/* DESCRIPTION */}
                  <div className="bg-slate-50 px-5 py-4 border-t border-slate-100">
                    <p className="text-sm text-slate-600">{exp.org}</p>
                  </div>

                </div>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}