
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Credits: React.FC = () => {
  const [credits, setCredits] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const SUPABASE_URL = 'https://dmwssfpytvwvqshgqufb.supabase.co';
  const SUPABASE_KEY = 'sb_publishable_yS5dc2D0k-fXzTfpZ5ZK5Q_DQBpheo2';

  // Helper function to extract field values regardless of hyphen or underscore
  const getFieldValue = (obj: any, baseKey: string) => {
    return obj[baseKey] || obj[baseKey.replace('-', '_')] || '';
  };

  useEffect(() => {
    const fetchCredits = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${SUPABASE_URL}/rest/v1/film_credits?select=*`, {
          method: 'GET',
          headers: {
            'apikey': SUPABASE_KEY,
            'Authorization': `Bearer ${SUPABASE_KEY}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        });
        
        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status}`);
        }

        let data = await response.json();
        
        // Sort data by year descending (most recent first)
        data.sort((a: any, b: any) => {
          const yearA = parseInt(getFieldValue(a, 'film-year')) || 0;
          const yearB = parseInt(getFieldValue(b, 'film-year')) || 0;
          return yearB - yearA;
        });

        setCredits(data);
      } catch (err) {
        console.error('Error fetching film credits:', err);
        setError('Si è verificato un errore nel caricamento dei crediti.');
      } finally {
        setLoading(false);
      }
    };

    fetchCredits();
  }, []);

  // Drag to scroll logic
  const onMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const onMouseLeave = () => {
    setIsDragging(false);
  };

  const onMouseUp = () => {
    setIsDragging(false);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = 400;
    scrollContainerRef.current.scrollTo({
      left: scrollContainerRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount),
      behavior: 'smooth'
    });
  };

  return (
    <section id="credits" className="pt-24 pb-8 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-zinc-800 pb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-cinzel font-bold tracking-wide text-zinc-100 uppercase">Filmography & Credits</h2>
            <p className="text-zinc-500 mt-2 uppercase tracking-widest text-[10px]">Scroll to explore some of the movies where my music has been placed</p>
          </div>
          
          <div className="hidden md:flex space-x-4 mt-6 md:mt-0">
            <button 
              onClick={() => scroll('left')}
              className="p-2 border border-zinc-800 rounded-full hover:border-amber-500 hover:text-amber-500 transition-all"
              aria-label="Scroll Left"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-2 border border-zinc-800 rounded-full hover:border-amber-500 hover:text-amber-500 transition-all"
              aria-label="Scroll Right"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {loading ? (
          <div className="flex flex-col justify-center items-center py-20 space-y-4">
            <div className="w-8 h-8 border-2 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : error ? (
          <div className="text-center py-20 border border-dashed border-zinc-800">
            <p className="text-zinc-500 font-cinzel tracking-widest uppercase">{error}</p>
          </div>
        ) : credits.length === 0 ? (
          <div className="text-center py-20 border border-dashed border-zinc-800">
            <p className="text-zinc-500 font-cinzel tracking-widest uppercase">Nessun credito trovato.</p>
          </div>
        ) : (
          <>
            <div 
              ref={scrollContainerRef}
              onMouseDown={onMouseDown}
              onMouseLeave={onMouseLeave}
              onMouseUp={onMouseUp}
              onMouseMove={onMouseMove}
              className={`flex space-x-6 overflow-x-auto no-scrollbar pb-10 cursor-grab active:cursor-grabbing select-none`}
              style={{ scrollSnapType: 'x proximity' }}
            >
              {credits.map((credit, index) => {
                const poster = getFieldValue(credit, 'film-poster');
                const title = getFieldValue(credit, 'film-title');
                const year = getFieldValue(credit, 'film-year');

                return (
                  <div 
                    key={index} 
                    className="flex-none w-48 md:w-56 group scroll-snap-align-start"
                  >
                    <div className="relative overflow-hidden mb-4 shadow-2xl aspect-[2/3] bg-zinc-900 border border-zinc-800/50">
                      <img 
                        src={poster} 
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 pointer-events-none"
                        loading="lazy"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x600?text=Poster+Non+Disponibile';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <span className="text-amber-500 text-[10px] font-bold tracking-widest uppercase">Credits</span>
                      </div>
                    </div>
                    <h3 className="font-cinzel text-xs font-bold tracking-wider text-zinc-100 group-hover:text-amber-500 transition-colors line-clamp-2 uppercase">
                      {title}
                    </h3>
                    <p className="text-zinc-500 text-[9px] uppercase tracking-[0.2em] mt-1 font-semibold">
                      {year}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* IMDb Logo Link */}
            <div className="mt-12 flex flex-col items-center justify-center space-y-4 pt-8 border-t border-zinc-800/50">
              <p className="text-zinc-500 text-[10px] uppercase tracking-[0.3em] font-medium">Explore full filmography on</p>
              <a 
                href="https://www.imdb.com/it/name/nm10556240/?ref_=nv_sr_srsg_0_tt_0_nm_8_in_0_q_francesco%2520biondi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group transition-transform hover:scale-105"
              >
                <img 
                  src="https://pub-704d512baed74c069032320c83ebe2f7.r2.dev/film-credits/IMDB_Logo_2016.svg.png" 
                  alt="IMDb Profile" 
                  className="h-10 md:h-12 w-auto grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </a>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Credits;
