import React from 'react';
import css from './task-upload-input.module.css';
import {CardButton} from "../card-button/card-button";

export const TaskUploadInput: React.FC<{
    showSecondComponent: boolean,
    setShowSecondComponent: (value: boolean) => void
}> =
    ({
         showSecondComponent,
         setShowSecondComponent
     }) => {
        const firstTaskUploadComponent = () => {
            return (
                <div className={css.container}>
                    <div className={css.labelInputContainer}>
                        <label htmlFor="Category" className={css.label}>Category</label>
                        <select id="Category" className={css.selectInput}>
                            <option value="Task1">Task 1</option>
                            <option value="Task2">Task 2</option>
                            <option value="Task3">Task 3</option>
                        </select>
                    </div>

                    <div className={css.labelInputContainer}>
                        <label htmlFor="title" className={css.label}>Title</label>
                        <input id="title" type="text" className={css.regularInput}/>
                    </div>

                    <div className={css.labelInputContainer}>
                        <label htmlFor="price" className={css.label}>Price</label>
                        <input id="price" type="text" className={css.regularInput}/>
                    </div>

                    <div className={css.labelInputContainer}>
                        <label htmlFor="description" className={css.label}>Description</label>
                        <textarea id="description" className={css.textareaInput}/>
                    </div>
                    <CardButton text={"Next"} inactive={false} onClick={() => setShowSecondComponent(true)}/>
                </div>
            );
        }

        const secondTaskUploadComponent = () => {
            return (

                <div className={css.container}>
                    <div className={css.labelInputContainer}>
                        <label htmlFor="email" className={css.label}>Email</label>
                        <input id="email" type="text" className={css.regularInput}/>
                    </div>

                    <div className={css.labelInputContainer}>
                        <label htmlFor="phoneNumber" className={css.label}>Phone Number</label>
                        <input id="phoneNumber" type="text" className={css.regularInput}/>
                    </div>

                    <div className={css.nameContainers}>
                        <div className={css.labelInputContainer}>
                            <label htmlFor="street" className={css.label}>Street</label>
                            <input id="street" type="text" className={css.nameInput}/>
                        </div>

                        <div className={css.labelInputContainer}>
                            <label htmlFor="houseNumber" className={css.label}>House Number</label>
                            <input id="houseNumber" type="text" className={css.nameInput}/>
                        </div>
                    </div>

                    <div className={css.nameContainers}>
                        <div className={css.labelInputContainer}>
                            <label htmlFor="postcode" className={css.label}>Postcode</label>
                            <input id="postcode" type="text" className={css.nameInput}/>
                        </div>

                        <div className={css.labelInputContainer}>
                            <label htmlFor="city" className={css.label}>City</label>
                            <input id="city" type="text" className={css.nameInput}/>
                        </div>
                    </div>

                    <CardButton text={"Create Service"} inactive={true}/>
                </div>

            );
        }

        return (
            <div className={css.container}>
                {showSecondComponent ? secondTaskUploadComponent() : firstTaskUploadComponent()}
            </div>
        );
    };
