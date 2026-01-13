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
      className="md:hidden fixed bottom-4 left-4 right-4 z-50 bg-[#0A0A0A]/95 backdrop-blur-xl border border-white/10 shadow-[0_10px_40px_-10px_rgba(0,0,0,1)] skew-x-[-6deg]"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <div className="skew-x-[6deg] flex items-center justify-between px-4 py-3">
         
         {/* Left: Secondary Link */}
         <a href="#flota" onClick={(e) => handleScroll(e, 'flota')} className="flex-1 text-gray-400 font-bold uppercase text-[10px] tracking-widest hover:text-white transition-colors pl-2">
           FLOTA
         </a>

         {/* Center: Home/Logo - Subtle branding */}
         <a href="#top" onClick={(e) => handleScroll(e, 'top')} className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center font-black italic text-white hover:bg-white/10 transition-colors skew-x-[-10deg] mx-2">
           <span className="skew-x-[10deg]">O</span>
         </a>

         {/* Right: Primary Action - Prominent Orange Button */}
         <a 
           href="#rezerwacja" 
           onClick={(e) => handleScroll(e, 'rezerwacja')} 
           className="flex-none bg-orange text-black px-6 py-3 font-black italic uppercase text-sm tracking-wider skew-x-[-10deg] shadow-[0_0_20px_rgba(255,59,0,0.3)] hover:bg-white transition-all active:scale-95 ml-2"
         >
           <span className="skew-x-[10deg] flex items-center gap-1">
             START
             <span className="text-lg leading-none">→</span>
           </span>
         </a>
      </div>
    </nav>
  );
};

export default MobileNav;