import React from 'react';
import css from './register-input.module.css';
import { CardButton } from "../card-button/card-button";
import { SignInText } from "../sign-in-text/sign-in-text";

export const RegisterInput: React.FC<{ showSecondComponent: boolean, setShowSecondComponent: (value: boolean) => void }> = ({ showSecondComponent, setShowSecondComponent }) => {

    const firstRegisterComponent = () => {
        return (
            <div className={css.container}>
                <div className={css.nameContainers}>
                    <div className={css.labelInputContainer}>
                        <label htmlFor="firstName" className={css.label}>First name</label>
                        <input id="firstName" type="text" className={css.nameInput}/>
                    </div>

                    <div className={css.labelInputContainer}>
                        <label htmlFor="lastName" className={css.label}>Last name</label>
                        <input id="lastName" type="text" className={css.nameInput}/>
                    </div>
                </div>

                <div className={css.labelInputContainer}>
                    <label htmlFor="email" className={css.label}>Email</label>
                    <input id="email" type="text" className={css.regularInput}/>
                </div>

                <div className={css.labelInputContainer}>
                    <label htmlFor="phoneNumber" className={css.label}>Phone Number</label>
                    <input id="phoneNumber" type="text" className={css.regularInput}/>
                </div>

                <div className={css.labelInputContainer}>
                    <label htmlFor="password" className={css.label}>Password</label>
                    <input id="password" type="password" className={css.regularInput}/>
                </div>

                <div className={css.labelInputContainer}>
                    <label htmlFor="confirmPassword" className={css.label}>Confirm password</label>
                    <input id="confirmPassword" type="password" className={css.regularInput}/>
                </div>

                <CardButton text={"Next"} inactive={false} onClick={() => setShowSecondComponent(true)}/>
            </div>
        );
    }

    const secondRegisterComponent = () => {
        return (
            <div className={css.container}>
                <div className={css.labelInputContainer}>
                    <label htmlFor="street" className={css.label}>Street</label>
                    <input id="street" type="text" className={css.regularInput}/>
                </div>

                <div className={css.labelInputContainer}>
                    <label htmlFor="street" className={css.label}>House number</label>
                    <input id="street" type="text" className={css.regularInput}/>
                </div>

                <div className={css.nameContainers}>
                    <div className={css.labelInputContainer}>
                        <label htmlFor="firstName" className={css.label}>Postcode</label>
                        <input id="firstName" type="text" className={css.nameInput}/>
                    </div>

                    <div className={css.labelInputContainer}>
                        <label htmlFor="lastName" className={css.label}>City</label>
                        <input id="lastName" type="text" className={css.nameInput}/>
                    </div>
                </div>

                <CardButton text={"Register"} inactive={true}/>
            </div>
        );
    }

    return (
        <div className={css.container}>
            {showSecondComponent ? secondRegisterComponent() : firstRegisterComponent()}
            <div className={css.signInText}>
                <SignInText/>
            </div>
        </div>
    );
};
