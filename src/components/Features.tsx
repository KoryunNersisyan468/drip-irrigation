import { m } from "framer-motion";
import { items } from "../data/items";

export default function Features() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 text-center">
      <m.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-8"
      >
        Ինչու ընտրել կաթիլային ոռոգումը
      </m.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item, i) => (
          <m.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * i }}
            className="bg-white rounded-2xl shadow-lg p-6"
          >
            <div className="flex justify-center text-[#0ea5a4] mb-4">
              {item.icon}
            </div>
            <h3 className="font-semibold text-lg">{item.title}</h3>
            <p className="mt-2 text-slate-600 text-sm">{item.desc}</p>
          </m.div>
        ))}
      </div>
    </section>
  );
}
