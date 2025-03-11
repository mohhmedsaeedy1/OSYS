import React from 'react';
import { useTranslation } from 'react-i18next'; // استيراد الترجمة
import wImg from '../../images/about/about_image_5.webp';
import sIcon1 from '../../images/icons/icon_check_2.svg';
import sIcon2 from '../../images/icons/icon_leaf.svg';
import sIcon3 from '../../images/icons/icon_box.svg';
import sIcon4 from '../../images/icons/icon_receipt_add.svg';
import sIcon5 from '../../images/icons/icon_monitor.svg';
import sIcon6 from '../../images/icons/icon_microscope.svg';

const Policy = [
    {
        title: 'quality_first', // مفتاح الترجمة
        icon: sIcon1,
    },
    {
        title: 'flexible_collaboration', // مفتاح الترجمة
        icon: sIcon2,
    },
    {
        title: 'on_time_delivery', // مفتاح الترجمة
        icon: sIcon3,
    },
    {
        title: 'clear_and_transparent_costs', // مفتاح الترجمة
        icon: sIcon4,
    },
    {
        title: 'qualified_developers', // مفتاح الترجمة
        icon: sIcon5,
    },
    {
        title: 'rapid_expansion', // مفتاح الترجمة
        icon: sIcon6,
    },
];

const WhyUs = (props) => {
    const { t } = useTranslation(); // استخدام الترجمة

    return (
        <section className="service_section section_space bg-light">
            <div className="container">
                <div className="row align-items-center justify-content-lg-between">
                    <div className="col-lg-6">
                        <div className="image_wrap">
                            <img src={wImg} alt={t('whyUsImageAlt')} /> {/* مفتاح الترجمة للصورة */}
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="ps-lg-5">
                            <div className="heading_block">
                                <div className="heading_focus_text">
                                    <span className="badge bg-secondary text-white">{t('whyUsBadge')}</span> {/* ترجمة للـ Badge */}
                                    {t('whyUsSubtitle')} {/* مفتاح الترجمة للنص تحت الـ Badge */}
                                </div>
                                <h2 className="heading_text mb-0">
                                    {t('whyOurServicesAreBetter')} {/* ترجمة العنوان */}
                                </h2>
                            </div>
                            <ul className="service_facilities_group unordered_list">
                                {Policy.map((policy, pitem) => (
                                    <li key={pitem}>
                                        <strong className="iconbox_block layout_icon_left">
                                            <span className="iconbox_icon">
                                                <img src={policy.icon} alt={t('policyIconAlt')} />
                                            </span>
                                            <span className="iconbox_content">
                                                <strong className="iconbox_title mb-0">{t(policy.title)}</strong> {/* الترجمة لجميع النصوص */}
                                            </span>
                                        </strong>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WhyUs;
