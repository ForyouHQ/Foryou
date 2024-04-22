import React, {useState} from 'react';
import css from './login-card.module.css';
import {LoginInput} from "../login-input/login-input";
import {CardButton} from "../card-button/card-button";
import {SignInText} from "../sign-in-text/sign-in-text";

export const LoginCard: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = async () => {
        try {
            const API_URL = process.env.REACT_APP_SIGN_IN_API_URL;

            if (!API_URL) throw new Error('REACT_APP_API_URL is not defined. Please set the environment variable.');

            setIsLoading(true);
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({email, password}),
            });

            const data = await response.json();
            const jwt = data.token;
            const userId = data.userId
            localStorage.setItem('token', jwt);
            localStorage.setItem('userId', userId);
            // return await response.json();
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className={css.container}>
            <h1 className={css.firstHeader}>Login</h1>
            <p className={css.secondHeader}>Log in to enjoy all the services</p>
            <LoginInput setUsername={setEmail} setPassword={setPassword}/>
            <CardButton text="Log in" inactive={isLoading} onClick={handleLogin}/>
            <SignInText firstText={""} secondText={"Forgot Password?"}/>
        </div>
    );
};
