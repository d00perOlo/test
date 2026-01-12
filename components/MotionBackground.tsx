import React from 'react';

const MotionBackground: React.FC = () => {
  return (
    <div className="motion-bg fixed top-0 left-0 w-full h-full -z-10 bg-void overflow-hidden pointer-events-none">
      {/* Deep Space Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-void to-[#050505] opacity-90"></div>
      
      {/* Cyan Environmental Lines */}
      <div className="absolute h-[1px] w-[500px] bg-gradient-to-r from-transparent via-cyan to-transparent top-[10%] opacity-40 animate-warp"></div>
      <div className="absolute h-[2px] w-[800px] bg-gradient-to-r from-transparent via-cyan to-transparent top-[30%] opacity-20 animate-warp-slow left-[-20%]"></div>
      <div className="absolute h-[1px] w-[300px] bg-gradient-to-r from-transparent via-cyan to-transparent top-[80%] opacity-50 animate-warp" style={{animationDelay: '0.2s'}}></div>

      {/* Red/Vermilion "Speed" Lines (The Car's Energy) */}
      <div className="absolute h-[2px] w-[600px] bg-gradient-to-r from-transparent via-vermilion to-transparent top-[55%] opacity-60 animate-warp" style={{animationDuration: '0.3s'}}></div>
      <div className="absolute h-[1px] w-[400px] bg-gradient-to-r from-transparent via-vermilion to-transparent top-[65%] opacity-30 animate-warp" style={{animationDuration: '0.4s', animationDelay: '0.1s'}}></div>
      
      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")'}}></div>
    </div>
  );
};

export default MotionBackground;