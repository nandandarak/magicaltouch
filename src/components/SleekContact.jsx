import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";
import { SpotlightCard, Magnet, ShinyText } from "./reactbits";

export default function SleekContact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    condition: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Hi Yogaysh Lahoti (Magical Touch), my name is ${form.name}. Phone: ${form.phone}. Condition: ${form.condition}. Note: ${form.message}`;
    window.open(
      `https://wa.me/919152292507?text=${encodeURIComponent(text)}`,
      "_blank",
    );
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="py-24 sm:py-32 bg-[#FAF9F6] border-t border-stone-200/60"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Clinic Contact Details */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 border border-stone-200/80 text-[11px] font-mono text-stone-600">
                <ShinyText
                  text="DIRECT INQUIRY &middot; HOME VISIT PAN INDIA"
                  speed={4}
                />
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-[#1A1A18] tracking-[-0.03em] leading-tight">
                Schedule a{" "}
                <span className="font-serif italic font-normal text-stone-500">
                  Consultation.
                </span>
              </h2>
              <p className="text-stone-600 text-base sm:text-lg font-light leading-relaxed max-w-lg">
                Speak directly with Yogaysh Lahoti to discuss your symptoms,
                review your medical history, and evaluate non-surgical
                Acupressure home visit options.
              </p>
            </div>

            {/* Clean Contact Details List */}
            <div className="space-y-6 pt-4 border-t border-stone-200/80">
              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-stone-600 mt-1 shrink-0" />
                <div>
                  <span className="text-xs font-mono text-stone-400 uppercase tracking-wider block">
                    Phone &middot; WhatsApp
                  </span>
                  <a
                    href="tel:+919152292507"
                    className="text-base font-medium text-stone-900 hover:text-stone-600 block"
                  >
                    +91 91522 92507
                  </a>
                  <a
                    href="tel:+919819908249"
                    className="text-sm font-medium text-stone-600 hover:text-stone-900 block"
                  >
                    +91 98199 08249
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-stone-600 mt-1 shrink-0" />
                <div>
                  <span className="text-xs font-mono text-stone-400 uppercase tracking-wider block">
                    Email Inquiries
                  </span>
                  <a
                    href="mailto:magicaltouchmumbai@gmail.com"
                    className="text-base font-medium text-stone-900 hover:text-stone-600"
                  >
                    magicaltouchmumbai@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-stone-600 mt-1 shrink-0" />
                <div>
                  <span className="text-xs font-mono text-stone-400 uppercase tracking-wider block">
                    Service Mode
                  </span>
                  <span className="text-base font-medium text-stone-900 block">
                    Magical Touch Acupressure
                  </span>
                  <span className="text-sm text-stone-500 font-light block">
                    Home Visit (Pan India)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Minimalist Consultation Card */}
          <div className="lg:col-span-6">
            <SpotlightCard
              spotlightColor="rgba(197, 168, 105, 0.16)"
              className="editorial-card p-8 sm:p-10 bg-white space-y-6 shadow-sm border border-stone-200/80"
            >
              <div className="space-y-1">
                <h3 className="text-2xl font-light text-[#1A1A18] tracking-tight">
                  Direct Consultation Request
                </h3>
                <p className="text-xs text-stone-500 font-light">
                  Fill in your details to immediately initiate a WhatsApp
                  consultation.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-xs font-medium text-stone-700 block mb-1">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Shah"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-stone-800 transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-medium text-stone-700 block mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98..."
                      value={form.phone}
                      onChange={(e) =>
                        setForm({ ...form, phone: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-stone-800 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-medium text-stone-700 block mb-1">
                      Condition / Pain Area
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Severe Back Pain, Knee"
                      value={form.condition}
                      onChange={(e) =>
                        setForm({ ...form, condition: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-stone-800 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-medium text-stone-700 block mb-1">
                    Brief Description of Symptoms
                  </label>
                  <textarea
                    rows={3}
                    placeholder="How long have you had this issue? Have you tried physiotherapy or were advised surgery?"
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-stone-800 transition-colors"
                  />
                </div>

                <Magnet padding={15} className="w-full">
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-[#1A1A18] hover:bg-stone-800 text-white text-xs sm:text-sm font-medium tracking-wide flex items-center justify-center gap-2 transition-all active:scale-[0.99] shadow-sm cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Send Direct WhatsApp Inquiry</span>
                    <ArrowUpRight className="w-4 h-4 opacity-70" />
                  </button>
                </Magnet>
              </form>

              {submitted && (
                <div className="p-3 bg-stone-100 rounded-xl flex items-center gap-2 text-xs text-stone-700">
                  <CheckCircle2 className="w-4 h-4 text-stone-800 shrink-0" />
                  <span>
                    WhatsApp conversation opened. Yogaysh Lahoti will respond
                    shortly.
                  </span>
                </div>
              )}
            </SpotlightCard>
          </div>
        </div>
      </div>
    </section>
  );
}
