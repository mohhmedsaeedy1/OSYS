import { useTranslation } from 'react-i18next';  // استدعاء الترجمة
import timg1 from '../images/team/team_member_image_1.webp';
import timg2 from '../images/team/team_member_image_2.webp';
import timg3 from '../images/team/team_member_image_3.webp';
import timg4 from '../images/team/team_member_image_4.webp';
import timg5 from '../images/team/team_member_image_5.webp';

const Teams = () => {
    const { t, i18n } = useTranslation(); // استدعاء الترجمة
    const currentLang = i18n.language; // الحصول على اللغة الحالية

    const teamData = [
        {
            Id: '1',
            tImg: timg1,
            name: t('team_member_1_name'),
            slug: currentLang === "ar" ? 'أتيكوس-ستيرلينج' : 'Atticus-Sterling',
            title: t('team_member_1_title'),
        },
        {
            Id: '2',
            tImg: timg2,
            name: t('team_member_2_name'),
            slug: currentLang === "ar" ? 'أوريون-جاسبر' : 'Orion-Jasper',
            title: t('team_member_2_title'),
        },
        {
            Id: '3',
            tImg: timg3,
            name: t('team_member_3_name'),
            slug: currentLang === "ar" ? 'أوغست-إيفريست' : 'August-Everest',
            title: t('team_member_3_title'),
        },
        {
            Id: '4',
            tImg: timg4,
            name: t('team_member_4_name'),
            slug: currentLang === "ar" ? 'مافريك-فينيكس' : 'Maverick-Phoenix',
            title: t('team_member_4_title'),
        },
        {
            Id: '5',
            tImg: timg5,
            name: t('team_member_5_name'),
            slug: currentLang === "ar" ? 'داكستون-أطلس' : 'Daxton-Atlas',
            title: t('team_member_5_title'),
        },
        {
            Id: '6',
            tImg: timg4,
            name: t('team_member_6_name'),
            slug: currentLang === "ar" ? 'مافريك-فينيكس' : 'Maverick-Phoenix',
            title: t('team_member_6_title'),
        }
    ];

    return teamData;
}

export default Teams;
