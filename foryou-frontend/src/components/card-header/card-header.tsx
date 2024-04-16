import React from 'react';
import css from './card-header.module.css';

interface HeaderInformation {
    topText: string;
    bottomText: string;
}

export const CardHeader: React.FC<HeaderInformation> = ({topText, bottomText}) => {
    return (
        <div className={css.container}>
            <h1>{topText}</h1>
            <p>{bottomText}</p>
        </div>
    );
};