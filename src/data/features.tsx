import { Droplet, Leaf, Shield, Clock } from "lucide-react";
import type { IData } from "../types/types";

export const features:IData[] = [
  {
    icon: <Droplet size={32} />,
    title: "Ջրի խնայողություն",
    desc: "Մինչև 70% պակաս ջուր",
  },
  {
    icon: <Leaf size={32} />,
    title: "Առողջ բույսեր",
    desc: "Ջուրը հասնում է անմիջապես արմատին",
  },
  {
    icon: <Shield size={32} />,
    title: "Կրճատված հիվանդություններ",
    desc: "Բույսերը ավելի քիչ ենթակա են պաթոգենների",
  },
  {
    icon: <Clock size={32} />,
    title: "Ժամանակի խնայողություն",
    desc: "Սպասարկման նվազեցված պահանջներ",
  },
];