import React, {useState} from 'react';
import css from './task-upload-card.module.css';
import {CardHeader} from '../card-header/card-header';
import {TaskUploadInput} from '../task-upload-input/task-upload-input';
import axios from 'axios';

export const TaskUploadCard: React.FC = () => {
    const [showSecondComponent, setShowSecondComponent] = useState(false);
    const [formData, setFormData] = useState({
        category: '',
        title: '',
        price: '',
        description: '',
        phoneNumber: '',
        street: '',
        houseNumber: '',
        postalCode: '',
        city: '',
        userId: 1,
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const createTask = async () => {
        const API_URL = process.env.REACT_APP_TASK_UPLOAD_API_URL;
        if (!API_URL) throw new Error('REACT_APP_API_URL is not defined. Please set the environment variable.');
        try {
            const response = await axios.post(API_URL, formData);
            console.log('Task created successfully:', response.data);
            // Handle success (e.g., show a success message to the user)
        } catch (error) {
            console.error('Error creating task:', error);
            // Handle error (e.g., show an error message to the user)
        }
    };

    const fetchUserContactInfo = async (userId: number) => {
        const API_URL = `${process.env.REACT_APP_GET_CONTACT_INFO_API_URL}/${userId}`;
        if (!API_URL) throw new Error('REACT_APP_API_URL is not defined. Please set the environment variable.');
        try {
            const response = await axios.get(API_URL);
            const contactInfo = response.data;
            setFormData({
                ...formData,
                phoneNumber: contactInfo.phone,
                street: contactInfo.address.street,
                houseNumber: contactInfo.address.houseNumber,
                postalCode: contactInfo.address.postalCode,
                city: contactInfo.address.city
            });
        } catch (error) {
            console.error('Error fetching user contact info:', error);
            // Handle error (e.g., show an error message to the user)
        }
    };

    const handleNextButtonClick = () => {
        if (!showSecondComponent) {
            const userId = formData.userId;
            fetchUserContactInfo(userId).then(r => console.log(r));
        }
        setShowSecondComponent(true);
    };

    return (
        <div className={css.container}>
            <CardHeader
                topText={showSecondComponent ? 'Contact Information' : 'Create Service'}
                bottomText={showSecondComponent ? 'Lorem ipsum dolor sit amet 2' : 'Lorem ipsum dolor sit amet 1'}
            />
            <TaskUploadInput
                showSecondComponent={showSecondComponent}
                setShowSecondComponent={setShowSecondComponent}
                formData={formData}
                handleInputChange={handleInputChange}
                onNextButtonClick={handleNextButtonClick}
                onCreateTask={createTask}
            />
        </div>
    );
};
