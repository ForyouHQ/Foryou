import React from 'react';
import css from './login.module.css';
import {Shapes} from "../../components/background-shapes/shapes";
import {LoginCard} from "../../components/login-card/login-card";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";

export const Login: React.FC = () => {
    return (
        <>
            <div className={css.container}>
                <Navbar/>
                <Shapes/>
                <LoginCard/>
            </div>
            <Footer/>
        </>
    );
};