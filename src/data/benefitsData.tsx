import { Droplet, Leaf, Zap, Clock, Shield, ToolCase } from "lucide-react";
import type { IData } from "../types/types";

export const benefitsData:IData[] = [
  {
    icon: <Droplet size={32} />,
    title: "Բարձր արդյունավետություն",
    desc: "Ջուրը օգտագործվում է միայն անհրաժեշտ չափով",
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
    desc: "Ավտոմատացման միջոցով խնայողություն",
  },
  {
    icon: <ToolCase size={32} />,
    title: "Պարզ տեղադրում",
    desc: "Չի պահանջվում հատուկ սարքավորումներ",
  },
  {
    icon: <Zap size={32} />,
    title: "Անվտանգություն",
    desc: "Բույսերին վնաս չի հասցնում",
  },
];