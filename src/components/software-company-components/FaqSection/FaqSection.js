import React, { useState } from 'react';
import { useTranslation } from 'react-i18next'; // استيراد useTranslation
import Bg from '../../../images/shapes/shape_title_under_line.svg';
import shape1 from '../../../images/shapes/shape_space_4.svg';
import shape2 from '../../../images/shapes/shape_angle_3.webp';
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
} from 'reactstrap';

const FaqSection = (props) => {
    const { t } = useTranslation(); // استخدام useTranslation
    const [open, setOpen] = useState('1');
    const toggle = (id) => {
        if (open === id) {
            setOpen();
        } else {
            setOpen(id);
        }
    };

    return (
        <section className="faq_section section_decoration">
            <div className="container">
                <div className="heading_block text-center">
                    <div className="heading_focus_text has_underline d-inline-flex" style={{ backgroundImage: `url(${Bg})` }}>
                        {t('faq.title')} {/* استخدام مفتاح الترجمة */}
                    </div>
                    <h2 className="heading_text mb-0" dangerouslySetInnerHTML={{ __html: t('faq.heading') }} />
                </div>

                <div className="faq_accordion accordion" id="faq_accordion">
                    <Accordion open={open} toggle={toggle} className="accordion" id="service_process_faq">
                        <AccordionItem className="accordion-item">
                            <AccordionHeader targetId="1">
                                {t('faq.questions.q1')} {/* استخدام مفتاح الترجمة */}
                            </AccordionHeader>
                            <AccordionBody accordionId="1" className='acc_body'>
                                <div className="text_a">A.</div>
                                <p>
                                    {t('faq.answers.a1')} {/* استخدام مفتاح الترجمة */}
                                </p>
                                <div className="row">
                                    <div className="col-md-6">
                                        <ul className="icon_list unordered_list_block">
                                            <li>
                                                <span className="icon_list_icon">
                                                    <i className="fa-solid fa-circle fa-fw"></i>
                                                </span>
                                                <span className="icon_list_text">
                                                    {t('faq.answers.services.web_mobile')} {/* استخدام مفتاح الترجمة */}
                                                </span>
                                            </li>
                                            <li>
                                                <span className="icon_list_icon">
                                                    <i className="fa-solid fa-circle fa-fw"></i>
                                                </span>
                                                <span className="icon_list_text">
                                                    {t('faq.answers.services.software_architecture')} {/* استخدام مفتاح الترجمة */}
                                                </span>
                                            </li>
                                            <li>
                                                <span className="icon_list_icon">
                                                    <i className="fa-solid fa-circle fa-fw"></i>
                                                </span>
                                                <span className="icon_list_text">
                                                    {t('faq.answers.services.it_consulting')} {/* استخدام مفتاح الترجمة */}
                                                </span>
                                            </li>
                                            <li>
                                                <span className="icon_list_icon">
                                                    <i className="fa-solid fa-circle fa-fw"></i>
                                                </span>
                                                <span className="icon_list_text">
                                                    {t('faq.answers.services.legacy_modernization')} {/* استخدام مفتاح الترجمة */}
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6">
                                        <ul className="icon_list unordered_list_block">
                                            <li>
                                                <span className="icon_list_icon">
                                                    <i className="fa-solid fa-circle fa-fw"></i>
                                                </span>
                                                <span className="icon_list_text">
                                                    {t('faq.answers.services.cloud_computing')} {/* استخدام مفتاح الترجمة */}
                                                </span>
                                            </li>
                                            <li>
                                                <span className="icon_list_icon">
                                                    <i className="fa-solid fa-circle fa-fw"></i>
                                                </span>
                                                <span className="icon_list_text">
                                                    {t('faq.answers.services.qa_testing')} {/* استخدام مفتاح الترجمة */}
                                                </span>
                                            </li>
                                            <li>
                                                <span className="icon_list_icon">
                                                    <i className="fa-solid fa-circle fa-fw"></i>
                                                </span>
                                                <span className="icon_list_text">
                                                    {t('faq.answers.services.business_analysis')} {/* استخدام مفتاح الترجمة */}
                                                </span>
                                            </li>
                                            <li>
                                                <span className="icon_list_icon">
                                                    <i className="fa-solid fa-circle fa-fw"></i>
                                                </span>
                                                <span className="icon_list_text">
                                                    {t('faq.answers.services.it_staffing')} {/* استخدام مفتاح الترجمة */}
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </AccordionBody>
                        </AccordionItem>
                        {/* تكرار العناصر الأخرى بنفس الطريقة */}
                    </Accordion>
                </div>
            </div>
            <div className="decoration_item shape_image_1">
                <img src={shape1} alt="Shape" />
            </div>
            <div className="decoration_item shape_image_2">
                <img src={shape2} alt="OSYS Shape Angle" />
            </div>
        </section>
    );
};

export default FaqSection;