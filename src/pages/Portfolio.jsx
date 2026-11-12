// src/pages/Portfolio.jsx
import React from "react";
import { PORTFOLIO_ITEMS } from "../data/siteData";
import BeforeAfterSlider from "../components/portfolio/BeforeAfterSlider";

export default function Portfolio() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-12">
      <div>
        <h1 className="text-3xl font-extrabold text-brand-charcoal">Transformation Gallery</h1>
        <p className="text-neutral-600 mt-1">Drag the slider across any project to compare bare-shell vs. final handover.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {PORTFOLIO_ITEMS.map((item) => (
          <BeforeAfterSlider
            key={item.id}
            title={`${item.title} — ${item.location} (${item.duration})`}
            beforeImg={item.beforeImg}
            afterImg={item.afterImg}
          />
        ))}
      </div>
    </div>
  );
}