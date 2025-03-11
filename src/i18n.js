import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from './locales/en/translation.json';
import arTranslations from './locales/ar/translation.json';

// ✅ تغيير اتجاه الصفحة تلقائيًا حسب اللغة
const changeDocumentDirection = (lng) => {
    document.documentElement.lang = lng;
    document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
    document.body.style.direction = lng === 'ar' ? 'rtl' : 'ltr';
    document.body.style.textAlign = lng === 'ar' ? 'right' : 'left';
};

i18n.use(initReactI18next).init({
    resources: {
        en: { translation: enTranslations },
        ar: { translation: arTranslations },
    },
    lng: localStorage.getItem('i18nextLng') || 'en', // تحميل اللغة المخزنة أو الافتراضية
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
}, () => {
    changeDocumentDirection(i18n.language);
});

// ✅ عند تغيير اللغة، قم بتغيير الاتجاه تلقائيًا
i18n.on('languageChanged', (lng) => {
    localStorage.setItem('i18nextLng', lng);
    changeDocumentDirection(lng);
});

export default i18n;
