import React from 'react';
import css from './footer.module.css';
import logo from '../../assets/logos/logo_foryou.svg';

const Footer: React.FC = () => {
    return (
        <footer className={css.footer}>
            <div className={css.footerSection}>
                <h2>Ons Bedrijf</h2>
                <p>Short filler text here</p>
                <img src={logo} alt="ForYou"/>
            </div>
            <div className={css.footerSection}>
                <h2>Handige Links</h2>
                <ul>
                    <li>Dashboard</li>
                    <li>Over Ons</li>
                    <li>Services</li>
                    <li>Contact Ons</li>
                </ul>
            </div>
            <div className={css.footerSection}>
                <h2>Site Map</h2>
                <ul>
                    <li>FAQ</li>
                    <li>Privacy Policy</li>
                    <li>Terms and Conditions</li>
                </ul>
            </div>
            <div className={css.footerSection}>
                <h2>Contact Ons</h2>
                <p>contactforyouhq@gmail.com</p>
            </div>
        </footer>
    );
};

export default Footer;
