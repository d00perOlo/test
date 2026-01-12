import React from 'react';

const MobileNav: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className="md:hidden fixed bottom-4 left-4 right-4 z-50 bg-[#111]/90 backdrop-blur-md border border-white/10 shadow-2xl skew-x-[-5deg]"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <div className="skew-x-[5deg] flex items-center justify-between px-6 py-4">
         
         <a href="#flota" onClick={(e) => handleScroll(e, 'flota')} className="text-gray-400 font-bold uppercase text-[10px] tracking-widest hover:text-white">
           FLOTA
         </a>

         <a href="#top" onClick={(e) => handleScroll(e, 'top')} className="w-10 h-10 bg-orange flex items-center justify-center font-black italic text-black">
           O
         </a>

         <a href="#rezerwacja" onClick={(e) => handleScroll(e, 'rezerwacja')} className="text-gray-400 font-bold uppercase text-[10px] tracking-widest hover:text-white">
           START
         </a>
      </div>
    </nav>
  );
};

export default MobileNav;