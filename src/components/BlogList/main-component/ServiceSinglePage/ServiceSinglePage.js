import React, { Fragment, useState } from 'react';
import { useTranslation } from 'react-i18next'; // استيراد useTranslation
import Services from '../../api/service';
import { useParams } from 'react-router-dom';
import ModalVideo from 'react-modal-video';
import Header from '../../components/header/Header';
import PageTitle from '../../components/pagetitle/PageTitle';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Footer from '../../components/footer/Footer';
import CtaSection from '../../components/CtaSection/CtaSection';
import ProcessTechnology from '../../components/software-company-components/ProcessTechnology/ProcessTechnology';
import srImg from '../../images/services/service_details_image_1.webp';
import srImg2 from '../../images/services/service_details_image_2.webp';
import srImg3 from '../../images/services/service_details_image_3.webp';
import srImg4 from '../../images/services/service_details_image_4.webp';
import icon from '../../images/icons/icon_check_3.svg';

const ServiceSinglePage = (props) => {
    const { t } = useTranslation(); // استخدام useTranslation
    const { slug } = useParams();
    const ServiceDetails = Services.find(item => item.slug === slug);

    const [isOpen, setOpen] = useState(false);

    return (
        <Fragment>
            <Header />
            <main className="page_content service-single-page">
                <PageTitle pageTitle={ServiceDetails.title} pagesub={t('details.details')} pageTop={t('services.services')} />
                <section className="service_details_section section_space bg-light">
                    <div className="container">
                        <div className="details_item_image position-relative">
                            <img src={srImg} alt={t('service_details.image_alt')} />
                        </div>
                        <h2 className="details_item_title">{ServiceDetails.title}</h2>
                        <p>
                            {t('service_details.paragraph1')}
                        </p>
                        <p>
                            {t('service_details.paragraph2')}
                        </p>
                        <ProcessTechnology />
                        <h3 className="details_item_info_title">{t('service_details.outcome')}</h3>
                        <p className="mb-4">{t('service_details.outcome_paragraph')}</p>
                        <div className="row mb-4">
                            <div className="col-lg-6">
                                <ul className="icon_list unordered_list_block">
                                    <li>
                                        <span className="icon_list_icon">
                                            <img src={icon} alt="Check SVG Icon" />
                                        </span>
                                        <span className="icon_list_text">{t('service_details.scalability')}</span>
                                    </li>
                                    <li>
                                        <span className="icon_list_icon">
                                            <img src={icon} alt="Check SVG Icon" />
                                        </span>
                                        <span className="icon_list_text">{t('service_details.security')}</span>
                                    </li>
                                    <li>
                                        <span className="icon_list_icon">
                                            <img src={icon} alt="Check SVG Icon" />
                                        </span>
                                        <span className="icon_list_text">{t('service_details.performance')}</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <ul className="icon_list unordered_list_block">
                                    <li>
                                        <span className="icon_list_icon">
                                            <img src={icon} alt="Check SVG Icon" />
                                        </span>
                                        <span className="icon_list_text">{t('service_details.user_experience')}</span>
                                    </li>
                                    <li>
                                        <span className="icon_list_icon">
                                            <img src={icon} alt="Check SVG Icon" />
                                        </span>
                                        <span className="icon_list_text">{t('service_details.security_compliance')}</span>
                                    </li>
                                    <li>
                                        <span className="icon_list_icon">
                                            <img src={icon} alt="Check SVG Icon" />
                                        </span>
                                        <span className="icon_list_text">{t('service_details.training')}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="details_item_image m-0">
                                    <img src={srImg2} alt={t('service_details.image_alt')} />
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="details_item_image m-0">
                                    <img src={srImg3} alt={t('service_details.image_alt')} />
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="details_item_image m-0">
                                    <img src={srImg4} alt={t('service_details.image_alt')} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <CtaSection />
            <Footer />
            <Scrollbar />
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="7e90gBu4pas" onClose={() => setOpen(false)} />
        </Fragment>
    );
};

export default ServiceSinglePage;
