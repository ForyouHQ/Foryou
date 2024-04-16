import React from 'react';
import css from './sign-in-text.module.css';

export const SignInText: React.FC = () => {
    return (
        <div className={css.container}>
            <p>Already Have An Account?</p>
            <p className={css.signIn}><a href="#" className={css.signInLink}>Sign in</a></p>
        </div>
    );
};
