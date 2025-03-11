import React, { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
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
    const { slug } = useParams();
    const { t } = useTranslation(); // استخدام الترجمة

    const TeamDetails = Teams().find(item => item.slug === slug);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <Fragment>
            <Header />
            <main className="page_content about-page">
                <PageTitle pageTitle={TeamDetails.name} pagesub={t('teamValues.moralCharter')} pageTop={''} />
                <section className="team_details_section section_space bg-light">
                    <div className="container">

                        <br />
                        <h2 className="mb-2">{t('teamValues.moralCommitmentTitle')}</h2>
                        <div className="justify-text">
                            {t('teamValues.moralCommitment')}
                        </div>

                        <br />
                        <h2 className="mb-2">{t('teamValues.ethicalValuesTitle')}</h2>
                        <ul className="icon_list unordered_list_block justify-list">
                            <li>
                                <span className="icon_list_icon">
                                    <i className="fa-solid fa-circle fa-fw"></i>
                                </span>
                                <span className="icon_list_text">
                                    {t('teamValues.responsibleInnovation')}
                                </span>
                            </li>
                            <li>
                                <span className="icon_list_icon">
                                    <i className="fa-solid fa-circle fa-fw"></i>
                                </span>
                                <span className="icon_list_text">
                                    {t('teamValues.customerFocus')}
                                </span>
                            </li>
                            <li>
                                <span className="icon_list_icon">
                                    <i className="fa-solid fa-circle fa-fw"></i>
                                </span>
                                <span className="icon_list_text">
                                    {t('teamValues.communityEngagement')}
                                </span>
                            </li>
                            <li>
                                <span className="icon_list_icon">
                                    <i className="fa-solid fa-circle fa-fw"></i>
                                </span>
                                <span className="icon_list_text">
                                    {t('teamValues.quality')}
                                </span>
                            </li>
                            <li>
                                <span className="icon_list_icon">
                                    <i className="fa-solid fa-circle fa-fw"></i>
                                </span>
                                <span className="icon_list_text">
                                    {t('teamValues.confidentiality')}
                                </span>
                            </li>
                            <li>
                                <span className="icon_list_icon">
                                    <i className="fa-solid fa-circle fa-fw"></i>
                                </span>
                                <span className="icon_list_text">
                                    {t('teamValues.collaboration')}
                                </span>
                            </li>
                            <li>
                                <span className="icon_list_icon">
                                    <i className="fa-solid fa-circle fa-fw"></i>
                                </span>
                                <span className="icon_list_text">
                                    {t('teamValues.sustainability')}
                                </span>
                            </li>
                            <li>
                                <span className="icon_list_icon">
                                    <i className="fa-solid fa-circle fa-fw"></i>
                                </span>
                                <span className="icon_list_text">
                                    {t('teamValues.respect')}
                                </span>
                            </li>
                            <li>
                                <span className="icon_list_icon">
                                    <i className="fa-solid fa-circle fa-fw"></i>
                                </span>
                                <span className="icon_list_text">
                                    {t('teamValues.accountability')}
                                </span>
                            </li>
                            <li>
                                <span className="icon_list_icon">
                                    <i className="fa-solid fa-circle fa-fw"></i>
                                </span>
                                <span className="icon_list_text">
                                    {t('teamValues.integrity')}
                                </span>
                            </li>
                            <li>
                                <span className="icon_list_icon">
                                    <i className="fa-solid fa-circle fa-fw"></i>
                                </span>
                                <span className="icon_list_text">
                                    {t('teamValues.fairness')}
                                </span>
                            </li>
                            <li>
                                <span className="icon_list_icon">
                                    <i className="fa-solid fa-circle fa-fw"></i>
                                </span>
                                <span className="icon_list_text">
                                    {t('teamValues.compliance')}
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
