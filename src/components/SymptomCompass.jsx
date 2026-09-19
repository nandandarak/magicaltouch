import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Phone, ArrowUpRight } from "lucide-react";
import { SpotlightCard, ShinyText, Magnet, BlurText } from "./reactbits";

/**
 * One image per condition.
 * The section auto-advances through ALL conditions every 3.5 seconds —
 * image slides out left, next slides in from right, text cross-fades.
 * User can also click any pill to jump to that condition manually.
 * Enhanced with React Bits SpotlightCard, Magnet, ShinyText, and BlurText.
 */
const SYMPTOMS = [
  {
    id: "back-sciatica",
    label: "Lower Back & Sciatica",
    question: "Shooting pain down your back, hip, or leg?",
    shortText:
      "You do not need spinal screws or lifelong painkillers. Gentle meridian pressure decompresses the root and releases deep spasms, allowing your disc to rest naturally.",
    timeline: "3–5 sessions",
    surgeryAlternative: "Avoids Spinal Fusion Surgery",
    patientStory:
      "Avoided spinal surgery after 4 sessions. Walking pain-free again. — Rohit Jain, Mumbai",
    photo: {
      src: "/images/condition_back_pain.jpg",
      alt: "Patient with lower back pain finding relief",
    },
  },
  {
    id: "knee-arthritis",
    label: "Knee Pain & Stiffness",
    question: "Knees aching, crackling, or painful on stairs?",
    shortText:
      "Before considering knee replacement surgery, targeted acupressure stimulates your body to produce fresh synovial fluid inside the joint capsule, restoring smooth, painless walking.",
    timeline: "4–6 sessions",
    surgeryAlternative: "Avoids Knee Replacement (TKR)",
    patientStory:
      "Discarded my knee brace of 2 years. I climb stairs freely now. — Kinjal G., Mumbai",
    photo: {
      src: "/images/condition_knee_pain.jpg",
      alt: "Gentle knee reflexology treatment",
    },
  },
  {
    id: "cervical-neck",
    label: "Neck Stiffness & Shoulder Knots",
    question: "Heavy shoulder knots, headaches, or tingling arms?",
    shortText:
      "Screen hours compress cervical vertebrae C4-C7, cutting off blood flow. Gentle manual pressure melts deep fascial knots, frees pinched nerves, and stops arm numbness.",
    timeline: "2–3 sessions",
    surgeryAlternative: "Avoids Injections & Daily Relaxants",
    patientStory:
      "My constant neck stiffness and dizziness vanished in 3 visits. — Anand M., Mumbai",
    photo: {
      src: "/images/condition_cervical_neck.jpg",
      alt: "Neck tension being gently released",
    },
  },
  {
    id: "neurological",
    label: "Paralysis & Parkinson's",
    question: "Dealing with post-stroke weakness or tremors?",
    shortText:
      "Your nervous system has immense self-repair ability. Rhythmic acupressure sends impulses along meridian pathways back to the brain, improving balance, grip, and stability.",
    timeline: "5–8 sessions",
    surgeryAlternative: "Natural Motor Rehabilitation",
    patientStory:
      "Started walking with a stick just 5 sessions in. Tremors reduced. — Devendra G., Mumbai",
    photo: {
      src: "/images/condition_paralysis_neuro.jpg",
      alt: "Caring therapist supporting patient recovery",
    },
  },
  {
    id: "migraine-stress",
    label: "Migraine & Deep Stress",
    question: "Pounding headaches, acid reflux, or sleeplessness?",
    shortText:
      "Your gut and solar plexus are your second brain. Gentle meridian touch resets your fight-or-flight nervous system, calming acid reflux and restoring peaceful sleep.",
    timeline: "2–4 sessions",
    surgeryAlternative: "Drug-Free Nervous Reset",
    patientStory:
      "Reset my sleep and ended 6 years of daily migraine pills. — Priya K., Mumbai",
    photo: {
      src: "/images/holistic_serenity.jpg",
      alt: "Mindfulness and stress relief",
    },
  },
];

const AUTO_INTERVAL = 3500; // ms

export default function SymptomCompass() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [direction, setDirection] = useState(1);
  const timerRef = useRef(null);

  const active = SYMPTOMS[activeIdx];

  const whatsappUrl = `https://wa.me/919152292507?text=${encodeURIComponent(
    `Hi Yogaysh Lahoti (Magical Touch), I am struggling with ${active.label}. Can we discuss how Acupressure can help me avoid surgery?`,
  )}`;

  const advanceTo = (nextIdx, dir) => {
    setDirection(dir);
    setActiveIdx(nextIdx);
  };

  const startTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setDirection(1);
      setActiveIdx((prev) => (prev + 1) % SYMPTOMS.length);
    }, AUTO_INTERVAL);
  };

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, []);

  const handlePillClick = (i) => {
    const dir = i > activeIdx ? 1 : -1;
    advanceTo(i, dir);
    startTimer();
  };

  const slideVariants = {
    enter: (dir) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? "-60%" : "60%", opacity: 0 }),
  };

  return (
    <section className="py-24 sm:py-32 bg-[#FAF9F6] border-t border-stone-200/60">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 space-y-3 text-center mx-auto">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-[#1A1A18] tracking-[-0.03em] leading-tight">
            <BlurText
              text="Tell us where it hurts."
              delay={40}
              className="text-[#1A1A18]"
            />{" "}
            <span className="font-serif italic font-normal text-stone-500">
              Let&rsquo;s talk.
            </span>
          </h2>
          <p className="text-stone-600 text-base sm:text-lg font-light leading-relaxed">
            Select your pain area — or watch as we walk through each condition
            for you.
          </p>
        </div>

        {/* Condition Selector Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 pb-4 px-2">
          {SYMPTOMS.map((sym, i) => {
            const selected = i === activeIdx;
            return (
              <button
                key={sym.id}
                onClick={() => handlePillClick(i)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium tracking-wide whitespace-nowrap transition-all duration-300 cursor-pointer ${
                  selected
                    ? "bg-[#1A1A18] text-white shadow-sm scale-105"
                    : "bg-white/80 hover:bg-white text-stone-600 border border-stone-200/80 hover:text-stone-900"
                }`}
              >
                {sym.label}
              </button>
            );
          })}
        </div>

        {/* Progress bar */}
        <div className="flex gap-1 justify-center mt-2 mb-8">
          {SYMPTOMS.map((_, i) => (
            <div
              key={i}
              className="h-0.5 rounded-full overflow-hidden bg-stone-200"
              style={{ width: `${100 / SYMPTOMS.length}%`, maxWidth: 80 }}
            >
              {i === activeIdx && (
                <motion.div
                  className="h-full bg-stone-800 origin-left"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{
                    duration: AUTO_INTERVAL / 1000,
                    ease: "linear",
                  }}
                />
              )}
              {i < activeIdx && <div className="h-full bg-stone-400 w-full" />}
            </div>
          ))}
        </div>

        {/* 2-Column Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center border-t border-stone-200/80 pt-10">
          {/* LEFT: Single Sliding Image per Condition */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] rounded-[32px] overflow-hidden bg-stone-100 shadow-lg border border-stone-200/70">
              <AnimatePresence
                initial={false}
                custom={direction}
                mode="popLayout"
              >
                <motion.img
                  key={activeIdx}
                  src={active.photo.src}
                  alt={active.photo.alt}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>

              {/* Condition name badge with ShinyText */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`badge-${activeIdx}`}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.35 }}
                  className="absolute top-4 left-4 z-10 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-sm border border-white/10"
                >
                  <ShinyText
                    text={active.label}
                    speed={3}
                    className="text-[10px] font-medium text-white tracking-wide"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* RIGHT: Condition Text inside React Bits SpotlightCard */}
          <div className="lg:col-span-7">
            <SpotlightCard
              spotlightColor="rgba(217, 119, 6, 0.12)"
              className="p-8 sm:p-10 shadow-sm border border-stone-200/70 bg-white/90"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIdx}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-5"
                >
                  <div className="space-y-1.5">
                    <span className="text-xs font-mono uppercase tracking-widest text-stone-400">
                      {active.surgeryAlternative} &middot; Avg.{" "}
                      {active.timeline}
                    </span>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light text-[#1A1A18] tracking-tight leading-snug">
                      {active.question}
                    </h3>
                  </div>

                  <p className="text-stone-600 text-sm sm:text-base font-light leading-relaxed">
                    {active.shortText}
                  </p>

                  <blockquote className="border-l-2 border-stone-300 pl-4 text-xs sm:text-sm italic text-stone-600 font-light">
                    &ldquo;{active.patientStory}&rdquo;
                  </blockquote>

                  <div className="flex flex-wrap gap-3 pt-2">
                    <Magnet padding={20}>
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#1A1A18] hover:bg-stone-800 text-white text-xs sm:text-sm font-medium tracking-wide shadow-md active:scale-95 transition-all cursor-pointer"
                      >
                        <MessageCircle className="w-4 h-4 fill-white" />
                        <span>Discuss This With Yogaysh Lahoti</span>
                        <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
                      </a>
                    </Magnet>

                    <Magnet padding={15}>
                      <a
                        href="tel:+919152292507"
                        className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-white border border-stone-200/80 text-stone-700 text-xs sm:text-sm font-medium hover:bg-stone-50 transition-all cursor-pointer"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        <span>+91 91522 92507</span>
                      </a>
                    </Magnet>
                  </div>
                </motion.div>
              </AnimatePresence>
            </SpotlightCard>
          </div>
        </div>
      </div>
    </section>
  );
}
