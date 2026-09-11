import React from 'react';
import { Sparkles, CheckCircle2, MessageCircle, Heart, Wind, Sun, Compass } from 'lucide-react';

const YOGA_POINTS = [
  {
    title: 'Toning of Body & Flexibility',
    desc: 'Gentle yogic stretches that restore spinal suppleness, improve posture, and alleviate chronic physical stiffness.',
    icon: Wind,
  },
  {
    title: 'Cellular Rejuvenation',
    desc: 'Oxygenating deep tissue and promoting natural restorative repair across vital organs and fatigued joints.',
    icon: Sun,
  },
  {
    title: 'Mind & Body Harmony',
    desc: 'Uniting breathwork with conscious stillness to dissolve psychosomatic pain patterns stored in the nervous system.',
    icon: Heart,
  },
  {
    title: 'Pranayams for Emotional Balance',
    desc: 'Ancient rhythmic breathing techniques regulating cortisol, reducing anxiety, and stabilizing emotional equilibrium.',
    icon: Wind,
  },
  {
    title: 'Relaxation for Stress-Free Life',
    desc: 'Releasing chronic sympathetic fight-or-flight tension, easing migraines, and normalizing sleep cycles naturally.',
    icon: Sparkles,
  },
  {
    title: 'Special Meditation for Deeper Insight',
    desc: 'Guided contemplative sessions that cultivate inner tranquility, mental clarity, and sustained holistic wellbeing.',
    icon: Compass,
  },
];

const whatsappUrl = `https://wa.me/919967321313?text=${encodeURIComponent(
  'Hi Yogesh Sir (Magical Touch), I would like to inquire about Yoga, Pranayam & Meditation sessions.'
)}`;

export default function YogaMeditationSection() {
  return (
    <section id="yoga" className="py-24 bg-white relative overflow-hidden border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Authentic Yoga Image & Visual Frame */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-[32px] overflow-hidden shadow-2xl shadow-emerald-950/10 border border-slate-200/80 aspect-[4/3] sm:aspect-square lg:aspect-[4/5] bg-slate-100 group">
              <img
                src="/clinic_media/yoga.jpg"
                alt="Yoga and Meditation at Magical Touch"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  e.currentTarget.src = '/clinic_media/about.jpg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent flex flex-col justify-end p-8 text-white">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-[10px] font-bold uppercase tracking-wider mb-2 text-white w-fit">
                  Mind-Body Medicine
                </div>
                <h4 className="text-2xl font-black font-heading text-white mb-2">
                  Ancient Civilization Wisdom
                </h4>
                <p className="text-xs sm:text-sm text-slate-200 font-medium leading-relaxed max-w-md">
                  Proudly practiced, popularized and propagated around the world — ridding the body of psychosomatic tension.
                </p>
              </div>
            </div>

            {/* Floating Trust Badge */}
            <div className="absolute -bottom-6 -right-6 hidden sm:flex items-center gap-3 bg-white p-4 rounded-2xl border border-slate-200 shadow-xl backdrop-blur-md">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                🧘‍♂️
              </div>
              <div className="leading-tight">
                <span className="text-xs font-black text-[#1D1D1F] block">Harmonized Healing</span>
                <span className="text-[10px] text-slate-500 font-medium">Acupressure + Yoga Protocol</span>
              </div>
            </div>
          </div>

          {/* Right Column: Original Content & 6 Pillars */}
          <div className="lg:col-span-6 space-y-8">
            
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                Holistic Body Harmony
              </div>

              <h2 className="text-3xl sm:text-5xl font-black text-[#1D1D1F] tracking-tighter leading-[1.08] font-heading">
                Relax with <br />
                <span className="text-gradient-emerald">Yoga &amp; Meditation.</span>
              </h2>

              <p className="text-slate-600 text-base sm:text-lg font-medium leading-relaxed">
                Yoga is as ancient as our civilization. Now proudly practiced and popularized around the world, it helps not just in toning and weight reduction, but in calming the mind — thus helping in ridding the body of psychosomatic diseases.
              </p>
            </div>

            {/* 6 Core Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {YOGA_POINTS.map((pt, idx) => {
                const Icon = pt.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-[#F5F5F7] border border-slate-200/80 space-y-1.5 hover:border-emerald-400/40 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <h4 className="text-xs sm:text-sm font-black text-[#1D1D1F] font-heading">
                        {pt.title}
                      </h4>
                    </div>
                    <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed font-medium pl-6">
                      {pt.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Direct Consultation Trigger */}
            <div className="pt-2 flex items-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-emerald-600 text-white font-extrabold text-xs sm:text-sm tracking-wide shadow-lg shadow-emerald-600/25 hover:bg-emerald-700 active:scale-95 transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Inquire About Yoga &amp; Meditation</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
