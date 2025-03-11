import React from 'react';
import PartnerSection from '../PartnerSection';
import CountUp from 'react-countup';
import sIcon1 from '../../images/icons/icon_head.svg';
import sIcon2 from '../../images/icons/icon_check.svg';
import sIcon3 from '../../images/icons/icon_like.svg';
import sIcon4 from '../../images/icons/icon_dart_board.svg';
import Bg from '../../images/shapes/bg_pattern_1.svg';
import fimg from '../../images/about/about_image_1.webp';
import { useTranslation } from 'react-i18next'; // استيراد الدالة لاستخدام الترجمة

const FunFact = () => {
    const { t } = useTranslation();

    const funFacts = [
        {
            title: '10',
            subTitle: t('years_of_experience'),
            symbol: '+',
            icon: sIcon1,
        },
        {
            title: '480',
            subTitle: t('success_stories'),
            symbol: '+',
            icon: sIcon2,
        },
        {
            title: '940',
            subTitle: t('companies_trust_us'),
            symbol: '+',
            icon: sIcon3,
        },

        {
            title: '100',
            subTitle: t('guaranteed_results'),
            symbol: '%',
            icon: sIcon4,
        },
    ];

    return (
        <section id="homeLogoSection" className="client_logo_section section_space" style={{ backgroundImage: `url(${Bg})` }}>
            <div className="container">
                {/* القسم الأول */}
                <div className="section_space pt-0">
                    <div className="heading_block text-center">
                        <div className="heading_focus_text mb-0">
                            <span className="badge bg-secondary text-white">{t('brands')}</span>
                            {t('workingWith')}
                        </div>
                    </div>
                    {/* قسم الشركاء الأول */}
                    <PartnerSection group="group1" />
                </div>
                {/* قسم الإحصائيات */}
                <div className="row funfact_wrapper">
                    <div className="col-lg-8">
                        <div className="row">
                            {funFacts.map((funfact, fitem) => (
                                <div className="col-md-6" key={fitem}>
                                    <div className="funfact_block">
                                        <div className="funfact_icon">
                                            <img src={funfact.icon} alt="OSYS - SVG Icon Head" />
                                        </div>
                                        <div className="funfact_content">
                                            <div className="counter_value">
                                                <span className="odometer" data-count="25">
                                                    <CountUp end={funfact.title} enableScrollSpy />
                                                </span>
                                                <span>{funfact.symbol}</span>
                                            </div>
                                            <h3 className="funfact_title mb-0">{funfact.subTitle}</h3>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* القسم الثاني */}
                    <div className="col-lg-4">
                        <div className="our_world_employees">
                            <div className="image_wrap">
                                <img src={fimg} alt="OSYS - Employees Group" />
                            </div>
                            <div className="content_wrap">
                                <h3 className="title_text mb-0">
                                    <b className="d-block">{t('weArePresent')}</b> {t('in3Countries')}
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section id="partnersSection" className="client_logo_section section_space" style={{ backgroundImage: `url(${Bg})` }}>
                <div className="section_space pt-0">
                    <div className="heading_block text-center">
                        <div className="heading_focus_text mb-0">
                            <span className="badge bg-secondary text-white">{t('partnerWithBest')}</span>
                            {t('trustedBy')}
                        </div>
                    </div>
                    {/* قسم الشركاء الثاني */}
                    <PartnerSection group="group2" />
                </div>
            </section>
        </section>
    );
};

// تأكد من تصدير الكود بعد تعريف جميع الوظائف
export default FunFact;
