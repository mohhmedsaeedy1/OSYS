import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../src/main-component/App/App';
import reportWebVitals from './reportWebVitals';

// استيراد ملفات الأنماط
import '../node_modules/react-modal-video/scss/modal-video.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './css/fontawesome.css';
import './css/themify-icons.css';
import './css/animate.css';
import './sass/style.scss';

// استيراد i18n لضبط الترجمة
import './i18n';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// قياس الأداء في التطبيق
reportWebVitals();
