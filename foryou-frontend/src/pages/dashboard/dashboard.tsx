import React from 'react';
import css from './dashboard.module.css';
import Navbar from "../../components/navbar/navbar";
import {DashboardServices} from "../../components/dashboard-services/dashboard-services";
import {FilterBar} from "../../components/filter-bar/filter-bar";

export const Dashboard: React.FC = () => {
    return (
        <div className={css.container}>
            <Navbar/>
            <div className={css.services}>
                <DashboardServices/>
            </div>

            <div className={css.filterBar}>
                <FilterBar/>
            </div>
        </div>
    );
};