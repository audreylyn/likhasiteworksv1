import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Process from '../components/Process';
import Services from '../components/Services';
import Pricing from '../components/Pricing';
import FAQs from '../components/FAQs';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import BottomNavigation from '../components/BottomNavigation';

export default function AboutPage() {
  return (
    <div className="text-black text-[16px] leading-[normal] w-full max-w-none mx-auto font-sans">
      <div className="min-h-full bg-[rgb(255,_253,_235)] text-[rgb(31,_31,_31)] leading-[22.4px] font-['Bricolage_Grotesque',sans-serif]">
        <Header />
        <Hero />
        <About />
        <Process />
        <Services />
        <Pricing />
        <FAQs />
        <Contact />
        <Footer />
        <BottomNavigation />
      </div>
    </div>
  );
}
