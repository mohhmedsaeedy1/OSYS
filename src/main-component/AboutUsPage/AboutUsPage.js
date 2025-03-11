import React, { Fragment, useState } from 'react';
import Header from '../../components/header/Header';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import aImg from '../../images/about/about_image_3.webp'
import aImg2 from '../../images/about/about_image_4.webp'
import ModalVideo from 'react-modal-video'
import PolicySection from './Policy';
import WhyUs from './WhyUs';
import FeaturesSection from '../../components/FeaturesSection/FeaturesSection';
import TeamSection from '../../components/TeamSection/TeamSection';
import CtaSection from '../../components/CtaSection/CtaSection';
import { useTranslation } from 'react-i18next'; // استيراد الترجمة

const AboutUsPage = (props) => {
    const { t } = useTranslation();  // تفعيل الترجمة باستخدام useTranslation
    const [isOpen, setOpen] = useState(false);

    return (
        <Fragment>
            <Header />
            <main className="page_content about-page">
                <PageTitle pageTitle={t('about_us_title')} pagesub={t('about_us_subtitle')} pageTop={''} />
                <section className="intro_about_section section_space bg-light">
                    <div className="intro_about_content">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="image_wrap">
                                        <img src={aImg} alt={t('about_img_alt')} />
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="image_wrap position-relative">
                                        <img src={aImg2} alt={t('about_img2_alt')} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="heading_block mb-0">
                            <div className="row justify-content-lg-between">
                                <div className="col-lg-4">
                                    <div className="heading_focus_text">
                                        {t('about_us_focus_text')}
                                    </div>
                                    <h2 className="heading_text mb-0">
                                        {t('about_us_heading')}
                                    </h2>
                                </div>
                                <div className="col-lg-6">
                                    <p className="heading_description mb-0 justify-text">
                                        {t('about_us_description')}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <PolicySection />
                <FeaturesSection />
                <TeamSection />
                <WhyUs />
                <CtaSection />
            </main>
            <Footer />
            <Scrollbar />
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="7e90gBu4pas" onClose={() => setOpen(false)} />
        </Fragment>
    )
};

export default AboutUsPage;
