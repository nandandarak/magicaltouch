import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200/70 pt-16 pb-12 text-slate-500 text-sm">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Brand Info */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-600 p-0.5 shadow-md">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <Sparkles className="w-4.5 h-4.5 text-emerald-400" />
                </div>
              </div>
              <span className="font-heading font-black text-slate-900 tracking-tight text-lg">
                MAGICAL TOUCH
              </span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              Magical Touch offers you the best in non-invasive treatment. Acupressure is a simple, gentle technique to revive, restore and renew your health without surgical intervention.
            </p>
            <div className="text-xs text-slate-500 space-y-1 font-semibold">
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-600" />
                +91 99673 21313 / +91 98199 08249
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-emerald-600" />
                magicaltouchmumbai@gmail.com
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                Mumbai, Maharashtra, India
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-black text-[#1D1D1F] uppercase tracking-wider font-heading">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs font-semibold text-slate-600">
              <li>
                <Link to="/" className="hover:text-emerald-600 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/conditions" className="hover:text-emerald-600 transition-colors">AcuHealth Conditions</Link>
              </li>
              <li>
                <Link to="/science" className="hover:text-emerald-600 transition-colors">Yoga &amp; Meditation Science</Link>
              </li>
              <li>
                <Link to="/testimonials" className="hover:text-emerald-600 transition-colors">Patient Testimonials</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-emerald-600 transition-colors">Contact Clinic</Link>
              </li>
            </ul>
          </div>

          {/* Specializations Quick List */}
          <div className="md:col-span-5 space-y-3">
            <h4 className="text-xs font-black text-[#1D1D1F] uppercase tracking-wider font-heading">
              Specialized Care Areas
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs font-medium text-slate-600">
              <span>• Severe Back Pain</span>
              <span>• Body Pain &amp; Spasms</span>
              <span>• Sciatica &amp; Slip Disc</span>
              <span>• Cervical Spondylosis</span>
              <span>• Knee Pain &amp; Arthritis</span>
              <span>• Paralysis Rehab</span>
              <span>• Parkinson's Support</span>
              <span>• Foot Drop</span>
              <span>• Gastric &amp; Hyper Acidity</span>
              <span>• Creatinine Support</span>
            </div>
          </div>

        </div>

        {/* Disclaimer Section from Original Site */}
        <div className="pt-8 border-t border-slate-100 text-[11px] text-slate-400 leading-relaxed space-y-2">
          <p className="font-bold uppercase tracking-wider text-slate-500">Disclaimer</p>
          <p>
            All the information on this website is published in good faith and for general information purposes only. Any action you take upon the information on our website is strictly at your own risk. We are not liable for any losses and damages in connection with the use of our website.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between pt-4 gap-2 text-slate-400">
            <span>&copy; {new Date().getFullYear()} Magical Touch AcuHealth. All Rights Reserved.</span>
            <span>Towards better health in a gentle way.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
