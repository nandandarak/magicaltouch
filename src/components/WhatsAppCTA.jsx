import React from 'react';
import { MessageCircle, Phone, Clock, Sparkles, MapPin } from 'lucide-react';

export default function WhatsAppCTA() {
  const whatsappUrl = `https://wa.me/919967321313?text=${encodeURIComponent(
    'Hi Magical Touch AcuHealth, I would like to schedule an Acupressure Pain Relief consultation at Mumbai Clinic.'
  )}`;

  return (
    <section id="contact" className="py-20 bg-[#F5F5F7] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white p-10 sm:p-16 rounded-[36px] relative overflow-hidden shadow-2xl border border-slate-800">
          
          {/* Ambient Accents */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Info */}
            <div className="lg:col-span-8 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                Direct Clinical Consultation
              </div>

              <h2 className="text-4xl sm:text-5xl font-black tracking-tighter leading-tight font-heading">
                Ready to Live <span className="text-gradient-emerald">Pain-Free?</span>
              </h2>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl font-medium">
                Connect directly with <strong className="text-white font-bold">Our Acupressure Specialists</strong> for an initial evaluation of your spine, knee, or neurological condition. Towards better health in a gentle way.
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-300 pt-2">
                <span className="flex items-center gap-2 bg-slate-800/80 px-4 py-2 rounded-xl border border-slate-700">
                  <Phone className="w-4 h-4 text-emerald-400" />
                  +91 99673 21313 / +91 98199 08249
                </span>
                <span className="flex items-center gap-2 bg-slate-800/80 px-4 py-2 rounded-xl border border-slate-700">
                  <Clock className="w-4 h-4 text-emerald-400" />
                  Mon – Sat: 10:00 AM – 8:00 PM
                </span>
                <span className="flex items-center gap-2 bg-slate-800/80 px-4 py-2 rounded-xl border border-slate-700">
                  <MapPin className="w-4 h-4 text-emerald-400" />
                  Mumbai Clinic
                </span>
              </div>
            </div>

            {/* Right Actions */}
            <div className="lg:col-span-4 flex flex-col gap-4 justify-center">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-3 px-8 py-4.5 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 text-slate-950 font-black text-sm sm:text-base shadow-lg shadow-emerald-500/25 hover:scale-105 active:scale-95 transition-all duration-200"
              >
                <MessageCircle className="w-5 h-5 fill-slate-950" />
                Contact on WhatsApp
              </a>

              <a
                href="tel:+919967321313"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-slate-700 bg-slate-900/90 text-slate-200 font-bold text-xs sm:text-sm hover:border-slate-600 transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                Call +91 99673 21313
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
