import React from 'react';
import css from './service-button.module.css';

interface ButtonProperties {
    text: string;
    inactive: boolean;
    onClick?: () => void;
}

export const ServiceButton: React.FC<ButtonProperties> = ({ text, inactive, onClick }) => {
    return (
        <div className={css.container}>
            <button className={css.serviceButton} disabled={inactive} onClick={onClick}>{text}</button>
        </div>
    );
};
