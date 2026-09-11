import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageCircle, ArrowUpRight, HelpCircle } from 'lucide-react';
import { Magnet, ShinyText } from './reactbits';

const FAQS = [
  {
    q: 'Will the acupressure pressure hurt or cause more pain?',
    a: 'Not at all. There are no sudden jerks, cracking of bones, or painful needles involved. Yogesh Sir applies graduated, calibrated thumb and finger pressure on the outer fascia and meridian reflex points. Patients describe the sensation as a deep, relieving release — often sighing with instant relaxation as trapped muscle spasms unlock.'
  },
  {
    q: 'I have an MRI report showing an L4-L5 disc herniation and severe sciatica. Can this really be cured without surgery?',
    a: 'Yes, in the vast majority of cases. Surgeons look at the disc mechanically and recommend cutting it out or fusing vertebrae. But the pain is actually caused by inflammatory nerve compression and muscle clamping around the disc. By unblocking the meridian pathways and restoring nerve conductivity, the surrounding spasm dissipates and the disc re-stabilizes naturally. Over 100+ Mumbai patients have avoided spinal fusion at Magical Touch.'
  },
  {
    q: 'My elderly mother has severe knee osteoarthritis and was advised total knee replacement. Is Acupressure safe for senior citizens?',
    a: 'It is one of the safest and gentlest therapies available for senior citizens. We have treated dozens of mothers, fathers, and grandparents in Mumbai who could barely walk or climb steps. Because Acupressure is 100% natural with zero medication, there are no risks of drug interactions, blood pressure spikes, or surgical anesthesia complications.'
  },
  {
    q: 'How many sessions will I need before I see real progress?',
    a: 'Most patients feel an unmistakable sensation of lightness and 30-50% pain reduction within the very first 1 to 3 sessions. For chronic conditions that have persisted for years (like chronic sciatica or frozen shoulder), a complete therapeutic course typically ranges from 5 to 10 sessions.'
  },
  {
    q: 'Do I have to stop my current allopathic medicines or painkillers?',
    a: 'No. You should continue any medically prescribed medications. As your acupressure treatments progress and your natural pain decreases, you can consult your primary physician to gradually taper off painkillers that harm your liver and kidneys. Acupressure complements your body without interfering with other treatments.'
  },
  {
    q: 'How do I book a consultation with Yogesh Sir?',
    a: 'It is very simple. You can message Yogesh Sir directly on WhatsApp at +91 99673 21313 or call us. Share your current pain symptoms or send your MRI / X-ray reports. We will give you an honest clinical evaluation of whether Acupressure is the right treatment for your case.'
  }
];

export default function ConversationalFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section className="py-24 sm:py-32 bg-[#FAF9F6] border-t border-stone-200/70">
      <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 border border-stone-200/80 text-[11px] font-mono text-stone-600">
            <ShinyText text="PATIENT QUESTIONS & HONEST ANSWERS" speed={4} />
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-[#1A1A18] tracking-[-0.03em] leading-tight">
            Questions you might be <span className="font-serif italic font-normal text-stone-500">asking right now.</span>
          </h2>

          <p className="text-stone-600 text-sm sm:text-base font-light leading-relaxed pt-1">
            We understand that considering alternative healing can bring up doubts when you have struggled with chronic pain for years. Here are honest answers.
          </p>
        </div>

        {/* Minimalist Hairline Accordion with smooth Framer Motion height animations */}
        <div className="border-t border-stone-200/80">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border-b border-stone-200/80 transition-colors"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full text-left py-6 sm:py-8 flex items-center justify-between gap-4 cursor-pointer group"
                >
                  <span className="text-lg sm:text-xl font-light text-[#1A1A18] tracking-tight group-hover:text-stone-600 transition-colors">
                    {faq.q}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-stone-900 bg-stone-200/60' : 'text-stone-400 group-hover:text-stone-700'
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 text-stone-600 text-base sm:text-lg font-light leading-relaxed max-w-3xl">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Still Have Doubts Callout */}
        <div className="mt-16 pt-10 border-t border-stone-200/80 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="text-lg font-medium text-stone-900">Have a specific question about your MRI or diagnosis?</h4>
            <p className="text-xs sm:text-sm text-stone-500 font-light">
              Send your reports directly to Yogesh Sir for a personalized clinical review.
            </p>
          </div>

          <Magnet padding={20} magnetStrength={2.2}>
            <a
              href="https://wa.me/919967321313?text=Hi%20Yogesh%20Sir%2C%20I%20have%20a%20question%20regarding%20my%20pain%20and%20MRI%20report."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#1A1A18] hover:bg-stone-800 text-white text-xs sm:text-sm font-medium tracking-wide shrink-0 active:scale-95 transition-all shadow-sm"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Ask Yogesh Sir on WhatsApp</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
            </a>
          </Magnet>
        </div>

      </div>
    </section>
  );
}
