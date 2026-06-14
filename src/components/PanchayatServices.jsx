import React, { useState } from 'react';
import { ShieldCheck, FileText, Search, CreditCard, CheckCircle, AlertCircle, FileCheck, Landmark } from 'lucide-react';
import Card from './UI/Card';
import Button from './UI/Button';

const CITIZEN_DB = {
  'SUR-1024': { name: 'Ramesh Patil', designation: 'Co-op Organic Farmer', phone: '+91 98765 43210', activeScheme: 'PM-KISAN Co-op', verified: true },
  'SUR-2045': { name: 'Dr. Anjali Mehta', designation: 'Primary School Coordinator', phone: '+91 87654 32109', activeScheme: 'District E-Learning Advisor', verified: true },
  'SUR-3088': { name: 'Sanjay Kesharwani', designation: 'Technologist & Scholar', phone: '+91 76543 21098', activeScheme: 'Smart Village Digital Lead', verified: true },
};

export default function PanchayatServices() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);

  const handleVerify = (e) => {
    e.preventDefault();
    const query = searchQuery.trim().toUpperCase();
    setHasSearched(true);
    if (CITIZEN_DB[query]) {
      setSearchResult(CITIZEN_DB[query]);
    } else {
      setSearchResult(null);
    }
  };

  const services = [
    { title: 'E-Birth / Death Certificates', desc: 'Request and download digital birth or death certificates within 3 business days.', category: 'Documentation' },
    { title: 'Income & Caste Registry', desc: 'Apply online for income evaluation or community caste validation cards.', category: 'Documentation' },
    { title: 'Panchayat Scheme Enrolment', desc: 'One-click registration for housing, crop insurance, and solar subsidy schemes.', category: 'Schemes' },
    { title: 'Grievance Filing Desk', desc: 'Log grievances related to electricity, sanitation, or roadways. Track resolution status in real-time.', category: 'Grievances' },
  ];

  return (
    <section id="services" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary-600 text-xs sm:text-sm font-extrabold uppercase tracking-widest block mb-3">
            Digital E-Governance
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Panchayat <span className="text-primary-600">Digital Services</span>
          </h2>
          <p className="text-slate-500 text-base sm:text-lg">
            Access administrative directories, file complaints, download certificates, and verify smart citizen credentials.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Service cards - Left 7 columns */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((service, idx) => (
              <Card key={idx} className="flex flex-col h-full border border-slate-100 hover:border-primary-200 transition-colors group">
                <span className="inline-block self-start bg-slate-100 text-slate-500 text-[10px] font-bold px-2 py-0.5 rounded-full mb-3 uppercase tracking-wider">
                  {service.category}
                </span>
                <h3 className="font-display font-bold text-lg text-slate-800 mb-2 leading-snug group-hover:text-primary-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed mb-6 flex-grow">
                  {service.desc}
                </p>
                <div className="mt-auto pt-4 border-t border-slate-50 flex justify-between items-center text-xs font-bold text-primary-600 group-hover:text-primary-700">
                  <span>Access Portal</span>
                  <FileText className="h-4 w-4 transform group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Card>
            ))}
          </div>

          {/* Digital ID Verification Card - Right 5 columns */}
          <div className="lg:col-span-5">
            <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-premium relative overflow-hidden">
              <div className="flex items-center gap-2 mb-6">
                <div className="p-1.5 rounded-lg bg-primary-100 text-primary-600">
                  <CreditCard className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-slate-800">Digital ID Validator</h3>
                  <span className="block text-[10px] text-slate-400 font-semibold uppercase tracking-wider leading-none">Smart Village Registry</span>
                </div>
              </div>

              <p className="text-slate-500 text-xs mb-5 leading-relaxed">
                Enter a resident's Digital Identity Code below to check active enrollment status, smart agricultural card details, or primary occupation registries.
              </p>

              <form onSubmit={handleVerify} className="flex gap-2 mb-6">
                <div className="relative flex-grow">
                  <Search className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
                  <input
                    type="text"
                    placeholder="e.g. SUR-1024"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-white border border-slate-200 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 rounded-xl py-2 pl-10 pr-4 text-sm outline-none transition-colors uppercase font-mono"
                  />
                </div>
                <Button type="submit" variant="primary" className="py-2.5 px-5 text-sm rounded-xl">
                  Verify
                </Button>
              </form>

              {/* Search Result Box */}
              {hasSearched && (
                <div className="border-t border-slate-200/80 pt-6 animate-fade-in-up">
                  {searchResult ? (
                    <div className="bg-white border border-emerald-100 rounded-2xl p-4 flex gap-4 items-start shadow-sm">
                      <div className="p-2 rounded-full bg-emerald-50 text-emerald-600 mt-0.5">
                        <CheckCircle className="h-5 w-5" />
                      </div>
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-2">
                          <span className="font-display font-extrabold text-sm text-slate-800">{searchResult.name}</span>
                          <span className="text-[9px] bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded font-extrabold uppercase">Verified</span>
                        </div>
                        <span className="block text-xs text-slate-500">{searchResult.designation}</span>
                        <span className="block text-xs font-mono text-slate-400">Phone: {searchResult.phone}</span>
                        <span className="block text-[10px] text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded inline-block font-semibold">
                          Active: {searchResult.activeScheme}
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-rose-50 border border-rose-100 text-rose-800 rounded-2xl p-4 flex gap-3 items-center text-xs">
                      <AlertCircle className="h-5 w-5 text-rose-500 shrink-0" />
                      <div>
                        <span className="block font-bold">Resident ID Not Found</span>
                        <span className="block text-rose-600 mt-0.5">Please try entering either <strong className="font-mono">SUR-1024</strong> or <strong className="font-mono">SUR-2045</strong> or <strong className="font-mono">SUR-3088</strong>.</span>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Note */}
              <div className="mt-6 p-4 bg-primary-50 rounded-2xl border border-primary-100 text-[11px] text-primary-700 flex gap-2">
                <FileCheck className="h-4 w-4 shrink-0 mt-0.5" />
                This database integrates citizen records directly with State UID registries under SSL encryption protocols.
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
