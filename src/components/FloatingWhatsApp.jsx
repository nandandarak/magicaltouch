import React from "react";
import { MessageCircle } from "lucide-react";

const whatsappUrl = `https://wa.me/919152292507?text=${encodeURIComponent(
  "Hi Yogaysh Lahoti (Magical Touch), I would like to consult regarding Acupressure treatment for my pain.",
)}`;

export default function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-50 pointer-events-auto">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#1A1A18] hover:bg-stone-800 text-white text-xs font-medium tracking-wide shadow-xl shadow-stone-900/15 border border-stone-700/40 active:scale-95 transition-all duration-200"
        title="Consult Yogaysh Lahoti on WhatsApp"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <MessageCircle className="w-4 h-4 fill-white text-transparent" />
        <span className="hidden sm:inline">Consult Yogaysh Lahoti</span>
      </a>
    </div>
  );
}
