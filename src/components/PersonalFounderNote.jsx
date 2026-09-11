import React from 'react';
import { MessageCircle, Phone, ArrowUpRight, Award, ShieldCheck, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { TiltedCard, Magnet, ShinyText, GradientText } from './reactbits';

const whatsappUrl = `https://wa.me/919967321313?text=${encodeURIComponent(
  'Hi Yogesh Sir (Magical Touch), I read your personal note on the website and would like to speak with you about my pain.'
)}`;

export default function PersonalFounderNote() {
  return (
    <section className="py-24 sm:py-32 bg-white border-t border-stone-200/70 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Authentic Portrait with 3D Tilt from React Bits */}
          <div className="lg:col-span-5 relative flex justify-center">
            <TiltedCard
              imageSrc="/images/yogesh_sir.jpg"
              altText="Yogesh Sir, Acupressure Master at Magical Touch"
              captionText="Yogesh Sir &middot; 28+ Years Clinical Practice"
              containerWidth="100%"
              containerHeight="480px"
              imageHeight="100%"
              imageWidth="100%"
              rotateAmplitude={10}
              scaleOnHover={1.03}
              showTooltip={false}
              className="rounded-[36px] overflow-hidden shadow-2xl border border-stone-200/80 max-w-md w-full"
            />
          </div>

          {/* Right Column: Warm, Personal Letter to the Patient */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 border border-stone-200/80 text-[11px] font-mono text-stone-600">
              <ShinyText text="A PERSONAL NOTE TO EVERY PATIENT" speed={4} />
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light text-[#1A1A18] tracking-[-0.03em] leading-tight">
              &ldquo;You don't have to live <span className="font-serif italic font-normal text-stone-500">with the pain.&rdquo;</span>
            </h2>

            <div className="space-y-4 text-stone-600 text-base sm:text-lg font-light leading-relaxed">
              <p>
                When someone walks into my clinic in Mumbai, I don't just see a bad back or stiff knee. I see a person who hasn't slept in months &mdash; worried about surgery and exhausted by daily painkillers.
              </p>
              <p>
                For over 15 years, our promise has been simple: listen with care, locate the trapped nerve, and release it gently through natural meridian science. No incisions, no synthetic drugs.
              </p>
              <p>
                Whether you want an honest second opinion on your MRI or you're ready to heal &mdash; you are always welcome here.
              </p>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Magnet padding={25} magnetStrength={2.5}>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#1A1A18] hover:bg-stone-800 text-white text-xs sm:text-sm font-medium tracking-wide shadow-sm active:scale-95 transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Message Yogesh Sir Personally</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
                </a>
              </Magnet>

              <Magnet padding={20} magnetStrength={2.0}>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-transparent hover:bg-stone-100 text-stone-800 text-xs sm:text-sm font-medium border border-stone-300 transition-all active:scale-95"
                >
                  <span>Read Full Story</span>
                </Link>
              </Magnet>
            </div>

            <div className="pt-6 border-t border-stone-200/70 flex items-center justify-between text-xs text-stone-400 font-light">
              <span>Yogesh Sir &middot; Acupressure Master</span>
              <span>15+ Years Clinical Practice &middot; Mumbai</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
