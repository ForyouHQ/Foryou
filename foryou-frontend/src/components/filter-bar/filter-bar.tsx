import React, {useEffect, useState} from 'react';
import css from './filter-bar.module.css';
import filterLogo from "../../assets/logos/filter_logo.png";
import administratie from "../../assets/filter-images/administratie.png";
import evenement from "../../assets/filter-images/evenement.png";
import handenwerk from "../../assets/filter-images/handenwerk.png";
import logistiek from "../../assets/filter-images/logistiek.png";
import marketing from "../../assets/filter-images/marketing.png";
import sales from "../../assets/filter-images/sales.png";
import technisch from "../../assets/filter-images/technisch.png";
import veiligheid from "../../assets/filter-images/veiligheid.png";
import {Link, useNavigate} from "react-router-dom";

interface Task {
    id: number;
    category: string;
    title: string;
    price: number;
}

interface TaskResponse {
    _embedded: {
        _content: Task[];
    };
    _links: {
        self: {
            href: string;
        };
    };
    page: {
        size: number;
        totalElements: number;
        number: number;
    };
}

export const FilterBar: React.FC = () => {
    const [categories, setCategories] = useState<string[]>([""]);
    const [title, setTitle] = useState("");
    const [tasks, setTasks] = useState<Task[]>([]);
    const navigate = useNavigate();

    const fetchData = async () => {
        try {
            const API_URL = process.env.REACT_APP_FILTER_TASKS_API_URL;
            if (!API_URL) throw new Error('REACT_APP_API_URL is not defined. Please set the environment variable.');
            const token = localStorage.getItem('token');
            if (!token) throw new Error('JWT token not found.');
            const response = await fetch(API_URL, {
                method: 'POST',
                body: JSON.stringify({categories, title}),
                headers: {
                    'Content-Type': 'application/json', Authorization: `Bearer ${token}`
                }
            });
            const data: TaskResponse = await response.json();
            setTasks(data._embedded._content);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const reset = () => {
        navigate(`/page/1`);
    }

    useEffect(() => {
        fetchData();
    }, [categories]);

    return (
        <div className={css.container}>
            <div className={css.logo}>
                <img src={filterLogo} className={css.logoSpacing} alt="Filter logo"/>
                Categorieën
            </div>
            <div className={css.categories}>
                <div className={css.categoriesItem} onClick={() => setCategories(['TASK1'])}>
                    <img src={technisch} className={css.logoSpacing} alt="Topic logo"/>
                    <Link to="/" style={{textDecoration: "none", color: "inherit"}}>Task1</Link>
                </div>
                <div className={css.categoriesItem} onClick={() => setCategories(['TASK2'])}>
                    <img src={marketing} className={css.logoSpacing} alt="Topic logo"/>
                    <Link to="/" style={{textDecoration: "none", color: "inherit"}}>Task2</Link>
                </div>
                <div className={css.categoriesItem} onClick={() => setCategories(['TASK3'])}>
                    <img src={handenwerk} className={css.logoSpacing} alt="Topic logo"/>
                    <Link to="/" style={{textDecoration: "none", color: "inherit"}}>Task3</Link>
                </div>
                <div className={css.categoriesItem} onClick={() => setCategories(['OTHER'])}>
                    <img src={evenement} className={css.logoSpacing} alt="Topic logo"/>
                    <Link to="/" style={{textDecoration: "none", color: "inherit"}}>Other</Link>
                </div>
                {/*<div className={css.categoriesItem} onClick={() => setCategories(['TASK1'])}>*/}
                {/*    <img src={sales} className={css.logoSpacing} alt="Topic logo"/>*/}
                {/*    <Link to="/" style={{textDecoration: "none", color: "inherit"}}>Task1</Link>*/}
                {/*</div>*/}
                {/*<div className={css.categoriesItem} onClick={() => setCategories(['TASK2'])}>*/}
                {/*    <img src={administratie} className={css.logoSpacing} alt="Topic logo"/>*/}
                {/*    <Link to="/" style={{textDecoration: "none", color: "inherit"}}>Task2</Link>*/}
                {/*</div>*/}
                {/*<div className={css.categoriesItem} onClick={() => setCategories(['TASK3'])}>*/}
                {/*    <img src={logistiek} className={css.logoSpacing} alt="Topic logo"/>*/}
                {/*    <Link to="/" style={{textDecoration: "none", color: "inherit"}}>Task3</Link>*/}
                {/*</div>*/}
                {/*<div className={css.categoriesItem} onClick={() => setCategories(['OTHER'])}>*/}
                {/*    <img src={veiligheid} className={css.logoSpacing} alt="Topic logo"/>*/}
                {/*    <Link to="/" style={{textDecoration: "none", color: "inherit"}}>Other</Link>*/}
                {/*</div>*/}
                <div className={css.buttonContainer}>
                    <button className={css.filterButton} onClick={reset}>Reset</button>
                </div>
            </div>
        </div>
    );
}
