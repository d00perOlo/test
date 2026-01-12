import React from 'react';

const Booking: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Demo: formularz gotowy. Podepnij backend / integrację rezerwacji.');
  };

  // Reusable styles for consistency
  const inputBaseClasses = "w-full bg-[#0a0e17]/80 border border-white/10 px-4 py-4 text-white placeholder:text-gray-600 focus:border-[#00f2ff] focus:ring-1 focus:ring-[#00f2ff] focus:bg-black focus:shadow-[0_0_30px_rgba(0,242,255,0.25)] hover:border-white/30 hover:bg-[#0a0e17]/90 outline-none transition-all duration-300 appearance-none rounded-none";
  
  // Specific styles for select elements
  const selectClasses = `${inputBaseClasses} pr-12 cursor-pointer`;
  
  const labelClasses = "block text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-2 ml-1";
  
  // Custom arrow for select inputs
  const CustomSelectArrow = () => (
    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#00f2ff] transition-transform duration-300 group-hover:scale-110">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
        <path d="M6 9l6 6 6-6"/>
      </svg>
    </div>
  );

  return (
    <section id="rezerwacja" className="py-24 md:py-32 px-6 md:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10 md:mb-14">
        <div>
          <h2 className="text-4xl font-black mb-4 uppercase italic">Rezerwacja</h2>
          <div className="h-1 w-24 bg-[#00f2ff]"></div>
        </div>
        <div className="text-gray-400 text-sm max-w-md md:text-right">
          Minimalny formularz (demo UI). Podepniesz backend później.
        </div>
      </div>

      <form 
        className="glass-card p-6 md:p-10 grid grid-cols-1 md:grid-cols-12 gap-6"
        onSubmit={handleSubmit}
      >
        <div className="md:col-span-3">
          <label className={labelClasses} htmlFor="city">Miasto</label>
          <div className="relative group">
            <select id="city" className={selectClasses} defaultValue="Warszawa">
              <option className="bg-[#0a0e17] text-white">Warszawa</option>
              <option className="bg-[#0a0e17] text-white">Berlin</option>
              <option className="bg-[#0a0e17] text-white">London</option>
            </select>
            <CustomSelectArrow />
          </div>
        </div>
        
        <div className="md:col-span-3">
          <label className={labelClasses} htmlFor="class">Klasa</label>
          <div className="relative group">
            <select id="class" className={selectClasses} defaultValue="Performance">
              <option className="bg-[#0a0e17] text-white">Performance</option>
              <option className="bg-[#0a0e17] text-white">Luxury</option>
              <option className="bg-[#0a0e17] text-white">SUV</option>
            </select>
            <CustomSelectArrow />
          </div>
        </div>

        <div className="md:col-span-3">
          <label className={labelClasses} htmlFor="from">Od</label>
          <input 
            id="from" 
            type="date" 
            className={`${inputBaseClasses} min-h-[58px]`} // Ensure height matches selects
          />
        </div>

        <div className="md:col-span-3">
          <label className={labelClasses} htmlFor="to">Do</label>
          <input 
            id="to" 
            type="date" 
            className={`${inputBaseClasses} min-h-[58px]`} 
          />
        </div>

        <div className="md:col-span-8">
          <label className={labelClasses} htmlFor="note">Uwagi (opcjonalnie)</label>
          <input 
            id="note" 
            type="text" 
            placeholder="Np. fotelik / automat / odbiór na lotnisku"
            className={inputBaseClasses} 
          />
        </div>

        <div className="md:col-span-4 flex items-end">
          <button type="submit" className="btn-primary w-full px-8 py-4 text-base flex items-center justify-center gap-3 h-[58px] mt-1 md:mt-0">
            <span>Sprawdź dostępność</span>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true">
              <path d="M5 12h14m-7-7 7 7-7 7"/>
            </svg>
          </button>
        </div>
      </form>
    </section>
  );
};

export default Booking;