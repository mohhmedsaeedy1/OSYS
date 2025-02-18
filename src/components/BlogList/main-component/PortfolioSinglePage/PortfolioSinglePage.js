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



const PortfolioSinglePage = (props) => {
    const { slug } = useParams()
    const PortfolioDetails = Project.find(item => item.slug === slug)

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
                <PageTitle pageTitle={PortfolioDetails.title} pagesub={'Details 😃'} pageTop={'Products'} />
                <section className="portfolio_details_section section_space bg-light">
                    <div className="container">
                        <h2 className="details_item_title">
                            OSYS: Comprehensive ERP Solutions Transforming Industries
                        </h2>
                        <div className="portfolio_image_wrap" style={styles.firstImage}>
                            <img src={psImg} alt="Portfolio Item" />
                        </div>
                        <br>
                        </br> 
                        <div className="portfolio_image_wrap" style={styles.otherImages}>
                            <img src={pImg7} alt="Portfolio Item" />
                        </div>
                        <br></br>
                        <h2 className="details_item_title">1. Makateb: Transforming Professional Firms with Tailored ERP Solutions</h2>
                        <p className="justify-text">
                            Makateb, an advanced ERP solution crafted by OSYS, is designed to revolutionize the way law firms, accounting practices, and engineering offices operate. By integrating intelligent task management and automation, Makateb empowers firms to streamline workflows, enhance team performance, and achieve operational excellence while maintaining a focus on productivity and efficiency.
                        </p>
                        <p className="mb-0 justify-text">
                            Equipped with features like AI-powered automation, ready-made document templates, and comprehensive financial management, Makateb simplifies complex tasks such as contract renewals, invoicing, and performance tracking. Its seamless cross-departmental integration ensures unified collaboration, making it the go-to solution for professional firms seeking to modernize and optimize their operations.
                        </p>
                          <br></br>  <div className="portfolio_image_wrap" style={styles.otherImages}>
                            <img src={pImg8} alt="Portfolio Item" />
                        </div>
                        <br></br>
                        <h2 className="details_item_title">2. Explore Simply: The Intuitive POS Solution for Retail and SMEs</h2>
                        <p className="justify-text">
                            Simply, an intuitive Point of Sale (POS) system developed by OSYS, redefines the way retail shops and small-to-medium enterprises (SMEs) manage their operations. With a focus on simplicity and efficiency, Simply integrates seamlessly into OSYS's suite of solutions, empowering businesses to optimize daily tasks, enhance profitability, and deliver exceptional service to their customers.
                        </p>
                        <p className="mb-0 justify-text">
                            Equipped with advanced features like real-time sales management, automated inventory tracking, and comprehensive purchase monitoring, Simply ensures businesses operate at peak efficiency. Its web-based and desktop compatibility provides unparalleled flexibility, allowing businesses to manage operations from anywhere. Simply embodies OSYS's commitment to delivering transformative tools tailored for modern enterprises.
                        </p>
                        <br></br>    <div className="portfolio_image_wrap" style={styles.otherImages}>
                            <img src={pImg9} alt="Portfolio Item" />
                        </div>
                        <br></br>
                        <h2 className="details_item_title">3. Innovative Solutions Highlight the Versatility of Farmo ERP
                        </h2>
                        <p className="justify-text">
                            Farmo, a specialized ERP system designed by OSYS, revolutionizes farm management by offering advanced tools for livestock farming and agricultural production. Tailored to meet the needs of diverse farm types, Farmo empowers poultry farms, dairy operations, and crop producers to streamline workflows, monitor resources, and maximize efficiency in daily operations.
                        </p>
                        <p className="mb-0 justify-text">
                            With features like livestock lifecycle tracking, crop cycle planning, and automated expense management, Farmo ensures seamless resource optimization and profitability insights. Its customizable workflows and integrated financial tools enable farms to achieve compliance, productivity, and cost efficiency, embodying OSYS's dedication to delivering innovative solutions for modern agriculture.
                        </p>
                        <br></br>     <div className="portfolio_image_wrap" style={styles.otherImages}>
                            <img src={pImg10} alt="Portfolio Item" />
                        </div>
                        <br></br>
                        <h2 className="details_item_title">4. Cloud Migration and Integration: Masane3 ERP for Manufacturing
                        </h2>
                        <p className="justify-text">
                            Masane3, an advanced ERP solution developed by OSYS, transforms manufacturing operations by streamlining production planning and optimizing workflows. Designed to serve a variety of industries, Masane3 provides manufacturers with tools to enhance operational control, monitor processes, and efficiently manage resources, from raw materials to finished products.
                        </p>
                        <p className="mb-0 justify-text">
                            With key features like detailed production scheduling, BOM and formula management, and precise cost calculation, Masane3 ensures seamless integration of financial, operational, and manufacturing workflows. Its scalability and adaptability make it the ideal solution for factories, assembly lines, and large-scale production facilities aiming for efficiency, accuracy, and profitability.
                        </p>

                        <br></br>   <div className="portfolio_image_wrap" style={styles.otherImages}>
                            <img src={pImg11} alt="Portfolio Item" />
                        </div>
                        <br></br>
                        <h2 className="details_item_title">5. AI Ledger: Revolutionizing Financial Management with Advanced AI Integration
                        </h2>
                        <p className="justify-text">
                            AI Ledger, an intelligent bookkeeping solution powered by OSYS, revolutionizes financial management with advanced AI-driven automation. Designed to support businesses of all sizes, AI Ledger simplifies document handling, transaction processing, and compliance tracking, ensuring real-time accuracy and efficiency across global operations.
                        </p>
                        <p className="mb-0 justify-text">
                            With features like cloud integration, automated financial entry generation, and customized reporting, AI Ledger delivers unparalleled precision and flexibility. It’s the perfect solution for small businesses, multinational organizations, and accounting firms seeking to streamline workflows, reduce manual errors, and enhance client satisfaction.
                        </p>
                        <br></br>   <div className="portfolio_image_wrap" style={styles.otherImages}>
                            <img src={pImg12} alt="Portfolio Item" />
                        </div>
                        <br></br>
                        <h2 className="details_item_title">6. Printo: Revolutionizing Printing Operations with Specialized ERP Solutions
                        </h2>
                        <p className="justify-text">
                            Printo, developed by OSYS, is an advanced ERP solution tailored specifically for printing companies and offices. By integrating all stages of the printing workflow—from customer orders to production and archiving—Printo empowers businesses to achieve operational excellence, ensuring precision and customer satisfaction at every step.
                        </p>
                        <p className="mb-0 justify-text">
                            With key features like automated material calculation, seamless order integration, and real-time production monitoring, Printo streamlines daily operations while providing actionable insights through advanced reporting tools. Its robust file management and archiving system enable professional reprints and maintain compliance standards, making Printo the ultimate solution for modern printing businesses.
                        </p>
                        <br></br>   <div className="portfolio_image_wrap" style={styles.otherImages}>
                            <img src={pImg13} alt="Portfolio Item" />
                        </div>
                        <br></br>
                        <h2 className="details_item_title">7. Transform Business Efficiency and Profitability with OSYS ERP
                        </h2>
                        <p className="justify-text">
                            OSYS ERP is a fully integrated system designed to optimize operations for businesses across various industries. By automating tasks such as sales management, procurement tracking, and financial reporting, OSYS ERP empowers organizations to achieve greater efficiency, ensure compliance, and drive profitability. Its scalable and customizable modules make it adaptable for businesses of any size or complexity.
                        </p>
                        <p className="mb-0 justify-text">
                            With features like real-time inventory tracking, automated tax compliance, and robust human resource management, OSYS ERP streamlines daily operations while providing advanced analytics to support strategic decision-making. Tailored for industries such as retail, manufacturing, and professional services, OSYS ERP ensures seamless integration of workflows, delivering unparalleled operational control and growth potential.
                        </p>
                        <br></br>   <div className="portfolio_image_wrap" style={styles.otherImages}>
                            <img src={pImg14} alt="Portfolio Item" />
                        </div>
                        <br></br>
                        <h2 className="details_item_title">8. Innovative OSYS Solutions for Business Growth
                       </h2>
                        <p className="justify-text">

                            Innovative OSYS Solutions for Business Growth
                            OSYS Software, with its headquarters in Egypt and operations in Saudi Arabia, delivers comprehensive software solutions to businesses of all sizes. From ERP systems to AI-driven tools, OSYS ensures enhanced operational efficiency and compliance with local regulations. These tailored solutions streamline workflows, improve decision-making, and enable businesses to focus on growth and innovation.
                        </p>
                        <p className="mb-0 justify-text">
                            Through its scalable and user-friendly systems, OSYS Software supports industries ranging from manufacturing to agriculture and professional services. The company's expertise in tax compliance systems and integration with cloud platforms makes it a trusted partner in digital transformation.
                        </p>
                        <p className="mb-0">
                            Unlock Efficiency, Unleash Potential
                            With OSYS’s tailored software solutions, your business can experience a seamless blend of innovation and operational excellence.
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
