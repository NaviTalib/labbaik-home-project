// src/components/properties/PropertyCard.jsx
import React from "react";
import { MapPin, Maximize2, BedDouble, Bath } from "lucide-react";

export default function PropertyCard({ property, onSelect }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-neutral-200 shadow-sm hover:shadow-lg transition group flex flex-col">
      <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
        <img
          src={property.image}
          alt={property.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
        />
        <span className="absolute top-3 left-3 bg-brand-charcoal/90 text-white text-xs font-semibold px-3 py-1 rounded-full">
          For {property.status}
        </span>
        <span className="absolute top-3 right-3 bg-brand-crimson text-white text-xs font-bold px-3 py-1 rounded-full">
          {property.price}
        </span>
      </div>

      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-brand-crimson">
            {property.type}
          </span>
          <h3 className="text-lg font-bold text-brand-charcoal mt-1">{property.title}</h3>
          <p className="flex items-center gap-1.5 text-sm text-neutral-500 mt-1">
            <MapPin className="w-4 h-4 text-brand-crimson" />
            {property.location}
          </p>

          <div className="flex items-center gap-4 text-xs text-neutral-600 border-y border-neutral-100 my-4 py-3">
            <span className="flex items-center gap-1">
              <Maximize2 className="w-3.5 h-3.5" /> {property.area}
            </span>
            {property.beds > 0 && (
              <span className="flex items-center gap-1">
                <BedDouble className="w-3.5 h-3.5" /> {property.beds} Beds
              </span>
            )}
            <span className="flex items-center gap-1">
              <Bath className="w-3.5 h-3.5" /> {property.baths} Baths
            </span>
          </div>
        </div>

        <button
          onClick={() => onSelect(property)}
          className="w-full py-2.5 rounded-lg border-2 border-brand-charcoal text-brand-charcoal font-semibold text-sm hover:bg-brand-charcoal hover:text-white transition"
        >
          View Details & Floor Plan
        </button>
      </div>
    </div>
  );
}