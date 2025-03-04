import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            ar: {
                translation: {
                    "welcome": "مرحبًا بك في OSYS!",
                    "about": "حول",
                    "contact": "اتصل بنا"
                }
            },
            en: {
                translation: {
                    "welcome": "Welcome to OSYS!",
                    "about": "About",
                    "contact": "Contact Us"
                }
            }
        },
        lng: "ar", // اللغة الافتراضية
        fallbackLng: "ar",
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
