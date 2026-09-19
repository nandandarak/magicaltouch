import React, { useState, useRef } from "react";
import {
  ArrowUpRight,
  MessageCircle,
  Play,
  Pause,
  RotateCcw,
} from "lucide-react";
import {
  ShinyText,
  BlurText,
  Magnet,
  SpotlightCard,
  CountUp,
  Squares,
} from "./reactbits";

export default function HeroPinCanvas() {
  const [videoSource, setVideoSource] = useState("hero_clean.mp4");
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  const whatsappUrl = `https://wa.me/919152292507?text=${encodeURIComponent(
    "Hi Yogaysh Lahoti (Magical Touch), I am struggling with chronic pain and would like to understand if Acupressure can help me avoid surgery.",
  )}`;

  const togglePlayback = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const switchVideoMode = (mode) => {
    const targetSrc = mode === "anatomy" ? "hero_clean.mp4" : "video.mp4";
    setVideoSource(targetSrc);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  return (
    <section
      id="hero-diagnostic"
      className="relative min-h-[92vh] bg-[#FBF9F5] flex items-center pt-28 pb-20 px-6 sm:px-10 lg:px-16 overflow-hidden"
    >
      {/* Interactive Squares subtle grid background from React Bits */}
      <div className="absolute inset-0 opacity-40 pointer-events-none -z-10">
        <Squares
          squareSize={48}
          borderColor="#EAE5DC"
          hoverFillColor="#C5A869"
          speed={0.2}
        />
      </div>

      {/* Subtle organic ambient warmth */}
      <div className="absolute top-1/4 right-1/3 w-[500px] h-[500px] bg-amber-100/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-stone-200/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* ── LEFT COLUMN (Cols 1 to 6): Minimalist, Talkative Editorial ── */}
        <div className="lg:col-span-6 space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 border border-stone-200/80">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              <span className="text-[11px] font-mono tracking-widest uppercase text-stone font-medium">
                ACUPRESSURE • ANCIENT SCIENCE • MUMBAI CLINIC
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-[-0.03em] text-[#1A1A18] leading-[1.08]">
              <BlurText text="RELIEF" delay={60} className="text-[#1A1A18]" />{" "}
              <span className="font-serif italic font-normal text-stone-500">
                // Gentle //
              </span>{" "}
              <BlurText text="RESTORE" delay={60} className="text-[#1A1A18]" />
            </h1>

            <p className="text-stone-800 text-lg sm:text-xl font-normal leading-relaxed pt-2">
              Have you been told that spinal surgery or lifelong painkillers are
              your only choice?
            </p>

            <p className="text-stone-600 text-base sm:text-lg font-light leading-relaxed max-w-xl">
              We know how exhausting chronic pain is. For over 10 years in
              Mumbai, Yogaysh Lahoti has helped patients heal severe sciatica,
              slip discs, knee degeneration, and trapped nerves — using gentle,
              non-invasive Acupressure meridian science.
            </p>
          </div>

          {/* Minimalist Action CTAs with React Bits Magnet */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Magnet padding={20}>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#1A1A18] hover:bg-stone-800 text-white text-xs sm:text-sm font-medium tracking-wide shadow-sm active:scale-95 transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Consult Yogaysh Lahoti</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
              </a>
            </Magnet>

            <Magnet padding={15}>
              <a
                href="#approach"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-transparent hover:bg-stone-100 text-stone-800 text-xs sm:text-sm font-medium border border-stone-300 transition-all active:scale-95 cursor-pointer"
              >
                <span>Explore Our Approach</span>
              </a>
            </Magnet>
          </div>

          {/* Quiet, Sleek Editorial Footnote with CountUp from React Bits */}
          <div className="pt-6 border-t border-stone-200/70 flex items-center gap-6 text-xs text-stone-600 font-medium">
            <span>
              <CountUp to={10} suffix="+ Years" duration={1.5} /> in Mumbai
            </span>
            <span>&bull;</span>
            <span className="text-stone-500 font-light">100% Non-Invasive</span>
          </div>
        </div>

        {/* ── RIGHT COLUMN (Cols 7 to 12): Pure, Cinematic Video Stage wrapped in SpotlightCard ── */}
        <div className="lg:col-span-6">
          <SpotlightCard
            spotlightColor="rgba(217, 119, 6, 0.2)"
            className="rounded-[36px] overflow-hidden bg-stone-900 border border-stone-200/60 shadow-2xl group p-0"
          >
            <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden bg-stone-950">
              <video
                ref={videoRef}
                key={videoSource}
                src={`/${videoSource}`}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="w-full h-full object-cover"
              />

              {/* Minimal Video Mode Switcher */}
              <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 p-1 rounded-full bg-stone-900/80 backdrop-blur-md border border-white/10 shadow-lg">
                <button
                  onClick={() => switchVideoMode("anatomy")}
                  className={`px-3 py-1 rounded-full text-[11px] font-medium tracking-wide transition-all cursor-pointer ${
                    videoSource === "hero_clean.mp4"
                      ? "bg-white text-stone-900 shadow-sm"
                      : "text-stone-300 hover:text-white"
                  }`}
                >
                  Meridian Anatomy
                </button>
                <button
                  onClick={() => switchVideoMode("clinic")}
                  className={`px-3 py-1 rounded-full text-[11px] font-medium tracking-wide transition-all cursor-pointer ${
                    videoSource === "video.mp4"
                      ? "bg-white text-stone-900 shadow-sm"
                      : "text-stone-300 hover:text-white"
                  }`}
                >
                  Clinical Touch
                </button>
              </div>

              {/* Minimal Playback Controls */}
              <div className="absolute bottom-4 right-4 z-10 flex items-center gap-2">
                <button
                  onClick={togglePlayback}
                  aria-label={isPlaying ? "Pause video" : "Play video"}
                  className="w-8 h-8 rounded-full bg-stone-900/80 hover:bg-stone-900 backdrop-blur-md border border-white/10 text-white flex items-center justify-center transition-all cursor-pointer shadow-md"
                >
                  {isPlaying ? (
                    <Pause className="w-3.5 h-3.5" />
                  ) : (
                    <Play className="w-3.5 h-3.5 fill-white" />
                  )}
                </button>
                <button
                  onClick={() => {
                    if (videoRef.current) {
                      videoRef.current.currentTime = 0;
                      videoRef.current.play();
                      setIsPlaying(true);
                    }
                  }}
                  aria-label="Restart video"
                  className="w-8 h-8 rounded-full bg-stone-900/80 hover:bg-stone-900 backdrop-blur-md border border-white/10 text-white flex items-center justify-center transition-all cursor-pointer shadow-md"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
}
