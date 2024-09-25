import React from 'react';
import '../styles/Navbar.scss';

function Toggler({ language, setLanguage }) {
    const toggleLanguage = () => {
        setLanguage(language === 'EN' ? 'FR' : 'EN');
    };

    return (
        <section className="toggler-section">
            <p>
                <span className="english-button">{language === 'EN' ? 'EN' : 'FR'}</span> | <span onClick={toggleLanguage} className="french-button">
                    {language === 'EN' ? 'FR' : 'EN'}
                </span>
            </p>
        </section>
    );
}

export default Toggler;
