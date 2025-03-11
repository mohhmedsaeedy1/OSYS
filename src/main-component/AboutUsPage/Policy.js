import React from 'react';
import { useTranslation } from 'react-i18next';  // استيراد الترجمة
import sIcon1 from '../../images/icons/icon_clock.svg';
import sIcon2 from '../../images/icons/icon_dart_board_2.svg';
import sIcon3 from '../../images/icons/icon_target.svg';

const Policy = [
    {
        title: 'history',  // مفتاح الترجمة
        subTitle: 'history_description',  // مفتاح الترجمة
        icon: sIcon1,
    },
    {
        title: 'mission',  // مفتاح الترجمة
        subTitle: 'mission_description',  // مفتاح الترجمة
        icon: sIcon2,
    },
    {
        title: 'vision',  // مفتاح الترجمة
        subTitle: 'vision_description',  // مفتاح الترجمة
        icon: sIcon3,
    },
];

const PolicySection = (props) => {
    const { t } = useTranslation();  // استخدام الترجمة

    return (
        <section className="policy_section bg-light">
            <div className="container">
                <div className="row">
                    {Policy.map((policy, pitem) => (
                        <div className="col-lg-4" key={pitem}>
                            <div className="iconbox_block">
                                <div className="iconbox_icon">
                                    <img src={policy.icon} alt="Icon" />
                                </div>
                                <div className="iconbox_content">
                                    <h3 className="iconbox_title">{t(policy.title)}</h3>  {/* الترجمة هنا */}
                                    <p className="mb-0">
                                        {t(policy.subTitle)}  {/* الترجمة هنا */}
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
