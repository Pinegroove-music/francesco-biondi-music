
import React, { useRef, useEffect } from 'react';

const CinematicVideo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoUrl = "https://assets.pinegroove.net/BalkanGypsy.mp4";

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Autoplay blocked by browser, waiting for user interaction.", error);
      });
    }
  }, []);

  return (
    <section className="relative w-full bg-black border-y border-zinc-900 overflow-hidden">
      {/* 
        Video Container:
        Impostato su w-full e h-auto per mantenere il rapporto d'aspetto originale del file MP4.
      */}
      <div className="relative w-full">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-auto block opacity-90"
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Cinematic Overlays - sfumature sottili per integrare il video nel design dark */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 via-transparent to-zinc-950/40 pointer-events-none" />
        
        {/* Interface Elements */}
        <div className="absolute top-4 left-6 md:top-8 md:left-12 z-10">
          <div className="flex items-center space-x-4">
            <div className="h-px w-6 md:w-8 bg-amber-500" />
            <p className="text-[9px] md:text-[10px] uppercase tracking-[0.5em] text-zinc-100 font-bold drop-shadow-lg">
              Studio Session
            </p>
          </div>
        </div>
        
        {/* Indicator element without the text caption */}
        <div className="absolute bottom-4 right-6 md:bottom-8 md:right-12 z-10 flex items-center bg-black/60 backdrop-blur-md p-2 border border-zinc-800/50 rounded-full">
          <span className="relative flex h-1.5 w-1.5 md:h-2 md:w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 md:h-2 md:w-2 bg-amber-500"></span>
          </span>
        </div>
      </div>
    </section>
  );
};

export default CinematicVideo;
