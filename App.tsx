import React from 'react';
import Header from './components/Header';
import Background from './components/Background';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Fleet from './components/Fleet';
import ChargingSection from './components/ChargingSection';
import Process from './components/Process';
import Booking from './components/Booking';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import MobileCTA from './components/MobileCTA';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden selection:bg-[#00f2ff] selection:text-[#0a0e17]">
      <Background />
      <Header />
      
      <main id="main">
        <div id="top" className="h-0" />
        <Hero />
        <Stats />
        <Fleet />
        <ChargingSection />
        <Process />
        <Booking />
        <FinalCTA />
      </main>

      <Footer />
      <MobileCTA />
    </div>
  );
};

export default App;