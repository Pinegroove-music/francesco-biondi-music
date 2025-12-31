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
      // Evitiamo la doppia inizializzazione controllando una classe di stato sulla root
      if (window.CookieConsent && !document.documentElement.classList.contains('cc--setup')) {
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
            default: 'en',
            translations: {
              en: {
                consentModal: {
                  title: 'Hello listener!',
                  description: 'I use cookies to ensure the basic functionalities of the website and to enhance your experience. You can choose to accept all or manage your preferences.',
                  acceptAllBtn: 'Accept all',
                  acceptNecessaryBtn: 'Reject all',
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
                      description: 'These cookies allow me to understand how visitors interact with the site and improve the content.',
                      linkedCategory: 'analytics'
                    }
                  ]
                }
              }
            }
          }
        });
        
        // Segniamo che il setup è avvenuto con successo
        document.documentElement.classList.add('cc--setup');
      }
    };

    if (window.CookieConsent) {
      initCookieConsent();
    } else {
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