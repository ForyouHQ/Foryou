import React, {useState} from 'react';
import css from './task-upload-card.module.css';
import {CardHeader} from '../card-header/card-header';
import {TaskUploadInput} from '../task-upload-input/task-upload-input';
import axios from 'axios';
import {useNavigate} from "react-router-dom";

export const TaskUploadCard: React.FC = () => {
    const navigate = useNavigate();
    const [showSecondComponent, setShowSecondComponent] = useState(false);
    const [formData, setFormData] = useState({
        category: 'OTHER',
        title: '',
        price: '',
        description: '',
        phone: '',
        email: '',
        address: {
            street: "",
            houseNumber: "",
            postalCode: "",
            city: ""
        },
        userId: Number(localStorage.getItem("userId"))
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const {name, value} = e.target;
        if (["street", "houseNumber", "postalCode", "city"].includes(name)) {
            setFormData({
                ...formData,
                address: {
                    ...formData.address,
                    [name]: value
                }
            });
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    };

    const createTask = async () => {
        const API_URL = process.env.REACT_APP_TASK_UPLOAD_API_URL;
        if (!API_URL) throw new Error('REACT_APP_API_URL is not defined. Please set the environment variable.');

        const token = localStorage.getItem('token');
        if (!token) throw new Error('JWT token not found.');

        try {
            const response = await axios.post(API_URL, formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            console.log('Task created successfully:', response.data);
            navigate(`/dashboard/page/1`);
        } catch (error) {
            console.error('Error creating task:', error);
        }
    };

    const fetchUserContactInfo = async (userId: number) => {
        const API_URL = `${process.env.REACT_APP_GET_CONTACT_INFO_API_URL}/${userId}`;
        if (!API_URL) throw new Error('REACT_APP_API_URL is not defined. Please set the environment variable.');

        const token = localStorage.getItem('token');
        if (!token) throw new Error('JWT token not found.');

        try {
            const response = await axios.get(API_URL);
            const contactInfo = response.data;
            setFormData({
                ...formData,
                phone: contactInfo.phone,
                email: contactInfo.email,
                address: {
                    ...formData.address,
                    street: contactInfo.address.street,
                    houseNumber: contactInfo.address.houseNumber,
                    postalCode: contactInfo.address.postalCode,
                    city: contactInfo.address.city
                }
            });
        } catch (error) {
            console.error('Error fetching user contact info:', error);
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
