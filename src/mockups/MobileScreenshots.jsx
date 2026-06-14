import React, { useState } from 'react';
import { Smartphone, Wifi, Battery, ShieldAlert, Check, HelpCircle, ChevronRight, Home, CreditCard, Sprout, FileText, Landmark, RefreshCw } from 'lucide-react';
import Card from '../components/UI/Card';
import Button from '../components/UI/Button';

export default function MobileScreenshots() {
  const [activeScreen, setActiveScreen] = useState('home');

  const screens = [
    { id: 'home', name: 'Home Landing Screen', icon: <Home className="h-4 w-4" /> },
    { id: 'services', name: 'Panchayat Services Portal', icon: <Landmark className="h-4 w-4" /> },
    { id: 'farming', name: 'Smart Farm Telemetry', icon: <Sprout className="h-4 w-4" /> },
    { id: 'updates', name: 'Digital Notice Bulletin', icon: <FileText className="h-4 w-4" /> },
  ];

  return (
    <section id="mobile-screenshots" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent-600 text-xs sm:text-sm font-extrabold uppercase tracking-widest block mb-3">
            Assignment Submission Pack
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Interactive <span className="text-accent-500">Mobile Simulator</span>
          </h2>
          <p className="text-slate-500 text-base sm:text-lg">
            Select screens below to preview how our village portal renders on mobile viewports. Suitable for screenshots and project submission documentation.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Controls - Left 5 Columns */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-display font-bold text-xl text-slate-800 mb-4">
              Simulator Screens
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Use this control deck to switch states in the mobile simulator. Each screen demonstrates optimized responsive grid collapse, flexible headers, and touch-target button sizes.
            </p>

            <div className="flex flex-col gap-3">
              {screens.map((screen) => (
                <button
                  key={screen.id}
                  onClick={() => setActiveScreen(screen.id)}
                  className={`w-full text-left p-4 rounded-2xl border flex items-center justify-between transition-all cursor-pointer ${
                    activeScreen === screen.id
                      ? 'bg-white border-accent-500 text-slate-800 shadow-md translate-x-1.5'
                      : 'bg-white/60 border-slate-200 text-slate-500 hover:bg-white hover:text-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`p-2 rounded-xl shrink-0 ${
                      activeScreen === screen.id ? 'bg-accent-500 text-white shadow-sm' : 'bg-slate-100 text-slate-500'
                    }`}>
                      {screen.icon}
                    </div>
                    <div>
                      <span className="block text-sm font-bold leading-snug">{screen.name}</span>
                      <span className="block text-[10px] text-slate-400 mt-0.5">Mockup Viewport: 390 × 844px</span>
                    </div>
                  </div>
                  <ChevronRight className={`h-4 w-4 shrink-0 transition-transform ${
                    activeScreen === screen.id ? 'translate-x-0.5 text-accent-500' : 'text-slate-300'
                  }`} />
                </button>
              ))}
            </div>

            <div className="p-4 bg-accent-50 rounded-2xl border border-accent-100 text-xs text-accent-700 flex gap-2">
              <ShieldAlert className="h-4 w-4 shrink-0 mt-0.5 text-accent-500" />
              This simulator mimics responsive container margins, flexible font layouts, and relative spacing ratios matching standard mobile view specifications.
            </div>
          </div>

          {/* Simulator Frame - Right 7 Columns */}
          <div className="lg:col-span-7 flex justify-center">
            
            {/* Mobile Device Frame */}
            <div className="relative w-[320px] sm:w-[340px] h-[640px] bg-slate-900 rounded-[48px] p-3 shadow-2xl border-4 border-slate-800 outline outline-offset-1 outline-slate-700 flex flex-col overflow-hidden">
              
              {/* Dynamic island / Speaker notch */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-5 bg-slate-950 rounded-full z-40 flex items-center justify-end px-3">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-900 border border-slate-800" />
              </div>

              {/* Status Bar */}
              <div className="relative z-30 flex justify-between items-center px-6 pt-3 pb-2 text-[10px] font-bold text-white font-mono shrink-0 select-none bg-slate-950">
                <span>10:24 AM</span>
                <div className="flex items-center gap-1.5">
                  <Wifi className="h-3 w-3" />
                  <span>5G</span>
                  <Battery className="h-3.5 w-3.5" />
                </div>
              </div>

              {/* Screen Content Window */}
              <div className="w-full flex-grow bg-slate-50 rounded-[36px] overflow-y-auto relative z-20 flex flex-col scroll-smooth">
                
                {/* Mobile App Header */}
                <div className="bg-slate-900 text-white py-4 px-4 flex items-center justify-between shrink-0 sticky top-0 z-30 shadow-md">
                  <div className="flex items-center gap-1.5">
                    <div className="bg-primary-500 text-white p-1 rounded-lg">
                      <Landmark className="h-4 w-4" />
                    </div>
                    <span className="font-display font-black text-xs tracking-wider">SURYAPURA</span>
                  </div>
                  <span className="text-[8px] bg-emerald-500 text-white px-1.5 py-0.5 rounded-full font-extrabold uppercase tracking-wide">
                    Live
                  </span>
                </div>

                {/* Mobile Screen Contents depending on active selection */}
                <div className="p-4 flex-grow flex flex-col gap-4 text-slate-800">
                  
                  {activeScreen === 'home' && (
                    <div className="space-y-4 animate-fade-in-up">
                      <div className="bg-slate-900 text-white p-5 rounded-2xl relative overflow-hidden">
                        <div className="absolute inset-0 bg-primary-500/10" />
                        <span className="inline-block bg-primary-500/30 text-primary-300 text-[8px] font-bold px-2 py-0.5 rounded-full uppercase mb-2">Model Village</span>
                        <h4 className="font-display font-bold text-lg leading-tight mb-2">Empowering Suryapura Through Tech</h4>
                        <p className="text-[10px] text-slate-300 leading-relaxed font-light mb-4">Discover our progress in organic smart farming, concrete connectivity and public e-governance.</p>
                        <button className="bg-primary-600 hover:bg-primary-700 text-white text-[10px] font-bold px-4 py-2 rounded-xl transition-all cursor-pointer">Explore Services</button>
                      </div>

                      <div className="grid grid-cols-2 gap-3 text-center">
                        <div className="bg-white p-3 border border-slate-100 rounded-xl shadow-sm">
                          <span className="block text-[18px] font-display font-black text-primary-600">850+</span>
                          <span className="block text-[8px] font-bold text-slate-400 uppercase mt-0.5">Organic Acres</span>
                        </div>
                        <div className="bg-white p-3 border border-slate-100 rounded-xl shadow-sm">
                          <span className="block text-[18px] font-display font-black text-accent-600">98.2%</span>
                          <span className="block text-[8px] font-bold text-slate-400 uppercase mt-0.5">Active IDs</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeScreen === 'services' && (
                    <div className="space-y-4 animate-fade-in-up">
                      <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm">
                        <span className="block text-[10px] font-bold text-slate-400 uppercase">Registry Search</span>
                        <h4 className="font-display font-bold text-sm text-slate-800 mt-0.5 mb-3">Citizen ID Validation</h4>
                        <div className="flex gap-2">
                          <input
                            type="text"
                            disabled
                            placeholder="SUR-1024"
                            className="bg-slate-50 border border-slate-100 text-[10px] py-1.5 px-3 rounded-lg outline-none flex-grow font-mono uppercase"
                          />
                          <button className="bg-primary-600 text-white text-[10px] font-bold py-1.5 px-3 rounded-lg">Check</button>
                        </div>

                        {/* Search result simulator */}
                        <div className="mt-4 bg-emerald-50/50 border border-emerald-100 rounded-xl p-3 flex gap-2.5 items-start">
                          <div className="p-1 rounded-full bg-emerald-100 text-emerald-600 shrink-0 mt-0.5"><Check className="h-3 w-3" /></div>
                          <div>
                            <span className="block text-[11px] font-bold text-slate-800">Ramesh Patil</span>
                            <span className="block text-[8px] text-slate-500">Co-op Organic Farmer</span>
                            <span className="block text-[8px] font-bold text-emerald-600 mt-1 uppercase">Active Credential</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeScreen === 'farming' && (
                    <div className="space-y-4 animate-fade-in-up">
                      <div className="bg-slate-900 text-white rounded-2xl p-4 shadow-sm">
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-[8px] uppercase tracking-widest text-emerald-400 font-bold">Telemetry Live</span>
                          <span className="h-1.5 w-1.5 bg-emerald-500 rounded-full animate-pulse" />
                        </div>
                        <h4 className="font-display font-bold text-sm mb-4">Weekly Crop Advisory</h4>

                        <div className="grid grid-cols-2 gap-2 text-center text-white mb-4">
                          <div className="bg-white/5 border border-white/5 p-2 rounded-xl">
                            <span className="block text-[8px] text-slate-400 uppercase font-semibold">Moisture</span>
                            <span className="block font-display font-bold text-xs mt-0.5">42% (Optimal)</span>
                          </div>
                          <div className="bg-white/5 border border-white/5 p-2 rounded-xl">
                            <span className="block text-[8px] text-slate-400 uppercase font-semibold">Market Rate</span>
                            <span className="block font-display font-bold text-xs mt-0.5">₹4,800 / Qtl</span>
                          </div>
                        </div>
                        <p className="text-[9px] text-slate-400 leading-relaxed">System recommendation: Perfect humidity ranges. Suitable time for organic fertilizer dispersal.</p>
                      </div>
                    </div>
                  )}

                  {activeScreen === 'updates' && (
                    <div className="space-y-4 animate-fade-in-up">
                      <div className="flex justify-between items-center mb-1">
                        <h4 className="font-display font-bold text-sm text-slate-800">Active Notice Board</h4>
                        <span className="text-[8px] font-bold text-slate-400 uppercase">3 Bulletins</span>
                      </div>

                      <div className="space-y-3">
                        <div className="bg-white border border-slate-100 p-3 rounded-xl shadow-sm relative overflow-hidden">
                          <div className="absolute top-0 right-0 bg-primary-600 text-white text-[7px] font-bold px-2 py-0.5 rounded-bl">NEW</div>
                          <span className="block text-[8px] font-bold text-slate-400 uppercase">Agriculture</span>
                          <span className="block text-[11px] font-bold text-slate-800 leading-tight mt-1 mb-0.5">Subsidized Seeds Sale</span>
                          <p className="text-[9px] text-slate-500 leading-normal">Distribution starts Monday at cooperative yard. Carry soil test card.</p>
                        </div>

                        <div className="bg-white border border-slate-100 p-3 rounded-xl shadow-sm">
                          <span className="block text-[8px] font-bold text-slate-400 uppercase">Health Camp</span>
                          <span className="block text-[11px] font-bold text-slate-800 leading-tight mt-1 mb-0.5">Free Preventive Health</span>
                          <p className="text-[9px] text-slate-500 leading-normal">Multi-specialty camp next Thursday morning at school complex.</p>
                        </div>
                      </div>
                    </div>
                  )}

                </div>

                {/* Simulated Mobile Bottom Nav Bar */}
                <div className="bg-slate-900 border-t border-slate-800 py-3 px-6 flex justify-between items-center text-slate-500 shrink-0 z-30">
                  <button onClick={() => setActiveScreen('home')} className={`flex flex-col items-center gap-1 focus:outline-none ${activeScreen === 'home' ? 'text-primary-500' : 'hover:text-slate-300'}`}>
                    <Home className="h-4 w-4" />
                    <span className="text-[8px] font-bold">Home</span>
                  </button>
                  <button onClick={() => setActiveScreen('services')} className={`flex flex-col items-center gap-1 focus:outline-none ${activeScreen === 'services' ? 'text-primary-500' : 'hover:text-slate-300'}`}>
                    <Landmark className="h-4 w-4" />
                    <span className="text-[8px] font-bold">Services</span>
                  </button>
                  <button onClick={() => setActiveScreen('farming')} className={`flex flex-col items-center gap-1 focus:outline-none ${activeScreen === 'farming' ? 'text-primary-500' : 'hover:text-slate-300'}`}>
                    <Sprout className="h-4 w-4" />
                    <span className="text-[8px] font-bold">Smart Farm</span>
                  </button>
                  <button onClick={() => setActiveScreen('updates')} className={`flex flex-col items-center gap-1 focus:outline-none ${activeScreen === 'updates' ? 'text-primary-500' : 'hover:text-slate-300'}`}>
                    <FileText className="h-4 w-4" />
                    <span className="text-[8px] font-bold">Notice</span>
                  </button>
                </div>
              </div>

              {/* Bottom Home Indicator Bar */}
              <div className="relative z-30 h-5 w-full flex items-center justify-center bg-slate-900 shrink-0 select-none">
                <div className="w-24 h-1 bg-white/20 rounded-full" />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
