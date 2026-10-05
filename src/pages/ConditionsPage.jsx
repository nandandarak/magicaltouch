import React, { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, ArrowUpRight, Sparkles } from "lucide-react";
import { SpotlightCard, Magnet, ShinyText } from "../components/reactbits";

const CONDITIONS = [
  {
    id: "backpain",
    name: "Severe Lower Back Pain",
    category: "Spine & Sciatica",
    shortRelief: "Morning stiffness and sharp spasms when bending or sitting.",
    howItHeals:
      "Gently unblocks compressed lumbar nerve roots, restoring spinal circulation without surgery.",
    quote:
      'Rohit: "Physiotherapy didn’t work. Acupressure gave me my life back."',
    badge: "94% Avoid Surgery",
  },
  {
    id: "sciatica",
    name: "Sciatica Nerve Pain",
    category: "Spine & Sciatica",
    shortRelief:
      "Shooting electric pain traveling from the hip down into toes.",
    howItHeals:
      "Releases the piriformis muscle clamp on the L4-S1 nerve path for immediate ease.",
    quote: 'Sunil: "The shooting pain vanished completely after 4 sessions."',
    badge: "Walks Free in 4-6 Days",
  },
  {
    id: "slipdisc",
    name: "Slip Disc (L4-L5 / S1)",
    category: "Spine & Sciatica",
    shortRelief:
      "Excruciating disc bulge pressing directly against spinal nerves.",
    howItHeals:
      "Natural reflex decompression allows the displaced disc to retract and heal on its own.",
    quote:
      'Ramesh: "Doctor advised surgery in 48 hours. Acupressure healed it in 2 weeks."',
    badge: "Zero Surgical Cut",
  },
  {
    id: "cervical",
    name: "Cervical Spondylosis",
    category: "Spine & Sciatica",
    shortRelief:
      "Chronic neck stiffness, dizzy spells, and numb, tingling fingers.",
    howItHeals:
      "Unlocks upper thoracic and neck meridians, restoring full range of motion.",
    quote: 'Anand: "My dizziness and hand numbness cleared in just 3 visits."',
    badge: "100% Mobility Reset",
  },
  {
    id: "kneepain",
    name: "Severe Knee Osteoarthritis",
    category: "Joints & Mobility",
    shortRelief:
      "Agonizing bone-on-bone friction when walking or taking stairs.",
    howItHeals:
      "Stimulates synovial joint fluid secretion and realigns patella naturally.",
    quote:
      'Mrs. Gada: "Wore knee caps for 2 years. Now I climb stairs freely."',
    badge: "80+ Replacements Prevented",
  },
  {
    id: "arthritis",
    name: "Arthritis & Joint Stiffness",
    category: "Joints & Mobility",
    shortRelief: "Swollen finger joints and painful, locked morning mobility.",
    howItHeals:
      "Clears lymphatic blockages across 15+ specialized reflex points.",
    quote:
      'Meena: "My hands can open and close freely again without throbbing."',
    badge: "15+ Articular Points",
  },
  {
    id: "ghatiyavaad",
    name: "Ghatiyavaad & Gout",
    category: "Joints & Mobility",
    shortRelief:
      "Intense burning heat and uric acid crystal buildup in the foot.",
    howItHeals:
      "Stimulates kidney and spleen meridians to naturally flush trapped crystals.",
    quote: 'Kishore: "The fiery burn in my toe cooled down after session two."',
    badge: "Natural Crystal Flush",
  },
  {
    id: "bodypain",
    name: "Chronic Body Pain & Spasms",
    category: "Joints & Mobility",
    shortRelief:
      "Constant muscular ache, fatigue, and restless, sleepless nights.",
    howItHeals:
      "Full-body meridian harmonization gently drains accumulated lactic tension.",
    quote:
      'Mrs. Prasad: "Gentle, non-invasive, and gave me peaceful sleep again."',
    badge: "Deep Rest & Relief",
  },
  {
    id: "paralysis",
    name: "Paralysis & Stroke Rehab",
    category: "Neuromuscular",
    shortRelief: "Loss of voluntary movement and motor strength in limbs.",
    howItHeals:
      "Re-activates dormant neural pathways between the brain and extremities.",
    quote: 'Sanjay: "Gained back hand grip and arm strength within weeks."',
    badge: "Neural Signal Re-fire",
  },
  {
    id: "parkinsons",
    name: "Parkinson's Support",
    category: "Neuromuscular",
    shortRelief:
      "Hand tremors, muscular rigidity, and unsteady walking balance.",
    howItHeals:
      "Neuro-vascular balancing calms tremors and restores grounded posture.",
    quote:
      'Devendra: "After 5 sessions, I stood and walked independently with a stick."',
    badge: "Postural Balance",
  },
  {
    id: "footdrop",
    name: "Foot Drop",
    category: "Neuromuscular",
    shortRelief:
      "Inability to lift the front of the foot, tripping when walking.",
    howItHeals:
      "Directly stimulates the deep peroneal motor nerve to revive muscle lift.",
    quote: 'Prakash: "No more tripping over my toes; my foot responds again."',
    badge: "Motor Gait Restored",
  },
  {
    id: "acidity",
    name: "Hyper Acidity & Navel Shift",
    category: "Internal Organs",
    shortRelief: "Burning chest reflux, chronic indigestion, and gut distress.",
    howItHeals:
      "Re-centers the shifted solar plexus (Navi) pulse to balance digestion.",
    quote:
      'Hitesh: "Cured 5 years of daily burning acid in just 2 gentle visits."',
    badge: "Navi Pulse Reset",
  },
];

const CATEGORIES = [
  "All Specialties",
  "Spine & Sciatica",
  "Joints & Mobility",
  "Neuromuscular",
  "Internal Organs",
];

export default function ConditionsPage() {
  const [activeCat, setActiveCat] = useState("All Specialties");

  const filtered =
    activeCat === "All Specialties"
      ? CONDITIONS
      : CONDITIONS.filter((c) => c.category === activeCat);

  return (
    <div className="pt-24 bg-[#FAF9F6] min-h-screen">
      {/* Header — Short & Sweet */}
      <section className="py-20 sm:py-28 bg-white border-b border-stone-200/60">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 border border-stone-200/80 text-[11px] font-mono text-stone-600">
            <ShinyText
              text="TARGETED REFLEXOLOGY &middot; 100% NON-INVASIVE"
              speed={4}
            />
          </div>

          <h1 className="text-4xl sm:text-6xl font-light text-[#1A1A18] tracking-[-0.03em] leading-tight">
            Relief for your{" "}
            <span className="font-serif italic font-normal text-stone-500">
              body.
            </span>
          </h1>

          <p className="text-stone-600 text-base sm:text-lg font-light leading-relaxed max-w-xl mx-auto">
            No surgery. No harsh medicines. Just gentle, calculated pressure
            restoring your body&rsquo;s natural balance.
          </p>

          {/* Minimal Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
            {CATEGORIES.map((cat) => (
              <Magnet key={cat} padding={10}>
                <button
                  onClick={() => setActiveCat(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-medium transition-all active:scale-95 cursor-pointer ${activeCat === cat
                      ? "bg-[#1A1A18] text-white shadow-xs"
                      : "bg-stone-100 text-stone-600 hover:bg-stone-200/70"
                    }`}
                >
                  {cat}
                </button>
              </Magnet>
            ))}
          </div>
        </div>
      </section>

      {/* Sleek Conditions Grid with SpotlightCards */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
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
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-stone-400">
                        {item.category}
                      </span>
                      <span className="text-[11px] font-medium text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/60">
                        {item.badge}
                      </span>
                    </div>

                    <h2 className="text-2xl font-light text-[#1A1A18] tracking-tight group-hover:text-stone-700 transition-colors">
                      {item.name}
                    </h2>

                    <div className="space-y-2 text-xs sm:text-sm font-light leading-relaxed">
                      <p className="text-stone-500">{item.shortRelief}</p>
                      <p className="text-stone-700 font-normal">
                        {item.howItHeals}
                      </p>
                    </div>

                    {/* Patient mini quote */}
                    <div className="pt-2 border-t border-stone-100 text-xs italic font-serif text-stone-600">
                      &ldquo;{item.quote}&rdquo;
                    </div>
                  </div>

                  {/* Card Bottom Link */}
                  <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                    <span className="text-[11px] font-light text-stone-400">
                      100% Drug-Free
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

          {/* Quick Review Banner with SpotlightCard & Magnet */}
          <SpotlightCard
            spotlightColor="rgba(197, 168, 105, 0.16)"
            className="mt-16 p-8 sm:p-12 rounded-[32px] bg-white border border-stone-200/80 text-center space-y-4 shadow-xs"
          >
            <h3 className="text-2xl sm:text-3xl font-light text-[#1A1A18]">
              Have an MRI or X-Ray?
            </h3>
            <p className="text-stone-600 text-sm max-w-md mx-auto font-light leading-relaxed">
              Send your scan directly on WhatsApp. Yogaysh Lahoti will
              personally review it and tell you honestly if Acupressure can
              help.
            </p>
            <div className="pt-2 flex justify-center">
              <Magnet padding={20}>
                <a
                  href="https://wa.me/919152292507?text=Hi%20Yogaysh%20Sir%2C%20I%20have%20an%20MRI%20report%20I%20would%20like%20you%20to%20review."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#1A1A18] hover:bg-stone-800 text-white text-xs sm:text-sm font-medium tracking-wide shadow-md active:scale-95 transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Send Scan to Yogaysh Lahoti</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
                </a>
              </Magnet>
            </div>
          </SpotlightCard>
        </div>
      </section>
    </div>
  );
}
