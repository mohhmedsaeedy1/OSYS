import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
    .use(HttpApi) // تحميل الترجمة من ملفات خارجية
    .use(LanguageDetector) // اكتشاف لغة المتصفح
    .use(initReactI18next) // دمج i18n مع React
    .init({
        supportedLngs: ["ar"], // اللغات المدعومة
        fallbackLng: "ar", // اجعل العربية اللغة الافتراضية
        detection: {
            order: ["cookie", "localStorage", "navigator", "htmlTag"],
            caches: ["cookie", "localStorage"],
        },
        backend: {
            loadPath: "/locales/{{lng}}/translation.json", // مسار ملف الترجمة
        },
        interpolation: {
            escapeValue: false, //
