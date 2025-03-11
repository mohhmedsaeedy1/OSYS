import React, { Fragment, useState } from 'react';
import { useTranslation } from 'react-i18next';  // استدعاء الترجمة
import List from "@mui/material/List";
import ListItem from "@mui/material/List";
import Collapse from "@mui/material/Collapse";
import { Link, useNavigate, useLocation } from "react-router-dom";

const scrollToSection = (sectionId, navigate, location) => {
    if (location.pathname === "/") {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    } else {
        navigate("/");
        setTimeout(() => {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        }, 10);
    }
};

const menus = [
    {
        id: 1,
        title: 'home',  // مفتاح الترجمة
        link: '/home',
    },
    {
        id: 3,
        title: 'company',  // مفتاح الترجمة
        action: (navigate, location) => scrollToSection("/about", navigate, location),
        submenu: [
            {
                id: 322,
                title: 'about_us',  // مفتاح الترجمة
                link: '/about'
            },
            {
                id: 3222,
                title: 'pricing',  // مفتاح الترجمة
                link: '/pricing'
            },

            {
                id: 3454,
                title: "clients",  // مفتاح الترجمة
                action: (navigate, location) => scrollToSection("homeLogoSection", navigate, location),
            },
            {
                id: 31,
                title: "partners",  // مفتاح الترجمة
                action: (navigate, location) => scrollToSection("partnersSection", navigate, location),
            },
            {
                id: 345,
                title: 'team',  // مفتاح الترجمة
                link: '/team'
            },
            {
                id: 3454,
                title: 'code_of_ethics',  // مفتاح الترجمة
                link: '/team-single/Atticus-Sterling'
            }
        ]
    },
    {
        id: 4,
        title: 'services',  // مفتاح الترجمة
        link: '/service',
    },
    {
        id: 5,
        title: 'products',  // مفتاح الترجمة
        link: '/portfolio',
    },
    {
        id: 6,
        title: 'blog',  // مفتاح الترجمة
        link: '/blog',
    },
    {
        id: 88,
        title: 'contact_us',  // مفتاح الترجمة
        link: '/contact',
    }
]

const MobileMenu = () => {
    const { t, i18n } = useTranslation();  // استدعاء الترجمة
    const [openId, setOpenId] = useState(0);
    const navigate = useNavigate();
    const location = useLocation();

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

    // تغيير اللغة عند الضغط على الزر
    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };

    return (
        <div>
            <button onClick={() => changeLanguage('ar')} style={{ margin: '10px' }}>عربي</button>
            <button onClick={() => changeLanguage('en')} style={{ margin: '10px' }}>English</button>

            <ul className="main_menu_list clearfix">
                {menus.map((item, mn) => (
                    <ListItem className={item.id === openId ? "active" : null} key={mn}>
                        {item.submenu ? (
                            <Fragment>
                                <p
                                    onClick={() => setOpenId(item.id === openId ? 0 : item.id)}
                                    style={{ cursor: "pointer" }}
                                >
                                    {t(item.title)}
                                    <i
                                        className={
                                            item.id === openId ? "fa fa-angle-up" : "fa fa-angle-down"
                                        }
                                    ></i>
                                </p>
                                <Collapse in={item.id === openId} timeout="auto" unmountOnExit>
                                    <List className="subMenu">
                                        {item.submenu.map((submenu, i) => (
                                            <ListItem key={i}>
                                                {submenu.action ? (
                                                    <p
                                                        onClick={() => {
                                                            submenu.action(navigate, location);
                                                            setOpenId(0);
                                                        }}
                                                        style={{ cursor: "pointer" }}
                                                    >
                                                        {t(submenu.title)}
                                                    </p>
                                                ) : (
                                                    <Link
                                                        onClick={() => {
                                                            ClickHandler();
                                                            setOpenId(0);
                                                        }}
                                                        to={submenu.link}
                                                    >
                                                        {t(submenu.title)}
                                                    </Link>
                                                )}
                                            </ListItem>
                                        ))}
                                    </List>
                                </Collapse>
                            </Fragment>
                        ) : (
                            <Link
                                className="active"
                                onClick={() => {
                                    ClickHandler();
                                    setOpenId(0);
                                }}
                                to={item.link}
                            >
                                {t(item.title)}
                            </Link>
                        )}
                    </ListItem>
                ))}
            </ul>
        </div>
    );
};

export default MobileMenu;
