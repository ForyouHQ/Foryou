import React from 'react';
import css from './service-button.module.css';
import {NavLink} from "react-router-dom";

interface ButtonProperties {
    text: string;
    inactive: boolean;
    to: string;
}

export const ServiceButton: React.FC<ButtonProperties> = ({text, inactive, to}) => {
    return (
        <div className={css.container}>
            <NavLink to={to} className={css.navLink}>
                <button className={css.serviceButton} disabled={inactive}>{text}</button>
            </NavLink>
        </div>
    );
};
