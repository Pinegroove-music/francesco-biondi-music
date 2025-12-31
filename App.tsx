
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Bio from './components/Bio';
import ComposerReel from './components/ComposerReel';
import Credits from './components/Credits';
import Quote from './components/Quote';
import CinematicVideo from './components/CinematicVideo';
import SpotifyPlaylist from './components/SpotifyPlaylist';
import Licensing from './components/Licensing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CookieConsentComponent from './components/CookieConsent';

const App: React.FC = () => {
  return (
    <div className="bg-zinc-950 text-zinc-100 min-h-screen selection:bg-amber-500/30 selection:text-amber-200">
      <CookieConsentComponent />
      <Navbar />
      <main>
        <Hero />
        <Bio />
        <ComposerReel />
        <Credits />
        <Quote />
        <CinematicVideo />
        <SpotifyPlaylist />
        <Licensing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;