import React, { useState } from 'react';
import css from './register-card.module.css';
import { CardHeader } from "../card-header/card-header";
import { RegisterInput } from "../register-input/register-input";

export const RegisterCard: React.FC = () => {
    const [showSecondComponent, setShowSecondComponent] = useState(false);

    const containerStyle = {
        height: showSecondComponent ? '60%' : '80%',
    };

    return (
        <div className={css.container} style={containerStyle}>
            <CardHeader topText={"Create An Account"} bottomText={"Create an account to enjoy all the services"}/>
            <RegisterInput showSecondComponent={showSecondComponent} setShowSecondComponent={setShowSecondComponent}/>
        </div>
    );
};
