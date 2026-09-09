import React from 'react';
import { Link } from 'react-router-dom';
import HeroPinCanvas from '../components/HeroPinCanvas';
import StatsBanner from '../components/StatsBanner';
import { Activity, Sparkles, UserCheck, Stethoscope, ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <div>
      {/* Full-Screen Immersive 3D Canvas Hero Sequence */}
      <HeroPinCanvas />

      {/* Clinical Stats & Trust Metric Banner */}
      <StatsBanner />

      {/* Multi-Page Navigation Quick Overview Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          
          <div className="max-w-3xl mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              Explore AcuHealth Care
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-[#1D1D1F] tracking-tighter leading-[1.08] font-heading">
              Comprehensive Care Across <span className="text-gradient-emerald">Specialized Pages.</span>
            </h2>
            <p className="text-slate-600 text-lg font-medium">
              Navigate our dedicated clinical sections to explore conditions treated, therapeutic science, patient recovery stories, and consultation options.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1: Conditions Treated */}
            <Link
              to="/conditions"
              className="bento-card p-8 flex flex-col justify-between group hover:border-emerald-300"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
                  <Activity className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-black text-[#1D1D1F] tracking-tight font-heading">
                  Conditions Treated
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Severe Back Pain, Slip Disc, Sciatica, Cervical, Paralysis, Parkinson's &amp; Knee Pain.
                </p>
              </div>
              <div className="pt-6 flex items-center gap-2 text-xs font-bold text-emerald-700 group-hover:text-emerald-800">
                <span>View All Conditions</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Card 2: Yoga & Meditation / Science */}
            <Link
              to="/science"
              className="bento-card p-8 flex flex-col justify-between group hover:border-teal-300"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-600">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-black text-[#1D1D1F] tracking-tight font-heading">
                  Yoga &amp; Meditation
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Bio-electrical meridian stimulation, non-invasive spinal advantage &amp; neural reset.
                </p>
              </div>
              <div className="pt-6 flex items-center gap-2 text-xs font-bold text-teal-700 group-hover:text-teal-800">
                <span>Explore Science</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Card 3: Testimonials */}
            <Link
              to="/testimonials"
              className="bento-card p-8 flex flex-col justify-between group hover:border-emerald-300"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
                  <UserCheck className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-black text-[#1D1D1F] tracking-tight font-heading">
                  Testimonials
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Verified patient recovery stories, non-surgical ratings &amp; clinical success data.
                </p>
              </div>
              <div className="pt-6 flex items-center gap-2 text-xs font-bold text-emerald-700 group-hover:text-emerald-800">
                <span>Read Stories</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Card 4: Contact */}
            <Link
              to="/contact"
              className="bento-card p-8 flex flex-col justify-between group hover:border-amber-300"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600">
                  <Stethoscope className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-black text-[#1D1D1F] tracking-tight font-heading">
                  Book Contact
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Direct consultation booking, Mumbai clinic location, operating hours &amp; WhatsApp connect.
                </p>
              </div>
              <div className="pt-6 flex items-center gap-2 text-xs font-bold text-amber-700 group-hover:text-amber-800">
                <span>Get in Touch</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

          </div>

        </div>
      </section>
    </div>
  );
}
