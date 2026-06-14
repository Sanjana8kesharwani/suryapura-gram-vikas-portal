import React, { useState } from 'react';
import { Image, Eye, Leaf, Cpu, GraduationCap, HardHat } from 'lucide-react';
import Card from './UI/Card';

export default function Gallery() {
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'farming', name: 'Smart Farming' },
    { id: 'infra', name: 'Infrastructure' },
    { id: 'edu', name: 'Education' },
  ];

  const galleryItems = [
    {
      title: 'Bountiful Organic Fields',
      desc: 'Golden mustard crops under organic cultivation in Central Zone.',
      category: 'farming',
      gradient: 'from-amber-500 to-emerald-500',
      icon: <Leaf className="h-6 w-6 text-white" />,
      size: 'md:col-span-2',
    },
    {
      title: 'Smart Classroom Coding',
      desc: 'Students learning basic script programming during computer lab hours.',
      category: 'edu',
      gradient: 'from-sky-500 to-indigo-600',
      icon: <GraduationCap className="h-6 w-6 text-white" />,
      size: 'md:col-span-1',
    },
    {
      title: 'Solar Lantern Commission',
      desc: 'Installing automatic sensor lights along the Main Link Road.',
      category: 'infra',
      gradient: 'from-orange-400 to-rose-500',
      icon: <HardHat className="h-6 w-6 text-white" />,
      size: 'md:col-span-1',
    },
    {
      title: 'Farmers Cooperative Meet',
      desc: 'Monthly collective crop pricing and soil assessment assembly.',
      category: 'farming',
      gradient: 'from-green-500 to-teal-600',
      icon: <Leaf className="h-6 w-6 text-white" />,
      size: 'md:col-span-1',
    },
    {
      title: 'Water RO Plant Commissioning',
      desc: 'Opening of the second mineralized clean water filtration plant.',
      category: 'infra',
      gradient: 'from-blue-400 to-sky-600',
      icon: <Cpu className="h-6 w-6 text-white" />,
      size: 'md:col-span-2',
    },
  ];

  const filteredItems = filter === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === filter);

  return (
    <section id="gallery" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <span className="text-primary-600 text-xs sm:text-sm font-extrabold uppercase tracking-widest block mb-3">
              Visual Highlights
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              Community <span className="text-primary-600">Gallery</span>
            </h2>
          </div>

          {/* Filtering buttons */}
          <div className="flex flex-wrap gap-2 bg-slate-100 p-1 rounded-xl self-start">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  filter === cat.id ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={idx}
              className={`relative rounded-3xl overflow-hidden min-h-[260px] group shadow-sm flex flex-col justify-end p-6 ${item.size || ''}`}
            >
              {/* Colored gradient background representing picture */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} transition-transform duration-500 group-hover:scale-105`} />
              
              {/* Overlay shadow to increase text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />

              {/* Hover magnifying glass indicator */}
              <div className="absolute top-4 right-4 p-2 bg-white/10 backdrop-blur-md rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Eye className="h-4 w-4 text-white" />
              </div>

              {/* Card content */}
              <div className="relative z-10 text-white">
                <div className="p-2 bg-white/20 backdrop-blur-md rounded-xl inline-flex items-center justify-center mb-4 border border-white/10">
                  {item.icon}
                </div>
                <h3 className="font-display font-extrabold text-lg sm:text-xl tracking-tight leading-snug mb-1">
                  {item.title}
                </h3>
                <p className="text-white/80 text-xs sm:text-sm leading-relaxed max-w-md font-light">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
