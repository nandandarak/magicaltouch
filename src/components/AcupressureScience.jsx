import React from 'react';
import { Activity, Shield, Sparkles, CheckCircle2 } from 'lucide-react';

export default function AcupressureScience() {
  const pillars = [
    {
      icon: Activity,
      title: 'Bio-Electrical Meridian Unblocking',
      desc: 'Nerve centers conduct micro-electrical signals. Rhythmic manual acupressure removes bio-electrical resistance along trapped spinal and peripheral nerve pathways.',
    },
    {
      icon: Shield,
      title: '100% Non-Invasive & Zero Medication',
      desc: 'No heavy painkiller reliance or surgical risks. Therapy works directly with your body’s natural neural healing processes for long-term structural alignment.',
    },
    {
      icon: Sparkles,
      title: 'Root Decompression over Symptom Masking',
      desc: 'Instead of numbing nerve signals temporarily, clinical acupressure restores physical space between compressed discs, joints, and muscular fascia.',
    },
  ];

  return (
    <section id="science" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-emerald-700 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              Yoga, Meditation &amp; Acupressure Science
            </div>

            <h2 className="text-4xl sm:text-5xl font-black text-[#1D1D1F] tracking-tighter leading-[1.08] font-heading">
              Why Acupressure Outperforms <span className="text-gradient-emerald">Temporary Relief.</span>
            </h2>

            <p className="text-slate-600 text-base sm:text-lg font-medium leading-relaxed">
              Pain medication masks brain pain signals while disc compression worsens. Clinical acupressure applies calculated bio-mechanical pressure directly to spinal ganglia and meridian points.
            </p>

            <div className="space-y-3 pt-2">
              {[
                'Stimulates micro-blood circulation to damaged disc cartilage',
                'Releases deep chronic muscular spasms around L4-L5 vertebrae',
                'Restores full joint mobility without artificial implants or injections',
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <span className="text-sm font-bold text-slate-800">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Pillar Cards */}
          <div className="lg:col-span-6 space-y-6">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div key={idx} className="bento-card p-6 sm:p-8 flex items-start gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 flex-shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-extrabold text-[#1D1D1F] font-heading tracking-tight">
                      {pillar.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Yoga & Meditation Section from Original Site */}
        <div className="mt-20 bento-card p-8 sm:p-12 bg-gradient-to-br from-emerald-900/10 via-slate-900/5 to-teal-900/10 border border-emerald-500/20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                Ancient Wellness Practices
              </div>
              <h3 className="text-3xl sm:text-4xl font-black text-[#1D1D1F] tracking-tight font-heading">
                Relax with <span className="text-gradient-emerald">Yoga &amp; Meditation.</span>
              </h3>
              <p className="text-slate-600 text-base leading-relaxed font-medium">
                Yoga is as ancient as our civilization. Now proudly practiced, popularized, and propagated around the world, it helps not just in toning and weight reduction but also in calming the mind—thus helping in ridding the body of psycho-somatic diseases.
              </p>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: 'Toning of Body', desc: 'Strengthens muscular core & posture alignment.' },
                { title: 'Rejuvenation', desc: 'Revitalizes biological cellular energy.' },
                { title: 'Mind & Body Harmony', desc: 'Aligns nervous reflex & mental tranquility.' },
                { title: 'Pranayam Balance', desc: 'Regulates breathing for emotional equilibrium.' },
                { title: 'Stress-Free Life', desc: 'Deep systemic relaxation for modern stress.' },
                { title: 'Special Meditation', desc: 'Guided sessions for deeper spiritual insight.' },
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-4.5 rounded-2xl border border-slate-200/80 shadow-sm flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-black text-[#1D1D1F]">{item.title}</h4>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
