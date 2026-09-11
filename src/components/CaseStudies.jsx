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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stories.map((story, idx) => (
            <div key={idx} className="bento-card p-8 flex flex-col justify-between relative group bg-white rounded-[28px] border border-slate-200/80 hover:shadow-xl hover:border-emerald-400/40 transition-all duration-300">
              <div className="space-y-4">
                
                {/* Header Tag */}
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
                    {story.tag}
                  </span>
                  <span className="text-xs font-semibold text-slate-400">{story.duration}</span>
                </div>

                <h3 className="text-xl font-black text-[#1D1D1F] tracking-tight font-heading leading-snug">
                  {story.title}
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed italic">
                  "{story.quote}"
                </p>
              </div>

              {/* Card Footer */}
              <div className="pt-6 mt-6 border-t border-slate-100">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-extrabold text-[#1D1D1F]">{story.patient}</h4>
                    <span className="text-xs font-semibold text-emerald-700 block">{story.condition}</span>
                  </div>
                  <a
                    href={whatsappUrl(story.condition)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-emerald-50 text-emerald-700 hover:bg-emerald-600 hover:text-white flex items-center justify-center transition-all active:scale-95 border border-emerald-200/60"
                    title="Consult about this condition"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Authentic Clinic Testimonial Spotlight Banner */}
        <div className="bg-white rounded-[32px] border border-slate-200/80 p-8 sm:p-10 shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden aspect-[16/10] bg-slate-100">
            <img
              src="/clinic_media/testimonial.jpg"
              alt="Authentic Patient Recovery at Magical Touch"
              className="w-full h-full object-cover"
              onError={(e) => { e.currentTarget.src = '/clinic_media/about.jpg'; }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4">
              <span className="text-white text-xs font-bold drop-shadow">
                Authentic In-Clinic Therapy Session · Mumbai
              </span>
            </div>
          </div>
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              Direct Clinic Feedback
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-[#1D1D1F] font-heading tracking-tight">
              "We tried all sorts of physiotherapy, orthopedic, acupuncture... finally Acupressure worked."
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Rohit Jain and over 100 recovered patients discovered that chronic pain doesn't require invasive surgical cuts or lifetime painkiller dependency. Yogesh Sir's manual meridian unblocking targets the biological source of pain.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="https://wa.me/919967321313?text=Hi%20Yogesh%20Sir%2C%20I%20read%20the%20patient%20recovery%20stories%20and%20want%20to%20consult%20for%20my%20pain."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-600 text-white text-xs font-extrabold shadow-md shadow-emerald-600/25 hover:bg-emerald-700 active:scale-95 transition-all"
              >
                <span>Consult with Yogesh Sir</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <span className="text-xs font-semibold text-slate-500">
                100% Non-Invasive &middot; Zero Side Effects
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
