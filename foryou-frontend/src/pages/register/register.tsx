import React from 'react';
import css from './register.module.css';
import {Shapes} from "../../components/background-shapes/shapes";
import {RegisterCard} from "../../components/register-card/register-card";

export const Register: React.FC = () => {
    return (
        <div className={css.container}>
            <Shapes/>
            <RegisterCard/>
        </div>
    );
};