// import { Award, Star, Globe, Trophy } from "lucide-react";

// export default function Achievements({ lang }) {
//   const achievements = [
//     {
//       icon: <Trophy size={18} />,
//       title: "RIHAM GO EXTREME Challenge",
//       desc:
//         lang === "fr"
//           ? "Lauréat du challenge international."
//           : "Top winner of the international challenge.",
//     },
//     {
//       icon: <Globe size={18} />,
//       title: "YALI East Africa Regional Fellow",
//       desc:
//         lang === "fr"
//           ? "Programme de leadership soutenu par les États-Unis."
//           : "Prestigious leadership program supported by the U.S.",
//     },
//     {
//       icon: <Star size={18} />,
//       title: "SAVVY Fellowship Program",
//       desc:
//         lang === "fr"
//           ? "Programme global pour entrepreneurs à impact."
//           : "Global fellowship for impact-driven entrepreneurs.",
//     },
//     {
//       icon: <Award size={18} />,
//       title: "Young African Leaders Awards",
//       desc:
//         lang === "fr"
//           ? "Nominé parmi les jeunes leaders africains."
//           : "Nominee among emerging African leaders.",
//     },
//     {
//       icon: <Globe size={18} />,
//       title: "SINA Global Acceleration",
//       desc:
//         lang === "fr"
//           ? "Programme d'accélération pour innovation sociale."
//           : "Acceleration program for social innovation.",
//     },
//     {
//       icon: <Star size={18} />,
//       title: "Global Startup Ecosystem",
//       desc:
//         lang === "fr"
//           ? "Participation à un réseau international de startups."
//           : "Part of a global startup ecosystem network.",
//     },
//   ];

//   return (
//     <section id="achievements" className="py-16 px-4 bg-slate-50">

//       <div className="max-w-5xl mx-auto">

//         {/* TITLE */}
//         <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center">
//           {lang === "fr" ? "Réalisations & Distinctions" : "Achievements & Awards"}
//         </h2>

//         {/* SUBTITLE */}
//         <p className="mt-3 text-sm text-slate-600 text-center max-w-xl mx-auto">
//           {lang === "fr"
//             ? "Reconnaissances internationales reflétant l'engagement, le leadership et l'impact social."
//             : "International recognitions reflecting leadership, impact, and commitment to social change."}
//         </p>

//         {/* GRID */}
//         <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-4">

//           {achievements.map((item, i) => (
//             <div
//               key={i}
//               className="group p-4 rounded-xl border border-slate-200 bg-white hover:shadow-md transition"
//             >

//               {/* ICON */}
//               <div className="w-9 h-9 flex items-center justify-center rounded-md bg-orange-100 text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition">
//                 {item.icon}
//               </div>

//               {/* TITLE */}
//               <h3 className="mt-3 text-sm font-semibold text-slate-800">
//                 {item.title}
//               </h3>

//               {/* DESCRIPTION */}
//               <p className="mt-1 text-xs text-slate-600 leading-relaxed">
//                 {item.desc}
//               </p>

//             </div>
//           ))}

//         </div>

//       </div>

//     </section>
//   );
// }



import { useEffect, useRef, useState } from "react";
import { Award, Star, Globe, Trophy } from "lucide-react";

export default function Achievements({ lang }) {
  const achievements = [
    {
      icon: <Trophy size={18} />,
      title: "RIHAM GO EXTREME Challenge",
      desc:
        lang === "fr"
          ? "Lauréat du challenge international."
          : "Top winner of the international challenge.",
    },
    {
      icon: <Globe size={18} />,
      title: "YALI East Africa Regional Fellow",
      desc:
        lang === "fr"
          ? "Programme de leadership soutenu par les États-Unis."
          : "Prestigious leadership program supported by the U.S.",
    },
    {
      icon: <Star size={18} />,
      title: "SAVVY Fellowship Program",
      desc:
        lang === "fr"
          ? "Programme global pour entrepreneurs à impact."
          : "Global fellowship for impact-driven entrepreneurs.",
    },
    {
      icon: <Award size={18} />,
      title: "Young African Leaders Awards",
      desc:
        lang === "fr"
          ? "Nominé parmi les jeunes leaders africains."
          : "Nominee among emerging African leaders.",
    },
    {
      icon: <Globe size={18} />,
      title: "SINA Global Acceleration",
      desc:
        lang === "fr"
          ? "Programme d'accélération pour innovation sociale."
          : "Acceleration program for social innovation.",
    },
    {
      icon: <Star size={18} />,
      title: "Global Startup Ecosystem",
      desc:
        lang === "fr"
          ? "Participation à un réseau international de startups."
          : "Part of a global startup ecosystem network.",
    },
  ];

  const refs = useRef([]);
  const [visible, setVisible] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        setVisible((prev) => {
          let updated = [...prev];

          entries.forEach((entry) => {
            const index = refs.current.indexOf(entry.target);

            if (entry.isIntersecting) {
              if (!updated.includes(index)) {
                updated.push(index);
              }
            } else {
              updated = updated.filter((i) => i !== index);
            }
          });

          return updated;
        });
      },
      { threshold: 0.25 }
    );

    refs.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="achievements" className="py-20 px-6 bg-slate-50">

      <div className="max-w-5xl mx-auto">

        {/* TITLE */}
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center">
          {lang === "fr" ? "Réalisations & Distinctions" : "Achievements & Awards"}
        </h2>

        {/* SUBTITLE */}
        <p className="mt-3 text-sm text-slate-600 text-center max-w-xl mx-auto">
          {lang === "fr"
            ? "Reconnaissances internationales reflétant l'engagement, le leadership et l'impact social."
            : "International recognitions reflecting leadership, impact, and commitment to social change."}
        </p>

        {/* GRID */}
        <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 gap-6">

          {achievements.map((item, i) => {
            const isVisible = visible.includes(i);

            return (
              <div
                key={i}
                ref={(el) => (refs.current[i] = el)}
                className={`group p-5 rounded-2xl border transition-all duration-500 ease-out
                  
                  bg-white border-slate-200
                  
                  ${isVisible
                    ? "opacity-100 translate-y-0 scale-100 blur-0"
                    : "opacity-0 translate-y-12 scale-75 blur-sm"}
                  
                  hover:scale-105 hover:shadow-lg
                `}
                style={{
                  transitionDelay: `${i * 120}ms`,
                }}
              >

                {/* ICON */}
                <div className="w-10 h-10 flex items-center justify-center rounded-lg mb-3 transition-all duration-300
                  bg-orange-100 text-orange-500
                  group-hover:bg-orange-500 group-hover:text-white
                ">
                  {item.icon}
                </div>

                {/* TITLE */}
                <h3 className="text-sm font-semibold text-slate-800">
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                  {item.desc}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}