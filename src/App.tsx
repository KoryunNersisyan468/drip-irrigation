import React, { useEffect, Suspense, lazy } from "react";

import Hero from "./components/Hero";
import WhatIsDrip from "./components/WhatIsDrip";
const HowItWorks = lazy(() => import("./components/HowItWorks"));
const Benefits = lazy(() => import("./components/Benefits"));
const Gallery = lazy(() => import("./components/Gallery"));
const FAQ = lazy(() => import("./components/FAQ"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));
const PlantSelection = lazy(() => import("./components/PlantSelection"));
const SoilSelection = lazy(() => import("./components/SoilSelection"));
const SeasonSelection = lazy(() => import("./components/SeasonSelection"));
const AreaSelection = lazy(() => import("./components/AreaSelection"));
const PurposeSelection = lazy(() => import("./components/PurposeSelection"));
const WaterCalculator = lazy(() => import("./components/WaterCalculator"));

const App: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const Loader = (
    <div className="text-center p-12 text-gray-500">
      Բեռնվում է...
    </div>
  );

  return (
    <div className="text-slate-800">
      <Suspense fallback={Loader}><Hero /></Suspense>
      <Suspense fallback={Loader}><WhatIsDrip /></Suspense>
      <Suspense fallback={Loader}><HowItWorks /></Suspense>
      <Suspense fallback={Loader}><Benefits /></Suspense>
      <Suspense fallback={Loader}><Gallery /></Suspense>
      <Suspense fallback={Loader}><FAQ /></Suspense>
      <Suspense fallback={Loader}><PlantSelection /></Suspense>
      <Suspense fallback={Loader}><SeasonSelection /></Suspense>
      <Suspense fallback={Loader}><AreaSelection /></Suspense>
      <Suspense fallback={Loader}><PurposeSelection /></Suspense>
      <Suspense fallback={Loader}><SoilSelection /></Suspense>
      <Suspense fallback={Loader}><WaterCalculator /></Suspense>
      <Suspense fallback={Loader}><Contact /></Suspense>
      <Suspense fallback={Loader}><Footer /></Suspense>
    </div>
  );
};

export default App;
