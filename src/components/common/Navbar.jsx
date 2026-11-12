import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, PhoneCall } from "lucide-react";
import LabbaikLogo from "./LabbaikLogo";

const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "Properties", path: "/properties" },
  { name: "Interiors", path: "/interiors" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-brand-charcoal/95 backdrop-blur border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link to="/" onClick={() => setOpen(false)}>
          <LabbaikLogo lightText={true} />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive ? "text-brand-crimson font-semibold" : "text-neutral-300 hover:text-white"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-brand-crimson hover:bg-brand-crimsonDark text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition"
          >
            <PhoneCall className="w-4 h-4" />
            Free Consultation
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-neutral-200 p-2"
          aria-label="Toggle Menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="md:hidden bg-brand-surface border-b border-neutral-800 px-6 py-5 space-y-4">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block text-base font-medium ${
                  isActive ? "text-brand-crimson" : "text-neutral-200"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="block text-center bg-brand-crimson text-white font-semibold py-2.5 rounded-lg"
          >
            Book Site Visit
          </Link>
        </div>
      )}
    </header>
  );
}