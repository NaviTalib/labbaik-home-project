import React from "react";
import { Link } from "react-router-dom";
import { Building2, Paintbrush, ShieldCheck, ArrowRight } from "lucide-react";
import { PROPERTIES } from "../data/siteData";
import PropertyCard from "../components/properties/PropertyCard";
import CostEstimator from "../components/interiors/CostEstimator";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-brand-charcoal text-white py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="inline-block bg-brand-crimson/20 text-brand-crimson border border-brand-crimson/40 text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full">
              Real Estate & Turnkey Interiors
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
              From Buying the Right Key to Crafting Your <span className="text-brand-crimson">Dream Space.</span>
            </h1>
            <p className="text-neutral-400 text-lg max-w-xl leading-relaxed">
              Labbaik Home Project brings verified residential & commercial properties together with bespoke interior execution—under one trusted roof.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                to="/properties"
                className="inline-flex items-center gap-2 bg-brand-crimson hover:bg-brand-crimsonDark text-white font-semibold px-6 py-3.5 rounded-xl transition"
              >
                <Building2 className="w-5 h-5" /> Explore Properties
              </Link>
              <Link
                to="/interiors"
                className="inline-flex items-center gap-2 bg-white text-brand-charcoal hover:bg-neutral-200 font-semibold px-6 py-3.5 rounded-xl transition"
              >
                <Paintbrush className="w-5 h-5" /> Interior Packages
              </Link>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
              alt="Luxury Architecture and Interior"
              className="rounded-3xl shadow-2xl border border-neutral-800 aspect-[4/3] object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-brand-surface border border-neutral-700 p-5 rounded-2xl shadow-xl hidden sm:flex items-center gap-4">
              <ShieldCheck className="w-10 h-10 text-brand-crimson" />
              <div>
                <p className="text-xl font-extrabold text-white">20+ Years</p>
                <p className="text-xs text-neutral-400">Industry Expertise & On-Time Handover</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <h2 className="text-3xl font-extrabold text-brand-charcoal">Featured Listings</h2>
            <p className="text-neutral-600 mt-1">Handpicked RERA-verified homes & commercial spaces</p>
          </div>
          <Link to="/properties" className="inline-flex items-center gap-1 text-brand-crimson font-semibold hover:underline">
            View All Properties <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROPERTIES.map((prop) => (
            <PropertyCard key={prop.id} property={prop} onSelect={() => {}} />
          ))}
        </div>
      </section>

      {/* Interactive Calculator */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <CostEstimator />
      </section>
    </div>
  );
}