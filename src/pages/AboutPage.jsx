import React from 'react';
import { MessageCircle, Phone, ArrowUpRight } from 'lucide-react';
import { TiltedCard, SpotlightCard, Magnet, ShinyText } from '../components/reactbits';

const whatsappUrl = `https://wa.me/919967321313?text=${encodeURIComponent(
  'Hi Yogesh Sir (Magical Touch), I would like to schedule an appointment.'
)}`;

const GALLERY = [
  {
    src: '/images/healing_touch.jpg',
    title: 'Gentle Nerve Decompression',
    caption: 'Targeted thumb pressure on spinal reflex points.',
  },
  {
    src: '/images/patient_vitality.jpg',
    title: 'Pain-Free Movement',
    caption: 'Helping you walk, bend, and climb stairs without pain.',
  },
  {
    src: '/images/holistic_serenity.jpg',
    title: 'Nervous System Rest',
    caption: 'Releasing chronic muscle clamping and body fatigue.',
  },
  {
    src: '/images/sanctuary_interior.jpg',
    title: 'Quiet Healing Sanctuary',
    caption: 'A calm, unhurried space in Mumbai.',
  },
];

export default function AboutPage() {
  return (
    <div className="pt-24 bg-[#FAF9F6] min-h-screen">
      
      {/* Header — Short & Sweet */}
      <section className="py-20 sm:py-28 bg-white border-b border-stone-200/60">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 border border-stone-200/80 text-[11px] font-mono text-stone-600">
            <ShinyText text="28+ YEARS CLINICAL PRACTICE &middot; MUMBAI" speed={4} />
          </div>

          <h1 className="text-4xl sm:text-6xl font-light text-[#1A1A18] tracking-[-0.03em] leading-tight">
            Meet Yogesh Sir &amp; <span className="font-serif italic font-normal text-stone-500">Magical Touch.</span>
          </h1>

          <p className="text-stone-600 text-base sm:text-lg font-light leading-relaxed max-w-xl mx-auto pt-2">
            &ldquo;True healing doesn’t come from cutting or numbing &mdash; it comes from restoring the flow your body was designed to have.&rdquo;
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Founder Portrait with 3D Tilt */}
            <div className="lg:col-span-5 relative flex justify-center">
              <TiltedCard
                imageSrc="/images/yogesh_sir.jpg"
                altText="Yogesh Sir, Founder & Acupressure Master"
                captionText="Yogesh Sir &middot; Acupressure Master & Founder"
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

            {/* Short & Sweet Story */}
            <div className="lg:col-span-7 space-y-6">
              
              <h2 className="text-3xl sm:text-4xl font-light text-[#1A1A18] tracking-tight leading-tight">
                Saving patients from unnecessary operations since 2009.
              </h2>

              <div className="space-y-4 text-stone-600 text-base font-light leading-relaxed">
                <p>
                  Too many people with back pain or knee stiffness are told that surgery is their only option. We started Magical Touch to give patients a safer, gentle alternative.
                </p>
                <p>
                  Acupressure works with your body&rsquo;s natural nervous system. By unlocking compressed nerve roots, blood circulates again, inflammation drops, and discs decompress on their own.
                </p>
                <p className="text-stone-800 font-normal">
                  No cuts. No injections. No endless hospital stays. Just steady, lasting relief.
                </p>
              </div>

              {/* 3 Core Values */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-stone-200/80">
                <div className="space-y-1">
                  <span className="text-xs font-mono text-stone-400">01</span>
                  <h4 className="text-sm font-medium text-stone-900">Zero Surgery</h4>
                  <p className="text-xs text-stone-500 font-light">100% manual, gentle care with zero incisions.</p>
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-mono text-stone-400">02</span>
                  <h4 className="text-sm font-medium text-stone-900">Patient-First</h4>
                  <p className="text-xs text-stone-500 font-light">We take the time to hear your whole story.</p>
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-mono text-stone-400">03</span>
                  <h4 className="text-sm font-medium text-stone-900">Lasting Relief</h4>
                  <p className="text-xs text-stone-500 font-light">Addressing the root cause so pain stays away.</p>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Magnet padding={20} magnetStrength={2.2}>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#1A1A18] hover:bg-stone-800 text-white text-xs sm:text-sm font-medium tracking-wide shadow-md active:scale-95 transition-all"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Consult with Yogesh Sir</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
                  </a>
                </Magnet>

                <Magnet padding={15} magnetStrength={1.8}>
                  <a
                    href="tel:+919967321313"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-stone-50 text-stone-800 text-xs sm:text-sm font-medium border border-stone-200/80 shadow-xs"
                  >
                    <Phone className="w-4 h-4 text-stone-500" />
                    <span>+91 99673 21313</span>
                  </a>
                </Magnet>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Gallery with SpotlightCards */}
      <section className="py-20 bg-white border-t border-stone-200/60">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          
          <div className="max-w-2xl mb-12 space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-stone-400">Our Sanctuary</span>
            <h2 className="text-3xl sm:text-4xl font-light text-[#1A1A18]">
              Where healing happens.
            </h2>
            <p className="text-stone-600 text-sm font-light">
              A serene, focused therapeutic space in Mumbai designed for quiet recovery.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {GALLERY.map((item, idx) => (
              <SpotlightCard
                key={idx}
                spotlightColor="rgba(197, 168, 105, 0.16)"
                className="group rounded-3xl overflow-hidden bg-stone-50 border border-stone-200/80 shadow-xs flex flex-col justify-between transition-all hover:border-amber-700/30"
              >
                <div className="aspect-[4/3] overflow-hidden bg-stone-200">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => { e.currentTarget.src = '/images/sanctuary_interior.jpg'; }}
                  />
                </div>
                <div className="p-5 space-y-1">
                  <h3 className="text-sm font-medium text-stone-900">{item.title}</h3>
                  <p className="text-xs text-stone-500 font-light leading-relaxed">{item.caption}</p>
                </div>
              </SpotlightCard>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
