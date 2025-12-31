
import React from 'react';

const Bio: React.FC = () => {
  return (
    <section id="bio" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-cinzel font-bold mb-4 text-amber-500 tracking-wide uppercase leading-tight">
            Enhancing Visuals with the Power of Music
          </h2>
          <div className="h-1 w-20 bg-amber-500/30 mb-8" />
          
          <div className="space-y-6 text-zinc-400 leading-relaxed text-lg">
            <p>
              Francesco Biondi is a highly accomplished composer, songwriter, and producer based in Rome, Italy. With almost 15 years of experience creating music for a wide range of projects, including films, TV shows, commercials, video games, and documentaries, Francesco has built a reputation for delivering exceptional compositions.
            </p>
            <p>
              Francesco's music has been credited in several movies, including "A Holiday Spectacular" (2022), "Guerra de Likes" (2021), and "The Christmas Ring" (2020), and has been chosen by well-known brands such as Qatar Airways, Ducati, Samsung, and Fujitsu for their commercials.
            </p>
            <p>
              Francesco Biondi's musical expertise encompasses a broad spectrum of styles, including jazz, world music, ambient soundscapes, cinematic scores, and orchestral pieces. His ability to seamlessly move between various genres highlights his versatility as a composer, and allows him to create unique and memorable pieces for a diverse range of projects. Whether he's composing for a big budget production or a personal project, Francesco's music consistently stands out for its quality, originality, and impact.
            </p>
          </div>
        </div>
        <div className="relative group">
          <div className="absolute -inset-4 border border-amber-500/20 group-hover:border-amber-500/40 transition-colors duration-500" />
          <img 
            src="https://pub-2da555791ab446dd9afa8c2352f4f9ea.r2.dev/media/media_Francesco-Biondi-profilo.webp" 
            alt="Francesco Biondi Portrait" 
            className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700 object-cover shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Bio;
