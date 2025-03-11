import React, { Fragment } from 'react';
import Header from '../../components/header/Header';
import Project from '../../api/project';
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import CtaSection from '../../components/CtaSection/CtaSection';
import psImg from '../../images/portfolio/portfolio_details_image_1.webp'
import icon from '../../images/icons/icon_check_3.svg'
import pImg7 from '../../images/portfolio/portfolio_item_image_4.webp';
import pImg8 from '../../images/portfolio/portfolio_item_image_5.webp';
import pImg9 from '../../images/portfolio/portfolio_item_image_6.webp';
import pImg10 from '../../images/portfolio/portfolio_item_image_7.webp';
import pImg11 from '../../images/portfolio/portfolio_item_image_8.webp';
import pImg12 from '../../images/portfolio/portfolio_item_image_9.webp';
import pImg13 from '../../images/portfolio/portfolio_item_image_10.webp';
import pImg14 from '../../images/portfolio/portfolio_item_image_11.webp';
import { useTranslation } from 'react-i18next'; // استيراد الترجمة

const PortfolioSinglePage = (props) => {
    const { slug } = useParams()
    const PortfolioDetails = Project.find(item => item.slug === slug)
    const { t } = useTranslation(); // استخدام الترجمة

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    const styles = {
        firstImage: {
            width: '100%',
            height: 'auto',
        },
        otherImages: {
            width: '80%',
            height: 'auto',
            maxWidth: '350px',
            display: 'block',
            margin: '0 auto',
        },
    };
    return (
        <Fragment>
            <Header />
            <main className="page_content about-page">
                <PageTitle pageTitle={PortfolioDetails.title} pagesub={t('portfolioSub')} pageTop={t('portfolioTop')} />
                <section className="portfolio_details_section section_space bg-light">
                    <div className="container">
                        <h2 className="details_item_title">
                            {t('osysSolutionsTitle')}
                        </h2>
                        <div className="portfolio_image_wrap" style={styles.firstImage}>
                            <img src={psImg} alt="Portfolio Item" />
                        </div>
                        <br />
                        <div className="portfolio_image_wrap" style={styles.otherImages}>
                            <img src={pImg7} alt="Portfolio Item" />
                        </div>
                        <br />
                        <h2 className="details_item_title">{t('officeTitle')}</h2>
                        <p className="justify-text">
                            {t('officeDescription')}
                        </p>
                        <p className="mb-0 justify-text">
                            {t('officeIntegrationDescription')}
                        </p>
                        <br />
                        <div className="portfolio_image_wrap" style={styles.otherImages}>
                            <img src={pImg8} alt="Portfolio Item" />
                        </div>
                        <br />
                        <h2 className="details_item_title">{t('simplyTitle')}</h2>
                        <p className="justify-text">
                            {t('simplyDescription')}
                        </p>
                        <p className="mb-0 justify-text">
                            {t('simplyIntegrationDescription')}
                        </p>
                        <br />
                        <div className="portfolio_image_wrap" style={styles.otherImages}>
                            <img src={pImg9} alt="Portfolio Item" />
                        </div>
                        <br />
                        <h2 className="details_item_title">{t('farmoTitle')}</h2>
                        <p className="justify-text">
                            {t('farmoDescription')}
                        </p>
                        <p className="mb-0 justify-text">
                            {t('farmoIntegrationDescription')}
                        </p>
                        <br />
                        <div className="portfolio_image_wrap" style={styles.otherImages}>
                            <img src={pImg10} alt="Portfolio Item" />
                        </div>
                        <br />
                        <h2 className="details_item_title">{t('masane3Title')}</h2>
                        <p className="justify-text">
                            {t('masane3Description')}
                        </p>
                        <p className="mb-0 justify-text">
                            {t('masane3IntegrationDescription')}
                        </p>
                        <br />
                        <div className="portfolio_image_wrap" style={styles.otherImages}>
                            <img src={pImg11} alt="Portfolio Item" />
                        </div>
                        <br />
                        <h2 className="details_item_title">{t('aiLedgerTitle')}</h2>
                        <p className="justify-text">
                            {t('aiLedgerDescription')}
                        </p>
                        <p className="mb-0 justify-text">
                            {t('aiLedgerIntegrationDescription')}
                        </p>
                        <br />
                        <div className="portfolio_image_wrap" style={styles.otherImages}>
                            <img src={pImg12} alt="Portfolio Item" />
                        </div>
                        <br />
                        <h2 className="details_item_title">{t('printoTitle')}</h2>
                        <p className="justify-text">
                            {t('printoDescription')}
                        </p>
                        <p className="mb-0 justify-text">
                            {t('printoIntegrationDescription')}
                        </p>
                        <br />
                        <div className="portfolio_image_wrap" style={styles.otherImages}>
                            <img src={pImg13} alt="Portfolio Item" />
                        </div>
                        <br />
                        <h2 className="details_item_title">{t('osysErpTitle')}</h2>
                        <p className="justify-text">
                            {t('osysErpDescription')}
                        </p>
                        <p className="mb-0 justify-text">
                            {t('osysErpIntegrationDescription')}
                        </p>
                        <br />
                        <div className="portfolio_image_wrap" style={styles.otherImages}>
                            <img src={pImg14} alt="Portfolio Item" />
                        </div>
                        <br />
                        <h2 className="details_item_title">{t('osysBusinessSolutionsTitle')}</h2>
                        <p className="justify-text">
                            {t('osysBusinessSolutionsDescription')}
                        </p>
                        <p className="mb-0 justify-text">
                            {t('osysBusinessSolutionsDetails')}
                        </p>
                        {/*  <h2 className="details_item_title">OSYS Cloud Migration and Integration Projectt</h2>
                        <p>
                            The "Cloud Migration and Integration Project" is a cornerstone in OSYS's mission to empower businesses through digital transformation. By transitioning from conventional on-premises systems to cloud-based infrastructure, this project opens doors to enhanced scalability, flexibility, security, and cost efficiency. Our comprehensive approach ensures seamless migration, reducing operational disruptions. From evaluating existing environments to preparing infrastructure and migrating data and applications, OSYS delivers a meticulous and efficient transformation process tailored to client needs.
 </p>
                        <p className="mb-0">
                            Empowering Success Through Cloud Migration
Providing comprehensive training and support, we ensure every aspect of the cloud migration journey is meticulously handled. With OSYS Software's expertise and dedication, we enable our clients to harness the full potential of cloud computing, fostering innovation and sustainable growth. </p>
                        <hr />
                        <ul className="portfolio_details_info_list icon_list unordered_list justify-content-lg-between mb-5">
                            <li>
                                <span className="icon_list_text">
                                    <strong className="text-dark text-uppercase">Services:</strong>
                                    Cloud Migration
                                </span>
                            </li>
                            <li>
                                <span className="icon_list_text">
                                    <strong className="text-dark text-uppercase">Client:</strong>
                                    OSYS
                                </span>
                            </li>
                            <li>
                                <span className="icon_list_text">
                                    <strong className="text-dark text-uppercase">Location:</strong>
                                    10th of Ramadan City, Egypt
                                </span>
                            </li>
                            <li>
                                <span className="icon_list_text">
                                    <strong className="text-dark text-uppercase">Completed Date:</strong>
                                    2-12-2024
                                </span>
                            </li>
                        </ul>

                        <h3 className="details_item_info_title pt-4">Project Requirement</h3>
                        <p>
                           n this phase of the Cloud Migration and Integration project, our primary focus is implementing advanced data migration strategies to guarantee a seamless transition of data from traditional on-premises systems to secure and scalable cloud-based storage solutions. By utilizing cutting-edge methodologies and tools aligned with industry standards, we ensure data integrity, accuracy, and efficiency throughout the migration process. </p>
                        <div className="row mb-4">
                            <div className="col-lg-5">
                                <ul className="icon_list unordered_list_block">
                                    <li>
                                        <span className="icon_list_icon">
                                            <img src={icon} alt="Check SVG Icon" />
                                        </span>
                                        <span className="icon_list_text">
                                            Comprehensive Business Analysis
                                        </span>
                                    </li>
                                    <li>
                                        <span className="icon_list_icon">
                                            <img src={icon} alt="Check SVG Icon" />
                                        </span>
                                        <span className="icon_list_text">
                                            Tailored ERP System Deployment
                                        </span>
                                    </li>
                                    <li>
                                        <span className="icon_list_icon">
                                            <img src={icon} alt="Check SVG Icon" />
                                        </span>
                                        <span className="icon_list_text">
                                            Seamless Data Migration Integration
                                        </span>
                                    </li>
                                    <li>
                                        <span className="icon_list_icon">
                                            <img src={icon} alt="Check SVG Icon" />
                                        </span>
                                        <span className="icon_list_text">
                                            Advanced Compliance Features Implementation
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-5">
                                <ul className="icon_list unordered_list_block">
                                    <li>
                                        <span className="icon_list_icon">
                                            <img src={icon} alt="Check SVG Icon" />
                                        </span>
                                        <span className="icon_list_text">
                                            AI-Driven Application Integration
                                        </span>
                                    </li>
                                    <li>
                                        <span className="icon_list_icon">
                                            <img src={icon} alt="Check SVG Icon" />
                                        </span>
                                        <span className="icon_list_text">
                                            User Training and Onboarding
                                        </span>
                                    </li>
                                    <li>
                                        <span className="icon_list_icon">
                                            <img src={icon} alt="Check SVG Icon" />
                                        </span>
                                        <span className="icon_list_text">
                                            Detailed Reporting and Analytics Setup
                                        </span>
                                    </li>
                                    <li>
                                        <span className="icon_list_icon">
                                            <img src={icon} alt="Check SVG Icon" />
                                        </span>
                                        <span className="icon_list_text">
                                            Ongoing System Support and Maintenance
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <h3 className="details_item_info_title pt-4">Solution & Result</h3>
                        <p>
                            The effective implementation of advanced data migration techniques enabled the seamless transition from traditional systems to cloud-based solutions. Throughout the process, data accuracy, security, and adherence to regional compliance standards were meticulously upheld. Comprehensive testing and validation ensured the reliability and completeness of migrated data, minimizing operational downtime and mitigating risks of data discrepancies.
 </p>
                        <p>
                            To achieve successful data migration, our solution includes a comprehensive approach that encompasses meticulous planning, advanced techniques, and thorough testing. We leverage industry-leading tools and expertise.

                            Aligned with the OSYS profile:

Achieving successful data migration involves a systematic approach that integrates detailed planning, cutting-edge methodologies, and rigorous validation processes. By utilizing top-tier tools and expert insights, we ensure the seamless and secure transition of data, maintaining accuracy and compliance at every stage.  </p>*/}

                        {/*  <h3 className="details_item_info_title pt-5 mb-4">Our Similar Projects</h3>
                        <div className="row">
                            {Project.slice(10, 12).map((project, prj) => (
                                <div className="col-lg-6" key={prj}>
                                    <div className="portfolio_block portfolio_layout_2">
                                        <div className="portfolio_image">
                                            <Link onClick={ClickHandler} className="portfolio_image_wrap bg-light" to={`/portfolio_details/${project.slug}`}>
                                                <img src={project.pImg} alt="Mobile App Design" />
                                            </Link>
                                        </div>
                                        <div className="portfolio_content">
                                            <h3 className="portfolio_title">
                                                <Link onClick={ClickHandler} to={`/portfolio_details/${project.slug}`}>
                                                    {project.title}
                                                </Link>
                                            </h3>
                                            <ul className="category_list unordered_list">
                                                <li><Link onClick={ClickHandler} to={`/portfolio_details/${project.slug}`}><i className="fa-solid fa-tags"></i> {project.thumb1}</Link></li>
                                                <li><Link onClick={ClickHandler} to={`/portfolio_details/${project.slug}`}><i className="fa-solid fa-building"></i> {project.thumb2}</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>*/}
                    </div>
                </section>
                <CtaSection />
            </main>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};

export default PortfolioSinglePage;
