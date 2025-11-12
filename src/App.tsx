import React from "react";
import Hero from "./components/Hero";
import WhatIsDrip from "./components/WhatIsDrip";
import HowItWorks from "./components/HowItWorks";
import Benefits from "./components/Benefits";
import Gallery from "./components/Gallery";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import PlantSelection from "./components/PlantSelection";

const App: React.FC = () => {
  return (
    <div className="text-slate-800">
      <Hero />
      <WhatIsDrip />
      <HowItWorks />
      <Benefits />
      <Gallery />
      <FAQ />
      <PlantSelection />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
