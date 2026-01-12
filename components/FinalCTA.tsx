import React from 'react';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-32 text-center relative overflow-hidden bg-vermilion">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <h2 className="text-5xl md:text-8xl font-black italic uppercase text-black mb-8 leading-[0.8]">
          NO LIMITS.<br/>NO REGRETS.
        </h2>
        <div className="flex justify-center mt-12">
          <a href="#rezerwacja" className="bg-black text-white px-16 py-6 text-xl font-black italic uppercase tracking-widest hover:scale-105 transition-transform skew-x-[-12deg]">
            <span className="skew-x-[12deg] block">Get App</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;