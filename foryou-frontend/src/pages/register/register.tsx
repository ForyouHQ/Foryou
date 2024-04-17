import React from 'react';
import css from './register.module.css';
import {Shapes} from "../../components/background-shapes/shapes";
import {RegisterCard} from "../../components/register-card/register-card";
import Navbar from "../../components/navbar/navbar";

export const Register: React.FC = () => {
    return (
        <div className={css.container}>
            <Navbar/>
            <Shapes/>
            <RegisterCard/>
        </div>
    );
};