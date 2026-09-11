import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Activity, ShieldCheck, Zap, HeartPulse, Sparkles, ArrowUpRight, Flame, CheckCircle2, MessageCircle, X } from 'lucide-react';

const whatsappUrl = (condition) =>
  `https://wa.me/919967321313?text=${encodeURIComponent(
    `Hi Yogesh Sir (Magical Touch), I would like to consult regarding Acupressure treatment for ${condition}.`
  )}`;

const ALL_CONDITIONS = [
  {
    id: 'backpain',
    name: 'Severe Back Pain',
    category: 'Spine & Disc',
    img: '/clinic_media/magical-touch-backpain.jpg',
    excerpt: 'Long sedentary hours, improper posture can lead to back pain. It is effectively cured through Acupressure without surgery.',
    highlights: ['Non-surgical lumbar decompression', 'Posture strain release', 'Rapid pain reduction'],
    meridian: 'Du Meridian & Bladder Channel',
  },
  {
    id: 'sciatica',
    name: 'Sciatica Pain',
    category: 'Spine & Disc',
    img: '/clinic_media/magical-touch-sciatica.jpg',
    excerpt: 'Sciatica a pain caused by pressure on sciatic nerve radiating into thigh and foot can be cured through Acupressure.',
    highlights: ['Releases sciatic nerve entrapment', 'Stops shooting leg pain', 'Restores comfortable sitting & walking'],
    meridian: 'GB30 & BL54 Nerve Junctions',
  },
  {
    id: 'slip-disc',
    name: 'Slip Disc (L4-L5 / S1)',
    category: 'Spine & Disc',
    img: '/clinic_media/magical-touch-slip-disc.jpg',
    excerpt: 'Apart from rest, Acupressure helps stimulate relief and rapid recovery from slip disc without surgical cutting.',
    highlights: ['Intervertebral disc decompression', 'Lumbar alignment restoration', 'Avoid invasive surgery'],
    meridian: 'Spinal Nerve Root Decompression',
  },
  {
    id: 'cervical',
    name: 'Cervical Spondylosis',
    category: 'Spine & Disc',
    img: '/clinic_media/magical-touch-cervical-spondylosis.jpg',
    excerpt: 'Cervical Spondylosis, caused by bad body posture, phone/desk strain or structure can be cured through Acupressure.',
    highlights: ['Neck stiffness & headache relief', 'Shoulder numbness release', 'Restores full head rotation'],
    meridian: 'GB20 & LI4 Cervical Reflexes',
  },
  {
    id: 'knee-pain',
    name: 'Severe Knee Pain',
    category: 'Joints & Mobility',
    img: '/clinic_media/magical-touch-knee-pain.jpg',
    excerpt: 'A patient should explore Acupressure techniques for knee pain before undergoing surgery. Proven to discard knee caps.',
    highlights: ['Avoid total knee replacement', 'Synovial fluid circulation', 'Walk & climb stairs pain-free'],
    meridian: 'ST36, SP9 & Xiyan Knee Points',
  },
  {
    id: 'arthritis',
    name: 'Arthritis Care',
    category: 'Joints & Mobility',
    img: '/clinic_media/magical-touch-arthritis.jpg',
    excerpt: 'Our body has more than 15 acupressure points just for the treatment of arthritis, a debilitating condition affecting many.',
    highlights: ['15+ specific arthritis points', 'Reduces morning stiffness', 'Soothes inflamed joint capsules'],
    meridian: 'Poly-Articular Meridian Release',
  },
  {
    id: 'ghatiyavaad',
    name: 'Ghatiyavaad & Gout',
    category: 'Joints & Mobility',
    img: '/clinic_media/magical-touch-ghatiyavaad.jpg',
    excerpt: 'Debilitating uric acid crystal buildup and severe joint rheumatism are effectively mitigated with targeted acupressure.',
    highlights: ['Metabolic fluid clearance', 'Uric acid inflammation relief', 'Restores toe & finger mobility'],
    meridian: 'Spleen & Kidney Meridian Detox',
  },
  {
    id: 'body-pain',
    name: 'Chronic Body Pain',
    category: 'Joints & Mobility',
    img: '/clinic_media/magical-touch-body-pain.jpg',
    excerpt: 'Continuous body pain can be debilitating. Acupressure helps in relieving stress points, muscular spasms and whole-body tension.',
    highlights: ['Deep muscular relaxation', 'Eliminates chronic trigger knots', 'Restores vitality and restful sleep'],
    meridian: 'Full Body Meridian Harmonization',
  },
  {
    id: 'paralysis',
    name: 'Paralysis & Stroke Rehab',
    category: 'Neuromuscular',
    img: '/clinic_media/magical-touch-paralysis.jpg',
    excerpt: 'Rehabilitation of paralysis patients due to stroke is much easier, faster and more sustainable with acupressure.',
    highlights: ['Re-activates motor nerve pathways', 'Accelerates limb mobility recovery', 'Gentle non-invasive stimulation'],
    meridian: 'Central Nervous Motor Pathways',
  },
  {
    id: 'parkinson',
    name: "Parkinson's Disease",
    category: 'Neuromuscular',
    img: '/clinic_media/magical-touch-parkinson.jpg',
    excerpt: "Where traditional therapies may not work Acupressure works wonders for Parkinson's disease tremor and walking stability.",
    highlights: ['Tremor & rigidity management', 'Walking stability improvements', 'Documented in clinic cases'],
    meridian: 'Neuro-Vascular Equilibrium',
  },
  {
    id: 'footdrop',
    name: 'Foot Drop',
    category: 'Neuromuscular',
    img: '/clinic_media/magical-touch-footdrop.jpg',
    excerpt: 'Acupressure on trigger points along peroneal nerve branches helps cure the debilitating problem of footdrop.',
    highlights: ['Stimulates peroneal nerve motor signals', 'Restores ankle dorsiflexion', 'Prevents tripping & gait imbalance'],
    meridian: 'Peroneal & Tibial Nerve Points',
  },
  {
    id: 'gastric',
    name: 'Hyper Acidity & Gastric',
    category: 'Internal Organs',
    img: '/clinic_media/magical-touch-hyper-acidity.jpg',
    excerpt: 'Acupressure helps in long term cure of acidity which is caused by irregular eating and stress, resetting abdominal nerve tone.',
    highlights: ['Cures acid reflux & heartburn', 'Navi / Solar Plexus centering', 'Digestive metabolic harmony'],
    meridian: 'Ren Meridian & CV12 Abdominal Core',
  },
  {
    id: 'creatinine',
    name: 'Creatinine & Kidney Balance',
    category: 'Internal Organs',
    img: '/clinic_media/magical-touch-creatinine.jpg',
    excerpt: 'By unblocking meridians using calculated pressure, acupressure therapists help cure kidney ailments and support renal health.',
    highlights: ['Aids natural filtration meridian', 'Supports kidney organ vitality', 'Reduces water retention & swelling'],
    meridian: 'Kidney Meridian (KI1 - KI3 Points)',
  },
];

const CATEGORIES = ['All', 'Spine & Disc', 'Joints & Mobility', 'Neuromuscular', 'Internal Organs'];

export default function BentoServices() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModal, setActiveModal] = useState(null);
  const shouldReduceMotion = useReducedMotion();

  const filtered =
    selectedCategory === 'All'
      ? ALL_CONDITIONS
      : ALL_CONDITIONS.filter((c) => c.category === selectedCategory);

  return (
    <section id="conditions" className="py-24 bg-[#F5F5F7] relative border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-emerald-700 text-xs font-bold uppercase tracking-wider shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              Comprehensive Care Directory
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#1D1D1F] tracking-tighter leading-[1.08] font-heading">
              12 Clinical Conditions We <span className="text-gradient-emerald">Heal.</span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg font-medium leading-relaxed">
              Every condition treated at Magical Touch Mumbai utilizes authentic ancient Acupressure trigger science — 100% non-invasive, drug-free, and economical.
            </p>
          </div>

          <a
            href={`https://wa.me/919967321313?text=${encodeURIComponent(
              'Hi Yogesh Sir, I would like to check if my specific condition can be treated with Acupressure.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#1D1D1F] text-white text-xs font-extrabold tracking-wide hover:bg-black active:scale-95 transition-all shadow-md shrink-0 self-start md:self-end"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>Ask About Your Condition</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
          </a>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-all active:scale-95 ${
                selectedCategory === cat
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/25'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/80'
              }`}
            >
              {cat}
              {cat !== 'All' && (
                <span className="ml-2 text-[10px] opacity-75">
                  ({ALL_CONDITIONS.filter((c) => c.category === cat).length})
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Conditions Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
              className="bento-card group flex flex-col justify-between overflow-hidden bg-white border border-slate-200/80 rounded-[28px] hover:shadow-xl hover:border-emerald-500/30 transition-all duration-300"
            >
              {/* Photo Area with Tag */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.src = '/clinic_media/about.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-extrabold uppercase tracking-wider text-emerald-800 shadow-sm">
                  {item.category}
                </span>
                <span className="absolute bottom-3 left-3 text-white text-xs font-bold flex items-center gap-1.5 drop-shadow">
                  <Activity className="w-3.5 h-3.5 text-emerald-400" />
                  {item.meridian}
                </span>
              </div>

              {/* Text Info */}
              <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-xl font-black text-[#1D1D1F] font-heading group-hover:text-emerald-700 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium line-clamp-3">
                    {item.excerpt}
                  </p>
                </div>

                {/* Highlights */}
                <div className="space-y-1.5 pt-2 border-t border-slate-100">
                  {item.highlights.map((hl, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="pt-3 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setActiveModal(item)}
                    className="text-xs font-extrabold text-slate-700 hover:text-emerald-700 transition-colors"
                  >
                    View Details →
                  </button>
                  <a
                    href={whatsappUrl(item.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-emerald-50 hover:bg-emerald-600 text-emerald-700 hover:text-white text-xs font-extrabold border border-emerald-200 transition-all active:scale-95"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Consult</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Modal Detail View */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-[32px] max-w-lg w-full overflow-hidden shadow-2xl border border-slate-200 relative animate-scale-up">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/80 hover:bg-white text-slate-700 flex items-center justify-center shadow-md backdrop-blur-md"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-[16/9]">
              <img src={activeModal.img} alt={activeModal.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
                <h3 className="text-2xl font-black text-white font-heading">{activeModal.name}</h3>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block mb-1">
                  Clinical Overview &amp; Alternate Cure
                </span>
                <p className="text-slate-600 text-sm leading-relaxed">{activeModal.excerpt}</p>
              </div>

              <div className="bg-[#F5F5F7] p-4 rounded-2xl space-y-2">
                <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
                  Acupressure Focus Area:
                </span>
                <p className="text-xs font-semibold text-emerald-800 flex items-center gap-2">
                  <Activity className="w-4 h-4 text-emerald-600" />
                  {activeModal.meridian}
                </p>
              </div>

              <div className="flex gap-3 pt-2">
                <a
                  href={whatsappUrl(activeModal.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-emerald-600 text-white text-xs font-extrabold tracking-wide hover:bg-emerald-700 active:scale-95 shadow-md shadow-emerald-600/25 transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Consult with Yogesh Sir</span>
                </a>
                <a
                  href="tel:+919967321313"
                  className="px-4 py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-extrabold border border-slate-200 transition-all"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
