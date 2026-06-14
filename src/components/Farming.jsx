import React from 'react';
import { Leaf, Sun, Thermometer, Droplets, ArrowUpRight, Tractor, ShieldCheck } from 'lucide-react';
import Card from './UI/Card';

export default function Farming() {
  const farmServices = [
    {
      title: 'Soil Health Testing Lab',
      desc: 'Free testing for pH, nitrogen, phosphorus, and carbon content. Custom fertilizer prescription reports issued in 48 hours.',
      icon: <Droplets className="h-6 w-6 text-emerald-600" />,
    },
    {
      title: 'Co-op Equipment Bank',
      desc: 'Shared access to modern tractors, seeders, laser levels, and harvesters at heavily subsidized daily rental rates.',
      icon: <Tractor className="h-6 w-6 text-emerald-600" />,
    },
    {
      title: 'Organic Certification Support',
      desc: 'Guidance and administrative support for farmers transitions to chemical-free organic farming, yielding 25% higher market premium.',
      icon: <ShieldCheck className="h-6 w-6 text-emerald-600" />,
    },
  ];

  const cropRates = [
    { crop: 'Basmati Rice', rate: '₹4,800 / Quintal', change: '+₹150' },
    { crop: 'Organic Wheat', rate: '₹2,650 / Quintal', change: '+₹80' },
    { crop: 'Mustard Seeds', rate: '₹5,400 / Quintal', change: '-₹40' },
    { crop: 'Sugarcane', rate: '₹350 / Quintal', change: 'Stable' },
  ];

  return (
    <section id="farming" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary-600 text-xs sm:text-sm font-extrabold uppercase tracking-widest block mb-3">
            Smart Agriculture
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Sustainable & Modern <span className="text-primary-600">Smart Farming</span>
          </h2>
          <p className="text-slate-500 text-base sm:text-lg">
            Empowering our farmers with high-yield agritech, crop advisory services, organic practices, and shared farming machinery.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Advisory Dashboard Mockup - Left 5 Columns */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 flex flex-col h-full relative overflow-hidden shadow-xl shadow-slate-200">
              
              {/* Glass decorative circle */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full filter blur-2xl" />

              <div className="flex justify-between items-center mb-6">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-400">Live Dashboard</span>
                  <h3 className="font-display font-bold text-xl mt-0.5">Agri-Advisory Desk</h3>
                </div>
                <div className="h-2 w-2 bg-emerald-500 rounded-full animate-pulse" />
              </div>

              {/* Weather Ticker */}
              <div className="grid grid-cols-3 gap-3 bg-white/5 rounded-2xl p-4 border border-white/5 mb-6 text-center">
                <div>
                  <div className="flex justify-center text-amber-400 mb-1"><Sun className="h-5 w-5" /></div>
                  <span className="block text-[10px] text-slate-400 uppercase font-semibold">Weather</span>
                  <span className="block font-display font-extrabold text-sm mt-0.5">32°C Sunny</span>
                </div>
                <div>
                  <div className="flex justify-center text-emerald-400 mb-1"><Droplets className="h-5 w-5" /></div>
                  <span className="block text-[10px] text-slate-400 uppercase font-semibold">Soil Moisture</span>
                  <span className="block font-display font-extrabold text-sm mt-0.5">42% (Optimal)</span>
                </div>
                <div>
                  <div className="flex justify-center text-sky-400 mb-1"><Thermometer className="h-5 w-5" /></div>
                  <span className="block text-[10px] text-slate-400 uppercase font-semibold">Humidity</span>
                  <span className="block font-display font-extrabold text-sm mt-0.5">65%</span>
                </div>
              </div>

              {/* Crop Recommendation Message */}
              <div className="bg-emerald-950/40 border border-emerald-500/20 rounded-2xl p-4 mb-6">
                <span className="block font-semibold text-xs text-emerald-400 flex items-center gap-1.5 mb-1">
                  <Leaf className="h-3.5 w-3.5" />
                  Weekly Recommendation
                </span>
                <p className="text-slate-300 text-xs leading-relaxed">
                  Excellent soil carbon levels detected across Zone A. Farmers are advised to initiate sowing of Basmati Rice. Ensure micro-sprinkler levels are set to 40% volume.
                </p>
              </div>

              {/* Crop Market Price List */}
              <div className="mt-auto">
                <span className="block text-[10px] text-slate-400 uppercase font-bold tracking-wider mb-3">Today's Market Rates (APMC)</span>
                <div className="space-y-2.5">
                  {cropRates.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center text-xs border-b border-white/5 pb-2 last:border-0 last:pb-0">
                      <span className="text-slate-300 font-medium">{item.crop}</span>
                      <div className="flex items-center gap-2">
                        <span className="font-bold font-display">{item.rate}</span>
                        <span className={`text-[10px] font-bold font-display px-1.5 py-0.5 rounded ${
                          item.change.startsWith('+') ? 'bg-emerald-500/20 text-emerald-400' :
                          item.change.startsWith('-') ? 'bg-rose-500/20 text-rose-400' : 'bg-slate-700/30 text-slate-400'
                        }`}>
                          {item.change}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Service Listing - Right 7 Columns */}
          <div className="lg:col-span-7 flex flex-col gap-6 justify-between">
            {farmServices.map((service, idx) => (
              <Card key={idx} className="flex gap-4 p-6 hover:border-emerald-200 transition-colors group">
                <div className="p-3 rounded-2xl bg-emerald-50 text-emerald-600 shrink-0 h-12 w-12 flex items-center justify-center border border-emerald-100 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-slate-800 mb-1 group-hover:text-primary-600 transition-colors flex items-center gap-1.5">
                    {service.title}
                    <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </Card>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
