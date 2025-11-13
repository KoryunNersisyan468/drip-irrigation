import React, { useState } from "react";
import { m } from "framer-motion";
import { Leaf, Droplet } from "lucide-react";

const WaterCalculator: React.FC = () => {
  const [plants, setPlants] = useState(10);
  const [soil, setSoil] = useState("clay");
  const [result, setResult] = useState<number | null>(null);

  const calculateWater = () => {
    const base = plants * 0.5;
    const factor = soil === "sand" ? 1.5 : soil === "loam" ? 1.2 : 1.0;
    setResult(Number((base * factor).toFixed(2)));
  };

  return (
    <section className="max-w-xl mx-auto my-12 p-8 bg-[#f0fdfa] rounded-3xl shadow-lg text-center">
      <m.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl font-bold mb-6"
      >
        Ջրի օգտագործման հաշվիչ
      </m.h2>

      <div className="flex flex-col gap-6 items-center">
        <div className="w-full sm:w-2/3">
          <label
            htmlFor="plants"
            className="text-slate-700 font-medium mb-2 text-left flex items-center gap-1"
          >
            <Leaf className="w-5 h-5 text-green-500" />
            Բույսերի քանակը
          </label>
          <input
            id="plants"
            type="number"
            min="1"
            value={plants}
            onChange={(e) => setPlants(Number(e.target.value))}
            className="p-2 border border-slate-300 rounded-lg w-full text-center focus:ring-2 focus:ring-[#0ea5a4] outline-none"
            placeholder="Օրինակ՝ 15"
          />
          <p className="text-sm text-slate-500 mt-1 text-left">
            Նշեք, թե քանի բույս ունեք (օր.՝ 15 հատ)
          </p>
        </div>

        <div className="w-full sm:w-2/3">
          <label
            htmlFor="soil"
            className="text-slate-700 font-medium mb-2 text-left"
          >
            <p>Հողի տեսակը</p>
          </label>
          <select
            id="soil"
            value={soil}
            onChange={(e) => setSoil(e.target.value)}
            className="p-2 border border-slate-300 rounded-lg w-full focus:ring-2 focus:ring-[#0ea5a4] outline-none"
          >
            <option value="clay">Կավային հող</option>
            <option value="loam">Սևահող</option>
            <option value="sand">Ավազային հող</option>
          </select>
          <p className="text-sm text-slate-500 mt-1 text-left">
            Ընտրեք ձեր հողի տեսակը՝ ըստ տեղանքի (օր.՝ սևահող, ավազային)
          </p>
        </div>

        <button
          onClick={calculateWater}
          className="px-6 py-2 mt-4 bg-[#0ea5a4] text-white font-semibold rounded-xl hover:bg-[#0c8c8b] transition flex items-center justify-center gap-2"
        >
          <Droplet className="w-5 h-5" />
          Հաշվել
        </button>

        {result !== null && (
          <m.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-6 text-lg font-semibold text-[#0f766e] flex items-center justify-center gap-2"
          >
            Պահանջվող ջրի քանակը՝ {result} լիտր
            <Droplet className="w-5 h-5 text-blue-400" />
          </m.p>
        )}
      </div>
    </section>
  );
};

export default WaterCalculator;
