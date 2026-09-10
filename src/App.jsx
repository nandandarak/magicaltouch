import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ScrollToTop from './components/ScrollToTop';

import HomePage from './pages/HomePage';
import ConditionsPage from './pages/ConditionsPage';
import SciencePage from './pages/SciencePage';
import TestimonialsPage from './pages/TestimonialsPage';
import ContactPage from './pages/ContactPage';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useEffect(() => {
    // Lenis high-performance smooth scroll setup synchronized with GSAP ScrollTrigger
    const lenis = new Lenis({
      duration: 0.9,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.5,
    });

    lenis.on('scroll', ScrollTrigger.update);

    const updateLenis = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateLenis);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(updateLenis);
      lenis.destroy();
    };
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[#F5F5F7] text-[#1D1D1F] selection:bg-emerald-500 selection:text-white flex flex-col justify-between">
        {/* Navigation Header */}
        <Navbar />

        {/* Multi-Page Routes */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/conditions" element={<ConditionsPage />} />
            <Route path="/science" element={<SciencePage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        {/* Footer Section */}
        <Footer />

        {/* Floating Bottom-Right WhatsApp Pill */}
        <FloatingWhatsApp />
      </div>
    </Router>
  );
}
