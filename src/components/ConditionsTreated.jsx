import React, { useState } from 'react';
import {
  CheckCircle2,
  MessageCircle,
  Clock,
  Sparkles,
  ChevronRight,
  Stethoscope,
} from 'lucide-react';

const CATEGORIES = ['All', 'Spine & Joint', 'Neurological', 'Internal Balance'];

const CONDITIONS_DATA = [
  {
    id: 'sciatica',
    name: 'Sciatica',
    category: 'Spine & Joint',
    subtitle: 'Lower Back to Leg Radiating Pain',
    symptoms: 'Sharp shooting pain from lower back down the sciatic nerve into thigh & foot.',
    acupressureFocus: 'Unblocks compressed L4-S1 nerve roots & GB30/BL54 pressure points.',
    recoveryTimeline: 'Significant relief within 10–15 sessions',
    whatsappMessage: 'Hi Magical Touch AcuHealth, I am suffering from Sciatica leg pain and would like to consult for Acupressure treatment.',
    tagColor: 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10',
  },
  {
    id: 'slip-disc',
    name: 'Slip Disc (L4-L5 / L5-S1)',
    category: 'Spine & Joint',
    subtitle: 'Herniated Disc & Nerve Pinching',
    symptoms: 'Inability to bend forward, localized lumbar stiffness, severe radiculopathy.',
    acupressureFocus: 'Decompresses intervertebral discs & realigns lumbar alignment.',
    recoveryTimeline: '80–90% mobility restoration in 3–4 weeks',
    whatsappMessage: 'Hi Magical Touch AcuHealth, I have a Slip Disc (L4-L5) diagnosis and want to consult regarding non-surgical Acupressure healing.',
    tagColor: 'border-teal-500/30 text-teal-400 bg-teal-500/10',
  },
  {
    id: 'severe-back-pain',
    name: 'Severe Back Pain',
    category: 'Spine & Joint',
    subtitle: 'Chronic Lumbar Stiffness & Discomfort',
    symptoms: 'Inability to sit or stand for extended periods, constant lower back ache.',
    acupressureFocus: 'Targets Du Meridian & Bladder meridian spinal pressure points.',
    recoveryTimeline: 'Rapid pain reduction in 5–8 sessions',
    whatsappMessage: 'Hi Magical Touch AcuHealth, I am suffering from Severe Back Pain and want to schedule an Acupressure consultation.',
    tagColor: 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10',
  },
  {
    id: 'body-pain',
    name: 'Body Pain & Spasms',
    category: 'Spine & Joint',
    subtitle: 'Widespread Muscular Rigidity & Fatigue',
    symptoms: 'Generalized ache, muscle stiffness, fatigue, and trigger point soreness.',
    acupressureFocus: 'Full-body acupuncture point release and energetic flow enhancement.',
    recoveryTimeline: 'Immediate relaxation and relief within 3–5 sessions',
    whatsappMessage: 'Hi Magical Touch AcuHealth, I am experiencing chronic Body Pain & Spasms and want to consult for Acupressure therapy.',
    tagColor: 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10',
  },
  {
    id: 'spondylosis',
    name: 'Cervical & Lumbar Spondylosis',
    category: 'Spine & Joint',
    subtitle: 'Neck Stiffness & Spinal Degeneration',
    symptoms: 'Neck pain, shoulder numbness, headaches, and restricted spinal movement.',
    acupressureFocus: 'Stimulates cervical GB20 & LI4 points to relieve nerve impingement.',
    recoveryTimeline: 'Relief from neck stiffness in 7–10 days',
    whatsappMessage: 'Hi Magical Touch AcuHealth, I would like to consult for Cervical/Lumbar Spondylosis Acupressure therapy.',
    tagColor: 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10',
  },
  {
    id: 'knee-pain',
    name: 'Knee Pain',
    category: 'Spine & Joint',
    subtitle: 'Joint Stiffness & Difficulty Walking',
    symptoms: 'Difficulty climbing stairs, knee swelling, clicking sounds, and knee cap pain.',
    acupressureFocus: 'Activates ST36 & SP9 knee pressure points to restore synovial fluid flow.',
    recoveryTimeline: 'Walk without knee cap or support in 3–6 weeks',
    whatsappMessage: 'Hi Magical Touch AcuHealth, I am looking for Acupressure treatment for Knee Pain to avoid surgery.',
    tagColor: 'border-teal-500/30 text-teal-400 bg-teal-500/10',
  },
  {
    id: 'arthritis-ghatiyavaad',
    name: 'Arthritis & Ghatiyavaad',
    category: 'Spine & Joint',
    subtitle: 'Gout, Uric Acid & Joint Inflammation',
    symptoms: 'Swollen joints, morning stiffness, burning sensation in small and large joints.',
    acupressureFocus: 'Detoxifies meridian pathways and balances joint metabolic fluid.',
    recoveryTimeline: 'Inflammation reduction within 10–14 sessions',
    whatsappMessage: 'Hi Magical Touch AcuHealth, I want to consult for Arthritis and Ghatiyavaad Acupressure treatment.',
    tagColor: 'border-teal-500/30 text-teal-400 bg-teal-500/10',
  },
  {
    id: 'paralysis',
    name: 'Paralysis & Stroke Rehab',
    category: 'Neurological',
    subtitle: 'Post-Stroke Nerve & Muscle Recovery',
    symptoms: 'Loss of motor function, muscle weakness, facial or limb numbness after stroke.',
    acupressureFocus: 'Re-activates dormant central nervous pathways & improves limb blood flow.',
    recoveryTimeline: 'Gradual motor control gains over 30–60 sessions',
    whatsappMessage: 'Hi Magical Touch AcuHealth, I want to consult for Paralysis / Stroke rehabilitation using Acupressure therapy.',
    tagColor: 'border-cyan-500/30 text-cyan-400 bg-cyan-500/10',
  },
  {
    id: 'parkinsons',
    name: "Parkinson's Support",
    category: 'Neurological',
    subtitle: 'Tremor & Movement Coordination Support',
    symptoms: 'Resting tremors, body rigidity, slow voluntary movement, loss of balance.',
    acupressureFocus: 'Calms hyperactive nervous system and improves neuromuscular impulse transmission.',
    recoveryTimeline: 'Improved stability and reduced tremors with consistent therapy',
    whatsappMessage: "Hi Magical Touch AcuHealth, I want to consult for Parkinson's neuromuscular Acupressure management.",
    tagColor: 'border-cyan-500/30 text-cyan-400 bg-cyan-500/10',
  },
  {
    id: 'foot-drop',
    name: 'Foot Drop',
    category: 'Neurological',
    subtitle: 'Peroneal Nerve & Ankle Weakness',
    symptoms: 'Inability to lift the front part of the foot, causing foot dragging while walking.',
    acupressureFocus: 'Direct stimulation of peroneal nerve roots and GB34 ankle point.',
    recoveryTimeline: 'Foot lift recovery in 15–25 sessions',
    whatsappMessage: 'Hi Magical Touch AcuHealth, I am seeking Acupressure treatment for Foot Drop and peroneal nerve stimulation.',
    tagColor: 'border-cyan-500/30 text-cyan-400 bg-cyan-500/10',
  },
  {
    id: 'gastric',
    name: 'Gastric & Digestive Disorders',
    category: 'Internal Balance',
    subtitle: 'Stomach Cramps & Solar Plexus Imbalance',
    symptoms: 'Chronic indigestion, bloating, gas discomfort, and solar plexus (Navi) displacement.',
    acupressureFocus: 'Navi realignment & CV12 stomach meridian pressure stimulation.',
    recoveryTimeline: 'Digestion normalization in 5–10 sessions',
    whatsappMessage: 'Hi Magical Touch AcuHealth, I would like to consult for Gastric disorders and Acupressure digestion therapy.',
    tagColor: 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10',
  },
  {
    id: 'hyper-acidity',
    name: 'Hyper Acidity',
    category: 'Internal Balance',
    subtitle: 'Acid Reflux & Heartburn Relief',
    symptoms: 'Burning chest sensation, sour reflux, acid irritation after meals.',
    acupressureFocus: 'Harmonizes Stomach-Liver meridians and cools internal heat.',
    recoveryTimeline: 'Relief within 3–7 sessions',
    whatsappMessage: 'Hi Magical Touch AcuHealth, I want to consult for Hyper Acidity and acid reflux Acupressure therapy.',
    tagColor: 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10',
  },
  {
    id: 'creatinine',
    name: 'Creatinine & Kidney Meridian',
    category: 'Internal Balance',
    subtitle: 'Holistic Kidney Function Support',
    symptoms: 'High serum creatinine levels, fluid retention, lower back heaviness.',
    acupressureFocus: 'Kidney KI1 & KI3 acupoints stimulation to boost metabolic renal balance.',
    recoveryTimeline: 'Supportive meridian balance over regular sessions',
    whatsappMessage: 'Hi Magical Touch AcuHealth, I want to consult for Creatinine & Kidney Meridian Acupressure therapy.',
    tagColor: 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10',
  },
];

export default function ConditionsTreated() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredConditions =
    activeCategory === 'All'
      ? CONDITIONS_DATA
      : CONDITIONS_DATA.filter((item) => item.category === activeCategory);

  return (
    <section id="conditions-detail" className="py-24 bg-[#F5F5F7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-4">
            <Stethoscope className="w-3.5 h-3.5 text-emerald-600" />
            Specialized Acupressure Care
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#1D1D1F] tracking-tight font-heading mb-4">
            Conditions We <span className="text-gradient-emerald">Effectively Treat</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-medium">
            Targeted clinical acupressure protocols designed to solve severe nerve compression, joint degeneration, and systemic imbalances without medications or surgery.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-12">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full font-bold text-xs sm:text-sm transition-all duration-200 ${
                  isActive
                    ? 'bg-[#1D1D1F] text-white shadow-md'
                    : 'bg-white text-slate-600 hover:text-[#1D1D1F] border border-slate-200'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Conditions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredConditions.map((condition) => {
            const waUrl = `https://wa.me/919967321313?text=${encodeURIComponent(
              condition.whatsappMessage
            )}`;

            return (
              <div
                key={condition.id}
                className="bento-card p-6 flex flex-col justify-between relative group"
              >
                <div>
                  {/* Category Tag */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200"
                    >
                      {condition.category}
                    </span>
                    <Sparkles className="w-4 h-4 text-emerald-600 opacity-60 group-hover:opacity-100 transition-opacity" />
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-black text-[#1D1D1F] mb-1 group-hover:text-emerald-700 transition-colors font-heading">
                    {condition.name}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium mb-4">{condition.subtitle}</p>

                  {/* Symptoms & Acupressure Focus */}
                  <div className="space-y-3 mb-6 border-t border-slate-100 pt-4">
                    <div>
                      <span className="text-xs font-bold text-slate-800 block mb-1">
                        Common Symptoms:
                      </span>
                      <p className="text-xs text-slate-600 leading-relaxed font-medium">{condition.symptoms}</p>
                    </div>

                    <div>
                      <span className="text-xs font-bold text-emerald-700 block mb-1">
                        Acupressure Action:
                      </span>
                      <p className="text-xs text-slate-700 leading-relaxed font-medium">
                        {condition.acupressureFocus}
                      </p>
                    </div>

                    <div className="flex items-center gap-1.5 pt-1 text-[11px] text-emerald-700 font-bold">
                      <Clock className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Timeline: {condition.recoveryTimeline}</span>
                    </div>
                  </div>
                </div>

                {/* Direct WhatsApp CTA Button */}
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full bg-emerald-600 text-white text-xs font-extrabold shadow-sm hover:bg-emerald-700 transition-all duration-200 group/btn"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Consult for {condition.name}</span>
                  <ChevronRight className="w-3.5 h-3.5 opacity-80 group-hover/btn:translate-x-0.5 transition-transform" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
