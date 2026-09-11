import React from 'react';
import { MessageCircle, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { SpotlightCard, Magnet, ShinyText } from '../components/reactbits';

const whatsappUrl = `https://wa.me/919967321313?text=${encodeURIComponent(
  'Hi Yogesh Sir (Magical Touch), I read your science page and would like to consult about holistic healing.'
)}`;

const COMPARISONS = [
  {
    method: 'Acupressure (Magical Touch)',
    invasive: 'Zero Incisions, 100% Manual',
    sideEffects: 'None. Completely natural & safe',
    rootCause: 'Releases nerve entrapment & restores circulation',
    recovery: 'Walk immediately; 3-7 sessions',
  },
  {
    method: 'Spine / Joint Surgery',
    invasive: 'High risk (cutting, screws, anesthesia)',
    sideEffects: 'Infection risk, scar tissue, failed back surgery',
    rootCause: 'Cuts away tissue; does not fix muscle clamping',
    recovery: 'Months of painful post-op bedrest',
  },
  {
    method: 'Painkiller Medications',
    invasive: 'Oral pills / Cortisone injections',
    sideEffects: 'Severe gastric acidity, kidney & liver toxicity',
    rootCause: 'Only numbs brain receptors; disc remains pinched',
    recovery: 'Pain returns the moment medicine wears off',
  },
];

export default function SciencePage() {
  return (
    <div className="pt-24 bg-[#FAF9F6] min-h-screen">
      
      {/* Header — Short & Sweet */}
      <section className="py-20 sm:py-28 bg-white border-b border-stone-200/60">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 border border-stone-200/80 text-[11px] font-mono text-stone-600">
            <ShinyText text="NATURAL DECOMPRESSION &middot; MERIDIAN SCIENCE" speed={4} />
          </div>

          <h1 className="text-4xl sm:text-6xl font-light text-[#1A1A18] tracking-[-0.03em] leading-tight">
            The science of <span className="font-serif italic font-normal text-stone-500">gentle healing.</span>
          </h1>

          <p className="text-stone-600 text-base sm:text-lg font-light leading-relaxed max-w-xl mx-auto pt-2">
            &ldquo;Your body is engineered to heal. When pinched nerve roots are gently freed, chronic pain disappears naturally.&rdquo;
          </p>
        </div>
      </section>

      {/* 2 Core Principles with clean video stages */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 space-y-20">
          
          {/* Pillar 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-stone-400 block">
                Principle 01 &bull; Bio-Electrical Meridians
              </span>
              <h2 className="text-3xl sm:text-4xl font-light text-[#1A1A18] tracking-tight">
                Reawakening Cellular Signal Flow
              </h2>
              <div className="space-y-3 text-stone-600 text-base font-light leading-relaxed">
                <p>
                  Our body operates on continuous bio-electrical impulses along neural pathways. When stress or injury clamps down on muscles, these signals get blocked.
                </p>
                <p>
                  Targeted manual pressure on meridian junction points stimulates micro-circulation, clears stagnation, and lets natural nerve signals fire freely again.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-[32px] overflow-hidden bg-stone-900 border border-stone-200/80 shadow-lg aspect-[4/3] relative">
                <video
                  src="/video.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="rounded-[32px] overflow-hidden bg-stone-900 border border-stone-200/80 shadow-lg aspect-[4/3] relative">
                <video
                  src="/hero_clean.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-stone-400 block">
                Principle 02 &bull; Natural Decompression
              </span>
              <h2 className="text-3xl sm:text-4xl font-light text-[#1A1A18] tracking-tight">
                How Compressed Nerves Release
              </h2>
              <div className="space-y-3 text-stone-600 text-base font-light leading-relaxed">
                <p>
                  When a lumbar disc bulges, surrounding muscles contract into a tight protective knot, cutting off blood supply and trapping the nerve.
                </p>
                <p>
                  Acupressure releases this muscular spasm at the root. With pressure relieved, oxygenated blood floods the nerve, allowing the disc to retract naturally.
                </p>
              </div>
            </div>
          </div>

          {/* Comparison */}
          <div className="pt-10 space-y-8">
            <div className="text-center max-w-xl mx-auto space-y-2">
              <h3 className="text-2xl sm:text-3xl font-light text-[#1A1A18]">
                Comparing Your Options
              </h3>
              <p className="text-stone-600 text-sm font-light">
                Why patients across Mumbai choose gentle Acupressure over surgery and painkillers.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse bg-white rounded-3xl overflow-hidden shadow-xs border border-stone-200/80">
                <thead>
                  <tr className="bg-stone-50 border-b border-stone-200 text-xs font-mono uppercase tracking-wider text-stone-500">
                    <th className="p-5 sm:p-6">Treatment</th>
                    <th className="p-5 sm:p-6">Invasiveness</th>
                    <th className="p-5 sm:p-6">Side Effects</th>
                    <th className="p-5 sm:p-6">Root Cause?</th>
                    <th className="p-5 sm:p-6">Recovery</th>
                  </tr>
                </thead>
                <tbody className="text-xs sm:text-sm font-light text-stone-700 divide-y divide-stone-100">
                  {COMPARISONS.map((row, idx) => (
                    <tr
                      key={idx}
                      className={idx === 0 ? 'bg-emerald-50/40 font-medium text-stone-900' : 'hover:bg-stone-50/50'}
                    >
                      <td className="p-5 sm:p-6 font-medium flex items-center gap-2">
                        {idx === 0 && <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />}
                        <span>{row.method}</span>
                      </td>
                      <td className="p-5 sm:p-6">{row.invasive}</td>
                      <td className="p-5 sm:p-6">{row.sideEffects}</td>
                      <td className="p-5 sm:p-6">{row.rootCause}</td>
                      <td className="p-5 sm:p-6">{row.recovery}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Action Callout with SpotlightCard & Magnet */}
          <SpotlightCard
            spotlightColor="rgba(197, 168, 105, 0.16)"
            className="p-8 sm:p-12 rounded-[32px] bg-white border border-stone-200/80 shadow-xs flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left transition-all hover:border-amber-700/30"
          >
            <div className="space-y-1.5 max-w-xl">
              <h4 className="text-2xl font-light text-[#1A1A18]">
                Ready to experience gentle healing?
              </h4>
              <p className="text-stone-500 text-xs sm:text-sm font-light">
                Consult with Yogesh Sir at Magical Touch for a personalized, non-invasive roadmap.
              </p>
            </div>

            <Magnet padding={20} magnetStrength={2.2}>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#1A1A18] hover:bg-stone-800 text-white text-xs sm:text-sm font-medium tracking-wide shadow-md active:scale-95 transition-all shrink-0"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Discuss Your Case on WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
              </a>
            </Magnet>
          </SpotlightCard>

        </div>
      </section>

    </div>
  );
}
