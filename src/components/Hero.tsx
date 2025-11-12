import React, { useState } from 'react';
import { m } from 'framer-motion';
import type { IDrop } from '../types/types';

const generateDrops = (): IDrop[] => 
  Array.from({ length: 20 }).map(() => ({
    left: Math.random() * 100,
    delay: Math.random() * 2,
    duration: 3 + Math.random() * 2,
  }));

const Hero: React.FC = () => {
  const [drops] = useState<IDrop[]>(generateDrops);

  return (
    <header className={`relative overflow-hidden bg-no-repeat object-cover bg-center w-full bg-[url(/bg.jpg)] bg-[#0ea5a4] h-[60vh] flex items-center justify-center text-center text-white`}>
      <div className='absolute opacity-30 top-0 left-0 bg-[#0ea5a4] h-[60vh] w-full'></div>
      {drops.map((drop, i) => (
        <m.div
          key={i}
          className="absolute w-1 h-3 bg-white rounded-full"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 600, opacity: 0.5 }}
          transition={{
            delay: drop.delay,
            duration: drop.duration,
            repeat: Infinity,
            repeatType: 'loop',
          }}
          style={{ left: `${drop.left}%` }}
        />
      ))}

      <div className="relative z-10 max-w-3xl px-6">
        <m.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-4xl md:text-6xl font-bold">
          Կաթիլային ոռոգում՝ արդյունավետ և հասկանալի
        </m.h1>
        <m.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mt-6 text-lg text-slate-100">
          Ուսուցողական նախագիծ՝ ցույց տալու, թե ինչպես է աշխատում կաթիլային ոռոգումը։
        </m.p>
        <m.a href="#how" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="inline-block mt-8 px-6 py-3 bg-white text-[#0ea5a4] font-semibold rounded-2xl shadow-lg">
          Ինչպես է աշխատում
        </m.a>
      </div>
    </header>
  );
};

export default Hero;
