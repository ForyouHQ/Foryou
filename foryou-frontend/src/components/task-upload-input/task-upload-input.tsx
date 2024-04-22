import React from 'react';
import css from './task-upload-input.module.css';
import {CardButton} from "../card-button/card-button";

interface TaskUploadInputProps {
    setCategory: React.Dispatch<React.SetStateAction<string>>;
    setTitle: React.Dispatch<React.SetStateAction<string>>;
    setPrice: React.Dispatch<React.SetStateAction<number>>;
    setDescription: React.Dispatch<React.SetStateAction<string>>;
    setPhoneNumber: React.Dispatch<React.SetStateAction<string>>;
    setStreet: React.Dispatch<React.SetStateAction<string>>;
    setHouseNumber: React.Dispatch<React.SetStateAction<string>>;
    setPostcode: React.Dispatch<React.SetStateAction<string>>;
    setCity: React.Dispatch<React.SetStateAction<string>>,
    setUserId: React.Dispatch<React.SetStateAction<number>>,
    onClick?: () => void,
    showSecondComponent: boolean,
    setShowSecondComponent: (value: boolean) => void,
}

export const TaskUploadInput: React.FC<TaskUploadInputProps> = ({
                                                                    setCategory,
                                                                    setTitle,
                                                                    setPrice,
                                                                    setDescription,
                                                                    setPhoneNumber,
                                                                    setStreet,
                                                                    setHouseNumber,
                                                                    setPostcode,
                                                                    setCity,
                                                                    showSecondComponent,
                                                                    setShowSecondComponent,
                                                                    onClick
                                                                }) => {

    const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCategory(event.target.value);
    };

    const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };

    const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPrice(Number(event.target.value));
    };

    const handleDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(event.target.value);
    };

    const handlePhoneNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPhoneNumber(event.target.value);
    };

    const handleStreetChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setStreet(event.target.value);
    };

    const handleHouseNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setHouseNumber(event.target.value);
    };

    const handlePostcodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPostcode(event.target.value);
    };

    const handleCityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCity(event.target.value);
    };


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
                    <input id="title" type="text" className={css.regularInput} onChange={handleTitleChange}/>
                </div>

                <div className={css.labelInputContainer}>
                    <label htmlFor="price" className={css.label}>Price</label>
                    <input id="price" type="text" className={css.regularInput} onChange={handlePriceChange}/>
                </div>

                <div className={css.labelInputContainer}>
                    <label htmlFor="description" className={css.label}>Description</label>
                    <textarea id="description" className={css.textareaInput} onChange={handleDescriptionChange}/>
                </div>
                <CardButton text={"Next"} inactive={false} onClick={() => setShowSecondComponent(true)}/>
            </div>
        );
    }

    const secondTaskUploadComponent = () => {
        return (

            <div className={css.container}>
                <div className={css.labelInputContainer}>
                    <label htmlFor="phoneNumber" className={css.label}>Phone Number</label>
                    <input id="phoneNumber" type="text" className={css.regularInput}
                           onChange={handlePhoneNumberChange}/>
                </div>

                <div className={css.nameContainers}>
                    <div className={css.labelInputContainer}>
                        <label htmlFor="street" className={css.label}>Street</label>
                        <input id="street" type="text" className={css.nameInput} onChange={handleStreetChange}/>
                    </div>

                    <div className={css.labelInputContainer}>
                        <label htmlFor="houseNumber" className={css.label}>House Number</label>
                        <input id="houseNumber" type="text" className={css.nameInput}
                               onChange={handleHouseNumberChange}/>
                    </div>
                </div>

                <div className={css.nameContainers}>
                    <div className={css.labelInputContainer}>
                        <label htmlFor="postcode" className={css.label}>Postcode</label>
                        <input id="postcode" type="text" className={css.nameInput} onChange={handlePostcodeChange}/>
                    </div>

                    <div className={css.labelInputContainer}>
                        <label htmlFor="city" className={css.label}>City</label>
                        <input id="city" type="text" className={css.nameInput} onChange={handleCityChange}/>
                    </div>
                </div>

                <CardButton text={"Create Service"} inactive={true} onClick={onClick}/>
            </div>

        );
    }

    return (
        <div className={css.container}>
            {showSecondComponent ? secondTaskUploadComponent() : firstTaskUploadComponent()}
        </div>
    );
};
