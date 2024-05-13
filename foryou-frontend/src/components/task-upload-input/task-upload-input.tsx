import React from 'react';
import css from './task-upload-input.module.css';
import {CardButton} from '../card-button/card-button';

interface TaskUploadInputProps {
    showSecondComponent: boolean;
    setShowSecondComponent: (value: boolean) => void;
    formData: {
        category: string;
        title: string;
        price: string;
        description: string;
        phone: string;
        email: string
        address: {
            street: string;
            houseNumber: string;
            postalCode: string;
            city: string;
        };
        userId: number;
    };
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
    onNextButtonClick: () => void;
    onCreateTask: () => void;
}

export const TaskUploadInput: React.FC<TaskUploadInputProps> = ({
                                                                    showSecondComponent,
                                                                    setShowSecondComponent,
                                                                    formData,
                                                                    handleInputChange,
                                                                    onNextButtonClick,
                                                                    onCreateTask
                                                                }) => {
    const firstTaskUploadComponent = () => {
        return (
            <div className={css.container}>
                <div className={css.labelInputContainer}>
                    <label htmlFor="category" className={css.label}>
                        Category
                    </label>
                    <select
                        id="category"
                        name="category"
                        className={css.selectInput}
                        value={formData.category}
                        onChange={handleInputChange}
                    >
                        <option value="TASK1">Task 1</option>
                        <option value="TASK2">Task 2</option>
                        <option value="TASK3">Task 3</option>
                        <option value="OTHER">Other</option>
                    </select>
                </div>

                <div className={css.labelInputContainer}>
                    <label htmlFor="title" className={css.label}>
                        Title
                    </label>
                    <input
                        id="title"
                        name="title"
                        type="text"
                        className={css.regularInput}
                        value={formData.title}
                        onChange={handleInputChange}
                    />
                </div>

                <div className={css.labelInputContainer}>
                    <label htmlFor="price" className={css.label}>
                        Price
                    </label>
                    <input
                        id="price"
                        name="price"
                        type="text"
                        className={css.regularInput}
                        value={formData.price}
                        onChange={handleInputChange}
                    />
                </div>

                <div className={css.labelInputContainer}>
                    <label htmlFor="description" className={css.label}>
                        Description
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        className={css.textareaInput}
                        value={formData.description}
                        onChange={handleInputChange}
                    />
                </div>
                <CardButton text={'Next'} inactive={false} onClick={onNextButtonClick}/>
            </div>
        );
    };

    const secondTaskUploadComponent = () => {
        return (
            <div className={css.container}>
                <div className={css.labelInputContainer}>
                    <label htmlFor="email" className={css.label}>
                        Emails Address
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="text"
                        className={css.regularInput}
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                </div>

                <div className={css.labelInputContainer}>
                    <label htmlFor="phone" className={css.label}>
                        Phone Number
                    </label>
                    <input
                        id="phone"
                        name="phone"
                        type="text"
                        className={css.regularInput}
                        value={formData.phone}
                        onChange={handleInputChange}
                    />
                </div>

                <div className={css.nameContainers}>
                    <div className={css.labelInputContainer}>
                        <label htmlFor="street" className={css.label}>
                            Street
                        </label>
                        <input
                            id="street"
                            name="street"
                            type="text"
                            className={css.nameInput}
                            value={formData.address.street}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className={css.labelInputContainer}>
                        <label htmlFor="houseNumber" className={css.label}>
                            House Number
                        </label>
                        <input
                            id="houseNumber"
                            name="houseNumber"
                            type="text"
                            className={css.nameInput}
                            value={formData.address.houseNumber}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>

                <div className={css.nameContainers}>
                    <div className={css.labelInputContainer}>
                        <label htmlFor="postalCode" className={css.label}>
                            Postcode
                        </label>
                        <input
                            id="postalCode"
                            name="postalCode"
                            type="text"
                            className={css.nameInput}
                            value={formData.address.postalCode}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className={css.labelInputContainer}>
                        <label htmlFor="city" className={css.label}>
                            City
                        </label>
                        <input
                            id="city"
                            name="city"
                            type="text"
                            className={css.nameInput}
                            value={formData.address.city}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>

                <CardButton text={'Create Service'} inactive={false} onClick={onCreateTask}/>
            </div>
        );
    };

    return (
        <div
            className={css.container}>{showSecondComponent ? secondTaskUploadComponent() : firstTaskUploadComponent()}</div>
    );
};
