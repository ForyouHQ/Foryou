import React from 'react';
import css from './dashboard.module.css';
import Navbar from "../../components/navbar/navbar";
import {Shapes} from "../../components/background-shapes/shapes";
import {DashboardServices} from "../../components/dashboard-services/dashboard-services";

export const Dashboard: React.FC = () => {
    return (
        <div className={css.container}>
            <Navbar/>
            <Shapes/>
            <DashboardServices/>
        </div>
    );
};