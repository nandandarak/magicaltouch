import React from 'react';
import WhatsAppCTA from '../components/WhatsAppCTA';
import { Phone, MapPin, Clock, Stethoscope, Mail, ShieldCheck } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="pt-24 bg-[#F5F5F7]">
      {/* Page Hero Header */}
      <section className="py-12 bg-white border-b border-slate-200/70">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-4">
            <Stethoscope className="w-3.5 h-3.5 text-emerald-600" />
            Book Clinical Consultation
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-[#1D1D1F] tracking-tighter leading-[1.08] font-heading mb-4">
            Get in Touch With <span className="text-gradient-emerald">Our Specialists.</span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg font-medium leading-relaxed">
            Schedule your initial consultation for spine, disc, knee, or neurological pain evaluation at Magical Touch AcuHealth Mumbai.
          </p>
        </div>
      </section>

      {/* Main WhatsApp CTA Card */}
      <WhatsAppCTA />

      {/* Location & Hours Grid */}
      <section className="py-20 bg-[#F5F5F7]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            
            <div className="bento-card p-6 space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-black text-[#1D1D1F] font-heading">Phone Numbers</h3>
              <p className="text-slate-600 text-xs leading-relaxed font-bold">
                +91 99673 21313<br />
                +91 98199 08249
              </p>
              <span className="text-[11px] text-slate-400 block">Direct consultation hotline</span>
            </div>

            <div className="bento-card p-6 space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-black text-[#1D1D1F] font-heading">Email Address</h3>
              <p className="text-slate-600 text-xs leading-relaxed font-bold">
                magicaltouchmumbai@gmail.com
              </p>
              <span className="text-[11px] text-slate-400 block">Patient inquiry inbox</span>
            </div>

            <div className="bento-card p-6 space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-600">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-black text-[#1D1D1F] font-heading">Clinic Location</h3>
              <p className="text-slate-600 text-xs leading-relaxed font-bold">
                Magical Touch AcuHealth Clinic,<br />
                Mumbai, Maharashtra, India
              </p>
              <span className="text-[11px] text-slate-400 block">Accessible healthcare facility</span>
            </div>

            <div className="bento-card p-6 space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-black text-[#1D1D1F] font-heading">Operating Hours</h3>
              <p className="text-slate-600 text-xs leading-relaxed font-bold">
                Monday – Saturday:<br />
                10:00 AM – 8:00 PM
              </p>
              <span className="text-[11px] text-slate-400 block">Prior appointment recommended</span>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
