import React from 'react';
import { Target, Heart, Award, Sparkles } from 'lucide-react';
import Card from './UI/Card';

export default function AboutVillage() {
  const highlights = [
    {
      icon: <Award className="h-6 w-6 text-primary-600" />,
      title: 'National Recognitions',
      desc: 'Awarded the "Nirmal Gram Puraskar" for outstanding sanitation and "Panchayat Sashaktikaran Puraskar" for local e-governance.',
      bg: 'bg-primary-50',
    },
    {
      icon: <Heart className="h-6 w-6 text-rose-600" />,
      title: 'Community Harmony',
      desc: 'A vibrant community of 4,200 residents fostering mutual cooperation, collective crop planning, and cultural traditions.',
      bg: 'bg-rose-50',
    },
    {
      icon: <Target className="h-6 w-6 text-accent-600" />,
      title: 'Our Smart Vision',
      desc: 'Achieving 100% self-reliance in renewable energy, circular waste management, and high-tech skill training for rural youth by 2028.',
      bg: 'bg-accent-50',
    },
  ];

  return (
    <section id="about" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-subtle pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-accent-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-subtle pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Narrative - Left 7 columns */}
          <div className="lg:col-span-7">
            <span className="text-primary-600 text-xs sm:text-sm font-extrabold uppercase tracking-widest block mb-3">
              About Our Village
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
              Suryapura: The Dawn of a <br className="hidden sm:inline" />
              <span className="text-primary-600">Sustainable Rural Model</span>
            </h2>
            
            <p className="text-slate-600 text-base sm:text-lg mb-6 leading-relaxed">
              Nestled along the fertile plains, Suryapura has transitioned from a traditional agrarian settlement into a shining emblem of rural development. Our journey is driven by a simple yet profound philosophy: **rooted in heritage, powered by technology**.
            </p>
            
            <p className="text-slate-600 text-base sm:text-lg mb-8 leading-relaxed">
              Through the collaborative efforts of our Gram Panchayat, local volunteers, and regional agricultural extension support, we have pioneered smart organic farming methods, established digital classrooms, and connected every household to high-speed fiber internet. Today, Suryapura stands proud as a model smart village that inspires rural communities nationwide.
            </p>

            <div className="grid grid-cols-2 gap-6 border-t border-slate-200 pt-8">
              <div>
                <span className="block font-display text-3xl font-extrabold text-primary-600">4,200+</span>
                <span className="block text-sm font-semibold text-slate-500 mt-1">Active Population</span>
              </div>
              <div>
                <span className="block font-display text-3xl font-extrabold text-secondary-600">100%</span>
                <span className="block text-sm font-semibold text-slate-500 mt-1">Solar Street Lighting</span>
              </div>
            </div>
          </div>

          {/* Highlights Grid - Right 5 columns */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {highlights.map((item, idx) => (
              <Card key={idx} className="flex gap-4 items-start relative overflow-hidden group">
                {/* Accent top line */}
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary-500 to-accent-500" />
                
                <div className={`p-3 rounded-2xl ${item.bg} text-slate-800 shrink-0`}>
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-slate-800 mb-1 group-hover:text-primary-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {item.desc}
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
