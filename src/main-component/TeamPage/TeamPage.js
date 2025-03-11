import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';  // استيراد useTranslation
import Header from '../../components/header/Header';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import CtaSection from '../../components/CtaSection/CtaSection';
import tImg from '../../images//team/team_cartoon_image.webp'

const TeamPage = (props) => {
    const { t } = useTranslation(); // استخدام useTranslation للحصول على دالة الترجمة

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <Fragment>
            <Header />
            <main className="page_content about-page">
                <PageTitle pageTitle={t('teamPageTitle')} pagesub={t('teamPageSubtitle')} pageTop={''} />
                <section className="about_section section_space bg-light">
                    <div className="container">
                        <div className="row align-items-center justify-content-lg-between">
                            <div className="col-lg-6 order-lg-last">
                                <div className="team_cartoon_image">
                                    <img src={tImg} alt={t('teamImageAlt')} /> {/* ترجمة النص البديل للصورة */}
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="about_content">
                                    <div className="heading_block">
                                        <div className="heading_focus_text">
                                            <span className="badge bg-secondary text-white">{t('teamBadge')}</span> {/* ترجمة الشارة */}
                                        </div>
                                        <h2 className="heading_text">
                                            {t('meetOurTeam')} {/* ترجمة العنوان */}
                                        </h2>
                                        <p className="heading_description mb-0">
                                            {t('meetTheTeamDescription')} {/* ترجمة النص الوصفي */}
                                        </p>
                                    </div>
                                    <Link onClick={ClickHandler} to={'/contact'} className="btn">
                                        <span className="btn_label" data-text={t('talkToExpert')}>{t('talkToExpert')}</span> {/* ترجمة النص */}
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
