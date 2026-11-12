// src/components/common/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import LabbaikLogo from "./LabbaikLogo";

export default function Footer() {
  return (
    <footer className="bg-brand-charcoal text-neutral-300 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="space-y-4">
          <LabbaikLogo lightText={true} />
          <p className="text-sm text-neutral-400 leading-relaxed">
            End-to-end real estate advisory and turnkey interior execution across Noida, Greater Noida, and Delhi NCR.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-neutral-400">
            <li><Link to="/properties" className="hover:text-white">Verified Properties</Link></li>
            <li><Link to="/interiors" className="hover:text-white">Turnkey Interiors</Link></li>
            <li><Link to="/portfolio" className="hover:text-white">Before & After Gallery</Link></li>
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Interior Services</h4>
          <ul className="space-y-2 text-sm text-neutral-400">
            <li>Full Home Turnkey Execution</li>
            <li>Modular Kitchens & Wardrobes</li>
            <li>False Ceiling & Lighting Design</li>
            <li>Commercial Office Fit-Outs</li>
          </ul>
        </div>

        <div className="space-y-3 text-sm text-neutral-400">
          <h4 className="text-white font-semibold mb-4">Studio & Office</h4>
          <p className="flex items-start gap-2">
            <MapPin className="w-4 h-4 text-brand-crimson shrink-0 mt-1" />
            Alpha Commercial Belt, Greater Noida, UP
          </p>
          <p className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-brand-crimson shrink-0" />
            +91 98765 43210
          </p>
          <p className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-brand-crimson shrink-0" />
            contact@labbaikhomeproject.in
          </p>
        </div>
      </div>
      <div className="border-t border-neutral-800 py-5 text-center text-xs text-neutral-500">
        © {new Date().getFullYear()} Labbaik Home Project. All rights reserved.
      </div>
    </footer>
  );
}