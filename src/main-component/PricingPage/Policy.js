import React from 'react';
import { useTranslation } from 'react-i18next'; // استيراد الترجمة
import sIcon1 from '../../images/icons/icon_doc.svg';
import sIcon2 from '../../images/icons/icon_analysis.svg';
import sIcon3 from '../../images/icons/icon_headphone_2.svg';

const Policy = [
    {
        title: 'richDocumentation',  // مفتاح الترجمة للعنوان
        subTitle: 'richDocumentationDescription',  // مفتاح الترجمة للوصف
        icon: sIcon1,
    },
    {
        title: 'fastestDelivery',  // مفتاح الترجمة للعنوان
        subTitle: 'fastestDeliveryDescription',  // مفتاح الترجمة للوصف
        icon: sIcon2,
    },
    {
        title: 'lifetimeSupport',  // مفتاح الترجمة للعنوان
        subTitle: 'lifetimeSupportDescription',  // مفتاح الترجمة للوصف
        icon: sIcon3,
    },
];

const PolicySection = (props) => {
    const { t } = useTranslation(); // استخدام الترجمة


}

export default PolicySection;
