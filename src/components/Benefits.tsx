import React from "react";
import { m } from "framer-motion";
import { benefitsData } from "../data/benefitsData";

const Benefits: React.FC = () => (
  <section className="max-w-6xl mx-auto px-6 py-16 bg-[#ecfeff] rounded-3xl">
    <m.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="text-3xl font-bold text-center mb-8"
    >
      Ավելացված առավելություններ
    </m.h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {benefitsData.map((b, i) => (
        <m.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 * i }}
          className="bg-white rounded-2xl shadow-lg p-6 text-center"
        >
          <div className="flex justify-center mb-4 text-[#0ea5a4]">
            {b.icon}
          </div>
          <h3 className="font-semibold text-lg">{b.title}</h3>
          <p className="mt-2 text-slate-600 text-sm">{b.desc}</p>
        </m.div>
      ))}
    </div>
  </section>
);
export default Benefits;
