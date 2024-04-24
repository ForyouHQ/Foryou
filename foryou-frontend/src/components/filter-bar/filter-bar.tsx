import React from 'react';
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
import { Link } from "react-router-dom";

export const FilterBar: React.FC = () => {
    return (
        <div className={css.container}>
            <div className={css.logo}>
                <img src={filterLogo} className={css.logoSpacing} alt="Filter logo"/>
                Categorieën
            </div>
            <div className={css.categories}>
                <div className={css.categoriesItem}>
                    <img src={technisch} className={css.logoSpacing} alt="Topic logo"/>
                    <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>Technisch</Link>
                </div>
                <div className={css.categoriesItem}>
                    <img src={marketing} className={css.logoSpacing} alt="Topic logo"/>
                    <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>Marketing</Link>
                </div>
                <div className={css.categoriesItem}>
                    <img src={handenwerk} className={css.logoSpacing} alt="Topic logo"/>
                    <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>Handenwerk</Link>
                </div>
                <div className={css.categoriesItem}>
                    <img src={evenement} className={css.logoSpacing} alt="Topic logo"/>
                    <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>Evenement</Link>
                </div>
                <div className={css.categoriesItem}>
                    <img src={sales} className={css.logoSpacing} alt="Topic logo"/>
                    <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>Sales</Link>
                </div>
                <div className={css.categoriesItem}>
                    <img src={administratie} className={css.logoSpacing} alt="Topic logo"/>
                    <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>Administratie</Link>
                </div>
                <div className={css.categoriesItem}>
                    <img src={logistiek} className={css.logoSpacing} alt="Topic logo"/>
                    <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>Logistiek</Link>
                </div>
                <div className={css.categoriesItem}>
                    <img src={veiligheid} className={css.logoSpacing} alt="Topic logo"/>
                    <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>Veiligheid</Link>
                </div>
            </div>
        </div>
    );
}
