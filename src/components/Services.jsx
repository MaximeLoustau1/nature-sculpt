import React from 'react';
import '../styles/Services.scss';
import img1 from '../assets/landscaping-image.jpg';
import img2 from '../assets/service-2-img.JPG';
import img3 from '../assets/plant-nursery-image.jpg';

function Services({ language }) {
    const content = {
        EN: {
            title: "OUR SERVICES",
            landscaping: {
                subtitle: "LANDSCAPING",
                description: "We provide a wide range of services, from landscape maintenance to full landscape development, catering to homes, hotels, public infrastructure, real estate projects, and estates. Our experts ensure every project is handled with care and precision. With a deep understanding of plants and landscaping, we focus on sustainability and long-term growth by optimizing land use. By studying the unique needs of soil and the environment, we tailor solutions that enhance the beauty and health of every landscape."
            },
            maintenance: {
                subtitle: "MAINTENANCE",
                description: "We care for your garden and pool with expert services, including irrigation, pruning, and seasonal upkeep. Our team ensures your outdoor spaces stay healthy and vibrant throughout the year. From regular watering to specialized care, we create tailored maintenance plans to meet the unique needs of your garden. With attention to detail, we ensure your green spaces remain beautiful all year long."
            },
            nursery: {
                subtitle: "PLANT NURSERY",
                description: "In our greenhouse, we propagate a variety of plants from cuttings or seedlings, managing humidity to enhance growth. Our nursery hosts a diverse selection of plants, ensuring each thrives under optimal conditions. We also offer plant rental services for events like weddings and exhibitions, providing beautiful greenery for every occasion. Visit us in Saint François, Calodyne, and explore our expertly cultivated plants."
            }
        },
        FR: {
            title: "NOS SERVICES",
            landscaping: {
                subtitle: "PAYSAGE",
                description: "Nous offrons une large gamme de services, de l'entretien paysager au développement complet de paysages, pour les maisons, hôtels, infrastructures publiques, projets immobiliers et propriétés. Nos experts s'assurent que chaque projet est géré avec soin et précision. Avec une profonde compréhension des plantes et du paysage, nous nous concentrons sur la durabilité et la croissance à long terme en optimisant l'utilisation des terres. En étudiant les besoins uniques du sol et de l'environnement, nous adaptons des solutions qui améliorent la beauté et la santé de chaque paysage."
            },
            maintenance: {
                subtitle: "ENTRETIEN",
                description: "Nous entretenons votre jardin et votre piscine avec des services experts, y compris l'irrigation, la taille et l'entretien saisonnier. Notre équipe veille à ce que vos espaces extérieurs restent sains et vibrants tout au long de l'année. Des arrosages réguliers aux soins spécialisés, nous créons des plans d'entretien sur mesure pour répondre aux besoins uniques de votre jardin. Avec un souci du détail, nous veillons à ce que vos espaces verts restent beaux toute l'année."
            },
            nursery: {
                subtitle: "PÉPINIÈRE",
                description: "Dans notre serre, nous cultivons une variété de plantes à partir de boutures ou de semis, en gérant l'humidité pour améliorer la croissance. Notre pépinière abrite une sélection diversifiée de plantes, garantissant que chacune prospère dans des conditions optimales. Nous proposons également des services de location de plantes pour des événements tels que des mariages et des expositions, offrant une belle verdure pour chaque occasion. Visitez-nous à Saint François, Calodyne, et explorez nos plantes soigneusement cultivées."
            }
        }
    };

    return (
        <section className="services-section" id="services">
            <h1 className="services-title">{content[language].title}</h1>
            <div className="services-flexboxes">
                <div className="flexbox-1">
                    <div className="services-image"><img src={img1} alt="Landscaping service" /></div>
                    <div className="services-text-box">
                        <div><hr /></div>
                        <div className="services-subtitle"><h2>{content[language].landscaping.subtitle}</h2></div>
                        <div className="services-description">
                            <p>{content[language].landscaping.description}</p>
                        </div>
                    </div>
                </div>
                <div className="flexbox-2">
                    <div className="services-text-box">
                        <div><hr /></div>
                        <div className="services-subtitle"><h2>{content[language].maintenance.subtitle}</h2></div>
                        <div className="services-description">
                            <p>{content[language].maintenance.description}</p>
                        </div>
                    </div>
                    <div className="services-image"><img src={img2} alt="Maintenance service" /></div>
                </div>
                <div className="flexbox-3">
                    <div className="services-image"><img src={img3} alt="Plant nursery" /></div>
                    <div className="services-text-box">
                        <div><hr /></div>
                        <div className="services-subtitle"><h2>{content[language].nursery.subtitle}</h2></div>
                        <div className="services-description">
                            <p>{content[language].nursery.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;
