
import React, { useState, useEffect, useRef } from 'react';
import { ShieldCheck, Music, Globe } from 'lucide-react';

interface LicenseeLogo {
  id: string | number;
  logoUrl: string;
  url: string | null;
}

const Licensing: React.FC = () => {
  const [logos, setLogos] = useState<LicenseeLogo[]>([]);
  const [loading, setLoading] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const SUPABASE_URL = 'https://dmwssfpytvwvqshgqufb.supabase.co';
  const SUPABASE_KEY = 'sb_publishable_yS5dc2D0k-fXzTfpZ5ZK5Q_DQBpheo2';

  const getFieldValue = (obj: any, baseKey: string) => {
    return obj[baseKey] || obj[baseKey.replace('-', '_')] || '';
  };

  useEffect(() => {
    const fetchLogos = async () => {
      try {
        const response = await fetch(`${SUPABASE_URL}/rest/v1/licensing_logo?select=*`, {
          method: 'GET',
          headers: {
            'apikey': SUPABASE_KEY,
            'Authorization': `Bearer ${SUPABASE_KEY}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        });
        
        if (response.ok) {
          const data = await response.json();
          const formattedData = data.map((item: any, index: number) => ({
            id: item.id || index,
            logoUrl: getFieldValue(item, 'licensing-logo-url'),
            url: getFieldValue(item, 'licensing-url')
          }));
          setLogos(formattedData);
        }
      } catch (err) {
        console.error('Error fetching licensing logos:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchLogos();
  }, []);

  // Drag to scroll logic
  const onMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const onMouseLeave = () => setIsDragging(false);
  const onMouseUp = () => setIsDragging(false);

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section id="licensing" className="py-24 bg-zinc-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col space-y-20">
          {/* Information Section - Centered */}
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-cinzel font-bold mb-8 text-zinc-100 tracking-wide uppercase">
              Music Licensing
            </h2>
            <p className="text-zinc-400 text-lg md:text-xl mb-12 leading-relaxed">
              All original music and compositions by Francesco Biondi are protected by international copyright laws. Whether you are looking to sync music for a blockbuster film, an indie project, or a commercial campaign, we offer flexible licensing solutions tailored to your production needs.
            </p>

            <div className="grid sm:grid-cols-3 gap-12 pt-4">
              <div className="flex flex-col items-center space-y-4">
                <ShieldCheck className="text-amber-500" size={32} />
                <h4 className="font-cinzel text-amber-500 text-xs font-bold uppercase tracking-[0.2em]">Master Rights</h4>
                <p className="text-zinc-500 text-sm leading-relaxed max-w-[200px]">Full ownership of master recordings for seamless integration.</p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <Music className="text-amber-500" size={32} />
                <h4 className="font-cinzel text-amber-500 text-xs font-bold uppercase tracking-[0.2em]">Custom Scores</h4>
                <p className="text-zinc-500 text-sm leading-relaxed max-w-[200px]">Bespoke compositions tailored to your unique visuals.</p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <Globe className="text-amber-500" size={32} />
                <h4 className="font-cinzel text-amber-500 text-xs font-bold uppercase tracking-[0.2em]">Global Sync</h4>
                <p className="text-zinc-500 text-sm leading-relaxed max-w-[200px]">Worldwide clearance for all media platforms and territories.</p>
              </div>
            </div>
          </div>

          {/* Logo Carousel Section */}
          <div className="pt-16 border-t border-zinc-800/50">
            <h3 className="font-cinzel text-sm font-bold tracking-[0.5em] text-zinc-500 uppercase mb-16 text-center">
              Official Licensing Channels
            </h3>
            
            {loading ? (
              <div className="flex justify-center py-12">
                <div className="w-8 h-8 border-2 border-amber-500/30 border-t-amber-500 rounded-full animate-spin"></div>
              </div>
            ) : (
              <div className="relative">
                <div 
                  ref={scrollContainerRef}
                  onMouseDown={onMouseDown}
                  onMouseLeave={onMouseLeave}
                  onMouseUp={onMouseUp}
                  onMouseMove={onMouseMove}
                  className="flex items-center justify-center space-x-16 md:space-x-24 overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing px-4 pb-8"
                >
                  {logos.map((logo) => {
                    const content = (
                      <img 
                        src={logo.logoUrl} 
                        alt="Licensing Platform" 
                        className="h-16 md:h-24 w-auto min-w-[120px] object-contain opacity-80 hover:opacity-100 transition-all duration-500 pointer-events-none select-none drop-shadow-lg"
                      />
                    );

                    return (
                      <div key={logo.id} className="flex-none transition-transform hover:scale-110">
                        {logo.url ? (
                          <a 
                            href={logo.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="block pointer-events-auto"
                          >
                            {content}
                          </a>
                        ) : (
                          content
                        )}
                      </div>
                    );
                  })}
                </div>
                
                {/* Subtle Edge Fades for scroll indicators */}
                <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-zinc-900 to-transparent pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-zinc-900 to-transparent pointer-events-none" />
              </div>
            )}
            
            {!loading && logos.length === 0 && (
              <p className="text-center text-zinc-600 text-xs uppercase tracking-widest italic">Direct licensing available upon request</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Licensing;
