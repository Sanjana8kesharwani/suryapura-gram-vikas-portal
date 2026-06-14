import React from 'react';
import { Heart, MessageCircle, Send, Bookmark, User, Share2, Award, GraduationCap, HardHat, ShieldCheck, Sun } from 'lucide-react';
import Card from '../components/UI/Card';

export default function SocialPosts() {
  const posts = [
    {
      id: 1,
      topic: 'Digital Education Initiative',
      handle: 'suryapura_panchayat',
      tagline: 'Empowering Minds, Coding Futures',
      date: 'June 10, 2026',
      likes: '482 Likes',
      caption: 'Empowering our youth for a digital tomorrow! 💻🚀 Suryapura is proud to launch the Phase II Coding & Digital Literacy curriculum. With 12 smart classrooms and a dedicated 15-terminal computer lab, our students are now learning visual coding, Scratch, and Python. Transforming rural classrooms into centerpoints of innovation! #SmartVillage #DigitalIndia #RuralEducation #CodingClub',
      graphicBg: 'bg-gradient-to-br from-indigo-600 via-sky-600 to-indigo-800',
      graphicIcon: <GraduationCap className="h-12 w-12 text-white" />,
      graphicTitle: 'SURYAPURA DIGITAL LABS',
      graphicSub: '12 Smart Classrooms • Coding Club • Free Internet',
      accentColor: 'text-sky-500',
    },
    {
      id: 2,
      topic: 'Road Development Project',
      handle: 'suryapura_panchayat',
      date: 'June 14, 2026',
      likes: '512 Likes',
      tagline: 'Bridging Distance, Connecting Lives',
      caption: 'Connectivity breeds prosperity! 🛣️✨ The construction of our 5.4km double-concrete link road is officially completed. Connecting Suryapura directly to State Highway 12. This all-weather roadway reduces emergency travel times to district hospitals by 35% and eases agricultural transport to local APMC markets. #RoadDevelopment #Infrastructure #RuralGrowth #PavedRoads',
      graphicBg: 'bg-gradient-to-br from-amber-500 via-orange-600 to-amber-700',
      graphicIcon: <HardHat className="h-12 w-12 text-white" />,
      graphicTitle: 'ROADWAYS COMPLETED',
      graphicSub: '5.4km Concrete Mainways • Under-drainage Systems',
      accentColor: 'text-amber-500',
    },
  ];

  return (
    <section id="social-posts" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary-600 text-xs sm:text-sm font-extrabold uppercase tracking-widest block mb-3">
            Creative Assets
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Social Media <span className="text-primary-600">Post Designs</span>
          </h2>
          <p className="text-slate-500 text-base sm:text-lg">
            Beautifully designed promotional layouts representing key rural achievements in Digital Education and Road Development.
          </p>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {posts.map((post) => (
            <Card key={post.id} className="p-0 border border-slate-200 overflow-hidden shadow-lg flex flex-col justify-between" hoverEffect={false}>
              
              {/* Post Header */}
              <div className="p-4 border-b border-slate-100 bg-slate-50 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {/* Logo Avatar */}
                  <div className="h-9 w-9 rounded-full bg-primary-600 text-white flex items-center justify-center font-display font-black text-xs shadow-sm">
                    SP
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-slate-800 font-mono">@{post.handle}</span>
                    <span className="block text-[10px] text-slate-400 font-semibold">{post.topic}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 bg-primary-100 text-primary-700 text-[9px] font-extrabold px-2 py-0.5 rounded uppercase tracking-wider">
                  <Sun className="h-3 w-3 animate-spin-slow" />
                  Official Panchayat
                </div>
              </div>

              {/* Graphic Design Poster Area */}
              <div className={`relative ${post.graphicBg} aspect-square sm:aspect-[4/3] flex flex-col items-center justify-center text-center p-6 text-white overflow-hidden`}>
                {/* Decorative mesh */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:24px_24px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full filter blur-2xl pointer-events-none" />

                <div className="relative z-10 border border-white/20 p-8 rounded-2xl bg-slate-900/20 backdrop-blur-md max-w-sm flex flex-col items-center shadow-premium">
                  <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl mb-4 border border-white/10 animate-float">
                    {post.graphicIcon}
                  </div>
                  
                  <span className="text-[10px] font-extrabold tracking-widest text-white/60 uppercase">Suryapura Village Progress</span>
                  
                  <h3 className="font-display font-black text-xl sm:text-2xl mt-1.5 tracking-tight leading-snug uppercase">
                    {post.graphicTitle}
                  </h3>
                  
                  <div className="w-12 h-1 bg-white/30 rounded-full my-3" />
                  
                  <p className="text-[11px] font-semibold text-white/90 leading-relaxed max-w-xs uppercase tracking-wide">
                    {post.graphicSub}
                  </p>
                </div>

                {/* Footer Brand Ticker in Image */}
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[8px] text-white/60 font-semibold uppercase tracking-widest">
                  <span>SURYAPURA PANCHAYAT 2026</span>
                  <span>#GRAMVIKAS</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-4 border-b border-slate-100 flex items-center justify-between">
                <div className="flex gap-4 items-center">
                  <button className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-rose-500 transition-colors">
                    <Heart className="h-5 w-5 hover:scale-110 transition-transform" />
                  </button>
                  <button className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-primary-500 transition-colors">
                    <MessageCircle className="h-5 w-5 hover:scale-110 transition-transform" />
                  </button>
                  <button className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-accent-500 transition-colors">
                    <Send className="h-5 w-5 hover:scale-110 transition-transform animate-pulse-subtle" />
                  </button>
                </div>
                <button className="text-slate-500 hover:text-amber-500 transition-colors">
                  <Bookmark className="h-5 w-5 hover:scale-110 transition-transform" />
                </button>
              </div>

              {/* Caption and Date */}
              <div className="p-4 bg-slate-50/50 space-y-2 text-xs">
                <div className="font-bold text-slate-800">{post.likes}</div>
                <p className="text-slate-600 leading-relaxed">
                  <strong className="font-mono text-slate-900 mr-2">@{post.handle}</strong>
                  {post.caption}
                </p>
                <div className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider font-mono">
                  {post.date}
                </div>
              </div>

            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}
