import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import PricingSection from './components/pricing/PricingSection';
import AboutSection from './components/about/AboutSection';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <PricingSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;