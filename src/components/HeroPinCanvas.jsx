import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, MessageCircle, Activity, ShieldCheck, Award, Users, HeartPulse, Stethoscope, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const TOTAL_FRAMES = 30;
const ZOOM_FACTOR = 1.15; // 15% zoom factor to crop watermark off-screen
const VERTICAL_OFFSET_Y = -25; // Negative vertical shift pushing watermark outside bounds

export default function HeroPinCanvas() {
  const containerRef = useRef(null);
  const stickyRef = useRef(null);
  const canvasRef = useRef(null);
  const lastFrameRef = useRef(-1);
  const rafIdRef = useRef(null);

  const phase1Ref = useRef(null);
  const phase2Ref = useRef(null);
  const phase3Ref = useRef(null);
  const phase4Ref = useRef(null);

  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);

  const imagesRef = useRef([]);

  // Preload and hardware-decode all 30 frames to eliminate paint jank during scroll loop (§1 & §11)
  useEffect(() => {
    let isMounted = true;
    let loadedCount = 0;
    const loadedImages = [];

    const loadAndDecodeFrames = async () => {
      for (let i = 1; i <= TOTAL_FRAMES; i++) {
        const frameNum = String(i).padStart(3, '0');
        const img = new Image();
        img.src = `/sequence/frame_${frameNum}.webp`;

        // Hardware bitmap pre-decoding into GPU memory
        try {
          await img.decode();
        } catch (e) {
          // Fallback if decode is not supported or rejected
        }

        loadedImages.push(img);
        loadedCount++;

        if (isMounted) {
          setLoadProgress(Math.round((loadedCount / TOTAL_FRAMES) * 100));
          if (loadedCount === TOTAL_FRAMES) {
            setImagesLoaded(true);
          }
        }
      }
      imagesRef.current = loadedImages;
    };

    loadAndDecodeFrames();

    return () => {
      isMounted = false;
    };
  }, []);

  // GSAP ScrollTrigger canvas scrubbing & 4-phase 15% text card transitions
  useEffect(() => {
    if (!imagesLoaded || !canvasRef.current || !containerRef.current) return;

    const ctx = gsap.context(() => {
      const canvas = canvasRef.current;
      const canvasCtx = canvas.getContext('2d');

      const resizeCanvas = () => {
        if (!canvas) return;
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        const displayWidth = canvas.clientWidth;
        const displayHeight = canvas.clientHeight;
        if (displayWidth === 0 || displayHeight === 0) return;

        if (canvas.width !== displayWidth * dpr || canvas.height !== displayHeight * dpr) {
          canvas.width = displayWidth * dpr;
          canvas.height = displayHeight * dpr;
        }
      };

      resizeCanvas();

      const drawCanvasFrame = (frameIdx) => {
        const img = imagesRef.current[frameIdx];
        if (!img || !img.complete || img.naturalWidth === 0) return;

        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        const displayWidth = canvas.clientWidth;
        const displayHeight = canvas.clientHeight;
        if (displayWidth === 0 || displayHeight === 0) return;

        canvasCtx.save();
        canvasCtx.scale(dpr, dpr);
        canvasCtx.clearRect(0, 0, displayWidth, displayHeight);

        // object-fit: cover math with ZOOM_FACTOR & VERTICAL_OFFSET_Y to crop watermark cleanly (§16)
        const imgRatio = img.naturalWidth / img.naturalHeight;
        const containerRatio = displayWidth / displayHeight;
        let drawWidth, drawHeight;

        if (containerRatio > imgRatio) {
          drawWidth = displayWidth * ZOOM_FACTOR;
          drawHeight = (displayWidth / imgRatio) * ZOOM_FACTOR;
        } else {
          drawHeight = displayHeight * ZOOM_FACTOR;
          drawWidth = (displayHeight * imgRatio) * ZOOM_FACTOR;
        }

        const x = (displayWidth - drawWidth) / 2;
        const y = (displayHeight - drawHeight) / 2 + VERTICAL_OFFSET_Y;

        canvasCtx.drawImage(img, x, y, drawWidth, drawHeight);
        canvasCtx.restore();
      };

      const requestFrameRender = (index, force = false) => {
        const frameIdx = Math.max(0, Math.min(TOTAL_FRAMES - 1, Math.floor(index)));
        if (!force && frameIdx === lastFrameRef.current) return;
        lastFrameRef.current = frameIdx;

        if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = requestAnimationFrame(() => {
          drawCanvasFrame(frameIdx);
        });
      };

      // Initial frame render
      requestFrameRender(0, true);

      // Instant 1:1 real-time scrub (scrub: true) for 0ms latency (§1)
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=2500',
          pin: stickyRef.current,
          scrub: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            const frameIndex = Math.min(
              TOTAL_FRAMES - 1,
              Math.floor(self.progress * (TOTAL_FRAMES - 1))
            );
            requestFrameRender(frameIndex);
          },
        },
      });

      // 15% Scroll Window Per Message with Mirrored Easing Curves (§3 & §7):
      // Phase 1 (Intro): 0% to 15% (Fades out 15% -> 20%)
      tl.to(
        phase1Ref.current,
        {
          opacity: 0,
          y: -30,
          scale: 0.96,
          duration: 0.05,
          ease: 'power2.inOut',
        },
        0.15
      );

      // Phase 2 (Spine & Joints): 20% to 35% (Fades in 20%, Fades out 35% -> 40%)
      tl.fromTo(
        phase2Ref.current,
        { opacity: 0, y: 30, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, duration: 0.05, ease: 'power2.out' },
        0.20
      );
      tl.to(
        phase2Ref.current,
        { opacity: 0, y: -30, scale: 0.96, duration: 0.05, ease: 'power2.in' },
        0.35
      );

      // Phase 3 (Neuromuscular & Gastric): 40% to 55% (Fades in 40%, Fades out 55% -> 60%)
      tl.fromTo(
        phase3Ref.current,
        { opacity: 0, y: 30, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, duration: 0.05, ease: 'power2.out' },
        0.40
      );
      tl.to(
        phase3Ref.current,
        { opacity: 0, y: -30, scale: 0.96, duration: 0.05, ease: 'power2.in' },
        0.55
      );

      // Phase 4 (CTA Booking Card): 60% to 100% (Fades in 60%, remains visible to end)
      tl.fromTo(
        phase4Ref.current,
        { opacity: 0, y: 30, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, duration: 0.05, ease: 'power2.out' },
        0.60
      );

      const handleResize = () => {
        resizeCanvas();
        requestFrameRender(lastFrameRef.current >= 0 ? lastFrameRef.current : 0, true);
      };
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
        if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
      };
    }, containerRef);

    return () => ctx.revert();
  }, [imagesLoaded]);

  const whatsappHeroUrl = `https://wa.me/919967321313?text=${encodeURIComponent(
    'Hi Magical Touch AcuHealth, I would like to book an Acupressure Consultation.'
  )}`;

  // Glass Card Material Inline Style (§12 Materials, Depth & Translucency)
  const glassCardStyle = {
    background: 'rgba(255, 255, 255, 0.85)',
    backdropFilter: 'blur(20px) saturate(180%)',
    WebkitBackdropFilter: 'blur(20px) saturate(180%)',
    borderTop: '1px solid rgba(255, 255, 255, 0.6)',
    borderLeft: '1px solid rgba(255, 255, 255, 0.5)',
    borderRight: '1px solid rgba(255, 255, 255, 0.5)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.4)',
  };

  return (
    <section id="about" ref={containerRef} className="relative w-full bg-[#F5F5F7]">
      {/* Pinned Scroll Wrapper */}
      <div ref={stickyRef} className="h-screen w-full overflow-hidden bg-[#F5F5F7] flex items-center justify-center relative">
        
        {/* Preloader Overlay */}
        {!imagesLoaded && (
          <div className="absolute inset-0 z-50 bg-[#F5F5F7] flex flex-col items-center justify-center p-6">
            <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center mb-4 animate-pulse">
              <Activity className="w-7 h-7 text-emerald-600" />
            </div>
            <h3 className="text-xl font-bold text-[#1D1D1F] mb-2 font-heading">Initializing 3D Sequence</h3>
            <div className="w-64 h-2 bg-slate-200 rounded-full overflow-hidden border border-slate-300">
              <div
                className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-200"
                style={{ width: `${loadProgress}%` }}
              />
            </div>
            <span className="text-xs text-emerald-700 font-mono mt-2 font-semibold">{loadProgress}%</span>
          </div>
        )}

        {/* Clean Crisp Full-Screen Canvas Layer (No Murky Vignette Masks) */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-hidden flex items-center justify-center">
          <canvas
            ref={canvasRef}
            className="w-full h-full object-cover relative z-10"
          />
        </div>

        {/* 4-Phase Translucent Glass Material Cards (§12 & §15 Typography) */}
        <div className="relative z-30 max-w-xl mx-auto px-4 sm:px-6 w-full text-center pointer-events-auto">
          
          {/* Phase 1 (Intro: 0% - 15%) */}
          <div
            ref={phase1Ref}
            style={glassCardStyle}
            className="p-8 sm:p-10 rounded-[32px] shadow-2xl space-y-5 text-center mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50/90 border border-emerald-200/80 text-emerald-700 text-xs font-extrabold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              ANCIENT TECHNIQUE FOR MODERN PROBLEMS
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1D1D1F] tracking-[-0.02em] leading-[1.05] font-heading">
              Towards better health in a gentle way.
            </h1>

            <p className="text-[#424245] text-sm sm:text-base font-normal leading-relaxed">
              Acupressure is a simple, non-invasive technique to revive, restore, and renew your health without surgical intervention.
            </p>

            <div className="pt-2 flex items-center justify-center gap-2 text-xs font-bold text-slate-700">
              <Award className="w-4 h-4 text-emerald-600" />
              <span className="px-3.5 py-1.5 rounded-full bg-slate-100/90 border border-slate-200/80">
                15+ Years Clinical Experience
              </span>
            </div>
          </div>

          {/* Phase 2 (Spine & Joints: 20% - 35%) */}
          <div
            ref={phase2Ref}
            style={glassCardStyle}
            className="absolute inset-x-4 sm:inset-x-6 top-1/2 -translate-y-1/2 p-8 sm:p-10 rounded-[32px] shadow-2xl space-y-5 text-center opacity-0 pointer-events-none"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50/90 border border-emerald-200/80 text-emerald-700 text-xs font-extrabold tracking-wider uppercase">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              SPINAL &amp; JOINT DECOMPRESSION
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1D1D1F] tracking-[-0.02em] leading-[1.05] font-heading">
              Proven relief for severe back &amp; disc pain.
            </h2>

            <p className="text-[#424245] text-sm sm:text-base font-normal leading-relaxed">
              Targeted pressure point therapy unblocking compressed L4-L5 nerve roots, Sciatica, Slip Disc, Cervical Spondylosis, and Osteoarthritis.
            </p>

            <div className="pt-2 flex items-center justify-center gap-2 text-xs font-bold text-slate-700">
              <Users className="w-4 h-4 text-emerald-600" />
              <span className="px-3.5 py-1.5 rounded-full bg-slate-100/90 border border-slate-200/80">
                Non-Surgical Spinal Recovery
              </span>
            </div>
          </div>

          {/* Phase 3 (Neuromuscular & Gastric: 40% - 55%) */}
          <div
            ref={phase3Ref}
            style={glassCardStyle}
            className="absolute inset-x-4 sm:inset-x-6 top-1/2 -translate-y-1/2 p-8 sm:p-10 rounded-[32px] shadow-2xl space-y-5 text-center opacity-0 pointer-events-none"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50/90 border border-emerald-200/80 text-emerald-700 text-xs font-extrabold tracking-wider uppercase">
              <HeartPulse className="w-3.5 h-3.5 text-emerald-600" />
              NEUROMUSCULAR &amp; METABOLIC VITALITY
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1D1D1F] tracking-[-0.02em] leading-[1.05] font-heading">
              Restoring nerve reflexes &amp; organ balance.
            </h2>

            <p className="text-[#424245] text-sm sm:text-base font-normal leading-relaxed">
              Comprehensive care for Paralysis, Parkinson's, Foot Drop, Arthritis, Gathiyavaad, Hyper Acidity, and Gastric ailments.
            </p>

            <div className="pt-2 flex items-center justify-center gap-2 text-xs font-bold text-slate-700">
              <Activity className="w-4 h-4 text-emerald-600" />
              <span className="px-3.5 py-1.5 rounded-full bg-slate-100/90 border border-slate-200/80">
                Holistic Organ &amp; Meridian Reset
              </span>
            </div>
          </div>

          {/* Phase 4 (CTA Booking Card: 60% - 100%) */}
          <div
            ref={phase4Ref}
            style={glassCardStyle}
            className="absolute inset-x-4 sm:inset-x-6 top-1/2 -translate-y-1/2 p-8 sm:p-10 rounded-[32px] shadow-2xl space-y-5 text-center opacity-0 pointer-events-none"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50/90 border border-emerald-200/80 text-emerald-700 text-xs font-extrabold tracking-wider uppercase">
              <Stethoscope className="w-3.5 h-3.5 text-emerald-600" />
              HOLISTIC CLINICAL CONSULTATION
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1D1D1F] tracking-[-0.02em] leading-[1.05] font-heading">
              Begin your journey to pain-free living.
            </h2>

            <p className="text-[#424245] text-sm sm:text-base font-normal leading-relaxed">
              Speak with our AcuHealth Specialists for an initial evaluation of your spine, knee, or neurological condition.
            </p>

            <div className="pt-3">
              <a
                href={whatsappHeroUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="pointer-events-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-extrabold text-sm shadow-xl shadow-emerald-500/25 hover:scale-105 active:scale-95 transition-all duration-200"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                Book Acupressure Consultation
                <ArrowRight className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
