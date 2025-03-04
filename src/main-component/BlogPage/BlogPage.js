import React, { Fragment } from 'react';
import Header from '../../components/header/Header';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import CtaSection from '../../components/CtaSection/CtaSection';
import BlogList from '../../components/BlogList';


const BlogPage = (props) => {

    return (
        <Fragment>
            <Header />
            <main className="page_content blog-page">
                <PageTitle pageTitle={'تفاصيل اكثر عن مدوناتنا'} pagesub={'مدوناتنا😍'} pageTop={''}/>
                <BlogList/>
            </main>
            <CtaSection />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default BlogPage;
