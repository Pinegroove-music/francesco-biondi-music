
import React from 'react';
import { motion } from 'framer-motion';

const SpotifyPlaylist: React.FC = () => {
  return (
    <section id="discography" className="py-24 bg-zinc-950 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-cinzel font-bold mb-4 tracking-wider uppercase text-zinc-100">Selected Works</h2>
            <div className="h-1 w-20 bg-amber-500/30 mx-auto mb-4" />
            <p className="text-zinc-500 uppercase tracking-widest text-sm">Listen to the latest productions on Spotify</p>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl border border-zinc-800/50 bg-zinc-900"
        >
          <iframe 
            style={{ borderRadius: '12px' }} 
            src="https://open.spotify.com/embed/playlist/0eKCTLGHvMG6SLA4FqgSlY?utm_source=generator&theme=0" 
            width="100%" 
            height="380" 
            frameBorder="0" 
            allowFullScreen={true} 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy"
            title="Francesco Biondi - Selected Works Spotify Playlist"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};

export default SpotifyPlaylist;
