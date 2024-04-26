import React, {useEffect, useState} from 'react';
import css from './filter-bar.module.css';
import filterLogo from "../../assets/logos/filter_logo.png";
import evenement from "../../assets/filter-images/evenement.png";
import handenwerk from "../../assets/filter-images/handenwerk.png";
import marketing from "../../assets/filter-images/marketing.png";
import technisch from "../../assets/filter-images/technisch.png";
import {useNavigate} from "react-router-dom";

interface FilterBarProps {
    setFilteredCategory: (category: string) => void;
    setCurrentPage: (page: number) => void;
    setTotalPages: (total: number) => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({ setFilteredCategory, setCurrentPage, setTotalPages }: FilterBarProps) => {
    const navigate = useNavigate();

    const reset = () => {
        setCurrentPage(0); // Reset current page to 0
        setFilteredCategory(""); // Clear filtered category
        navigate(`/dashboard/page/1`); // Redirect to page 1
    };

    const handleCategorySelect = (category: string) => {
        reset();
        setFilteredCategory(category);
    };

    return (
        <div className={css.container}>
            <div className={css.logo}>
                <img src={filterLogo} className={css.logoSpacing} alt="Filter logo"/>
                Categorieën
            </div>
            <div className={css.categories}>
                <div className={css.categoriesItem} onClick={() => handleCategorySelect('TASK1')}>
                    <img src={technisch} className={css.logoSpacing} alt="Topic logo"/>
                    <a>Task1</a>
                </div>
                <div className={css.categoriesItem} onClick={() => handleCategorySelect('TASK2')}>
                    <img src={marketing} className={css.logoSpacing} alt="Topic logo"/>
                    <a>Task2</a>
                </div>
                <div className={css.categoriesItem} onClick={() => handleCategorySelect('TASK3')}>
                    <img src={handenwerk} className={css.logoSpacing} alt="Topic logo"/>
                    <a>Task3</a>
                </div>
                <div className={css.categoriesItem} onClick={() => handleCategorySelect('OTHER')}>
                    <img src={evenement} className={css.logoSpacing} alt="Topic logo"/>
                    <a>Other</a>
                </div>
                <div className={css.buttonContainer}>
                    <button className={css.filterButton} onClick={reset}>Reset</button>
                </div>
            </div>
        </div>
    );
}
