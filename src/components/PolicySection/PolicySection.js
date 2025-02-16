import React from 'react';
import sIcon1 from '../../images/icons/icon_user_check.svg'
import sIcon2 from '../../images/icons/icon_headphone.svg'
import sIcon3 from '../../images/icons/icon_dollar.svg'

const Policy = [
    {
        title: 'Expert Software Solutions',
        subTitle: 'At OSYS, we take pride in our highly skilled team, delivering innovative software solutions tailored to diverse industries and unique business needs.',
        icon: sIcon1,
    },
    {
        title: 'Rapid Support Services',
        subTitle: 'Our commitment to efficiency ensures industry-leading customer support, prioritizing swift resolutions to guarantee client satisfaction.',
        icon: sIcon2,
    },
    {
        title: 'Usage-Based Pricing',
        subTitle: 'We provide competitive pricing plans, offering exceptional value and actively supporting your growth with cutting-edge technology.',
        icon: sIcon3,
    },


]


const PolicySection = (props) => {

    return (
        <section className="policy_section">
            <div className="container">
                <div className="row">
                    {Policy.map((policy, pitem) => (
                        <div className="col-lg-4" key={pitem}>
                            <div className="iconbox_block layout_icon_left">
                                <div className="iconbox_icon bg-secondary-subtle">
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