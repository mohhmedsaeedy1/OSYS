import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';  // استدعاء الترجمة
import { Link } from 'react-router-dom';
import about1 from '../../images/about/about_image_9.webp';
import about2 from '../../images/about/about_image_11.webp';
import about3 from '../../images/about/about_image_10.webp';
import ModalVideo from 'react-modal-video';
import '../../../node_modules/react-modal-video/scss/modal-video.scss';

// بيانات سياسة العرض
const Policy = [
    {
        title: 'richDocumentation',  // مفتاح الترجمة للعنوان
        subTitle: 'richDocumentationDescription',  // مفتاح الترجمة للوصف
        icon: about1,  // يجب أن تستبدل هذا بالصورة المناسبة
    },
    {
        title: 'fastestDelivery',
        subTitle: 'fastestDeliveryDescription',
        icon: about2,
    },
    {
        title: 'lifetimeSupport',
        subTitle: 'lifetimeSupportDescription',
        icon: about3,
    },
];

const About = (props) => {
    const { t } = useTranslation(); // استدعاء الترجمة

    const [isOpen, setOpen] = useState(false);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

    return (
        <React.Fragment>  {/* تغليف العناصر */}
            <section className="policy_section section_space">
                <div className="container">
                    <div className="heading_block">
                        <div className="row justify-content-lg-between">
                            <div className="col-lg-6">
                                <h2 className="heading_text mb-0">
                                    {t('celebratingFeaturesTitle')}
                                </h2>
                            </div>
                            <div className="col-lg-5">
                                <p className="heading_description mb-0">
                                    {t('celebratingFeaturesDescription')}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="row pricing_policy_wrap">
                        {Policy.map((policy, pitem) => (
                            <div className="col-lg-4" key={pitem}>
                                <div className="iconbox_block">
                                    <div className="iconbox_icon">
                                        <img src={policy.icon} alt={t(policy.title)} />
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

            <section className="about_section section_space">
                <div className="container">
                    <div className="row align-items-center justify-content-lg-between">
                        <div className="col-lg-6">
                            <div className="about_image_1">
                                <img src={about1} alt="OSYS - About" />
                                <img src={about2} data-parallax='{"y" : 80, "smoothness": 6}' alt="OSYS - About" />
                                <img src={about3} data-parallax='{"y" : -80, "smoothness": 6}' alt="OSYS - About" />
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="about_content">
                                <div className="heading_block">
                                    <div className="heading_focus_text">
                                        {t('about_title')}
                                    </div>
                                    <h2 className="heading_text">
                                        {t('about_title')}
                                    </h2>
                                    <p className="heading_description mb-0 justify-text">
                                        {t('about_description')}
                                    </p>
                                </div>
                                <ul className="icon_list unordered_list_block mb-5">
                                    <li>
                                        <span className="icon_list_icon">
                                            <i className="fa-solid fa-circle fa-fw"></i>
                                        </span>
                                        <span className="icon_list_text">
                                            {t('point_1')}
                                        </span>
                                    </li>
                                    <li>
                                        <span className="icon_list_icon">
                                            <i className="fa-solid fa-circle fa-fw"></i>
                                        </span>
                                        <span className="icon_list_text">
                                            {t('point_2')}
                                        </span>
                                    </li>
                                    <li>
                                        <span className="icon_list_icon">
                                            <i className="fa-solid fa-circle fa-fw"></i>
                                        </span>
                                        <span className="icon_list_text">
                                            {t('point_3')}
                                        </span>
                                    </li>
                                </ul>
                                <ul className="btns_group unordered_list p-0 justify-content-start">
                                    <li>
                                        <Link onClick={ClickHandler} to="/pricing" className="btn">
                                            <span className="btn_label" data-text={t('start_now')}>{t('start_now')}</span>
                                            <span className="btn_icon">
                                                <i className="fa-solid fa-arrow-up-right"></i>
                                            </span>
                                        </Link>
                                    </li>
                                    {/* <li>
                                        <button className="video_btn" onClick={() => setOpen(true)}>
                                            <span className="btn_icon">
                                                <i className="fa-solid fa-play"></i>
                                            </span>
                                            <span className="btn_label">{t('how_we_work')}</span>
                                        </button>
                                    </li> */}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="7e90gBu4pas" onClose={() => setOpen(false)} />
            </section>
        </React.Fragment>
    );
};

export default About;
