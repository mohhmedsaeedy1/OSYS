import React from 'react';
import { useTranslation } from 'react-i18next';  // استدعاء الترجمة
import blog1 from '../../images/blog/blog_post_image_8.webp';
import blog2 from '../../images/blog/blog_post_image_9.webp';
import blog3 from '../../images/blog/blog_post_image_10.webp';
import blog4 from '../../images/blog/blog_post_image_11.webp';
import author from '../../images/avatar/avatar_8.webp';
import author2 from '../../images/avatar/avatar_9.webp';
import author3 from '../../images/avatar/avatar_10.webp';
import author4 from '../../images/avatar/avatar_11.webp';
import icon1 from '../../images/icons/icon_calendar.svg';
import icon2 from '../../images/icons/icon_user.svg';
import icon3 from '../../images/icons/icon_chat.svg';
import icon4 from '../../images/icons/icon_eye.svg';
import icon5 from '../../images/icons/icon_link.svg';
import icon6 from '../../images/icons/icon_bookmark.svg';

import sImg1 from '../../images/icons/icon_facebook.svg';
import sImg2 from '../../images/icons/icon_twitter_x.svg';
import sImg3 from '../../images/icons/icon_linkedin.svg';
import sImg4 from '../../images/icons/icon_instagram.svg';

import blogs from '../../api/blogs';
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom'
import BlogSidebar from '../BlogSidebar';

const BlogSingle = (props) => {

    const { slug } = useParams()

    const BlogDetails = blogs.find(item => item.slug === slug)

    const { t } = useTranslation(); // استدعاء الترجمة

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
                    {t('erp_explore')} {/* الترجمة هنا */}
                </p>
                <hr className="mb-0" />
                <div className="section_space pb-0">
                    <div className="row">
                        <div className="col-lg-8">
                            <h3 className="details_item_info_title mb-5">
                                {t('operational_excellence')} {/* الترجمة هنا */}
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
                                {t('it_innovation_insights')} {/* الترجمة هنا */}
                            </p>
                            <p className="heading_description mb-0 justify-text">
                                {t('explore_it_world')} {/* الترجمة هنا */}
                            </p>
                            <br></br>
                            <h3 className="details_item_info_title">{t('exclusive_insights')}</h3> {/* الترجمة هنا */}
                            <p className="heading_description mb-0 justify-text">
                                {t('exclusive_exploration')} {/* الترجمة هنا */}
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
                                                {t('discover_advanced_solutions')} {/* الترجمة هنا */}
                                            </span>
                                        </li>
                                        <li>
                                            <span className="icon_list_icon">
                                                <i className="fa-solid fa-circle fa-fw"></i>
                                            </span>
                                            <span className="icon_list_text">
                                                {t('next_gen_technologies')} {/* الترجمة هنا */}
                                            </span>
                                        </li>
                                        <li>
                                            <span className="icon_list_icon">
                                                <i className="fa-solid fa-circle fa-fw"></i>
                                            </span>
                                            <span className="icon_list_text">
                                                {t('overcoming_operational_challenges')} {/* الترجمة هنا */}
                                            </span>
                                        </li>
                                        <li>
                                            <span className="icon_list_icon">
                                                <i className="fa-solid fa-circle fa-fw"></i>
                                            </span>
                                            <span className="icon_list_text">
                                                {t('industry_trends')} {/* الترجمة هنا */}
                                            </span>
                                        </li>

                                        <li>
                                            <span className="icon_list_icon">
                                                <i className="fa-solid fa-circle fa-fw"></i>
                                            </span>
                                            <span className="icon_list_text">
                                                {t('leading_innovation_paths')} {/* الترجمة هنا */}
                                            </span>
                                        </li>
                                        <li>
                                            <span className="icon_list_icon">
                                                <i className="fa-solid fa-circle fa-fw"></i>
                                            </span>
                                            <span className="icon_list_text">
                                                {t('enhancing_business_practices')} {/* الترجمة هنا */}
                                            </span>
                                        </li>
                                        <li>
                                            <span className="icon_list_icon">
                                                <i className="fa-solid fa-circle fa-fw"></i>
                                            </span>
                                            <span className="icon_list_text">
                                                {t('driving_transformational_growth')} {/* الترجمة هنا */}
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <h3 className="details_item_info_title">{t('3_reasons_invest_now')}</h3> {/* الترجمة هنا */}
                            <p className="optimized_text mb-2">
                                {t('3_reasons_for_it_investment')} {/* الترجمة هنا */}
                            </p>
                            <ul className="icon_list unordered_list_block mb-5">
                                <li>
                                    <span className="icon_list_text">
                                        <strong>{t('reason_1_title')}:</strong> {t('reason_1_desc')} {/* الترجمة هنا */}
                                    </span>
                                </li>
                                <li>
                                    <span className="icon_list_text">
                                        <strong>{t('reason_2_title')}:</strong> {t('reason_2_desc')} {/* الترجمة هنا */}
                                    </span>
                                </li>
                                <li>
                                    <span className="icon_list_text">
                                        <strong>{t('reason_3_title')}:</strong> {t('reason_3_desc')} {/* الترجمة هنا */}
                                    </span>
                                </li>
                            </ul>
                            <hr className="mt-0 mb-5" />
                            <div className="row">
                                <div className="col-md-6">
                                    <ul className="tags_list unordered_list">
                                        <li><Link onClick={ClickHandler} to={'/blog'}>{t('solutions')}</Link></li>
                                        <li><Link onClick={ClickHandler} to={'/blog'}>{t('consultants')}</Link></li>
                                        <li><Link onClick={ClickHandler} to={'/blog'}>{t('it')}</Link></li>
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
                        </div>
                        <BlogSidebar />
                    </div>
                </div>
            </div>
        </section>
    )

}

export default BlogSingle;
