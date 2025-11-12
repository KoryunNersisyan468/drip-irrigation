import React from "react";
import { m } from "framer-motion";
import { faqData } from "../data/faqData";

const FAQ: React.FC = () => (
  <section className="max-w-6xl mx-auto px-6 py-16">
    <m.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="text-3xl font-bold text-center mb-8"
    >
      Հաճախ տրվող հարցեր
    </m.h2>
    <div className="space-y-4 max-w-3xl mx-auto text-left">
      {faqData.map((f, i) => (
        <m.div
          key={i}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 * i }}
          className="p-4 border rounded-lg"
        >
          <h4 className="font-semibold">{f.q}</h4>
          <p className="text-slate-600 mt-1 text-sm">{f.a}</p>
        </m.div>
      ))}
    </div>
  </section>
);

export default FAQ;
