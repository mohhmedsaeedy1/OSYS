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
                <PageTitle pageTitle={PortfolioDetails.title} pagesub={'تفاصيل منتجاتنا 😃'} pageTop={'تعرف على منجاتنا اكثر'} />
                <section className="portfolio_details_section section_space bg-light">
                    <div className="container">
                        <h2 className="details_item_title">
                            تقدم OSYS: حلول ERP شاملة تحول الصناعات
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
                        <h2 className="details_item_title">1. مكاتب: تحويل الشركات المهنية من خلال حلول ERP المخصصة</h2>
                        <p className="justify-text">
                            مكاتب هو حل ERP متقدم تم تطويره بواسطة OSYS، مصمم لإحداث ثورة في طريقة عمل مكاتب المحاماة، ومكاتب المحاسبة، والمكاتب الهندسية. من خلال دمج إدارة المهام الذكية والأتمتة، يمكّن مكاتب الشركات من تبسيط سير العمل، وتعزيز أداء الفريق، وتحقيق التميز التشغيلي مع الحفاظ على التركيز على الإنتاجية والكفاءة.
                        </p>
                        <p className="mb-0 justify-text">
                            مزود بميزات مثل التحكم لتلقائى المدعوم بالذكاء الاصطناعي، وقوالب المستندات الجاهزة، والإدارة المالية الشاملة، يعمل مكاتب على تبسيط المهام المعقدة مثل تجديد العقود، وإصدار الفواتير، وتتبع الأداء. يضمن تكامله السلس بين الأقسام تحقيق تعاون موحد، مما يجعله الحل الأمثل للشركات المهنية التي تسعى إلى التحديث وتحسين عملياتها.
                        </p>
                        <br></br>  <div className="portfolio_image_wrap" style={styles.otherImages}>
                            <img src={pImg8} alt="Portfolio Item" />
                        </div>
                        <br></br>
                        <h2 className="details_item_title">2. استكشف Simply: الحل الذكي لنقاط البيع لتجارة التجزئة والشركات الصغيرة والمتوسطة</h2>
                        <p className="justify-text">
                            Simply، نظام نقاط بيع (POS) بديهي تم تطويره بواسطة OSYS، يعيد تعريف كيفية إدارة متاجر التجزئة والشركات الصغيرة والمتوسطة (SMEs) لعملياتها. بفضل تركيزه على البساطة والكفاءة، يندمج Simply بسلاسة مع مجموعة حلول OSYS، مما يمكّن الشركات من تحسين المهام اليومية، وتعزيز الربحية، وتقديم خدمة استثنائية لعملائها.
                        </p>
                        <p className="mb-0 justify-text">
                            مزود بميزات متقدمة مثل إدارة المبيعات في الوقت الفعلي، وتتبع المخزون المؤتمت، ومراقبة المشتريات الشاملة، يضمن Simply للشركات العمل بأقصى درجات الكفاءة. يتيح توافقه مع الويب وأجهزة سطح المكتب مرونة لا مثيل لها، مما يسمح للشركات بإدارة عملياتها من أي مكان. يجسد Simply التزام OSYS بتقديم أدوات تحويلية مصممة خصيصًا للمؤسسات الحديثة.
                        </p>
                        <br></br>    <div className="portfolio_image_wrap" style={styles.otherImages}>
                            <img src={pImg9} alt="Portfolio Item" />
                        </div>
                        <br></br>
                        <h2 className="details_item_title">3. الحلول المبتكرة تسلط الضوء على تعددية استخدامات Farmo ERP</h2>
                        <p className="justify-text">
                            Farmo، نظام ERP متخصص تم تطويره بواسطة OSYS، يُحدث ثورة في إدارة المزارع من خلال تقديم أدوات متقدمة لقطاع تربية المواشي والإنتاج الزراعي. مصمم لتلبية احتياجات مختلف أنواع المزارع، يمكّن Farmo مزارع الدواجن، والألبان، ومنتجي المحاصيل من تبسيط سير العمل، ومراقبة الموارد، وتحقيق أقصى كفاءة في العمليات اليومية.
                        </p>
                        <p className="mb-0 justify-text">
                            بفضل ميزات مثل تتبع دورة حياة المواشي، وتخطيط دورة المحاصيل، والإدارة المؤتمتة للنفقات، يضمن Farmo تحسين الموارد بسلاسة وتوفير رؤى دقيقة حول الربحية. تتيح سير العمل القابلة للتخصيص والأدوات المالية المتكاملة للمزارع تحقيق الامتثال، وزيادة الإنتاجية، وتحسين الكفاءة التشغيلية، مما يعكس التزام OSYS بتقديم حلول مبتكرة للزراعة الحديثة.
                        </p>
                        <br></br>     <div className="portfolio_image_wrap" style={styles.otherImages}>
                            <img src={pImg10} alt="Portfolio Item" />
                        </div>
                        <br></br>
                        <h2 className="details_item_title">4. ترحيل البيانات إلى السحابة والتكامل: Masane3 ERP لحلول التصنيع</h2>
                        <p className="justify-text">
                            Masane3، حل ERP متقدم تم تطويره بواسطة OSYS، يُحدث تحولًا في عمليات التصنيع من خلال تبسيط تخطيط الإنتاج وتحسين سير العمل. مصمم لخدمة مختلف الصناعات، يزوّد Masane3 المصنّعين بأدوات تعزز التحكم التشغيلي، ومراقبة العمليات، وإدارة الموارد بكفاءة، بدءًا من المواد الخام وحتى المنتجات النهائية.
                        </p>
                        <p className="mb-0 justify-text">
                            بفضل ميزات رئيسية مثل جدولة الإنتاج التفصيلية، وإدارة قوائم المواد (BOM) والصيغ، وحساب التكاليف بدقة، يضمن Masane3 تكاملاً سلسًا بين العمليات المالية والتشغيلية والتصنيعية. تتيح مرونته وقابليته للتوسع استخدامه كحل مثالي للمصانع وخطوط الإنتاج والمنشآت الصناعية واسعة النطاق، مما يساعدها على تحقيق الكفاءة، والدقة، وزيادة الربحية.
                        </p>

                        <br></br>   <div className="portfolio_image_wrap" style={styles.otherImages}>
                            <img src={pImg11} alt="Portfolio Item" />
                        </div>
                        <br></br>
                        <h2 className="details_item_title">5. AI Ledger: ثورة في الإدارة المالية من خلال دمج الذكاء الاصطناعي المتقدم</h2>
                        <p className="justify-text">
                            AI Ledger، حل محاسبي ذكي مدعوم من OSYS، يُحدث ثورة في الإدارة المالية من خلال أتمتة متقدمة تعتمد على الذكاء الاصطناعي. مصمم لدعم الشركات من جميع الأحجام، يعمل AI Ledger على تبسيط إدارة المستندات، ومعالجة المعاملات، وتتبع الامتثال، مما يضمن الدقة والكفاءة في الوقت الفعلي عبر العمليات العالمية.
                        </p>
                        <p className="mb-0 justify-text">
                            بفضل ميزات مثل التكامل السحابي، وإنشاء القيود المالية تلقائيًا، وإعداد التقارير المخصصة، يوفر AI Ledger دقة ومرونة لا مثيل لهما. يُعد الحل المثالي للشركات الصغيرة، والمؤسسات متعددة الجنسيات، ومكاتب المحاسبة التي تسعى إلى تبسيط سير العمل، وتقليل الأخطاء اليدوية، وتعزيز رضا العملاء.
                        </p>
                        <br></br>   <div className="portfolio_image_wrap" style={styles.otherImages}>
                            <img src={pImg12} alt="Portfolio Item" />
                        </div>
                        <br></br>
                        <h2 className="details_item_title">6. Printo: ثورة في عمليات الطباعة من خلال حلول ERP المتخصصة</h2>
                        <p className="justify-text">
                            Printo، الذي طورته OSYS، هو حل ERP متقدم مصمم خصيصًا لشركات ومكاتب الطباعة. من خلال دمج جميع مراحل سير عمل الطباعة، بدءًا من طلبات العملاء وحتى الإنتاج والأرشفة، يمكّن Printo الشركات من تحقيق التميز التشغيلي، مما يضمن الدقة ورضا العملاء في كل خطوة.
                        </p>
                        <p className="mb-0 justify-text">
                            بفضل ميزات رئيسية مثل الحساب التلقائي للمواد، والتكامل السلس للطلبات، والمراقبة الفورية للإنتاج، يعمل Printo على تبسيط العمليات اليومية وتقديم رؤى قابلة للتنفيذ من خلال أدوات التقارير المتقدمة. كما يتيح نظام إدارة الملفات والأرشفة القوي إعادة الطباعة الاحترافية مع الحفاظ على معايير الامتثال، مما يجعل Printo الحل الأمثل لشركات الطباعة الحديثة.
                        </p>
                        <br></br>   <div className="portfolio_image_wrap" style={styles.otherImages}>
                            <img src={pImg13} alt="Portfolio Item" />
                        </div>
                        <br></br>
                        <h2 className="details_item_title">7. يعمل على تعزيز كفاءة الأعمال والربحية مع OSYS ERP</h2>
                        <p className="justify-text">
                            OSYS ERP هو نظام متكامل بالكامل مصمم لتحسين العمليات في مختلف الصناعات. من خلال أتمتة المهام مثل إدارة المبيعات، وتتبع المشتريات، والتقارير المالية، يمكّن OSYS ERP الشركات من تحقيق كفاءة أعلى، وضمان الامتثال، وتعزيز الربحية. بفضل الوحدات القابلة للتطوير والتخصيص، يمكن تكييفه ليناسب الشركات بمختلف أحجامها وتعقيداتها.
                        </p>
                        <p className="mb-0 justify-text">
                            بفضل ميزات مثل تتبع المخزون في الوقت الفعلي، والامتثال الضريبي المؤتمت، والإدارة القوية للموارد البشرية، يعمل OSYS ERP على تبسيط العمليات اليومية، مع توفير تحليلات متقدمة لدعم اتخاذ القرارات الاستراتيجية. مصمم خصيصًا لقطاعات مثل التجزئة، والتصنيع، والخدمات المهنية، يضمن OSYS ERP تكاملًا سلسًا لسير العمل، مما يوفر تحكمًا تشغيليًا غير مسبوق وإمكانيات نمو هائلة.
                        </p>
                        <br></br>   <div className="portfolio_image_wrap" style={styles.otherImages}>
                            <img src={pImg14} alt="Portfolio Item" />
                        </div>
                        <br></br>
                        <h2 className="details_item_title">8. حلول OSYS المبتكرة لتنمية الأعمال:</h2>
                        <p className="justify-text">
                            حلول OSYS المبتكرة لتنمية الأعمال
                            تقدم OSYS Software، التي يقع مقرها الرئيسي في مصر وتعمل في السعودية، حلولًا برمجية متكاملة للشركات بمختلف أحجامها. بدءًا من أنظمة ERP وحتى الأدوات المدعومة بالذكاء الاصطناعي، تضمن OSYS رفع كفاءة العمليات التشغيلية والامتثال للوائح المحلية. تعمل هذه الحلول المخصصة على تبسيط سير العمل، وتحسين عملية اتخاذ القرار، وتمكين الشركات من التركيز على النمو والابتكار.
                        </p>
                        <p className="mb-0 justify-text">
                            من خلال أنظمتها القابلة للتوسع وسهلة الاستخدام، تدعم OSYS Software مجموعة واسعة من القطاعات، بدءًا من التصنيع والزراعة وصولًا إلى الخدمات المهنية. وتُعد خبرتها في أنظمة الامتثال الضريبي والتكامل مع المنصات السحابية عاملًا رئيسيًا في جعلها شريكًا موثوقًا في التحول الرقمي.
                        </p>
                        <p className="mb-0">
                            حقق الكفاءة، وأطلق العنان للإمكانات
                            مع الحلول البرمجية المخصصة من OSYS، يمكن لعملك الاستمتاع بتكامل سلس بين الابتكار والتميز التشغيلي.
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
