// src/components/common/WhatsAppFloat.jsx
import React from "react";
import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  const message = encodeURIComponent(
    "Hi Labbaik Home Project! I'm interested in discussing a property / interior design project."
  );

  return (
    <a
      href={`https://wa.me/919999999999?text=${message}`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold px-4 py-3 rounded-full shadow-xl transition-transform hover:scale-105"
    >
      <MessageCircle className="w-5 h-5" />
      <span className="hidden sm:inline text-sm">Chat on WhatsApp</span>
    </a>
  );
}