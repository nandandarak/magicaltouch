import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, ArrowUpRight } from 'lucide-react';
import { SpotlightCard, ShinyText, Magnet, BlurText } from '../components/reactbits';

const STORIES = [
  {
    name: 'Rohit Jain',
    location: 'Mumbai',
    condition: 'Severe Back Pain',
    story: 'Struggled 3+ years with lumbar pain and advised spinal fusion. Acupressure unlocked the spasm in 6 visits — pain has never returned.',
    quote: 'We tried everything: physiotherapy, orthopedics, acupuncture. Only Acupressure actually worked. My pain is completely gone.',
    outcome: 'Avoided Spinal Fusion',
  },
  {
    name: 'Mrs. Kinjal Gada',
    location: 'Ghatkopar',
    condition: 'Knee Osteoarthritis',
    story: 'Wore restrictive knee caps for 2 straight years. With gentle joint reflexology, her knee fluid circulation was restored.',
    quote: 'I could barely stand. Now I walk freely without pain and can climb the stairs in my building with zero support.',
    outcome: 'No Knee Caps or Surgery',
  },
  {
    name: 'Mr. Devendra Garg',
    location: 'Mumbai',
    condition: "Parkinson's Support",
    story: 'Suffering from progressive balance loss and tremors. Neuro-vascular balancing awakened dormant motor signals in 5 sessions.',
    quote: 'After just 5 sessions with Yogesh ji, I stood stably and started walking with a stick independently.',
    outcome: 'Walks Independently',
  },
  {
    name: 'Mrs. Chandrakala Prasad',
    location: 'Mumbai',
    condition: 'Full-Body Muscle Pain',
    story: 'Years of sleepless nights, somatic fatigue, and muscle tension resolved through gentle full-body meridian harmonization.',
    quote: 'Day by day I improved. It is gentle, non-invasive, and gave me back deep, peaceful sleep without medicines.',
    outcome: 'Sleepless Agony Ended',
  },
  {
    name: 'Anand Mehta',
    location: 'Bandra',
    condition: 'Cervical Spondylosis',
    story: '18 months of desk-job neck stiffness and dizzy spells cleared by releasing C5-C6 cervical nerve roots.',
    quote: 'The tingling in my fingers and head dizziness disappeared in 3 visits. Truly a magical touch.',
    outcome: '100% Neck Mobility',
  },
  {
    name: 'Hitesh D.',
    location: 'Mumbai',
    condition: 'Chronic Acidity & Navi Shift',
    story: '5 years of severe burning acid reflux and daily medication cured by re-aligning his displaced abdominal Navi pulse.',
    quote: 'I stopped all antacids. My digestion is back to normal and I can eat with joy. Navi realignment is pure science.',
    outcome: 'Zero Antacids Needed',
  },
];

export default function TestimonialsPage() {
  return (
    <div className="pt-24 bg-[#FAF9F6] min-h-screen">
      
      {/* Header — Short & Sweet */}
      <section className="py-20 sm:py-28 bg-white border-b border-stone-200/60">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-4">
          <div className="inline-block">
            <ShinyText
              text="REAL RECOVERIES • REAL PEOPLE"
              speed={4}
              className="text-xs font-mono tracking-widest text-stone-500 uppercase font-medium"
            />
          </div>

          <h1 className="text-4xl sm:text-6xl font-light text-[#1A1A18] tracking-[-0.03em] leading-tight">
            Stories of <span className="font-serif italic font-normal text-stone-500">healing.</span>
          </h1>

          <p className="text-stone-600 text-base sm:text-lg font-light leading-relaxed max-w-xl mx-auto">
            Real Mumbai patients who faced surgery, lived on painkillers, and found lasting freedom through gentle Acupressure.
          </p>
        </div>
      </section>

      {/* Trust Numbers */}
      <section className="py-12 bg-white border-b border-stone-200/60">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl sm:text-4xl font-light text-[#1A1A18] font-serif italic">15+</div>
              <div className="text-[11px] font-mono uppercase text-stone-400 mt-1">Years Practice</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-light text-[#1A1A18] font-serif italic">94%</div>
              <div className="text-[11px] font-mono uppercase text-stone-400 mt-1">Surgery Avoided</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-light text-[#1A1A18] font-serif italic">1,000+</div>
              <div className="text-[11px] font-mono uppercase text-stone-400 mt-1">Patients Relieved</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-light text-[#1A1A18] font-serif italic">0</div>
              <div className="text-[11px] font-mono uppercase text-stone-400 mt-1">Side Effects</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Vitality Banner */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <div className="rounded-[36px] overflow-hidden bg-white border border-stone-200/80 shadow-sm grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-5 h-72 sm:h-96 lg:h-full relative overflow-hidden bg-stone-100">
              <img
                src="/images/patient_vitality.jpg"
                alt="Patient walking pain-free"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="lg:col-span-7 p-8 sm:p-14 space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-stone-400 block">
                The Goal of Every Session
              </span>
              <h2 className="text-3xl sm:text-4xl font-light text-[#1A1A18] leading-tight">
                To help you walk, bend, and live without thinking about pain.
              </h2>
              <p className="text-stone-600 text-sm sm:text-base font-light leading-relaxed">
                When chronic nerve compression lifts, everyday joys return &mdash; morning walks along the sea, playing with grandchildren, and peaceful unbroken sleep.
              </p>
              <div className="pt-2">
                <Magnet magnetStrength={0.25} padding={20}>
                  <a
                    href="https://wa.me/919967321313?text=Hi%20Yogesh%20Sir%2C%20I%20would%20like%20to%20consult%20regarding%20Acupressure%20treatment."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1A1A18] hover:bg-stone-800 text-white text-xs sm:text-sm font-medium tracking-wide shadow-md active:scale-95 transition-all cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Start Your Recovery</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
                  </a>
                </Magnet>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stories Grid with React Bits SpotlightCard */}
      <section className="pb-24 sm:pb-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {STORIES.map((item, idx) => (
              <motion.div
                key={idx}
                layout
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
              >
                <SpotlightCard
                  spotlightColor="rgba(217, 119, 6, 0.12)"
                  className="p-8 flex flex-col justify-between space-y-6 h-full shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-stone-400">
                        {item.location} &bull; {item.condition}
                      </span>
                      <span className="text-[11px] font-medium text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/60">
                        {item.outcome}
                      </span>
                    </div>

                    <h3 className="text-xl font-light text-[#1A1A18] tracking-tight">
                      {item.name}
                    </h3>

                    <p className="text-stone-600 text-xs sm:text-sm font-light leading-relaxed">
                      {item.story}
                    </p>

                    <div className="pt-3 border-t border-stone-100 font-serif italic text-xs sm:text-sm text-stone-700 leading-relaxed">
                      &ldquo;{item.quote}&rdquo;
                    </div>
                  </div>

                  <div className="pt-4 border-t border-stone-100/80 flex items-center justify-between text-xs text-stone-400">
                    <span className="font-mono">Verified Recovery</span>
                    <span className="text-stone-900 font-medium font-serif italic">Mumbai, IN</span>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
