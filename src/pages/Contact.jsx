// src/pages/Contact.jsx
import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [searchParams] = useSearchParams();
  const estimate = searchParams.get("estimate") || "";
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="bg-white rounded-3xl p-8 sm:p-10 border border-neutral-200 shadow-sm">
        <h1 className="text-3xl font-extrabold text-brand-charcoal">Book a Free Consultation</h1>
        <p className="text-neutral-600 mt-1 mb-8">
          Schedule a property site visit or meet our senior interior designer.
        </p>

        {submitted ? (
          <div className="bg-emerald-50 border border-emerald-200 text-emerald-900 p-6 rounded-2xl flex items-center gap-4">
            <CheckCircle2 className="w-8 h-8 text-emerald-600 shrink-0" />
            <div>
              <h3 className="font-bold text-lg">Request Received!</h3>
              <p className="text-sm">Our project consultant will call you within 2 business hours.</p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold mb-1">Full Name</label>
                <input required type="text" placeholder="Enter your name" className="w-full border border-neutral-300 rounded-xl px-4 py-3 text-sm" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">Phone / WhatsApp</label>
                <input required type="tel" placeholder="+91 98765 43210" className="w-full border border-neutral-300 rounded-xl px-4 py-3 text-sm" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">Service Interested In</label>
              <select
                defaultValue={estimate ? "Interiors" : "Both"}
                className="w-full border border-neutral-300 rounded-xl px-4 py-3 text-sm bg-white"
              >
                <option value="Properties">Buying / Renting Property</option>
                <option value="Interiors">Turnkey Interior Design</option>
                <option value="Both">Both Property + Interiors</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">Project Details / Location</label>
              <textarea
                rows="4"
                defaultValue={estimate ? `Interested in ballpark estimate for: ${estimate}` : ""}
                placeholder="Tell us your preferred sector, budget, or BHK size..."
                className="w-full border border-neutral-300 rounded-xl px-4 py-3 text-sm"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-brand-crimson hover:bg-brand-crimsonDark text-white font-bold py-3.5 rounded-xl transition"
            >
              Submit Inquiry
            </button>
          </form>
        )}
      </div>
    </div>
  );
}