import React, { useState } from 'react';
import fImg1 from '../../images/faq/faq_img.png';
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
} from 'reactstrap';
import { useTranslation } from 'react-i18next'; // استيراد مكتبة الترجمة

const FaqSection = (props) => {

    const { t } = useTranslation(); // استخدام الترجمة
    const [open, setOpen] = useState('1');
    const toggle = (id) => {
        if (open === id) {
            setOpen();
        } else {
            setOpen(id);
        }
    };

    return (
        <section className="faq pt-120 pb-120">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="xb-faq-content">
                            <div className="sec-title mb-125">
                                <h2 className="mb-30 wow skewIn">{t("common_questions")}</h2>
                                <p>{t("commitment_to_provide")}</p>
                            </div>
                            <div className="faq-img">
                                <img src={fImg1} alt={t("faq_image_alt")} />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="xb-faq">
                            <Accordion open={open} toggle={toggle} className='accordion_box'>
                                <AccordionItem className='block'>
                                    <AccordionHeader targetId="1" className='acc-btn'>{t("faq_question_1")}
                                        <span className="arrow"></span>
                                    </AccordionHeader>
                                    <AccordionBody accordionId="1" className='acc_body'>
                                        <div className="content">
                                            <p>{t("faq_answer_1_part1")} <br /> {t("faq_answer_1_part2")}</p>
                                            <ul>
                                                <li><i className="far fa-check"></i>{t("service_1")}</li>
                                                <li><i className="far fa-check"></i>{t("service_2")}</li>
                                                <li><i className="far fa-check"></i>{t("service_3")}</li>
                                            </ul>
                                        </div>
                                    </AccordionBody>
                                </AccordionItem>
                                <AccordionItem className='block'>
                                    <AccordionHeader targetId="2" className='acc-btn'>{t("faq_question_2")}
                                        <span className="arrow"></span>
                                    </AccordionHeader>
                                    <AccordionBody accordionId="2" className='acc_body'>
                                        <div className="content">
                                            <p>{t("faq_answer_2_part1")} <br /> {t("faq_answer_2_part2")}</p>
                                            <ul>
                                                <li><i className="far fa-check"></i>{t("service_1")}</li>
                                                <li><i className="far fa-check"></i>{t("service_2")}</li>
                                                <li><i className="far fa-check"></i>{t("service_3")}</li>
                                            </ul>
                                        </div>
                                    </AccordionBody>
                                </AccordionItem>
                                <AccordionItem className='block'>
                                    <AccordionHeader targetId="3" className='acc-btn'>{t("faq_question_3")}
                                        <span className="arrow"></span>
                                    </AccordionHeader>
                                    <AccordionBody accordionId="3" className='acc_body'>
                                        <div className="content">
                                            <p>{t("faq_answer_3_part1")} <br /> {t("faq_answer_3_part2")}</p>
                                            <ul>
                                                <li><i className="far fa-check"></i>{t("service_1")}</li>
                                                <li><i className="far fa-check"></i>{t("service_2")}</li>
                                                <li><i className="far fa-check"></i>{t("service_3")}</li>
                                            </ul>
                                        </div>
                                    </AccordionBody>
                                </AccordionItem>
                                <AccordionItem className='block'>
                                    <AccordionHeader targetId="4" className='acc-btn'>{t("faq_question_4")}
                                        <span className="arrow"></span>
                                    </AccordionHeader>
                                    <AccordionBody accordionId="4" className='acc_body'>
                                        <div className="content">
                                            <p>{t("faq_answer_4_part1")} <br /> {t("faq_answer_4_part2")}</p>
                                            <ul>
                                                <li><i className="far fa-check"></i>{t("service_1")}</li>
                                                <li><i className="far fa-check"></i>{t("service_2")}</li>
                                                <li><i className="far fa-check"></i>{t("service_3")}</li>
                                            </ul>
                                        </div>
                                    </AccordionBody>
                                </AccordionItem>
                                <AccordionItem className='block'>
                                    <AccordionHeader targetId="5" className='acc-btn'>{t("faq_question_5")}
                                        <span className="arrow"></span>
                                    </AccordionHeader>
                                    <AccordionBody accordionId="5" className='acc_body'>
                                        <div className="content">
                                            <p>{t("faq_answer_5_part1")} <br /> {t("faq_answer_5_part2")}</p>
                                            <ul>
                                                <li><i className="far fa-check"></i>{t("service_1")}</li>
                                                <li><i className="far fa-check"></i>{t("service_2")}</li>
                                                <li><i className="far fa-check"></i>{t("service_3")}</li>
                                            </ul>
                                        </div>
                                    </AccordionBody>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};
export default FaqSection;
