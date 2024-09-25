import React from 'react';
import '../styles/Footer.scss';
import insta from '../assets/insta.svg';
import facebook from '../assets/facebook.svg';
import address from '../assets/address.svg';

function Footer({ language }) {
    return (
        <section className="footer-container">
            <section className="footer-section">
                <div className="address-container">
                    <div className="address">
                        <img src={address} alt="Address icon" />
                        <p>Chemin Saint François, Petit Raffray</p>
                    </div>
                </div>
                <div className="social-media"> 
                    <p>{language === 'EN' ? 'Follow us:' : 'Suivez-nous:'}</p>
                    <a href="https://www.instagram.com/naturesculptlandscaping/">
                        <img src={insta} alt="Instagram" />
                    </a>
                    <a href="https://www.facebook.com/p/Nature-Sculpt-Landscaping-100063620679065/">
                        <img src={facebook} alt="Facebook" />
                    </a>
                </div>
            </section>
        </section>
    );
}

export default Footer;
