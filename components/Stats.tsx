import React from 'react';

const Stats: React.FC = () => {
  return (
    <section id="korzysci" className="relative z-20 py-10 bg-black/50 backdrop-blur-sm border-y border-white/10">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          
          {[
            { val: '15 MIN', label: 'Start Time' },
            { val: '99.9%', label: 'Availability' },
            { val: '0', label: 'Paperwork' },
            { val: '24/7', label: 'Support' }
          ].map((stat, i) => (
            <div key={i} className="group relative p-6 skew-x-[-12deg] border border-white/5 hover:border-vermilion/50 transition-colors bg-void">
              <div className="skew-x-[12deg] text-center">
                <div className="text-3xl md:text-5xl font-black italic text-white group-hover:text-vermilion transition-colors tracking-tighter">
                  {stat.val}
                </div>
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-cyan mt-1">
                  {stat.label}
                </div>
              </div>
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-cyan opacity-50"></div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Stats;