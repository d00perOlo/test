import React from 'react';

const Navbar: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed w-full z-50 pt-4 px-4 md:px-8 pointer-events-none">
      <nav className="flex justify-between items-stretch pointer-events-auto">
        
        {/* Angular Logo Container */}
        <a href="#top" onClick={(e) => handleScroll(e, 'top')} className="bg-white/5 backdrop-blur-sm border-l-4 border-vermilion px-6 py-4 skew-x-[-12deg] hover:bg-white/10 transition-colors group">
          <div className="skew-x-[12deg] flex items-center gap-1">
            <span className="text-2xl font-black italic tracking-tighter text-white">VELO<span className="text-vermilion">CITY</span></span>
            <div className="w-2 h-2 bg-cyan rounded-full animate-pulse-fast ml-1"></div>
          </div>
        </a>

        {/* Desktop Links - Floating Tech Bar */}
        <div className="hidden md:flex items-center gap-8 bg-black/80 backdrop-blur-md px-10 border-b border-white/10 skew-x-[-12deg] translate-x-8">
          {['Flota', 'Proces', 'Zalety', 'Rezerwacja'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`} 
              onClick={(e) => handleScroll(e, item.toLowerCase())} 
              className="text-sm font-black italic uppercase tracking-widest hover:text-cyan transition-colors skew-x-[12deg] relative group"
            >
              {item}
              <span className="absolute -bottom-6 left-0 w-0 h-[2px] bg-cyan transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <a href="#rezerwacja" onClick={(e) => handleScroll(e, 'rezerwacja')} className="hidden md:flex items-center btn-ignite px-8 py-3 skew-x-[-12deg]">
          <span className="skew-x-[12deg] text-sm tracking-widest">START ENGINE</span>
        </a>
      </nav>
    </header>
  );
};

export default Navbar;