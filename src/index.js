import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './main-component/App/App';
import reportWebVitals from './reportWebVitals';

// استيراد i18n لضبط الترجمة
import './i18n'; // يجب استيراد إعدادات i18n هنا لتفعيل الترجمة

// استيراد ملفات الأنماط
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './css/fontawesome.css';
import './css/themify-icons.css';
import './css/animate.css';
import './sass/style.scss';
import '../node_modules/react-modal-video/scss/modal-video.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// قياس الأداء في التطبيق
reportWebVitals();
