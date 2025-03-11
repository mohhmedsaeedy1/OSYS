import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/header/Header';
import PageTitle from '../../components/pagetitle/PageTitle';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Footer from '../../components/footer/Footer';
import ModalVideo from 'react-modal-video';
import CtaSection from '../../components/CtaSection/CtaSection';
import PolicySection from './Policy';
import PartnerSection from '../../components/PartnerSection';
import offerBanner from '../../images/icons/best_offer.svg.svg';
import { useTranslation } from 'react-i18next';

const PricingPage = (props) => {
    const [isOpen, setOpen] = useState(false);
    const [isActive, setIsActive] = useState(false); // تعريف الحالة isActive
    const { t } = useTranslation();  // إضافة الترجمة

    const ClickHandler = () => {
        console.log('Button clicked!');
        window.scrollTo(0, 0); // ينقل الصفحة إلى الأعلى
    };

    const handleToggle = () => {
        setIsActive(!isActive); // تبديل الحالة بين true و false
    };

    return (
        <Fragment>
            <Header />
            <main className="page_content about-page">
                <PageTitle pageTitle={t('pricing_plans')} pagesub={t('our_pricing_plans')} pageTop={''} />
                <PolicySection />
                <section className="pricing_section section_space pb-0 bg-light">
                    <div className="container">
                        <div className="heading_block text-center">
                            <div className="heading_focus_text mb-2">
                                <span className="badge bg-secondary text-white">{t('our_exclusive_prices')} 😍</span>
                            </div>
                            <h2 className="heading_text mb-0">
                                {t('best_plan_for_business')}
                            </h2>
                        </div>
                        <div className="pricing_toggle_btn text-center">
                            <span>{t('billed_annually')} <small>-30%</small></span>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                <div className={`pricing_block ${isActive ? 'active' : ''}`}>
                                    <div className="table_head">
                                        <div className="pricing_price_value bg-primary-subtle text-primary">
                                            <span className="pricing_monthly">
                                                <del>$54</del> $48<small>.6</small> <sub>{t('you_save_monthly')} <u>$5.4</u></sub>
                                            </span>
                                            <span className="pricing_annually">
                                                <del>$180</del> $160<small></small> <sub>{t('you_save_yearly')} <u>$20</u></sub>
                                            </span>
                                        </div>
                                        <div className="pricing_block_title">
                                            <h3 className="pricing_package_title">{t('standard_package')}</h3>
                                            <p className="pricing_package_description mb-0">
                                                {t('make_your_business_easier')}
                                            </p>
                                        </div>
                                    </div>
                                    <ul className="icon_list unordered_list_block">
                                        <li>
                                            <span className="icon_list_icon">
                                                <i className="fa-regular fa-circle-check"></i>
                                            </span>
                                            <span className="icon_list_text">
                                                {t('software_development')}
                                            </span>
                                        </li>
                                        <li>
                                            <span className="icon_list_icon">
                                                <i className="fa-regular fa-circle-check"></i>
                                            </span>
                                            <span className="icon_list_text">
                                                {t('digital_product_design')}
                                            </span>
                                        </li>
                                        <li>
                                            <span className="icon_list_icon">
                                                <i className="fa-regular fa-circle-check"></i>
                                            </span>
                                            <span className="icon_list_text">
                                                {t('it_consulting')}
                                            </span>
                                        </li>
                                        <li>
                                            <span className="icon_list_icon">
                                                <i className="fa-regular fa-circle-check"></i>
                                            </span>
                                            <span className="icon_list_text">
                                                {t('web_development')}
                                            </span>
                                        </li>
                                        <li>
                                            <span className="icon_list_icon">
                                                <i className="fa-regular fa-circle-check"></i>
                                            </span>
                                            <span className="icon_list_text">
                                                {t('cyber_security')}
                                            </span>
                                        </li>
                                        <li>
                                            <span className="icon_list_icon">
                                                <i className="fa-regular fa-circle-check"></i>
                                            </span>
                                            <span className="icon_list_text">
                                                {t('cloud_computing')}
                                            </span>
                                        </li>
                                    </ul>

                                    <div className="text-center mt-4">
                                        <Link onClick={ClickHandler} className="btn btn-outline-light" to="/contact">
                                            <span className="btn_label" data-text={t('buy_now')}>{t('buy_now')}</span>
                                            <span className="btn_icon">
                                                <i className="fa-solid fa-arrow-up-right"></i>
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className={`pricing_block ${isActive ? 'active' : ''}`}>
                                    <div className="table_head">
                                        <div className="pricing_price_value bg-primary-subtle text-primary">
                                            <span className="pricing_monthly">
                                                <del>$60</del> $54 <sub>{t('you_save_monthly')}  <u>$6</u></sub>
                                            </span>
                                            <span className="pricing_annually">
                                                <del>$260</del> $220 <sub>{t('you_save_yearly')}   <u>$40</u></sub>
                                            </span>
                                        </div>
                                        <div className="pricing_block_title">
                                            <h3 className="pricing_package_title">{t('premium_package')}</h3>
                                            <p className="pricing_package_description mb-0">
                                                {t('make_your_business_easier')}
                                            </p>
                                        </div>
                                    </div>
                                    <ul className="icon_list unordered_list_block">
                                        <li>
                                            <span className="icon_list_icon">
                                                <i className="fa-regular fa-circle-check"></i>
                                            </span>
                                            <span className="icon_list_text">
                                                {t('software_development')}
                                            </span>
                                        </li>
                                        <li>
                                            <span className="icon_list_icon">
                                                <i className="fa-regular fa-circle-check"></i>
                                            </span>
                                            <span className="icon_list_text">
                                                {t('digital_product_design')}
                                            </span>
                                        </li>
                                        <li>
                                            <span className="icon_list_icon">
                                                <i className="fa-regular fa-circle-check"></i>
                                            </span>
                                            <span className="icon_list_text">
                                                {t('it_consulting')}
                                            </span>
                                        </li>
                                        <li>
                                            <span className="icon_list_icon">
                                                <i className="fa-regular fa-circle-check"></i>
                                            </span>
                                            <span className="icon_list_text">
                                                {t('web_development')}
                                            </span>
                                        </li>
                                        <li>
                                            <span className="icon_list_icon">
                                                <i className="fa-regular fa-circle-check"></i>
                                            </span>
                                            <span className="icon_list_text">
                                                {t('cyber_security')}
                                            </span>
                                        </li>
                                        <li>
                                            <span className="icon_list_icon">
                                                <i className="fa-regular fa-circle-check"></i>
                                            </span>
                                            <span className="icon_list_text">
                                                {t('cloud_computing')}
                                            </span>
                                        </li>
                                    </ul>

                                    <div className="text-center mt-4">
                                        <Link onClick={ClickHandler} className="btn btn-outline-light" to="/contact">
                                            <span className="btn_label" data-text={t('buy_now')}>{t('buy_now')}</span>
                                            <span className="btn_icon">
                                                <i className="fa-solid fa-arrow-up-right"></i>
                                            </span>
                                        </Link>
                                    </div>
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
export default PricingPage;
