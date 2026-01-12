import React from 'react';

const MobileCTA: React.FC = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-md border-t border-white/10 p-3">
      <div className="max-w-7xl mx-auto flex gap-3">
        <a href="#rezerwacja" className="btn-primary w-full py-3 text-sm flex items-center justify-center gap-3">
          <span>Rezerwuj</span><span className="text-white/80">→</span>
        </a>
        <a href="#flota" className="w-full py-3 text-sm border border-white/15 text-white/90 flex items-center justify-center hover:bg-white/10 transition-colors">
          Flota
        </a>
      </div>
    </div>
  );
};

export default MobileCTA;