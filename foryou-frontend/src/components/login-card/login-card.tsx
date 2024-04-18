import React, { useState } from 'react';
import css from './login-card.module.css';
import { CardHeader } from "../card-header/card-header";
import {LoginInput} from "../login-input/login-input";
import {CardButton} from "../card-button/card-button";
import {SignInText} from "../sign-in-text/sign-in-text";

export const LoginCard: React.FC = () => {
    return (
        <div className={css.container}>
            <h1 className={css.firstHeader}>Login</h1>
            <p className={css.secondHeader}>Log in to enjoy all the services</p>
            <LoginInput/>
            <CardButton text="Log in" inactive={false}/>
            <SignInText firstText={""} secondText={"Forgot Password?"}/>
        </div>
    );
};
