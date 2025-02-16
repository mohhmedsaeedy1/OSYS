import React from 'react';
import tImg1 from '../../images/avatar/avatar_4.webp'
import tImg2 from '../../images/avatar/avatar_6.webp'
import tImg3 from '../../images/avatar/avatar_5.webp'
import tImg4 from '../../images/avatar/avatar_7.webp'
import Bg from '../../images/shapes/bg_pattern_2.svg'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"



const testimonial = [
    {
        id: '01',
        tImg:tImg1,
        Title:'Innovative Excellence',
        Des: "Collaborating with OSYS was a transformative experience for our business. From the very beginning, their team demonstrated a deep understanding of our goals and challenges, offering innovative solutions tailored to meet our specific needs. Their proactive approach and technical expertise ensured that every milestone was achieved on time, and the results far exceeded our expectations. OSYS has set a new benchmark for excellence in service delivery, and we are thrilled with the positive impact they have had on our operations.",
        Name: 'Roman Dymtro',
        sub:'Director of Marketing',
    },
    {
        id: '02',
        tImg:tImg2,
        Title:'Trusted Partnership',
        Des: "Over the years, OSYS has proven to be more than just a service provider—they are a trusted partner in our success. Their cutting-edge ERP solutions, seamless cloud integrations, and advanced analytics have been instrumental in keeping us ahead of the competition. The OSYS team consistently goes above and beyond, adapting to our evolving market demands with agility and precision. Their commitment to delivering exceptional results and unwavering support has made them an indispensable part of our growth journey.",
        Name: 'Michel johnson',
        sub:'Tech Startup Founder',
    },
    {
        id: '03',
        tImg:tImg3,
        Title:'Unmatched Responsiveness',
        Des: "Working with OSYS was a truly seamless experience from start to finish. Their team took the time to deeply understand our business objectives and challenges, crafting solutions that perfectly aligned with our needs. Their quick response times, transparent communication, and dedication to excellence were evident throughout the project. Thanks to their professionalism and expertise, we were able to overcome significant operational hurdles and achieve remarkable results. We look forward to continuing our collaboration with OSYS for future projects.",
        Name: 'Bohdan Maksym',
        sub:'Monprofit Director',
    },
    {
        id: '04',
        tImg:tImg4,
        Title:'Beyond Expectations',
        Des: "The OSYS team delivered solutions that were nothing short of extraordinary. Their meticulous approach to project management, combined with their technical prowess, ensured that every detail was executed flawlessly. They worked closely with us at every stage, providing guidance, insights, and support to ensure our vision was brought to life. The final outcome not only met our expectations but significantly surpassed them, driving growth and efficiency across our operations. Partnering with OSYS was one of the best decisions we’ve made, and we’re excited about what the future holds.",
        Name: 'Anatoliy Vasyl',
        sub:'Director of Marketing',
    }
]

const Testimonial = () => {

    return (

        <section className="review_section section_space bg-light" style={{ backgroundImage: `url(${Bg})` }}>
            {/*<div className="container">
                <div className="heading_block text-center">
                    <div className="heading_focus_text">
                        <span className="badge bg-secondary text-white">Client</span>
                        Testimonial 🙂
                    </div>
                    <h2 className="heading_text mb-0">
                        What clients say
                    </h2>
                </div>

                <div className="row">
                    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 1, 991: 2 }}>
                        <Masonry columnsCount={4} gutter="30px">
                            {testimonial.map((testimonial, tsm) => (
                                <div className="review_block pb-0" key={tsm}>
                                    <h3 className="review_title">“{testimonial.Title}”</h3>
                                    <p className="review_commtent">
                                        {testimonial.Des}
                                    </p>
                                    <div className="review_admin">
                                        <div className="review_admin_image">
                                            <img src={testimonial.tImg} alt="Roman Dymtro" />
                                        </div>
                                        <div className="review_admin_info">
                                            <h4 className="review_admin_name">{testimonial.Name}</h4>
                                            <span className="review_admin_designation">{testimonial.sub}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Masonry>
                    </ResponsiveMasonry>
                </div>
            </div>*/}
        </section>
    );
}

export default Testimonial;