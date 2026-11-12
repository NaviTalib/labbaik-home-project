    // src/pages/Interiors.jsx
import React from "react";
import CostEstimator from "../components/interiors/CostEstimator";

const SERVICES = [
  { title: "Full-Home Turnkey Interiors", desc: "Complete civil, carpentry, electrical, false ceiling, and furnishing execution." },
  { title: "Modular Kitchens & Wardrobes", desc: "Factory-finished HDHMR & BWP marine ply modules with German hardware." },
  { title: "Commercial & Office Fit-Outs", desc: "Ergonomic workspaces, retail showrooms, and acoustic conference rooms." },
  { title: "3D Visualization & Space Planning", desc: "Photorealistic 3D renders before a single nail is hammered on site." },
];

export default function Interiors() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-16">
      <div className="max-w-2xl">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-charcoal">Turnkey Interior Design & Execution</h1>
        <p className="text-neutral-600 mt-3">Transparent material specs, 45-day delivery timelines, and dedicated site supervision.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {SERVICES.map((s) => (
          <div key={s.title} className="bg-white p-7 rounded-2xl border border-neutral-200 shadow-sm">
            <h3 className="text-xl font-bold text-brand-charcoal">{s.title}</h3>
            <p className="text-neutral-600 text-sm mt-2 leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>

      <CostEstimator />
    </div>
  );
}