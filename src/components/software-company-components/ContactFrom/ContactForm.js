import React, { useState } from 'react';
import SimpleReactValidator from 'simple-react-validator';
import { useTranslation } from 'react-i18next'; // استيراد الترجمة

const ContactForm = (props) => {
    const { t } = useTranslation(); // استخدام الترجمة هنا

    const [forms, setForms] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: ''
    });
    const [validator] = useState(new SimpleReactValidator({
        className: 'errorMessage'
    }));

    const changeHandler = e => {
        setForms({ ...forms, [e.target.name]: e.target.value })
        if (validator.allValid()) {
            validator.hideMessages();
        } else {
            validator.showMessages();
        }
    };

    const submitHandler = e => {
        e.preventDefault();
        if (validator.allValid()) {
            validator.hideMessages();
            setForms({
                name: '',
                email: '',
                company: '',
                phone: '',
                message: ''
            })
        } else {
            validator.showMessages();
        }
    };

    return (
        <form className="xb-item--form contact-from" onSubmit={(e) => submitHandler(e)}>
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                        <label className="input_title" htmlFor="input_name">
                            <i className="fa-regular fa-user"></i>
                            {t('name')}
                        </label>
                        <input
                            value={forms.name}
                            type="text"
                            name="name"
                            className="form-control"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            placeholder={t('your_name')} />
                        {validator.message('name', forms.name, 'required|alpha_space')}
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label className="input_title" htmlFor="input_email">
                            <i className="fa-regular fa-envelope"></i>
                            {t('email')}
                        </label>
                        <input
                            value={forms.email}
                            type="email"
                            name="email"
                            className="form-control"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            placeholder={t('your_email')} />
                        {validator.message('email', forms.email, 'required|email')}
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label className="input_title" htmlFor="input_phone">
                            <i className="fa-regular fa-phone-volume"></i>
                            {t('phone')}
                        </label>
                        <input
                            value={forms.phone}
                            type="phone"
                            name="phone"
                            className="form-control"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            placeholder={t('your_phone')} />
                        {validator.message('phone', forms.phone, 'required|phone')}
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label className="input_title" htmlFor="input_company">
                            <i className="fa-regular fa-globe"></i>
                            {t('company')}
                        </label>
                        <input
                            value={forms.company}
                            type="text"
                            name="company"
                            className="form-control"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            placeholder={t('your_company')} />
                        {validator.message('company', forms.company, 'required')}
                    </div>
                </div>
                <div className="col-12">
                    <div className="form-group">
                        <label className="input_title" htmlFor="input_textarea">
                            <i className="fa-regular fa-comments"></i>
                            {t('message')}
                        </label>
                        <textarea
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            value={forms.message}
                            type="text"
                            name="message"
                            className="form-control"
                            placeholder={t('your_message')}>
                        </textarea>
                        {validator.message('message', forms.message, 'required')}
                    </div>
                    <button type="submit" className="btn btn-primary">
                        <span className="btn_label" data-text={t('send_request')}>{t('send_request')}</span>
                        <span className="btn_icon">
                            <i className="fa-solid fa-arrow-up-right"></i>
                        </span>
                    </button>
                </div>
            </div>
        </form>
    )
}

export default ContactForm;
