import React, { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle, Send, Landmark, Compass, Eye } from 'lucide-react';
import Card from './UI/Card';
import Button from './UI/Button';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    citizenId: '',
    issueType: 'Farming',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [hoveredLandmark, setHoveredLandmark] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formState.name && formState.phone && formState.message) {
      setSubmitted(true);
    }
  };

  const landmarks = [
    { id: 'panchayat', name: 'Gram Panchayat Office', x: '50%', y: '45%', desc: 'Administrative center, grievance desk, and public solar node.' },
    { id: 'school', name: 'Model High School', x: '25%', y: '30%', desc: 'E-learning smart classrooms, computer coding center, and play yard.' },
    { id: 'coop', name: 'Smart Farm Cooperative', x: '75%', y: '65%', desc: 'Soil testing lab, equipment bank, and cold storage units.' },
    { id: 'water', name: 'RO Water Filtration Hub', x: '35%', y: '70%', desc: 'Primary water treatment center serving 900+ households.' },
    { id: 'solar', name: '40kW Solar Power Station', x: '60%', y: '20%', desc: 'Central clean energy converter and grid monitoring deck.' },
  ];

  return (
    <section id="contact" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary-600 text-xs sm:text-sm font-extrabold uppercase tracking-widest block mb-3">
            Get In Touch
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Contact & <span className="text-primary-600">Grievance Desk</span>
          </h2>
          <p className="text-slate-500 text-base sm:text-lg">
            Submit your feedback, request certificates, or file administrative issues directly to our panchayat desk.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Grievance Form - Left 6 Columns */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-sm h-full flex flex-col">
              <h3 className="font-display font-bold text-xl text-slate-800 mb-6 flex items-center gap-2">
                <Landmark className="h-5 w-5 text-primary-600" />
                Submit Administrative Request
              </h3>

              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-100 text-emerald-800 rounded-2xl p-6 flex flex-col items-center text-center my-auto animate-fade-in-up">
                  <div className="h-12 w-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <h4 className="font-display font-bold text-lg mb-2">Request Submitted Successfully</h4>
                  <p className="text-xs text-slate-500 leading-relaxed mb-4">
                    Thank you, {formState.name}. Your ticket reference code is <strong className="font-mono text-emerald-700">SUR-GRV-8942</strong>. Our desk officers will review this request and contact you within 24 business hours.
                  </p>
                  <Button variant="primary" onClick={() => { setSubmitted(false); setFormState({ name: '', phone: '', citizenId: '', issueType: 'Farming', message: '' }); }} className="text-xs">
                    File Another Issue
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 flex-grow">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-500 mb-1.5">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full bg-white border border-slate-200 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 rounded-xl py-2 px-3 text-sm outline-none transition-colors"
                        placeholder="Ramesh Kumar"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-500 mb-1.5">Mobile Number *</label>
                      <input
                        type="tel"
                        required
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        className="w-full bg-white border border-slate-200 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 rounded-xl py-2 px-3 text-sm outline-none transition-colors"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-500 mb-1.5">Citizen ID (Optional)</label>
                      <input
                        type="text"
                        value={formState.citizenId}
                        onChange={(e) => setFormState({ ...formState, citizenId: e.target.value })}
                        className="w-full bg-white border border-slate-200 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 rounded-xl py-2 px-3 text-sm outline-none transition-colors uppercase font-mono"
                        placeholder="SUR-XXXX"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-500 mb-1.5">Issue Category</label>
                      <select
                        value={formState.issueType}
                        onChange={(e) => setFormState({ ...formState, issueType: e.target.value })}
                        className="w-full bg-white border border-slate-200 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 rounded-xl py-2 px-3 text-sm outline-none transition-colors"
                      >
                        <option value="Farming">Smart Farming / Cooperative</option>
                        <option value="Roads">Roads & Street Lighting</option>
                        <option value="Water">Clean Drinking Water</option>
                        <option value="Education">High School / Computers</option>
                        <option value="Admin">Panchayat Administration</option>
                        <option value="Other">Other Issues</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-500 mb-1.5">Elaborate Your Concern *</label>
                    <textarea
                      required
                      rows="4"
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full bg-white border border-slate-200 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 rounded-xl py-2 px-3 text-sm outline-none transition-colors resize-none"
                      placeholder="Describe your issue or feedback in detail..."
                    />
                  </div>

                  <Button type="submit" variant="primary" className="w-full py-3 rounded-xl font-bold flex justify-center gap-2 shadow-md hover:shadow-lg">
                    Submit Grievance
                    <Send className="h-4 w-4" />
                  </Button>
                </form>
              )}
            </div>
          </div>

          {/* Map and details - Right 6 Columns */}
          <div className="lg:col-span-6 flex flex-col gap-6 justify-between">
            {/* CSS Styled Map Mockup */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl relative min-h-[300px] flex flex-col justify-between overflow-hidden">
              {/* Map background grid lines */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:30px_30px] opacity-30" />
              
              {/* Map compass logo top left */}
              <div className="relative z-10 flex items-center gap-1.5 text-slate-400 text-xs font-semibold bg-slate-950/80 px-3 py-1.5 rounded-full border border-slate-800 self-start">
                <Compass className="h-4 w-4 animate-spin-slow text-primary-500" />
                <span>Interactive Village Map Mockup</span>
              </div>

              {/* Map container with landmark dots */}
              <div className="relative w-full h-[180px] my-4 bg-slate-950/30 rounded-2xl border border-slate-800/80">
                {landmarks.map((dot) => (
                  <button
                    key={dot.id}
                    className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer focus:outline-none group z-20"
                    style={{ left: dot.x, top: dot.y }}
                    onMouseEnter={() => setHoveredLandmark(dot)}
                    onMouseLeave={() => setHoveredLandmark(null)}
                  >
                    <span className="relative flex h-4 w-4">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                      <span className={`relative inline-flex rounded-full h-4 w-4 border-2 border-white shadow-md ${
                        hoveredLandmark?.id === dot.id ? 'bg-amber-500 scale-125' : 'bg-primary-500'
                      } transition-transform`}></span>
                    </span>
                    {/* Hover tooltip label */}
                    <span className="absolute left-1/2 -translate-x-1/2 bottom-5 bg-slate-950 text-white text-[10px] font-bold py-1 px-2.5 rounded-lg border border-slate-800 shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                      {dot.name}
                    </span>
                  </button>
                ))}
              </div>

              {/* Selected Landmark Info Desk */}
              <div className="relative z-10 bg-slate-950/90 border border-slate-800 p-3.5 rounded-2xl min-h-[68px] text-xs">
                {hoveredLandmark ? (
                  <div>
                    <h4 className="font-display font-extrabold text-primary-400 flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-primary-500" />
                      {hoveredLandmark.name}
                    </h4>
                    <p className="text-slate-400 mt-1">{hoveredLandmark.desc}</p>
                  </div>
                ) : (
                  <p className="text-slate-500 text-center flex items-center justify-center gap-1.5 h-10 italic">
                    <Eye className="h-4 w-4 text-slate-600" /> Hover over map coordinates to inspect village landmarks.
                  </p>
                )}
              </div>
            </div>

            {/* Direct Contact Info */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-slate-700">
              <div className="bg-slate-50 border border-slate-100 p-4 rounded-2xl flex gap-3 items-center">
                <div className="p-2.5 rounded-xl bg-primary-50 text-primary-600 shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-[10px] text-slate-400 font-bold uppercase">Call Helpdesk</span>
                  <span className="block text-xs font-bold font-mono">+91 276 290 8901</span>
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-100 p-4 rounded-2xl flex gap-3 items-center">
                <div className="p-2.5 rounded-xl bg-accent-50 text-accent-600 shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-[10px] text-slate-400 font-bold uppercase">Send Email</span>
                  <span className="block text-xs font-bold font-mono text-slate-600 break-all leading-tight">info@suryapura.gov.in</span>
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-100 p-4 rounded-2xl flex gap-3 items-center">
                <div className="p-2.5 rounded-xl bg-secondary-50 text-secondary-600 shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-[10px] text-slate-400 font-bold uppercase">Office Address</span>
                  <span className="block text-xs font-bold">Panchayat Bhavan, 384120</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
