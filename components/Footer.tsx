
import React from 'react';
import { Instagram, Youtube, Music, Music2, Apple, Cloud } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socials = [
    { icon: <Music2 size={20} />, href: "https://open.spotify.com/intl-it/artist/5wkrrI2WhHqfxw1tozdOYt?si=aSRGplY4TVi35YZD_97DZg&nd=1&dlsi=0810a64abd504be7", name: "Spotify" },
    { icon: <Apple size={20} />, href: "https://music.apple.com/it/artist/francesco-biondi/447030642", name: "Apple Music" },
    { icon: <Youtube size={20} />, href: "https://music.youtube.com/channel/UCvgS_73rQlPnkeHk30cU2GA", name: "YouTube Music" },
    { icon: <Music size={20} />, href: "https://www.amazon.it/music/player/artists/B009NCSDDC/francesco-biondi?marketplaceId=APJ6JRA9NG5V4&musicTerritory=IT&ref=dm_sh_z29xpSym9Ya5qOvAIgukYxqkD", name: "Amazon Music" },
    { icon: <Cloud size={20} />, href: "https://soundcloud.com/francescobiondi?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", name: "SoundCloud" },
    { icon: <Instagram size={20} />, href: "https://www.instagram.com/pinegroovemusic/?hl=it", name: "Instagram" },
  ];

  return (
    <footer className="py-12 px-6 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
        <div className="text-center md:text-left">
          <h3 className="font-cinzel text-xl font-bold tracking-widest text-white mb-2 uppercase">FRANCESCO BIONDI</h3>
          <p className="text-zinc-500 text-xs uppercase tracking-[0.2em]">© {currentYear} All Rights Reserved</p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {socials.map((social) => (
            <a 
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-amber-500 transition-colors"
              aria-label={social.name}
              title={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>

        <div className="text-zinc-500 text-[10px] uppercase tracking-widest">
          Designed for Excellence
        </div>
      </div>
    </footer>
  );
};

export default Footer;
