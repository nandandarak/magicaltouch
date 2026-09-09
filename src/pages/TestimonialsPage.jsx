import React from 'react';
import CaseStudies from '../components/CaseStudies';
import { UserCheck, Star, ShieldCheck, Award } from 'lucide-react';

export default function TestimonialsPage() {
  return (
    <div className="pt-24 bg-[#F5F5F7]">
      {/* Page Hero Header */}
      <section className="py-12 bg-white border-b border-slate-200/70">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-4">
            <UserCheck className="w-3.5 h-3.5 text-emerald-600" />
            Verified Patient Recovery &amp; Testimonials
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-[#1D1D1F] tracking-tighter leading-[1.08] font-heading mb-4">
            Real Stories of <span className="text-gradient-emerald">Non-Surgical Recovery.</span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg font-medium leading-relaxed">
            Read inspiring journeys of Mumbai patients who avoided knee replacement, cured chronic sciatica, and recovered motor mobility through Magical Touch AcuHealth.
          </p>
        </div>
      </section>

      {/* Main Case Studies & Reviews Component */}
      <CaseStudies />

      {/* Trust Metrics & Clinical Guarantee */}
      <section className="py-16 bg-white border-t border-slate-200/70">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 space-y-2">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-500 mx-auto">
                <Star className="w-6 h-6 fill-amber-400" />
              </div>
              <span className="text-3xl font-black text-[#1D1D1F] block font-heading">4.9 / 5.0</span>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Patient Rating Average</span>
            </div>

            <div className="p-6 space-y-2">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mx-auto">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <span className="text-3xl font-black text-[#1D1D1F] block font-heading">100+ Recovered</span>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Documented Success Cases</span>
            </div>

            <div className="p-6 space-y-2">
              <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-600 mx-auto">
                <Award className="w-6 h-6" />
              </div>
              <span className="text-3xl font-black text-[#1D1D1F] block font-heading">15+ Years</span>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Clinical Excellence</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
