import React, { useState, useEffect } from 'react';
import css from './dashboard.module.css';
import Navbar from "../../components/navbar/navbar";
import { DashboardServices } from "../../components/dashboard-services/dashboard-services";
import { FilterBar } from "../../components/filter-bar/filter-bar";
import { useNavigate, useParams } from 'react-router-dom';

export const Dashboard: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<number>(0);
    const [totalPages, setTotalPages] = useState<number>(0);
    const { pageNumber = '1' } = useParams<{ pageNumber?: string }>();
    const navigate = useNavigate();

    // Redirect to the last page if the pageNumber is invalid
    useEffect(() => {
        const parsedPageNumber = parseInt(pageNumber, 10);
        if (isNaN(parsedPageNumber) || parsedPageNumber < 1 || parsedPageNumber > totalPages) {
            navigate(`/dashboard/page/${totalPages}`);
            return;
        }
        setCurrentPage(parsedPageNumber - 1);
    }, [pageNumber, totalPages, navigate]);

    const handlePreviousClick = () => {
        setCurrentPage(currentPage - 1);
        updateUrl(currentPage - 1);
    };

    const handleNextClick = () => {
        setCurrentPage(currentPage + 1);
        updateUrl(currentPage + 1);
    };

    const updateUrl = (page: number) => {
        navigate(`/dashboard/page/${page + 1}`);
    };

    return (
        <div className={css.container}>
            <Navbar/>
            <div className={css.buttons}>
                <button onClick={handlePreviousClick} disabled={currentPage === 0} className={css.buttonOne}>Previous</button>
                <button onClick={handleNextClick} disabled={currentPage === totalPages - 1} className={css.buttonTwo}>Next</button>
            </div>
            <div className={css.services}>
                <DashboardServices currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} setTotalPages={setTotalPages} />
            </div>
            <div className={css.filterBar}>
                <FilterBar/>
            </div>
        </div>
    );
};
