import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black pt-16 pb-28 md:py-20 px-6 md:px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10 md:gap-12">
        <div className="max-w-sm">
          <div className="flex items-center gap-2 mb-5">
            <div className="w-6 h-6 bg-teal-500 rotate-45" aria-hidden="true"></div>
            <span className="text-xl font-black">VELOCITY</span>
          </div>
          <p className="text-gray-500 text-sm leading-relaxed">
            Przyszłość wynajmu jest cyfrowa. Projektujemy doświadczenie mobilności: szybko, czytelnie, bez tarcia.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-16">
          <div>
            <h3 className="font-extrabold mb-5 text-xs uppercase tracking-widest text-teal-400">Usługa</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#flota" className="hover:text-white transition-colors">Flota</a></li>
              <li><a href="#rezerwacja" className="hover:text-white transition-colors">Rezerwacja</a></li>
              <li><a href="#proces" className="hover:text-white transition-colors">Proces</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-extrabold mb-5 text-xs uppercase tracking-widest text-teal-400">Firma</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors" aria-disabled="true">O nas</a></li>
              <li><a href="#" className="hover:text-white transition-colors" aria-disabled="true">Kariera</a></li>
              <li><a href="#" className="hover:text-white transition-colors" aria-disabled="true">Kontakt</a></li>
            </ul>
          </div>
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-extrabold mb-5 text-xs uppercase tracking-widest text-teal-400">Legal</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors" aria-disabled="true">Regulamin</a></li>
              <li><a href="#" className="hover:text-white transition-colors" aria-disabled="true">Prywatność</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-14 pt-8 border-t border-white/5 flex flex-col md:flex-row gap-4 md:gap-0 md:justify-between text-[10px] text-gray-600 uppercase tracking-widest">
        <span>© 2026 VELOCITY MOBILITY SYSTEMS. ALL RIGHTS RESERVED.</span>
        <span className="flex gap-4 justify-start md:justify-end">
          <span>Warszawa</span><span>Berlin</span><span>London</span>
        </span>
      </div>
    </footer>
  );
};

export default Footer;