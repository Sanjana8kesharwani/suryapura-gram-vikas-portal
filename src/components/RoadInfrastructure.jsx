import React from 'react';
import { Road, Zap, Droplet, Trash2, Calendar, CheckCircle, Clock } from 'lucide-react';
import Card from './UI/Card';

export default function RoadInfrastructure() {
  const infraProjects = [
    {
      title: 'Paved Link Road Network',
      desc: 'All 8 village lanes and the main connecting road to State Highway 12 are fully paved with double-layered cement concrete, facilitating all-weather transport.',
      icon: <Zap className="h-5 w-5 text-secondary-600" />, // using secondary color for roads (amber)
      progress: 100,
      status: 'Completed',
    },
    {
      title: 'Solar Microgrid & Lighting',
      desc: 'Installed 145 smart solar streetlights equipped with dusk-to-dawn sensors, alongside a centralized 40kW microgrid powering the Panchayat office and school.',
      icon: <Zap className="h-5 w-5 text-secondary-600" />,
      progress: 92,
      status: 'Active Expansion',
    },
    {
      title: 'RO Water Filtration Plants',
      desc: 'Two RO filtration plants established offering mineralized clean drinking water to all households at a nominal rate of ₹2 per 20-liter canister.',
      icon: <Droplet className="h-5 w-5 text-secondary-600" />,
      progress: 100,
      status: 'Completed',
    },
    {
      title: 'Solid Waste Segregation Center',
      desc: 'Launched household dry-wet waste collection. Establishing an organic composting pit to convert wet agricultural waste into natural fertilizers.',
      icon: <Trash2 className="h-5 w-5 text-secondary-600" />,
      progress: 80,
      status: 'In Development',
    },
  ];

  const milestones = [
    {
      year: '2024',
      title: 'RO Clean Water Plant Deployment',
      desc: 'Successfully installed two high-capacity RO filtration plants, providing clean drinking water to all 950 families.',
      status: 'completed',
    },
    {
      year: '2025',
      title: 'Concrete Link Roads & Drains',
      desc: 'Paved 5.4 kilometers of internal village lanes with side drainage systems to eliminate monsoon logging.',
      status: 'completed',
    },
    {
      year: '2026',
      title: 'Phase II Solar streetlights & Sewage',
      desc: 'Adding 40 more streetlights to newly expanded residential sectors and constructing a bio-gas reactor.',
      status: 'active',
    },
  ];

  return (
    <section id="infrastructure" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-4">
          <div className="max-w-2xl">
            <span className="text-secondary-600 text-xs sm:text-sm font-extrabold uppercase tracking-widest block mb-3">
              Infrastructure Progress
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              Roads, Energy & <span className="text-secondary-500">Public Utilities</span>
            </h2>
            <p className="text-slate-500 text-base sm:text-lg mt-4">
              Building standard-of-living structures in Suryapura with climate-resilient roads, green energy microgrids, and clean drinking water facilities.
            </p>
          </div>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Projects progress cards - Left 7 Columns */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {infraProjects.map((project, idx) => (
              <Card key={idx} className="flex flex-col h-full hover:border-secondary-200 transition-colors">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2.5 rounded-xl bg-secondary-50 text-secondary-600 border border-secondary-100">
                    {project.icon}
                  </div>
                  <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full ${
                    project.status === 'Completed' ? 'bg-green-50 text-green-700 border border-green-100' :
                    project.status === 'Active Expansion' ? 'bg-sky-50 text-sky-700 border border-sky-100' :
                    'bg-amber-50 text-amber-700 border border-amber-100'
                  }`}>
                    {project.status}
                  </span>
                </div>

                <h3 className="font-display font-bold text-lg text-slate-800 mb-2 leading-snug">
                  {project.title}
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed mb-6 flex-grow">
                  {project.desc}
                </p>

                {/* Progress bar */}
                <div>
                  <div className="flex justify-between text-[11px] font-bold text-slate-400 mb-1.5">
                    <span>Progress</span>
                    <span>{project.progress}%</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-secondary-500 h-full rounded-full transition-all duration-1000"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Timeline - Right 5 Columns */}
          <div className="lg:col-span-5 bg-white border border-slate-100 shadow-premium rounded-3xl p-6 sm:p-8">
            <h3 className="font-display font-bold text-xl text-slate-800 mb-6 flex items-center gap-2">
              <Calendar className="h-5 w-5 text-secondary-500" />
              Development Roadmap
            </h3>

            <div className="relative pl-6 border-l-2 border-slate-100 space-y-8">
              {milestones.map((milestone, idx) => (
                <div key={idx} className="relative">
                  {/* Timeline dot */}
                  <span className={`absolute -left-[31px] top-1.5 p-1 rounded-full border bg-white ${
                    milestone.status === 'completed' ? 'text-green-500 border-green-200' : 'text-secondary-500 border-secondary-200 animate-pulse'
                  }`}>
                    {milestone.status === 'completed' ? <CheckCircle className="h-3.5 w-3.5" /> : <Clock className="h-3.5 w-3.5" />}
                  </span>

                  <div>
                    <span className="inline-block bg-slate-100 text-slate-600 text-[10px] font-bold px-2 py-0.5 rounded-full mb-1">
                      {milestone.year}
                    </span>
                    <h4 className="font-display font-bold text-sm text-slate-800 mb-1">
                      {milestone.title}
                    </h4>
                    <p className="text-slate-500 text-xs leading-relaxed">
                      {milestone.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
