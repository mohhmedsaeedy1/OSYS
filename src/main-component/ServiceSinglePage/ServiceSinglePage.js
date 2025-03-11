import React, { Fragment, useState } from 'react';
import { useParams } from 'react-router-dom'; // استيراد useParams
import Services from '../../api/service'; // استيراد بيانات الخدمات
import ModalVideo from 'react-modal-video'; // استيراد مكون ModalVideo
import Header from '../../components/header/Header';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import CtaSection from '../../components/CtaSection/CtaSection';
import ProcessTechnology from '../../components/software-company-components/ProcessTechnology/ProcessTechnology';
import srImg from '../../images/services/service_details_image_1.webp'
import srImg2 from '../../images/services/service_details_image_2.webp'
import srImg3 from '../../images/services/service_details_image_3.webp'
import srImg4 from '../../images/services/service_details_image_4.webp'
import icon from '../../images/icons/icon_check_3.svg'
import { useTranslation } from 'react-i18next'; // إضافة استيراد useTranslation

const ServiceSinglePage = (props) => {
    const { slug } = useParams(); // استخراج قيمة slug من المعاملات
    const ServiceDetails = Services.find(item => item.slug === slug); // البحث عن الخدمة باستخدام slug
    const [isOpen, setOpen] = useState(false); // إدارة حالة فتح الفيديو
    const { t } = useTranslation(); // استخدام الترجمة

    return (
        <Fragment>
            <Header />
            <main className="page_content service-single-page">
                <PageTitle pageTitle={ServiceDetails.title} pagesub={t('more_of_our_services')} pageTop={''} />
                <section className="service_details_section section_space bg-light">
                    <div className="container">
                        <div className="details_item_image position-relative">
                            <img src={srImg} alt={t('service_image_alt')} />
                        </div>
                         {/*<h2 className="details_item_title">{ServiceDetails.title}</h2>*/}

                        <ProcessTechnology />

                        <h3 className="details_item_info_title">{t('service_results')}</h3>
                        <div className="row mb-4">
                            <div className="col-lg-6">
                                <ul className="icon_list unordered_list_block">
                                    <li>
                                        <span className="icon_list_icon">
                                            <img src={icon} alt="رمز التحقق" />
                                        </span>
                                        <span className="icon_list_text">{t('scalability_flexibility')}</span>
                                    </li>
                                    <li>
                                        <span className="icon_list_icon">
                                            <img src={icon} alt="رمز التحقق" />
                                        </span>
                                        <span className="icon_list_text">{t('security_compliance')}</span>
                                    </li>
                                    <li>
                                        <span className="icon_list_icon">
                                            <img src={icon} alt="رمز التحقق" />
                                        </span>
                                        <span className="icon_list_text">{t('performance_optimization')}</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <ul className="icon_list unordered_list_block">
                                    <li>
                                        <span className="icon_list_icon">
                                            <img src={icon} alt="رمز التحقق" />
                                        </span>
                                        <span className="icon_list_text">{t('user_experience')}</span>
                                    </li>
                                    <li>
                                        <span className="icon_list_icon">
                                            <img src={icon} alt="رمز التحقق" />
                                        </span>
                                        <span className="icon_list_text">{t('security_compliance')}</span>
                                    </li>
                                    <li>
                                        <span className="icon_list_icon">
                                            <img src={icon} alt="رمز التحقق" />
                                        </span>
                                        <span className="icon_list_text">{t('training_education')}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="details_item_image m-0">
                                    <img src={srImg2} alt="Service Details" />
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="details_item_image m-0">
                                    <img src={srImg3} alt="Service Details" />
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="details_item_image m-0">
                                    <img src={srImg4} alt="Service Details" />
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
