import React, { useState } from "react";
import { PROPERTIES } from "../data/siteData";
import PropertyCard from "../components/properties/PropertyCard";

export default function Properties() {
  const [filterType, setFilterType] = useState("All");
  const [selectedProp, setSelectedProp] = useState(null);

  const filtered = PROPERTIES.filter((p) =>
    filterType === "All" ? true : p.type === filterType
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
        <div>
          <h1 className="text-3xl font-extrabold text-brand-charcoal">Verified Properties</h1>
          <p className="text-neutral-600">Residential & Commercial real estate across Noida & Greater Noida</p>
        </div>

        <div className="flex gap-2">
          {["All", "Residential", "Commercial"].map((tab) => (
            <button
              key={tab}
              onClick={() => setFilterType(tab)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition ${
                filterType === tab
                  ? "bg-brand-crimson text-white"
                  : "bg-white border border-neutral-300 text-neutral-700 hover:bg-neutral-100"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {filtered.map((prop) => (
          <PropertyCard key={prop.id} property={prop} onSelect={setSelectedProp} />
        ))}
      </div>

      {/* Quick Details Modal */}
      {selectedProp && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 space-y-4">
            <img src={selectedProp.image} alt={selectedProp.title} className="w-full h-56 object-cover rounded-xl" />
            <h3 className="text-2xl font-bold">{selectedProp.title}</h3>
            <p className="text-brand-crimson font-bold text-xl">{selectedProp.price}</p>
            <div className="flex flex-wrap gap-2">
              {selectedProp.highlights.map((h) => (
                <span key={h} className="text-xs bg-neutral-100 px-3 py-1 rounded-full font-medium">
                  ✓ {h}
                </span>
              ))}
            </div>
            <div className="flex justify-end gap-3 pt-4">
              <button
                onClick={() => setSelectedProp(null)}
                className="px-4 py-2 rounded-lg border border-neutral-300 text-sm font-semibold"
              >
                Close
              </button>
              <a
                href="/contact"
                className="px-5 py-2 rounded-lg bg-brand-crimson text-white text-sm font-semibold"
              >
                Schedule Site Visit
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}