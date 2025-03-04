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


const AboutUsPage = (props) => {

    const [isOpen, setOpen] = useState(false)
    return (
        <Fragment>
            <Header />
            <main className="page_content about-page">
                <PageTitle pageTitle={'نبذه عنا'} pagesub={' OSYS 😃'} pageTop={''}/>
                <section className="intro_about_section section_space bg-light">
                    <div className="intro_about_content">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="image_wrap">
                                        <img src={aImg} alt="
- About " />
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="image_wrap position-relative">
                                        <img src={aImg2} alt="OSYS - About" />
                                        {/*<button className="video_btn ripple_effect" onClick={() => setOpen(true)}>
                                            <span className="btn_icon">
                                                <i className="fa-solid fa-play"></i>
                                            </span>
                                        </button>*/}
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
                                        عنا
                                        <span className="badge bg-secondary text-white">
                                            🙂</span>
                                    </div>
                                    <h2 className="heading_text mb-0">
                                        شركة OSYS للبرمجيات: الابتكار في التحول الرقمي للأعمال
                                    </h2>
                                </div>
                                <div className="col-lg-6">
                                    <p className="heading_description mb-0 justify-text">
                                        OSYS Software هي شركة تقنية رائدة تقدم حلول برمجية متطورة مصممة لتلبية الاحتياجات الفريدة للشركات عبر مختلف القطاعات. مع مقرها الرئيسي في مصر وحضور راسخ في السعودية، نوفر حلولاً شاملة تشمل أنظمة ERP، تطبيقات مدعومة بالذكاء الاصطناعي، تطوير المواقع الإلكترونية، الاستضافة، وتحليل الأعمال. هدفنا هو تمكين الشركات من تحسين عملياتها، الامتثال للوائح الإقليمية، واحتضان الابتكار. سواء كان ذلك عبر تبسيط العمليات، تحسين اتخاذ القرار، أو تعزيز النمو، OSYS Software هي شريككم الموثوق في التحول الرقمي.
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
