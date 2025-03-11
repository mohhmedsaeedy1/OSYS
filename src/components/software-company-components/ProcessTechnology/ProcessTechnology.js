import React, { useState } from 'react';
import Bg from '../../../images/shapes/shape_title_under_line.svg';
import shape1 from '../../../images/shapes/shape_line_2.svg';
import shape2 from '../../../images/shapes/shape_line_3.svg';
import shape3 from '../../../images/shapes/shape_line_4.svg';
import shape4 from '../../../images/shapes/shape_space_3.svg';
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
} from 'reactstrap';
import TechnologySection from '../TechnologySection/TechnologySection';
import Testimonial from '../Testimonial/Testimonial';
import { useTranslation } from 'react-i18next'; // استيراد الترجمة

const FaqSection = (props) => {
    const { t } = useTranslation(); // استدعاء الترجمة

    const [open, setOpen] = useState('1');
    const toggle = (id) => {
        if (open === id) {
            setOpen();
        } else {
            setOpen(id);
        }
    };

    return (
        <section className="process_technology_review_section bg-light section_decoration">
            <div className="container">
                <div className="row align-items-center justify-content-lg-between">
                    <div className="col-lg-6">
                        <div className="heading_block">
                            <div className="heading_focus_text has_underline d-inline-flex" style={{ backgroundImage: `url(${Bg})` }}>
                                {t('work_process')}
                            </div>
                            <h2 className="heading_text mb-0">
                                <mark>{t('our_approach')}</mark>
                            </h2>
                        </div>
                        <Accordion open={open} toggle={toggle} className="accordion" id="service_process_faq">
                            <AccordionItem className="accordion-item">
                                <AccordionHeader targetId="1">
                                    01. {t('discovery_phase')}
                                </AccordionHeader>
                                <AccordionBody accordionId="1" className='acc_body'>
                                    <p className="m-0">
                                        {t('discovery_phase_desc')}
                                    </p>
                                </AccordionBody>
                            </AccordionItem>
                            <AccordionItem className="accordion-item">
                                <AccordionHeader targetId="2">
                                    02. {t('design_development')}
                                </AccordionHeader>
                                <AccordionBody accordionId="2" className='acc_body'>
                                    <p className="m-0">
                                        {t('design_development_desc')}
                                    </p>
                                </AccordionBody>
                            </AccordionItem>
                            <AccordionItem className="accordion-item">
                                <AccordionHeader targetId="3">
                                    03. {t('maintenance')}
                                </AccordionHeader>
                                <AccordionBody accordionId="3" className='acc_body'>
                                    <p className="m-0">
                                        {t('maintenance_desc')}
                                    </p>
                                </AccordionBody>
                            </AccordionItem>
                            <AccordionItem className="accordion-item">
                                <AccordionHeader targetId="4">
                                    04. {t('deployment_application')}
                                </AccordionHeader>
                                <AccordionBody accordionId="4" className='acc_body'>
                                    <p className="m-0">
                                        {t('deployment_application_desc')}
                                    </p>
                                </AccordionBody>
                            </AccordionItem>
                            <AccordionItem className="accordion-item">
                                <AccordionHeader targetId="5">
                                    05. {t('testing_quality_assurance')}
                                </AccordionHeader>
                                <AccordionBody accordionId="5" className='acc_body'>
                                    <p className="m-0">
                                        {t('testing_quality_assurance_desc')}
                                    </p>
                                </AccordionBody>
                            </AccordionItem>
                        </Accordion>
                    </div>
                    <div className="col-lg-5">
                        <Accordion open={open} toggle={toggle} className="accordion" id="service_process_faq">
                            <ul className="content_layer_group unordered_list_block text-center">
                                <li><AccordionHeader targetId="1"><span>{t('discovery_phase')}</span></AccordionHeader></li>
                                <li><AccordionHeader targetId="2"><span>{t('design_development')}</span></AccordionHeader></li>
                                <li><AccordionHeader targetId="3"><span>{t('maintenance')}</span></AccordionHeader></li>
                                <li><AccordionHeader targetId="4"><span>{t('deployment_application')}</span></AccordionHeader></li>
                                <li><AccordionHeader targetId="5"><span>{t('testing_quality_assurance')}</span></AccordionHeader></li>
                            </ul>
                        </Accordion>
                    </div>
                </div>
                <TechnologySection />
                <Testimonial />
            </div>

            <div className="decoration_item shape_image_1">
                <img src={shape1} alt="OSYS Shape" />
            </div>
            <div className="decoration_item shape_image_2">
                <img src={shape2} alt="OSYS Shape" />
            </div>
            <div className="decoration_item shape_image_3">
                <img src={shape3} alt="OSYS Shape" />
            </div>
            <div className="decoration_item shape_image_4">
                <img src={shape4} alt="OSYS Shape" />
            </div>
        </section>
    )
};

export default FaqSection;
