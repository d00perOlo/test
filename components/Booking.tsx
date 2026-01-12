import React, { FormEvent } from 'react';

const Booking: React.FC = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert('System engaging...');
  };

  return (
    <section id="rezerwacja" className="py-32 px-6 max-w-5xl mx-auto">
      <div className="mb-12">
        <h2 className="text-6xl md:text-8xl font-black italic uppercase text-center tracking-tighter">
          Ready to <span className="text-vermilion">Run?</span>
        </h2>
      </div>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12" onSubmit={handleSubmit}>
        <div className="group">
          <label className="block text-xs font-black uppercase tracking-[0.2em] text-cyan mb-2">City Point</label>
          <select className="input-speed w-full py-4 bg-transparent cursor-pointer">
            <option className="bg-black">Warsaw City Center</option>
            <option className="bg-black">Berlin Alexanderplatz</option>
            <option className="bg-black">London Canary Wharf</option>
          </select>
        </div>

        <div className="group">
          <label className="block text-xs font-black uppercase tracking-[0.2em] text-cyan mb-2">Machine Class</label>
          <select className="input-speed w-full py-4 bg-transparent cursor-pointer">
            <option className="bg-black">Hyper (2 Seater)</option>
            <option className="bg-black">Grand Tour (4 Seater)</option>
            <option className="bg-black">Power SUV (AWD)</option>
          </select>
        </div>

        <div className="group">
          <label className="block text-xs font-black uppercase tracking-[0.2em] text-cyan mb-2">Start Vector</label>
          <input type="date" className="input-speed w-full py-4 uppercase" />
        </div>

        <div className="group">
          <label className="block text-xs font-black uppercase tracking-[0.2em] text-cyan mb-2">End Vector</label>
          <input type="date" className="input-speed w-full py-4 uppercase" />
        </div>

        <div className="md:col-span-2 mt-8">
          <button type="submit" className="w-full btn-ignite py-6 text-2xl skew-x-[-12deg] group">
            <span className="skew-x-[12deg] block group-hover:tracking-[0.5em] transition-all">CONFIRM LAUNCH</span>
          </button>
        </div>
      </form>
    </section>
  );
};

export default Booking;