import React from 'react';
import BentoServices from '../components/BentoServices';
import ConditionsTreated from '../components/ConditionsTreated';
import { Stethoscope } from 'lucide-react';

export default function ConditionsPage() {
  return (
    <div className="pt-24 bg-[#F5F5F7]">
      {/* Page Hero Header */}
      <section className="py-12 bg-white border-b border-slate-200/70">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-4">
            <Stethoscope className="w-3.5 h-3.5 text-emerald-600" />
            Clinical Conditions &amp; Specialties
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-[#1D1D1F] tracking-tighter leading-[1.08] font-heading mb-4">
            Conditions We <span className="text-gradient-emerald">Effectively Treat.</span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg font-medium leading-relaxed">
            Non-surgical, 100% drug-free acupressure meridian protocols targeting root structural disc pinching, joint degeneration, and neurological disorders.
          </p>
        </div>
      </section>

      {/* Apple Bento Grid Specializations */}
      <BentoServices />

      {/* Interactive Conditions Filter & Cards */}
      <ConditionsTreated />
    </div>
  );
}
