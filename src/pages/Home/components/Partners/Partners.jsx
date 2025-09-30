import React from 'react';
import './Partners.css';
import partnersImage from '../KeyPartners.jpeg';

const partnersData = {
    topCategories: [
        {
            title: "Hydrogen production plant EPC companies",
            description: "Engineering, Procurement, and Construction partners"
        },
        {
            title: "Electrolysis system manufacturers",
            description: "System integration and manufacturing partners"
        },
        {
            title: "Research institutes & universities",
            description: "Domestic and international academic partners"
        },
        {
            title: "Material & component developers",
            description: "Electrolysis and PEM fuel cell suppliers"
        }
    ],
    supplierCategories: [
        {
            type: "Material Suppliers",
            items: ["Catalysts", "Electrode membranes/ionomers", "Films"]
        },
        {
            type: "Component Suppliers",
            items: ["MEA", "PTL/GDL", "Bipolar plates"]
        },
        {
            type: "Equipment/Processing",
            items: ["Manufacturing equipment", "Coating technology", "Evaluation equipment"]
        }
    ]
};

const Partners = () => {
    return (
        <section id="partners-section">
            <div className="container">
                <h2 className="section-title">Key Partners</h2>

                <div className="partners-ecosystem">
                    <div className="partners-diagram">
                        <div className="hyscape-center">
                            <div className="center-circle">
                                <h3>Hyscape</h3>
                            </div>
                        </div>

                        <div className="partner-categories">
                            {partnersData.topCategories.map((category, index) => (
                                <div key={index} className={`partner-box category-${index + 1}`}>
                                    <h4>{category.title}</h4>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="suppliers-section">
                        <div className="suppliers-grid">
                            {partnersData.supplierCategories.map((category, index) => (
                                <div key={index} className="supplier-category">
                                    <h4>{category.type}</h4>
                                    <ul>
                                        {category.items.map((item, idx) => (
                                            <li key={idx}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="partners-image-container">
                        <img src={partnersImage} alt="Hyscape Key Partners" className="partners-image"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Partners;