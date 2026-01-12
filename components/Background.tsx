import React from 'react';

const Background: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 bg-gradient-to-br from-[#0a0e17] to-[#0f172a] overflow-hidden" aria-hidden="true">
      <div className="motion-line" style={{ top: '20%', animationDelay: '0s' }}></div>
      <div className="motion-line" style={{ top: '45%', animationDelay: '1s', width: '520px' }}></div>
      <div className="motion-line" style={{ top: '70%', animationDelay: '0.5s' }}></div>
      <div className="motion-line" style={{ top: '15%', animationDelay: '2s', opacity: 0.12 }}></div>
    </div>
  );
};

export default Background;