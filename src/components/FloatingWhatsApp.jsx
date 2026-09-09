import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappUrl = `https://wa.me/919967321313?text=${encodeURIComponent(
    'Hi Magical Touch AcuHealth, I would like to consult regarding Acupressure treatment.'
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-auto">
      {/* Small Popover Message */}
      {showTooltip && (
        <div className="mb-3 max-w-xs bg-slate-900/95 border border-emerald-500/30 text-white rounded-2xl p-4 shadow-2xl shadow-emerald-950/50 backdrop-blur-md relative animate-bounce-short">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-2 right-2 text-slate-400 hover:text-white p-1"
            aria-label="Close message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-xs font-bold text-emerald-400">Online for Consultation</span>
          </div>
          <p className="text-xs text-slate-200 leading-snug">
            Need urgent relief for Knee, Spine, or Sciatica pain? Message Magical Touch AcuHealth now!
          </p>
        </div>
      )}

      {/* Main Action Pill */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative inline-flex items-center gap-3 px-5 py-3.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-extrabold text-xs sm:text-sm shadow-2xl shadow-emerald-500/40 hover:scale-105 active:scale-95 transition-all duration-200"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        <MessageCircle className="w-5 h-5 fill-white" />
        <span>Contact on WhatsApp</span>
      </a>
    </div>
  );
}
