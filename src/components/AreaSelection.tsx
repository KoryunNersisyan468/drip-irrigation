import React from "react";
import { m } from "framer-motion";
import { areas } from "../data/areas";

const AreaSelection: React.FC = () => {
  const getAdvice = (area: string) => {
    switch (area) {
      case "small":
        return "Փոքր հողատարածքների համար բավական է մեկ գիծ կաթիլային խողովակ՝ 20–30 սմ բացվածքով։";
      case "medium":
        return "Միջին հողատարածքի դեպքում պետք է մի քանի գիծ՝ յուրաքանչյուր բույսի միջեւ 30–40 սմ բացվածքով։";
      case "large":
        return "Մեծ տարածքների համար օգտագործեք կենտրոնական խողովակ և ճյուղավորվող գծեր՝ արդյունավետ ջրամատակարարման համար։";
      default:
        return "";
    }
  };

  return (
    <section className="max-w-4xl mx-auto my-6 px-6 py-12 bg-[#f0fdfa] rounded-3xl shadow-lg text-center">
      <m.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-2xl font-bold mb-6"
      >
        Հողատարածքի չափի ուղեցույց
      </m.h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {areas.map((a) => (
          <m.div
            key={a.value}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="p-4 bg-white rounded-2xl shadow-md hover:shadow-lg transition"
          >
            <h3 className="font-semibold mb-2">{a.label}</h3>
            <p className="text-slate-700">{getAdvice(a.value)}</p>
          </m.div>
        ))}
      </div>
    </section>
  );
};

export default AreaSelection;
