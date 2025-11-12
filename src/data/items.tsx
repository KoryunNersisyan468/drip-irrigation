import { Droplet, Leaf, Zap } from "lucide-react";
import type { IData } from "../types/types";

export const items:IData[] = [
    {
      icon: <Droplet size={28} />,
      title: "Ջրի խնայողություն",
      desc: "Մինչև 70% պակաս ջուր՝ նույն բերքի համար։",
    },
    {
      icon: <Leaf size={28} />,
      title: "Առողջ բույսեր",
      desc: "Ջուրը հասնում է անմիջապես արմատին։",
    },
    {
      icon: <Zap size={28} />,
      title: "Պարզ օգտագործում",
      desc: "Հեշտ տեղադրում և նվազ սպասարկում։",
    },
  ];