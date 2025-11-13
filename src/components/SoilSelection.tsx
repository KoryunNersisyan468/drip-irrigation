import React from "react";
import { m } from "framer-motion";
import {soils} from "../data/soils";

const SoilSelection: React.FC = () => {
  const getSoilAdvice = (soil: string) => {
    switch (soil) {
      case "sand":
        return "Ավազային հողը արագ է անցկացնում ջուրը, այդ պատճառով անհրաժեշտ է ավելի հաճախակի կաթիլային ոռոգում։";
      case "clay":
        return "Կավային հողը պահում է խոնավությունը երկար ժամանակ․ ոռոգեք ավելի քիչ հաճախ, բայց առատ ջրով։";
      case "loam":
        return "Խառը հողը հավասարակշռված է․ ոռոգեք շաբաթը 2-3 անգամ՝ կախված եղանակային պայմաններից։";
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
        Հողի տեսակների ոռոգման ուղեցույց
      </m.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {soils.map((s) => (
          <m.div
            key={s.value}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="p-4 bg-white rounded-2xl shadow-md hover:shadow-lg transition"
          >
            <h3 className="font-semibold mb-2">{s.label}</h3>
            <p className="text-slate-700">{getSoilAdvice(s.value)}</p>
          </m.div>
        ))}
      </div>
    </section>
  );
};

export default SoilSelection;
