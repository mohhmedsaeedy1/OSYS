import React from 'react';
import sIcon1 from '../../images/icons/icon_doc.svg'
import sIcon2 from '../../images/icons/icon_analysis.svg'
import sIcon3 from '../../images/icons/icon_headphone_2.svg'

const Policy = [
    {
        title: 'Rich Documentation',
        subTitle: '"Rich Documentation" refers to comprehensive, detailed, and well-organized materials that ensure users can fully understand and effectively utilize a product or service.',
        icon: sIcon1,
    },
    {
        title: 'Fastest Delivery',
        subTitle: '"Fastest Delivery" emphasizes a service or process designed to provide the quickest and most efficient results without compromising quality.',
        icon: sIcon2,
    },
    {
        title: 'Lifetime Support',
        subTitle: '"Lifetime Support" refers to a commitment by a product or service provider to offer ongoing assistance and maintenance for the entire lifespan of the product or service.',
        icon: sIcon3,
    },


]


const PolicySection = (props) => {

    return (
        <section className="{/*policy_section section_space*/}">
            <div className="container">
                <div className="{/*heading_block*/}">
                    {/*     <div className="row justify-content-lg-between">
                        <div className="col-lg-6">
                            <h2 className="heading_text mb-0">
                                Celebrating Features Discover What Sets Us
                            </h2>
                        </div>
                        <div className="col-lg-5">
                            <p className="heading_description mb-0">
We take pride in the qualities that make us stand out as a leader in IT solutions. Our true distinction lies in our steadfast dedication to innovation, excellence, and ensuring client satisfaction.                            </p>
                        </div>
                    </div>*/}
                </div>
                {/*     <div className="row pricing_policy_wrap">
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
                </div>*/}
            </div>
        </section>
    );
}

export default PolicySection;
