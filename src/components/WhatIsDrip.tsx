import React from "react";
import { m } from "framer-motion";
import { features } from "../data/features";

const WhatIsDrip: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <m.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-center mb-8"
      >
        Ի՞նչ է կաթիլային ոռոգումը
      </m.h2>
      <p className="text-center text-slate-600 max-w-3xl mx-auto mb-8">
        Կաթիլային ոռոգումը ջուրը հասցնում է անմիջապես բույսերի արմատներին փոքր
        կաթիլներով, խուսափելով կորուստներից, բարելավելով բերքի որակը և
        նվազեցնելով հիվանդությունների հավանականությունը։
      </p>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {features.map((f, i) => (
          <m.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * i }}
            className="bg-white rounded-2xl shadow-lg p-6 text-center"
          >
            <div className="flex justify-center mb-4 text-[#0ea5a4]">
              {f.icon}
            </div>
            <h3 className="font-semibold text-lg">{f.title}</h3>
            <p className="mt-2 text-slate-600 text-sm">{f.desc}</p>
          </m.div>
        ))}
      </div>
    </section>
  );
};
export default WhatIsDrip;
