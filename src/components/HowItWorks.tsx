import React from "react";
import { m } from "framer-motion";
import { steps } from "../data/steps";
import HWImg from "/HWImg.png"

const HowItWorks: React.FC = () => {
  return (
    <section id="how" className="max-w-6xl mx-auto px-6 py-16">
      <m.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-center mb-8"
      >
        Ինչպես է աշխատում համակարգը
      </m.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="space-y-4">
          {steps.map((s, i) => (
            <m.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 * i }}
              className="p-4 border-l-4 border-[#0ea5a4]"
            >
              <h4 className="font-bold text-lg">
                Քայլ {s.step}: {s.title}
              </h4>
              <p className="text-slate-600 mt-1 text-sm">{s.desc}</p>
            </m.div>
          ))}
        </div>
        <div>
          <img
            src={HWImg}
            alt="drip system"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};
export default HowItWorks;
