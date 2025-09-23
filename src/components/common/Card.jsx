import React from 'react';

const Card = ({ children, className = '' }) => (
  <div
    className={`bg-[#130c1a]/90 border border-[#FF3B63]/20 rounded-2xl shadow-[0_10px_40px_-20px_rgba(204,30,74,0.9)] backdrop-blur-md ${className}`}
  >
    {children}
  </div>
);

export default Card;