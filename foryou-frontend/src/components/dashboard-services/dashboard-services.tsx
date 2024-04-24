import React, {useState, useEffect} from 'react';
import css from './dashboard-services.module.css';
import stockImage from "../../assets/stock/dog_stock_image.png";
import {ServiceButton} from "../service-button/service-button";

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

export const DashboardServices: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(0);
    const [totalPages, setTotalPages] = useState<number>(0);

    useEffect(() => {
        fetchData();
    }, [currentPage]);

    const fetchData = async () => {
        try {
            const API_URL = process.env.REACT_APP_TASKS_API_URL;
            if (!API_URL) throw new Error('REACT_APP_API_URL is not defined. Please set the environment variable.');

            const token = localStorage.getItem('token');
            if (!token) throw new Error('JWT token not found.');


            const response = await fetch(`${API_URL}?page=${currentPage}&size=10`, {
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

    return (
        <>
            <div className={css.buttons}>
                <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 0} className={css.buttonOne}>Previous</button>
                <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages - 1} className={css.buttonTwo}>Next
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
        </>
    );
};
