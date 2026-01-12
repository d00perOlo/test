import React from 'react';

const ChargingSection: React.FC = () => {
  return (
    <section className="bg-[#0a0e17] py-20 md:py-32 border-y border-white/5 relative overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#00f2ff]/5 blur-[100px] -z-10 rounded-full translate-x-1/2" aria-hidden="true"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col-reverse md:flex-row items-center gap-16 md:gap-24">
        
        {/* Text Content */}
        <div className="w-full md:w-1/2 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#00f2ff]/30 bg-[#00f2ff]/10 text-[#00f2ff] text-[10px] font-black uppercase tracking-widest mb-6">
            <div className="w-2 h-2 rounded-full bg-[#00f2ff] animate-pulse"></div>
            <span>Tylko dla klientów</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            WŁASNA SIEĆ <br />
            <span className="text-white">ENERGII</span>
          </h2>

          <p className="text-gray-400 text-lg mb-8 leading-relaxed">
            Nie szukaj ładowarek na mapie. Jako kierowca Velocity masz wyłączny dostęp do naszych hubów 
            <span className="text-white font-bold"> Supercharge (350kW)</span>.
          </p>

          <div className="flex items-center gap-6 mb-10">
            <div className="flex flex-col">
              <span className="text-5xl font-black text-[#00f2ff]">-50%</span>
              <span className="text-[10px] uppercase tracking-widest text-gray-500 mt-1">Cena ładowania</span>
            </div>
            <div className="w-px h-12 bg-white/10"></div>
            <div className="flex flex-col">
              <span className="text-5xl font-black text-white">0 zł</span>
              <span className="text-[10px] uppercase tracking-widest text-gray-500 mt-1">Opłata postojowa</span>
            </div>
          </div>

          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-sm text-gray-300">
              <svg className="w-5 h-5 text-[#00f2ff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <path d="M22 4L12 14.01l-3-3"></path>
              </svg>
              <span>Automatyczne rozpoznawanie auta (Plug & Charge)</span>
            </li>
            <li className="flex items-center gap-3 text-sm text-gray-300">
              <svg className="w-5 h-5 text-[#00f2ff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <path d="M22 4L12 14.01l-3-3"></path>
              </svg>
              <span>Rezerwacja stanowiska przez aplikację</span>
            </li>
          </ul>
        </div>

        {/* Animation Container */}
        <div className="w-full md:w-1/2 flex justify-center items-center relative">
          <div className="glass-card p-8 md:p-12 w-full max-w-md aspect-square flex items-center justify-center relative overflow-hidden group hover:border-[#00f2ff]/50 transition-colors duration-500">
            
            {/* SVG Animation */}
            <svg viewBox="0 0 400 300" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Animacja podłączania ładowarki do samochodu">
              <style>{`
                .plug-group { animation: plugIn 4s infinite ease-in-out; }
                .energy-flow { stroke-dasharray: 10; stroke-dashoffset: 100; animation: flow 4s infinite linear; opacity: 0; }
                .battery-level { transform-origin: bottom; transform: scaleY(0); animation: charge 4s infinite linear; }
                .glow-circle { opacity: 0; animation: glow 4s infinite ease-out; }
                
                @keyframes plugIn {
                  0%, 10% { transform: translateX(-60px); }
                  30%, 80% { transform: translateX(0); }
                  90%, 100% { transform: translateX(-60px); }
                }
                
                @keyframes flow {
                  0%, 25% { stroke-dashoffset: 100; opacity: 0; }
                  30% { opacity: 1; }
                  80% { stroke-dashoffset: 0; opacity: 1; }
                  85%, 100% { opacity: 0; }
                }

                @keyframes charge {
                  0%, 30% { transform: scaleY(0.1); fill: #ef4444; } /* Red/Low */
                  45% { fill: #eab308; } /* Yellow */
                  80%, 100% { transform: scaleY(1); fill: #00f2ff; } /* Teal/Full */
                }

                @keyframes glow {
                  0%, 28% { opacity: 0; r: 10px; stroke-width: 0; }
                  30% { opacity: 1; stroke-width: 4px; }
                  45% { opacity: 0; r: 50px; stroke-width: 0; }
                  100% { opacity: 0; }
                }
              `}</style>

              {/* Car Outline (Socket side) */}
              <path d="M220 50 C 300 50, 350 100, 350 250 L 350 300 L 220 300" stroke="#334155" strokeWidth="2" fill="none" />
              <circle cx="280" cy="150" r="25" stroke="#475569" strokeWidth="2" fill="#0f172a" />
              <circle cx="280" cy="150" r="8" fill="#1e293b" />

              {/* Connector & Cable Group */}
              <g className="plug-group">
                {/* Cable */}
                <path d="M0 150 L 190 150" stroke="#334155" strokeWidth="8" />
                {/* Energy Line (inside cable) */}
                <path d="M0 150 L 190 150" stroke="#00f2ff" strokeWidth="2" className="energy-flow" />
                
                {/* Plug Head */}
                <rect x="190" y="130" width="50" height="40" rx="4" fill="#1e293b" stroke="#475569" strokeWidth="2" />
                <rect x="240" y="142" width="15" height="16" rx="2" fill="#94a3b8" />
                
                {/* Status Light on Plug */}
                <circle cx="215" cy="150" r="3" fill="#00f2ff" className="energy-flow" style={{ animationName: 'flow', animationDuration: '4s' }} />
              </g>

              {/* Connection Burst/Glow */}
              <circle cx="280" cy="150" r="10" stroke="#00f2ff" fill="none" className="glow-circle" />

              {/* Battery Indicator (Floating UI) */}
              <g transform="translate(300, 80)">
                <rect x="0" y="0" width="30" height="60" rx="4" stroke="white" strokeWidth="2" fill="#0f172a" opacity="0.8" />
                <rect x="10" y="-6" width="10" height="6" rx="1" fill="white" opacity="0.8" />
                {/* Fill Level */}
                <rect x="4" y="56" width="22" height="52" rx="1" className="battery-level" transform="rotate(180 15 28)" />
                {/* Bolt Icon */}
                <path d="M12 35 L18 25 L14 25 L16 15 L10 25 L14 25 Z" fill="#0a0e17" className="energy-flow" style={{ animationDelay: '0.5s' }} />
              </g>
            </svg>

            {/* Reflection/Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none"></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ChargingSection;