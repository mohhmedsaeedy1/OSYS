import React from 'react';
import Bg from '../../images/shapes/bg_pattern_4.svg';
import { useTranslation } from 'react-i18next'; // استيراد الترجمة

const PageTitle = (props) => {
    const { t } = useTranslation(); // استخدام الترجمة

    return (
        <section className="page_banner_section text-center" style={{ backgroundImage: `url(${Bg})` }}>
            <div className="container">
                <div className="heading_focus_text text-white">
                    {t(props.pageTop)} {/* ترجمة النص */}
                    <span className="badge bg-secondary">{t(props.pagesub)}</span> {/* ترجمة النص */}
                </div>
                <h1 className="page_title mb-0 text-white">{t(props.pageTitle)}</h1> {/* ترجمة النص */}
            </div>
        </section>
    )
}

export default PageTitle;
