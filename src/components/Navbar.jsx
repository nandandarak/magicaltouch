import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { MessageCircle, Menu, X, ArrowUpRight } from 'lucide-react';
import { Magnet } from './reactbits';

const whatsappUrl = `https://wa.me/919967321313?text=${encodeURIComponent(
  'Hi Yogesh Sir (Magical Touch), I would like to consult regarding Acupressure treatment.'
)}`;

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Conditions', path: '/conditions' },
  { name: 'The Science', path: '/science' },
  { name: 'Meet Yogesh Sir', path: '/about' },
  { name: 'Patient Stories', path: '/testimonials' },
  { name: 'Contact & Visit', path: '/contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAF9F6]/92 backdrop-blur-md border-b border-stone-200/80 py-3 shadow-xs'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 flex items-center justify-between">
        
        {/* Brand */}
        <Link to="/" className="flex items-center gap-3 group" aria-label="Magical Touch Home">
          <img
            src="/clinic_logo.png"
            alt="Magical Touch Logo"
            className="h-9 w-auto object-contain transition-transform group-hover:scale-105"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
          <div className="leading-tight">
            <span className="font-sans font-medium text-base tracking-[-0.01em] text-[#1A1A18] block">
              MAGICAL TOUCH
            </span>
            <span className="text-[10px] text-stone-500 font-light tracking-widest uppercase block">
              Acupressure &middot; Mumbai Clinic
            </span>
          </div>
        </Link>

        {/* Multi-Page Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-white/70 backdrop-blur-xs px-3 py-1.5 rounded-full border border-stone-200/70 shadow-2xs">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                  isActive
                    ? 'bg-[#1A1A18] text-white shadow-xs'
                    : 'text-stone-600 hover:text-stone-950 hover:bg-stone-100/70'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="tel:+919967321313"
            className="text-xs font-medium text-stone-700 hover:text-stone-900 px-3 py-1.5 transition-colors"
          >
            +91 99673 21313
          </a>
          <Magnet padding={20} magnetStrength={2.5}>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1A1A18] hover:bg-stone-800 text-white text-xs font-medium tracking-wide transition-all active:scale-95 shadow-sm"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-white" />
              <span>Consult</span>
              <ArrowUpRight className="w-3 h-3 opacity-70" />
            </a>
          </Magnet>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 rounded-full text-stone-800 hover:bg-stone-100 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#FAF9F6] border-b border-stone-200 px-6 py-6 space-y-4 animate-fade-in">
          <div className="flex flex-col space-y-2 text-sm font-medium text-stone-700">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-2.5 rounded-xl transition-all ${
                    isActive ? 'bg-[#1A1A18] text-white' : 'hover:bg-stone-100'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
          <div className="pt-4 border-t border-stone-200 flex flex-col gap-2">
            <a
              href="tel:+919967321313"
              className="w-full text-center py-2.5 rounded-full border border-stone-300 text-xs font-medium text-stone-800"
            >
              Call +91 99673 21313
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-2.5 rounded-full bg-[#1A1A18] text-white text-xs font-medium"
            >
              Consult with Yogesh Sir
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
