import React from 'react';
import Slider from "react-slick";
import avatar1 from '../../../images/avatar/avatar_11.webp'
import avatar2 from '../../../images/avatar/avatar_10.webp'
import avatar3 from '../../../images/avatar/avatar_9.webp'
import avatar4 from '../../../images/avatar/avatar_8.webp'
import Bg from '../../../images/icons/icon_quote_2.svg'
import abImg1 from '../../../images/about/about_image_8.webp'
import abImg2 from '../../../images/icons/icon_wallet.svg'

import { Link } from "react-router-dom";

const testimonial = [
    {
        id: '01',
        Des: "Working with OSYS was a game-changer for our business. Their tailored solutions and support propelled us to success.",
        Title: 'Reda Mohamed',
        sub: 'Board Member, UNIQA',
        avatar: avatar1,
    },
    {
        id: '02',
        Des: "Partnering with OSYS transformed our company. Their tailored solutions and support guided us to unmatched growth.",
        Title: 'Mohamed Makawi',
        sub: 'Board Member, UNIQA',
        avatar: avatar2,
    },
    {
        id: '03',
        Des: "Choosing OSYS turned out to be the best move. Their tailored solutions and support drove our success to new levels.",
        Title: 'Abdelrahman Nada',
        sub: 'Board Member, UNIQA',
        avatar: avatar3,
    },
    {
        id: '04',
        Des: "Collaborating with OSYS made all the difference. Their tailored solutions and support empowered us to reach excellence.",
        Title: 'Mohamed Elsaeedy',
        sub: 'Board Member, UNIQA',
        avatar: avatar4,
    },
    {
        id: '05',
        Des: "OSYS provided solutions that met our needs exactly. Their tailored approach and support boosted us to achieve greatness.",
        Title: 'Ahmed Hussein',
        sub: 'Board Member, UNIQA',
        avatar: avatar2,
    },
]

const BusinessTestimonial = () => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const settings = {
        dots: false,
        arrows: false,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const slider = React.useRef(null);



    return (
        <section className="review_and_about_section section_space bg-light">
            <div className="container">
                <div className="review_bg_box bg-success" style={{ backgroundImage: `url(${Bg})` }}>
                    <div className="heading_block text-center text-white">
                        <h2 className="heading_text mb-0">
                            Few Stories from our Client
                        </h2>
                    </div>
                    <div className="review_4col_carousel swiper">
                        <Slider ref={slider} {...settings}>
                            {testimonial.map((testimonial, tsm) => (
                                <div className="review_block_3" key={tsm}>
                                    <ul className="rating_block unordered_list">
                                        <li><i className="fa-solid fa-star fa-fw"></i></li>
                                        <li><i className="fa-solid fa-star fa-fw"></i></li>
                                        <li><i className="fa-solid fa-star fa-fw"></i></li>
                                        <li><i className="fa-solid fa-star fa-fw"></i></li>
                                        <li><i className="fa-solid fa-star fa-fw"></i></li>
                                    </ul>
                                    <p className="review_commtent">
                                        "{testimonial.Des}"
                                    </p>
                                    <div className="review_admin">
                                        <div className="review_admin_image">
                                            <img src={testimonial.avatar} alt="Maverick Phoenix" />
                                        </div>
                                        <div className="review_admin_info">
                                            <h4 className="review_admin_name">{testimonial.Title}</h4>
                                            <span className="review_admin_designation">{testimonial.sub}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
            <div className="section_space pb-0">
                <div className="container">
                    <div className="row align-items-center justify-content-lg-around">
                        <div className="col-lg-6">
                            <div className="heading_block">
                                <h2 className="heading_text">
                                    Why Partner with Us: Unleashing Your Business Potential
                                </h2>
                                <p className="heading_description text-dark pe-lg-5">
                                    Partner with OSYS to experience tailored solutions, unmatched dedication, and proven results. Maximize your growth opportunities through strategic collaboration and innovative expertise.
                                </p>
                                <p className="heading_description mb-0 text-dark pe-lg-5">
                                    Elevate your business to new heights with OSYS. Together, we forge powerful partnerships that drive success and deliver sustainable results.
                                </p>
                            </div>
                            <Link onClick={ClickHandler} className="creative_btn" to="/pricing">
                                <span className="btn_label bg-primary">Get Started Today</span>
                                <span className="btn_icon">
                                    <i className="bg-primary fa-solid fa-arrow-up-right"></i>
                                    <i className="bg-primary fa-solid fa-arrow-up-right"></i>
                                </span>
                            </Link>
                        </div>
                        <div className="col-lg-4">
                            <div className="about_image_3">
                                <img className="image_wrap" src={abImg1} alt="Business Consulting" />
                                <div className="funfact_block capsule_layout">
                                    <div className="funfact_icon">
                                        <img src={abImg2} alt="OSYS - SVG Icon Wallet" />
                                    </div>
                                    <div className="funfact_content">
                                        <h3 className="funfact_title mb-0">Company Value</h3>
                                        <div className="counter_value">
                                            <span>$</span>
                                            <span className="odometer" data-count="500000">500000</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BusinessTestimonial;