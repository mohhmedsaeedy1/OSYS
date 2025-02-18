import React from 'react';
import sIcon1 from '../../images/icons/icon_clock.svg'
import sIcon2 from '../../images/icons/icon_dart_board_2.svg'
import sIcon3 from '../../images/icons/icon_target.svg'

const Policy = [
    {
        title: 'Our History',
        subTitle: <span className="justify-text">Since 2015, OSYS has been a visionary and reliable software engineering partner for businesses across industries.</span>,
        icon: sIcon1,
    },
    {
        title: 'Our Mission',
        subTitle: <span className="justify-text">Deliver scalable and reliable software solutions tailored to client needs. Enable businesses to comply with regulations seamlessly.</span>,
        icon: sIcon2,
    },
    {
        title: 'Our Vision',
        subTitle: <span className="justify-text">To be a global leader in developing innovative, user-friendly, and reliable software solutions, fostering business growth and technological progress.</span>,
        icon: sIcon3,
    },


]


const PolicySection = (props) => {

    return (
        <section className="policy_section bg-light">
            <div className="container">
                <div className="row">
                    {Policy.map((policy, pitem) => (
                        <div className="col-lg-4" key={pitem}>
                            <div className="iconbox_block">
                                <div className="iconbox_icon">
                                    <img src={policy.icon} alt="Dollar SVG Icon" />
                                </div>
                                <div className="iconbox_content">
                                    <h3 className="iconbox_title">{policy.title}</h3>
                                    <p className="mb-0">
                                        {policy.subTitle}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default PolicySection;