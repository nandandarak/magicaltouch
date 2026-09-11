import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, MessageCircle } from 'lucide-react';

const YOGA_POINTS = [
  { num: '01', title: 'Toning of Body & Spinal Suppleness', desc: 'Gentle yogic postures restoring spinal flexibility, muscular balance, and relieving deep chronic rigidity.' },
  { num: '02', title: 'Cellular Rejuvenation', desc: 'Accelerating oxygenated blood flow to fatigue-prone joints and vital organs to stimulate innate self-repair.' },
  { num: '03', title: 'Mind & Body Harmony', desc: 'Harmonizing conscious breath with physical alignment to eliminate psychosomatic stress patterns.' },
  { num: '04', title: 'Pranayams for Emotional Balance', desc: 'Ancient rhythmic breathing techniques regulating the nervous system, reducing anxiety, and stabilizing emotional calm.' },
  { num: '05', title: 'Relaxation for Stress-Free Life', desc: 'Releasing chronic fight-or-flight muscular tension and easing migraine, fatigue, and insomnia naturally.' },
  { num: '06', title: 'Special Meditation for Deeper Insight', desc: 'Guided contemplative stillness fostering mental clarity, inner peace, and sustained long-term health.' },
];

export default function SleekYoga() {
  return (
    <section id="yoga" className="py-24 sm:py-32 bg-white border-t border-stone-200/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20 space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-stone-900" />
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
              Mind &middot; Body &middot; Breath
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-[#1A1A18] tracking-[-0.03em] leading-tight">
            Relax with <span className="font-serif italic font-normal text-stone-600">Yoga &amp; Meditation.</span>
          </h2>
          <p className="text-stone-600 text-base sm:text-lg font-light leading-relaxed">
            Yoga is as ancient as our civilization. Now proudly practiced and popularized around the world, it helps not just in body toning, but in calming the mind — ridding the body of psychosomatic diseases.
          </p>
        </div>

        {/* 6 Minimal Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {YOGA_POINTS.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="border-b border-stone-200/80 pb-6 space-y-2.5 group"
            >
              <span className="text-xs font-mono text-stone-400 block">{item.num}</span>
              <h3 className="text-lg sm:text-xl font-light text-[#1A1A18] tracking-tight group-hover:text-stone-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-stone-600 text-xs sm:text-sm font-light leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Action Row */}
        <div className="flex items-center gap-4">
          <a
            href="https://wa.me/919967321313?text=Hi%20Yogesh%20Sir%2C%20I%20would%20like%20to%20learn%20more%20about%20the%20Yoga%20and%20Meditation%20sessions."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#1A1A18] hover:bg-stone-800 text-white text-xs sm:text-sm font-medium tracking-wide transition-all active:scale-95"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Inquire About Yoga &amp; Meditation</span>
            <ArrowUpRight className="w-4 h-4 opacity-70" />
          </a>
        </div>

      </div>
    </section>
  );
}
