import React from 'react';
import sIcon1 from '../../images/icons/icon_clock.svg'
import sIcon2 from '../../images/icons/icon_dart_board_2.svg'
import sIcon3 from '../../images/icons/icon_target.svg'

const Policy = [
    {
        title: 'تاريخنا',
        subTitle: <span className="justify-text">منذ عام 2015، كانت OSYS شريكاً استراتيجياً وموثوقاً في هندسة البرمجيات للشركات عبر مختلف القطاعات.</span>,
        icon: sIcon1,
    },
    {
        title: 'رسالتنا',
        subTitle: <span className="justify-text">تقديم حلول برمجية مرنة وموثوقة تتناسب مع احتياجات العملاء، مع تمكين الشركات من الامتثال للوائح بسلاسة.
</span>,
        icon: sIcon2,
    },
    {
        title: 'رؤيتنا',
        subTitle: <span className="justify-text">أن نصبح رواداً عالميين في تطوير حلول برمجية مبتكرة، سهلة الاستخدام، وموثوقة، مما يعزز نمو الأعمال والتقدم التكنولوجي.
</span>,
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