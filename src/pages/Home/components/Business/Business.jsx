import React from 'react';
import './Business.css';

const contents = {
    product : "Hyscape designs and manufactures PEM(Proton Exchange Membrane) and AEM(Anion Exchange Membrane) electrolyzer stack and its core components. Streamlining the stack manufacturing process through an integrated cell structure innovatively slashes production costs. Through the application of low-iridium catalyst and electrode technologies and roll-to-roll continuous production, we can independently produce our own Membrane-Electrode-Assemblies, the heart of our stacks.",
    customers : [
        {
            label : "Electrolyzer system manufacturer",
            description : "Electrolyzer system integrators with balance of plant design skills who want to build a system with an innovatively designed stack.",
        },
        {
            label : "Organizations that want to use electrolyzer technology",
            description : "EPC (Engineering, Procurement, and Construction) companies that wish to develop large-scale hydrogen production plants in conjunction with renewable energy. Companies that develop off-grid energy systems and aim to store renewable energy as hydrogen for long-duration use",
        },
        {
            label : "Companies that want to internalize core technologies",
            description : "Hyscape can offer several innovative technologies from catalysts and membrane to electrolyzers and fuel cells.",
        },
    ]
}

const Business = () => {
    return (
        <section id="business-section">
            <div className="container">
                <h2 className="section-title">Business</h2>

                <div className="business-value-chain">
                    <div className="business-flow">
                        <div className="flow-item">
                            <div className="flow-box core-tech">
                                <h4>Core<br/>Technologies</h4>
                                <ul>
                                    <li>Low-iridium catalyst</li>
                                    <li>Roll-to-roll MEA</li>
                                    <li>Integrated cells</li>
                                </ul>
                            </div>
                        </div>

                        <div className="flow-plus">+</div>

                        <div className="flow-item">
                            <div className="flow-box products">
                                <h4>Our<br/>Products</h4>
                                <ul>
                                    <li>PEM Stack</li>
                                    <li>AEM Stack</li>
                                    <li>MEA Components</li>
                                </ul>
                            </div>
                        </div>

                        <div className="flow-plus">+</div>

                        <div className="flow-item">
                            <div className="flow-box benefits">
                                <h4>Key<br/>Benefits</h4>
                                <ul>
                                    <li>Cost reduction</li>
                                    <li>High efficiency</li>
                                    <li>Scalable</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="vertical-arrow">
                        <span>↓</span>
                    </div>

                    <div className="business-customers">
                        <h3 className="business-subtitle">Target Markets</h3>
                        <div className="customer-flow">
                            <div className="customer-item">
                                <h4>System Manufacturers</h4>
                            </div>

                            <div className="customer-item">
                                <h4>Energy Companies</h4>
                            </div>

                            <div className="customer-item">
                                <h4>Technology Partners</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Business;