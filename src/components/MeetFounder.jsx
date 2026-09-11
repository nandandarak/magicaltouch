import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, MessageCircle, Phone, Award, ShieldCheck } from 'lucide-react';

const whatsappUrl = `https://wa.me/919967321313?text=${encodeURIComponent(
  'Hi Yogesh Sir (Magical Touch), I would like to schedule a personal consultation at your Mumbai clinic.'
)}`;

const SESSIONS = [
  {
    src: '/clinic_media/about.jpg',
    title: 'Manual Spinal Alignment',
    role: 'Yogesh Sir &middot; Lumbar & Sciatica Relief',
    desc: 'Unblocking trapped nerve roots along the spinal column to alleviate years of severe lumbar pain and disc compression.',
  },
  {
    src: '/clinic_media/carousel-2.jpg',
    title: 'Joint & Knee Mobilization',
    role: 'Cartilage & Synovial Fluid Care',
    desc: 'Activating 15+ targeted meridian points around knees and hips to restore fluid balance and avoid total joint replacement.',
  },
  {
    src: '/clinic_media/carousel-3.jpg',
    title: 'Neuromuscular Recovery',
    role: "Paralysis & Parkinson's Support",
    desc: 'Reawakening dormant motor pathways and bio-electrical signals between the brain and affected limbs.',
  },
];

export default function MeetFounder() {
  return (
    <section id="founder" className="py-24 sm:py-32 bg-white border-t border-stone-200/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        
        {/* Header matching 1.mp4 ("Meet Our Instructors") */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-6">
          <div className="max-w-2xl space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-stone-900" />
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
                15+ Years Clinical Leadership
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-[#1A1A18] tracking-[-0.03em] leading-tight">
              Meet <span className="font-serif italic font-normal text-stone-600">Yogesh Sir.</span>
            </h2>
            <p className="text-stone-600 text-base sm:text-lg font-light leading-relaxed">
              Founder &amp; Chief Therapist at Magical Touch. Dedicated to understanding each patient's individual pain root and guiding gentle, non-surgical recovery.
            </p>
          </div>

          <div className="text-right hidden md:block">
            <span className="text-xs font-mono text-stone-400 block mb-1">Clinic Verification</span>
            <span className="text-sm font-medium text-stone-800">Mumbai &middot; Maharashtra</span>
          </div>
        </div>

        {/* 3 Minimal Portrait Cards (Matching 1.mp4 frame 10) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {SESSIONS.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              className="group space-y-5"
            >
              <div className="relative aspect-[3/4] rounded-[28px] overflow-hidden bg-stone-100 border border-stone-200/80 shadow-sm group-hover:shadow-lg transition-all duration-500">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => { e.currentTarget.src = '/clinic_media/about.jpg'; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="space-y-1.5 px-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-light text-[#1A1A18] tracking-tight">
                    {item.title}
                  </h3>
                  <span className="text-xs font-mono text-stone-400">0{idx + 1}</span>
                </div>
                <p className="text-xs font-medium text-stone-500 uppercase tracking-wider">
                  {item.role}
                </p>
                <p className="text-stone-600 text-xs sm:text-sm font-light leading-relaxed pt-1">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Minimal Banner Quote & Action */}
        <div className="p-8 sm:p-12 rounded-[32px] bg-[#FAF9F6] border border-stone-200/80 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-2xl">
            <h4 className="text-xl sm:text-2xl font-light text-[#1A1A18] leading-snug">
              "We offer consultancy to our clients to understand their health issue and suggest ways to treat them."
            </h4>
            <p className="text-stone-500 text-xs sm:text-sm font-light">
              Effective as it is, Acupressure is also economical with no side effects.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#1A1A18] hover:bg-stone-800 text-white text-xs sm:text-sm font-medium tracking-wide transition-all active:scale-95 shadow-sm"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Book Consultation</span>
              <ArrowUpRight className="w-4 h-4 opacity-70" />
            </a>
            <a
              href="tel:+919819908249"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-white hover:bg-stone-50 text-stone-800 text-xs sm:text-sm font-medium border border-stone-200 transition-all active:scale-95"
            >
              <Phone className="w-4 h-4 text-stone-500" />
              <span>+91 98199 08249</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
