import { getUsername, removeUsernameSession } from "../../utils/common";

import { NavLink } from "react-router-dom";
import React from "react";
import style from "./style.module.scss";

const isUser = getUsername();

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function logout() {
    removeUsernameSession();
    window.location.href='/';
}

const Header = () => {

    return (
        <div className={style.header}>
            <div className={style.nav}>
                <ul className={style.navList}>
                    <NavLink className={style.navLink} to={'/'}>Home</NavLink>
                    <NavLink className={style.navLink} to={'/Journal-Page'}>Blog</NavLink>
                    <NavLink className={style.navLink} to={'/Contact'}>Contact</NavLink>
                </ul>

                {!isUser ?
                <ul className={style.navList}>
                    <NavLink className={style.navLink} to={'/Signup'}>Sign Up</NavLink>
                    <NavLink className={style.navBtn} to={'/Login'}>Login</NavLink>
                </ul>
                :
                <ul className={style.navList}>
                <a className={style.navLink} href={'/portal'}>Welcome {isUser}</a>
                <button className={style.navBtn} onClick={() => {logout()}}><i className="uil uil-sign-out-alt" /> Signout</button>
                </ul>}
            </div>
            <button className={style.navTopBtn} id={"myBtn"} onClick={topFunction}><p className={style.navTopP}>top</p></button>
        </div>
    );
}
export default Header;