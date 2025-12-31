
import React from 'react';

const ComposerReel: React.FC = () => {
  return (
    <section id="reel" className="py-24 bg-zinc-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-cinzel font-bold mb-4 tracking-wider uppercase text-zinc-100">Composer Reel</h2>
          <div className="h-1 w-20 bg-amber-500/30 mx-auto mb-4" />
          <p className="text-zinc-500 uppercase tracking-widest text-sm">Portfolio & Selected Highlights</p>
        </div>

        {/* Video Embed Container - Removed ring and added solid background */}
        <div className="aspect-video w-full max-w-5xl mx-auto relative shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-black overflow-hidden border border-zinc-800/30">
          <iframe 
            src="https://player.vimeo.com/video/794432362?badge=0&autopause=0&player_id=0&app_id=58479" 
            className="absolute top-0 left-0 w-full h-full border-0"
            style={{ border: 'none' }}
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write" 
            title="Francesco Biondi - Composer Reel"
          ></iframe>
        </div>

        {/* Thematic Highlights Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-5xl mx-auto">
          <div className="bg-zinc-950/40 p-8 border border-zinc-800/50 hover:border-amber-500/40 transition-all duration-500 group relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="font-cinzel text-lg mb-3 text-zinc-100 group-hover:text-amber-500 transition-colors">Cinematic Scores</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">Grand orchestral arrangements and atmospheric themes designed for big-screen storytelling.</p>
            </div>
            <div className="absolute bottom-0 left-0 h-0.5 bg-amber-500 w-0 group-hover:w-full transition-all duration-700" />
          </div>
          
          <div className="bg-zinc-950/40 p-8 border border-zinc-800/50 hover:border-amber-500/40 transition-all duration-500 group relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="font-cinzel text-lg mb-3 text-zinc-100 group-hover:text-amber-500 transition-colors">Modern Production</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">Versatile contemporary sounds for high-profile commercials, including work for Qatar Airways and Ducati.</p>
            </div>
            <div className="absolute bottom-0 left-0 h-0.5 bg-amber-500 w-0 group-hover:w-full transition-all duration-700" />
          </div>

          <div className="bg-zinc-950/40 p-8 border border-zinc-800/50 hover:border-amber-500/40 transition-all duration-500 group relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="font-cinzel text-lg mb-3 text-zinc-100 group-hover:text-amber-500 transition-colors">Bespoke Soundscapes</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">Unique sonic signatures ranging from intimate jazz to immersive ambient textures for documentaries.</p>
            </div>
            <div className="absolute bottom-0 left-0 h-0.5 bg-amber-500 w-0 group-hover:w-full transition-all duration-700" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComposerReel;
