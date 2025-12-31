
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socials = [
    { name: "Spotify", slug: "spotify", color: "1DB954", href: "https://open.spotify.com/intl-it/artist/5wkrrI2WhHqfxw1tozdOYt?si=aSRGplY4TVi35YZD_97DZg&nd=1&dlsi=0810a64abd504be7" },
    { name: "Apple Music", slug: "applemusic", color: "FA243C", href: "https://music.apple.com/it/artist/francesco-biondi/447030642" },
    { name: "YouTube Music", slug: "youtubemusic", color: "FF0000", href: "https://music.youtube.com/channel/UCvgS_73rQlPnkeHk30cU2GA" },
    { name: "SoundCloud", slug: "soundcloud", color: "FF3300", href: "https://soundcloud.com/francescobiondi?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
    { name: "Instagram", slug: "instagram", color: "E4405F", href: "https://www.instagram.com/pinegroovemusic/?hl=it" },
  ];

  return (
    <footer className="py-12 px-6 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
        <div className="text-center md:text-left">
          <h3 className="font-cinzel text-xl font-bold tracking-widest text-white mb-2 uppercase">FRANCESCO BIONDI</h3>
          <p className="text-zinc-500 text-xs uppercase tracking-[0.2em]">© {currentYear} All Rights Reserved</p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {socials.map((social) => (
            <a 
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-5 h-5 transition-transform duration-300"
              aria-label={social.name}
              title={social.name}
            >
              <img 
                src={`https://cdn.simpleicons.org/${social.slug}/white`} 
                alt={social.name}
                className="absolute inset-0 w-full h-full object-contain opacity-40 group-hover:opacity-0 transition-opacity duration-300"
              />
              <img 
                src={`https://cdn.simpleicons.org/${social.slug}/${social.color}`} 
                alt={social.name}
                className="absolute inset-0 w-full h-full object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
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
