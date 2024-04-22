import React, {useState} from 'react';
import css from './task-upload-card.module.css';
import {CardHeader} from "../card-header/card-header";
import {TaskUploadInput} from "../task-upload-input/task-upload-input";

export const TaskUploadCard: React.FC = () => {
    const [showSecondComponent, setShowSecondComponent] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState<number>(0);
    const [userId, setUserId] = useState<number>(5);
    const [category, setCategory] = useState<string>("");
    const [phoneNumber, setPhoneNumber] = useState<string>("");
    const [street, setStreet] = useState<string>("");
    const [houseNumber, setHouseNumber] = useState<string>("");
    const [postcode, setPostcode] = useState<string>("");
    const [city, setCity] = useState<string>("");

    const containerStyle = {
        height: showSecondComponent ? '70%' : '80%',
    };

    const uploadTask = async () => {
        try {
            const api_url = process.env.REACT_APP_TASK_UPLOAD;

            if (!api_url) {
                throw new Error('API URL not set');
            }
            const response = await fetch(api_url, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({title, description, price, userId,})
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Error:', error);
        }

    }

    return (
        <div className={css.container} style={containerStyle}>
            <CardHeader
                topText={showSecondComponent ? "Contact Information" : "Create Service"}
                bottomText={showSecondComponent ? "Lorem ipsum dolor sit amet 2" : "Lorem ipsum dolor sit amet 1"}
            />
            <TaskUploadInput showSecondComponent={showSecondComponent} setShowSecondComponent={setShowSecondComponent} setTitle={setTitle}
                             setDescription={setDescription}
                             setPrice={setPrice}
                             setUserId={setUserId}
                             setCategory={setCategory}
                             setPhoneNumber={setPhoneNumber}
                             setStreet={setStreet}
                             setHouseNumber={setHouseNumber}
                             setPostcode={setPostcode}
                             setCity={setCity}
                             onClick={uploadTask}/>
        </div>
    );
};
