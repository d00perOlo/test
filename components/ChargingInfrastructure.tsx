import React, { useState, useRef, useEffect } from 'react';

const ChargingInfrastructure: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  
  // Game State
  const [isDragging, setIsDragging] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [plugPos, setPlugPos] = useState({ x: 50, y: 120 }); // Start position
  const [showSpark, setShowSpark] = useState(false);
  
  // Constants
  const TARGET_POS = { x: 330, y: 125 }; // Where the plug needs to snap to
  const SNAP_DISTANCE = 60; // How close to snap
  const START_POS = { x: 50, y: 120 };

  // Handlers for Mouse/Touch
  const handleStart = (e: React.MouseEvent | React.TouchEvent) => {
    if (isConnected) {
      // Click to disconnect
      setIsConnected(false);
      setPlugPos(START_POS);
      return;
    }
    setIsDragging(true);
  };

  const handleMove = (clientX: number, clientY: number) => {
    if (!isDragging || !svgRef.current) return;

    const CTM = svgRef.current.getScreenCTM();
    if (!CTM) return;

    // Convert screen coordinates to SVG coordinates
    const x = (clientX - CTM.e) / CTM.a;
    const y = (clientY - CTM.f) / CTM.d;

    // Offset to center the grab on the handle
    setPlugPos({ x: x - 80, y: y - 25 });
  };

  const handleEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    // Calculate distance to target
    const dist = Math.sqrt(
      Math.pow(plugPos.x - TARGET_POS.x, 2) + 
      Math.pow(plugPos.y - TARGET_POS.y, 2)
    );

    if (dist < SNAP_DISTANCE) {
      // Success!
      setPlugPos(TARGET_POS);
      setIsConnected(true);
      setShowSpark(true);
      setTimeout(() => setShowSpark(false), 600); // Hide spark after animation
    } else {
      // Reset (Spring back)
      setPlugPos(START_POS);
    }
  };

  // Global event listeners for smooth dragging outside the SVG area
  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => handleMove(e.clientX, e.clientY);
    const onTouchMove = (e: TouchEvent) => handleMove(e.touches[0].clientX, e.touches[0].clientY);
    const onUp = () => handleEnd();

    if (isDragging) {
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onUp);
      window.addEventListener('touchmove', onTouchMove);
      window.addEventListener('touchend', onUp);
    }

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onUp);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onUp);
    };
  }, [isDragging, plugPos]); // Dependencies for closure

  // Dynamic Cable Path Calculation (Quadratic Bezier)
  const cableStartX = -50;
  const cableStartY = 150;
  const cableControlX = (cableStartX + plugPos.x) / 2;
  const cableControlY = Math.max(plugPos.y, cableStartY) + 100; // Sag effect
  const cablePath = `M${cableStartX},${cableStartY} Q${cableControlX},${cableControlY} ${plugPos.x},${plugPos.y + 25}`;

  return (
    <section className="py-24 bg-graphite-900 border-t border-graphite-600 relative overflow-hidden select-none">
      
      {/* Background Tech Mesh */}
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-5 pointer-events-none" 
           style={{backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '20px 20px'}}>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* TEXT ENGINE */}
          <div className="flex flex-col items-start pointer-events-none">
             <div className="inline-flex items-center gap-2 mb-6 border border-cyan/30 px-3 py-1 skew-x-[-12deg] bg-cyan/5">
                <span className={`w-2 h-2 rounded-full ${isConnected ? 'bg-techGreen animate-pulse shadow-[0_0_10px_#00FF94]' : 'bg-orange'}`}></span>
                <span className="text-cyan text-[10px] font-black uppercase tracking-[0.2em] skew-x-[12deg]">
                  {isConnected ? 'ŁADOWANIE AKTYWNE' : 'OCZEKIWANIE NA PODŁĄCZENIE'}
                </span>
             </div>

             <h2 className="text-4xl md:text-6xl font-black italic uppercase text-white tracking-tighter mb-8 leading-[0.9]">
               WŁASNA SIEĆ.<br />
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">CZYSTA ENERGIA.</span>
             </h2>

             <div className="space-y-8 max-w-lg pointer-events-auto">
                <p className="text-gray-400 text-lg font-medium italic border-l-2 border-orange pl-6">
                  Nie szukaj ładowarek na mapie. Chwyć wtyczkę i poczuj przepływ energii.
                </p>

                {/* Instructions */}
                {!isConnected && (
                  <div className="text-orange text-sm font-black italic animate-pulse">
                    &gt;&gt;&gt; PRZECIĄGNIJ WTYCZKĘ DO PORTU &lt;&lt;&lt;
                  </div>
                )}
             </div>
          </div>

          {/* INTERACTIVE GAME AREA */}
          <div className="relative h-[300px] md:h-[400px] bg-graphite-800 border border-white/5 skew-x-[-12deg] overflow-hidden flex items-center justify-center shadow-2xl touch-none">
             {/* Unskew internal content */}
             <div className="skew-x-[12deg] w-full h-full relative">
                
                {/* Status Overlay */}
                <div className="absolute top-4 right-6 text-right z-20 pointer-events-none">
                  <div className="text-[10px] font-black uppercase tracking-widest text-gray-500">STATUS STACJI</div>
                  <div className="flex items-center justify-end gap-2">
                    <div className={`w-2 h-2 rounded-full transition-colors duration-300 ${isConnected ? 'bg-techGreen shadow-[0_0_10px_#00FF94]' : 'bg-gray-600'}`}></div>
                    <div className={`${isConnected ? 'text-techGreen' : 'text-gray-500'} font-mono font-bold text-xs transition-colors duration-300`}>
                      {isConnected ? 'ENERGY FLOW' : 'STANDBY'}
                    </div>
                  </div>
                </div>

                <svg ref={svgRef} viewBox="0 0 600 300" className="w-full h-full overflow-visible">
                  <defs>
                    <filter id="glowGreen" x="-50%" y="-50%" width="200%" height="200%">
                      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                      <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                    <filter id="glowIntense" x="-50%" y="-50%" width="200%" height="200%">
                      <feGaussianBlur stdDeviation="6" result="blur"/>
                      <feFlood floodColor="#00FF94" result="color"/>
                      <feComposite in="color" in2="blur" operator="in" result="glow"/>
                      <feMerge>
                        <feMergeNode in="glow"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                    <linearGradient id="plugBodyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#2a2a2a"/>
                        <stop offset="100%" stopColor="#111"/>
                    </linearGradient>
                  </defs>

                  <style>{`
                    @keyframes energyFlow {
                      0% { stroke-dashoffset: 100; }
                      100% { stroke-dashoffset: -100; }
                    }
                    @keyframes ledPulse {
                       0%, 100% { fill: #00FF94; opacity: 0.6; filter: url(#glowGreen); }
                       50% { fill: #ccffeb; opacity: 1; filter: url(#glowIntense); }
                    }
                    @keyframes sparkExplosion {
                       0% { opacity: 1; stroke-width: 2; transform: scale(1); }
                       100% { opacity: 0; stroke-width: 0; transform: scale(2.5); }
                    }
                    @keyframes ringPulse {
                        0% { stroke-width: 2; opacity: 0.5; }
                        50% { stroke-width: 4; opacity: 1; }
                        100% { stroke-width: 2; opacity: 0.5; }
                    }
                  `}</style>

                  {/* CAR PORT (Target Zone) */}
                  <g transform="translate(450, 100)">
                     {/* Car Body Surface */}
                     <path d="M50,-50 L50,200 L150,200 L150,-50 Z" fill="#121212" stroke="#333" strokeWidth="1" />
                     
                     {/* Port Ring */}
                     <circle cx="50" cy="75" r="35" fill="#050505" stroke={isConnected ? "#00FF94" : "#333"} strokeWidth="4" className="transition-colors duration-500" />
                     
                     {/* Active Ring Animation */}
                     {isConnected && (
                       <circle cx="50" cy="75" r="35" fill="none" stroke="#00FF94" className="animate-[ringPulse_2s_infinite]" style={{filter: 'url(#glowGreen)'}} />
                     )}

                     {/* Pin Holes */}
                     <circle cx="40" cy="65" r="5" fill="#222" />
                     <circle cx="60" cy="65" r="5" fill="#222" />
                     <circle cx="50" cy="85" r="5" fill="#222" />
                     
                     {/* Target Hint (Pulse when dragging) */}
                     {isDragging && !isConnected && (
                        <circle cx="50" cy="75" r="45" fill="none" stroke="#FF3B00" strokeWidth="2" strokeDasharray="4 4" className="animate-ping opacity-60" />
                     )}

                     {/* Transient Spark Effect on Connect */}
                     {showSpark && (
                        <g>
                             <circle cx="50" cy="75" r="20" fill="none" stroke="#fff" className="animate-[sparkExplosion_0.5s_ease-out_forwards]" />
                             <circle cx="50" cy="75" r="10" fill="#fff" className="animate-[sparkExplosion_0.3s_ease-out_forwards]" />
                        </g>
                     )}
                  </g>

                  {/* CABLE (Dynamic) */}
                  <path 
                    d={cablePath} 
                    fill="none" 
                    stroke="#1a1a1a" 
                    strokeWidth="24" 
                    strokeLinecap="round" 
                  />
                  
                  {/* Energy Flow (Only when connected) */}
                  {isConnected && (
                    <>
                        {/* Core Glow */}
                        <path 
                            d={cablePath} 
                            fill="none" 
                            stroke="#00FF94" 
                            strokeWidth="8" 
                            strokeDasharray="10 30" 
                            strokeLinecap="round"
                            className="animate-[energyFlow_0.5s_linear_infinite]" 
                            style={{filter: 'url(#glowGreen)', opacity: 0.8}}
                        />
                         {/* Secondary Detail */}
                        <path 
                            d={cablePath} 
                            fill="none" 
                            stroke="#fff" 
                            strokeWidth="2" 
                            strokeDasharray="5 35" 
                            strokeLinecap="round"
                            className="animate-[energyFlow_0.5s_linear_infinite]" 
                            style={{opacity: 0.5}}
                        />
                    </>
                  )}

                  {/* PLUG (Draggable) */}
                  <g 
                    transform={`translate(${plugPos.x}, ${plugPos.y})`} 
                    onMouseDown={handleStart}
                    onTouchStart={handleStart}
                    className={`${isConnected ? 'cursor-pointer' : 'cursor-grab active:cursor-grabbing'} transition-transform duration-75`}
                  >
                     {/* Main Body */}
                     <path d="M0,0 L120,0 L130,10 L130,40 L120,50 L0,50 Z" fill="url(#plugBodyGrad)" stroke={isDragging ? "#FF3B00" : "#444"} strokeWidth="2" />
                     
                     {/* Grip Detail */}
                     <rect x="25" y="10" width="30" height="4" rx="1" fill="#333" />
                     <rect x="25" y="20" width="30" height="4" rx="1" fill="#333" />
                     <rect x="25" y="30" width="30" height="4" rx="1" fill="#333" />

                     {/* Metal Pins */}
                     <rect x="130" y="15" width="22" height="6" fill="#888" rx="1" />
                     <rect x="130" y="29" width="22" height="6" fill="#888" rx="1" />
                     
                     {/* LED Status Indicator */}
                     <circle 
                        cx="90" 
                        cy="25" 
                        r="6" 
                        fill={isConnected ? "#00FF94" : "#222"}
                        stroke={isConnected ? "#00FF94" : "#111"}
                        strokeWidth="1"
                        className={isConnected ? "animate-[ledPulse_1.5s_infinite]" : ""}
                     />
                     
                     {/* Label */}
                     <text x="75" y="42" fill="#555" fontSize="6" fontFamily="monospace" fontWeight="bold">
                       {isConnected ? 'LOCKED' : 'GRAB'}
                     </text>
                  </g>
                </svg>

             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ChargingInfrastructure;