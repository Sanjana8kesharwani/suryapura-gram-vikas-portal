import React from 'react';
import { Bell, Calendar, Download, FileText, ArrowRight } from 'lucide-react';
import Card from './UI/Card';

export default function Updates() {
  const announcements = [
    {
      title: 'Subsidized Seeds Distribution Schedule',
      date: 'June 18, 2026',
      desc: 'Distribution of high-yielding paddy and pulse seeds starts next Monday at the cooperative godown. Keep your Soil Health Cards handy.',
      category: 'Agriculture',
      isNew: true,
    },
    {
      title: 'Free Preventive Health Camp',
      date: 'June 22, 2026',
      desc: 'In coordination with District General Hospital, a free multi-specialty health check-up and eye screening camp will be held at the High School.',
      category: 'Health',
      isNew: false,
    },
    {
      title: 'Fiber Internet Extension Survey',
      date: 'June 12, 2026',
      desc: 'Surveyors will visit homes in Sector C to lay underground high-speed fiber cables. Residents are requested to coordinate with Panchayat leads.',
      category: 'Digital',
      isNew: false,
    },
  ];

  const circulars = [
    { name: 'Panchayat Annual Budget Draft 2026-27', size: '2.4 MB', type: 'PDF' },
    { name: 'PM-KISAN Cooperative Beneficiary List', size: '1.8 MB', type: 'PDF' },
    { name: 'Smart Class Volunteer Tutors Vacancy', size: '940 KB', type: 'PDF' },
  ];

  return (
    <section id="updates" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary-600 text-xs sm:text-sm font-extrabold uppercase tracking-widest block mb-3">
            Latest Bulletin
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Notice Board & <span className="text-primary-600">Village Updates</span>
          </h2>
          <p className="text-slate-500 text-base sm:text-lg">
            Stay informed about the latest developmental projects, cooperative announcements, and public circulars.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Announcements - Left 8 Columns */}
          <div className="lg:col-span-8 space-y-6">
            <h3 className="font-display font-bold text-xl text-slate-800 flex items-center gap-2 mb-4">
              <Bell className="h-5 w-5 text-primary-600 animate-bounce" />
              Active Bulletins
            </h3>

            {announcements.map((item, idx) => (
              <Card key={idx} className="relative overflow-hidden hover:border-primary-100 transition-colors">
                {item.isNew && (
                  <div className="absolute top-0 right-0 bg-primary-600 text-white text-[9px] font-extrabold px-3 py-1 rounded-bl-xl uppercase tracking-wider">
                    New
                  </div>
                )}
                
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  <div className="text-left shrink-0">
                    <span className="inline-block bg-slate-100 text-slate-500 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider mb-2">
                      {item.category}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-slate-400">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>{item.date}</span>
                    </div>
                  </div>

                  <div className="flex-grow">
                    <h4 className="font-display font-bold text-base sm:text-lg text-slate-800 mb-1 hover:text-primary-600 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Public Circulars Download - Right 4 Columns */}
          <div className="lg:col-span-4 bg-white border border-slate-100 shadow-premium rounded-3xl p-6 sm:p-8">
            <h3 className="font-display font-bold text-xl text-slate-800 mb-6 flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary-600" />
              Official Documents
            </h3>

            <div className="space-y-4">
              {circulars.map((doc, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-3 rounded-2xl border border-slate-50 hover:border-primary-100 hover:bg-primary-50/20 transition-all group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-slate-100 text-slate-500 group-hover:bg-white group-hover:text-primary-600 transition-colors shrink-0">
                      <FileText className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-slate-700 leading-snug group-hover:text-primary-600 transition-colors line-clamp-1">
                        {doc.name}
                      </span>
                      <span className="block text-[10px] text-slate-400 mt-0.5 font-mono">
                        {doc.type} • {doc.size}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-1.5 rounded-lg bg-slate-50 text-slate-400 hover:text-primary-600 hover:bg-white border border-slate-100 transition-all shrink-0">
                    <Download className="h-4 w-4" />
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="mt-6 w-full flex items-center justify-center gap-1.5 text-xs font-bold text-primary-600 hover:text-primary-700 transition-colors py-2 rounded-xl border border-slate-100 hover:border-primary-100"
            >
              Request Custom Records
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
