import React from 'react';
import css from './sign-in-text.module.css';

interface TextProperties {
    firstText: string;
    secondText: string;
}

export const SignInText: React.FC<TextProperties> = ({firstText, secondText}) => {
    return (
        <div className={css.container}>
            <p>{firstText}</p>
            <p className={css.signIn}><a className={css.signInLink}>{secondText}</a></p>
        </div>
    );
};
