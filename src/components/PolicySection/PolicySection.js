import React from 'react';
import sIcon1 from '../../images/icons/icon_user_check.svg'
import sIcon2 from '../../images/icons/icon_headphone.svg'
import sIcon3 from '../../images/icons/icon_dollar.svg'

const Policy = [
    {
        title: 'حلول برمجية متخصصة',
        subTitle: 'في OSYS، نفخر بفريقنا عالي الكفاءة الذي يقدم حلول برمجية مبتكرة ومخصصة لمختلف الصناعات واحتياجات الأعمال الفريدة.',
        icon: sIcon1,
    },
    {
        title: 'خدمات دعم سريعة',
        subTitle: 'التزامنا بالكفاءة يضمن دعمًا للعملاء بمستوى ريادي في الصناعة، مع التركيز على الحلول السريعة لضمان رضا العملاء.',
        icon: sIcon2,
    },
    {
        title: 'الاسعار حسب الاستخدام',
        subTitle: 'نقدم خطط اسعار تنافسية توفر قيمة استثنائية، وندعم نموك بفعالية من خلال أحدث التقنيات.',
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