import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

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
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              <div>
                <span className="font-sans font-medium text-base tracking-[-0.01em] text-[#1A1A18] block">
                  MAGICAL TOUCH
                </span>
                <span className="text-[10px] text-stone-500 font-light tracking-widest uppercase block">
                  Acupressure &middot; Holistic Healing Clinic
                </span>
              </div>
            </div>

            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed max-w-md font-light">
              Magical Touch is true to its name... Magical for long-term problems through non-invasive, ancient but proven technique of Acupressure. Effective as it is, it is also economical with zero side effects.
            </p>

            <div className="space-y-1.5 pt-1 text-stone-700">
              <p className="flex items-center gap-2">
                <span className="text-stone-400">Phone:</span>
                <a href="tel:+919967321313" className="hover:text-black font-medium">+91 99673 21313</a>
                <span className="text-stone-300">/</span>
                <a href="tel:+919819908249" className="hover:text-black font-medium">+91 98199 08249</a>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-stone-400">Email:</span>
                <a href="mailto:magicaltouchmumbai@gmail.com" className="hover:text-black font-medium">magicaltouchmumbai@gmail.com</a>
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
                f
              </a>
              <a
                href="https://www.instagram.com/magicaltouch.co.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-full bg-stone-200/80 hover:bg-stone-900 hover:text-white flex items-center justify-center text-stone-700 transition-all text-[11px] font-medium"
                title="Instagram"
              >
                ig
              </a>
              <a
                href="https://www.youtube.com/channel/UC5bjBQE4dVqfd-Gvf3AjsSw"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-full bg-stone-200/80 hover:bg-stone-900 hover:text-white flex items-center justify-center text-stone-700 transition-all text-[11px] font-medium"
                title="YouTube"
              >
                yt
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-[11px] font-mono uppercase tracking-widest text-stone-400">
              Explore Website
            </h4>
            <ul className="space-y-2 text-xs font-light text-stone-600">
              <li><Link to="/" className="hover:text-black transition-colors">Home Diagnostic</Link></li>
              <li><Link to="/conditions" className="hover:text-black transition-colors">12 Conditions We Heal</Link></li>
              <li><Link to="/science" className="hover:text-black transition-colors">The Science of Acupressure</Link></li>
              <li><Link to="/about" className="hover:text-black transition-colors">Meet Yogesh Sir &amp; Story</Link></li>
              <li><Link to="/testimonials" className="hover:text-black transition-colors">Patient Transformations</Link></li>
              <li><Link to="/contact" className="hover:text-black transition-colors">Contact &amp; Clinic Visit</Link></li>
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
          <p className="font-medium uppercase tracking-wider text-stone-500">Disclaimer</p>
          <p>
            All the information on this website is published in good faith and for general information purposes only. Any action you take upon the information on our website is strictly at your own risk. We are not liable for any losses and damages in connection with the use of our website.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between pt-4 gap-2 text-stone-400">
            <span>&copy; {new Date().getFullYear()} Magical Touch. All Rights Reserved.</span>
            <span className="font-serif italic text-stone-600">Towards better health in a gentle way.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
