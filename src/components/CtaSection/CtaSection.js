import React from 'react';
import Bg from '../../images/backgrounds/bg_image_1.webp'
import { Link } from "react-router-dom";

const CtaSection = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="calltoaction_section parallaxie" style={{ backgroundImage: `url(${Bg})` }}>
            <div className="container text-center">
                <div className="heading_block text-white">
                    <h2 className="heading_text">
                        جاهز للعمل، لنبدأ الحديث.
                    </h2>
                    <p className="heading_description mb-0">
                        فريقنا من الخبراء جاهز للتعاون معك في كل خطوة من البداية وحتى التنفيذ.
                    </p>
                </div>
                <Link onClick={ClickHandler} to="/contact" className="btn btn-primary">
                    <span className="btn_label" data-text="تواصل معنا اليوم!">تواصل معنا اليوم!</span>
                    <span className="btn_icon">
                        <i className="fa-solid fa-arrow-up-right"></i>
                    </span>
                </Link>
            </div>
        </section>
    );
}

export default CtaSection;