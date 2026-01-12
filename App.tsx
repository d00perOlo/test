import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Fleet from './components/Fleet';
import Process from './components/Process';
import Booking from './components/Booking';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import MotionBackground from './components/MotionBackground';
import MobileNav from './components/MobileNav';

export default function App() {
  return (
    <div className="relative">
      <a className="skip-link" href="#main">Przejdź do treści</a>
      
      <MotionBackground />
      <Navbar />

      <main id="main">
        <div id="top" className="h-0" />
        <Hero />
        <Stats />
        <Fleet />
        <Process />
        <Booking />
        <FinalCTA />
      </main>

      <Footer />
      
      <MobileNav />
    </div>
  );
}