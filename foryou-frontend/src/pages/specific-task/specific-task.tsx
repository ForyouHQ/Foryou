import React, {useState} from 'react';
import css from './specific-task.module.css';
import Navbar from '../../components/navbar/navbar';
import {FilterBar} from '../../components/filter-bar/filter-bar';
import Footer from '../../components/footer/footer';
import {SpecificTaskCard} from '../../components/specific-task-card/specific-task-card';

export const SpecificTask = () => {
    const [filteredCategory, setFilteredCategory] = useState<string>('');
    const [currentPage, setCurrentPage] = useState<number>(0);
    const [totalPages, setTotalPages] = useState<number>(0);

    return (
        <div className={css.container}>
            <Navbar/>
            <div className={css.paddingContainer}>
                <div className={css.padding}/>
            </div>
            <div className={css.mainContent}>
                <div className={css.filterBar}>
                    <FilterBar setFilteredCategory={setFilteredCategory} setCurrentPage={setCurrentPage}
                               setTotalPages={setTotalPages} currentPage={currentPage} totalPages={totalPages}/>
                </div>
                <div className={css.cardContainer}>
                    <SpecificTaskCard/>
                </div>
            </div>
            <Footer/>
        </div>
    );
}