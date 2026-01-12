import React from 'react';

const Process: React.FC = () => {
  return (
    <section id="proces" className="py-24 bg-gradient-to-b from-[#080808] to-void border-y border-white/5 relative overflow-hidden">
      {/* Background Stripe */}
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-cyan/20"></div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { step: '01', title: 'Locate', desc: 'Radar scan area.' },
            { step: '02', title: 'Unlock', desc: 'Biometric access.' },
            { step: '03', title: 'Ignite', desc: 'Push to start.' }
          ].map((item, i) => (
            <div key={i} className="relative group">
              <div className="text-[8rem] font-black italic text-white/5 absolute -top-12 -left-4 select-none group-hover:text-vermilion/10 transition-colors">
                {item.step}
              </div>
              <div className="skew-x-[-12deg] bg-black/80 border border-white/10 p-8 backdrop-blur-md hover:border-cyan transition-colors">
                <div className="skew-x-[12deg]">
                  <h3 className="text-3xl font-black italic uppercase text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 font-medium italic">{item.desc}</p>
                </div>
              </div>
              {/* Connector dot */}
              <div className="hidden md:block absolute top-[50%] -right-4 w-2 h-2 bg-cyan rounded-full shadow-[0_0_10px_cyan]"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;