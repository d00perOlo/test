import React from 'react';

const Process: React.FC = () => {
  return (
    <section id="proces" className="bg-[#00f2ff] text-[#0a0e17] transform -skew-y-3 -mt-12 pt-24 pb-24 md:pt-32 md:pb-32">
      <div className="transform skew-y-3 max-w-7xl mx-auto px-6 md:px-8">
        <h2 className="text-4xl md:text-5xl font-black mb-14 md:mb-20 uppercase tracking-tight">3 KROKI DO WOLNOŚCI</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          <div className="relative group">
            <div className="text-8xl font-black opacity-20 absolute -top-10 -left-4 select-none group-hover:opacity-40 transition-opacity" aria-hidden="true">01</div>
            <h3 className="text-2xl font-black mb-4 relative">ZNAJDŹ</h3>
            <p className="font-semibold opacity-80">Wybierz lokalizację i klasę auta. Dostępność widzisz natychmiast.</p>
          </div>
          <div className="relative group">
            <div className="text-8xl font-black opacity-20 absolute -top-10 -left-4 select-none group-hover:opacity-40 transition-opacity" aria-hidden="true">02</div>
            <h3 className="text-2xl font-black mb-4 relative">REZERWUJ</h3>
            <p className="font-semibold opacity-80">Uzupełnij daty i dane. Potwierdź. Koniec historii.</p>
          </div>
          <div className="relative group">
            <div className="text-8xl font-black opacity-20 absolute -top-10 -left-4 select-none group-hover:opacity-40 transition-opacity" aria-hidden="true">03</div>
            <h3 className="text-2xl font-black mb-4 relative">RUSZAJ</h3>
            <p className="font-semibold opacity-80">Odbierz auto w punkcie lub podstawione. Jedziesz.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;