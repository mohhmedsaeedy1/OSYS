import React from 'react'
import ContactForm from '../ContactFrom/ContactForm'
import icon1 from '../../images/icons/icon_map_mark_2.svg'
import icon2 from '../../images/icons/icon_calling_2.svg'
import icon3 from '../../images/icons/icon_mail_3.svg'
import icon4 from '../../images/icons/icon_calendar_2.svg'


const ContactSection = (props) => {
    return (
        <section className="contact_section section_space bg-light">
            <div className="container">
                <div className="contact_info_box row">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="iconbox_block text-center">
                            <div className="iconbox_icon">
                                <img src={icon1} alt="Map Mark SVG Icon" />
                            </div>
                            <div className="iconbox_content">
                                <h3 className="iconbox_title">الموقع</h3>
                                <p className="mb-0">
                                    مول المروة، ألاردنيه، العاشر من رمضان، الشرقية، مصر
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="iconbox_block text-center">
                            <div className="iconbox_icon">
                                <img src={icon2} alt="Calling SVG Icon" />
                            </div>
                            <div className="iconbox_content">
                                <h3 className="iconbox_title">اتصل بنا</h3>
                                <p className="mb-0"> المبيعات   +201070005260</p>
                                <p className="mb-0">خدمة العملاء    +201070005280 </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="iconbox_block text-center">
                            <div className="iconbox_icon">
                                <img src={icon3} alt="User Check SVG Icon" />
                            </div>
                            <div className="iconbox_content">
                                <h3 className="iconbox_title">البريد الإلكتروني</h3>
                                <p className="mb-0">info@osysware.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="iconbox_block text-center">
                            <div className="iconbox_icon">
                                <img src={icon4} alt="Calendar SVG Icon" />
                            </div>
                            <div className="iconbox_content">
                                <h3 className="iconbox_title">قم بزيارتنا بين</h3>
                                <p className="mb-0">الاحد : الخميس  10.00AM-5.00PM</p>
                                <p className="mb-0">الجمعه / السبت: مغلق</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section_space pb-0">
                    <div className="row justify-content-lg-between">
                        {/*  <div className="col-lg-7">
                            <div className="contact_form mb-0">
                                <h3 className="details_item_info_title mb-1">Send Us A Message</h3>
                                <p className="mb-5">
                                    Give us chance to serve and bring magic to your brand.
                                </p>
                                <ContactForm />
                            </div>
                        </div>*/}
                        <div className="col-lg-12">
                            <div className="gmap_canvas ps-lg-5">
                                <iframe
                                    title="map"
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6889.728498265248!2d31.746337000000004!3d30.297926000000004!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1457fda85477ac91%3A0x8b1b9c21e23c5370!2z2YXZiNmEINin2YTZhdix2YjZhw!5e0!3m2!1sen!2seg!4v1735553035165!5m2!1sen!2seg">
                                </iframe>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactSection;