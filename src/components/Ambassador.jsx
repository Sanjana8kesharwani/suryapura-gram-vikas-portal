import React from 'react';
import { Award, GraduationCap, Leaf, Mail, ShieldCheck } from 'lucide-react';
import Card from './UI/Card';

export default function Ambassador() {
  const ambassadors = [
    {
      name: 'Shri Ramnath Patil',
      role: 'Gram Sarpanch (Village Chief)',
      imageBg: 'bg-gradient-to-tr from-emerald-600 to-green-400',
      initials: 'RP',
      desc: 'Spearheaded the 100% solar village electrification campaign and digital panchayat file management system.',
      tag: 'Governance & Green Energy',
      icon: <ShieldCheck className="h-5 w-5 text-emerald-600" />,
      contact: 'sarpanch.suryapura@gov.in',
    },
    {
      name: 'Dr. Anjali Mehta',
      role: 'Education Coordinator',
      imageBg: 'bg-gradient-to-tr from-sky-600 to-indigo-400',
      initials: 'AM',
      desc: 'Instrumental in establishing smart classrooms, language labs, and tutoring initiatives for children under the Digital Education Initiative.',
      tag: 'Digital Learning',
      icon: <GraduationCap className="h-5 w-5 text-sky-600" />,
      contact: 'education.suryapura@gmail.com',
    },
    {
      name: 'Rajesh Kumar',
      role: 'Agri-Tech Lead & Advisor',
      imageBg: 'bg-gradient-to-tr from-amber-600 to-yellow-400',
      initials: 'RK',
      desc: 'Introduced smart sensor drip irrigation, organic certification courses, and the village agricultural machinery sharing cooperative.',
      tag: 'Smart Farming',
      icon: <Leaf className="h-5 w-5 text-amber-600" />,
      contact: 'rajesh.agri@suryapura.org',
    },
  ];

  return (
    <section id="ambassadors" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary-600 text-xs sm:text-sm font-extrabold uppercase tracking-widest block mb-3">
            Local Leadership
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Meet Our <span className="text-primary-600">Development Ambassadors</span>
          </h2>
          <p className="text-slate-500 text-base sm:text-lg">
            Dedicated change-makers driving our development goals in public administration, educational innovation, and sustainable farming.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ambassadors.map((person, idx) => (
            <Card key={idx} className="flex flex-col h-full border border-slate-100 group relative overflow-hidden">
              {/* Card top gradient band */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-slate-100 group-hover:bg-primary-600 transition-colors" />

              {/* Header profile info */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white font-display font-extrabold text-lg shadow-md ${person.imageBg}`}>
                  {person.initials}
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-slate-800 leading-snug group-hover:text-primary-600 transition-colors">
                    {person.name}
                  </h3>
                  <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider mt-0.5">
                    {person.role}
                  </p>
                </div>
              </div>

              {/* Quote/Description */}
              <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow italic">
                "{person.desc}"
              </p>

              {/* Badges and Contacts */}
              <div className="border-t border-slate-100 pt-5 mt-auto flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <div className="p-1 rounded bg-slate-100 text-slate-600 shrink-0">
                    {person.icon}
                  </div>
                  <span className="text-xs font-semibold text-slate-600">
                    {person.tag}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-slate-400 hover:text-primary-600 transition-colors text-xs">
                  <Mail className="h-4 w-4 shrink-0" />
                  <a href={`mailto:${person.contact}`} className="font-mono">
                    {person.contact}
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}
