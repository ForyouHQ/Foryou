import React from 'react';
import css from './dashboard-services.module.css';
import stockImage from "../../assets/stock/dog_stock_image.png";
import {ServiceButton} from "../service-button/service-button";

export const DashboardServices: React.FC = () => {
    return (
        <div className={css.container}>
            <div className={css.card}>
                <img src={stockImage} alt="Service Image" className={css.image} />
                <div className={css.details}>
                    <div className={css.container}>
                        <span className={css.tag}>Dieren</span>
                        <span className={css.price}>$15,00</span>
                    </div>
                    <b className={css.title}>Kan iemand mijn hond uitlaten?</b>
                    <ServiceButton text={"Bekijk advertentie"} inactive={false}/>
                </div>
            </div>
            {/*<div className={css.card}>*/}
            {/*    <img src={stockImage} alt="Service Image" className={css.image} />*/}
            {/*    <div className={css.details}>*/}
            {/*        <span className={css.tag}>Development</span>*/}
            {/*        <span className={css.price}>$129</span>*/}
            {/*        <h2 className={css.title}>Another Service Title</h2>*/}
            {/*        <button className={css.button}>Bekijk advertentie</button>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    );
};
