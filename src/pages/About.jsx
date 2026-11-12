import React from "react";

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-6">
      <span className="text-brand-crimson font-bold uppercase tracking-wider text-xs">
        Our Story
      </span>
      <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-charcoal">
        Two Decades of Craftsmanship & Real Estate Trust
      </h1>
      <p className="text-neutral-700 leading-relaxed text-lg">
        Founded with over 20 years of hands-on experience in residential construction, property advisory, and bespoke interior contracting, <strong>Labbaik Home Project</strong> eliminates the stress of dealing with separate brokers and unorganized contractors.
      </p>
      <p className="text-neutral-700 leading-relaxed">
        Whether you are acquiring a high-growth property in Greater Noida or transforming a bare-shell apartment into a warm family residence, our in-house engineers, designers, and legal advisors handle every milestone transparently.
      </p>
    </div>
  );
}