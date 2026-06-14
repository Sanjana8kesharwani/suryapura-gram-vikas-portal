import React from 'react';

export default function Button({ children, variant = 'primary', className = '', ...props }) {
  const baseStyle = 'px-6 py-2.5 rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 active:scale-95 text-sm md:text-base cursor-pointer inline-flex items-center justify-center gap-2';
  
  const variants = {
    primary: 'bg-primary-600 hover:bg-primary-700 text-white focus:ring-primary-300 hover:shadow-lg hover:shadow-primary-100',
    secondary: 'bg-secondary-600 hover:bg-secondary-700 text-white focus:ring-secondary-300 hover:shadow-lg hover:shadow-secondary-100',
    accent: 'bg-accent-600 hover:bg-accent-700 text-white focus:ring-accent-300 hover:shadow-lg hover:shadow-accent-100',
    outline: 'border border-slate-300 hover:border-slate-800 text-slate-700 hover:text-slate-900 bg-transparent focus:ring-slate-100',
    ghost: 'text-slate-600 hover:bg-slate-100 hover:text-slate-900 focus:ring-slate-100 bg-transparent'
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
