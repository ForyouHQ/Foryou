import React, { useState, useEffect } from 'react';
import css from './dashboard.module.css';
import Navbar from "../../components/navbar/navbar";
import { DashboardServices } from "../../components/dashboard-services/dashboard-services";
import { FilterBar } from "../../components/filter-bar/filter-bar";

export const Dashboard: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<number>(0);
    const [totalPages, setTotalPages] = useState<number>(0);

    const handlePreviousClick = () => {
        setCurrentPage(currentPage - 1);
    };

    const handleNextClick = () => {
        setCurrentPage(currentPage + 1);
    };

    return (
        <div className={css.container}>
            <Navbar />
            <div className={css.buttons}>
                <button onClick={handlePreviousClick} disabled={currentPage === 0} className={css.buttonOne}>Previous</button>
                <button onClick={handleNextClick} disabled={currentPage === totalPages - 1} className={css.buttonTwo}>Next</button>
            </div>
            <div className={css.services}>
                <DashboardServices currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} setTotalPages={setTotalPages} />
            </div>


            <div className={css.filterBar}>
                <FilterBar />
            </div>

        </div>
    );
};
