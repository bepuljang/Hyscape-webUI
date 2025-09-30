import React from 'react';
import img from "./product.png";
import './Product.css';

const Product = () => {
    return (
        <section id="product-section">
            <div className="container">
                <h2 className="section-title">Product</h2>
                <p>
                    Materials, components, and stacks for the water electrolysis
                </p>
                <div className="product-content">
                    <div className="product-diagram">
                        <img src={img} alt="Water Electrolysis System Diagram" className="product-image"/>
                    </div>
                    <div className="product-features">
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