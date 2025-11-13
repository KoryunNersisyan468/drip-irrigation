import React from "react";
import { m } from "framer-motion";
import { purposes } from "../data/purposes";

const PurposeSelection: React.FC = () => {
  const getAdvice = (purpose: string) => {
    switch (purpose) {
      case "garden":
        return "Այգիների համար կաթիլային համակարգը ապահովում է հողի խոնավության հավասար բաշխում։";
      case "greenhouse":
        return "Ջերմոցներում կաթիլային ոռոգումը թույլ է տալիս խուսափել գերխոնավությունից։";
      case "yard":
        return "Բակի բույսերի համար կարելի է օգտագործել ավտոմատ ժամաչափով կաթիլային համակարգ։";
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
        Օգտագործման նպատակների ուղեցույց
      </m.h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {purposes.map((p) => (
          <m.div
            key={p.value}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="p-4 bg-white rounded-2xl shadow-md hover:shadow-lg transition"
          >
            <h3 className="font-semibold mb-2">{p.label}</h3>
            <p className="text-slate-700">{getAdvice(p.value)}</p>
          </m.div>
        ))}
      </div>
    </section>
  );
};

export default PurposeSelection;
