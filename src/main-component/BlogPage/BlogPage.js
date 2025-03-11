import React, { Fragment } from 'react';
import Header from '../../components/header/Header';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import CtaSection from '../../components/CtaSection/CtaSection';
import BlogList from '../../components/BlogList';
import { useTranslation } from 'react-i18next'; // استيراد الترجمة

const BlogPage = (props) => {
    const { t } = useTranslation(); // استخدام الترجمة

    return (
        <Fragment>
            <Header />
            <main className="page_content blog-page">
                <PageTitle
                    pageTitle={t('blogPageTitle')} // استخدام الترجمة
                    pagesub={t('blogPageSubTitle')} // استخدام الترجمة
                    pageTop={''}
                />
                <BlogList />
            </main>
            <CtaSection />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default BlogPage;
