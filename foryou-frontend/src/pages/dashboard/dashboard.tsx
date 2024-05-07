import React, { useState, useEffect } from 'react';
import css from './dashboard.module.css';
import Navbar from "../../components/navbar/navbar";
import { DashboardServices } from "../../components/dashboard-services/dashboard-services";
import { FilterBar } from "../../components/filter-bar/filter-bar";
import { useNavigate, useParams } from 'react-router-dom';

export const Dashboard: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<number>(0);
    const [totalPages, setTotalPages] = useState<number>(0);
    const [filteredCategory, setFilteredCategory] = useState<string>(""); // State to hold filtered category
    const { pageNumber = '1' } = useParams<{ pageNumber?: string }>();
    const navigate = useNavigate();

    // Redirect to the first page if the pageNumber is invalid
    useEffect(() => {
        const parsedPageNumber = parseInt(pageNumber, 10);
        if (isNaN(parsedPageNumber) || parsedPageNumber < 1 || parsedPageNumber > totalPages) {
            navigate(`/dashboard/page/${1}`);
            return;
        }
        setCurrentPage(parsedPageNumber - 1);
    }, [pageNumber, totalPages, navigate]);

    return (
        <div className={css.container}>
            <Navbar/>

            <div className={css.services}>
                <DashboardServices currentPage={currentPage} filteredCategory={filteredCategory} totalPages={totalPages} setCurrentPage={setCurrentPage} setTotalPages={setTotalPages}/>
            </div>
            <div className={css.filterBar}>
                <FilterBar setFilteredCategory={setFilteredCategory} setCurrentPage={setCurrentPage} setTotalPages={setTotalPages} currentPage={currentPage} totalPages={totalPages}/>
            </div>
        </div>
    );
};
