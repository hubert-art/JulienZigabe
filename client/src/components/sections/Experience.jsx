import {
  Briefcase,
  GraduationCap,
  Globe,
  Users,
  TrendingUp,
} from "lucide-react";

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
          International development, training, consulting & leadership roles across UN agencies and NGOs
        </p>

        {/* TIMELINE */}
        <div className="mt-16 relative">

          {/* LINE */}
          <div className="absolute left-4 md:left-1/2 w-0.5 h-full bg-linear-to-b from-blue-200 via-slate-200 to-orange-200 opacity-60" />

          {experiences.map((exp, i) => {
            const Icon = exp.icon;

            return (
              <div
                key={i}
                className={`mb-12 flex items-start gap-6 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >

                {/* ICON */}
                <div className="relative z-10 flex items-center justify-center w-11 h-11 rounded-full bg-white shadow-sm border border-slate-200">

                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-50">
                    <Icon size={16} className="text-blue-600" />
                  </div>

                </div>

                {/* CARD */}
                <div className="flex-1 rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-md transition">

                  {/* TITLE SECTION */}
                  <div className="bg-white px-5 py-4">
                    <p className="text-xs text-slate-400">{exp.date}</p>

                    <h3 className="text-lg font-semibold text-slate-900 mt-1">
                      {exp.title}
                    </h3>
                  </div>

                  {/* DESCRIPTION SECTION */}
                  <div className="bg-slate-50 px-5 py-4 border-t border-slate-100">
                    <p className="text-sm text-slate-600">
                      {exp.org}
                    </p>
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