import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom'
import blogs from '../../api/blogs'
import Header from '../../components/header/Header';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import CtaSection from '../../components/CtaSection/CtaSection';
import BlogSingle from '../../components/BlogDetails/BlogDetails';
import { useTranslation } from 'react-i18next'; // استيراد الترجمة

const BlogDetails = (props) => {
    const { slug } = useParams()
    const { t } = useTranslation(); // استخدام الترجمة

    const BlogDetails = blogs.find(item => item.slug === slug)
    return (
        <Fragment>
            <Header />
            <main className="page_content about-page">
                <PageTitle pageTitle={t('blogTitle', { title: BlogDetails.title })} pagesub={t('blogSubTitle')} pageTop={''} />
                <BlogSingle />
            </main>
            <CtaSection />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default BlogDetails;
