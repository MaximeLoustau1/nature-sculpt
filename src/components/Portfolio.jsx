import React from 'react'
import '../styles/Portfolio.scss'
import img1 from '../assets/p1.jpg'
import img2 from '../assets/p2.png'
import img3 from '../assets/p3.png'
import img4 from '../assets/p4.jpg'
import img5 from '../assets/p5.jpg'
import img6 from '../assets/p6.jpg'
import img7 from '../assets/p7.jpg'
import img8 from '../assets/p8.jpg'
import img9 from '../assets/p9.png'

function Portfolio() {
    return(
        <section className="portfolio-section" id="portfolio">
            <h2 className="portfolio-title">PORTFOLIO</h2>
            <div className="image-block1">
                <img src={img4} alt='image-4' />
                <img src={img2} alt='image-2' />
                <img className="center-img" src={img3} alt='image-3' />
            </div>
            <div className="image-block1">
                <img className="center-img" src={img5} alt='image-5' />
                <img src={img1} alt='image-1' />
                <img src={img6} alt="image-6" />
            </div>
            <div className="image-block3"> 
                <img src={img8} alt='image-8' />       
                <img className="center-img" src={img7} alt='image-7' />
                <img src={img9} alt='image-9' />
            </div>
        </section>
    )
}

export default Portfolio