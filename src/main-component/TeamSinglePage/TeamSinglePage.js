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
                <PageTitle pageTitle={TeamDetails.name} pagesub={'  ميثاق القيم والاخلاقيات😍'} pageTop={''} />
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

                        <h3 className="details_item_info_title">الالتزام بالتميز الأخلاقي</h3>
                        <div class="justify-text">
                            في Osys Software، تستند رحلتنا نحو أن نصبح شركة تقنية رائدة إلى التزامنا بالتميز الأخلاقي. نحن نقدم أنظمة ERP مدعومة بالذكاء الاصطناعي، وأدوات تحليل متقدمة، وحلول برمجية مخصصة تلبي احتياجات صناعات مثل التجزئة، والتصنيع، والزراعة، والخدمات القانونية، مع الحفاظ على أعلى المعايير الأخلاقية.

                            تضمن خبرتنا في تحسين العمليات والتكامل السلس مع أنظمة الامتثال في مصر والسعودية ليس فقط تحقيق الكفاءة التشغيلية ولكن أيضًا الالتزام الصارم بالإرشادات التنظيمية والأخلاقية. نحن ملتزمون بتطوير تصميمات قابلة للتطوير وسهلة الاستخدام تركز على الابتكار الذي يخدم العملاء دون المساس بالشفافية والنزاهة.

                            توفر التقارير الفورية والتحليلات الدقيقة لعملائنا رؤية واضحة لاتخاذ قرارات استراتيجية مستنيرة، مما يعكس قيمنا القائمة على الصدق والمساءلة. ومن خلال إمكانيات التوسع العالمي وأدوات ERP المتخصصة، نُمكّن الشركات من تحقيق نمو مستدام مع ضمان العدل والاحترام لجميع الأطراف المعنية.

يقود فريقنا بيئة تعاونية تعتمد على الممارسات الأخلاقية كأساس، مما يُمكّن الكفاءات التقنية لدينا من تقديم حلول تقنية عالمية المستوى بمسؤولية. إن تركيز Osys Software الراسخ على الجودة والابتكار ورضا العملاء يضمن لنا البقاء في طليعة صناعة التكنولوجيا، وتحويل التحديات إلى فرص نجاح قائمة على المبادئ الأخلاقية.     </div>

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
                        <h2 className="mb-2">القيم الأخلاقية التي نلتزم بها في Osys Software:</h2>
                        <ul className="icon_list unordered_list_block justify-list">
                            <li>
                                <span className="icon_list_icon">
                                    <i className="fa-solid fa-circle fa-fw"></i>
                                </span>
                                <span className="icon_list_text">
                                    الابتكار المسؤول: تطوير التكنولوجيا مع مراعاة الجوانب الأخلاقية.
                                </span>
                            </li>
                            <li>
                                <span className="icon_list_icon">
                                    <i className="fa-solid fa-circle fa-fw"></i>
                                </span>
                                <span className="icon_list_text">
                                    نهج يركز على العملاء: إعطاء الأولوية لاحتياجات العملاء دون المساس بالمبادئ.
                                </span>
                            </li>
                            <li>
                                <span className="icon_list_icon">
                                    <i className="fa-solid fa-circle fa-fw"></i>
                                </span>
                                <span className="icon_list_text">
                                    المشاركة المجتمعية: المساهمة بشكل إيجابي في المجتمعات التي نخدمها.
                                </span>
                            </li>
                            <li>
                                <span className="icon_list_icon">
                                    <i className="fa-solid fa-circle fa-fw"></i>
                                </span>
                                <span className="icon_list_text">
                                    الجودة: تقديم حلول تلبّي أعلى معايير التميز.
                                </span>
                            </li>
                            <li>
                                <span className="icon_list_icon">
                                    <i className="fa-solid fa-circle fa-fw"></i>
                                </span>
                                <span className="icon_list_text">
                                    السرية: حماية بيانات العملاء والشركة بأقصى درجات الحرص.
                                </span>
                            </li>
                            <li>
                                <span className="icon_list_icon">
                                    <i className="fa-solid fa-circle fa-fw"></i>
                                </span>
                                <span className="icon_list_text">
                                    التعاون: تعزيز بيئة عمل قائمة على الثقة والقيم المشتركة.
                                </span>
                            </li>
                            <li>
                                <span className="icon_list_icon">
                                    <i className="fa-solid fa-circle fa-fw"></i>
                                </span>
                                <span className="icon_list_text">
                                    الاستدامة: الالتزام بالممارسات البيئية المسؤولة.
                                </span>
                            </li>
                            <li>
                                <span className="icon_list_icon">
                                    <i className="fa-solid fa-circle fa-fw"></i>
                                </span>
                                <span className="icon_list_text">
                                    الاحترام: تعزيز ثقافة الاحترام المتبادل والتفاهم.
                                </span>
                            </li>
                            <li>
                                <span className="icon_list_icon">
                                    <i className="fa-solid fa-circle fa-fw"></i>
                                </span>
                                <span className="icon_list_text">
                                    المساءلة: تحمل المسؤولية عن قراراتنا والتزاماتنا.
                                </span>
                            </li>
                            <li>
                                <span className="icon_list_icon">
                                    <i className="fa-solid fa-circle fa-fw"></i>
                                </span>
                                <span className="icon_list_text">
                                    النزاهة: تنفيذ جميع المعاملات التجارية بصدق ووضوح.
                                </span>
                            </li>
                            <li>
                                <span className="icon_list_icon">
                                    <i className="fa-solid fa-circle fa-fw"></i>
                                </span>
                                <span className="icon_list_text">
                                    العدالة: ضمان معاملة جميع العملاء والموظفين بإنصاف.
                                </span>
                            </li>
                            <li>
                                <span className="icon_list_icon">
                                    <i className="fa-solid fa-circle fa-fw"></i>
                                </span>
                                <span className="icon_list_text">
                                    الامتثال: الالتزام بجميع القوانين واللوائح المعمول بها.
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