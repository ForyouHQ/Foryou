import React, {useState, useEffect} from 'react';
import css from './navbar.module.css';
import {NavLink, useNavigate} from "react-router-dom";
import logo from "../../assets/logos/logo_foryou.svg";
import {LOGIN_PAGE, TASK_UPLOAD_PAGE} from "../../constants/routes";

const Navbar: React.FC = () => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const userId = localStorage.getItem("userId");
        const jwt = localStorage.getItem("token");
        setIsLoggedIn(userId !== null && jwt !== null);
        console.log(isLoggedIn)
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("userId");
        localStorage.removeItem("token");
        setIsLoggedIn(false);
        navigate(LOGIN_PAGE);
    };

    const addTask = () => {
        navigate(TASK_UPLOAD_PAGE);
    };

    return (
        <nav className={css.navbar}>
            <NavLink to="/dashboard/page/1" className={css.logo}>
                <img src={logo} className={css.logo} alt={"ForYou"}/>
            </NavLink>
            <ul className={css.navbarNav}>
                <div className={css.buttonContainer}>
                    {isLoggedIn ? (
                        <>
                            <button className={`${css.btn} ${css.btnSignin}`} onClick={handleLogout}>Log out</button>
                            <button className={`${css.btn} ${css.btnAddTask}`} onClick={addTask}>Add Task</button>
                        </>
                    ) : (
                        <>
                            <NavLink to="/">
                                <button className={`${css.btn} ${css.btnSignin}`}>Log in</button>
                            </NavLink>
                            <NavLink to="/register">
                                <button className={`${css.btn} ${css.btnRegister}`}>Register</button>
                            </NavLink>
                        </>
                    )}
                </div>
            </ul>
        </nav>
    );
};

export default Navbar;