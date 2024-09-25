import React from 'react';
import '../styles/About.scss';
import Navbar from './Navbar.jsx';

function About({ language, setLanguage }) {
    return (
        <section className="about-section no-scroll" id="home">
            <Navbar language={language} setLanguage={setLanguage} />
            <div></div>

            <div className="about-text">
                <h1 className="about-title">
                    {language === 'EN' ? 'LANDSCAPING & PLANT NURSERY' : 'PAYSAGISME & PÉPINIÈRE'}
                </h1>
                <h2 className="about-subtitle">
                    {language === 'EN' ? 'BASED IN MAURITIUS' : 'BASÉ À MAURICE'}
                </h2>
            </div>
        </section>
    );
}

export default About;
