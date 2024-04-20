import React, { useState } from 'react';
import css from './task-upload-card.module.css';
import { CardHeader } from "../card-header/card-header";
import { TaskUploadInput } from "../task-upload-input/task-upload-input";

export const TaskUploadCard: React.FC = () => {
    const [showSecondComponent, setShowSecondComponent] = useState(false);

    const containerStyle = {
        height: showSecondComponent ? '70%' : '80%',
    };

    return (
        <div className={css.container} style={containerStyle}>
            <CardHeader
                topText={showSecondComponent ? "Contact Information" : "Create Service"}
                bottomText= {showSecondComponent ? "Lorem ipsum dolor sit amet 2" : "Lorem ipsum dolor sit amet 1"}
            />
            <TaskUploadInput showSecondComponent={showSecondComponent} setShowSecondComponent={setShowSecondComponent}/>
        </div>
    );
};
