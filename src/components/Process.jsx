import React from 'react';
import svg1 from '../assets/process-1.svg';
import svg2 from '../assets/process-2.svg';
import svg3 from '../assets/process-3.svg';
import svg4 from '../assets/process-4.svg';
import '../styles/Process.scss';

function Process({ language }) {
    return (
        <section className="process-section">
            <div className="title-container">
                <hr className="title-bar" />
                <h2 className="process-title">{language === 'EN' ? 'HOW WE WORK' : 'NOTRE PROCESSUS'}</h2>
            </div>
            <div className="processes-container">
                <div>
                    <img src={svg1} alt="Initial consultation & onsite assessment" />
                    <p>{language === 'EN' ? 'Initial consultation & onsite assessment' : 'Consultation initiale et évaluation sur site'}</p>
                </div>
                <div>
                    <img src={svg2} alt="Research & analysis on the project" />
                    <p>{language === 'EN' ? 'Research & analysis on the project' : 'Recherche et analyse du projet'}</p>
                </div>
                <div>
                    <img src={svg3} alt="Design and presentation" />
                    <p>{language === 'EN' ? 'Design and presentation' : 'Conception et présentation'}</p>
                </div>
                <div>
                    <img src={svg4} alt="Approval and implementation" />
                    <p>{language === 'EN' ? 'Approval and implementation' : 'Approbation et mise en œuvre'}</p>
                </div>
            </div>
        </section>
    );
}

export default Process;
