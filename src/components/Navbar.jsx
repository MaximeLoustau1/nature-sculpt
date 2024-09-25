import React, { useState } from 'react';
import '../styles/Navbar.scss';
import Toggler from './Toggler';
import logo from '../assets/logo.png';

function Navbar({ language, setLanguage }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuClick = () => {
        setIsMenuOpen(!isMenuOpen);
        document.body.classList.toggle('no-scroll', isMenuOpen);
    };

    const handleLinkClick = (sectionId) => {
        const section = document.querySelector(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
        document.body.classList.remove('no-scroll');
    };

    return (
        <section className={isMenuOpen ? 'navbar-section show' : 'navbar-section'}>
            <div className={isMenuOpen ? 'menu-icon open' : 'menu-icon'} onClick={handleMenuClick}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>
            <div className="navbar-flexbox">
                <div className="navbar-logo">
                    <img className="logo-image" src={logo} alt="nature sculpt logo" />
                </div>
                <div className={isMenuOpen ? 'navbar-links show' : 'navbar-links'}>
                    <a href="#home" onClick={() => handleLinkClick('#home')}>
                        {language === 'EN' ? 'HOME' : 'ACCUEIL'}
                    </a>
                    <a href="#services" onClick={() => handleLinkClick('#services')}>
                        {language === 'EN' ? 'OUR SERVICES' : 'NOS SERVICES'}
                    </a>
                    <a href="#about" onClick={() => handleLinkClick('#about')}>
                        {language === 'EN' ? 'ABOUT US' : 'À PROPOS'}
                    </a>
                    <a href="#portfolio" onClick={() => handleLinkClick('#portfolio')}>
                        {language === 'EN' ? 'PORTFOLIO' : 'PORTFOLIO'}
                    </a>
                    <Toggler language={language} setLanguage={setLanguage} />
                </div>
            </div>
        </section>
    );
}

export default Navbar;
