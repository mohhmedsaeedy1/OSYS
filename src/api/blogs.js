// images
import blogImg1 from "../images/blog/blog_post_image_1.webp";
import blogImg2 from "../images/blog/blog_post_image_2.webp";
import blogImg3 from "../images/blog/blog_post_image_3.webp";
import blogImg4 from "../images/blog/blog_post_image_12.webp";
import blogImg5 from "../images/blog/blog_post_image_13.webp";
import blogImg6 from "../images/blog/blog_post_image_14.webp";
//import blogImg7 from "../images/blog/blog_post_image_15.webp";
//import blogImg8 from "../images/blog/blog_post_image_16.webp";

// images
import blogsImg1 from "../images/blog/blog_post_image_1.webp";
import blogsImg2 from "../images/blog/blog_post_image_2.webp";
import blogsImg3 from "../images/blog/blog_post_image_3.webp";
import blogsImg4 from "../images/blog/blog_post_image_1.webp";


const blogs = [
    {
        id: '1',
        title: 'الاستفادة من التحليلات لنمو الأعمال وتحديث العمليات...',
        slug:'Leveraging-Analytics-for-Business-Growth-Modernizing',
        screens: blogImg1,
        bSingle: blogsImg1,
        description: 'استخدام التحليلات المتقدمة لتحسين الأداء واتخاذ قرارات مدروسة تدفع نمو الأعمال، مع تبني أحدث التقنيات لتحديث العمليات وتعزيز الكفاءة.',
        author: 'farugia',
        authorTitle:'Sineor Consultant',
        create_at: '11/12/2024',
        comment:'35',
        thumb: 'التحول الرقمي',
        blClass:'format-standard-image',
    },
    {
        id: '2',
        title: 'كيف تشكل التقنيات الناشئة مستقبل الأعمال...',
        slug:'How-Emerging-Technologies-are-Shaping-the-Future',
        screens: blogImg2,
        bSingle: blogsImg2,
        description: 'التقنيات الناشئة تعيد تشكيل مستقبل الأعمال من خلال تحسين الكفاءة، وتمكين الابتكار، وخلق فرص جديدة للنمو والتنافسية العالمية.',
        author: 'Andrew',
        authorTitle:'Creative Director',
        create_at: '11/02/2024',
        comment:'80',
        thumb:'التحول',
        blClass:'format-standard-image',
    },
    {
        id: '3',
        title: 'إنشاء محتوى رقمي جذاب لجمهورك باستخدام البرمجيات...',
        slug: 'Creating-Engaging-Digital-for-Your-Audience-Software',
        screens: blogImg3,
        bSingle: blogsImg3,
        description: 'نقدم حلولًا مبتكرة لإنشاء محتوى رقمي تفاعلي وجذاب يلبي احتياجات جمهورك. باستخدام أحدث البرمجيات والأدوات، نساعدك في تصميم تجارب رقمية مميزة تعزز تفاعل الجمهور وتحقق أهدافك التسويقية. سواء كنت تحتاج إلى تصميم جرافيك، فيديوهات، أو محتوى تفاعلي، نضمن لك نتائج مذهلة تترك انطباعًا قويًا.',
        author: 'Kurtz',
        authorTitle:'Art Director',
        create_at: '21/08/2024',
        comment:'95',
        thumb:'التكنولوجيا',
        blClass:'format-video',
    },
    {
        id: '4',
        title: 'كيف لحلولنا البرمجية تعمل على توليد الرؤى.',
        slug: 'How-Our-Software-Solutions-Drive-Insights.',
        screens: blogImg4,
        bSingle: blogsImg4,
        description: 'تساعد حلولنا البرمجية في تحليل البيانات بذكاء واستخراج رؤى قيّمة تمكنك من اتخاذ قرارات مستنيرة. نقدم أدوات متقدمة لتحويل المعلومات المعقدة إلى استراتيجيات فعالة تعزز نمو أعمالك.',
        author: 'Alex',
        authorTitle:'Art Director',
        create_at: '18 / 08 / 2024',
        comment:'95',
        thumb:'التوجيه',
    },
    {
        id: '5',
        title: 'استكشاف الاتجاهات الناشئة في تطوير البرمجيات.',
        slug: 'Exploring-Emerging-Trends-in-Software-Development.',
        screens: blogImg5,
        bSingle: blogsImg4,
        description: 'استكشاف الاتجاهات الناشئة في تطوير البرمجيات يتيح لك البقاء في صدارة التكنولوجيا والابتكار. نقدم رؤى حول أحدث التقنيات التي تعزز كفاءة التطوير وتفتح آفاقًا جديدة للإبداع.',
        author: 'Aliza',
        authorTitle:'Art Director',
        create_at: '25 / 08 / 2024',
        comment:'95',
        thumb:'ابتكار.',
    },
    {
        id: '6',
        title: 'كيف يمكن لدمج البرمجيات تحسين سير العمل.',
        slug: 'How-Software-Integration-Can-Improve-Workflow.',
        screens: blogImg6,
        bSingle: blogsImg4,
        description: 'دمج البرمجيات يسهل تدفق البيانات بين الأنظمة المختلفة، مما يعزز الكفاءة ويقلل الأخطاء. من خلال حلول متكاملة، يمكنك تبسيط العمليات وزيادة الإنتاجية بشكل ملحوظ.',
        author: 'Tika',
        authorTitle:'Art Director',
        create_at: '17 / 08 / 2024',
        comment:'95',
        thumb:'تكامل',},
    /* 
    {
        id: '7',
        title: '5 ways to relieve stress during the holidays',
        slug: '5-ways-to-relieve-stress-during-the-holidays',
        screens: blogImg7,
        bSingle: blogsImg4,
        description: 'Embarking on a journey to study abroad is an aspiration many students..',
        author: 'Riley Steinmetz',
        authorTitle:'Art Director',
        create_at: 'April 20, 2024',
        comment:'95',
        thumb:'Live Well',
    },
    {
        id: '8',
        title: 'Baby flat head pillow - why its important',
        slug: 'Baby-flat-head-pillow-why-its-important',
        screens: blogImg8,
        bSingle: blogsImg4,
        description: 'Embarking on a journey to study abroad is an aspiration many students..',
        author: 'Ken William',
        authorTitle:'Art Director',
        create_at: 'April 24, 2024',
        comment:'95',
        thumb:'Get Well',
    },
    */
];
export default blogs;