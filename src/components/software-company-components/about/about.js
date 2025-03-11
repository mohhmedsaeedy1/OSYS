import React from 'react';
import { Link } from 'react-router-dom'
import Project from '../../../api/project'
import Bg from '../../../images/backgrounds/bg_image_2.webp'
import Bg2 from '../../../images/shapes/shape_bg_1.webp'
import Bg3 from '../../../images/shapes/shape_title_under_line.svg'
import about1 from '../../../images/about/about_image_6.webp'
import aIcon1 from '../../../images/avatar/avatar_1.webp'
import aIcon2 from '../../../images/avatar/avatar_2.webp'
import aIcon3 from '../../../images/avatar/avatar_3.webp'
import aIcon4 from '../../../images/icons/icon_global.svg'
import aIcon5 from '../../../images/shapes/shape_line.webp'
import shape1 from '../../../images/shapes/shape_space_2.svg'
import { useTranslation } from 'react-i18next'; // استيراد الترجمة

const About = (props) => {
    const { t } = useTranslation(); // استخدام الترجمة هنا

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="about_and_case_section section_space section_decoration bg-dark" style={{ backgroundImage: `url(${Bg})` }}>
            <div className="container">
                <div className="row align-items-center justify-content-lg-between">
                    <div className="col-lg-7 order-lg-last">
                        <div className="about_image_2">
                            <div className="image_wrap">
                                <img src={about1} alt="OSYS - About" />
                            </div>
                            <div className="about_funfact_info" style={{ backgroundImage: `url(${Bg2})` }}>
                                <div className="customer_count">
                                    <ul className="unordered_list">
                                        <li>
                                            <img src={aIcon1} alt="Customer Avatar" />
                                        </li>
                                        <li>
                                            <img src={aIcon2} alt="Customer Avatar" />
                                        </li>
                                        <li>
                                            <img src={aIcon3} alt="Customer Avatar" />
                                        </li>
                                        <li>
                                            <span>6k+</span>
                                        </li>
                                    </ul>
                                    <p className="mb-0">
                                        {t('happyCustomer')}
                                    </p>
                                </div>
                                <div className="about_funfact_counter">
                                    <div className="funfact_item">
                                        <div className="counter_value">
                                            <span className="odometer" data-count="6">8</span>
                                            <span>K+</span>
                                        </div>
                                        <h3 className="funfact_title mb-0">{t('projectsDone')}</h3>
                                    </div>
                                    <div className="funfact_item">
                                        <div className="counter_value">
                                            <span className="odometer" data-count="100">99</span>
                                            <span>%</span>
                                        </div>
                                        <h3 className="funfact_title mb-0">{t('resultsGuaranteed')}</h3>
                                    </div>
                                </div>
                                <a className="btn btn-primary" href="about.html">
                                    <span className="btn_label" data-text={t('learnMore')}>{t('learnMore')}</span>
                                    <span className="btn_icon">
                                        <i className="fa-solid fa-arrow-up-right"></i>
                                    </span>
                                </a>
                                <div className="icon_globe">
                                    <img src={aIcon4} alt="Icon Globe" />
                                </div>
                            </div>
                            <div className="space_line">
                                <img src={aIcon5} alt="Shape Line" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="about_content">
                            <div className="heading_block mb-0 text-white">
                                <div className="heading_focus_text has_underline d-inline-flex" style={{ backgroundImage: `url(${Bg3})` }}>
                                    {t('aboutUs')}
                                </div>
                                <h2 className="heading_text">
                                    OSYS <mark>{t('missionGoal')}</mark>
                                </h2>
                                <p className="heading_description mb-0">
                                    {t('aboutDescription')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-170">
                    <div className="heading_block text-center text-white">
                        <div className="heading_focus_text has_underline d-inline-flex" style={{ backgroundImage: `url(${Bg3})` }}>
                            {t('caseStudies')}
                        </div>
                        <h2 className="heading_text mb-0">
                            {t('ourLatest')} <mark>{t('case')}</mark> {t('studies')}
                        </h2>
                    </div>

                    <div className="case_studies_wrapper">
                        {Project.slice(6, 9).map((project, prj) => (
                            <div className="case_study_block" key={prj}>
                                <div className="case_study_image">
                                    <img src={project.pImg} alt="OSYS - Cases" />
                                </div>
                                <div className="case_study_content">
                                    <ul className="category_list unordered_list text-uppercase">
                                        <li><a href="portfolio.html">{project.sub}</a></li>
                                    </ul>
                                    <h3 className="case_title">
                                        <Link onClick={ClickHandler} to={`/portfolio_details/${project.slug}`}>{project.title}</Link>
                                    </h3>
                                    <p>
                                        {project.description}
                                    </p>
                                    <ul className="icon_list unordered_list">
                                        <li>
                                            <span className="icon_list_text">
                                                <strong className="text-dark">{t('industry')}:</strong> {project.Industry}
                                            </span>
                                        </li>
                                        <li>
                                            <span className="icon_list_text">
                                                <strong className="text-dark">{t('country')}:</strong> {project.Country}
                                            </span>
                                        </li>
                                    </ul>
                                    <ul className="case_technologies unordered_list" data-text={t('coreTechnologies')}>
                                        <li>
                                            <img src={project.Technologies1} alt="Angular" />
                                        </li>
                                        <li>
                                            <img src={project.Technologies2} alt="Elephent" />
                                        </li>
                                    </ul>
                                    <Link onClick={ClickHandler} to={`/portfolio_details/${project.slug}`} className="btn btn-primary">
                                        <span className="btn_label" data-text={t('readCase')}>{t('readCase')}</span>
                                        <span className="btn_icon">
                                            <i className="fa-solid fa-arrow-up-right"></i>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="btns_group pb-0">
                        <Link onClick={ClickHandler} to="/portfolio" className="btn btn-primary">
                            <span className="btn_label" data-text={t('viewMoreCases')}>{t('viewMoreCases')}</span>
                            <span className="btn_icon">
                                <i className="fa-solid fa-arrow-up-right"></i>
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="decoration_item shape_image_1">
                <img src={shape1} alt="OSYS Shape" />
            </div>
        </section>
    )
}

export default About;
