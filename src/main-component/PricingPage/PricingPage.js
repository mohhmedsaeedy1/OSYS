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

const PricingPage = (props) => {
    const [isOpen, setOpen] = useState(false);
    const [isActive, setIsActive] = useState(false); // تعريف الحالة isActive

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
                <PageTitle pageTitle={'خطط اسعارنا'} pagesub={' الاسعار😍'} pageTop={''} />
                <PolicySection />
                  <section className="pricing_section section_space pb-0 bg-light">
                    <div className="container">
                        <div className="heading_block text-center">
                            <div className="heading_focus_text mb-2">
                                
                                <span className="badge bg-secondary text-white">اسعارنا المتميزه 😍</span>
                            </div>
                            <h2 className="heading_text mb-0">
                                افضل خطه للاعمال
                            </h2>
                        </div>
                        <div className="pricing_toggle_btn text-center">
                            {/* <button type="button" onClick={handleToggle} className={isActive ? 'active' : ''}> </button>*/}
                            {/*   <span>Billed Monthly <small>-10%</small></span>*/}
                            <span>الفوترة سنويًا <small>-30%</small></span>
                            
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                <div className={`pricing_block ${isActive ? 'active' : ''}`}>
                                    <div className="table_head">
                                        <div className="pricing_price_value bg-primary-subtle text-primary">
                                            <span className="pricing_monthly">
                                                <del>$54</del> $48<small>.6</small> <sub>هتوفر<u>$5.4</u> شهريا</sub>
                                            </span>
                                            <span className="pricing_annually">
                                                <del>$180</del> $160<small></small> <sub>هتوفر<u>$20</u> سنويا</sub>
                                            </span>
                                        </div>
                                        <div className="pricing_block_title">
                                            <h3 className="pricing_package_title">الباقة القياسية</h3>
                                            <p className="pricing_package_description mb-0">
                                                اجعل عملك أسهل مع نظام متكامل ومترابط بشكل سليم.
                                            </p>
                                        </div>
                                    </div>
                                    <ul className="icon_list unordered_list_block">
                                        <li>
                                            <span className="icon_list_icon">
                                                <i className="fa-regular fa-circle-check"></i>
                                            </span>
                                            <span className="icon_list_text">
                                                تطوير البرمجيات.
                                            </span>
                                        </li>
                                        <li>
                                            <span className="icon_list_icon">
                                                <i className="fa-regular fa-circle-check"></i>
                                            </span>
                                            <span className="icon_list_text">
                                                تصميم المنتجات الرقمية.
                                            </span>
                                        </li>
                                        <li>
                                            <span className="icon_list_icon">
                                                <i className="fa-regular fa-circle-check"></i>
                                            </span>
                                            <span className="icon_list_text">
                                                استشارات تقنية المعلومات.
                                            </span>
                                        </li>
                                        <li>
                                            <span className="icon_list_icon">
                                                <i className="fa-regular fa-circle-check"></i>
                                            </span>
                                            <span className="icon_list_text">
                                                تطوير المواقع الإلكترونية.
                                            </span>
                                        </li>
                                        <li>
                                            <span className="icon_list_icon">
                                                <i className="fa-regular fa-circle-check"></i>
                                            </span>
                                            <span className="icon_list_text">
                                                خدمات الأمن السيبراني.
                                            </span>
                                        </li>
                                        <li>
                                            <span className="icon_list_icon">
                                                <i className="fa-regular fa-circle-check"></i>
                                            </span>
                                            <span className="icon_list_text">
                                                خدمات الحوسبة السحابية.
                                            </span>
                                        </li>
                                    </ul>

                                    <div className="text-center mt-4">
                                        <Link onClick={ClickHandler} className="btn btn-outline-light" to="/contact">
                                            <span className="btn_label" data-text="اشترِ الآن">اشترِ الآن</span>
                                            <span className="btn_icon">
                                                <i className="fa-solid fa-arrow-up-right"></i>
                                            </span>
                                        </Link>
                                    </div>




                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className={`pricing_block ${isActive ? 'active' : ''}`}>
                                    {/*<div className="best_plan">
                                        <img src={offerBanner} alt="Best Offer" />
                                    </div>*/}
                                    <div className="table_head">
                                        <div className="pricing_price_value bg-primary-subtle text-primary">
                                            <span className="pricing_monthly">
                                                <del>$60</del> $54 <sub> هتوفر  <u>$6</u> شهريا</sub>
                                            </span>
                                            <span className="pricing_annually">
                                                <del>$260</del> $220 <sub> هتوفر   <u>$40</u> سنويا</sub>
                                            </span>
                                        </div>
                                        <div className="pricing_block_title">
                                            <h3 className="pricing_package_title">الباقة المميزة</h3>
                                            <p className="pricing_package_description mb-0">
                                                اجعل عملك أسهل مع نظام متكامل ومترابط بشكل صحيح.
                                            </p>
                                        </div>

                                    </div>
                                    <ul className="icon_list unordered_list_block">
                                        <li>
                                            <span className="icon_list_icon">
                                                <i className="fa-regular fa-circle-check"></i>
                                            </span>
                                            <span className="icon_list_text">
                                                تطوير البرمجيات.
                                            </span>
                                        </li>
                                        <li>
                                            <span className="icon_list_icon">
                                                <i className="fa-regular fa-circle-check"></i>
                                            </span>
                                            <span className="icon_list_text">
                                                تصميم المنتجات الرقمية.
                                            </span>
                                        </li>
                                        <li>
                                            <span className="icon_list_icon">
                                                <i className="fa-regular fa-circle-check"></i>
                                            </span>
                                            <span className="icon_list_text">
                                                استشارات تقنية المعلومات.
                                            </span>
                                        </li>
                                        <li>
                                            <span className="icon_list_icon">
                                                <i className="fa-regular fa-circle-check"></i>
                                            </span>
                                            <span className="icon_list_text">
                                                تطوير المواقع الإلكترونية.
                                            </span>
                                        </li>
                                        <li>
                                            <span className="icon_list_icon">
                                                <i className="fa-regular fa-circle-check"></i>
                                            </span>
                                            <span className="icon_list_text">
                                                خدمات الأمن السيبراني.
                                            </span>
                                        </li>
                                        <li>
                                            <span className="icon_list_icon">
                                                <i className="fa-regular fa-circle-check"></i>
                                            </span>
                                            <span className="icon_list_text">
                                                خدمات الحوسبة السحابية.
                                            </span>
                                        </li>
                                    </ul>

                                    <div className="text-center mt-4">
                                        <Link onClick={ClickHandler} className="btn btn-outline-light" to="/contact">
                                            <span className="btn_label" data-text="اشترِ الآن">اشترِ الآن</span>
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
                {/*<div className="client_logo_section section_space bg-light">
                    <div className="container">
                        <div className="heading_block text-center">
                            <div className="heading_focus_text mb-0">
                                <span className="badge bg-secondary text-white">Brand We</span>
                                Work With 🎉
                            </div>
                        </div>
                        <PartnerSection />
                    </div>
                </div>*/}
            </main>
            <CtaSection />
            <Footer />
            <Scrollbar />
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="7e90gBu4pas" onClose={() => setOpen(false)} />
        </Fragment>
    )
};
export default PricingPage;
