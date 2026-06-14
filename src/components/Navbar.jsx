import React, { useState, useEffect } from 'react';
import { Menu, X, Leaf, Shield, BookOpen, Sun } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Ambassadors', href: '#ambassadors' },
    { name: 'Panchayat Services', href: '#services' },
    { name: 'Education', href: '#education' },
    { name: 'Smart Farming', href: '#farming' },
    { name: 'Infrastructure', href: '#infrastructure' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'glass shadow-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="flex items-center gap-2 group">
            <div className="bg-primary-600 text-white p-2 rounded-xl group-hover:scale-110 transition-transform shadow-md shadow-primary-200">
              <Sun className="h-5 w-5 animate-pulse-subtle" />
            </div>
            <div>
              <span className="font-display font-extrabold text-lg sm:text-xl tracking-tight text-slate-800 flex items-center gap-1.5">
                SURYAPURA
              </span>
              <span className="block text-[10px] uppercase font-bold tracking-widest text-primary-600 leading-none">
                Gram Vikas Portal
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="px-3 py-2 rounded-full text-sm font-medium text-slate-600 hover:text-primary-600 hover:bg-primary-50/50 transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="ml-4 bg-primary-600 hover:bg-primary-700 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 shadow-md shadow-primary-100 hover:shadow-lg hover:shadow-primary-200 cursor-pointer"
            >
              Grievance Desk
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-xl text-slate-600 hover:text-primary-600 hover:bg-slate-100 focus:outline-none transition-colors"
              aria-expanded="false"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`lg:hidden fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6 flex flex-col h-full">
          <div className="flex items-center justify-between mb-8">
            <span className="font-display font-extrabold text-lg tracking-tight text-slate-800">
              Navigation
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-xl text-slate-600 hover:text-primary-600 hover:bg-slate-100"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="flex flex-col gap-2 overflow-y-auto flex-grow pr-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="px-4 py-3 rounded-xl text-base font-semibold text-slate-600 hover:text-primary-600 hover:bg-primary-50 transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="mt-auto pt-6 border-t border-slate-100">
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="w-full block text-center bg-primary-600 hover:bg-primary-700 text-white py-3 rounded-xl font-bold transition-all shadow-md shadow-primary-100"
            >
              Raise a Grievance
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </nav>
  );
}
