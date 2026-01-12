import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed w-full z-50">
      <nav 
        className="px-6 md:px-8 py-5 flex justify-between items-center bg-black/60 backdrop-blur-md border-b border-white/5" 
        aria-label="Nawigacja główna"
      >
        <a href="#top" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-[#00f2ff] rotate-45 flex items-center justify-center transition-transform group-hover:rotate-90">
            <div className="w-4 h-4 bg-[#0a0e17] -rotate-45 transition-transform group-hover:-rotate-90"></div>
          </div>
          <span className="text-2xl font-black tracking-tighter">VELO<span className="text-[#00f2ff]">CITY</span></span>
        </a>

        <div className="hidden md:flex gap-10 text-sm font-semibold uppercase tracking-widest">
          <a href="#flota" className="hover:text-[#00f2ff] transition-colors">Flota</a>
          <a href="#proces" className="hover:text-[#00f2ff] transition-colors">Proces</a>
          <a href="#korzysci" className="hover:text-[#00f2ff] transition-colors">Zalety</a>
          <a href="#rezerwacja" className="hover:text-[#00f2ff] transition-colors">Rezerwacja</a>
        </div>

        <a 
          href="#rezerwacja" 
          className="px-6 py-2 border border-[#00f2ff]/50 text-[#00f2ff] text-xs font-extrabold uppercase tracking-widest hover:bg-[#00f2ff] hover:text-[#0a0e17] transition-all"
        >
          Start
        </a>
      </nav>
    </header>
  );
};

export default Header;