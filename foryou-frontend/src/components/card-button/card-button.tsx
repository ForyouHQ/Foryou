import React from 'react';
import css from './card-button.module.css';

interface ButtonProperties {
    text: string;
    inactive: boolean;
    onClick?: () => void;
}

export const CardButton: React.FC<ButtonProperties> = ({ text, inactive, onClick }) => {
    return (
        <div className={css.container}>
            <button disabled={inactive} className={css.button} onClick={onClick}>{text}</button>
        </div>
    );
};
