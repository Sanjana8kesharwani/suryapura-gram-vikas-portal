import React, { useState } from 'react';
import { BookOpen, Laptop, Milestone, Award, CheckCircle2 } from 'lucide-react';
import Card from './UI/Card';

export default function Education() {
  const [activeTab, setActiveTab] = useState('schools');

  const learningPrograms = [
    {
      title: 'Smart Classroom Labs',
      desc: 'All 3 primary and secondary schools are equipped with interactive smart boards, audio-visual systems, and digital curriculum.',
      icon: <Laptop className="h-6 w-6 text-accent-500" />,
      stats: '12 Smart Classrooms',
    },
    {
      title: 'Digital Library & Coding Club',
      desc: 'Village library hosts 15 computers with high-speed internet. Kids learn visual coding (Scratch), basic Python, and digital typing.',
      icon: <BookOpen className="h-6 w-6 text-emerald-500" />,
      stats: '140+ Active Students',
    },
    {
      title: 'Vocational & Adult Literacy',
      desc: 'Evening programs helping local adults learn digital literacy, government scheme navigation, and online banking safety.',
      icon: <Award className="h-6 w-6 text-amber-500" />,
      stats: '380+ Adults Certified',
    },
  ];

  return (
    <section id="education" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-4">
          <div className="max-w-2xl">
            <span className="text-accent-600 text-xs sm:text-sm font-extrabold uppercase tracking-widest block mb-3">
              Empowering Minds
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              Digital Education <span className="text-accent-500">Initiative</span>
            </h2>
            <p className="text-slate-500 text-base sm:text-lg mt-4">
              Equipping Suryapura's children and adults with modern computing, coding, and basic education tools to thrive in a digital economy.
            </p>
          </div>
          <div className="shrink-0 flex gap-2 bg-slate-200/60 p-1.5 rounded-full self-start">
            <button
              onClick={() => setActiveTab('schools')}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'schools' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              School Statistics
            </button>
            <button
              onClick={() => setActiveTab('highlights')}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'highlights' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              Special Achievements
            </button>
          </div>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Program cards - Left 6 columns */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            {learningPrograms.map((program, idx) => (
              <Card key={idx} className="flex gap-4 p-5 hover:border-accent-200 transition-colors">
                <div className="p-3 rounded-2xl bg-slate-50 shrink-0 border border-slate-100 flex items-center justify-center h-12 w-12">
                  {program.icon}
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-slate-800 mb-1">
                    {program.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-3">
                    {program.desc}
                  </p>
                  <span className="inline-block bg-accent-50 text-accent-700 text-xs px-2.5 py-1 rounded-full font-bold">
                    {program.stats}
                  </span>
                </div>
              </Card>
            ))}
          </div>

          {/* Detailed View / Dynamic tab contents - Right 6 columns */}
          <div className="lg:col-span-6 bg-white border border-slate-100 shadow-premium rounded-3xl p-6 sm:p-8">
            {activeTab === 'schools' ? (
              <div>
                <h3 className="font-display font-bold text-2xl text-slate-800 mb-6 flex items-center gap-2">
                  <span className="p-1.5 rounded-lg bg-accent-50 text-accent-500"><BookOpen className="h-5 w-5" /></span>
                  Primary & Secondary School Metrics
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-semibold text-slate-600">Student Enrollment Rate</span>
                      <span className="font-bold text-accent-600">99.4%</span>
                    </div>
                    <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                      <div className="bg-accent-500 h-full rounded-full transition-all duration-1000" style={{ width: '99.4%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-semibold text-slate-600">Smart Classroom Coverage</span>
                      <span className="font-bold text-accent-600">100%</span>
                    </div>
                    <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                      <div className="bg-accent-500 h-full rounded-full transition-all duration-1000" style={{ width: '100%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-semibold text-slate-600">Internet & Fiber Connectivity</span>
                      <span className="font-bold text-accent-600">100 Mbps</span>
                    </div>
                    <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                      <div className="bg-accent-500 h-full rounded-full transition-all duration-1000" style={{ width: '85%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-semibold text-slate-600">Computer Literacy Rate (Students)</span>
                      <span className="font-bold text-accent-600">92.0%</span>
                    </div>
                    <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                      <div className="bg-accent-500 h-full rounded-full transition-all duration-1000" style={{ width: '92%' }}></div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-slate-50 rounded-2xl border border-slate-100 text-xs text-slate-500 flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                  All data is audited annually by the District Primary Education Board (DPEB) and uploaded to the national e-Panchayat tracker.
                </div>
              </div>
            ) : (
              <div>
                <h3 className="font-display font-bold text-2xl text-slate-800 mb-6 flex items-center gap-2">
                  <span className="p-1.5 rounded-lg bg-emerald-50 text-emerald-500"><Award className="h-5 w-5" /></span>
                  Initiative Milestones
                </h3>

                <ul className="space-y-4">
                  <li className="flex gap-3 items-start">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="block font-semibold text-slate-700 text-sm">State Smart School Excellence Award</span>
                      <span className="block text-slate-500 text-xs">Awarded to Suryapura High School in 2025 for integration of audio-visual coding blocks.</span>
                    </div>
                  </li>
                  <li className="flex gap-3 items-start">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="block font-semibold text-slate-700 text-sm">Savitribai Phule Girls Scholarship Program</span>
                      <span className="block text-slate-500 text-xs">100% financial coverage for higher secondary education of girls who secure above 75%.</span>
                    </div>
                  </li>
                  <li className="flex gap-3 items-start">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="block font-semibold text-slate-700 text-sm">Adult Literacy Center</span>
                      <span className="block text-slate-500 text-xs">Pioneering evening programs helping village elders learn net banking, government app handling, and smart phone usage.</span>
                    </div>
                  </li>
                </ul>

                <div className="mt-6 border-t border-slate-100 pt-6">
                  <span className="block text-slate-400 text-xs font-semibold uppercase tracking-wider mb-2">Coordinating Officers</span>
                  <div className="flex gap-3">
                    <div className="h-8 w-8 rounded-full bg-slate-200 flex items-center justify-center font-display font-extrabold text-xs">AM</div>
                    <div>
                      <span className="block text-xs font-bold text-slate-700">Dr. Anjali Mehta</span>
                      <span className="block text-[10px] text-slate-400">Head of District Smart Education Board</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
