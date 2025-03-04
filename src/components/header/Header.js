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

const Header = (props) => {
    const [mobailActive, setMobailState] = useState(false);
    const [isSticky, setSticky] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();

    // Function to handle "Customers" click
    const handleCustomersClick = () => {
        const currentPath = location.pathname;

        if (currentPath === '/clientLogoSection') {
            const section = document.getElementById('clientLogoSection');
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        } else if (currentPath === '/') {
            const section = document.getElementById('homeLogoSection');
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            navigate('/');
            setTimeout(() => {
                const section = document.getElementById('homeLogoSection');
                if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                }
            }, 1);
        }
    };

    // Function to handle "Partners" click
    const handlePartnersClick = () => {
        const currentPath = location.pathname;

        if (currentPath === '/partnersSection') {
            const section = document.getElementById('partnersSection');
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        } else if (currentPath === '/') {
            const section = document.getElementById('partnersSection');
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            navigate('/');
            setTimeout(() => {
                const section = document.getElementById('partnersSection');
                if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                }
            }, 1);
        }
    };


    // Function to handle other clicks
    const ClickHandler = () => {
        window.scrollTo(10, 0); // تعديل السلوك هنا إذا لزم الأمر
    };

    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 80);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (

        <header className="site_header site_header_1">
            {/* <div className="header_top text-center">
                <div className="container">
                    <p className="m-0">Subscribe us and receive <b>20% bonus</b> discount on checkout. <Link onClick={ClickHandler} to="/pricing"><u>Learn more</u> <i className="fa-solid fa-angle-right"></i></Link></p>
                </div>
            </div>*/}
            <div className={`header_bottom stricky  ${isSticky ? 'stricked-menu stricky-fixed' : ''}`}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-3 col-lg-2 col-5">
                            <div className="site_logo">
                                <Link onClick={ClickHandler} className="site_link" to="/">
                                    <img src={logo} alt="Site Logo – OSYS – IT Solutions & Technology, Business Consulting, Software 
Site Template" />
                                </Link>
                                <div className="badge bg-danger-subtle text-danger">نحن نوظف</div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-7 col-2">
                            <nav className="main_menu navbar navbar-expand-lg">
                                <div className="main_menu_inner collapse navbar-collapse justify-content-lg-center" id="main_menu_dropdown">
                                    <ul className="main_menu_list unordered_list justify-content-center">
                                        <li>
                                            <Link onClick={ClickHandler} className="nav-link" to="/" id="home_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                الصفحة الرئيسية
                                            </Link>
                                            <ul className="dropdown-menu" aria-labelledby="home_submenu">
                                                <li><Link onClick={ClickHandler} to="/">IT Solution</Link></li>
                                                <li><Link onClick={ClickHandler} to="/home_software_company">Software Company</Link></li>
                                                <li><Link onClick={ClickHandler} to="/home_business_consulting">Business Consulting</Link></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown">
                                            <Link onClick={ClickHandler} className="nav-link" to="/about" id="company_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                الشركة
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
                                                                                <small className="iconbox_title">نبذة عنا</small>
                                                                            </span>
                                                                            <span className="description mb-0">تعرف علينا</span>
                                                                        </Link>
                                                                    </div>
                                                                    <div className="col-2">
                                                                        <Link onClick={ClickHandler} className="iconbox_block_2" to="/pricing">
                                                                            <span className="icon_title_wrap">
                                                                                <small className="iconbox_icon">
                                                                                    <img src={icon2} alt="Dollar SVG Icon" />
                                                                                </small>
                                                                                <small className="iconbox_title">الأسعار</small>
                                                                            </span>
                                                                            <span className="description mb-0">خطط الاسعار</span>
                                                                        </Link>
                                                                    </div>
                                                                    <div className="col-2">
                                                                        <div onClick={handlePartnersClick} className="iconbox_block_2" style={{ cursor: "pointer" }}>
                                                                            <span className="icon_title_wrap">
                                                                                <small className="iconbox_icon">
                                                                                    <img src={icon3} alt="Chart SVG Icon" />
                                                                                </small>
                                                                                <small className="iconbox_title">الشركاء</small>
                                                                            </span>
                                                                            <span className="description mb-0">شركاؤنا الدائمون</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-2">
                                                                        <div onClick={handleCustomersClick} className="iconbox_block_2" style={{ cursor: 'pointer' }}>
                                                                            <span className="icon_title_wrap">
                                                                                <small className="iconbox_icon">
                                                                                    <img src={icon4} alt="Event Tag SVG Icon" />
                                                                                </small>
                                                                                <small className="iconbox_title">العملاء</small>
                                                                            </span>
                                                                            <span className="description mb-0">عملاؤنا أولويتنا</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-2">
                                                                        <Link onClick={ClickHandler} className="iconbox_block_2" to="/team">
                                                                            <span className="icon_title_wrap">
                                                                                <small className="iconbox_icon">
                                                                                    <img src={icon5} alt="User Check SVG Icon" />
                                                                                </small>
                                                                                <small className="iconbox_title">فريقنا</small>
                                                                            </span>
                                                                            <span className="description mb-0">انضم إلى فريقنا</span>
                                                                        </Link>
                                                                    </div>
                                                                    <div className="col-2">
                                                                        <Link onClick={ClickHandler} className="iconbox_block_2" to="/team-single/Atticus-Sterling">
                                                                            <span className="icon_title_wrap">
                                                                                <small className="iconbox_icon">
                                                                                    <img src={icon6} alt="Users SVG Icon" />
                                                                                </small>
                                                                                <small className="iconbox_title">ميثاق القيم والأخلاقيات</small>
                                                                            </span>
                                                                            <span className="description mb-0">النزاهة والشفافية</span>
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
                                            <Link onClick={ClickHandler} className="nav-link" to="/portfolio" id="portfolio_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                منتجاتنا
                                            </Link>
                                            <ul className="dropdown-menu" aria-labelledby="portfolio_submenu">
                                                <li><Link onClick={ClickHandler} to="/portfolio_details/Explore-Our-IT-Solutions">Products Details</Link></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <Link onClick={ClickHandler} className="nav-link active" to="/service" id="services_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                خدماتنا
                                            </Link>
                                            <div className="dropdown-menu mega_menu_wrapper p-0" aria-labelledby="services_submenu">
                                                <div className="container">
                                                    <div className="row justify-content-lg-between">
                                                        <div className="col-lg-8">
                                                            <div className="row">
                                                                <div className="col-lg-4">
                                                                    <div className="megamenu_widget">
                                                                        <h3 className="megamenu_info_title">By Type</h3>
                                                                        <ul className="icon_list unordered_list_block">
                                                                            <li>
                                                                                <Link onClick={ClickHandler} to="/service-single/IT-Management-Services">
                                                                                    <span className="icon_list_text">خدمات إدارة تكنولوجيا المعلومات</span>
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link onClick={ClickHandler} to="/service-single/Data-Tracking-and-Security">
                                                                                    <span className="icon_list_text">Data Tracking Security</span>
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link onClick={ClickHandler} to="/service-single/IT-Management-Services">
                                                                                    <span className="icon_list_text">تطوير المواقع الإلكترونية</span>
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link onClick={ClickHandler} to="/service-single/IT-Management-Services">
                                                                                    <span className="icon_list_text">CRM Solutions and Design</span>
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link onClick={ClickHandler} to="/service-single/IT-Management-Services">
                                                                                    <span className="icon_list_text">خدمات تصميم واجهة المستخدم</span>
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link onClick={ClickHandler} to="/service-single/IT-Management-Services">
                                                                                    <span className="icon_list_text">Technology Solution</span>
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link onClick={ClickHandler} to="/service-single/IT-Management-Services">
                                                                                    <span className="icon_list_text">Software Development</span>
                                                                                </Link>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-4">
                                                                    <div className="megamenu_widget">
                                                                        <h3 className="megamenu_info_title">By Fields</h3>
                                                                        <ul className="icon_list unordered_list_block">
                                                                            <li>
                                                                                <Link onClick={ClickHandler} to="/service">
                                                                                    <span className="icon_list_text">Healthcare</span>
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link onClick={ClickHandler} to="/service">
                                                                                    <span className="icon_list_text">Banks</span>
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link onClick={ClickHandler} to="/service">
                                                                                    <span className="icon_list_text">Logistics</span>
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link onClick={ClickHandler} to="/service">
                                                                                    <span className="icon_list_text">Supermarkets</span>
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link onClick={ClickHandler} to="/service">
                                                                                    <span className="icon_list_text">Industries</span>
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link onClick={ClickHandler} to="/service">
                                                                                    <span className="icon_list_text">Hotels</span>
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link onClick={ClickHandler} to="/service">
                                                                                    <span className="icon_list_text">Fintech</span>
                                                                                </Link>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-4">
                                                                    <div className="megamenu_widget">
                                                                        <h3 className="megamenu_info_title">By Product</h3>
                                                                        <ul className="icon_list unordered_list_block">
                                                                            <li>
                                                                                <Link onClick={ClickHandler} to="/portfolio">
                                                                                    <span className="icon_list_text">Case Studies</span>
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link onClick={ClickHandler} to="/pricing">
                                                                                    <span className="icon_list_text">Our Pricing</span>
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link onClick={ClickHandler} to="/service">
                                                                                    <span className="icon_list_text">Features</span>
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link onClick={ClickHandler} to="/about">
                                                                                    <span className="icon_list_text">Overview</span>
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link onClick={ClickHandler} to="/">
                                                                                    <span className="icon_list_text">New Releases</span>
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link onClick={ClickHandler} to="/service">
                                                                                    <span className="icon_list_text">Solutions</span>
                                                                                </Link>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="social_area">
                                                                <ul className="social_icons_block unordered_list" data-text="Follow Us:">
                                                                    <li>
                                                                        <a href="https://www.facebook.com/osyseg" target="_blank" rel="noopener noreferrer">
                                                                            <i className="fa-brands fa-facebook-f"></i>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                                                                            <i className="fa-brands fa-x"></i>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="https://www.linkedin.com/company/osyseg" target="_blank" rel="noopener noreferrer">
                                                                            <i className="fa-brands fa-linkedin-in"></i>
                                                                        </a>
                                                                    </li>
                                                                </ul>

                                                                <p className="career_link m-0">Looking for new career? <Link onClick={ClickHandler} to="/contact">We’re Hiring</Link></p>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3">
                                                            <div className="megamenu_case bg-primary">
                                                                <h3>Computer Software</h3>
                                                                <h4>OSYS Company</h4>
                                                                <img src={cases} alt="Case" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li><Link onClick={ClickHandler} to="/blog">المدونات</Link></li>
                                        <li><Link onClick={ClickHandler} to="/contact">تواصل معنا</Link></li>
                                    </ul>
                                </div>
                            </nav>
                        </div>

                        <div className="col-xl-3 col-lg-3 col-5">
                            <ul className="header_btns_group unordered_list justify-content-end">
                                <li>
                                    <button className="mobile_menu_btn" onClick={() => setMobailState(!mobailActive)} type="button" data-bs-toggle="collapse" data-bs-target="#main_menu_dropdown" aria-expanded="false" aria-label="Toggle navigation">
                                        <i className="far fa-bars"></i>
                                    </button>
                                </li>
                                <li>
                                    <Link onClick={ClickHandler} className="btn btn-outline-light" to="/pricing">
                                        <span className="btn_label" data-text="ابدأ الآن">ابدأ الآن</span>
                                        <span className="btn_icon">
                                            <i className="fa-solid fa-arrow-up-right"></i>
                                        </span>
                                    </Link>
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

    )
}

export default Header;