import { Link, useLocation } from "react-router-dom";

import React from "react";
import style from "./style.module.scss";

const Footer = () => {

    const { pathname } = useLocation();
    if (pathname === "/Signup") return null;
    if (pathname === "/Login") return null;

    return (
        <div className={style.footer}>

            <div className={style.footerSpacer}></div>

            <section className={style.footerLogo}>
                <div>
                    <h2>Buck's Place</h2>
                </div>
                <div>
                    <Link to={'/Signup'} className={style.footerBtn}>Sign Up</Link>
                    <Link to={'/Login'} className={style.footerBtn}>Login</Link>
                </div>
            </section>

            <section className={style.footerLinksSection}>
                <div className={style.footerLinksList}>
                    <h2>Blog</h2>

                    <Link to={'/Journal-Page'} className={style.footerLinks}>Journal</Link>

                </div>
                <div>
                    <h2>Contact/About Me</h2>
                    <Link to={'/Contact'} className={style.footerLinks}>Contact</Link>
                </div>
            </section>

            <section className={style.footerCopy}>
                <div className={style.footerCopyText}>
                    <h6 className={style.footerCopyH6}>&copy; 2022 - BuckNasty Productions</h6>
                </div>
            </section>
        </div>
    )
}
export default Footer;