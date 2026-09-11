import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Heart, Users, Sparkles, Phone, MessageCircle, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const sliderImages = [
  {
    src: '/clinic_media/1.jpg',
    title: 'Manual Spinal Alignment',
    desc: 'Targeted acupressure decompression relieving disc friction and sciatic pressure.',
  },
  {
    src: '/clinic_media/2.jpg',
    title: 'Joint & Knee Mobilization',
    desc: 'Activating natural synovial fluid flow to restore pain-free walking.',
  },
  {
    src: '/clinic_media/3.jpg',
    title: 'Neuromuscular Nerve Stimulation',
    desc: 'Reawakening dormant motor pathways for post-stroke and paralysis recovery.',
  },
  {
    src: '/clinic_media/4.jpg',
    title: 'Meridian Point Pressure',
    desc: 'Precision ancient meridian activation removing bio-electrical energy blocks.',
  },
  {
    src: '/clinic_media/5.jpg',
    title: 'Holistic Body Rejuvenation',
    desc: 'Complete mind and body calm preventing psychosomatic pain recurrence.',
  },
];

const whatsappUrl = `https://wa.me/919967321313?text=${encodeURIComponent(
  'Hi Yogesh Sir (Magical Touch), I read about your clinic and would like to schedule a personal consultation.'
)}`;

export default function AboutFounder() {
  const [activeSlide, setActiveSlide] = useState(0);

  const prevSlide = () => {
    setActiveSlide((curr) => (curr === 0 ? sliderImages.length - 1 : curr - 1));
  };

  const nextSlide = () => {
    setActiveSlide((curr) => (curr === sliderImages.length - 1 ? 0 : curr + 1));
  };

  return (
    <section id="about-clinic" className="py-24 bg-white relative overflow-hidden border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Top Header Badge */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            About Magical Touch · Mumbai Clinic
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#1D1D1F] tracking-tighter leading-[1.08] font-heading">
            Stepping Ahead Towards <span className="text-gradient-emerald">Wealth &amp; Health.</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-medium leading-relaxed">
            Ancient technique for modern chronic problems. Providing non-invasive healing and consultancy across Mumbai for over 15 years.
          </p>
        </div>

        {/* 2-Column Story + Gallery */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Authentic Clinic Photo Slider */}
          <div className="lg:col-span-6 space-y-6">
            <div className="relative rounded-[32px] overflow-hidden shadow-2xl shadow-emerald-950/10 border border-slate-200/80 aspect-[4/3] bg-slate-100 group">
              <img
                src={sliderImages[activeSlide].src}
                alt={sliderImages[activeSlide].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.src = '/clinic_media/about.jpg';
                }}
              />
              
              {/* Bottom Info Gradient Bar */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 sm:p-8 text-white">
                <span className="text-xs font-bold text-emerald-400 tracking-wider uppercase mb-1">
                  Clinical Session #{activeSlide + 1} of {sliderImages.length}
                </span>
                <h4 className="text-xl sm:text-2xl font-black font-heading mb-1 text-white">
                  {sliderImages[activeSlide].title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-200 font-medium leading-relaxed max-w-lg">
                  {sliderImages[activeSlide].desc}
                </p>
              </div>

              {/* Slider Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-slate-800 flex items-center justify-center backdrop-blur-md shadow-lg active:scale-90 transition-all"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-slate-800 flex items-center justify-center backdrop-blur-md shadow-lg active:scale-90 transition-all"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Slider Thumbnail Dots */}
            <div className="flex items-center justify-center gap-2">
              {sliderImages.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveSlide(i)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    i === activeSlide ? 'w-8 bg-emerald-600' : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right Column: Narrative & Human Connection */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-black text-[#1D1D1F] tracking-tight font-heading leading-snug">
                Not all chronic issues need surgery. Some have perfect cures in alternate treatments.
              </h3>
              
              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  The rigours and stresses of modern life take a heavy toll on health. Prolonged sitting, repetitive strain, and emotional tension manifest as severe back pain, sciatica, slip disc, knee stiffness, gastric trouble, and mobility loss.
                </p>
                <p>
                  At <strong>Magical Touch</strong>, led by <strong>Yogesh Sir</strong>, we offer dedicated consultancy to deeply understand your specific health challenges and design non-invasive, drug-free mitigating solutions.
                </p>
                <p className="font-semibold text-slate-900 border-l-4 border-emerald-500 pl-4 py-1">
                  True to our name — Magical for long-term problems through the ancient, proven technique of Acupressure. Effective as it is, it is also economical with zero side effects.
                </p>
              </div>
            </div>

            {/* 2-Col Stat Boxes directly from original site */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="bg-[#F5F5F7] rounded-2xl p-5 border border-slate-200/80 text-center">
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-slate-500 block">
                  More Than
                </span>
                <span className="text-4xl font-black text-emerald-700 font-heading block my-1">
                  15+
                </span>
                <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                  Years Experience
                </span>
              </div>

              <div className="bg-[#F5F5F7] rounded-2xl p-5 border border-slate-200/80 text-center">
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-slate-500 block">
                  More Than
                </span>
                <span className="text-4xl font-black text-emerald-700 font-heading block my-1">
                  100+
                </span>
                <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                  Happy Clients
                </span>
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-emerald-600 text-white font-extrabold text-xs sm:text-sm tracking-wide shadow-lg shadow-emerald-600/25 hover:bg-emerald-700 active:scale-95 transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Consult with Yogesh Sir</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="tel:+919967321313"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-extrabold text-xs sm:text-sm tracking-wide border border-slate-200 active:scale-95 transition-all"
              >
                <Phone className="w-4 h-4 text-emerald-600" />
                <span>+91 99673 21313</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
