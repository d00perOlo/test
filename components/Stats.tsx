import React from 'react';

const Stats: React.FC = () => {
  return (
    <section id="korzysci" className="bg-[#0f172a] py-16 md:py-20 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12">
        <div className="text-center group">
          <div className="text-4xl font-black text-[#00f2ff] mb-2 group-hover:scale-110 transition-transform">15 min</div>
          <div className="text-[10px] uppercase tracking-widest text-gray-500">Podstawienie auta</div>
        </div>
        <div className="text-center group">
          <div className="text-4xl font-black text-[#00f2ff] mb-2 group-hover:scale-110 transition-transform">24/7</div>
          <div className="text-[10px] uppercase tracking-widest text-gray-500">Wsparcie</div>
        </div>
        <div className="text-center group">
          <div className="text-4xl font-black text-[#00f2ff] mb-2 group-hover:scale-110 transition-transform">100%</div>
          <div className="text-[10px] uppercase tracking-widest text-gray-500">Cyfrowy proces</div>
        </div>
        <div className="text-center group">
          <div className="text-4xl font-black text-[#00f2ff] mb-2 group-hover:scale-110 transition-transform">0 tarcia</div>
          <div className="text-[10px] uppercase tracking-widest text-gray-500">Bez kolejek</div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 mt-10 text-[11px] text-gray-500 uppercase tracking-widest">
        Uwaga: warunki (kaucja / limity / strefy) zależą od modelu i lokalizacji.
      </div>
    </section>
  );
};

export default Stats;