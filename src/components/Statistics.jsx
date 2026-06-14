import React from 'react';
import { Award, BarChart3, BookOpen, CheckCircle, Leaf, Sun, Users } from 'lucide-react';
import Card from './UI/Card';

export default function Statistics() {
  const stats = [
    {
      metric: '94.5%',
      label: 'Literacy Rate',
      details: 'District average is 72.8%. Supported by morning primary modules and afternoon vocational hubs.',
      icon: <BookOpen className="h-6 w-6 text-accent-600" />,
      color: 'border-accent-200',
    },
    {
      metric: '850+ Acres',
      label: 'Organic Farm Area',
      details: 'Over 80% of our cultivable agricultural zone is certified chemical-free and bio-fertilized.',
      icon: <Leaf className="h-6 w-6 text-emerald-600" />,
      color: 'border-emerald-200',
    },
    {
      metric: '100%',
      label: 'Solar Powered Grid',
      details: 'Every street, office, and public center is powered by carbon-free municipal solar cells.',
      icon: <Sun className="h-6 w-6 text-amber-600" />,
      color: 'border-amber-200',
    },
    {
      metric: '0%',
      label: 'Open Defecation',
      details: '100% toilet coverage with active underground community sewage and biogas reactors.',
      icon: <Users className="h-6 w-6 text-blue-600" />,
      color: 'border-blue-200',
    },
  ];

  return (
    <section id="statistics" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Visual background details */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-slate-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary-600 text-xs sm:text-sm font-extrabold uppercase tracking-widest block mb-3">
            Village Overview
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Suryapura by <span className="text-primary-600">the Numbers</span>
          </h2>
          <p className="text-slate-500 text-base sm:text-lg">
            A look at our development statistics demonstrating the real-world impact of digital governance, green initiatives, and local education.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((item, idx) => (
            <Card key={idx} className={`border-t-4 ${item.color} flex flex-col h-full group hover:shadow-xl`}>
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 rounded-2xl bg-slate-100/50 text-slate-700 shrink-0 border border-slate-200/40 group-hover:bg-white transition-colors">
                  {item.icon}
                </div>
                <span className="text-[10px] uppercase font-extrabold tracking-widest text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
                  Index Verified
                </span>
              </div>

              <div className="flex-grow">
                <span className="block font-display font-black text-3xl sm:text-4xl text-slate-900 tracking-tight mb-1 group-hover:text-primary-600 transition-colors">
                  {item.metric}
                </span>
                <span className="block font-bold text-sm text-slate-800 mb-3">
                  {item.label}
                </span>
                <p className="text-slate-500 text-xs leading-relaxed">
                  {item.details}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Small comparative summary footer card */}
        <div className="mt-12 bg-white border border-slate-200/60 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex gap-4 items-center">
            <div className="p-3 rounded-2xl bg-emerald-50 text-emerald-600 shrink-0">
              <Award className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-slate-800">Ranked #1 Smart Village in the District</h3>
              <p className="text-slate-500 text-xs mt-0.5">Scored 98.4 out of 100 on the National Panchayat Sustainable Development Goals (SDG) Index.</p>
            </div>
          </div>
          <div className="flex gap-2 shrink-0">
            <span className="flex items-center gap-1 text-xs font-semibold text-emerald-600 bg-emerald-50 border border-emerald-100 px-3 py-1.5 rounded-full">
              <CheckCircle className="h-3.5 w-3.5" />
              SDG Compliant
            </span>
            <span className="flex items-center gap-1 text-xs font-semibold text-slate-600 bg-slate-50 border border-slate-100 px-3 py-1.5 rounded-full">
              <BarChart3 className="h-3.5 w-3.5" />
              Audited 2026
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
