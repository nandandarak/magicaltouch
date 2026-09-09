import React from 'react';
import { Star, UserCheck, ArrowUpRight } from 'lucide-react';

export default function CaseStudies() {
  const whatsappUrl = (story) =>
    `https://wa.me/919967321313?text=${encodeURIComponent(
      `Hi Magical Touch AcuHealth, I read about the recovery case of ${story} and would like to consult for my treatment.`
    )}`;

  const stories = [
    {
      title: 'Severe Back Pain Almost Completely Cured',
      condition: 'Chronic Lumbar & Disc Pain',
      patient: 'Rohit Jain',
      duration: '12 Sessions',
      quote:
        'We tried all sorts of physiotherapy, orthopedics, acupuncture etc. but none of them worked. Finally Acupressure worked at Magical Touch AcuHealth and my severe back pain is almost gone.',
      stats: 'Back Pain Gone',
      tag: 'Back Pain Relief',
    },
    {
      title: 'Walked Pain-Free & Climbed Stairs Without Knee Cap',
      condition: 'Severe Knee Pain (2 Years on Knee Cap)',
      patient: 'Mrs. Kinjal Gada',
      duration: '14 Sessions',
      quote:
        'I was having severe knee pain and had been wearing a knee cap for 2 years. With the help of Magical Touch Acupressure, I am able to walk without pain and can even climb the stairs comfortably.',
      stats: 'No Knee Cap Needed',
      tag: 'Knee Restoration',
    },
    {
      title: 'Started Walking with Stick After Just 5 Sessions',
      condition: "Parkinson's Disease & Mobility",
      patient: 'Mr. Devendra Garg',
      duration: '5 Sessions',
      quote:
        "I was suffering from Parkinson's disease. Magical Touch specialists treated me with acupressure & massage therapy. Just after 5 sessions, I started walking through a stick.",
      stats: 'Rapid Motor Response',
      tag: 'Neuromuscular Care',
    },
    {
      title: 'Continuous Daily Improvement & Pain Reduction',
      condition: 'Chronic Joint & Body Pain',
      patient: 'Mrs. Chandrakala Prasad',
      duration: 'Ongoing Care',
      quote:
        'Acupressure at Magical Touch helped me a lot. Day by day I am improving continuously without any side effects or medication.',
      stats: 'Daily Progress',
      tag: 'Holistic Recovery',
    },
  ];

  return (
    <section id="recovery" className="py-24 bg-[#F5F5F7] relative border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-emerald-700 text-xs font-bold uppercase tracking-wider shadow-sm">
              <UserCheck className="w-3.5 h-3.5 text-emerald-600" />
              Verified Patient Recovery Stories
            </div>
            <h2 className="text-4xl sm:text-6xl font-black text-[#1D1D1F] tracking-tighter leading-[1.08] font-heading">
              Proven Clinical <span className="text-gradient-emerald">Results.</span>
            </h2>
            <p className="text-slate-600 text-lg font-medium">
              Real recovery journeys of Mumbai patients who avoided invasive procedures through Magical Touch AcuHealth.
            </p>
          </div>

          <div className="flex items-center gap-4 bg-white px-6 py-4 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400" />
              ))}
            </div>
            <div>
              <span className="text-base font-black text-[#1D1D1F] block leading-none">4.9 / 5.0 Rating</span>
              <span className="text-xs text-slate-500 font-medium">Over 100+ Recovered Patients</span>
            </div>
          </div>
        </div>

        {/* Story Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stories.map((story, idx) => (
            <div key={idx} className="bento-card p-8 flex flex-col justify-between relative group">
              <div className="space-y-6">
                
                {/* Header Tag */}
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
                    {story.tag}
                  </span>
                  <span className="text-xs font-semibold text-slate-400">{story.duration}</span>
                </div>

                <h3 className="text-2xl font-black text-[#1D1D1F] tracking-tight font-heading leading-snug">
                  {story.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed italic">
                  "{story.quote}"
                </p>
              </div>

              {/* Card Footer */}
              <div className="pt-6 mt-6 border-t border-slate-100 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-extrabold text-[#1D1D1F]">{story.patient}</h4>
                    <span className="text-xs font-medium text-emerald-700">{story.condition}</span>
                  </div>
                  <a
                    href={whatsappUrl(story.condition)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 hover:bg-emerald-500 hover:text-white transition-colors"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
