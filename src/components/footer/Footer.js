import React from 'react';
import { Link } from 'react-router-dom';
import Bg from '../../images/shapes/bg_pattern_3.svg';
import icon1 from '../../images/icons/icon_mail.svg';
import icon2 from '../../images/icons/icon_calling.svg';
import icon3 from '../../images/icons/icon_map_mark.svg';
import icon4 from '../../images/icons/icon_mail_2.svg';
import Services from '../../api/service';
import iconFacebook from '../../images/icons/icon_facebook.svg';
import iconTwitter from '../../images/icons/icon_twitter_x.svg';
import iconLinkedIn from '../../images/icons/icon_linkedin.svg';

const ClickHandler = () => {
    window.scrollTo(10, 0);
};

const SubmitHandler = (e) => {
    e.preventDefault();
};

const Footer = () => {
    const currentYear = new Date().getFullYear(); // للحصول على السنة الحالية
    const companyName = "OSYS"; // اسم الشركة

    return (
        <footer className="site_footer footer_layout_1">
            <div className="content_box" style={{ backgroundImage: `url(${Bg})` }}>
                <div className="container">
                    {/* روابط التواصل المباشر */}
                    <div className="diract_contact_links text-white">
                        <div className="iconbox_block layout_icon_left">
                            <div className="iconbox_icon">
                                <img src={icon1} alt="Mail SVG Icon" />
                            </div>
                            <div className="iconbox_content">
                                <h3 className="iconbox_title">اكتبلنا </h3>
                                <p className="mb-0">info@osysware.com</p>
                            </div>
                        </div>
                        <div className="iconbox_block layout_icon_left">
                            <div className="iconbox_icon">
                                <img src={icon2} alt="Calling Check SVG Icon" />
                            </div>
                            <div className="iconbox_content">
                                <h3 className="iconbox_title">اتصل بنا (مصر)</h3>
                                <p className="mb-0">+201070005260</p>
                            </div>
                        </div>
                        <div className="iconbox_block layout_icon_left">
                            <div className="iconbox_icon">
                                <img src={icon3} alt="Map Mark Check SVG Icon" />
                            </div>
                            <div className="iconbox_content">
                                <h3 className="iconbox_title">مكتبنا</h3>
                                <p
                                    className="mb-0"
                                    style={{
                                        wordWrap: "break-word",
                                        whiteSpace: "normal",
                                        overflowWrap: "break-word"
                                    }}
                                >
                                    مول المروة، ألاردنيه، العاشر من رمضان، الشرقية، مصر
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* محتوى الفوتر الأساسي */}
                    <div className="footer_main_content">
                        <div className="row justify-content-lg-between">
                            {/* قسم النشرة البريدية */}
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="footer_widget pe-md-3">
                                    <h2 className="footer_info_title">النشرة الإخبارية</h2>
                                    <p>
                                        اشترك في النشرة الإخبارية الأسبوعية لـ OSYS للحصول على أحدث التحديثات.
                                    </p>
                                    {/*<form className="footer_newslatter" onSubmit={SubmitHandler}>
                                        <label htmlFor="footer_mail_input">
                                            <img src={icon4} alt="Mail SVG Icon" />
                                        </label>
                                        <input
                                            id="footer_mail_input"
                                            type="email"
                                            name="email"
                                            placeholder="Enter your email"
                                        />
                                        <button type="submit">
                                            <i className="fa-solid fa-paper-plane"></i>
                                        </button>
                                    </form>*/}
                                    <ul className="social_links_block unordered_list">
                                        <li>
                                            <a href="https://www.facebook.com/osyseg" target="_blank" rel="noopener noreferrer">
                                                <img src={iconFacebook} alt="Facebook Icon" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                                <img src={iconTwitter} alt="Twitter Icon" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/company/osyseg" target="_blank" rel="noopener noreferrer">
                                                <img src={iconLinkedIn} alt="LinkedIn Icon" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* قسم الخدمات */}
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="footer_widget">
                                    <h3 className="footer_info_title">خدماتنا</h3>
                                    <ul className="icon_list unordered_list_block">
                                        {Services.slice(0, 6).map((service, srv) => (
                                            <li key={srv}>
                                                {service.title && (
                                                    <Link onClick={ClickHandler} to={`/service-single/${service.slug}`}>
                                                        <span className="icon_list_text">{service.title}</span>
                                                    </Link>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            {/* قسم المعلومات */}
                            <div className="col-lg-2 col-md-6 col-sm-6">
                                <div className="footer_widget">
                                    <h3 className="footer_info_title">المعلومات</h3>
                                    <ul className="icon_list unordered_list_block">
                                        <li><Link onClick={ClickHandler} to="/about">عن {companyName}</Link></li>
                                        <li><Link onClick={ClickHandler} to="/service">المستثمرون</Link></li>
                                        <li><Link onClick={ClickHandler} to="/contact">تواصل معنا</Link></li>
                                        <li><Link onClick={ClickHandler} to="/about">برنامج الشراكة</Link></li>
                                        <li><Link onClick={ClickHandler} to="/portfolio">مجالنا</Link></li>
                                        <li><Link onClick={ClickHandler} to="/pricing">خطط الاسعار</Link></li>
                                    </ul>
                                </div>
                            </div>
                            {/* قسم المنتجات */}
                            <div className="col-lg-2 col-md-6 col-sm-6">
                                <div className="footer_widget">
                                    <h3 className="footer_info_title">منتجاتنا</h3>
                                    <ul className="icon_list unordered_list_block">
                                        <li><Link onClick={ClickHandler} to="/portfolio">دراسات الحالات</Link></li>
                                        <li><Link onClick={ClickHandler} to="/pricing">اسعارنا</Link></li>
                                        <li><Link onClick={ClickHandler} to="/service">المميزات</Link></li>
                                        <li><Link onClick={ClickHandler} to="/about">نظرة عامة</Link></li>
                                        <li><Link onClick={ClickHandler} to="/">الإصدارات الجديدة</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* الجزء السفلي */}
            <div className="footer_bottom">
                <div className="container d-md-flex align-items-md-center justify-content-md-between">
                    <p className="copyright_text m-0">
                        حقوق النشر © {currentYear} {companyName}، جميع الحقوق محفوظة.
                    </p>
                    <p className="copyright_text m-0">
                        تطوير {companyName}                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
