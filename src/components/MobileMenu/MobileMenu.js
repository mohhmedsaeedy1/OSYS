import React, { Fragment, useState } from 'react';
import List from "@mui/material/List";
import ListItem from "@mui/material/List";
import Collapse from "@mui/material/Collapse";
import { Link, useNavigate, useLocation } from "react-router-dom";

const scrollToSection = (sectionId, navigate, location) => {
    if (location.pathname === "/") {
        // إذا كنا بالفعل في الصفحة الرئيسية
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    } else {
        // إذا كنا في صفحة أخرى، انتقل إلى الصفحة الرئيسية أولاً
        navigate("/");
        setTimeout(() => {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        }, 10); // تأخير بسيط لانتظار التنقل
    }
};
        const menus = [
            {
                id: 1,
                title: 'Home',
                link: '/home',
            /*
            submenu: [
                {
                    id: 11,
                    title: 'IT Solution',
                    link: '/home'
                },
                {
                    id: 12,
                    title: 'Software Company',
                    link: '/home_software_company'
                },
                {
                    id: 13,
                    title: 'Business Consulting',
                    link: '/home_business_consulting'
                }
            ]
            */    },
    {
        id: 3,
        title: 'Company',
        action: (navigate, location) => scrollToSection("/about", navigate, location),
        submenu: [
            {
                id: 322,
                title: 'About',
                link: '/about'
            },
            {
                id: 3222,
                title: 'Prices',
                link: '/pricing'
            },
            {
                id: 31,
                title: "Partners",
                action: (navigate, location) => scrollToSection("partnersSection", navigate, location),
            },
            {
                id: 3454,
                title: "Customers",
                action: (navigate, location) => scrollToSection("homeLogoSection", navigate, location),
            },
            {
                id: 345,
                title: 'Team',
                link: '/team'
            },
            {
                id: 3454,
                title: 'Code of ethics',
                link: '/team-single/Atticus-Sterling'
            }
        ]
    },
    {
        id: 4,
        title: 'Service',
        link: '/service',
                // submenu: [
                //     {
                //         id: 41,
                //         title: 'Service',
                //         link: '/service'
                //     },
                //     {
                //         id: 42,
                //         title: 'Service Details',
                //         link: '/service-single/IT-Management-Services'
                //     }
                // ]
            },
    {
        id: 5,
        title: 'Products',
        link: '/portfolio',
    } ,
    {
        id: 6,
        title: 'Blog',
        link: '/blog',
    },
    {
        id: 88,
        title: 'Contact',
        link: '/contact',
    }


]

const MobileMenu = () => {
    const [openId, setOpenId] = useState(0);
    const navigate = useNavigate();
    const location = useLocation();

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

    return (
        <ul className="main_menu_list clearfix">
            {menus.map((item, mn) => (
                <ListItem className={item.id === openId ? "active" : null} key={mn}>
                    {item.submenu ? (
                        <Fragment>
                            <p
                                onClick={() => setOpenId(item.id === openId ? 0 : item.id)}
                                style={{ cursor: "pointer" }}
                            >
                                {item.title}
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
                                                        setOpenId(0); // إغلاق القائمة بعد النقر
                                                    }}
                                                    style={{ cursor: "pointer" }}
                                                >
                                                    {submenu.title}
                                                </p>
                                            ) : (
                                                <Link
                                                    onClick={() => {
                                                        ClickHandler();
                                                        setOpenId(0); // إغلاق القائمة بعد التنقل
                                                    }}
                                                    to={submenu.link}
                                                >
                                                    {submenu.title}
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
                                setOpenId(0); // إغلاق القائمة بعد التنقل
                            }}
                            to={item.link}
                        >
                            {item.title}
                        </Link>
                    )}
                </ListItem>
            ))}
        </ul>
    );
};

export default MobileMenu;