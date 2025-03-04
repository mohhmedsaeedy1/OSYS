import React from 'react';
import blog1 from '../../images/blog/blog_post_image_8.webp'
import blog2 from '../../images/blog/blog_post_image_9.webp'
import blog3 from '../../images/blog/blog_post_image_10.webp'
import blog4 from '../../images/blog/blog_post_image_11.webp'
import author from '../../images/avatar/avatar_8.webp'
import author2 from '../../images/avatar/avatar_9.webp'
import author3 from '../../images/avatar/avatar_10.webp'
import author4 from '../../images/avatar/avatar_11.webp'
import icon1 from '../../images/icons/icon_calendar.svg'
import icon2 from '../../images/icons/icon_user.svg'
import icon3 from '../../images/icons/icon_chat.svg'
import icon4 from '../../images/icons/icon_eye.svg'
import icon5 from '../../images/icons/icon_link.svg'
import icon6 from '../../images/icons/icon_bookmark.svg'

import sImg1 from '../../images/icons/icon_facebook.svg'
import sImg2 from '../../images/icons/icon_twitter_x.svg'
import sImg3 from '../../images/icons/icon_linkedin.svg'
import sImg4 from '../../images/icons/icon_instagram.svg'

import blogs from '../../api/blogs';
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom'
import BlogSidebar from '../BlogSidebar';

const BlogSingle = (props) => {

    const { slug } = useParams()

    const BlogDetails = blogs.find(item => item.slug === slug)

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="blog_details_section section_space bg-light">
            <div className="container">
                <div className="details_item_image">
                    <img src={blog1} alt="OSYS - Blog" />
                </div>
                <div className="post_meta_wrap mb-4">
                    <ul className="category_btns_group unordered_list">
                        <li><Link onClick={ClickHandler} to={'/blog'}>{BlogDetails.thumb}</Link></li>
                    </ul>
                    <ul className="post_meta unordered_list">
                        <li>
                            <Link onClick={ClickHandler} to={'/blog'}>
                                <img src={icon1} alt="Icon Calendar" /> {BlogDetails.create_at}
                            </Link>
                        </li>
                    </ul>
                </div>
                <h2 className="details_item_title">
                    {BlogDetails.title}
                </h2>
                <p>
استكشف عالم أنظمة ERP مع خبراء OSYS Software. بفضل سنوات من الخبرة والرؤى العميقة، يقدم محترفونا منظورًا فريدًا حول القوة التحويلية للتكنولوجيا. اكتشف حلولًا مبتكرة تعيد تعريف كفاءة الأعمال وتعزز النمو في الأسواق الديناميكية اليوم </p>
                {/*<div className="row align-items-center">
                    <div className="col-md-6">
                        <ul className="post_meta unordered_list">
                            <li>
                                <Link onClick={ClickHandler} to={'/blog'}>
                                    <img src={icon2} alt="Icon User" /> by {BlogDetails.author}
                                </Link>
                            </li>
                            <li>
                                <Link onClick={ClickHandler} to={'/blog'}>
                                    <img src={icon3} alt="Icon Chat" /> {BlogDetails.comment} Comments
                                </Link>
                            </li>
                            <li>
                                <Link onClick={ClickHandler} to={'/blog'}>
                                    <img src={icon4} alt="Icon Eye" /> 20k Views
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <ul className="post_meta unordered_list justify-content-md-end">
                            <li>
                                <Link onClick={ClickHandler} to={'/blog'}>
                                    <img src={icon5} alt="Icon Link" /> Copy Link
                                </Link>
                            </li>
                            <li>
                                <Link onClick={ClickHandler} to={'/blog'}>
                                    <img src={icon6} alt="Bookmark Chat" /> Bookmark
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>*/}
                <hr className="mb-0" />
                <div className="section_space pb-0">
                    <div className="row">
                        <div className="col-lg-8">
                            {/*<div className="blog_details_audio">
                                <button className="audio_play_btn" type="button">
                                    <i className="fa-solid fa-play"></i>
                                    <span>6:24</span>
                                    <span>Listen to this article!</span>
                                </button>
                            </div>*/}
                            <h3 className="details_item_info_title mb-5">
                                تحويل التميز التشغيلي ودفع التقدم من خلال دمج حلول تكنولوجيا المعلومات المتطورة
                            </h3>
                            <div className="row mb-4">
                                <div className="col-md-6 col-sm-6">
                                    <div className="details_item_image m-0">
                                        <img src={blog2} alt="مدونة OSYS" />
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6">
                                    <div className="details_item_image m-0">
                                        <img src={blog3} alt="مدونة OSYS" />
                                    </div>
                                </div>
                            </div>
                            <p className="heading_description mb-3 justify-text">
                                اكتسب رؤى فريدة في عالم ابتكارات تكنولوجيا المعلومات مع خبراء OSYS. بدعم من سنوات من الخبرة وفهم عميق لديناميكيات الصناعة، يقدم قادتنا رؤى تحويلية تمهد الطريق نحو التميز الرقمي. بدءًا من التقنيات الثورية إلى الاستراتيجيات المستقبلية، يكشفون عن توجيهات تثري المعرفة وتلهم الفكر. انضم إلينا لاستكشاف تعقيدات حلول تكنولوجيا المعلومات والتعامل مع التحديات بوضوح ودقة.
                            </p>
                            <p className="heading_description mb-0 justify-text">
                                انطلق في رحلة استكشافية داخل عالم حلول تكنولوجيا المعلومات مع خبراء OSYS المتميزين. تعمق في تفاصيل التكنولوجيا بينما يشارك محترفونا المخضرمون معارفهم وخبراتهم الواسعة. مع التركيز الحاد على اتجاهات الصناعة والشغف بالابتكار، يقدم قادتنا الفكريون رؤى لا مثيل لها تضيء الطريق نحو النجاح الرقمي.
                            </p>
                            <br></br>
                            <h3 className="details_item_info_title">رؤى حصرية</h3>
                            <p className="heading_description mb-0 justify-text">
                                استمتع باستكشاف شامل وعميق لعالم حلول تكنولوجيا المعلومات مع فريق الخبراء في OSYS. تجاوز السطح واكتشف تعقيدات التكنولوجيا، مسترشدًا بحكمة وخبرة محترفينا المخضرمين. كن ملهمًا، ومطلعًا، وقادرًا على التنقل في مشهد التحول الرقمي الديناميكي بوضوح وثقة. اكتشف معرفة لا مثيل لها وافتح أبواب الفرص غير المحدودة للنجاح في عالم التكنولوجيا سريع التطور.
                            </p>
<br></br>
                            <div className="row align-items-center mb-5">
                                <div className="col-md-6">
                                    <div className="details_item_image m-0">
                                        <img src={blog4} alt="OSYS - Blog" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <ul className="icon_list unordered_list_block">
                                        <li>
                                            <span className="icon_list_icon">
                                                <i className="fa-solid fa-circle fa-fw"></i>
                                            </span>
                                            <span className="icon_list_text">
                                                اكتشاف الحلول المتطورة
                                            </span>
                                        </li>
                                        <li>
                                            <span className="icon_list_icon">
                                                <i className="fa-solid fa-circle fa-fw"></i>
                                            </span>
                                            <span className="icon_list_text">
                                                الكشف عن تقنيات الجيل القادم
                                            </span>
                                        </li>
                                        <li>
                                            <span className="icon_list_icon">
                                                <i className="fa-solid fa-circle fa-fw"></i>
                                            </span>
                                            <span className="icon_list_text">
                                                التغلب على التحديات التشغيلية
                                            </span>
                                        </li>
                                        <li>
                                            <span className="icon_list_icon">
                                                <i className="fa-solid fa-circle fa-fw"></i>
                                            </span>
                                            <span className="icon_list_text">
                                                توقع اتجاهات الصناعة
                                            </span>
                                        </li>

                                        <li>
                                            <span className="icon_list_icon">
                                                <i className="fa-solid fa-circle fa-fw"></i>
                                            </span>
                                            <span className="icon_list_text">
                                                قيادة مسارات الابتكار
                                            </span>
                                        </li>
                                        <li>
                                            <span className="icon_list_icon">
                                                <i className="fa-solid fa-circle fa-fw"></i>
                                            </span>
                                            <span className="icon_list_text">
                                                تعزيز ممارسات الأعمال
                                            </span>
                                        </li>
                                        <li>
                                            <span className="icon_list_icon">
                                                <i className="fa-solid fa-circle fa-fw"></i>
                                            </span>
                                            <span className="icon_list_text">
                                                تعزيز النمو التحويلي
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <h3 className="details_item_info_title">3 أسباب للاستثمار في هذه اللحظة
                                إليك ثلاثة أسباب رئيسية تسلط الضوء على قيمة تحسين البنية التحتية لتكنولوجيا المعلومات لتحقيق الكفاءة والنمو:
                            </h3>
                            <p className="optimized_text mb-2">
                                إليك ثلاثة أسباب رئيسية تؤكد أهمية تحسين البنية التحتية لتكنولوجيا المعلومات لتحقيق الكفاءة والنمو:
                            </p>
                            <ul className="icon_list unordered_list_block mb-5">
                                <li>
                                    <span className="icon_list_text">
                                        <strong>1. تعزيز المرونة التشغيلية:</strong> تمكين عملك من التكيف بسرعة مع متطلبات السوق المتغيرة والتحديات التشغيلية من خلال عمليات تكنولوجيا معلومات مبسطة.
                                    </span>
                                </li>
                                <li>
                                    <span className="icon_list_text">
                                        <strong>2. تحسين الموارد وكفاءة التكلفة:</strong> تعظيم العائد على الاستثمار عن طريق تقليل التكاليف العامة وتحسين تخصيص الموارد.
                                    </span>
                                </li>
                                <li>
                                    <span className="icon_list_text">
                                        <strong>3. القابلية للتوسع والابتكار:</strong> فتح آفاق جديدة للنمو والابتكار من خلال حلول تكنولوجيا المعلومات المصممة للتوسع بسلاسة مع احتياجات عملك.
                                    </span>
                                </li>
                            </ul>
                            <hr className="mt-0 mb-5" />
                            <div className="row">
                                <div className="col-md-6">
                                    <ul className="tags_list unordered_list">
                                        <li><Link onClick={ClickHandler} to={'/blog'}>الحلول</Link></li>
                                        <li><Link onClick={ClickHandler} to={'/blog'}>الاستشاريون</Link></li>
                                        <li><Link onClick={ClickHandler} to={'/blog'}>تكنولوجيا المعلومات</Link></li>
                                    </ul>
                                </div>
                                <div className="col-md-6">
                                    <div className="post_share_link">
                                        <ul className="social_icons_block unordered_list">
                                            <li>
                                                <a href="https://www.facebook.com/osyseg" target="_blank" rel="noopener noreferrer">
                                                    <img src={sImg1} alt="Icon Facebook" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://x.com" target="_blank" rel="noopener noreferrer">
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
                            </div>
                            {/* <div className="post_author_box">
                                <div className="author_image">
                                    <img src={author} alt="OSYS - Blog Author" />
                                </div>
                                <div className="author_content">
                                    <h3 className="author_name">About OSYS</h3>
                                    <h4 className="author_designation">Content Editor</h4>
                                    <p>
                                        A content editor plays a pivotal role in shaping and refining the narrative and quality of digital content. This role involves overseeing the creation.
                                    </p>
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
                            </div>*/}

                            {/* <div className="other_posts_nav" style={{ marginBottom: '0', paddingBottom: '0' }}>
    <Link onClick={ClickHandler} to={'/blog'}>
        <i className="fa-regular fa-arrow-left-long"></i>
        <span>
                                        <strong>استكشاف حلول تكنولوجيا المعلومات مع OSYS</strong>
                                        <small>24 ديسمبر 2024</small>
                                    </span>
                                </Link>
                                <Link onClick={ClickHandler} to={'/blog'} href="blog.html">
                                    <i className="fa-solid fa-grid-2"></i>
                                </Link>
                                <Link onClick={ClickHandler} to={'/blog'}>
                                    <span>
                                        <strong>استكشاف حلول تكنولوجيا المعلومات مع OSYS</strong>
                                        <small>24 ديسمبر 2024</small>
                                    </span>
        <i className="fa-regular fa-arrow-right-long"></i>
    </Link>
                            </div>*/}

                            {/* <div className="comment_area">
                                <h3 className="details_item_info_title mb-5">Comments (3)</h3>
                                <ul className="comments_list unordered_list_block">
                                    <li>
                                        <div className="comment_item">
                                            <div className="comment_author_thumbnail">
                                                <img src={author2} alt="OSYS - Comment Author Avatar" />
                                            </div>
                                            <div className="comment_author_content">
                                                <h4 className="comment_author_name">John Smith</h4>
                                                <div className="comment_time">Dec 24, 2024 at 10:21am</div>
                                                <p className="mb-0">
                                                    "Working with OSYS has been a game-changer. Their innovative IT solutions boosted our efficiency tenfold. Highly recommend!"
                                                </p>
                                                <Link onClick={ClickHandler} to={'/blog'} className="comment_reply_btn">Reply</Link>
                                            </div>
                                        </div>
                                        <ul className="comments_list unordered_list_block">
                                            <li>
                                                <div className="comment_item">
                                                    <div className="comment_author_thumbnail">
                                                        <img src={author3} alt="OSYS - Comment Author Avatar" />
                                                    </div>
                                                    <div className="comment_author_content">
                                                        <h4 className="comment_author_name">Daniel Garcia</h4>
                                                        <div className="comment_time">Dec 24, 2024 at 10:21am</div>
                                                        <p className="mb-0">
                                                            "Our experience with OSYS has been exceptional. Their commitment to customer satisfaction stands out. Grateful for their partnership."
                                                        </p>
                                                        <Link onClick={ClickHandler} to={'/blog'} className="comment_reply_btn">Reply</Link>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="comment_item">
                                                    <div className="comment_author_thumbnail">
                                                        <img src={author2} alt="OSYS - Comment Author Avatar" />
                                                    </div>
                                                    <div className="comment_author_content">
                                                        <h4 className="comment_author_name">John Smith</h4>
                                                        <div className="comment_time">Dec 24, 2024 at 10:21am</div>
                                                        <p className="mb-0">
                                                            "Working with OSYS has been a game-changer. Their innovative IT solutions boosted our efficiency tenfold. Highly recommend!"
                                                        </p>
                                                        <Link onClick={ClickHandler} to={'/blog'} className="comment_reply_btn">Reply</Link>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <div className="comment_item">
                                            <div className="comment_author_thumbnail">
                                                <img src={author4} alt="OSYS - Comment Author Avatar" />
                                            </div>
                                            <div className="comment_author_content">
                                                <h4 className="comment_author_name">John Smith</h4>
                                                <div className="comment_time">Dec 24, 2024 at 10:21am</div>
                                                <p className="mb-0">
                                                    "Working with OSYS has been a game-changer. Their innovative IT solutions boosted our efficiency tenfold. Highly recommend!"
                                                </p>
                                                <Link onClick={ClickHandler} to={'/blog'} className="comment_reply_btn">Reply</Link>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>*/}

                            {/*<hr className="m-0" />*/}

                            {/* <div className="comment_area mb-0">
                                <h3 className="details_item_info_title mb-1">Leave a Comment</h3>
                                <p className="mb-5">
                                    Your email address will not be published. Required fields are marked <sup className="text-primary">*</sup>
                                </p>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="input_title" htmlFor="input_name">Full Name <sup className="text-primary">*</sup></label>
                                            <input id="input_name" className="form-control" type="text" name="name" placeholder="OSYS Premier Client" required />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="input_title" htmlFor="input_email">Your Email <sup className="text-primary">*</sup></label>
                                            <input id="input_email" className="form-control" type="email" name="email" placeholder="OSYS@example.com" required />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <label className="input_title" htmlFor="input_textarea">Comments / Questions <sup className="text-primary">*</sup></label>
                                            <textarea id="input_textarea" className="form-control" name="message" placeholder="How can we help you?"></textarea>
                                        </div>
                                        <div className="form-check mb-5">
                                            <input className="form-check-input" type="checkbox" id="flexCheckDefault" />
                                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                                Save my name, email, and website in this browser for the next time I comment.
                                            </label>
                                        </div>
                                        <button type="submit" className="btn btn-primary">
                                            <span className="btn_label" data-text="Submit Comment">Submit Comment</span>
                                            <span className="btn_icon">
                                                <i className="fa-solid fa-arrow-up-right"></i>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>*/}
                        </div>
                        <BlogSidebar />
                    </div>
                </div>
            </div>
        </section>
    )

}

export default BlogSingle;
