import React, { useEffect } from 'react';
import '../styles/Portfolio.scss';
import img1 from '../assets/p1.jpg';
import img2 from '../assets/p2.png';
import img3 from '../assets/p3.png';
import img4 from '../assets/p4.jpg';
import img5 from '../assets/p5.jpg';
import img6 from '../assets/p6.jpg';
import img7 from '../assets/p7.jpg';
import img8 from '../assets/p8.jpg';
import img9 from '../assets/p9.png';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer'; // For triggering animation on scroll

function Portfolio() {
    const [ref1, inView1] = useInView({ threshold: 0.1 });
    const controls1 = useAnimation();

    useEffect(() => {
        if (inView1) {
            controls1.start({ scale: 1 });
        } else {
            controls1.start({ scale: 0.9 });
        }
    }, [controls1, inView1]);

    const [ref2, inView2] = useInView({ threshold: 0.1 });
    const controls2 = useAnimation();

    useEffect(() => {
        if (inView2) {
            controls2.start({ scale: 1 });
        } else {
            controls2.start({ scale: 0.9 });
        }
    }, [controls2, inView2]);

    const [ref3, inView3] = useInView({ threshold: 0.1 });
    const controls3 = useAnimation();

    useEffect(() => {
        if (inView3) {
            controls3.start({ scale: 1 });
        } else {
            controls3.start({ scale: 0.9 });
        }
    }, [controls3, inView3]);

    const [ref4, inView4] = useInView({ threshold: 0.1 });
    const controls4 = useAnimation();

    useEffect(() => {
        if (inView4) {
            controls4.start({ scale: 1 });
        } else {
            controls4.start({ scale: 0.9 });
        }
    }, [controls4, inView4]);

    const [ref5, inView5] = useInView({ threshold: 0.1 });
    const controls5 = useAnimation();

    useEffect(() => {
        if (inView5) {
            controls5.start({ scale: 1 });
        } else {
            controls5.start({ scale: 0.9 });
        }
    }, [controls5, inView5]);

    const [ref6, inView6] = useInView({ threshold: 0.1 });
    const controls6 = useAnimation();

    useEffect(() => {
        if (inView6) {
            controls6.start({ scale: 1 });
        } else {
            controls6.start({ scale: 0.9 });
        }
    }, [controls6, inView6]);

    const [ref7, inView7] = useInView({ threshold: 0.1 });
    const controls7 = useAnimation();

    useEffect(() => {
        if (inView7) {
            controls7.start({ scale: 1 });
        } else {
            controls7.start({ scale: 0.9 });
        }
    }, [controls7, inView7]);

    const [ref8, inView8] = useInView({ threshold: 0.1 });
    const controls8 = useAnimation();

    useEffect(() => {
        if (inView8) {
            controls8.start({ scale: 1 });
        } else {
            controls8.start({ scale: 0.9 });
        }
    }, [controls8, inView8]);

    const [ref9, inView9] = useInView({ threshold: 0.1 });
    const controls9 = useAnimation();

    useEffect(() => {
        if (inView9) {
            controls9.start({ scale: 1 });
        } else {
            controls9.start({ scale: 0.9 });
        }
    }, [controls9, inView9]);

    return (
        <section className="portfolio-section" id="portfolio">
            <h2 className="portfolio-title">PORTFOLIO</h2>
            <div className="image-block1">
                <motion.img
                    ref={ref1} // Add the ref to the first image
                    className="portfolio-image"
                    src={img4}
                    alt='image-4'
                    initial={{ scale: 0.9 }}
                    animate={controls1}
                    transition={{ duration: 0.5 }}
                />
                <motion.img
                    ref={ref2} // Add the ref to the second image
                    className="portfolio-image"
                    src={img2}
                    alt='image-2'
                    initial={{ scale: 0.9 }}
                    animate={controls2}
                    transition={{ duration: 0.5 }}
                />
                <motion.img
                    ref={ref3} // Add the ref to the third image
                    className="portfolio-image center-img"
                    src={img3}
                    alt='image-3'
                    initial={{ scale: 0.9 }}
                    animate={controls3}
                    transition={{ duration: 0.5 }}
                />
            </div>
            <div className="image-block1">
                <motion.img
                    ref={ref4} // Add the ref to the fourth image
                    className="portfolio-image center-img"
                    src={img5}
                    alt='image-5'
                    initial={{ scale: 0.9 }}
                    animate={controls4}
                    transition={{ duration: 0.5 }}
                />
                <motion.img
                    ref={ref5} // Add the ref to the fifth image
                    className="portfolio-image"
                    src={img1}
                    alt='image-1'
                    initial={{ scale: 0.9 }}
                    animate={controls5}
                    transition={{ duration: 0.5 }}
                />
                <motion.img
                    ref={ref6} // Add the ref to the sixth image
                    className="portfolio-image"
                    src={img6}
                    alt="image-6"
                    initial={{ scale: 0.9 }}
                    animate={controls6}
                    transition={{ duration: 0.5 }}
                />
            </div>
            <div className="image-block3"> 
                <motion.img
                    ref={ref7} // Add the ref to the seventh image
                    className="portfolio-image"
                    src={img8}
                    alt='image-8'
                    initial={{ scale: 0.9 }}
                    animate={controls7}
                    transition={{ duration: 0.5 }}
                />       
                <motion.img
                    ref={ref8} // Add the ref to the eighth image
                    className="portfolio-image center-img"
                    src={img7}
                    alt='image-7'
                    initial={{ scale: 0.9 }}
                    animate={controls8}
                    transition={{ duration: 0.5 }}
                />
                <motion.img
                    ref={ref9} // Add the ref to the ninth image
                    className="portfolio-image"
                    src={img9}
                    alt='image-9'
                    initial={{ scale: 0.9 }}
                    animate={controls9}
                    transition={{ duration: 0.5 }}
                />
            </div>
        </section>
    );
}

export default Portfolio;
