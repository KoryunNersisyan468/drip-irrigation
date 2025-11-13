import React from "react";
import { m } from "framer-motion";
import { seasons } from "../data/seasons";

const SeasonSelection: React.FC = () => {
  const getAdvice = (season: string) => {
    switch (season) {
      case "spring":
        return "Գարնանը բույսերը ակտիվանում են․ ոռոգեք օրը մեկ անգամ կամ ըստ անհրաժեշտության։";
      case "summer":
        return "Ամռանը ջերմաստիճանը բարձր է․ անհրաժեշտ է ամենօրյա կաթիլային ոռոգում։";
      case "autumn":
        return "Աշնանը ջերմաստիճանը նվազում է․ ոռոգեք շաբաթը 2 անգամ։";
      default:
        return "";
    }
  };

  return (
    <section className="max-w-4xl mx-auto my-6 px-6 py-12 bg-[#ecfdf5] rounded-3xl shadow-lg text-center">
      <m.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-2xl font-bold mb-6"
      >
        Տարվա եղանակների ուղեցույց
      </m.h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {seasons.map((s) => (
          <m.div
            key={s.value}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="p-4 bg-white rounded-2xl shadow-md hover:shadow-lg transition"
          >
            <h3 className="font-semibold mb-2">{s.label}</h3>
            <p className="text-slate-700">{getAdvice(s.value)}</p>
          </m.div>
        ))}
      </div>
    </section>
  );
};

export default SeasonSelection;
