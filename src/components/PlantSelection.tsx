import React from "react";
import { m } from "framer-motion";
import { plants } from "../data/plants";

const PlantSelection: React.FC = () => {
  const getWateringInfo = (plant: string) => {
    switch (plant) {
      case "tomato":
        return "Տոմատը պետք է ոռոգել 2–3 անգամ շաբաթը մեկ";
      case "cucumber":
        return "Վարունգը պետք է ոռոգել ամեն օր կես լիտր ջուր յուրաքանչյուր բույսի համար";
      case "strawberry":
        return "Ելակին անհրաժեշտ է 3–4 անգամ շաբաթվա ընթացքում";
      case "lettuce":
        return "Կաղամբը պետք է ոռոգել 2 անգամ շաբաթը մեկ";
      case "flowers":
        return "Ծաղիկները պետք է ոռոգել փոքր քանակությամբ ամեն օր";
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
        Բույսերի ոռոգման ուղեցույց
      </m.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {plants.map((p) => (
          <m.div
            key={p.value}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="p-4 bg-white rounded-2xl shadow-md"
          >
            <h3 className="font-semibold mb-2">{p.label}</h3>
            <p className="text-slate-700">{getWateringInfo(p.value)}</p>
          </m.div>
        ))}
      </div>
    </section>
  );
};

export default PlantSelection;
