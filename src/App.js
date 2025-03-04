import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import logo from './logo.svg';
import './App.css';
import './i18n'; // استدعاء إعدادات i18n

function App() {
    const { t, i18n } = useTranslation();

    // فرض اللغة العربية عند تحميل الصفحة
    useEffect(() => {
        if (i18n.language !== 'ar') {
            i18n.changeLanguage('ar');
        }
    }, [i18n]);

    return (
        <div className="App" style={{ direction: "rtl", textAlign: "right" }}>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>{t('welcome')}</p>
                <p dangerouslySetInnerHTML={{ __html: t('edit') }}></p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {t('learn')}
                </a>
            </header>
        </div>
    );
}

export default App;
