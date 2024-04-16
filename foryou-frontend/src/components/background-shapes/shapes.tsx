import React from 'react';
import css from './shapes.module.css';
import rightRectangle from "../../assets/background-assets/right_rectangle.png";
import leftRectangle from "../../assets/background-assets/left_rectangle.png";
import bottomRectangle from "../../assets/background-assets/bottom_rectangle.png";
import topLeftRectangle from "../../assets/background-assets/top_left_rectangle.png";

export const Shapes: React.FC = () => {
    return (
        <>
            <img src={rightRectangle} className={css.rightRectangle} alt={"Background element"}/>
            <img src={leftRectangle} className={css.leftRectangle} alt={"Background element"}/>
            <img src={bottomRectangle} className={css.bottomRectangle} alt={"Background element"}/>
            <img src={topLeftRectangle} className={css.topLeftRectangle} alt={"Background element"}/>
        </>
    );
};