import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Activity, Sparkles, ShieldCheck, CheckCircle2, ArrowRight, Stethoscope } from 'lucide-react';
import spineImg from '../assets/spine_3d_render.png';
import kneeImg from '../assets/knee_3d_render.png';
import meridianImg from '../assets/meridian_3d_render.png';

export default function InteractiveBodyMap() {
  const [selectedRegion, setSelectedRegion] = useState('spine');

  const triggerSparkle = () => {
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#10B981', '#34D399', '#059669', '#A7F3D0'],
    });
  };

  const regions = [
    {
      id: 'spine',
      label: 'Spine & Lumbar (L4-L5)',
      icon: '🦴',
      tag: 'Spinal Decompression',
      title: 'L4-L5 Vertebrae, Sciatica & Slip Disc Relief',
      img: spineImg,
      desc: 'Precision manual decompression along L4-L5 vertebrae relieving sciatic nerve impingement, herniated disc pressure, and chronic lumbar spasms without surgery.',
      points: [
        'Relieves severe Sciatic nerve radiating pain',
        'Unblocks L4-L5 herniated disc compression',
        'Cures Cervical Spondylosis & upper back stiffness',
        '100% Non-invasive & zero medication required',
      ],
      stats: '94% Recovery Rate',
      duration: '10 - 14 Sessions Avg.',
    },
    {
      id: 'knee',
      label: 'Knee & Joint Cartilage',
      icon: '🦵',
      tag: 'Joint Fluid Restoration',
      title: 'Knee Osteoarthritis, Gathiyavaad & Patellar Mobility',
      img: kneeImg,
      desc: 'Targeting patellar friction and synovial joint fluid circulation. Helps patients discard knee caps, walk pain-free, and climb stairs without knee replacement.',
      points: [
        'Avoids costly knee replacement surgeries',
        'Restores natural synovial joint fluid movement',
        'Relieves chronic Gathiyavaad joint inflammation',
        'Allows pain-free walking & stair climbing',
      ],
      stats: '91% Avoid Surgery',
      duration: '8 - 12 Sessions Avg.',
    },
    {
      id: 'nerves',
      label: 'Motor Nerves & Limbs',
      icon: '⚡',
      tag: 'Bio-Electrical Nerve Reset',
      title: 'Paralysis Rehab, Parkinson\'s & Foot Drop Care',
      img: meridianImg,
      desc: 'Rhythmic bio-electrical pressure stimulation along dormant neural motor pathways to reduce tremors, restore limb reflexes, and improve walking independence.',
      points: [
        'Stimulates dormant motor nerve pathways',
        'Soothes Parkinson\'s tremors & muscular rigidity',
        'Peroneal nerve activation for Foot Drop correction',
        'Post-stroke paralysis limb rehabilitation',
      ],
      stats: '88% Mobility Boost',
      duration: '12 - 16 Sessions Avg.',
    },
    {
      id: 'organ',
      label: 'Abdomen & Digestive',
      icon: '🌱',
      tag: 'Organ Meridian Balance',
      title: 'Gastric Ailments, Hyper Acidity & Navi Reset',
      img: spineImg,
      desc: 'Resetting solar plexus nerve points (Navi), balancing digestive gastric secretions, and relieving chronic acid reflux through gentle abdominal meridian pressure.',
      points: [
        'Corrects abdominal Navi displacement',
        'Balances stomach acid secretion & reflux',
        'Relieves chronic bloating & indigestion',
        'Supports kidney creatinine energy balance',
      ],
      stats: '96% Relief Rate',
      duration: '6 - 8 Sessions Avg.',
    },
  ];

  const activeData = regions.find((r) => r.id === selectedRegion) || regions[0];

  const whatsappUrl = `https://wa.me/919967321313?text=${encodeURIComponent(
    `Hi Magical Touch AcuHealth, I would like to consult regarding ${activeData.title}.`
  )}`;

  return (
    <section id="body-map" className="py-24 bg-white border-y border-slate-200/70 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-3xl mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-extrabold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600 animate-spin-slow" />
            Interactive 3D AcuHealth Diagnostic Map
          </div>
          <h2 className="text-4xl sm:text-6xl font-black text-[#1D1D1F] tracking-tighter leading-[1.08] font-heading">
            Targeted Care for <span className="text-gradient-emerald">Your Exact Pain Area.</span>
          </h2>
          <p className="text-slate-600 text-lg font-medium">
            Select a body region below to explore our specialized non-invasive Acupressure protocols and recovery outcomes.
          </p>
        </motion.div>

        {/* Region Selector Tabs with Animated Sliding Pill */}
        <div className="flex flex-wrap items-center gap-3 mb-10 relative">
          {regions.map((r) => {
            const isActive = r.id === selectedRegion;
            return (
              <button
                key={r.id}
                onClick={() => {
                  setSelectedRegion(r.id);
                  triggerSparkle();
                }}
                className={`relative flex items-center gap-2.5 px-6 py-3.5 rounded-2xl text-xs sm:text-sm font-extrabold transition-all duration-200 ${
                  isActive
                    ? 'text-white shadow-lg shadow-emerald-600/25'
                    : 'bg-[#FAF8F5] text-slate-700 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTabBg"
                    className="absolute inset-0 bg-emerald-600 rounded-2xl"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{r.icon}</span>
                <span className="relative z-10">{r.label}</span>
              </button>
            );
          })}
        </div>

        {/* Animated Display Card Container */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedRegion}
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="bento-card p-8 sm:p-12 bg-[#FAF8F5] border border-slate-200/80 rounded-[36px] shadow-xl relative overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Content */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-extrabold uppercase tracking-wider">
                    {activeData.tag}
                  </span>
                  <span className="text-xs font-bold text-slate-500">
                    ⚡ {activeData.stats}
                  </span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-black text-[#1D1D1F] tracking-tight font-heading leading-tight">
                  {activeData.title}
                </h3>

                <p className="text-slate-600 text-base leading-relaxed font-medium">
                  {activeData.desc}
                </p>

                {/* Bullet Points */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                  {activeData.points.map((pt, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.08 + 0.1 }}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-slate-200/80 shadow-sm"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-xs font-bold text-slate-800 leading-snug">{pt}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Action */}
                <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                  <motion.a
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={triggerSparkle}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-emerald-600 text-white font-extrabold text-xs sm:text-sm hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-600/20"
                  >
                    <Stethoscope className="w-4 h-4" />
                    <span>Consult for {activeData.label}</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.a>

                  <span className="text-xs font-bold text-slate-500">
                    ⏱️ Expected Timeline: <strong className="text-slate-800">{activeData.duration}</strong>
                  </span>
                </div>

              </div>

              {/* Right Image Visual with Float Motion */}
              <div className="lg:col-span-5 relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="relative rounded-[28px] overflow-hidden border border-slate-200 bg-white p-3 shadow-md group"
                >
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                    src={activeData.img}
                    alt={activeData.title}
                    className="w-full h-[360px] object-cover rounded-[20px]"
                  />
                  
                  {/* Floating Metric Pill */}
                  <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-3.5 rounded-xl border border-slate-200 shadow-md flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-700">Clinical Evaluation</span>
                    <span className="text-xs font-black text-emerald-700 uppercase tracking-wider">{activeData.stats}</span>
                  </div>
                </motion.div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
