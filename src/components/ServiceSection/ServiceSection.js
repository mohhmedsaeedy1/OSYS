import React from 'react';
import Services from '../../api/service';
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next'; // استيراد الترجمة

const ServiceSection = (props) => {
    const { t } = useTranslation(); // استخدام الترجمة
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="service_section section_space xb-hidden pb-0">
            <div className="container">
                <div className="heading_block text-center">
                    <div className="heading_focus_text">
                        <span className="badge bg-secondary text-white">{t('ourSpecialties')}</span> {/* ترجمة العنوان */}
                    </div>
                    <h2 className="heading_text mb-0">
                        {t('premiumServices')} {/* ترجمة العنوان */}
                    </h2>
                </div>

                <div className="row">
                    {Services.slice(0, 5).map((service, srv) => (
                        <div className={`${service.col} mt-30`} key={srv}>
                            {service.title ?
                                <div className="service_block">
                                    <div className="service_image">
                                        <img src={service.sImg} alt={t('serviceImageAlt')} /> {/* ترجمة النص البديل للصورة */}
                                    </div>
                                    <div className="service_content">
                                        <h3 className="service_title">
                                            <Link onClick={ClickHandler} to={`/service-single/${service.slug}`}>{service.title}</Link>
                                        </h3>

                                        <div className="links_wrapper">
                                            <ul className="category_btns_group unordered_list">
                                                <li><Link onClick={ClickHandler} to={`/service-single/${service.slug}`}>{service.thumb1}</Link></li>
                                                <li><Link onClick={ClickHandler} to={`/service-single/${service.slug}`}>{service.thumb2}</Link></li>
                                            </ul>
                                            <Link onClick={ClickHandler} to={`/service-single/${service.slug}`} className="icon_block">
                                                <i className="fa-regular fa-arrow-up-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                : ''}
                        </div>
                    ))}
                </div>

                {/*<div className="btns_group pb-0">
                    <Link onClick={ClickHandler} className="btn btn-outline-light" to="/service">
                        <span className="btn_label" data-text="More Services">More Services</span>
                        <span className="btn_icon">
                            <i className="fa-solid fa-arrow-up-right"></i>
                        </span>
                    </Link>
                </div>*/}
            </div>
        </section>
    );
}

export default ServiceSection;
