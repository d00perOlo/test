import React from 'react';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 md:py-36 px-6 md:px-8 text-center relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[780px] h-[780px] bg-[#00f2ff]/5 rounded-full blur-[120px]" aria-hidden="true"></div>
      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
          GOTOWY NA <br /> <span className="text-[#00f2ff] italic">PRZYSPIESZENIE?</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-400 mb-10">
          Zamiast posiadać — korzystaj. Szybko, czysto, przewidywalnie.
        </p>
        <div className="flex justify-center">
          <a href="#rezerwacja" className="btn-primary px-14 py-6 text-lg inline-flex items-center gap-4">
            <span>Zacznij teraz</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true">
              <path d="M5 12h14m-7-7 7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;