import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#FAF9F6] border-t border-stone-200/80 pt-16 pb-12 text-stone-500 text-xs font-light">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 space-y-12">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/clinic_logo.png"
                alt="Magical Touch Logo"
                className="h-9 w-auto object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
              <div>
                <span className="font-sans font-medium text-base tracking-[-0.01em] text-[#1A1A18] block">
                  MAAGICAL TOUCH
                </span>
                <span className="text-[10px] text-stone-500 font-light tracking-widest uppercase block">
                  Acupressure &middot; Holistic Healing Clinic
                </span>
              </div>
            </div>

            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed max-w-md font-light">
              Magical Touch is true to its name... Magical for long-term
              problems through non-invasive, ancient but proven technique of
              Acupressure. Effective as it is, it is also economical with zero
              side effects.
            </p>

            <div className="space-y-1.5 pt-1 text-stone-700">
              <p className="flex items-center gap-2">
                <span className="text-stone-400">Phone:</span>
                <a
                  href="tel:+919152292507"
                  className="hover:text-black font-medium"
                >
                  +91 91522 92507
                </a>
                {/*<span className="text-stone-300">/</span>
                <a
                  href="tel:+919819908249"
                  className="hover:text-black font-medium"
                >
                  +91 98199 08249
                </a>*/}
              </p>
              <p className="flex items-center gap-2">
                <span className="text-stone-400">Email:</span>
                <a
                  href="mailto:magicaltouchmumbai@gmail.com"
                  className="hover:text-black font-medium"
                >
                  magicaltouchmumbai@gmail.com
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-stone-400">Location:</span>
                <span className="font-medium">Mumbai, Maharashtra, India</span>
              </p>
            </div>

            {/* Social Links from magical-touch.co.in */}
            <div className="flex items-center gap-2 pt-2">
              <a
                href="https://www.facebook.com/magicaltouch.co.in"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-full bg-stone-200/80 hover:bg-stone-900 hover:text-white flex items-center justify-center text-stone-700 transition-all text-[11px] font-medium"
                title="Facebook"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/magicaltouch.co.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-full bg-stone-200/80 hover:bg-stone-900 hover:text-white flex items-center justify-center text-stone-700 transition-all text-[11px] font-medium"
                title="Instagram"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/channel/UC5bjBQE4dVqfd-Gvf3AjsSw"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-full bg-stone-200/80 hover:bg-stone-900 hover:text-white flex items-center justify-center text-stone-700 transition-all text-[11px] font-medium"
                title="YouTube"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-[11px] font-mono uppercase tracking-widest text-stone-400">
              Explore Website
            </h4>
            <ul className="space-y-2 text-xs font-light text-stone-600">
              <li>
                <Link to="/" className="hover:text-black transition-colors">
                  Home Diagnostic
                </Link>
              </li>
              <li>
                <Link
                  to="/conditions"
                  className="hover:text-black transition-colors"
                >
                  12 Conditions We Heal
                </Link>
              </li>
              <li>
                <Link
                  to="/science"
                  className="hover:text-black transition-colors"
                >
                  The Science of Acupressure
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-black transition-colors"
                >
                  Meet Yogaysh Lahoti &amp; Story
                </Link>
              </li>
              <li>
                <Link
                  to="/testimonials"
                  className="hover:text-black transition-colors"
                >
                  Patient Transformations
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-black transition-colors"
                >
                  Contact &amp; Clinic Visit
                </Link>
              </li>
            </ul>
          </div>

          {/* 12 Conditions List from magical-touch.co.in */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-[11px] font-mono uppercase tracking-widest text-stone-400">
              Specialized Care Areas
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs font-light text-stone-600">
              <span>&middot; Severe Back Pain</span>
              <span>&middot; Body Pain &amp; Spasms</span>
              <span>&middot; Sciatica &amp; Slip Disc</span>
              <span>&middot; Cervical Spondylosis</span>
              <span>&middot; Knee Pain &amp; Arthritis</span>
              <span>&middot; Paralysis Rehab</span>
              <span>&middot; Parkinson's Support</span>
              <span>&middot; Foot Drop</span>
              <span>&middot; Hyper Acidity</span>
              <span>&middot; Ghatiyavaad</span>
              <span>&middot; Creatinine Care</span>
              <span>&middot; Yoga Meditation</span>
            </div>
          </div>
        </div>

        {/* Disclaimer Section from magical-touch.co.in */}
        <div className="pt-8 border-t border-stone-200 text-[11px] text-stone-400 leading-relaxed space-y-2 font-light">
          <p className="font-medium uppercase tracking-wider text-stone-500">
            Disclaimer
          </p>
          <p>
            All the information on this website is published in good faith and
            for general information purposes only. Any action you take upon the
            information on our website is strictly at your own risk. We are not
            liable for any losses and damages in connection with the use of our
            website.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between pt-4 gap-2 text-stone-400">
            <span>
              &copy; {new Date().getFullYear()} Magical Touch. All Rights
              Reserved.
            </span>
            <span className="font-serif italic text-stone-600">
              Towards better health in a gentle way.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
