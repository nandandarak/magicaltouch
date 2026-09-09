import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, Users, ShieldCheck, Clock } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function StatsBanner() {
  const bannerRef = useRef(null);
  const patientsRef = useRef(null);
  const successRef = useRef(null);
  const experienceRef = useRef(null);

  useEffect(() => {
    if (!bannerRef.current) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: bannerRef.current,
        start: 'top 90%',
        once: true,
        onEnter: () => {
          // Animate 0 -> 15,000 using direct DOM manipulation (zero React re-renders = zero scroll lag)
          gsap.to(
            { val: 0 },
            {
              val: 15000,
              duration: 2.0,
              ease: 'power2.out',
              onUpdate: function () {
                if (patientsRef.current) {
                  patientsRef.current.innerText =
                    Math.floor(this.targets()[0].val).toLocaleString() + '+';
                }
              },
            }
          );

          // Animate 0 -> 98.4
          gsap.to(
            { val: 0 },
            {
              val: 98.4,
              duration: 2.0,
              ease: 'power2.out',
              onUpdate: function () {
                if (successRef.current) {
                  successRef.current.innerText =
                    this.targets()[0].val.toFixed(1) + '%';
                }
              },
            }
          );

          // Animate 0 -> 20
          gsap.to(
            { val: 0 },
            {
              val: 20,
              duration: 1.8,
              ease: 'power2.out',
              onUpdate: function () {
                if (experienceRef.current) {
                  experienceRef.current.innerText =
                    Math.floor(this.targets()[0].val) + '+ Yrs';
                }
              },
            }
          );
        },
      });
    }, bannerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={bannerRef} className="py-16 bg-[#F5F5F7] border-y border-slate-200/70 relative z-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Stat 1: Patients Recovered */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-sm flex items-center gap-5 hover:shadow-md transition-shadow">
            <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-200/80 flex items-center justify-center text-emerald-600 flex-shrink-0">
              <Users className="w-7 h-7" />
            </div>
            <div>
              <span
                ref={patientsRef}
                className="text-3xl sm:text-4xl font-black text-[#1D1D1F] tracking-tight block font-heading"
              >
                15,000+
              </span>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Patients Recovered
              </span>
            </div>
          </div>

          {/* Stat 2: Non-Surgical Success */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-sm flex items-center gap-5 hover:shadow-md transition-shadow">
            <div className="w-14 h-14 rounded-2xl bg-teal-50 border border-teal-200/80 flex items-center justify-center text-teal-600 flex-shrink-0">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div>
              <span
                ref={successRef}
                className="text-3xl sm:text-4xl font-black text-[#1D1D1F] tracking-tight block font-heading"
              >
                98.4%
              </span>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Non-Surgical Success
              </span>
            </div>
          </div>

          {/* Stat 3: Clinical Experience */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-sm flex items-center gap-5 hover:shadow-md transition-shadow">
            <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-200/80 flex items-center justify-center text-emerald-600 flex-shrink-0">
              <Award className="w-7 h-7" />
            </div>
            <div>
              <span
                ref={experienceRef}
                className="text-3xl sm:text-4xl font-black text-[#1D1D1F] tracking-tight block font-heading"
              >
                20+ Yrs
              </span>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Clinical Experience
              </span>
            </div>
          </div>

          {/* Stat 4: Average Relief Window */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-sm flex items-center gap-5 hover:shadow-md transition-shadow">
            <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-200/80 flex items-center justify-center text-amber-600 flex-shrink-0">
              <Clock className="w-7 h-7" />
            </div>
            <div>
              <span className="text-3xl sm:text-4xl font-black text-[#1D1D1F] tracking-tight block font-heading">
                3–5 Sessions
              </span>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Average Relief Window
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
