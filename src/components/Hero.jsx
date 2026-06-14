import React from 'react';
import heroImage from '../assets/suryapura_hero.png';
import { ArrowRight, ShieldCheck, Cpu, Leaf, HelpCircle } from 'lucide-react';
import Button from './UI/Button';

export default function Hero() {
  const handleScrollTo = (id) => {
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

  return (
    <section id="home" className="relative min-h-[95vh] flex items-center justify-center pt-24 overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Suryapura Village Landscape"
          className="w-full h-full object-cover object-center scale-105 animate-pulse-subtle"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/75 to-slate-900/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 md:py-24">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-500/20 border border-primary-400/30 text-primary-300 text-xs sm:text-sm font-semibold mb-6 animate-fade-in-down">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary-500"></span>
            </span>
            President's Model Village Awardee
          </div>

          {/* Heading */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-6 animate-fade-in-up">
            Empowering <span className="text-primary-400">Suryapura</span> <br />
            Through Innovation & Heritage
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-slate-200 mb-8 leading-relaxed max-w-2xl font-light">
            Welcome to the digital gateway of Suryapura. Discover our progress in organic smart farming, 100% paved road connectivity, model educational smart classes, and seamless citizen services under the Digital Identity initiative.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button
              variant="primary"
              onClick={() => handleScrollTo('#services')}
              className="text-base font-semibold group py-3 px-8"
            >
              Explore Services
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              onClick={() => handleScrollTo('#about')}
              className="text-base font-semibold border-white/40 text-white hover:bg-white/10 hover:border-white py-3 px-8"
            >
              Learn About Village
            </Button>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-white/90">
            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-3">
              <div className="p-2 bg-primary-500/20 rounded-lg text-primary-300">
                <Leaf className="h-5 w-5" />
              </div>
              <div>
                <span className="block text-xs text-white/60">Organic Farming</span>
                <span className="text-sm font-bold font-display">850+ Acres</span>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-3">
              <div className="p-2 bg-accent-500/20 rounded-lg text-accent-300">
                <Cpu className="h-5 w-5" />
              </div>
              <div>
                <span className="block text-xs text-white/60">Digital IDs Active</span>
                <span className="text-sm font-bold font-display">98.2%</span>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-3">
              <div className="p-2 bg-secondary-500/20 rounded-lg text-secondary-300">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <span className="block text-xs text-white/60">Literacy Rate</span>
                <span className="text-sm font-bold font-display">94.5%</span>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-3">
              <div className="p-2 bg-orange-500/20 rounded-lg text-orange-300">
                <HelpCircle className="h-5 w-5" />
              </div>
              <div>
                <span className="block text-xs text-white/60">Grievance Solved</span>
                <span className="text-sm font-bold font-display">24Hr Turnaround</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
