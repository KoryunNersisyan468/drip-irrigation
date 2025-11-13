import React from "react";
import logo from "/logo.svg";

const Footer: React.FC = () => (
  <footer className="text-center flex items-center justify-center gap-0 sm:gap-1 md:gap-2 lg:gap-3 text-slate-500 text-sm py-10 mt-auto">
    <img src={logo} alt="logo" className="w-12 h-12" />
    <p>
    © {new Date().getFullYear()} Կաթիլային ցուցադրություն — Ուսուցողական նախագիծ
  </p></footer>
);
export default Footer;
