import React, { useState, useEffect } from "react";
import css from "./specific-task-card.module.css";
import stockImage from "../../assets/stock/dog_stock_image.png";
import outlineHeartSvg from "../../assets/specific-task/Favorite.svg";
import filledHeartSvg from "../../assets/specific-task/Favorite_fill.svg";
import personSvg from "../../assets/specific-task/User_alt.svg";

export const SpecificTaskCard = () => {
    const [heartSvgSource, setHeartSvgSource] = useState(outlineHeartSvg);
    const [taskData, setTaskData] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(true);

    const handleHeartSvgClick = () => {
        const newHeartSvgSource = heartSvgSource === outlineHeartSvg ? filledHeartSvg : outlineHeartSvg;
        setHeartSvgSource(newHeartSvgSource);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const API_URL = process.env.REACT_APP_TASK_UPLOAD_API_URL;
            if (!API_URL) throw new Error('REACT_APP_API_URL is not defined. Please set the environment variable.');

            const token = localStorage.getItem('token');
            if (!token) throw new Error('JWT token not found.');

            const taskId = window.location.pathname.split('/').pop();
            if (!taskId) throw new Error('Task ID not found in URL.');

            const response = await fetch(`${API_URL}/${taskId}`, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`
                },
            });

            const data = await response.json();
            setTaskData(data);
            setIsLoading(false);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    if (isLoading) {
        return (
            <div className={css.loading}>
                <div>Loading...</div>
            </div>
        );
    }

    return (
        <div className={css.container}>
            <div className={css.card}>
                <div className={css.content}>
                    <img
                        src={heartSvgSource}
                        alt="Heart SVG"
                        className={css.svgImage}
                        onClick={handleHeartSvgClick}
                    />
                    <h2 className={css.title}>{taskData?.title || "Dog Walking"}</h2>
                    <img src={stockImage} alt="Dog Walking" className={css.image} />
                    <div className={css.separator} />
                    <p className={css.label}>Beschrijving:</p>
                    <p className={css.description}>{taskData?.description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}</p>
                </div>
            </div>

            <div className={css.card}>
                <div className={`${css.content} ${css["name-container"]}`}>
                    <div>
                        <p className={css.name}>
                            <img
                                src={personSvg}
                                alt="Icon SVG"
                                className={css.iconImage}
                            />
                            {taskData?.name || "Anoniem"}
                        </p>
                        <p className={css.category}>Categorie: {taskData?.category || "Onbekend"}</p>
                        <p className={css.location}>Locatie: {taskData?.address.city || "Onbekend"}</p>
                        <p className={css.price}>Prijs: €{taskData?.price || 0}</p>
                    </div>
                    <div className={css["btn-container"]}>
                        <button className={`${css.btn} ${css.btnReact}`}>Reageer</button>
                    </div>
                </div>
            </div>
        </div>
    );
};