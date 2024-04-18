import React from 'react';
import css from './login-input.module.css';

export const LoginInput: React.FC = () => {
    return (
        <div className={css.container}>
            <div className={css.labelInputContainer}>
                <label htmlFor="username" className={css.label}>Email</label>
                <input id="username" type="text" className={css.regularInput}/>
            </div>

            <div className={css.labelInputContainer}>
                <label htmlFor="confirmPassword" className={css.label}>Password</label>
                <input id="confirmPassword" type="password" className={css.regularInput}/>
            </div>
        </div>
    );
};