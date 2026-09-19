import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle2, ArrowRight, MessageCircle } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const PX_PER_CHAPTER = 720;

const chapters = [
  {
    img: "/clinic_media/about.jpg",
    tag: "Ancient Healing Wisdom · Yogaysh Lahoti",
    title: "Ancient technique for\nmodern chronic problems.",
    body: "Often the rigours of modern life take a toll on health. Not all chronic health issues need painful surgical intervention. Acupressure is a simple, non-invasive, ancient technique to revive, restore, and renew your health without drugs or surgery.",
    points: [
      "10+ Years of hands-on clinic practice",
      "Non-invasive & 100% drug-free",
      "Personalized consultation with Yogaysh Lahoti",
    ],
    stat: "10+ Years",
    statLabel: "Clinical Practice in Mumbai",
  },
  {
    img: "/clinic_media/magical-touch-backpain.jpg",
    tag: "Severe Back Pain & Lumbar Relief",
    title: "Sitting hours & stress take\na toll. We release the root.",
    body: "Long sedentary desk hours and improper posture compress lumbar vertebrae and cause intense agony. Our precision acupressure decompresses spinal tension and restores painless movement without injections or surgery.",
    points: [
      "Relief for severe lumbar & muscle spasms",
      "Stimulates healing along Du & Bladder meridians",
      "Effective alternative to risky spine surgery",
    ],
    stat: "100+",
    statLabel: "Documented Severe Recoveries",
  },
  {
    img: "/clinic_media/magical-touch-sciatica.jpg",
    tag: "Sciatica & Slip Disc Care",
    title: "Pinched sciatic nerves\ncan be fully unblocked.",
    body: "Sciatica pain radiating from lower back to feet and debilitating slip disc (L4-L5 / L5-S1) make sitting and walking unbearable. Targeted acupressure releases nerve entrapment and realigns natural disc spacing.",
    points: [
      "Unblocks compressed L4-L5 / S1 nerve roots",
      "Stops shooting leg and thigh pain",
      "Avoid invasive spinal surgery",
    ],
    stat: "94%",
    statLabel: "Report Pain Freedom",
  },
  {
    img: "/clinic_media/magical-touch-knee-pain.jpg",
    tag: "Knee Pain & Arthritis / Ghatiyavaad",
    title: "Walk without pain.\nDiscard the knee cap.",
    body: "Knee replacement should be the last resort, not the first. By activating over 15 specific acupressure points around the knee and releasing patellar friction, patients like Mrs. Kinjal Gada walk and climb stairs pain-free after years on knee caps.",
    points: [
      "15+ targeted meridian points for joints",
      "Synovial fluid balance & friction release",
      "Effective for arthritis & Ghatiyavaad",
    ],
    stat: "2 Yrs",
    statLabel: "Knee-Cap Discarded by Patients",
  },
  {
    img: "/clinic_media/magical-touch-paralysis.jpg",
    tag: "Neuromuscular & Post-Stroke Care",
    title: "Dormant nerve pathways\ncan be awakened again.",
    body: "Rehabilitation for Paralysis, Parkinson's disease, and Foot Drop is much faster and more sustainable with acupressure. Gentle rhythmic stimulation reactivates motor nerve signals between brain and limbs.",
    points: [
      "Post-stroke paralysis motor rehabilitation",
      "Parkinson's tremor relief & walking stability",
      "Trigger point activation for Foot Drop",
    ],
    stat: "5 Sessions",
    statLabel: "To Begin Walking with Support",
  },
  {
    img: "/clinic_media/yoga.jpg",
    tag: "Yoga & Meditation Science",
    title: "Relax with ancient\nYoga and Meditation.",
    body: "Now proudly practiced around the world, yoga and pranayam help not only in body toning and rejuvenation, but calm the mind to rid the body of psychosomatic illnesses and prevent recurring pain.",
    points: [
      "Pranayams for emotional balance",
      "Relaxation for a stress-free life",
      "Special meditation for deep healing insight",
    ],
    stat: "100%",
    statLabel: "Holistic Mind-Body Harmony",
  },
];

export default function PinnedScrollStory() {
  const wrapRef = useRef(null);
  const pinRef = useRef(null);
  const imgLayerRef = useRef([]);
  const txtLayerRef = useRef([]);
  const progressDotsRef = useRef([]);

  const whatsapp = `https://wa.me/919152292507?text=${encodeURIComponent(
    "Hi Magical Touch AcuHealth, I would like to book an Acupressure Consultation.",
  )}`;

  useEffect(() => {
    const wrap = wrapRef.current;
    const pin = pinRef.current;
    if (!wrap || !pin) return;

    const N = chapters.length;

    // Initial visibility states
    imgLayerRef.current.forEach((el, i) => {
      if (!el) return;
      gsap.set(el, { opacity: i === 0 ? 1 : 0, scale: i === 0 ? 1 : 1.06 });
    });
    txtLayerRef.current.forEach((el, i) => {
      if (!el) return;
      gsap.set(el, { opacity: i === 0 ? 1 : 0, y: i === 0 ? 0 : 28 });
    });

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrap,
          start: "top top",
          end: `+=${N * PX_PER_CHAPTER}`,
          pin: pin,
          scrub: 0.7,
          anticipatePin: 1,
          onUpdate: (self) => {
            const active = Math.min(N - 1, Math.floor(self.progress * N));
            progressDotsRef.current.forEach((dot, i) => {
              if (!dot) return;
              gsap.to(dot, {
                width: i === active ? 28 : 7,
                backgroundColor: i === active ? "#059669" : "#CBD5E1",
                duration: 0.25,
                ease: "power2.out",
              });
            });
          },
        },
      });

      for (let i = 0; i < N - 1; i++) {
        const seg = 1 / N;
        const boundary = (i + 1) * seg;
        const fadeOutStart = boundary - seg * 0.3;
        const fadeInEnd = boundary + seg * 0.05;

        const ci = imgLayerRef.current[i];
        const ni = imgLayerRef.current[i + 1];
        const ct = txtLayerRef.current[i];
        const nt = txtLayerRef.current[i + 1];

        if (ct)
          tl.to(
            ct,
            { opacity: 0, y: -20, ease: "power2.in", duration: seg * 0.25 },
            fadeOutStart,
          );
        if (ci)
          tl.to(
            ci,
            {
              opacity: 0,
              scale: 0.96,
              ease: "power2.inOut",
              duration: seg * 0.3,
            },
            fadeOutStart - seg * 0.05,
          );
        if (ni)
          tl.to(
            ni,
            { opacity: 1, scale: 1, ease: "power2.out", duration: seg * 0.3 },
            boundary - seg * 0.15,
          );
        if (nt)
          tl.to(
            nt,
            { opacity: 1, y: 0, ease: "power2.out", duration: seg * 0.25 },
            boundary - seg * 0.1,
          );
      }
    }, wrap);

    return () => ctx.revert();
  }, []);

  return (
    /* WRAP: acts as scroll spacer — height = N chapters + 1 viewport */
    <div
      ref={wrapRef}
      className="relative bg-[#FAF8F5]"
      style={{ height: `${chapters.length * PX_PER_CHAPTER}px` }}
    >
      {/* PIN: this element gets pinned by GSAP, height = 100vh */}
      <div
        ref={pinRef}
        className="w-full bg-[#FAF8F5]"
        style={{ height: "100vh" }}
      >
        {/* Inner grid — full-height flex */}
        <div className="h-full max-w-[1400px] mx-auto px-6 sm:px-10 xl:px-16 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center py-10">
          {/* ━━━━━━ LEFT — Photo Stack ━━━━━━ */}
          <div className="relative h-[52vh] lg:h-[82vh] rounded-[32px] overflow-hidden shadow-2xl shadow-slate-300/50">
            {chapters.map((ch, i) => (
              <img
                key={i}
                ref={(el) => (imgLayerRef.current[i] = el)}
                src={ch.img}
                alt={ch.tag}
                className="absolute inset-0 w-full h-full object-cover"
              />
            ))}
            {/* Subtle bottom gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent pointer-events-none rounded-[32px]" />
          </div>

          {/* ━━━━━━ RIGHT — Text Stack ━━━━━━ */}
          <div className="relative flex flex-col justify-center h-full py-10 lg:py-16">
            {chapters.map((ch, i) => (
              <div
                key={i}
                ref={(el) => (txtLayerRef.current[i] = el)}
                className="absolute inset-0 flex flex-col justify-center space-y-6"
              >
                {/* Chapter tag */}
                <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-slate-200 text-emerald-700 text-[11px] font-extrabold tracking-[0.12em] uppercase shadow-sm w-fit">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                  {ch.tag}
                </div>

                {/* Heading */}
                <h2 className="text-4xl sm:text-5xl xl:text-[3.4rem] font-black text-[#1a1a1a] tracking-[-0.03em] leading-[1.08] whitespace-pre-line font-heading">
                  {ch.title}
                </h2>

                {/* Body */}
                <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-md font-medium">
                  {ch.body}
                </p>

                {/* Checkpoints */}
                <ul className="space-y-2.5">
                  {ch.points.map((pt, j) => (
                    <li key={j} className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span className="text-sm font-bold text-slate-800">
                        {pt}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Stat + CTA */}
                <div className="flex flex-wrap items-center gap-6 pt-1">
                  <div className="space-y-1">
                    <p className="text-[2.4rem] font-black text-emerald-700 font-heading leading-none tracking-tight">
                      {ch.stat}
                    </p>
                    <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-[0.15em]">
                      {ch.statLabel}
                    </p>
                  </div>
                  <a
                    href={whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-emerald-600 text-white font-extrabold text-[13px] tracking-wide hover:bg-emerald-700 transition-colors duration-200 shadow-lg shadow-emerald-600/25 group"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    Book Free Consultation
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>

                {/* Progress dots */}
                <div className="flex items-center gap-2 pt-4">
                  {chapters.map((_, di) => (
                    <div
                      key={di}
                      ref={(el) => {
                        if (i === 0) progressDotsRef.current[di] = el;
                      }}
                      className="rounded-full"
                      style={{
                        height: 3,
                        width: di === 0 ? 28 : 7,
                        backgroundColor: di === 0 ? "#059669" : "#CBD5E1",
                        transition: "none",
                      }}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
