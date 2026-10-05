import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { TiltedCard, SpotlightCard, Magnet, ShinyText } from "./reactbits";

const STORIES = [
  {
    patient: "Rohit Jain",
    condition: "Severe Back & Sciatica",
    quote:
      "Orthopedics and physiotherapy failed for months. Four sessions of Acupressure with Yogaysh Lahoti and my severe back pain was gone. I avoided spinal surgery.",
  },
  {
    patient: "Mrs. Kinjal Gada",
    condition: "Chronic Knee Degeneration",
    quote:
      "I wore a knee brace for two years and dreaded stairs. Acupressure revived my joint fluid — I walk freely without pain now.",
  },
  {
    patient: "Mr. Devendra Garg",
    condition: "Parkinson's & Motor Rehab",
    quote:
      "Where conventional treatment offered no hope, just five sessions here restored my stability and tremors subsided.",
  },
  {
    patient: "Mrs. Chandrakala Prasad",
    condition: "Chronic Somatic Pain",
    quote:
      "Gentle, soothing, and genuinely effective. No injections, no pills, just lasting relief from deep nerve agony.",
  },
];

export default function SleekStories() {
  return (
    <section
      id="transformations"
      className="py-24 sm:py-32 bg-[#FAF9F6] border-t border-stone-200/60"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 border border-stone-200/80 text-[11px] font-mono text-stone-600">
            <ShinyText text="VERIFIED PATIENT RECOVERIES PAN INDIA" speed={4} />
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-[#1A1A18] tracking-[-0.03em] leading-tight">
            Stories of{" "}
            <span className="font-serif italic font-normal text-stone-500">
              Transformations.
            </span>
          </h2>
          <p className="text-stone-600 text-base sm:text-lg font-light leading-relaxed">
            Real stories from patients across Pan India who regained mobility after
            advised surgeries or painkillers failed.
          </p>
        </div>

        {/* 2-Column Grid: Featured Home Visit Recovery Image + Quotes List */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Patient Vitality Photo with 3D Tilt */}
          <div className="lg:col-span-5 relative flex justify-center">
            <TiltedCard
              imageSrc="/images/patient_vitality.jpg"
              altText="Patient walking freely after acupressure therapy"
              captionText="&ldquo;I got my active life back.&rdquo; &mdash; Home Visit Recovery"
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

          {/* Right Column: Short Sweet Patient Quotes with SpotlightCards */}
          <div className="lg:col-span-7 space-y-5">
            {STORIES.map((story, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
              >
                <SpotlightCard
                  spotlightColor="rgba(197, 168, 105, 0.14)"
                  className="p-6 rounded-2xl bg-white border border-stone-200/70 shadow-2xs space-y-3 transition-all hover:border-amber-700/25"
                >
                  <p className="text-stone-800 text-base sm:text-lg font-light leading-relaxed">
                    &ldquo;{story.quote}&rdquo;
                  </p>

                  <div className="flex items-center justify-between pt-2 border-t border-stone-100">
                    <div>
                      <h4 className="text-sm font-medium text-[#1A1A18]">
                        {story.patient}
                      </h4>
                      <span className="text-xs text-stone-500 font-light">
                        {story.condition} &middot; Home Visit
                      </span>
                    </div>

                    <Magnet padding={12}>
                      <a
                        href={`https://wa.me/919152292507?text=${encodeURIComponent(
                          `Hi Yogaysh Lahoti, I read about the recovery of ${story.patient} for ${story.condition} and would like to consult.`,
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-stone-100/80 hover:bg-[#1A1A18] text-stone-800 hover:text-white text-xs font-medium transition-all shadow-2xs"
                      >
                        <span>Inquire</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </Magnet>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
