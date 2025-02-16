import React, { Fragment } from 'react';
import Header from '../../components/header/Header';
import { Link } from "react-router-dom";
import Teams from '../../api/team'
import CountUp from 'react-countup';
import { useParams } from 'react-router-dom';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import CtaSection from '../../components/CtaSection/CtaSection';
import sImg1 from '../../images/icons/icon_facebook.svg'
import sImg2 from '../../images/icons/icon_twitter_x.svg'
import sImg3 from '../../images/icons/icon_linkedin.svg'
import sImg4 from '../../images/icons/icon_instagram.svg'

const TeamSinglePage = (props) => {
    const { slug } = useParams()

    const TeamDetails = Teams.find(item => item.slug === slug)

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <Fragment>
            <Header />
            <main className="page_content about-page">
                <PageTitle pageTitle={TeamDetails.name} pagesub={'  ethics😍'} pageTop={'Code of'} />
                <section className="team_details_section section_space bg-light">
                    <div className="container">
                        {/*  <div className="team_member_details_card">
                            <div className="team_member_image">
                                <img src={TeamDetails.tImg} alt="Team Member"/>
                            </div>
                            <div className="team_member_content">
                                <h2 className="team_member_name">{TeamDetails.name}</h2>
                                <table className="info_table">
                                    <tr>
                                        <td><strong>Responsibility:</strong></td>
                                        <td>{TeamDetails.title}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Experience:</strong></td>
                                        <td>7 Years</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Email:</strong></td>
                                        <td>osyseg@gmail.com</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Phone:</strong></td>
                                        <td>+201553250072</td>
                                    </tr>
                                </table>

                                <div className="social_wrapper">
                                    <h3 className="social_title">Social Media</h3>
                                    <ul className="social_icons_block unordered_list">
                                        <li>
                                            <a href="https://www.facebook.com/osyseg" target="_blank" rel="noopener noreferrer">
                                                <img src={sImg1} alt="Icon Facebook" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                                <img src={sImg2} alt="Icon Twitter X" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/company/osyseg" target="_blank" rel="noopener noreferrer">
                                                <img src={sImg3} alt="Icon Linkedin" />
                                            </a>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        </div>*/}

                        <h3 className="details_item_info_title">Commitment to Ethical Excellence</h3>
                        <div class="justify-text">
                            At Osys Software, our journey toward becoming a leading tech firm is grounded in a commitment to ethical excellence. We deliver cutting-edge, AI-powered ERP systems, advanced analytics tools, and bespoke software solutions tailored to industries such as retail, manufacturing, agriculture, and legal services, while maintaining the highest ethical standards.

                            Our expertise in process optimization and seamless integration with compliance systems in Egypt and Saudi Arabia ensures not only operational excellence but also strict adherence to regulatory and ethical guidelines. We are dedicated to creating scalable, intuitive designs that prioritize client-centric innovation without compromising on transparency and integrity.

                            Real-time reporting insights empower our clients to make informed, strategic decisions, reflecting our values of honesty and accountability. By leveraging global scalability and specialized ERP tools, we enable businesses to achieve sustainable growth with fairness and respect for all stakeholders.

                            Our leadership fosters a collaborative culture where ethical practices are at the core, empowering a skilled workforce to deliver world-class technology solutions responsibly. Osys Software’s unwavering focus on quality, innovation, and client satisfaction ensures we remain at the forefront of the tech industry, transforming challenges into ethically driven opportunities for success.
                        </div>

                        {/*  <div className="row mb-5">
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="funfact_block text-center">
                                    <div className="counter_value">
                                        <span className="odometer" data-count="98"><CountUp end={98} enableScrollSpy /></span>
                                        <span>%</span>
                                    </div>
                                    <h3 className="funfact_title mb-0">Product Development</h3>
                                    <div className="bottom_line bg-primary"></div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="funfact_block text-center">
                                    <div className="counter_value">
                                        <span className="odometer" data-count="88"><CountUp end={88} enableScrollSpy /></span>
                                        <span>%</span>
                                    </div>
                                    <h3 className="funfact_title mb-0">Problem-Solving</h3>
                                    <div className="bottom_line bg-danger"></div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="funfact_block text-center">
                                    <div className="counter_value">
                                        <span className="odometer" data-count="99"><CountUp end={99} enableScrollSpy /></span>
                                        <span>%</span>
                                    </div>
                                    <h3 className="funfact_title mb-0">Communication Skills</h3>
                                    <div className="bottom_line bg-secondary"></div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="funfact_block text-center">
                                    <div className="counter_value">
                                        <span className="odometer" data-count="77"><CountUp end={77} enableScrollSpy /></span>
                                        <span>%</span>
                                    </div>
                                    <h3 className="funfact_title mb-0">Passion for Helping</h3>
                                    <div className="bottom_line bg-warning"></div>
                                </div>
                            </div>
                        </div>
                        */}
                        {/*  <h3 className="details_item_info_title">Educational Experience</h3>
                        <p>Armed with a Bachelor's degree in Computer Science, specializing in data structures, algorithms, and networks, and a Master's in Information Technology Management, I bring a solid foundation in software engineering and IT systems.
                        </p>*/}
                        <br></br>
                        <h2 className="mb-2">Ethics We Uphold at Osys Software:</h2>
                        <ul className="icon_list unordered_list_block justify-list">
                            <li>
                                <span className="icon_list_icon">
                                    <i className="fa-solid fa-circle fa-fw"></i>
                                </span>
                                <span className="icon_list_text">
                                    Innovation with Responsibility: Driving advancements while considering ethics.
                                </span>
                            </li>
                            <li>
                                <span className="icon_list_icon">
                                    <i className="fa-solid fa-circle fa-fw"></i>
                                </span>
                                <span className="icon_list_text">
                                    Customer-Centric Approach: Prioritizing client needs without compromising .
                                </span>
                            </li>
                            <li>
                                <span className="icon_list_icon">
                                    <i className="fa-solid fa-circle fa-fw"></i>
                                </span>
                                <span className="icon_list_text">
                                    Community Engagement: Contributing positively to communities we serve.
                                </span>
                            </li>
                            <li>
                                <span className="icon_list_icon">
                                    <i className="fa-solid fa-circle fa-fw"></i>
                                </span>
                                <span className="icon_list_text">
                                    Quality: Delivering solutions that meet the highest standards of excellence.
                                </span>
                            </li>
                            <li>
                                <span className="icon_list_icon">
                                    <i className="fa-solid fa-circle fa-fw"></i>
                                </span>
                                <span className="icon_list_text">
                                    Confidentiality: Safeguarding client and company data with utmost care.
                                </span>
                            </li>
                            <li>
                                <span className="icon_list_icon">
                                    <i className="fa-solid fa-circle fa-fw"></i>
                                </span>
                                <span className="icon_list_text">
                                    Collaboration: Encouraging teamwork built on trust and shared values.
                                </span>
                            </li>
                            <li>
                                <span className="icon_list_icon">
                                    <i className="fa-solid fa-circle fa-fw"></i>
                                </span>
                                <span className="icon_list_text">
                                    Sustainability: Committing to environmentally responsible practices.
                                </span>
                            </li>
                            <li>
                                <span className="icon_list_icon">
                                    <i className="fa-solid fa-circle fa-fw"></i>
                                </span>
                                <span className="icon_list_text">
                                    Respect: Promoting a culture of mutual respect and understanding.
                                </span>
                            </li>
                            <li>
                                <span className="icon_list_icon">
                                    <i className="fa-solid fa-circle fa-fw"></i>
                                </span>
                                <span className="icon_list_text">
                                    Accountability: Accept and own our decisions and responsibilities.
                                </span>
                            </li>
                            <li>
                                <span className="icon_list_icon">
                                    <i className="fa-solid fa-circle fa-fw"></i>
                                </span>
                                <span className="icon_list_text">
                                    Integrity: Conduct all business dealings with honesty and clarity.
                                </span>
                            </li>
                            <li>
                                <span className="icon_list_icon">
                                    <i className="fa-solid fa-circle fa-fw"></i>
                                </span>
                                <span className="icon_list_text">
                                    Fairness: Ensuring equitable treatment of all clients, employees.
                                </span>
                            </li>
                            <li>
                                <span className="icon_list_icon">
                                    <i className="fa-solid fa-circle fa-fw"></i>
                                </span>
                                <span className="icon_list_text">
                                    Compliance: Adhering to all applicable laws and regulations.
                                </span>
                            </li>
                        </ul>
                    </div>
                </section>
                <CtaSection />
            </main>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default TeamSinglePage;