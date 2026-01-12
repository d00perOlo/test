import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center px-6 md:px-24 pt-28 md:pt-32 pb-16 relative overflow-hidden">
      <div className="w-full md:w-1/2 z-10">
        <div className="inline-block px-4 py-1 border border-[#00f2ff]/30 bg-[#00f2ff]/10 text-[#00f2ff] text-xs font-extrabold mb-6 tracking-widest">
          DOSTĘP NATYCHMIASTOWY
        </div>

        <h1 className="text-5xl md:text-7xl font-black leading-none mb-7">
          MOBILNOŚĆ <br />
          <span className="text-gradient">BEZ ZWŁOKI</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-400 max-w-lg mb-10 leading-relaxed">
          Pomiń kolejki. Odetnij papierologię. Zarezerwuj auto w kilka klików — szybko, czytelnie, bez tarcia.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          <a href="#rezerwacja" className="btn-primary px-9 py-5 rounded-none text-base md:text-lg inline-flex items-center justify-center">
            Zarezerwuj teraz
          </a>

          <a href="#flota" className="px-9 py-5 border border-white/20 hover:border-white transition-colors flex items-center justify-center gap-3">
            <span className="font-semibold">Zobacz flotę</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M5 12h14m-7-7 7 7-7 7"/>
            </svg>
          </a>
        </div>

        <div className="mt-8 text-xs uppercase tracking-widest text-gray-500">
          Strefy: Warszawa • Berlin • London
        </div>
      </div>

      <div className="w-full md:w-1/2 mt-14 md:mt-0 relative">
        <div className="car-svg-container float-animation">
          <svg viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Abstrakcyjna ilustracja auta w ruchu">
            <path className="speed-path" d="M100 300 L700 300 L750 250 L750 200 L600 150 L200 150 L100 220 Z" stroke="#00f2ff" strokeWidth="2" />
            <path className="speed-path" d="M50 280 H250" stroke="#ff8c00" strokeWidth="4" strokeLinecap="round" />
            <path className="speed-path" d="M20 250 H200" stroke="#ff8c00" strokeWidth="2" />
            <path className="speed-path" d="M80 220 H150" stroke="#00f2ff" strokeWidth="1" />
            <path d="M600 150 C650 150 750 200 750 250" stroke="#00f2ff" strokeWidth="8" opacity="0.3" />
            <circle cx="220" cy="300" r="40" stroke="#00f2ff" strokeWidth="2" />
            <circle cx="630" cy="300" r="40" stroke="#00f2ff" strokeWidth="2" />
          </svg>
        </div>

        <div className="absolute top-8 right-6 glass-card p-4 border-l-4 border-l-[#00f2ff]">
          <div className="text-[10px] text-gray-400 uppercase tracking-widest">Czas ładowania</div>
          <div className="text-2xl font-extrabold">0.4s</div>
        </div>
        <div className="absolute bottom-8 left-6 glass-card p-4 border-l-4 border-l-[#ff8c00]">
          <div className="text-[10px] text-gray-400 uppercase tracking-widest">Dostępność</div>
          <div className="text-2xl font-extrabold">99.9%</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;