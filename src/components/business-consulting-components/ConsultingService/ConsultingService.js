import React from 'react';
import { useTranslation } from 'react-i18next'; // استدعاء الترجمة
import Services from '../../../api/service'
import { Link } from "react-router-dom";
import Bg from '../../../images/backgrounds/bg_image_3.webp'


const ConsultingService = (props) => {
    const { t } = useTranslation(); // استدعاء الترجمة

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="business_consulting_service_section section_space" style={{ backgroundImage: `url(${Bg})` }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-7">
                        <div className="heading_block text-center">
                            <h2 className="heading_text">
                                {t('service_title')}
                            </h2>
                            <p className="heading_description mb-0 text-dark">
                                {t('service_description')}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="business_consulting_services row">
                    {Services.slice(11, 17).map((service, srv) => (
                        <div className="col-lg-4" key={srv}>
                            <div className="iconbox_block">
                                <div className="iconbox_icon">
                                    <img src={service.sImg} alt="OSYS - Service icon" />
                                </div>
                                <div className="iconbox_content">
                                    <h3 className="iconbox_title">
                                        <Link onClick={ClickHandler} to={`/service-single/${service.slug}`}>
                                            {service.title}
                                        </Link>
                                    </h3>
                                    <p className="mb-0">
                                        {t('service_card_description')}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="btns_group pb-0">
                    <Link onClick={ClickHandler} className="creative_btn" to="/service">
                        <span className="btn_label bg-primary">{t('start_now')}</span>
                        <span className="btn_icon">
                            <i className="bg-primary fa-solid fa-arrow-up-right"></i>
                            <i className="bg-primary fa-solid fa-arrow-up-right"></i>
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default ConsultingService;
