import React from 'react';
import css from './task-upload.module.css';
import {Shapes} from "../../components/background-shapes/shapes";
import {TaskUploadCard} from "../../components/task-upload-card/task-upload-card";
import Navbar from "../../components/navbar/navbar";

export const TaskUpload: React.FC = () => {
    return (
        <div className={css.container}>
            <Navbar/>
            <Shapes/>
            <TaskUploadCard/>
        </div>
    );
};