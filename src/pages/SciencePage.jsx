import React from 'react';
import AcupressureScience from '../components/AcupressureScience';
import { Sparkles, Activity, ShieldCheck, HeartPulse } from 'lucide-react';

export default function SciencePage() {
  return (
    <div className="pt-24 bg-[#F5F5F7]">
      {/* Page Hero Header */}
      <section className="py-12 bg-white border-b border-slate-200/70">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            Therapeutic Science &amp; Yoga Science
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-[#1D1D1F] tracking-tighter leading-[1.08] font-heading mb-4">
            Yoga, Meditation &amp; <span className="text-gradient-emerald">Acupressure Science.</span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg font-medium leading-relaxed">
            Discover how bio-electrical meridian stimulation and calculated manual pressure decompress nerve roots and restore organ balance naturally.
          </p>
        </div>
      </section>

      {/* Main Science Breakdown Component */}
      <AcupressureScience />

      {/* Deep-Dive Pillar Details */}
      <section className="py-20 bg-[#F5F5F7]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bento-card p-8 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
                <Activity className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black text-[#1D1D1F] font-heading">Meridian Unblocking</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Rhythmic manual pressure releases bio-electrical blockages along spinal pathways, restoring natural impulse transmission to organs and muscles.
              </p>
            </div>

            <div className="bento-card p-8 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-600">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black text-[#1D1D1F] font-heading">Zero Surgery &amp; Drugs</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Rather than relying on painkiller injections or invasive joint surgeries, therapy supports your body's inherent self-healing intelligence.
              </p>
            </div>

            <div className="bento-card p-8 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600">
                <HeartPulse className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black text-[#1D1D1F] font-heading">Metabolic Vitality</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Normalizes digestive acid reflux, solar plexus (Navi) alignment, and renal blood flow for lasting internal systemic wellness.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
