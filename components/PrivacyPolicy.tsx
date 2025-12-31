
import React from 'react';

interface PrivacyPolicyProps {
  onBack: () => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-300 font-inter selection:bg-amber-500/30">
      {/* Navbar Minimal */}
      <nav className="py-8 px-6 border-b border-zinc-900 bg-zinc-950/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <button 
            onClick={onBack}
            className="font-cinzel text-xl font-bold tracking-[0.2em] text-amber-500 uppercase hover:opacity-80 transition-opacity"
          >
            Francesco Biondi
          </button>
          <button 
            onClick={onBack}
            className="text-xs uppercase tracking-widest text-zinc-400 hover:text-white transition-colors flex items-center gap-2"
          >
            <span>&larr;</span> Back to Home
          </button>
        </div>
      </nav>

      <main className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-cinzel text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Privacy Policy</h1>
          <p className="text-zinc-500 text-sm mb-12 uppercase tracking-widest">Last updated: May 24, 2024</p>

          <div className="space-y-12 leading-relaxed">
            <section>
              <h2 className="font-cinzel text-xl text-amber-500 mb-4 uppercase tracking-wider">1. Overview</h2>
              <p>This website serves as a professional portfolio. Your privacy is important to me, and I am committed to being transparent about how this site operates.</p>
            </section>

            <section>
              <h2 className="font-cinzel text-xl text-amber-500 mb-4 uppercase tracking-wider">2. Data Collection</h2>
              <div className="space-y-4">
                <p><strong>Analytics:</strong> I use Vercel Analytics to monitor traffic in a privacy-friendly way. This data is aggregated and does not identify you personally.</p>
                <p><strong>System Logs:</strong> Like most websites, our host (Vercel) may log your IP address for security and diagnostic purposes.</p>
              </div>
            </section>

            <section>
              <h2 className="font-cinzel text-xl text-amber-500 mb-4 uppercase tracking-wider">3. Cookies and Third-Party Content</h2>
              <p className="mb-4">This site integrates external services to showcase my work. These services may set cookies on your device:</p>
              <ul className="list-disc list-inside space-y-2 text-zinc-400 ml-2">
                <li>Audio/Video Players: Spotify, YouTube, Apple Music, SoundCloud, and Vimeo.</li>
                <li>Social Media: Instagram.</li>
              </ul>
              <p className="mt-4 italic">These third parties collect data according to their own policies. By playing a track or a video, you may be consenting to their cookie usage.</p>
            </section>

            <section>
              <h2 className="font-cinzel text-xl text-amber-500 mb-4 uppercase tracking-wider">4. Your Choices</h2>
              <p>You can choose to "Reject All" non-essential cookies via the banner on this site. You can also manage or delete cookies directly through your browser settings.</p>
            </section>

            <section>
              <h2 className="font-cinzel text-xl text-amber-500 mb-4 uppercase tracking-wider">5. Contact Information</h2>
              <p>For any questions regarding this policy, please contact me at: <a href="mailto:info@pinegroove.net" className="text-amber-500 hover:underline">info@pinegroove.net</a>.</p>
            </section>
          </div>

          <div className="mt-20 pt-8 border-t border-zinc-900">
             <button 
              onClick={onBack}
              className="inline-block bg-amber-500 text-zinc-950 px-8 py-3 font-bold uppercase tracking-widest hover:bg-amber-400 transition-colors"
            >
              Return to Portfolio
            </button>
          </div>
        </div>
      </main>

      <footer className="py-12 border-t border-zinc-900 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-6 text-center text-zinc-600 text-[10px] uppercase tracking-[0.3em]">
          © 2024 Francesco Biondi - All Rights Reserved
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
