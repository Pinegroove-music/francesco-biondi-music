
import { useEffect } from 'react';

declare global {
  interface Window {
    CookieConsent: any;
  }
}

const CookieConsentComponent = () => {
  useEffect(() => {
    if (window.CookieConsent) {
      window.CookieConsent.run({
        guiOptions: {
          consentModal: {
            layout: 'box', // Compact box layout instead of the large 'cloud'
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
                description: 'I use cookies to ensure the basic functionalities of the website and to improve your experience.',
                acceptAllBtn: 'I agree',
                acceptNecessaryBtn: 'I decline',
                showSettingsBtn: 'Settings',
                footer: '<a href="#privacy">Privacy Policy</a>'
              },
              settingsModal: {
                title: 'Cookie preferences',
                acceptAllBtn: 'Accept all',
                acceptNecessaryBtn: 'Reject all',
                saveSettBtn: 'Save settings',
                closeIconLabel: 'Close',
                serviceCounterLabel: 'Service|Services',
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
                  },
                  {
                    title: 'More information',
                    description: 'For any queries in relation to my policy on cookies, please <a class="cc-link" href="#contact">contact me</a>.'
                  }
                ]
              }
            }
          }
        }
      });
    }
  }, []);

  return null;
};

export default CookieConsentComponent;
