import sImg1 from '../images/services/service_image_1.webp'
import sImg2 from '../images/services/service_image_2.webp'
import sImg3 from '../images/services/service_image_3.webp'
import sImg4 from '../images/services/service_image_4.webp'
import sImg5 from '../images/services/service_image_5.webp'

import icon1 from '../images/icons/icon_code.svg'
import icon2 from '../images/icons/icon_programming_tree.svg'
import icon3 from '../images/icons/icon_monitor_2.svg'
import icon4 from '../images/icons/icon_phone.svg'
import icon5 from '../images/icons/icon_bug.svg'
import icon6 from '../images/icons/icon_programming.svg'

import icon7 from '../images/icons/icon_analisis_2.svg'
import icon8 from '../images/icons/icon_process.svg'
import icon9 from '../images/icons/icon_chart_2.svg'
import icon10 from '../images/icons/icon_meeting.svg'
import icon11 from '../images/icons/icon_bulb_2.svg'
import icon12 from '../images/icons/icon_speed_miter.svg'



const Services = [
    {
        Id: '1',
        sImg:sImg1,
        title: 'خدمات إدارة تكنولوجيا المعلومات',
        slug: 'IT-Management-Services',
        thumb1: 'التطوير ',
        thumb2: 'الاستمرارية',
        col:'col-lg-6',
        description: 'إدارة شاملة لتكنولوجيا المعلومات تضمن تحسين الأداء، وتعزيز الأمان، وتقديم حلول تقنية متطورة لدعم نمو أعمالك بكفاءة.',
    },
    {
        Id: '2',
        sImg:sImg2,
        title: 'تتبع البيانات وأمان المعلومات',
        slug: 'Data-Tracking-and-Security',
        thumb1:'المراقبة ',
        thumb2:'الحماية',
        col:'col-lg-6',
        description: 'حلول متقدمة لتتبع البيانات وحمايتها، تضمن مراقبة دقيقة للمعلومات، واكتشاف التهديدات، وتعزيز الأمان السيبراني للحفاظ على سرية البيانات وسلامتها.',
    },
    {
        Id: '3',
        sImg:sImg3,
        title: 'تطوير المواقع الإلكترونية',
        slug: 'Website-Development',
        thumb1: 'الإبداع ',
        thumb2: 'الفعالية',
        col:'col-lg-4',
        description: 'تصميم وتطوير مواقع إلكترونية احترافية تلبي احتياجات أعمالك، مع تحسين الأداء، وتجربة مستخدم سلسة، وحلول متكاملة لضمان تواجد رقمي قوي وجذاب.',
    },
    {
        Id: '4',
        sImg:sImg4,
        title: 'حلول التكنولوجيا الحديثة',
        slug: 'Modern-Technology-Solution',
        thumb1:'الابتكار ',
        thumb2:'التقدم',
        col:'col-lg-4',
        description: 'حلول تقنية متطورة تعتمد على أحدث الابتكارات لتوفير أنظمة ذكية، وأداء فعال، وتجربة مستخدم سلسة، مما يساعد الشركات على النمو والنجاح في العصر الرقمي.',
    },
    {
        Id: '5',
        sImg:sImg5,
        title: 'خدمات تصميم واجهة المستخدم',
        slug: 'UI-UX-Design-Services',
        thumb1:'الجاذبية ',
        thumb2:'السهولة',
        col:'col-lg-4',
        description:'تصميم واجهات وتجارب مستخدم مبتكرة تجمع بين الجمال والوظيفية، لضمان تجربة سلسة وتفاعلية تعزز رضا المستخدمين وترفع من كفاءة المنتج الرقمي',
    },
    {
        Id: '6',
        sImg:icon1,
        title: 'تطوير البرمجيات المخصصة',
        slug: 'Custom Software Development',
        features: ['Software architecture design', 'System integration services', 'Data migration services', 'Legacy app modernization']
    },
    {
        Id: '7',
        sImg:icon2,
        title: 'خدمات التدقيق واستشارات تكنولوجيا المعلومات',
        slug: 'Audit-&-IT-Consulting-Services',
        features: ['TechGuard Audit', 'CyberSafe Audit & IT Consulting', 'AssuranceEdge & IT Consulting', 'IT Sentry Audit & IT Consulting']
    },
    {
        Id: '8',
        sImg:icon3,
        title: 'تصميم وتطوير تطبيقات الويب',
        slug: 'Web-Application-Design-and-Development',
        features: ['Web app development services', 'Web portal development services', 'تطوير المواقع الإلكترونية services', 'Offshore web development']
    },
    {
        Id: '9',
        sImg:icon4,
        title: 'تصميم وتطوير تطبيقات الجوال',
        slug: 'Mobile-App-Design-and-Development',
        features: ['Android development services', 'iOS app development services', 'Mobile application design services', 'Enterprise mobile app development']
    },
    {
        Id: '10',
        sImg:icon5,
        title: 'خدمات تصميم واجهة المستخدم',
        slug: 'Best-UI-UX-Design-Services',
        features: ['PixelPerfection UI/UX Design', 'DesignCraft UI/UX Design', 'CreativeWave UI/UX Design', 'InterfaceGenius UI/UX Design']
    },
    {
        Id: '11',
        sImg:icon6,
        title: 'الصيانة ودعم العملاء',
        slug: 'Maintenance-and-Customer-Support',
        features: ['CareCraft Maintenance', 'FixItPro Maintenance', 'TechCare Maintenance', 'AssistEdge Maintenance']
    },
    {
        Id: '12',
        sImg:icon7,
        title: 'التخطيط الاستراتيجي والتنفيذ',
        slug: 'Strategic-Planning-and-Execution',
        description:'Our strategic plans are crafted to align with your vision, ensuring effective execution and delivering measurable success.',
    },
    {
        Id: '13',
        sImg:icon8,
        title: 'تحسين عمليات الأعمال',
        slug: 'Business-Process-Optimization',
        description:'We streamline workflows and processes to improve efficiency, reduce costs, and enhance overall organizational performance.',
    },
    {
        Id: '14',
        sImg:icon9,
        title: ' استشارات التحول الرقمي',
        slug: 'Digital-Transformation-Consulting',
        description:'We empower businesses to embrace cutting-edge technologies, modernize operations, and achieve a seamless digital evolution.',
    },
    {
        Id: '15',
        sImg:icon10,
        title: 'التخطيط الذكي والتنفيذ الفعّال',
        slug: 'Strategic-Planning-and-Executions',
        description: 'We deliver bespoke strategic planning solutions designed to align with your business vision and objectives, enabling seamless execution .',
    },
    {
        Id: '16',
        sImg:icon11,
        title: 'حلول إدارة التغيير',
        slug: 'Change-Management-Solutions',
        description:'Our change management solutions help organizations adapt effectively to transformations, ensuring minimal disruption and maximum value realization.',
    },
    {
        Id: '17',
        sImg:icon12,
        title: 'مؤشرات الأداء وتطوير قياس الأداء',
        slug: 'Performance-Metrics-and-KPI-Development',
        description:'We develop tailored performance measurement frameworks and KPIs that align with your goals to track progress, ensure accountability, and drive growth.',
    },
]    

export default Services;