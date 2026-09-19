import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { SpotlightCard, ShinyText, Magnet, TrueFocus } from "./reactbits";

const CONDITIONS = [
  {
    id: "backpain",
    name: "Severe Back Pain",
    category: "Spine & Sciatica",
    desc: "Sedentary hours and improper posture lead to compressed lumbar discs. We decompress nerve roots gently without surgery.",
    point: "Du & Bladder Meridians",
  },
  {
    id: "sciatica",
    name: "Sciatica Nerve Pain",
    category: "Spine & Sciatica",
    desc: "Debilitating shooting pain from lower back down the sciatic nerve into thigh and foot, completely relieved by unblocking nerve pathways.",
    point: "L4-S1 & GB30 Nerve Junctions",
  },
  {
    id: "slipdisc",
    name: "Slip Disc (L4-L5 / S1)",
    category: "Spine & Sciatica",
    desc: "Intervertebral disc displacement and nerve pinching treated with gentle manual decompression to realign spinal structure.",
    point: "Spinal Decompression Reflex",
  },
  {
    id: "cervical",
    name: "Cervical Spondylosis",
    category: "Spine & Sciatica",
    desc: "Neck stiffness, radiating shoulder numbness, and headaches caused by posture or structure, cured through targeted acupressure.",
    point: "GB20 & LI4 Cervical Focus",
  },
  {
    id: "kneepain",
    name: "Severe Knee Pain",
    category: "Joints & Mobility",
    desc: "Avoid invasive knee replacement. Restoring synovial fluid circulation and patellar alignment allows patients to walk and climb stairs freely.",
    point: "ST36 & Knee Meridian Points",
  },
  {
    id: "arthritis",
    name: "Arthritis & Joint Stiffness",
    category: "Joints & Mobility",
    desc: "Our body has more than 15 specific acupressure points just for arthritis, reducing joint inflammation and morning stiffness.",
    point: "15+ Articular Points",
  },
  {
    id: "ghatiyavaad",
    name: "Ghatiyavaad & Gout",
    category: "Joints & Mobility",
    desc: "Clearing metabolic fluid stagnation and uric acid crystal buildup in joint capsules through natural meridian drainage.",
    point: "Spleen & Kidney Pathways",
  },
  {
    id: "bodypain",
    name: "Chronic Body Pain & Spasms",
    category: "Joints & Mobility",
    desc: "Relieving deep muscular trigger points, chronic somatic rigidity, and full-body tension patterns to restore natural vitality.",
    point: "Full Body Harmonization",
  },
  {
    id: "paralysis",
    name: "Paralysis & Stroke Rehab",
    category: "Neuromuscular",
    desc: "Rehabilitation of paralysis patients due to stroke is faster and more sustainable by reactivating dormant central motor pathways.",
    point: "Motor Pathway Reactivation",
  },
  {
    id: "parkinsons",
    name: "Parkinson's Support",
    category: "Neuromuscular",
    desc: "Where traditional therapies may not work, Acupressure works wonders for Parkinson's tremor management and walking stability.",
    point: "Neuro-Vascular Equilibrium",
  },
  {
    id: "footdrop",
    name: "Foot Drop",
    category: "Neuromuscular",
    desc: "Acupressure on trigger points along peroneal nerve branches restores motor signal flow and normal walking gait.",
    point: "Peroneal Nerve Stimulation",
  },
  {
    id: "acidity",
    name: "Hyper Acidity & Gastric",
    category: "Internal Organs",
    desc: "Long-term cure of gastric reflux and hyperacidity caused by erratic meals and stress, resetting abdominal nerve tone and Navi alignment.",
    point: "Ren Meridian & Solar Plexus",
  },
  {
    id: "creatinine",
    name: "Creatinine & Kidney Balance",
    category: "Internal Organs",
    desc: "Unblocking vital renal meridians using calculated pressure helps alleviate kidney ailments and supports natural filtration vitality.",
    point: "Kidney Meridian (KI1-KI3)",
  },
  {
    id: "frozenshoulder",
    name: "Frozen Shoulder",
    category: "Joint & Mobility",
    desc: "Chronic inflammation and stiffness lock up the glenohumeral joint. We restore range of motion and relieve deep capsule pain smoothly without invasive injections.",
    point: "Large Intestine",
  },
  {
    id: "varicoseveins",
    name: "Varicose Veins",
    category: "Vascular & Circulation",
    desc: "Weakened venous valves cause poor blood pooling and swelling in lower limbs. We stimulate vascular return to minimize heavy, painful, or twisting veins.",
    point: "Spleen & Bladder Balance",
  },
];

const CATEGORIES = [
  "All",
  "Spine & Sciatica",
  "Joints & Mobility",
  "Neuromuscular",
  "Internal Organs",
];

export default function SleekConditions() {
  const [activeCat, setActiveCat] = useState("All");

  const filtered =
    activeCat === "All"
      ? CONDITIONS
      : CONDITIONS.filter((c) => c.category === activeCat);

  return (
    <section
      id="conditions"
      className="py-24 sm:py-32 bg-white border-t border-stone-200/60"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 border border-stone-200/80 text-[11px] font-mono text-stone-600">
              <ShinyText
                text="100% DRUG-FREE &middot; SURGERY-ALTERNATIVE"
                speed={4}
              />
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-[#1A1A18] tracking-[-0.03em] leading-tight">
              Conditions We{" "}
              <span className="font-serif italic font-normal text-stone-500">
                Heal.
              </span>
            </h2>
            <div className="text-stone-600 text-base sm:text-lg font-light leading-relaxed">
              Every condition is resolved by restoring natural flow:
              <span className="ml-2 font-medium text-stone-900">
                <TrueFocus
                  sentence="Spine Joints Nerves Vitality"
                  manualMode={false}
                  borderColor="#C5A869"
                  glowColor="rgba(197, 168, 105, 0.28)"
                  animationDuration={0.45}
                  pauseBetweenAnimations={2.0}
                />
              </span>
            </div>
          </div>

          {/* Minimal Tabs */}
          <div className="flex flex-wrap gap-2 self-start md:self-end">
            {CATEGORIES.map((cat) => (
              <Magnet key={cat} padding={10}>
                <button
                  onClick={() => setActiveCat(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-medium transition-all active:scale-95 cursor-pointer ${
                    activeCat === cat
                      ? "bg-[#1A1A18] text-white shadow-sm"
                      : "bg-stone-100 text-stone-600 hover:bg-stone-200/70"
                  }`}
                >
                  {cat}
                </button>
              </Magnet>
            ))}
          </div>
        </div>

        {/* Minimal Grid with SpotlightCard */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filtered.map((item, idx) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: idx * 0.03 }}
              className="h-full"
            >
              <SpotlightCard
                spotlightColor="rgba(197, 168, 105, 0.16)"
                className="editorial-card p-8 flex flex-col justify-between space-y-6 group h-full transition-all hover:border-amber-700/30"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono text-stone-400 uppercase tracking-wider">
                      {item.category}
                    </span>
                    <span className="text-[11px] font-medium text-stone-500">
                      {item.point}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-light text-[#1A1A18] tracking-tight group-hover:text-stone-700 transition-colors">
                    {item.name}
                  </h3>

                  <p className="text-stone-600 text-xs sm:text-sm font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                  <span className="text-[11px] font-light text-stone-400">
                    100% Non-Invasive
                  </span>

                  <Magnet padding={12}>
                    <a
                      href={`https://wa.me/919152292507?text=${encodeURIComponent(
                        `Hi Yogaysh Lahoti, I would like to consult regarding Acupressure treatment for ${item.name}.`,
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-stone-100/80 hover:bg-[#1A1A18] text-stone-800 hover:text-white text-xs font-medium transition-all shadow-2xs"
                    >
                      <span>Consult</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </Magnet>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
