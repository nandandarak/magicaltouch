import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ScrollToTop from './components/ScrollToTop';
import { ClickSpark } from './components/reactbits';

import HomePage from './pages/HomePage';
import ConditionsPage from './pages/ConditionsPage';
import SciencePage from './pages/SciencePage';
import AboutPage from './pages/AboutPage';
import TestimonialsPage from './pages/TestimonialsPage';
import ContactPage from './pages/ContactPage';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useEffect(() => {
    // §1, §11 — Zero-latency, display-synced scroll via Lenis + GSAP ticker.
    // lagSmoothing(0) prevents GSAP from throttling on unfocused tabs,
    // keeping ScrollTrigger values current when Lenis feeds it.
    const lenis = new Lenis({
      // §4 — critically-damped feel: duration ≈ response 0.4 (no overshoot)
      duration: 0.75,
      // Exponential-decay easing that mirrors Apple's standard deceleration curve
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
      // §5 — preserve scroll velocity character
      wheelMultiplier: 0.9,
      // §8 — slight momentum amplification on touch to feel physical
      touchMultiplier: 1.8,
      // §10 — avoid over-sensitive touch initiation
      touchInertiaMultiplier: 25,
    });

    // Feed Lenis scroll time into ScrollTrigger on every display frame
    lenis.on('scroll', ScrollTrigger.update);

    const tick = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    // §11 — disable lag smoothing so every rAF frame is used
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <ClickSpark
        sparkColor="#C5A869"
        sparkCount={9}
        sparkRadius={24}
        sparkSize={10}
        duration={450}
        className="min-h-screen bg-[#FAF9F6] text-[#1A1A18] selection:bg-stone-800 selection:text-white flex flex-col"
      >
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/conditions" element={<ConditionsPage />} />
            <Route path="/science" element={<SciencePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        <Footer />
        <FloatingWhatsApp />
      </ClickSpark>
    </Router>
  );
}
