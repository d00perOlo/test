import React, { useEffect, useRef, useState } from 'react';

interface CarModel {
  id: string;
  category: string;
  name: string;
  accel: string;
}

const cars: CarModel[] = [
  { id: '1', category: 'Hyper', name: 'Rosso Corsa', accel: '2.8s' },
  { id: '2', category: 'Grand Tour', name: 'Neo GT', accel: '3.2s' },
  { id: '3', category: 'Power SUV', name: 'Apex X', accel: '3.9s' }
];

const Fleet: React.FC = () => {
  return (
    <section id="flota" className="py-24 md:py-32 px-6 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-end gap-6 mb-16">
          <h2 className="text-5xl md:text-7xl font-black italic uppercase text-white tracking-tighter leading-none">
            Choose <span className="text-vermilion">Weapon</span>
          </h2>
          <div className="hidden md:block h-[4px] flex-1 bg-gradient-to-r from-vermilion to-transparent skew-x-[-45deg] mb-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-4">
          {cars.map((car) => (
            <FleetCard key={car.id} car={car} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FleetCard: React.FC<{ car: CarModel }> = ({ car }) => {
  return (
    <div className="speed-card group h-[400px] flex flex-col justify-end p-8 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-vermilion/20 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-cyan/20 transition-colors"></div>

      {/* Wireframe Abstract Car */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full opacity-60 group-hover:opacity-100 transition-opacity group-hover:scale-110 duration-500">
        <svg viewBox="0 0 200 100" className="w-full stroke-white group-hover:stroke-vermilion transition-colors" fill="none" strokeWidth="1">
           <path d="M10,70 L190,70 L180,40 L120,30 L60,35 L20,45 Z" />
           <circle cx="40" cy="70" r="12" strokeWidth="2" />
           <circle cx="160" cy="70" r="14" strokeWidth="2" />
           <path d="M10,70 L-20,70" strokeOpacity="0.5" />
           <path d="M190,70 L220,70" strokeOpacity="0.5" />
        </svg>
      </div>

      <div className="relative z-10">
        <div className="text-cyan font-black uppercase text-xs tracking-[0.2em] mb-1">{car.category}</div>
        <h3 className="text-4xl font-black italic text-white uppercase mb-4">{car.name}</h3>
        
        <div className="flex justify-between items-end border-t border-white/20 pt-4 group-hover:border-vermilion/50 transition-colors">
          <div>
            <div className="text-[10px] text-gray-500 uppercase font-bold">0-100 KM/H</div>
            <div className="text-2xl font-black italic">{car.accel}</div>
          </div>
          <button className="bg-white/10 hover:bg-vermilion text-white w-10 h-10 flex items-center justify-center skew-x-[-12deg] transition-colors">
            <span className="skew-x-[12deg] text-xl font-bold">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Fleet;