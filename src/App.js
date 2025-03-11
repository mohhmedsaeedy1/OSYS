import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import logo from './logo.svg';
import './App.css';
import './i18n'; // استدعاء إعدادات i18n

function App() {
    const { t, i18n } = useTranslation();

    const toggleLanguage = () => {
        const newLang = i18n.language === "ar" ? "en" : "ar";
        i18n.changeLanguage(newLang);
    };

    return (
        <div className="App" style={{ direction: i18n.language === 'ar' ? "rtl" : "ltr", textAlign: i18n.language === 'ar' ? "right" : "left" }}>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>{t('welcome')}</p>
                <p dangerouslySetInnerHTML={{ __html: t('edit') }}></p>
                <button onClick={toggleLanguage}>
                    {i18n.language === "ar" ? "Switch to English" : "التبديل إلى العربية"}
                </button>
            </header>
        </div>
    );
}

export default App;
