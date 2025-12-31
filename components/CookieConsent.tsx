
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
                description: 'I use cookies to ensure the basic functionalities of the website and to improve your experience.',
                acceptAllBtn: 'I agree',
                acceptNecessaryBtn: 'I decline',
                showSettingsBtn: 'Settings',
                // Corretto l'attributo in data-cc="show-preferences"
                footer: '<a href="#preferences" data-cc="show-preferences" class="cc-link">Privacy Policy</a>'
              },
              settingsModal: {
                title: 'Privacy & Cookie Policy',
                acceptAllBtn: 'Accept all',
                acceptNecessaryBtn: 'Reject all',
                saveSettBtn: 'Save settings',
                closeIconLabel: 'Close',
                serviceCounterLabel: 'Service|Services',
                sections: [
                  {
                    title: 'Privacy Policy',
                    description: 'Last updated: May 20, 2024'
                  },
                  {
                    title: '1. Overview',
                    description: 'This website serves as a professional portfolio. Your privacy is important to me, and I am committed to being transparent about how this site operates.'
                  },
                  {
                    title: '2. Data Collection',
                    description: '<strong>Analytics:</strong> I use Vercel Analytics to monitor traffic in a privacy-friendly way. This data is aggregated and does not identify you personally.<br><br><strong>System Logs:</strong> Like most websites, our host (Vercel) may log your IP address for security and diagnostic purposes.'
                  },
                  {
                    title: '3. Cookies and Third-Party Content',
                    description: 'This site integrates external services to showcase my work. These services may set cookies on your device:<br><br><strong>Audio/Video Players:</strong> Spotify, YouTube, Apple Music, SoundCloud, and Vimeo.<br><br><strong>Social Media:</strong> Instagram. These third parties collect data according to their own policies. By playing a track or a video, you may be consenting to their cookie usage.'
                  },
                  {
                    title: '4. Your Choices',
                    description: 'You can choose to "Reject All" non-essential cookies via the banner on this site. You can also manage or delete cookies directly through your browser settings.',
                    linkedCategory: 'analytics'
                  },
                  {
                    title: '5. Contact Information',
                    description: 'For any questions regarding this policy, please contact me at: <strong>info@pinegroove.net</strong>.'
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
