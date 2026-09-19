import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, Phone, ArrowUpRight, Sparkles } from "lucide-react";

const whatsappUrl = `https://wa.me/919152292507?text=${encodeURIComponent(
  "Hi Yogaysh Lahoti (Magical Touch), I would like to consult regarding Acupressure treatment for my chronic pain.",
)}`;

export default function SleekHero() {
  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        {/* Top Minimalist Tag */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-2 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-stone-900" />
          <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
            Acupressure &middot; Yoga &middot; Mumbai Clinic
          </span>
        </motion.div>

        {/* Editorial Headline Inspired by 1.mp4 ("BALANCE // Calm // RECONNECT") */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-4 max-w-5xl"
        >
          <h1 className="text-5xl sm:text-7xl lg:text-[5.75rem] font-light text-[#1A1A18] tracking-[-0.03em] leading-[1.02]">
            <span className="font-sans font-medium uppercase tracking-[0.04em] block sm:inline">
              RELIEF
            </span>
            <span className="text-stone-400 font-light mx-2 sm:mx-4">//</span>
            <span className="font-serif italic font-normal text-stone-600 block sm:inline">
              Gentle
            </span>
            <span className="text-stone-400 font-light mx-2 sm:mx-4">//</span>
            <span className="font-sans font-medium uppercase tracking-[0.04em] block sm:inline">
              RESTORE
            </span>
          </h1>

          <p className="text-stone-600 text-lg sm:text-xl lg:text-2xl font-light max-w-2xl leading-relaxed pt-3">
            Ancient technique of Acupressure for modern chronic problems.
            Non-invasive, drug-free healing in Mumbai by Yogaysh Lahoti for
            severe back pain, sciatica, slip disc, and joint disorders.
          </p>
        </motion.div>

        {/* Minimal Action Row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center gap-4 pt-8 pb-12"
        >
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#1A1A18] hover:bg-stone-800 text-white text-xs sm:text-sm font-medium tracking-wide transition-all duration-200 active:scale-95 shadow-sm"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Consult Yogaysh Lahoti</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
          </a>

          <a
            href="tel:+919152292507"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-stone-50 text-stone-800 text-xs sm:text-sm font-medium tracking-wide border border-stone-200/90 transition-all duration-200 active:scale-95 shadow-sm"
          >
            <Phone className="w-4 h-4 text-stone-500" />
            <span>+91 91522 92507</span>
          </a>

          <div className="hidden lg:flex items-center gap-3 text-xs text-stone-400 ml-4 font-light">
            <span>&middot;</span>
            <span>10+ Years Clinical Experience</span>
            <span>&middot;</span>
            <span>100+ Recovered Patients</span>
            <span>&middot;</span>
            <span>Zero Surgery</span>
          </div>
        </motion.div>

        {/* Cinematic Serene Visual Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-[32px] sm:rounded-[40px] overflow-hidden bg-stone-200 shadow-xl shadow-stone-900/5 border border-stone-200/80"
        >
          <img
            src="/clinic_media/carousel-1.jpg"
            alt="Towards better health in a gentle way - Magical Touch"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = "/clinic_media/about.jpg";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />

          {/* Minimalist Floating Overlay Pill */}
          <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 bg-white/90 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/60 shadow-lg max-w-sm hidden sm:block">
            <span className="text-[10px] font-bold tracking-widest uppercase text-stone-500 block mb-0.5">
              Core Philosophy
            </span>
            <p className="text-xs font-serif italic text-stone-800 text-[15px] leading-snug">
              "Towards better health in a gentle way — reviving, restoring, and
              renewing health without surgical intervention."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
