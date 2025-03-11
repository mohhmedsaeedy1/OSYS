import React from 'react';
import sIcon1 from '../../images/icons/icon_user_check.svg';
import sIcon2 from '../../images/icons/icon_headphone.svg';
import sIcon3 from '../../images/icons/icon_dollar.svg';
import { useTranslation } from 'react-i18next'; // استيراد الترجمة

const Policy = [
    {
        title: 'software_solutions', // مفتاح الترجمة
        subTitle: 'osys_software_solutions', // مفتاح الترجمة
        icon: sIcon1,
    },
    {
        title: 'fast_support_services', // مفتاح الترجمة
        subTitle: 'customer_support_services', // مفتاح الترجمة
        icon: sIcon2,
    },
    {
        title: 'pay_as_you_go_pricing', // مفتاح الترجمة
        subTitle: 'pricing_plans', // مفتاح الترجمة
        icon: sIcon3,
    },
]

const PolicySection = (props) => {
    const { t } = useTranslation(); // استخدام الترجمة هنا

    return (
        <section className="policy_section">
            <div className="container">
                <div className="row">
                    {Policy.map((policy, pitem) => (
                        <div className="col-lg-4" key={pitem}>
                            <div className="iconbox_block layout_icon_left">
                                <div className="iconbox_icon bg-secondary-subtle">
                                    <img src={policy.icon} alt={t(policy.title + "_alt")} />
                                </div>
                                <div className="iconbox_content">
                                    <h3 className="iconbox_title">{t(policy.title)}</h3>
                                    <p className="mb-0">
                                        {t(policy.subTitle)}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default PolicySection;
