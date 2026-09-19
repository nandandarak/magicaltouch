import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import {
  Sparkles,
  Calculator,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Clock,
  ShieldCheck,
} from "lucide-react";

export default function RecoveryCalculator() {
  const [condition, setCondition] = useState("Spine & Slip Disc");
  const [severity, setSeverity] = useState("Moderate");
  const [duration, setDuration] = useState("6 - 12 Months");

  const triggerSparkle = () => {
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.7 },
      colors: ["#10B981", "#34D399", "#059669", "#A7F3D0"],
    });
  };

  const conditionsList = [
    {
      id: "Spine & Slip Disc",
      name: "Spine, Disc & Sciatica Pain",
      icon: "🦴",
    },
    {
      id: "Knee Osteoarthritis",
      name: "Knee Pain & Osteoarthritis",
      icon: "🦵",
    },
    { id: "Paralysis & Stroke", name: "Paralysis & Stroke Rehab", icon: "⚡" },
    {
      id: "Parkinsons & Foot Drop",
      name: "Parkinson's & Foot Drop",
      icon: "🧠",
    },
    { id: "Gastric & Acidity", name: "Gastric & Hyper Acidity", icon: "🌱" },
  ];

  const severityList = ["Mild", "Moderate", "Severe"];
  const durationList = [
    "< 3 Months",
    "3 - 6 Months",
    "6 - 12 Months",
    "1+ Year",
  ];

  const getEstimatedPlan = () => {
    let base = 8;
    if (condition === "Spine & Slip Disc") base = 12;
    if (condition === "Knee Osteoarthritis") base = 10;
    if (condition === "Paralysis & Stroke") base = 16;
    if (condition === "Parkinsons & Foot Drop") base = 14;
    if (condition === "Gastric & Acidity") base = 6;

    let multiplier = 1.0;
    if (severity === "Moderate") multiplier = 1.25;
    if (severity === "Severe") multiplier = 1.5;

    let durationAdd = 0;
    if (duration === "6 - 12 Months") durationAdd = 2;
    if (duration === "1+ Year") durationAdd = 4;

    const totalSessions = Math.round(base * multiplier + durationAdd);
    const painReliefDays = severity === "Severe" ? "5 - 7 Days" : "3 - 5 Days";

    return {
      totalSessions,
      painReliefDays,
      phase1: `Initial nerve decompression & pain signal reduction (${painReliefDays})`,
      phase2: `Meridian unblocking & spinal fascia tension release (${Math.round(totalSessions * 0.5)} sessions)`,
      phase3: `Long-term joint mobility, reflex restoration & prevention`,
    };
  };

  const plan = getEstimatedPlan();

  const whatsappBookingUrl = `https://wa.me/919152292507?text=${encodeURIComponent(
    `Hi Magical Touch AcuHealth, I calculated my recovery plan for ${condition} (${severity} severity, ${duration} duration). Estimated sessions: ${plan.totalSessions}. I would like to book a consultation.`,
  )}`;

  return (
    <section
      id="calculator"
      className="py-24 bg-[#FAF8F5] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-emerald-700 text-xs font-extrabold uppercase tracking-wider shadow-sm">
            <Calculator className="w-3.5 h-3.5 text-emerald-600" />
            Interactive Recovery Estimator
          </div>
          <h2 className="text-4xl sm:text-6xl font-black text-[#1D1D1F] tracking-tighter leading-[1.08] font-heading">
            Estimate Your{" "}
            <span className="text-gradient-emerald">
              Acupressure Recovery Plan.
            </span>
          </h2>
          <p className="text-slate-600 text-lg font-medium">
            Select your health condition, pain severity, and duration to see
            expected clinical session estimates and milestone breakdown.
          </p>
        </motion.div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Inputs (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-[32px] border border-slate-200/80 shadow-lg space-y-8"
          >
            {/* 1. Condition Selection */}
            <div className="space-y-3">
              <label className="text-xs font-extrabold text-[#1D1D1F] uppercase tracking-wider block">
                1. Select Health Area / Condition
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {conditionsList.map((item) => {
                  const isSel = condition === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        setCondition(item.id);
                        triggerSparkle();
                      }}
                      className={`relative flex items-center gap-3 p-3.5 rounded-2xl text-xs font-bold text-left transition-all border ${
                        isSel
                          ? "bg-emerald-50 border-emerald-500 text-emerald-900 shadow-sm"
                          : "bg-[#FAF8F5] border-slate-200/80 text-slate-700 hover:bg-slate-100"
                      }`}
                    >
                      <span className="text-base">{item.icon}</span>
                      <span className="leading-tight">{item.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Severity Selection */}
            <div className="space-y-3">
              <label className="text-xs font-extrabold text-[#1D1D1F] uppercase tracking-wider block">
                2. Symptom Intensity / Severity
              </label>
              <div className="grid grid-cols-3 gap-3">
                {severityList.map((sev) => {
                  const isSel = severity === sev;
                  return (
                    <button
                      key={sev}
                      onClick={() => {
                        setSeverity(sev);
                        triggerSparkle();
                      }}
                      className={`py-3 rounded-2xl text-xs font-bold transition-all border text-center ${
                        isSel
                          ? "bg-emerald-600 text-white border-emerald-600 shadow-md scale-105"
                          : "bg-[#FAF8F5] border-slate-200/80 text-slate-700 hover:bg-slate-100"
                      }`}
                    >
                      {sev}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3. Pain Duration Selection */}
            <div className="space-y-3">
              <label className="text-xs font-extrabold text-[#1D1D1F] uppercase tracking-wider block">
                3. How Long Have You Suffered?
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {durationList.map((dur) => {
                  const isSel = duration === dur;
                  return (
                    <button
                      key={dur}
                      onClick={() => {
                        setDuration(dur);
                        triggerSparkle();
                      }}
                      className={`py-3 px-2 rounded-2xl text-xs font-bold transition-all border text-center ${
                        isSel
                          ? "bg-emerald-600 text-white border-emerald-600 shadow-md scale-105"
                          : "bg-[#FAF8F5] border-slate-200/80 text-slate-700 hover:bg-slate-100"
                      }`}
                    >
                      {dur}
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right Calculated Result Box (5 Cols) with Motion */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 bg-gradient-to-br from-white to-[#FAF8F5] p-8 sm:p-10 rounded-[32px] border border-slate-200/80 shadow-xl space-y-6 relative overflow-hidden"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-extrabold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              Calculated Recovery Outcome
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest block">
                Estimated Clinical Sessions
              </span>
              <div className="flex items-baseline gap-2">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={plan.totalSessions}
                    initial={{ opacity: 0, y: -10, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.8 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className="text-5xl sm:text-6xl font-black text-emerald-700 font-heading inline-block"
                  >
                    {plan.totalSessions}
                  </motion.span>
                </AnimatePresence>
                <span className="text-lg font-bold text-slate-600">
                  Sessions Total
                </span>
              </div>
              <p className="text-xs text-slate-500 font-semibold flex items-center gap-1.5 pt-1">
                <Clock className="w-3.5 h-3.5 text-emerald-600" />
                First noticeable pain reduction in:{" "}
                <strong className="text-slate-800">
                  {plan.painReliefDays}
                </strong>
              </p>
            </div>

            {/* Milestones Breakdown */}
            <div className="space-y-3 pt-4 border-t border-slate-200/80">
              <h4 className="text-xs font-extrabold text-[#1D1D1F] uppercase tracking-wider">
                Clinical Recovery Milestones:
              </h4>

              <div className="space-y-2.5">
                <div className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Phase 1:</strong> {plan.phase1}
                  </span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Phase 2:</strong> {plan.phase2}
                  </span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Phase 3:</strong> {plan.phase3}
                  </span>
                </div>
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-4">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={triggerSparkle}
                href={whatsappBookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 rounded-full bg-emerald-600 text-white font-extrabold text-xs sm:text-sm hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-600/20"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Reserve Consultation on WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
