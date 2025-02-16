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
                                <h3 className="iconbox_title">Write to us</h3>
                                <p className="mb-0">{companyName.toLowerCase()}eg@gmail.com</p>
                            </div>
                        </div>
                        <div className="iconbox_block layout_icon_left">
                            <div className="iconbox_icon">
                                <img src={icon2} alt="Calling Check SVG Icon" />
                            </div>
                            <div className="iconbox_content">
                                <h3 className="iconbox_title">Call Us (Egypt)</h3>
                                <p className="mb-0">+2015532500727</p>
                            </div>
                        </div>
                        <div className="iconbox_block layout_icon_left">
                            <div className="iconbox_icon">
                                <img src={icon3} alt="Map Mark Check SVG Icon" />
                            </div>
                            <div className="iconbox_content">
                                <h3 className="iconbox_title">Our Office</h3>
                                <p
                                    className="mb-0"
                                    style={{
                                        wordWrap: "break-word",
                                        whiteSpace: "normal",
                                        overflowWrap: "break-word"
                                    }}
                                >
                                    Elmarwa Mall, Ordinya, 10th of ramadan, ASH, Egypt
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
                                    <h2 className="footer_info_title">Newsletter</h2>
                                    <p>
                                        Sign up to {companyName} weekly newsletter to get the latest updates.
                                    </p>
                                    <form className="footer_newslatter" onSubmit={SubmitHandler}>
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
                                    </form>
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
                                    <h3 className="footer_info_title">Services</h3>
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
                                    <h3 className="footer_info_title">Information</h3>
                                    <ul className="icon_list unordered_list_block">
                                        <li><Link onClick={ClickHandler} to="/about">About {companyName}</Link></li>
                                        <li><Link onClick={ClickHandler} to="/service">Investors</Link></li>
                                        <li><Link onClick={ClickHandler} to="/contact">Contact</Link></li>
                                        <li><Link onClick={ClickHandler} to="/about">Affiliate Program</Link></li>
                                        <li><Link onClick={ClickHandler} to="/portfolio">Career</Link></li>
                                        <li><Link onClick={ClickHandler} to="/pricing">Pricing Plan</Link></li>
                                    </ul>
                                </div>
                            </div>
                            {/* قسم المنتجات */}
                            <div className="col-lg-2 col-md-6 col-sm-6">
                                <div className="footer_widget">
                                    <h3 className="footer_info_title">Product</h3>
                                    <ul className="icon_list unordered_list_block">
                                        <li><Link onClick={ClickHandler} to="/portfolio">Case Studies</Link></li>
                                        <li><Link onClick={ClickHandler} to="/pricing">Our Pricing</Link></li>
                                        <li><Link onClick={ClickHandler} to="/service">Features</Link></li>
                                        <li><Link onClick={ClickHandler} to="/about">Overview</Link></li>
                                        <li><Link onClick={ClickHandler} to="/blog">New Releases</Link></li>
                                        <li><Link onClick={ClickHandler} to="/pricing">
                                        </Link></li>
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
                        Copyright © {currentYear} {companyName}, All rights reserved.
                    </p>
                    <p className="copyright_text m-0">
                        Developed by {companyName}
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
