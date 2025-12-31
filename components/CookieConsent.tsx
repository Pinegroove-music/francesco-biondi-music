import { useEffect } from 'react';

declare global {
  interface Window {
    CookieConsent: any;
  }
}

const CookieConsentComponent = () => {
  useEffect(() => {
    let interval: any;
    
    const initCookieConsent = () => {
      if (window.CookieConsent) {
        // Interrompiamo il polling se la libreria è pronta
        if (interval) clearInterval(interval);

        window.CookieConsent.run({
          guiOptions: {
            consentModal: {
              layout: 'box',
              position: 'bottom right',
              equalWeightButtons: true,
              flipButtons: false
            },
            settingsModal: {
              layout: 'box',
              position: 'right',
              equalWeightButtons: true,
              flipButtons: false
            }
          },
          categories: {
            necessary: {
              readOnly: true
            },
            analytics: {}
          },
          language: {
            default: 'it',
            autoDetect: 'browser',
            translations: {
              it: {
                consentModal: {
                  title: 'Ciao ascoltatore!',
                  description: 'Utilizzo i cookie per garantire le funzionalità di base del sito e migliorare la tua esperienza di navigazione.',
                  acceptAllBtn: 'Accetto',
                  acceptNecessaryBtn: 'Rifiuto',
                  showSettingsBtn: 'Impostazioni',
                  footer: '<a href="#privacy" class="cc-link">Privacy Policy</a>'
                },
                settingsModal: {
                  title: 'Preferenze Cookie',
                  acceptAllBtn: 'Accetta tutti',
                  acceptNecessaryBtn: 'Rifiuta tutti',
                  saveSettBtn: 'Salva impostazioni',
                  closeIconLabel: 'Chiudi',
                  sections: [
                    {
                      title: 'Utilizzo dei cookie',
                      description: 'Utilizzo i cookie per garantire le funzionalità di base del sito e migliorare la tua esperienza online.'
                    },
                    {
                      title: 'Cookie strettamente necessari',
                      description: 'Questi cookie sono essenziali per il corretto funzionamento del sito.',
                      linkedCategory: 'necessary'
                    },
                    {
                      title: 'Cookie di performance e analisi',
                      description: 'Questi cookie mi permettono di capire come i visitatori interagiscono con il sito.',
                      linkedCategory: 'analytics'
                    }
                  ]
                }
              },
              en: {
                consentModal: {
                  title: 'Hello listener!',
                  description: 'I use cookies to ensure the basic functionalities of the website and to improve your experience.',
                  acceptAllBtn: 'I agree',
                  acceptNecessaryBtn: 'I decline',
                  showSettingsBtn: 'Settings',
                  footer: '<a href="#privacy" class="cc-link">Privacy Policy</a>'
                },
                settingsModal: {
                  title: 'Cookie Preferences',
                  acceptAllBtn: 'Accept all',
                  acceptNecessaryBtn: 'Reject all',
                  saveSettBtn: 'Save settings',
                  closeIconLabel: 'Close',
                  sections: [
                    {
                      title: 'Cookie usage',
                      description: 'I use cookies to ensure the basic functionalities of the website and to enhance your online experience.'
                    },
                    {
                      title: 'Strictly necessary cookies',
                      description: 'These cookies are essential for the proper functioning of the website.',
                      linkedCategory: 'necessary'
                    },
                    {
                      title: 'Performance and Analytics cookies',
                      description: 'These cookies allow me to understand how visitors interact with the site.',
                      linkedCategory: 'analytics'
                    }
                  ]
                }
              }
            }
          }
        });
      }
    };

    // Proviamo subito
    initCookieConsent();

    // Se non è pronto, controlliamo ogni 100ms per un massimo di 5 secondi
    if (!window.CookieConsent) {
      let attempts = 0;
      interval = setInterval(() => {
        attempts++;
        if (window.CookieConsent || attempts > 50) {
          initCookieConsent();
          clearInterval(interval);
        }
      }, 100);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, []);

  return null;
};

export default CookieConsentComponent;