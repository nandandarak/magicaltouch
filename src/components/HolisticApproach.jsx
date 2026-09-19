import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  MessageCircle,
  Phone,
  Sparkles,
  Play,
  Pause,
} from "lucide-react";
import { ShinyText, BlurText, Magnet } from "./reactbits";

const whatsappUrl = `https://wa.me/919152292507?text=${encodeURIComponent(
  "Hi Yogaysh Lahoti (Magical Touch), I watched the holistic approach video. Can you help me understand how acupressure can relieve my pain?",
)}`;

export default function HolisticApproach() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  // Directly play Video Project 8 on continuous loop
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => setIsPlaying(true))
        .catch(() => {
          const handleFirstClick = () => {
            video.play();
            setIsPlaying(true);
            window.removeEventListener("click", handleFirstClick);
          };
          window.addEventListener("click", handleFirstClick);
        });
    }
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section
      id="approach"
      className="relative w-full aspect-video flex items-center overflow-hidden bg-stone-900"
    >
      {/* ── Direct Full Video: Bright, Vibrant, and 100% Untouched ── */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover brightness-[1.04] contrast-[1.02] saturate-[1.08] pointer-events-none"
      >
        <source src="/Video%20Project%208.mp4" type="video/mp4" />
        <source src="/video_project_8.mp4" type="video/mp4" />
      </video>

      {/* ── Soft Whisper Gradient: ONLY behind the small text area, ZERO black over the video ── */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 via-35% to-transparent pointer-events-none" />

      {/* ── Minimalist, Short & Sweet Info Floating on Left ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-8">
        <div className="w-full max-w-md sm:max-w-lg space-y-4">
          {/* Top Pill with React Bits ShinyText */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/30 backdrop-blur-md border border-white/20 shadow-sm"
          >
            <Sparkles className="w-3 h-3 text-amber-300" />
            <ShinyText
              text="HOLISTIC PHILOSOPHY • MUMBAI CLINIC"
              speed={3.5}
              className="text-[10px] sm:text-[11px] font-mono tracking-widest uppercase font-medium text-white"
            />
          </motion.div>

          {/* Punchy Headline with React Bits BlurText */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-[-0.03em] leading-[1.1] text-white drop-shadow-md">
            <BlurText
              text="Your body wants to heal."
              delay={35}
              direction="bottom"
              className="text-white"
            />{" "}
            <span className="font-serif italic font-normal text-amber-200/95 block sm:inline">
              We gently free the flow.
            </span>
          </h2>

          {/* Short 1-sentence Talkative Copy */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="text-stone-100 text-sm sm:text-base font-light leading-relaxed max-w-md drop-shadow"
          >
            Gentle meridian touch releases root nerve entrapment and revives
            natural joint circulation — 100% non-invasive, no surgeries, no
            lifelong painkillers.
          </motion.p>

          {/* Quick Magnetic CTAs using React Bits Magnet */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="flex flex-wrap items-center gap-3 pt-1"
          >
            <Magnet magnetStrength={0.25} padding={20}>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#1A1A18] hover:bg-stone-100 text-xs sm:text-sm font-medium tracking-wide shadow-xl active:scale-95 transition-all cursor-pointer"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-[#1A1A18]" />
                <span>Consult Yogaysh Lahoti</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </Magnet>

            <Magnet magnetStrength={0.2} padding={15}>
              <a
                href="tel:+919152292507"
                className="inline-flex items-center gap-1.5 px-4 py-3 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/25 text-white text-xs sm:text-sm font-medium transition-all shadow-md cursor-pointer"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>+91 91522 92507</span>
              </a>
            </Magnet>

            <button
              onClick={togglePlay}
              aria-label={
                isPlaying ? "Pause background video" : "Play background video"
              }
              className="inline-flex items-center gap-1.5 px-3 py-3 rounded-full bg-black/35 hover:bg-black/55 backdrop-blur-md border border-white/20 text-white text-xs transition-all cursor-pointer shadow-md"
            >
              {isPlaying ? (
                <>
                  <Pause className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Pause</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 fill-white" />
                  <span className="hidden sm:inline">Play</span>
                </>
              )}
            </button>
          </motion.div>

          {/* Clean Proof Pills with ShinyText */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="flex flex-wrap items-center gap-2 pt-1 text-xs text-white/90 font-light"
          >
            <span className="px-2.5 py-1 rounded-full bg-black/30 backdrop-blur-md border border-white/15">
              <ShinyText text="10+ Years Mastery" speed={5} />
            </span>
            <span className="px-2.5 py-1 rounded-full bg-black/30 backdrop-blur-md border border-white/15">
              <ShinyText text="5,000+ Healed" speed={5} />
            </span>
            <span className="px-2.5 py-1 rounded-full bg-black/30 backdrop-blur-md border border-white/15">
              <ShinyText text="0 Surgeries" speed={5} />
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
