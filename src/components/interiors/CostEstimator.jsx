// src/components/interiors/CostEstimator.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Calculator, ArrowRight } from "lucide-react";

const BHK_RATES = {
  "2 BHK": { Essential: [5.5, 7.0], Premium: [7.5, 10.0], Luxury: [11.0, 15.0] },
  "3 BHK": { Essential: [7.5, 9.5], Premium: [10.0, 14.0], Luxury: [15.0, 22.0] },
  "4 BHK / Villa": { Essential: [11.0, 14.5], Premium: [15.0, 21.0], Luxury: [22.0, 35.0] },
};

export default function CostEstimator() {
  const [bhk, setBhk] = useState("3 BHK");
  const [tier, setTier] = useState("Premium");
  const navigate = useNavigate();

  const [minPrice, maxPrice] = BHK_RATES[bhk][tier];

  return (
    <div className="bg-brand-charcoal text-white rounded-3xl p-6 sm:p-10 shadow-xl border border-neutral-800">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-brand-crimson/20 text-brand-crimson rounded-xl">
          <Calculator className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-2xl font-bold">Instant Interior Cost Estimator</h3>
          <p className="text-sm text-neutral-400">Get a ballpark turnkey quote in seconds</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-neutral-300 mb-2">1. Select Home Configuration</label>
            <div className="grid grid-cols-3 gap-2">
              {Object.keys(BHK_RATES).map((item) => (
                <button
                  key={item}
                  onClick={() => setBhk(item)}
                  className={`py-2.5 px-3 rounded-lg text-sm font-semibold border transition ${
                    bhk === item
                      ? "bg-brand-crimson border-brand-crimson text-white"
                      : "bg-brand-surface border-neutral-700 text-neutral-300 hover:border-neutral-500"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-300 mb-2">2. Select Finish Package</label>
            <div className="grid grid-cols-3 gap-2">
              {["Essential", "Premium", "Luxury"].map((pkg) => (
                <button
                  key={pkg}
                  onClick={() => setTier(pkg)}
                  className={`py-2.5 px-3 rounded-lg text-sm font-semibold border transition ${
                    tier === pkg
                      ? "bg-brand-crimson border-brand-crimson text-white"
                      : "bg-brand-surface border-neutral-700 text-neutral-300 hover:border-neutral-500"
                  }`}
                >
                  {pkg}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-brand-surface rounded-2xl p-6 flex flex-col justify-between border border-neutral-800">
          <div>
            <span className="text-xs uppercase tracking-widest text-neutral-400">Estimated Turnkey Budget</span>
            <div className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
              ₹{minPrice}L – ₹{maxPrice}L*
            </div>
            <p className="text-xs text-neutral-400 mt-2">
              Includes modular kitchen, wardrobes, false ceiling, painting & electricals.
            </p>
          </div>

          <button
            onClick={() => navigate(`/contact?estimate=${encodeURIComponent(`${bhk} - ${tier}`)}`)}
            className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-brand-crimson hover:bg-brand-crimsonDark text-white font-semibold py-3 rounded-xl transition"
          >
            Lock This Estimate & Book 3D Design <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}