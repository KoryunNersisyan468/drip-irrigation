import React from "react";
import { m } from "framer-motion";
import img1 from "/img1.jpg";
import img2 from "/img2.webp";
import img3 from "/img3.webp";
import img4 from "/img4.jpg";
import img5 from "/img5.jpg";

const images = [img1, img2, img3, img4, img5];

const Gallery: React.FC = () => (
  <section className="max-w-6xl mx-auto px-6 py-16 text-center">
    <m.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="text-3xl font-bold mb-12"
    >
      Պատկերասրահ
    </m.h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {images.map((img, i) => (
        <m.img
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.2 }}
          src={img}
          alt={`drip irrigation example ${i + 1}`}
          className="rounded-3xl shadow-xl w-full object-cover"
        />
      ))}
    </div>
  </section>
);

export default Gallery;
