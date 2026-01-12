import React, { useEffect, useRef, useState } from 'react';

interface FleetCardProps {
  title: string;
  category: string;
  photoUrl: string;
  specs: { label: string; value: string }[];
  isHighlight?: boolean;
}

const FleetCard: React.FC<FleetCardProps> = ({ title, category, photoUrl, specs, isHighlight }) => {
  const [active, setActive] = useState(false);
  const cardRef = useRef<HTMLElement>(null);

  // Mobile/Scroll Observer Logic
  useEffect(() => {
    // Only apply IntersectionObserver on touch devices or small screens primarily
    const isTouch = window.matchMedia('(hover: none)').matches || navigator.maxTouchPoints > 0;
    if (!isTouch) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(true);
          } else {
            setActive(false);
          }
        });
      },
      { threshold: 0.35 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleTap = () => {
    // Toggle active state on click/tap for devices where hover isn't primary
    setActive(!active);
  };

  return (
    <article
      ref={cardRef}
      className={`glass-card fleet-card group p-8 relative ${active ? 'active' : ''} ${isHighlight ? 'bg-[#00f2ff]/5 border-[#00f2ff]/20' : ''}`}
      onClick={handleTap}
    >
      <div 
        className="fleet-photo" 
        style={{ backgroundImage: `url("${photoUrl}")` }} 
        aria-hidden="true" 
      />

      {isHighlight && (
        <div className="absolute top-0 right-0 p-4 z-20">
          <span className="bg-[#ff8c00] text-white text-[10px] font-black px-3 py-1 uppercase tracking-widest">
            Najczęściej wybierany
          </span>
        </div>
      )}

      <div className="fleet-content">
        <div className="text-[#ff8c00] font-extrabold mb-2 tracking-widest text-xs">{category}</div>
        <h3 className="text-3xl font-black mb-6">{title}</h3>

        <div className="mb-8 fleet-abstract" aria-hidden="true">
          <svg viewBox="0 0 200 100" className="w-full">
            <path d="M20 70 L180 70 L170 40 L50 40 Z" fill="none" stroke="white" strokeWidth="2" />
            <path d="M40 70 A10 10 0 1 0 60 70 M140 70 A10 10 0 1 0 160 70" stroke="var(--teal)" strokeWidth="3" />
          </svg>
        </div>

        <ul className="space-y-3 text-sm text-gray-300 mb-8">
          {specs.map((spec, i) => (
            <li key={i} className="flex justify-between">
              <span>{spec.label}</span>
              <span className="text-white font-semibold">{spec.value}</span>
            </li>
          ))}
        </ul>

        <a 
          href="#rezerwacja" 
          aria-label={`Wybierz model ${title}`}
          className={`w-full py-4 font-extrabold uppercase tracking-widest text-xs flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00f2ff] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0e17] ${
            isHighlight 
              ? 'bg-[#00f2ff] text-[#0a0e17]' 
              : 'border border-[#00f2ff]/30 group-hover:bg-[#00f2ff] group-hover:text-[#0a0e17]'
          }`}
        >
          Wybierz model
        </a>
      </div>

      <div className="fleet-hint">Desktop: hover • Mobile: tap • Scroll: auto</div>
    </article>
  );
};

// Data definition
const FLEET_DATA = [
  {
    id: 1,
    title: "URBAN SPRINT",
    category: "PERFORMANCE",
    photoUrl: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1600&q=70",
    specs: [
      { label: "Przyspieszenie", value: "3.8s do 100" },
      { label: "Napęd", value: "Sport / EV" }
    ],
    isHighlight: false
  },
  {
    id: 2,
    title: "NEO SEDAN",
    category: "LUXURY",
    photoUrl: "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=1600&q=70",
    specs: [
      { label: "Komfort", value: "Klasa premium" },
      { label: "Napęd", value: "Hybryda / AT" }
    ],
    isHighlight: true
  },
  {
    id: 3,
    title: "APEX SUV",
    category: "SUV",
    photoUrl: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=1600&q=70",
    specs: [
      { label: "Przestrzeń", value: "Rodzina / biznes" },
      { label: "Napęd", value: "AWD / AT" }
    ],
    isHighlight: false
  }
];

// Removed "ALL" from categories to use dedicated Clear button
const CATEGORIES = ["PERFORMANCE", "LUXURY", "SUV"];

const Fleet: React.FC = () => {
  const [filter, setFilter] = useState("ALL");

  const handleFilterChange = (cat: string) => {
    // If clicking the active filter, toggle it off (reset to ALL)
    if (filter === cat) {
      setFilter("ALL");
    } else {
      setFilter(cat);
    }
  };

  const clearFilters = () => {
    setFilter("ALL");
  };

  const filteredCars = filter === "ALL" 
    ? FLEET_DATA 
    : FLEET_DATA.filter(car => car.category === filter);

  return (
    <section id="flota" className="py-24 md:py-32 px-6 md:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-14 md:mb-20">
        <div>
          <h2 className="text-4xl font-black mb-4 uppercase italic">Flota</h2>
          <div className="h-1 w-24 bg-[#00f2ff]"></div>
        </div>
        
        {/* Filter Controls */}
        <div className="flex flex-wrap items-center gap-3 md:gap-4" role="group" aria-label="Filtry floty">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => handleFilterChange(cat)}
              aria-pressed={filter === cat}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-widest border transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00f2ff] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0e17] ${
                filter === cat 
                  ? 'bg-[#00f2ff] border-[#00f2ff] text-[#0a0e17]' 
                  : 'bg-transparent border-white/20 text-gray-400 hover:border-white hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
          
          {filter !== "ALL" && (
            <button 
              onClick={clearFilters}
              className="px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00f2ff] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0e17]"
              aria-label="Wyczyść filtry"
            >
              <span>Wyczyść filtry</span>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 min-h-[500px]">
        {filteredCars.map((car) => (
          <FleetCard
            key={car.id}
            title={car.title}
            category={car.category}
            photoUrl={car.photoUrl}
            specs={car.specs}
            isHighlight={car.isHighlight}
          />
        ))}
        
        {filteredCars.length === 0 && (
            <div className="col-span-full py-20 text-center text-gray-500">
                Brak dostępnych pojazdów w tej kategorii.
            </div>
        )}
      </div>

      <div className="mt-10 flex flex-col md:flex-row justify-between items-start md:items-center text-[11px] text-gray-500 uppercase tracking-widest gap-4">
        <span>Zdjęcia poglądowe. Dostępność może się różnić.</span>
        <div className="text-gray-400 normal-case">
          Najedź kursorem (desktop) albo dotknij (mobile) by zobaczyć auto.
        </div>
      </div>
    </section>
  );
};

export default Fleet;