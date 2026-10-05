import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Stethoscope,
  MessageCircle,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    condition: "Sciatica & Lower Back Pain",
    duration: "More than 1 year",
    hasMri: "Yes",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Hi Yogaysh Lahoti (Magical Touch),\nName: ${form.name}\nPhone: ${form.phone}\nCondition: ${form.condition}\nDuration: ${form.duration}\nMRI/X-ray Available: ${form.hasMri}\nDetails: ${form.message}`;
    window.open(
      `https://wa.me/919152292507?text=${encodeURIComponent(text)}`,
      "_blank",
    );
    setSubmitted(true);
  };

  return (
    <div className="pt-24 bg-[#FAF9F6] min-h-screen">
      {/* Page Header */}
      <section className="py-16 sm:py-24 border-b border-stone-200/80">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-100 border border-stone-200 text-stone-700 text-xs font-semibold uppercase tracking-wider">
            <Stethoscope className="w-3.5 h-3.5 text-stone-800" />
            <span>Direct Consultation &middot; Home Visit Pan India</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-light text-[#1A1A18] tracking-[-0.03em] leading-[1.08]">
            Let&rsquo;s Discuss Your{" "}
            <span className="font-serif italic font-normal text-stone-600">
              Recovery Roadmap.
            </span>
          </h1>

          <p className="text-stone-600 text-base sm:text-xl font-light leading-relaxed max-w-2xl mx-auto">
            You don't need to struggle in silence or rush into high-risk
            surgery. Reach out directly to Yogaysh Lahoti for an honest,
            empathetic clinical evaluation and home visit.
          </p>
        </div>
      </section>

      {/* Main 2-Column Contact & Consultation Grid */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Column: Direct Contact Details & Reassurance */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <span className="text-xs font-mono uppercase tracking-widest text-stone-400 block">
                  Home Visit Care &middot; Pan India
                </span>
                <h2 className="text-3xl font-light text-[#1A1A18] tracking-tight">
                  Reach us directly anytime.
                </h2>
                <p className="text-stone-600 text-sm sm:text-base font-light leading-relaxed">
                  Whether you have an emergency spasm or wish to schedule a home visit
                  appointment for an elderly family member, we are ready to
                  assist you.
                </p>
              </div>

              {/* Contact List */}
              <div className="space-y-6 pt-2">
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-stone-200/80 shadow-xs">
                  <div className="w-10 h-10 rounded-xl bg-stone-100 flex items-center justify-center shrink-0 text-stone-800">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[11px] font-mono text-stone-400 uppercase tracking-wider block">
                      Phone &middot; WhatsApp
                    </span>
                    <a
                      href="tel:+919152292507"
                      className="text-base font-medium text-stone-900 hover:text-stone-600 block"
                    >
                      +91 91522 92507
                    </a>
                    {/*<a
                      href="tel:+919819908249"
                      className="text-sm font-medium text-stone-600 hover:text-stone-900 block"
                    >
                      +91 98199 08249
                    </a>*/}
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-stone-200/80 shadow-xs">
                  <div className="w-10 h-10 rounded-xl bg-stone-100 flex items-center justify-center shrink-0 text-stone-800">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[11px] font-mono text-stone-400 uppercase tracking-wider block">
                      Email Inquiries
                    </span>
                    <a
                      href="mailto:magicaltouchmumbai@gmail.com"
                      className="text-sm font-medium text-stone-900 hover:text-stone-600 block"
                    >
                      magicaltouchmumbai@gmail.com
                    </a>
                    <span className="text-xs text-stone-400 font-light block">
                      Replies within 24 hours
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-stone-200/80 shadow-xs">
                  <div className="w-10 h-10 rounded-xl bg-stone-100 flex items-center justify-center shrink-0 text-stone-800">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[11px] font-mono text-stone-400 uppercase tracking-wider block">
                      Service Mode
                    </span>
                    <span className="text-sm font-medium text-stone-900 block">
                      Magical Touch Acupressure (Home Visit)
                    </span>
                    <span className="text-xs text-stone-500 font-light block">
                      Home Visit Across Pan India
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-stone-200/80 shadow-xs">
                  <div className="w-10 h-10 rounded-xl bg-stone-100 flex items-center justify-center shrink-0 text-stone-800">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[11px] font-mono text-stone-400 uppercase tracking-wider block">
                      Consultation Hours
                    </span>
                    <span className="text-sm font-medium text-stone-900 block">
                      Monday &ndash; Saturday: 10:00 AM &ndash; 8:00 PM
                    </span>
                    <span className="text-xs text-stone-500 font-light block">
                      Prior appointment recommended for zero waiting time
                    </span>
                  </div>
                </div>
              </div>

              {/* Honest Patient Guarantee */}
              <div className="p-5 rounded-2xl bg-emerald-50/60 border border-emerald-200/80 space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-900">
                  <ShieldCheck className="w-4 h-4 text-emerald-700" />
                  <span>Our Promise to Every Patient:</span>
                </div>
                <p className="text-xs text-emerald-900/80 font-light leading-relaxed">
                  We will never recommend unnecessary treatments. If we review
                  your MRI or pain symptoms and believe you require urgent
                  orthopedic surgery or hospitalization, we will tell you openly
                  and immediately.
                </p>
              </div>
            </div>

            {/* Right Column: Interactive WhatsApp Consultation Form */}
            <div className="lg:col-span-7">
              <div className="rounded-[32px] bg-white border border-stone-200/90 p-8 sm:p-12 shadow-sm space-y-6">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 text-xs font-semibold text-stone-800 uppercase tracking-wider">
                    <MessageCircle className="w-4 h-4 text-emerald-600" />
                    <span>Direct WhatsApp Consultation Request</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-light text-[#1A1A18]">
                    Send your symptoms to Yogaysh Lahoti
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-500 font-light">
                    Fill in your details to immediately generate a personalized
                    WhatsApp consultation message.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5 pt-2">
                  <div>
                    <label className="text-xs font-medium text-stone-800 block mb-1.5">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Shah"
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      className="w-full px-4 py-3.5 rounded-2xl bg-stone-50 border border-stone-200 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-stone-800 transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-medium text-stone-800 block mb-1.5">
                        Phone Number / WhatsApp
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98..."
                        value={form.phone}
                        onChange={(e) =>
                          setForm({ ...form, phone: e.target.value })
                        }
                        className="w-full px-4 py-3.5 rounded-2xl bg-stone-50 border border-stone-200 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-stone-800 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-medium text-stone-800 block mb-1.5">
                        Primary Pain Area
                      </label>
                      <select
                        value={form.condition}
                        onChange={(e) =>
                          setForm({ ...form, condition: e.target.value })
                        }
                        className="w-full px-4 py-3.5 rounded-2xl bg-stone-50 border border-stone-200 text-sm text-stone-900 focus:outline-none focus:border-stone-800 transition-colors cursor-pointer"
                      >
                        <option value="Sciatica & Lower Back Pain">
                          Sciatica &amp; Lower Back Pain
                        </option>
                        <option value="L4-L5 Slip Disc">L4-L5 Slip Disc</option>
                        <option value="Severe Knee Pain & Arthritis">
                          Severe Knee Pain &amp; Arthritis
                        </option>
                        <option value="Cervical Spondylosis & Neck">
                          Cervical Spondylosis &amp; Neck
                        </option>
                        <option value="Frozen Shoulder">Frozen Shoulder</option>
                        <option value="Paralysis & Stroke Rehab">
                          Paralysis &amp; Stroke Rehab
                        </option>
                        <option value="Parkinson's Disease Support">
                          Parkinson's Disease Support
                        </option>
                        <option value="Migraine & Sleep Insomnia">
                          Migraine &amp; Sleep Insomnia
                        </option>
                        <option value="Hyper Acidity & Navi Displacement">
                          Hyper Acidity &amp; Navi Displacement
                        </option>
                        <option value="Other Chronic Condition">
                          Other Chronic Condition
                        </option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-medium text-stone-800 block mb-1.5">
                        How Long Have You Suffered?
                      </label>
                      <select
                        value={form.duration}
                        onChange={(e) =>
                          setForm({ ...form, duration: e.target.value })
                        }
                        className="w-full px-4 py-3.5 rounded-2xl bg-stone-50 border border-stone-200 text-sm text-stone-900 focus:outline-none focus:border-stone-800 transition-colors cursor-pointer"
                      >
                        <option value="Less than 1 month">
                          Less than 1 month
                        </option>
                        <option value="1 to 6 months">1 to 6 months</option>
                        <option value="6 months to 1 year">
                          6 months to 1 year
                        </option>
                        <option value="More than 1 year">
                          More than 1 year (Chronic)
                        </option>
                        <option value="Several years">Several years</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-medium text-stone-800 block mb-1.5">
                        Do You Have an MRI / X-Ray?
                      </label>
                      <select
                        value={form.hasMri}
                        onChange={(e) =>
                          setForm({ ...form, hasMri: e.target.value })
                        }
                        className="w-full px-4 py-3.5 rounded-2xl bg-stone-50 border border-stone-200 text-sm text-stone-900 focus:outline-none focus:border-stone-800 transition-colors cursor-pointer"
                      >
                        <option value="Yes, ready to send on WhatsApp">
                          Yes, ready to send on WhatsApp
                        </option>
                        <option value="No, not yet scanned">
                          No, not yet scanned
                        </option>
                        <option value="Old reports available">
                          Old reports available
                        </option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-medium text-stone-800 block mb-1.5">
                      Briefly Describe What You Are Experiencing
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g. Shooting pain down the right leg when walking, or advised knee replacement surgery."
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-2xl bg-stone-50 border border-stone-200 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-stone-800 transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-2xl bg-[#1A1A18] hover:bg-stone-800 text-white text-xs sm:text-sm font-medium tracking-wide flex items-center justify-center gap-2.5 transition-all active:scale-[0.99] shadow-md cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Send Inquiry to Yogaysh Lahoti on WhatsApp</span>
                    <ArrowUpRight className="w-4 h-4 opacity-70" />
                  </button>
                </form>

                {submitted && (
                  <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-center gap-2.5 text-xs text-emerald-900">
                    <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0" />
                    <span>
                      WhatsApp chat initiated with your pre-filled inquiry.
                      Yogaysh Lahoti will respond promptly.
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
