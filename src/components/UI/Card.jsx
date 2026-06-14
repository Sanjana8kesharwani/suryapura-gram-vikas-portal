import React from 'react';

export default function Card({ children, className = '', hoverEffect = true }) {
  return (
    <div className={`bg-white rounded-2xl border border-slate-100 shadow-premium p-6 transition-all duration-300 ${hoverEffect ? 'hover:-translate-y-1.5 hover:shadow-premium-hover hover:border-slate-200' : ''} ${className}`}>
      {children}
    </div>
  );
}
