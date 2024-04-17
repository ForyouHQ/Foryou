import React from 'react';
import css from './navbar.module.css';
import {NavLink} from "react-router-dom";
import logo from "../../assets/logos/logo_foryou.svg";

const Navbar: React.FC = () => {
    return (
        <nav className={css.navbar}>
            <NavLink to="/" className={css.logo}>
                <img src={logo} className={css.logo} alt={"ForYou"}/>
            </NavLink>
            <ul className={css.navbarNav}>
                <div className={css.buttonContainer}>
                    <NavLink to="/login">
                        <button className={`${css.btn} ${css.btnSignin}`}>Log in</button>
                    </NavLink>
                    <NavLink to="/register">
                        <button className={`${css.btn} ${css.btnRegister}`}>Register</button>
                    </NavLink>
                </div>
            </ul>
        </nav>
    );
};

export default Navbar;