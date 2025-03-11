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
import { useTranslation } from 'react-i18next'; // استيراد مكتبة الترجمة

const ClickHandler = () => {
    window.scrollTo(10, 0);
};

const SubmitHandler = (e) => {
    e.preventDefault();
};

const Footer = () => {
    const { t } = useTranslation(); // استخدام الترجمة
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
                                <img src={icon1} alt={t("mail_icon_alt")} />
                            </div>
                            <div className="iconbox_content">
                                <h3 className="iconbox_title">{t("write_to_us")}</h3>
                                <p className="mb-0">info@osysware.com</p>
                            </div>
                        </div>
                        <div className="iconbox_block layout_icon_left">
                            <div className="iconbox_icon">
                                <img src={icon2} alt={t("calling_icon_alt")} />
                            </div>
                            <div className="iconbox_content">
                                <h3 className="iconbox_title">{t("contact_us_egypt")}</h3>
                                <p className="mb-0">+201070005260</p>
                            </div>
                        </div>
                        <div className="iconbox_block layout_icon_left">
                            <div className="iconbox_icon">
                                <img src={icon3} alt={t("map_icon_alt")} />
                            </div>
                            <div className="iconbox_content">
                                <h3 className="iconbox_title">{t("our_office")}</h3>
                                <p
                                    className="mb-0"
                                    style={{
                                        wordWrap: "break-word",
                                        whiteSpace: "normal",
                                        overflowWrap: "break-word"
                                    }}
                                >
                                    {t("office_address")}
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
                                    <h2 className="footer_info_title">{t("newsletter")}</h2>
                                    <p>{t("subscribe_newsletter")}</p>
                                    {/*<form className="footer_newslatter" onSubmit={SubmitHandler}>
                                        <label htmlFor="footer_mail_input">
                                            <img src={icon4} alt="Mail SVG Icon" />
                                        </label>
                                        <input
                                            id="footer_mail_input"
                                            type="email"
                                            name="email"
                                            placeholder={t("enter_email")}
                                        />
                                        <button type="submit">
                                            <i className="fa-solid fa-paper-plane"></i>
                                        </button>
                                    </form>*/}
                                    <ul className="social_links_block unordered_list">
                                        <li>
                                            <a href="https://www.facebook.com/osyseg" target="_blank" rel="noopener noreferrer">
                                                <img src={iconFacebook} alt={t("facebook_icon_alt")} />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                                <img src={iconTwitter} alt={t("twitter_icon_alt")} />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/company/osyseg" target="_blank" rel="noopener noreferrer">
                                                <img src={iconLinkedIn} alt={t("linkedin_icon_alt")} />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="footer_widget">
                                    <h3 className="footer_info_title">{t("our_services")}</h3>
                                    <ul className="icon_list unordered_list_block">
                                        {Services.slice(0, 6).map((service, srv) => (
                                            <li key={srv}>
                                                {service.title && (
                                                    <Link onClick={ClickHandler} to={`/service-single/${service.slug}`}>
                                                        <span className="icon_list_text">{t(service.title)}</span>
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
                                    <h3 className="footer_info_title">{t("information")}</h3>
                                    <ul className="icon_list unordered_list_block">
                                        <li><Link onClick={ClickHandler} to="/about">{t("about_us")}</Link></li>
                                        <li><Link onClick={ClickHandler} to="/service">{t("investors")}</Link></li>
                                        <li><Link onClick={ClickHandler} to="/contact">{t("contact_us")}</Link></li>
                                        <li><Link onClick={ClickHandler} to="/about">{t("partnership_program")}</Link></li>
                                        <li><Link onClick={ClickHandler} to="/portfolio">{t("our_field")}</Link></li>
                                        <li><Link onClick={ClickHandler} to="/pricing">{t("pricing_plans")}</Link></li>
                                    </ul>
                                </div>
                            </div>
                            {/* قسم المنتجات */}
                            <div className="col-lg-2 col-md-6 col-sm-6">
                                <div className="footer_widget">
                                    <h3 className="footer_info_title">{t("our_products")}</h3>
                                    <ul className="icon_list unordered_list_block">
                                        <li><Link onClick={ClickHandler} to="/portfolio">{t("case_studies")}</Link></li>
                                        <li><Link onClick={ClickHandler} to="/pricing">{t("our_prices")}</Link></li>
                                        <li><Link onClick={ClickHandler} to="/service">{t("features")}</Link></li>
                                        <li><Link onClick={ClickHandler} to="/about">{t("overview")}</Link></li>
                                        <li><Link onClick={ClickHandler} to="/">{t("new_releases")}</Link></li>
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
                        {t("copyright_text", { year: currentYear, company: companyName })}
                    </p>
                    <p className="copyright_text m-0">
                        {t("developed_by", { company: companyName })}
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
