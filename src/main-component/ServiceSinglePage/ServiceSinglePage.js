import React, { Fragment, useState } from 'react';
import Services from '../../api/service'
import { useParams } from 'react-router-dom'
import ModalVideo from 'react-modal-video'
import Header from '../../components/header/Header';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import CtaSection from '../../components/CtaSection/CtaSection';
import ProcessTechnology from '../../components/software-company-components/ProcessTechnology/ProcessTechnology';
import srImg from '../../images/services/service_details_image_1.webp'
import srImg2 from '../../images/services/service_details_image_2.webp'
import srImg3 from '../../images/services/service_details_image_3.webp'
import srImg4 from '../../images/services/service_details_image_4.webp'
import icon from '../../images/icons/icon_check_3.svg'


const ServiceSinglePage = (props) => {

    const { slug } = useParams()

    const ServiceDetails = Services.find(item => item.slug === slug)

    const [isOpen, setOpen] = useState(false)

    return (
        <Fragment>
            <Header />
            <main className="page_content service-single-page">
                <PageTitle pageTitle={ServiceDetails.title} pagesub={'المزيد من خدماتنا 😍'} pageTop={''} />
                <section className="service_details_section section_space bg-light">
                    <div className="container">
                        <div className="details_item_image position-relative">
                            <img src={srImg} alt="Service Details"/>
                            {/*<button className="video_btn ripple_effect" onClick={() => setOpen(true)}>
                                <span className="btn_icon">
                                    <i className="fa-solid fa-play"></i>
                                </span>
                            </button>*/}
                        </div>
                        <h2 className="details_item_title">{ServiceDetails.title}</h2>
                        <p>
                            {ServiceDetails.title} هي العمود الفقري للأعمال الحديثة، حيث تشكل الأساس الذي تعتمد عليه جميع العمليات الرقمية.
                            في وكالتنا لحلول تكنولوجيا المعلومات، نحن متخصصون في تصميم بنى تحتية قوية وموثوقة للشبكات،
                            مصممة خصيصًا لتلبية الاحتياجات الفريدة لعملائنا. بدءًا من الشركات الصغيرة وحتى المؤسسات الكبيرة،
                            ندرك الأهمية الحيوية للبنية التحتية الشبكية المصممة جيدًا في تعزيز الكفاءة والأمان وقابلية التوسع.
                            يعمل فريقنا من المهنيين ذوي الخبرة بشكل وثيق مع العملاء.
                        </p>

                        <p>
                            نتبع نهجًا شاملاً في تصميم الشبكات، مع مراعاة عوامل مثل متطلبات النطاق الترددي،
                            وبروتوكولات الأمان، وقابلية التوسع، وإمكانيات النمو المستقبلي.
                            من خلال الاستفادة من أفضل الممارسات الصناعية وأحدث التقنيات،
                        </p>

                        <ProcessTechnology />

                        <h3 className="details_item_info_title">نتائج الخدمات</h3>

                        <p className="mb-4">
                            فيما يلي ست نقاط رئيسية يمكن ربطها بمعرض التحول الرقمي،
                            وهي خدمات مهندس أنظمة رقمية عالمي يساعد شركات Fortune 500 في جدول أعمالها الابتكاري:
                        </p>
                        <div className="row mb-4">
                            <div className="col-lg-6">
                                <ul className="icon_list unordered_list_block">
                                    <li>
                                        <span className="icon_list_icon">
                                            <img src={icon} alt="رمز التحقق SVG" />
                                        </span>
                                        <span className="icon_list_text">
                                            القابلية للتوسع والمرونة
                                        </span>
                                    </li>
                                    <li>
                                        <span className="icon_list_icon">
                                            <img src={icon} alt="رمز التحقق SVG" />
                                        </span>
                                        <span className="icon_list_text">
                                            الأمان والامتثال
                                        </span>
                                    </li>
                                    <li>
                                        <span className="icon_list_icon">
                                            <img src={icon} alt="رمز التحقق SVG" />
                                        </span>
                                        <span className="icon_list_text">
                                            تحسين الأداء
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <ul className="icon_list unordered_list_block">
                                    <li>
                                        <span className="icon_list_icon">
                                            <img src={icon} alt="رمز التحقق SVG" />
                                        </span>
                                        <span className="icon_list_text">
                                            تجربة المستخدم
                                        </span>
                                    </li>
                                    <li>
                                        <span className="icon_list_icon">
                                            <img src={icon} alt="رمز التحقق SVG" />
                                        </span>
                                        <span className="icon_list_text">
                                            الأمان والامتثال
                                        </span>
                                    </li>
                                    <li>
                                        <span className="icon_list_icon">
                                            <img src={icon} alt="رمز التحقق SVG" />
                                        </span>
                                        <span className="icon_list_text">
                                            التدريب والتعليم
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="details_item_image m-0">
                                    <img src={srImg2} alt="Service Details"/>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="details_item_image m-0">
                                    <img src={srImg3} alt="Service Details"/>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="details_item_image m-0">
                                    <img src={srImg4} alt="Service Details"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <CtaSection />
            <Footer />
            <Scrollbar />
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="7e90gBu4pas" onClose={() => setOpen(false)} />
        </Fragment>
    )
};
export default ServiceSinglePage;