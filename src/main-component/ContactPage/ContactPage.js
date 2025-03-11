import React, { Fragment } from 'react';
import Header from '../../components/header/Header';
import PageTitle from '../../components/pagetitle/PageTitle';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Footer from '../../components/footer/Footer';
import CtaSection from '../../components/CtaSection/CtaSection';
import ContactSection from '../../components/ContactSection';
import { useTranslation } from 'react-i18next'; // استيراد الترجمة

const ContactPage = (props) => {
    const { t } = useTranslation(); // استخدام الترجمة هنا

    return (
        <Fragment>
            <Header />
            <main className="page_content about-page">
                <PageTitle pageTitle={t('contact_us')} pagesub={t('get_in_touch_with_us')} pageTop={''} />
                <ContactSection />
                <CtaSection />
            </main>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};

export default ContactPage;
