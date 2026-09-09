import React from 'react';
import { Activity, ShieldCheck, Zap, HeartPulse, Sparkles, ArrowUpRight, Flame } from 'lucide-react';

export default function BentoServices() {
  const whatsappUrl = (condition) =>
    `https://wa.me/919967321313?text=${encodeURIComponent(
      `Hi Magical Touch AcuHealth, I would like to consult for ${condition} treatment.`
    )}`;

  return (
    <section id="services" className="py-24 bg-[#F5F5F7] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-emerald-700 text-xs font-bold uppercase tracking-wider shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            Clinical Specialization &amp; Conditions Treated
          </div>
          <h2 className="text-4xl sm:text-6xl font-black text-[#1D1D1F] tracking-tighter leading-[1.08] font-heading">
            Targeted Acupressure for <span className="text-gradient-emerald">Acute &amp; Chronic Care.</span>
          </h2>
          <p className="text-slate-600 text-lg sm:text-xl font-medium leading-relaxed">
            Non-surgical, drug-free meridian pressure therapy targeting root structural and neurological blockages.
          </p>
        </div>

        {/* Apple Feature Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Large Hero Card (8 Cols): Spine, Disc & Sciatica */}
          <div className="md:col-span-8 bento-card p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden group">
            {/* Background Accent Graphics */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none group-hover:bg-emerald-500/10 transition-colors" />

            <div className="relative z-10 space-y-4 max-w-lg">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
                <Activity className="w-6 h-6" />
              </div>

              <span className="inline-block text-xs font-bold text-emerald-700 uppercase tracking-widest">
                Primary Specialty
              </span>

              <h3 className="text-3xl sm:text-4xl font-black text-[#1D1D1F] tracking-tight leading-tight font-heading">
                Severe Spine, Slip Disc &amp; Sciatica Recovery
              </h3>

              <p className="text-slate-600 text-base leading-relaxed">
                Manual decompression along L4-L5 vertebrae relieving sciatic nerve pinching, herniated disc pressure, and chronic lumbar inflammation without surgical intervention.
              </p>
            </div>

            {/* Micro Specs Pill Badge Group */}
            <div className="relative z-10 pt-8 flex flex-wrap gap-2.5 items-center">
              <span className="px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-800 text-xs font-semibold">
                L4-L5 Nerve Relief
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-800 text-xs font-semibold">
                Sciatic Nerve Unblocking
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-800 text-xs font-semibold">
                Cervical Spondylosis
              </span>
              <a
                href={whatsappUrl('Spine & Slip Disc')}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto inline-flex items-center gap-1 text-xs font-bold text-emerald-700 hover:text-emerald-800"
              >
                Inquire Consultation <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Medium Card 1 (4 Cols): Paralysis & Stroke Care */}
          <div className="md:col-span-4 bento-card p-8 flex flex-col justify-between relative overflow-hidden group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-600">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-extrabold text-[#1D1D1F] tracking-tight font-heading">
                Paralysis &amp; Post-Stroke Rehabilitation
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Stimulating dormant motor pathways and bio-electrical meridian channels to restore limb reflex and motor control.
              </p>
            </div>
            <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-bold text-slate-400">Bio-Electrical Reflex</span>
              <a
                href={whatsappUrl('Paralysis Recovery')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 hover:bg-emerald-500 hover:text-white transition-colors"
              >
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Medium Card 2 (4 Cols): Parkinson's & Mobility */}
          <div className="md:col-span-4 bento-card p-8 flex flex-col justify-between relative overflow-hidden group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
                <HeartPulse className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-extrabold text-[#1D1D1F] tracking-tight font-heading">
                Parkinson's &amp; Foot Drop Care
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Gentle, rhythmic pressure application soothing nervous system tremors, peroneal nerve stimulation, and enhancing muscular fluidity.
              </p>
            </div>
            <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-bold text-slate-400">Tremor &amp; Foot Drop</span>
              <a
                href={whatsappUrl("Parkinson's & Foot Drop Care")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 hover:bg-emerald-500 hover:text-white transition-colors"
              >
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Medium Card 3 (4 Cols): Knee Pain & Arthritis */}
          <div className="md:col-span-4 bento-card p-8 flex flex-col justify-between relative overflow-hidden group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-extrabold text-[#1D1D1F] tracking-tight font-heading">
                Knee Pain &amp; Arthritis / Gathiyavaad
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Avoiding knee replacement surgeries by releasing patellar friction, restoring synovial fluid circulation, and treating Gathiyavaad joint stiffness.
              </p>
            </div>
            <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-bold text-slate-400">Cartilage Fluid Balance</span>
              <a
                href={whatsappUrl('Knee Osteoarthritis')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 hover:bg-emerald-500 hover:text-white transition-colors"
              >
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Medium Card 4 (4 Cols): Gastric & Metabolic Ailments */}
          <div className="md:col-span-4 bento-card p-8 flex flex-col justify-between relative overflow-hidden group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-600">
                <Flame className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-extrabold text-[#1D1D1F] tracking-tight font-heading">
                Gastric Ailments &amp; Hyper Acidity
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Resetting abdominal nerve points, Navi displacement, and gastric acid balance for comprehensive digestive organ health.
              </p>
            </div>
            <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-bold text-slate-400">Metabolic Vitality</span>
              <a
                href={whatsappUrl('Gastric & Acidity Care')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 hover:bg-emerald-500 hover:text-white transition-colors"
              >
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Small Feature Row (Full Width 12 Cols): Gastric, Acidity, Frozen Shoulder, Neuralgia */}
          <div className="md:col-span-12 bento-card p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="text-lg font-extrabold text-[#1D1D1F] font-heading">
                Full Spectrum Conditions Treated
              </h4>
              <p className="text-slate-500 text-xs sm:text-sm">
                Targeting organ meridians, joint nerve pathways, and metabolic vitality.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <span className="px-4 py-2 rounded-full bg-slate-100 text-slate-800 text-xs font-bold border border-slate-200">
                Cervical Spondylosis
              </span>
              <span className="px-4 py-2 rounded-full bg-slate-100 text-slate-800 text-xs font-bold border border-slate-200">
                Arthritis &amp; Gathiyavaad
              </span>
              <span className="px-4 py-2 rounded-full bg-slate-100 text-slate-800 text-xs font-bold border border-slate-200">
                Foot Drop &amp; Paralysis
              </span>
              <span className="px-4 py-2 rounded-full bg-slate-100 text-slate-800 text-xs font-bold border border-slate-200">
                Hyper Acidity &amp; Gastric Care
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
