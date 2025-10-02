import React, { useEffect, useRef } from 'react';
import img from "./product.png";
import './Product.css';

const Product = () => {
    const sectionRef = useRef(null);
    const featuresRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-visible');
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }
        if (featuresRef.current) {
            const cards = featuresRef.current.querySelectorAll('.feature-card');
            cards.forEach(card => observer.observe(card));
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section id="product">
            <div className="container">
                <h2 className="section-title">Product</h2>
                <p>
                    Materials, components, and stacks for the water electrolysis
                </p>
                <div className="product-content">
                    <div className="product-diagram" ref={sectionRef}>
                        <img src={img} alt="Water Electrolysis System Diagram" className="product-image"/>
                    </div>
                    <div className="product-features" ref={featuresRef}>
                        <div className="feature-card">
                            <h3>PEM/AEM Electrolysis Stack</h3>
                            <p>High-efficiency electrolysis technology for hydrogen production with advanced membrane materials.</p>
                        </div>
                        <div className="feature-card">
                            <h3>MEA Technology</h3>
                            <p>Membrane Electrode Assembly optimized for durability and performance in industrial applications.</p>
                        </div>
                        <div className="feature-card">
                            <h3>Complete System Integration</h3>
                            <p>From renewable energy input to hydrogen storage, providing end-to-end solutions.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Product