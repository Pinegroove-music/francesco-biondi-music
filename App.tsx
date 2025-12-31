
import React, { useState, useEffect } from 'react';
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
import PrivacyPolicy from './components/PrivacyPolicy';

const App: React.FC = () => {
  const [showPrivacy, setShowPrivacy] = useState(false);

  // Semplice listener per l'hash dell'URL
  useEffect(() => {
    const handleHashChange = () => {
      setShowPrivacy(window.location.hash === '#privacy');
      if (window.location.hash === '#privacy') {
        window.scrollTo(0, 0);
      }
    };

    // Controllo iniziale
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleBackToHome = () => {
    window.location.hash = '';
    setShowPrivacy(false);
  };

  if (showPrivacy) {
    return <PrivacyPolicy onBack={handleBackToHome} />;
  }

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
