import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-4 md:px-12 relative overflow-hidden pt-20">
      
      {/* Background Graphic Element - Huge skewed block */}
      <div className="absolute top-0 right-[-20%] w-[70%] h-full bg-gradient-to-b from-gray-900/40 to-transparent skew-x-[-20deg] -z-10 border-l border-white/5"></div>

      <div className="max-w-[1400px] mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        
        {/* TEXT CONTENT */}
        <div className="z-20 flex flex-col items-start">
          
          <div className="inline-flex items-center gap-2 mb-6 border border-cyan/30 bg-cyan/5 px-4 py-1 skew-x-[-12deg]">
             <span className="skew-x-[12deg] text-cyan text-xs font-black italic tracking-widest uppercase">
               System Online • 42 Auta Dostępne
             </span>
          </div>

          <h1 className="text-7xl sm:text-8xl md:text-9xl font-black italic leading-[0.85] mb-8 tracking-tighter text-white uppercase mix-blend-lighten">
            <span className="block text-outline opacity-50">Limit</span>
            <span className="block">Is A</span>
            <span className="text-vermilion">Lie.</span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl font-medium italic max-w-md mb-12 border-l-4 border-cyan pl-6">
            Czysta adrenalina na żądanie. Bez kluczyków. Bez biura. Tylko Ty i maszyna.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
            <a href="#rezerwacja" className="btn-ignite px-12 py-5 text-xl text-center shadow-[0_0_30px_rgba(255,42,0,0.4)]">
              Ruszaj
            </a>
            <a href="#flota" className="px-12 py-5 border border-white/20 hover:border-cyan hover:text-cyan text-white font-black italic uppercase tracking-widest transition-colors skew-x-[-12deg] flex items-center justify-center">
              <span className="skew-x-[12deg]">Zobacz Maszyny</span>
            </a>
          </div>
        </div>

        {/* VISUAL - THE RED CAR */}
        <div className="relative z-10 w-full h-[300px] md:h-[500px] flex items-center justify-center pointer-events-none">
           {/* Abstract Speed Lines behind car */}
           <div className="absolute inset-0 bg-gradient-to-r from-cyan/20 to-transparent h-[2px] top-[60%] blur-sm"></div>
           <div className="absolute inset-0 bg-gradient-to-r from-vermilion/40 to-transparent h-[4px] top-[65%] blur-md"></div>

           <svg viewBox="0 0 800 400" className="w-full h-full drop-shadow-[0_20px_50px_rgba(255,42,0,0.2)]">
              <defs>
                <linearGradient id="carBody" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#cc2200" />
                  <stop offset="50%" stopColor="#ff2a00" />
                  <stop offset="100%" stopColor="#ff5500" />
                </linearGradient>
                <linearGradient id="glass" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#000" stopOpacity="0.9" />
                </linearGradient>
              </defs>

              {/* Motion Blur Trail */}
              <path d="M-100,280 L200,280" stroke="#ff2a00" strokeWidth="20" strokeLinecap="round" opacity="0.3" className="animate-warp" />
              
              {/* Car Silhouette (Low, aggressive) */}
              <g transform="translate(50, 50)">
                {/* Wheels */}
                <circle cx="150" cy="250" r="45" fill="#111" stroke="#333" strokeWidth="2" />
                <circle cx="550" cy="250" r="50" fill="#111" stroke="#333" strokeWidth="2" />
                
                {/* Rims */}
                <circle cx="150" cy="250" r="30" fill="none" stroke="#555" strokeWidth="8" strokeDasharray="10 10" className="animate-[spin_1s_linear_infinite]" />
                <circle cx="550" cy="250" r="35" fill="none" stroke="#555" strokeWidth="8" strokeDasharray="10 10" className="animate-[spin_1s_linear_infinite]" />

                {/* Body */}
                <path d="M50,250 Q40,200 130,180 L250,140 L450,135 L620,180 Q680,200 680,240 L650,260 L140,260 Z" fill="url(#carBody)" />
                
                {/* Cockpit */}
                <path d="M260,145 L440,140 L480,180 L220,180 Z" fill="url(#glass)" />

                {/* Side Intake */}
                <path d="M480,180 L400,220 L550,210 Z" fill="#991100" />

                {/* Headlight Stream */}
                <path d="M640,210 L800,200 L800,240" fill="url(#glass)" opacity="0.5" />
              </g>
           </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;