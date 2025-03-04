import { useRef, useEffect } from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import icon1 from '../../../images/icons/icon_c.svg'
import icon2 from '../../../images/icons/icon_g2.svg'
import tImg1 from '../../../images/avatar/avatar_5.webp'
import tImg2 from '../../../images/avatar/avatar_6.webp'
import tImg3 from '../../../images/avatar/avatar_7.webp'

import clogo from '../../../images/clients/client_logo_8.webp'
{/* import flag from '../../../images/flag/ukraine_flag.webp' */ }



const testimonial = [
    {
        id: '01',
        tImg: tImg1,
        Title: 'خدمات البرمجيات المدهشة',
        Des: "الحلول التي يقدمونها تساعد أعمالنا على العمل بسلاسة أكبر. تمكنا من إجراء تطورات سريعة معهم، وحققنا رؤية المنتج في الوقت المحدد الذي وضعناه. استمع إليهم لأنهم يمكنهم تقديم نصائح قوية حول كيفية بناء منتجات جيدة.",
        Name: 'مافريك فينيكس',
        sub: 'عضو مجلس الإدارة، UNIQA',
        country: 'سياتل، أوكرانيا',
    },
    {
        id: '02',
        tImg: tImg2,
        Title: 'حلول برمجية مبتكرة',
        Des: "الحلول التي تقدمها هذه الشركة قد أثرت بشكل كبير على سير أعمالنا. استطاع فريق العمل إنجاز التطويرات بسرعة، وتوصلنا إلى أهدافنا في المدة المحددة. نوصي بشدة بالاستماع إليهم لأنهم يمتلكون المعرفة والخبرة لبناء منتجات قوية ومؤثرة.",
        Name: 'سارة أندرسون',
        sub: 'مديرة العمليات، TechForward',
        country: 'لندن، المملكة المتحدة',
    },

    {
        id: '03',
        tImg: tImg3,
        Title: 'خدمات البرمجيات عالية الجودة',
        Des: "لقد أثبتت الحلول التي يقدمها الفريق نجاحًا كبيرًا في تحسين العمليات لدينا. تمكننا من تسريع التقدم والوصول إلى أهدافنا بسرعة وفعالية. إذا كنت تبحث عن نصائح استراتيجية حول كيفية بناء حلول برمجية قوية، هؤلاء هم الفريق الذي تحتاجه.",
        Name: 'ديفيد جونسون',
        sub: 'مدير التكنولوجيا، InnovateTech',
        country: 'نيويورك، الولايات المتحدة',
    }
]

const Testimonial = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperRef = useRef(null);

    useEffect(() => {
        if (swiperRef.current && prevRef.current && nextRef.current) {
            swiperRef.current.params.navigation.prevEl = prevRef.current;
            swiperRef.current.params.navigation.nextEl = nextRef.current;
            swiperRef.current.navigation.init();
            swiperRef.current.navigation.update();
        }
    }, []);

    return (

        <div className="row">
            <div className="col-lg-4">
                <div className="deals_winner_customers">
                    <h3 className="title_text">
                        <mark>3,900+</mark>عميل فازوا بالصفقات مع OSYS.
                    </h3>
                    <div className="row">
                        <div className="col-6">
                            <div className="review_short_info">
                                <div className="icon">
                                    <img src={icon1} alt="C SVG Icon" />
                                </div>
                                <ul className="rating_block unordered_list">
                                    <li><i className="fa-solid fa-star fa-fw"></i></li>
                                    <li><i className="fa-solid fa-star fa-fw"></i></li>
                                    <li><i className="fa-solid fa-star fa-fw"></i></li>
                                    <li><i className="fa-solid fa-star fa-fw"></i></li>
                                    <li><i className="fa-solid fa-star fa-fw"></i></li>
                                </ul>
                                <div className="review_counter">اكثر من  <b>200+</b> تقييم</div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="review_short_info">
                                <div className="icon">
                                    <img src={icon2} alt="C SVG Icon" />
                                </div>
                                <ul className="rating_block unordered_list">
                                    <li><i className="fa-solid fa-star fa-fw"></i></li>
                                    <li><i className="fa-solid fa-star fa-fw"></i></li>
                                    <li><i className="fa-solid fa-star fa-fw"></i></li>
                                    <li><i className="fa-solid fa-star fa-fw"></i></li>
                                    <li><i className="fa-solid fa-star fa-fw"></i></li>
                                </ul>
                                <div className="review_counter">اكثر من <b>300+</b> تقييم</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-8">
                <div className="review_onecol_wrapper">
                    <div className="review_onecol_carousel">
                        <Swiper
                            // install Swiper modules
                            modules={[Navigation]}
                            spaceBetween={50}
                            slidesPerView={1}
                            loop={true}
                            speed={1800}
                            parallax={true}
                            ref={swiperRef}
                            onBeforeInit={(swiper) => {
                                swiperRef.current = swiper;
                            }}
                        >
                            {testimonial.map((testimonial, tsm) => (
                                <SwiperSlide key={tsm}>
                                    <div className="review_block_2">
                                        <h3 className="review_title">“{testimonial.Title}”</h3>
                                        <p className="review_commtent">
                                            {testimonial.Des}
                                        </p>
                                        <div className="d-md-flex justify-content-md-between">
                                            <div className="review_admin">
                                                <div className="review_admin_image">
                                                    <img src={testimonial.tImg} alt="Maverick Phoenix" />
                                                </div>
                                                <div className="review_admin_info">
                                                    <h4 className="review_admin_name">{testimonial.Name}</h4>
                                                    <span className="review_admin_designation">{testimonial.sub}</span>
                                                    <div className="review_admin_country">
                                                        {/* <span className="country_flag">
                                                             <img src={flag} alt="Ukraine Flag" />
                                                    </span> */}
                                                        <span className="country_text">{testimonial.country}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <div className="review_admin_logo">
                                                <img src={clogo} alt="Review Admin Logo" />
                                            </div> */}
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>


                        <div className="carousel_arrows_nav">
                            <button ref={prevRef} type="button" className="r1cc-swiper-button-prev">
                                <i className="fa-solid fa-arrow-left"></i>
                            </button>
                            <button ref={nextRef} type="button" className="r1cc-swiper-button-next">
                                <i className="fa-solid fa-arrow-right"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonial;