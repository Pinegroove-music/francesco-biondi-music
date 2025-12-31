
import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Youtube, Music, Music2, Apple, Cloud } from 'lucide-react';

const Hero: React.FC = () => {
  const socialLinks = [
    { icon: <Music2 size={18} />, href: "https://open.spotify.com/intl-it/artist/5wkrrI2WhHqfxw1tozdOYt?si=aSRGplY4TVi35YZD_97DZg&nd=1&dlsi=0810a64abd504be7", name: "Spotify" },
    { icon: <Apple size={18} />, href: "https://music.apple.com/it/artist/francesco-biondi/447030642", name: "Apple Music" },
    { icon: <Youtube size={18} />, href: "https://music.youtube.com/channel/UCvgS_73rQlPnkeHk30cU2GA", name: "YouTube Music" },
    { icon: <Music size={18} />, href: "https://www.amazon.it/music/player/artists/B009NCSDDC/francesco-biondi?marketplaceId=APJ6JRA9NG5V4&musicTerritory=IT&ref=dm_sh_z29xpSym9Ya5qOvAIgukYxqkD", name: "Amazon Music" },
    { icon: <Cloud size={18} />, href: "https://soundcloud.com/francescobiondi?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", name: "SoundCloud" },
    { icon: <Instagram size={18} />, href: "https://www.instagram.com/pinegroovemusic/?hl=it", name: "Instagram" },
  ];

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ 
          backgroundImage: "url('https://pub-704d512baed74c069032320c83ebe2f7.r2.dev/francesco-biondi-wallpaper.webp')",
          filter: "brightness(1.0)"
        }}
      />
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-zinc-950/80 z-10" />

      {/* Main Content */}
      <div className="relative z-20 text-center px-6">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-7xl font-cinzel font-bold tracking-[0.15em] mb-4 text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]"
        >
          FRANCESCO BIONDI
        </motion.h1>
        
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="h-px w-24 md:w-48 bg-amber-500 mx-auto mb-6" 
        />
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-sm md:text-lg uppercase tracking-[0.4em] text-white font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
        >
          Composer | Songwriter | Producer
        </motion.p>
      </div>

      {/* Social Links Bottom Left */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-10 left-6 md:left-12 z-20 flex items-center space-x-5"
      >
        {socialLinks.map((link) => (
          <a 
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-amber-500 transition-all duration-300 hover:scale-110"
            title={link.name}
          >
            {link.icon}
          </a>
        ))}
      </motion.div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce hidden md:block">
        <div className="w-[1px] h-12 bg-gradient-to-b from-amber-500 to-transparent mx-auto" />
      </div>
    </section>
  );
};

export default Hero;
