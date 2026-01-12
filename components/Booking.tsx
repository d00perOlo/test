import React, { FormEvent } from 'react';

const Booking: React.FC = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert('System engaging...');
  };

  return (
    <section id="rezerwacja" className="py-32 px-6 bg-graphite-900 border-t border-graphite-600">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h2 className="text-5xl md:text-8xl font-black italic uppercase text-center tracking-tighter">
            GOTOWY NA <span className="text-orange">START?</span>
          </h2>
        </div>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12" onSubmit={handleSubmit}>
          <div className="group">
            <label className="block text-xs font-black uppercase tracking-[0.2em] text-cyan mb-2">LOKALIZACJA</label>
            <select className="input-speed w-full py-4 cursor-pointer text-gray-300 focus:text-white">
              <option className="bg-graphite-800">Warszawa Centrum</option>
              <option className="bg-graphite-800">Berlin Alexanderplatz</option>
              <option className="bg-graphite-800">Londyn Canary Wharf</option>
              <option className="bg-graphite-800">Zielona Góra</option>
            </select>
          </div>

          <div className="group">
            <label className="block text-xs font-black uppercase tracking-[0.2em] text-cyan mb-2">KLASA MASZYNY</label>
            <select className="input-speed w-full py-4 cursor-pointer text-gray-300 focus:text-white">
              <option className="bg-graphite-800">Hiper (2 Miejsca)</option>
              <option className="bg-graphite-800">Grand Tour (4 Miejsca)</option>
              <option className="bg-graphite-800">Power SUV (4x4)</option>
            </select>
          </div>

          <div className="group">
            <label className="block text-xs font-black uppercase tracking-[0.2em] text-cyan mb-2">DATA STARTU</label>
            <input type="date" className="input-speed w-full py-4 uppercase text-gray-300 focus:text-white" />
          </div>

          <div className="group">
            <label className="block text-xs font-black uppercase tracking-[0.2em] text-cyan mb-2">DATA ZWROTU</label>
            <input type="date" className="input-speed w-full py-4 uppercase text-gray-300 focus:text-white" />
          </div>

          <div className="md:col-span-2 mt-8">
            <button type="submit" className="w-full btn-ignite py-6 text-2xl skew-x-[-12deg] group">
              <span className="skew-x-[12deg] block group-hover:tracking-[0.5em] transition-all">POTWIERDŹ START</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Booking;