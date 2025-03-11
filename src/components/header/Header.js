import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import icon1 from '../../images/icons/icon_wifi.svg';
import icon2 from '../../images/icons/icon_dollar_2.svg';
import icon3 from '../../images/icons/icon_chart.svg';
import icon4 from '../../images/icons/icon_tag_2.svg';
import icon5 from '../../images/icons/icon_user_2.svg';
import icon6 from '../../images/icons/icon_users.svg';
import logo from '../../images/site_logo/site_logo_3.svg';
import cases from '../../images/case/case_image_4.webp';
import MobileMenu from '../MobileMenu/MobileMenu';
import { useTranslation } from 'react-i18next';  // استيراد useTranslation
import { Globe } from "lucide-react"; // ✅ استيراد أيقونة الكرة الأرضية

const Header = (props) => {
    const [mobailActive, setMobailState] = useState(false);
    const [isSticky, setSticky] = useState(false);
    const [isOpen, setIsOpen] = useState(false); // ✅ حالة القائمة المنسدلة للغة

    const { i18n } = useTranslation(); // استخدام i18n من useTranslation
    const navigate = useNavigate();
    const location = useLocation();

    // تعريف دالة لتغيير اللغة
    const handleLanguageChange = (language) => {
        i18n.changeLanguage(language); // تغيير اللغة باستخدام i18n
        setIsOpen(false); // ✅ إغلاق القائمة بعد الاختيار
    };

    const handleCustomersClick = () => {
        const section = document.getElementById("clientLogoSection");
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        } else {
            navigate("/");
            setTimeout(() => {
                document.getElementById("homeLogoSection")?.scrollIntoView({ behavior: "smooth" });
            }, 1);
        }
    };

    const handlePartnersClick = () => {
        const section = document.getElementById("partnersSection");
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        } else {
            navigate("/");
            setTimeout(() => {
                document.getElementById("partnersSection")?.scrollIntoView({ behavior: "smooth" });
            }, 1);
        }
    };

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 80);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className="site_header site_header_1">
            <div className={`header_bottom stricky ${isSticky ? 'stricked-menu stricky-fixed' : ''}`}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-3 col-lg-2 col-5">
                            <div className="site_logo">
                                <Link onClick={ClickHandler} className="site_link" to="/">
                                    <img src={logo} alt="Site Logo – OSYS – IT Solutions & Technology, Business Consulting, Software Site Template" />
                                </Link>
                                <div className="badge bg-danger-subtle text-danger">{i18n.t('weAreHiring')}</div> {/* إضافة الترجمة */}
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-7 col-2">
                            <nav className="main_menu navbar navbar-expand-lg">
                                <div className="main_menu_inner collapse navbar-collapse justify-content-lg-center" id="main_menu_dropdown">
                                    <ul className="main_menu_list unordered_list justify-content-center">
                                        <li>
                                            <Link onClick={ClickHandler} className="nav-link" to="/" id="home_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                {i18n.t('home')} {/* ترجم باستخدام i18n */}
                                            </Link>
                                        </li>
                                        <li className="dropdown">
                                            <Link onClick={ClickHandler} className="nav-link" to="/about" id="company_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                {i18n.t('company')} {/* ترجم باستخدام i18n */}
                                            </Link>
                                            <div className="dropdown-menu mega_menu_wrapper" aria-labelledby="company_submenu">
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="col-lg-9">
                                                            <div className="megamenu_pages_wrapper mb-5">
                                                                <div className="row d-flex justify-content-start">
                                                                    <div className="col-2">
                                                                        <Link onClick={ClickHandler} className="iconbox_block_2" to="/about">
                                                                            <span className="icon_title_wrap">
                                                                                <small className="iconbox_icon">
                                                                                    <img src={icon1} alt="Wifi SVG Icon" />
                                                                                </small>
                                                                                <small className="iconbox_title">{i18n.t('aboutUs')}</small>
                                                                            </span>
                                                                            <span className="description mb-0">{i18n.t('learnMore')}</span>
                                                                        </Link>
                                                                    </div>
                                                                    <div className="col-2">
                                                                        <Link onClick={ClickHandler} className="iconbox_block_2" to="/pricing">
                                                                            <span className="icon_title_wrap">
                                                                                <small className="iconbox_icon">
                                                                                    <img src={icon2} alt="Dollar SVG Icon" />
                                                                                </small>
                                                                                <small className="iconbox_title">{i18n.t('pricing')}</small>
                                                                            </span>
                                                                            <span className="description mb-0">{i18n.t('pricingPlans')}</span>
                                                                        </Link>
                                                                    </div>

                                                                    <div className="col-2">
                                                                        <div onClick={handleCustomersClick} className="iconbox_block_2" style={{ cursor: 'pointer' }}>
                                                                            <span className="icon_title_wrap">
                                                                                <small className="iconbox_icon">
                                                                                    <img src={icon4} alt="Event Tag SVG Icon" />
                                                                                </small>
                                                                                <small className="iconbox_title">{i18n.t('customers')}</small>
                                                                            </span>
                                                                            <span className="description mb-0">{i18n.t('ourCustomers')}</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-2">
                                                                        <div onClick={handlePartnersClick} className="iconbox_block_2" style={{ cursor: "pointer" }}>
                                                                            <span className="icon_title_wrap">
                                                                                <small className="iconbox_icon">
                                                                                    <img src={icon3} alt="Chart SVG Icon" />
                                                                                </small>
                                                                                <small className="iconbox_title">{i18n.t('partners')}</small>
                                                                            </span>
                                                                            <span className="description mb-0">{i18n.t('ourPartners')}</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-2">
                                                                        <Link onClick={ClickHandler} className="iconbox_block_2" to="/team">
                                                                            <span className="icon_title_wrap">
                                                                                <small className="iconbox_icon">
                                                                                    <img src={icon5} alt="User Check SVG Icon" />
                                                                                </small>
                                                                                <small className="iconbox_title">{i18n.t('ourTeam')}</small>
                                                                            </span>
                                                                            <span className="description mb-0">{i18n.t('joinTeam')}</span>
                                                                        </Link>
                                                                    </div>
                                                                    <div className="col-2">
                                                                        <Link onClick={ClickHandler} className="iconbox_block_2" to="/team-single/Atticus-Sterling">
                                                                            <span className="icon_title_wrap">
                                                                                <small className="iconbox_icon">
                                                                                    <img src={icon6} alt="Users SVG Icon" />
                                                                                </small>
                                                                                <small className="iconbox_title">{i18n.t('ethics')}</small>
                                                                            </span>
                                                                            <span className="description mb-0">{i18n.t('integrityAndTransparency')}</span>
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <Link onClick={ClickHandler} className="nav-link" to="/portfolio" id="products_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                {i18n.t('products')} {/* ترجم باستخدام i18n */}
                                            </Link>
                                            <ul className="dropdown-menu" aria-labelledby="products_submenu">
                                                <li><Link onClick={ClickHandler} to="/portfolio_details/Explore-Our-IT-Solutions">{i18n.t('productsDetails')}</Link></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <Link onClick={ClickHandler} className="nav-link" to="/service" id="services_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                {i18n.t('ourServices')} {/* ترجم باستخدام i18n */}
                                            </Link>
                                        </li>
                                        <li>
                                            <Link onClick={ClickHandler} className="nav-link" to="/blog">{i18n.t('blog')}</Link>
                                        </li>
                                        <li>
                                            <Link onClick={ClickHandler} className="nav-link" to="/contact">{i18n.t('contact')}</Link>
                                        </li>
                                    </ul>

                                </div>
                            </nav>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-5">
                            <ul className="header_btns_group unordered_list justify-content-end">
                                {/* زر الموبايل */}
                                <li>
                                    <button className="mobile_menu_btn" onClick={() => setMobailState(!mobailActive)}>
                                        <i className="far fa-bars"></i>
                                    </button>
                                </li>

                                {/* ✅ زر الكرة الأرضية مع القائمة المنسدلة */}
                                <li className="relative language-container">
                                    <button
                                        onClick={() => setIsOpen(!isOpen)}
                                        className="language-btn"
                                    >
                                        <Globe size={24} className="text-gray-600" />
                                    </button>

                                    {/* القائمة المنسدلة */}
                                    {isOpen && (
                                        <div className="language-dropdown">
                                            <button onClick={() => handleLanguageChange("ar")}> Ar</button>
                                            <button onClick={() => handleLanguageChange("en")}> En</button>
                                        </div>
                                    )}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mobail-wrap">
                    <div className={`mobail-menu ${mobailActive ? "active" : ""}`}>
                        <div className="xb-header-menu-scroll">
                            <div className="xb-menu-close xb-hide-xl xb-close" onClick={() => setMobailState(!mobailActive)}></div>
                            <nav className="xb-header-nav">
                                <MobileMenu />
                            </nav>
                        </div>
                    </div>
                    <div className="xb-header-menu-backdrop" onClick={() => setMobailState(false)}></div>
                </div>
            </div>
        </header>
    );
};

export default Header;
