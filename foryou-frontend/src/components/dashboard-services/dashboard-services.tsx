import React, {useState, useEffect} from 'react';
import css from './dashboard-services.module.css';
import stockImage from "../../assets/stock/dog_stock_image.png";
import {ServiceButton} from "../service-button/service-button";
import magnifyingGlass from "../../assets/functional-images/magnifying-glass.png";

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

interface DashboardServicesProps {
    currentPage: number;
    totalPages: number;
    filteredCategory: string;
    setCurrentPage: (page: number) => void;
    setTotalPages: (total: number) => void;
}

export const DashboardServices: React.FC<DashboardServicesProps> = ({currentPage, totalPages, setCurrentPage, filteredCategory, setTotalPages}) => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [title, setTitle] = useState<string>("");

    useEffect(() => {
        if (!filteredCategory && !title) {
            getAllTasks();
        } else {
            filterTasks();
        }
    }, [currentPage, filteredCategory, title]);

    const getAllTasks = async () => {
        try {
            const API_URL = process.env.REACT_APP_TASK_UPLOAD_API_URL;
            if (!API_URL) throw new Error('REACT_APP_API_URL is not defined. Please set the environment variable.');

            const token = localStorage.getItem('token');
            if (!token) throw new Error('JWT token not found.');

            const response = await fetch(`${API_URL}?page=${currentPage}&size=9`, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`
                },
            });

            const data: TaskResponse = await response.json();
            setTasks(data._embedded._content);
            setTotalPages(Math.ceil(data.page.totalElements / data.page.size));
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const filterTasks = async () => {
        try {
            const API_URL = process.env.REACT_APP_FILTER_TASKS_API_URL;
            if (!API_URL) throw new Error('REACT_APP_API_URL is not defined. Please set the environment variable.');

            const token = localStorage.getItem('token');
            if (!token) throw new Error('JWT token not found.');

            // Formats the input array of the categories so that the API call won't fail.
            let categories: any[];
            if (filteredCategory === "") {
                categories = [];
            } else {
                categories = [filteredCategory];
            }
            
            const response = await fetch(`${API_URL}?page=${currentPage}&size=9&title=${title}`, {
                method: 'POST',
                body: JSON.stringify({ categories, title }),
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
            });

            const data: TaskResponse = await response.json();
            setTasks(data._embedded._content);
            setTotalPages(Math.ceil(data.page.totalElements / data.page.size));
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            filterTasks();
        }
    };

    return (
        <div>
            <div className={css.searchBarContainer}>
                <input
                    type="text"
                    placeholder="Search tasks..."
                    value={title}
                    className={css.searchBar}
                    onChange={(e) => setTitle(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
                <button onClick={filterTasks} className={css.button}>
                    <img src={magnifyingGlass} alt="Search" className={css.searchIcon} onClick={filterTasks}/>
                </button>
            </div>
            <div className={css.container}>
                {tasks.map(task => (
                    <div key={task.id} className={css.card}>
                        <img src={stockImage} alt="Service Image" className={css.image}/>
                        <div className={css.details}>
                            <div className={css.container}>
                                <span className={css.tag}>{task.category}</span>
                                <span className={css.price}>€{task.price.toFixed(2)}</span>
                            </div>
                            <p className={css.title}>{task.title}</p>
                            <ServiceButton text={"Bekijk advertentie"} inactive={false}/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};