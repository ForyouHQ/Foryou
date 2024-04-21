import React from 'react';
import css from './login-input.module.css';

interface LoginInputProps {
    setUsername: React.Dispatch<React.SetStateAction<string>>;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
}

export const LoginInput: React.FC<LoginInputProps> = ({ setUsername, setPassword }) => {
    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    return (
        <div className={css.container}>
            <div className={css.labelInputContainer}>
                <label htmlFor="username" className={css.label}>Email</label>
                <input id="username" type="text" className={css.regularInput} onChange={handleUsernameChange} />
            </div>

            <div className={css.labelInputContainer}>
                <label htmlFor="confirmPassword" className={css.label}>Password</label>
                <input id="confirmPassword" type="password" className={css.regularInput} onChange={handlePasswordChange} />
            </div>
        </div>
    );
};
