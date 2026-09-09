import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Sparkles, MessageCircle, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappUrl = `https://wa.me/919967321313?text=${encodeURIComponent(
    'Hi Magical Touch AcuHealth, I would like to inquire about Acupressure Pain Relief consultation.'
  )}`;

  const navbarStyle = {
    background: scrolled ? 'rgba(255, 255, 255, 0.90)' : 'rgba(255, 255, 255, 0.75)',
    backdropFilter: 'blur(20px) saturate(180%)',
    WebkitBackdropFilter: 'blur(20px) saturate(180%)',
    borderBottom: scrolled ? '1px solid rgba(226, 232, 240, 0.9)' : '1px solid rgba(255, 255, 255, 0.6)',
  };

  const navLinkClass = ({ isActive }) =>
    `transition-colors ${
      isActive ? 'text-emerald-600 font-extrabold' : 'text-slate-600 hover:text-emerald-600 font-semibold'
    }`;

  return (
    <header
      style={navbarStyle}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3.5 shadow-sm' : 'py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between">
          {/* Brand & Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-600 p-0.5 shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-emerald-400" />
              </div>
            </div>
            <div>
              <span className="font-heading font-black text-lg sm:text-xl tracking-[-0.02em] text-[#1D1D1F] block">
                MAGICAL TOUCH
              </span>
              <p className="text-xs text-slate-500 font-medium hidden sm:block">
                AcuHealth &amp; Pain Healing • Mumbai
              </p>
            </div>
          </Link>

          {/* Router Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <NavLink to="/" end className={navLinkClass}>
              About Us
            </NavLink>
            <NavLink to="/conditions" className={navLinkClass}>
              Conditions
            </NavLink>
            <NavLink to="/science" className={navLinkClass}>
              Yoga &amp; Meditation
            </NavLink>
            <NavLink to="/testimonials" className={navLinkClass}>
              Testimonials
            </NavLink>
            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>
          </nav>

          {/* Action CTA Button */}
          <div className="hidden lg:flex items-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-extrabold text-xs sm:text-sm shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-105 active:scale-95 transition-all duration-200"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              Contact on WhatsApp
            </a>
          </div>

          {/* Mobile Drawer Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-950"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-2xl border-b border-slate-200 px-6 pt-4 pb-6 space-y-4 shadow-xl">
          <nav className="flex flex-col space-y-3 font-bold text-slate-700 text-sm">
            <NavLink
              to="/"
              end
              onClick={() => setMobileMenuOpen(false)}
              className={navLinkClass}
            >
              About Us
            </NavLink>
            <NavLink
              to="/conditions"
              onClick={() => setMobileMenuOpen(false)}
              className={navLinkClass}
            >
              Conditions
            </NavLink>
            <NavLink
              to="/science"
              onClick={() => setMobileMenuOpen(false)}
              className={navLinkClass}
            >
              Yoga &amp; Meditation
            </NavLink>
            <NavLink
              to="/testimonials"
              onClick={() => setMobileMenuOpen(false)}
              className={navLinkClass}
            >
              Testimonials
            </NavLink>
            <NavLink
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className={navLinkClass}
            >
              Contact
            </NavLink>
          </nav>
          <div className="pt-3 border-t border-slate-100">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-extrabold text-sm shadow-md"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              Contact on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
