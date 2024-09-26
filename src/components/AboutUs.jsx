import React from 'react';
import '../styles/AboutUs.scss';

function AboutUs({ language }) {
    return (
        <section className="aboutus-section" id="about">
            <h1 className="about-us-title">
                {language === 'EN' ? 'ABOUT US' : 'À PROPOS'}
            </h1>
            <p className="about-us-description">
                {language === 'EN' ? (
                    <>
                        Our family created Nature Sculpt over {' '}
                        <span className="highlighted-text">twenty years ago</span>. Our passion for plants and trees made us
                        decide to share our knowledge and skills with the public. Our team is composed of a{' '}
                        <span className="highlighted-text">landscaping architect</span>, an agronomist, an{' '}
                        <span className="highlighted-text">irrigation expert</span>, a garden maintenance specialist, a team of
                        experienced gardeners and an administrative service.
                    </>
                ) : (
                    <>
                        Notre famille a créé Nature Sculpt{' '}
                        <span className="highlighted-text">il y a plus de vingt ans</span>. Notre passion pour les plantes et les arbres
                        nous a amenés à partager nos connaissances et compétences avec le public. Notre équipe est composée d'un{' '}
                        <span className="highlighted-text">architecte paysagiste</span>, d'un agronome, d'un{' '}
                        <span className="highlighted-text">expert en irrigation</span>, d'un spécialiste de l'entretien des jardins,
                        une équipe de jardiniers expérimentés et d'un service administratif.
                    </>
                )}
            </p>
        </section>
    );
}

export default AboutUs;
