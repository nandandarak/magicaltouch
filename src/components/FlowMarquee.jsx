import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Activity, ShieldCheck, HeartPulse, CheckCircle2, Zap } from 'lucide-react';

export default function FlowMarquee() {
  const items = [
    { text: 'Find Your Relief', icon: Sparkles },
    { text: '100% Non-Surgical Decompression', icon: ShieldCheck },
    { text: 'Severe Spine & L4-L5 Disc Recovery', icon: Activity },
    { text: 'Zero Side Effects & Zero Medication', icon: CheckCircle2 },
    { text: 'Paralysis & Stroke Rehab', icon: Zap },
    { text: 'Parkinson\'s & Foot Drop Care', icon: HeartPulse },
    { text: 'Knee Osteoarthritis Restoration', icon: Sparkles },
    { text: '15+ Years Clinical Experience in Mumbai', icon: ShieldCheck },
  ];

  const duplicatedItems = [...items, ...items, ...items];

  return (
    <div className="py-8 bg-[#FAF8F5] border-y border-slate-200/80 overflow-hidden relative select-none">
      {/* Edge Fades */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#FAF8F5] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#FAF8F5] to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex items-center gap-6 whitespace-nowrap w-max"
        animate={{ x: ['0%', '-33.333%'] }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: 25,
        }}
      >
        {duplicatedItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white border border-slate-200/80 shadow-sm text-slate-800 font-extrabold text-xs sm:text-sm tracking-tight hover:border-emerald-400 transition-colors"
            >
              <Icon className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>{item.text}</span>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
