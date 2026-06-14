import React from 'react';
import { Landmark, Phone, ExternalLink, Sun } from 'lucide-react';

export default function Footer() {
  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      const offset = 80;
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

  const govtLinks = [
    { name: 'National Portal of India', href: 'https://india.gov.in' },
    { name: 'Ministry of Panchayati Raj', href: 'https://panchayat.gov.in' },
    { name: 'Digital India Initiatives', href: 'https://digitalindia.gov.in' },
    { name: 'PM-KISAN Scheme Portal', href: 'https://pmkisan.gov.in' },
  ];

  const quickLinks = [
    { name: 'About Village', href: '#about' },
    { name: 'Local Leadership', href: '#ambassadors' },
    { name: 'Digital Services', href: '#services' },
    { name: 'Infrastructure & Roads', href: '#infrastructure' },
    { name: 'Education Initiatives', href: '#education' },
    { name: 'Notice Board', href: '#updates' },
  ];

  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-8 border-t border-slate-900 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          
          {/* Column 1 - Brand Info */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-primary-600 text-white p-2 rounded-xl">
                <Sun className="h-5 w-5" />
              </div>
              <span className="font-display font-extrabold text-white text-lg tracking-tight">
                SURYAPURA
              </span>
            </div>
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-sm">
              Suryapura Gram Vikas Portal is the official digital communication gateway of Suryapura Gram Panchayat. Dedicated to transparent governance, sustainability, and educational advancement.
            </p>
          </div>

          {/* Column 2 - Quick Navigation */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="font-display text-white font-extrabold text-xs uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleScrollTo(e, link.href)}
                    className="hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Govt Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-display text-white font-extrabold text-xs uppercase tracking-wider">
              Government Portals
            </h4>
            <ul className="space-y-2 text-xs">
              {govtLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary-400 transition-colors inline-flex items-center gap-1.5"
                  >
                    {link.name}
                    <ExternalLink className="h-3 w-3 shrink-0" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Administrative Contacts & Helplines */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-display text-white font-extrabold text-xs uppercase tracking-wider">
              Administrative Helplines
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="flex gap-2 items-center">
                <Phone className="h-4 w-4 text-primary-500 shrink-0" />
                <div className="leading-tight">
                  <span className="block text-[10px] text-slate-500">Sarpanch Office</span>
                  <span className="block font-bold text-slate-300 font-mono">+91 276 290 8901</span>
                </div>
              </li>
              <li className="flex gap-2 items-center">
                <Phone className="h-4 w-4 text-emerald-500 shrink-0" />
                <div className="leading-tight">
                  <span className="block text-[10px] text-slate-500">Agri-Cooperative Help</span>
                  <span className="block font-bold text-slate-300 font-mono">+91 276 290 8904</span>
                </div>
              </li>
              <li className="flex gap-2 items-center">
                <Phone className="h-4 w-4 text-accent-500 shrink-0" />
                <div className="leading-tight">
                  <span className="block text-[10px] text-slate-500">Emergency & Ambulance</span>
                  <span className="block font-bold text-slate-300 font-mono">102 / +91 276 290 0102</span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Base */}
        <div className="border-t border-slate-900 pt-8 mt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-600 gap-4">
          <div className="flex items-center gap-1.5">
            <Landmark className="h-4 w-4 text-slate-700" />
            <span>© 2026 Suryapura Gram Panchayat. All rights reserved.</span>
          </div>
          <div>
            <span>Designed in partnership with Digital India Rural Empowerment Scheme.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
