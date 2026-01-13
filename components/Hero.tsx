import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden bg-void">
      
      {/* 1. Motion Background Layer - Asymmetrical/Diagonal */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Deep Graphite Base */}
        <div className="absolute inset-0 bg-[#080808]"></div>
        
        {/* Aggressive Diagonal Slice (Graphite Lighter) */}
        <div className="absolute top-[-20%] right-[-15%] w-[80%] h-[150%] bg-[#101010] skew-x-[-25deg] border-l border-white/5 origin-top"></div>
        
        {/* Speed Streaks (Cyan & Orange) - Pure Motion */}
        <div className="absolute top-[40%] left-[-10%] w-[120%] h-[2px] bg-gradient-to-r from-transparent via-cyan/20 to-transparent skew-y-[5deg] blur-[2px] animate-pulse-fast"></div>
        <div className="absolute top-[65%] right-[-20%] w-[100%] h-[6px] bg-gradient-to-l from-transparent via-orange/10 to-transparent skew-y-[-3deg] blur-[4px] animate-pulse"></div>
      </div>

      <div className="max-w-[1600px] mx-auto w-full px-6 md:px-12 relative z-10 pt-24 md:pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* TEXT ENGINE - Occupies 7 cols on desktop */}
          <div className="lg:col-span-7 flex flex-col items-start relative">
            
            {/* ECO SIGNAL: Strictly for environmental status */}
            <div className="inline-flex items-center gap-3 mb-6 md:mb-8 border border-techGreen/30 bg-techGreen/dim px-4 py-1 skew-x-[-12deg] backdrop-blur-md">
               <div className="w-1.5 h-1.5 bg-techGreen rounded-full animate-ping-slow"></div>
               <span className="skew-x-[12deg] text-techGreen text-[10px] md:text-xs font-mono font-bold tracking-widest uppercase">
                 ECO MODE: ACTIVE • REGENERACJA
               </span>
            </div>
            
            {/* Headline - Staggered & Motion-focused */}
            <h1 className="flex flex-col font-black italic uppercase tracking-tighter leading-[0.8] select-none relative z-20">
              {/* Part 1: Ghost/Outline - "LIMIT" */}
              <span className="text-[12vw] lg:text-[10rem] text-transparent bg-clip-text bg-gradient-to-r from-white/20 to-transparent skew-x-[-12deg] translate-x-2 lg:translate-x-8 mix-blend-overlay">
                LIMIT
              </span>
              
              {/* Part 2: Connector - "TO" */}
              <span className="text-4xl lg:text-7xl text-white ml-2 lg:ml-12 -my-2 lg:-my-4 skew-x-[-12deg] relative z-10">
                TO
              </span>
              
              {/* Part 3: Impact - "FIKCJA" (Hyper Orange) */}
              <span className="text-[14vw] lg:text-[12rem] text-orange drop-shadow-[0_0_50px_rgba(255,59,0,0.4)] skew-x-[-12deg] -translate-x-2 lg:-translate-x-4 relative z-30">
                FIKCJA
              </span>
            </h1>

            {/* Subtext - Directional */}
            <div className="mt-8 lg:mt-10 max-w-xl skew-x-[-12deg] ml-2 lg:ml-6">
              <p className="text-lg lg:text-2xl text-gray-400 font-medium italic border-l-2 border-cyan pl-6 skew-x-[12deg]">
                Czysta adrenalina na żądanie. Bez kluczyków. Bez biura.
              </p>
            </div>

            {/* CTA Group - Launch Trigger */}
            <div className="mt-12 lg:mt-16 ml-2 lg:ml-6 flex flex-col sm:flex-row gap-6 skew-x-[-12deg] relative z-40">
               <a href="#rezerwacja" className="btn-ignite px-12 py-6 text-2xl tracking-widest hover:scale-105 transition-transform flex items-center gap-6 group shadow-[10px_10px_0px_rgba(0,0,0,0.5)]">
                  <span className="skew-x-[12deg] font-black italic">ODPAL SILNIK</span>
                  {/* Directional Arrow Icon */}
                  <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-black border-b-[8px] border-b-transparent skew-x-[12deg] group-hover:translate-x-3 transition-transform duration-300"></div>
               </a>
            </div>
          </div>

          {/* VISUAL ENGINE - Car bursting out of the frame */}
          <div className="lg:col-span-5 relative h-[300px] lg:h-[700px] flex items-center justify-center lg:justify-end pointer-events-none mt-10 lg:mt-0">
            
            {/* Abstract Velocity Cone (Backlight) */}
            <div className="absolute right-[-50%] top-1/2 -translate-y-1/2 w-[150vw] h-[500px] bg-gradient-to-r from-orange/10 to-transparent skew-x-[-60deg] blur-3xl mix-blend-screen"></div>

            <svg viewBox="0 0 800 400" className="w-[140%] lg:w-full h-full drop-shadow-[20px_20px_60px_rgba(0,0,0,0.8)] z-10 translate-x-10 lg:translate-x-0" style={{ transform: 'perspective(1000px) rotateY(-10deg) rotateZ(3deg)' }}>
              <defs>
                <linearGradient id="heroCarBody" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ff2a00" />
                  <stop offset="100%" stopColor="#cc2200" />
                </linearGradient>
                <linearGradient id="heroGlass" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#000" stopOpacity="0.9" />
                </linearGradient>
                <linearGradient id="headlightBeam" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#fff" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#00f0ff" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="exhaustFlame" x1="100%" y1="0%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="#FF3B00" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#FF9000" stopOpacity="0" />
                </linearGradient>
                <filter id="motionBlurX">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="12,0" />
                </filter>
              </defs>
              
              <style>{`
                @keyframes rush {
                  0% { stroke-dashoffset: 400; opacity: 0; }
                  20% { opacity: 0.8; }
                  100% { stroke-dashoffset: -400; opacity: 0; }
                }
                @keyframes flicker {
                   0%, 100% { opacity: 0.8; transform: scaleX(1); }
                   50% { opacity: 0.4; transform: scaleX(0.9); }
                }
                @keyframes beamPulse {
                   0%, 100% { opacity: 0.3; }
                   50% { opacity: 0.6; }
                }
                .animate-rush {
                  animation: rush 0.6s linear infinite;
                }
                .animate-exhaust {
                  animation: flicker 0.1s steps(4) infinite;
                  transform-origin: right center;
                  transform-box: fill-box;
                }
                .animate-beam {
                   animation: beamPulse 2s ease-in-out infinite;
                }
              `}</style>

              {/* Aggressive Speed Trails - Directional & Sharp */}
              <g opacity="0.6">
                 <path d="M-400,280 L50,280" stroke="#FF3B00" strokeWidth="4" strokeLinecap="square" filter="url(#motionBlurX)" className="animate-rush" strokeDasharray="50 350" />
                 <path d="M-300,320 L100,320" stroke="#00F0FF" strokeWidth="2" strokeLinecap="square" filter="url(#motionBlurX)" className="animate-rush" style={{animationDelay: '0.1s', animationDuration: '0.5s'}} strokeDasharray="100 200" />
                 <path d="M-500,180 L200,180" stroke="#fff" strokeWidth="1" strokeLinecap="square" filter="url(#motionBlurX)" className="animate-rush" style={{animationDelay: '0.3s', animationDuration: '0.7s'}} strokeDasharray="20 400" />
              </g>

              {/* Aggressive Car Silhouette */}
              <g transform="translate(50, 50)">
                 {/* Exhaust Effect (Afterburner) */}
                 <path d="M50,240 L-20,245 L50,250 Z" fill="url(#exhaustFlame)" className="animate-exhaust" />
                 <path d="M50,240 L-40,230 L50,260 Z" fill="url(#exhaustFlame)" opacity="0.5" className="animate-exhaust" style={{animationDelay: '0.05s'}} />

                 {/* Headlights (Pulsating Beams) */}
                 <path d="M680,230 L900,180 L900,300 Z" fill="url(#headlightBeam)" className="animate-beam" />
                 <circle cx="670" cy="245" r="4" fill="#fff" className="animate-pulse" />

                 {/* Rear Wheel */}
                 <circle cx="150" cy="250" r="45" fill="#111" stroke="#222" strokeWidth="2" />
                 <circle cx="150" cy="250" r="40" fill="none" stroke="#FF3B00" strokeWidth="3" strokeDasharray="60 30" opacity="0.6" className="animate-spin" style={{ animationDuration: '0.4s', transformBox: 'fill-box', transformOrigin: 'center' }} />

                 {/* Front Wheel */}
                 <circle cx="550" cy="250" r="48" fill="#111" stroke="#222" strokeWidth="2" />
                 <circle cx="550" cy="250" r="42" fill="none" stroke="#FF3B00" strokeWidth="3" strokeDasharray="60 30" opacity="0.6" className="animate-spin" style={{ animationDuration: '0.4s', transformBox: 'fill-box', transformOrigin: 'center' }} />

                 {/* Chassis - Sharp Angles */}
                 <path d="M50,250 Q40,200 130,180 L280,150 L500,155 L650,200 L680,240 L650,260 L140,260 Z" fill="url(#heroCarBody)" className="animate-[pulse_0.1s_linear_infinite]" />
                 
                 {/* Cockpit - Low Profile */}
                 <path d="M290,155 L480,158 L520,200 L250,200 Z" fill="url(#heroGlass)" />
                 
                 {/* Aerodynamics Stream */}
                 <path d="M650,200 L850,220 L800,240" fill="url(#heroGlass)" opacity="0.2" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;