import React, { Fragment, useState } from 'react';
import Project from '../../api/project'; // تأكد من أن البيانات تحتوي على المشاريع والفئات
import { Link } from "react-router-dom";
import Header from '../../components/header/Header';
import PageTitle from '../../components/pagetitle/PageTitle';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Footer from '../../components/footer/Footer';
import CtaSection from '../../components/CtaSection/CtaSection';

const PortfolioPage = (props) => {

    const [activeFilter, setActiveFilter] = useState('all'); // الفلتر النشط

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const handleFilterClick = (filter) => {
        setActiveFilter(filter); // تغيير الفلتر النشط عند الضغط
    }

    // تعديل الفلترة بحيث إذا كانت الفئة "مكتب المساعدة"، نعرض العنصرين 2 و6 فقط
    const filteredProjects = activeFilter === 'all'
        ? Project.slice(9, 18)
        : activeFilter === 'مكتب المساعدة'
            ? Project.slice(9, 18).filter((project, index) => index === 1 || index === 5) // الفهرس 1 و5 يعادل العنصرين 2 و6
            : Project.slice(9, 18).filter(project => project.category === activeFilter);

    // إذا كانت المشاريع المفلترة فارغة، نعرض جميع المشاريع
    const finalProjects = filteredProjects.length === 0 ? Project.slice(9, 18) : filteredProjects;

    return (
        <Fragment>
            <Header />
            <main className="page_content about-page">
                <PageTitle pageTitle={'المنتجات التي نقدمها '} pagesub={'منتجاتنا 😍'} pageTop={''} />
                <section className="Customers_section section_space bg-light">
                    <div className="container">
                        <div className="filter_elements_nav">
                            <ul className="unordered_list justify-content-center">
                                <li className={activeFilter === 'all' ? 'active' : ''} onClick={() => handleFilterClick('all')}>جميع المنتجات</li>
                                <li className={activeFilter === 'التكنولوجيا' ? 'active' : ''} onClick={() => handleFilterClick('التكنولوجيا')}>التكنولوجيا</li>
                                <li className={activeFilter === 'مكتب المساعدة' ? 'active' : ''} onClick={() => handleFilterClick('مكتب المساعدة')}>مكتب المساعدة</li>
                                <li className={activeFilter === 'التحليل' ? 'active' : ''} onClick={() => handleFilterClick('التحليل')}>التحليل</li>
                                <li className={activeFilter === 'التسويق' ? 'active' : ''} onClick={() => handleFilterClick('التسويق')}>التسويق</li>
                            </ul>
                        </div>
                        <div className="filter_elements_wrapper row">
                            {finalProjects.map((project, prj) => (
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
                        </div>
                    </div>
                </section>

                <CtaSection />
            </main>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};

export default PortfolioPage;