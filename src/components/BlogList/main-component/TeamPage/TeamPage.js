import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'
import Teams from '../../api/team'
import Header from '../../components/header/Header';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import CtaSection from '../../components/CtaSection/CtaSection';
import tImg from '../../images//team/team_cartoon_image.webp'
import sImg1 from '../../images/icons/icon_facebook.svg'
import sImg2 from '../../images/icons/icon_twitter_x.svg'
import sImg3 from '../../images/icons/icon_linkedin.svg'
import sImg4 from '../../images/icons/icon_instagram.svg'

const TeamPage = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <Fragment>
            <Header />
            <main className="page_content about-page">
                <PageTitle pageTitle={'Team Member'} pagesub={'Members 😍'} pageTop={'Team'} />
                <section className="about_section section_space bg-light">
                    <div className="container">
                        <div className="row align-items-center justify-content-lg-between">
                            <div className="col-lg-6 order-lg-last">
                                <div className="team_cartoon_image">
                                    <img src={tImg} alt="Team Cartoon" />
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="about_content">
                                    <div className="heading_block">
                                        <div className="heading_focus_text">
                                            Our Dedicated
                                            <span className="badge bg-secondary text-white">Team 🙂</span>
                                        </div>
                                        <h2 className="heading_text">
                                            Get to Know Our Expert OSYS Team
                                        </h2>
                                        <p className="heading_description mb-0">
                                            Meet the Powerhouse Behind OSYS Software
Get acquainted with the expert team of professionals at OSYS Software, dedicated to transforming the technological landscape. Comprising industry leaders with years of experience, we drive innovation and deliver exceptional IT solutions tailored to your needs. </p>
                                    </div>
                                    <Link onClick={ClickHandler} to={'/contact'} className="btn">
                                        <span className="btn_label" data-text="Talk to an Expart">Talk to an Expart</span>
                                        <span className="btn_icon">
                                            <i className="fa-solid fa-arrow-up-right"></i>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
            </main>
            <CtaSection />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default TeamPage;
