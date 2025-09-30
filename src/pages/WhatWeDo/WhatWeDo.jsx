import './WhatWeDo.css';

function WhatWeDo() {
  return (
    <div className="what-we-do">
      <section className="page-header">
        <h1>What We Do</h1>
      </section>

      <section className="services-section">
        <div className="container">
          <div className="intro-text">
            <h2>Comprehensive Hydrogen Solutions</h2>
            <p>
              We provide end-to-end hydrogen energy solutions, from production to storage
              and distribution, helping businesses and governments transition to clean energy.
            </p>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🏭</div>
              <h3>Green Hydrogen Production</h3>
              <p>
                State-of-the-art electrolysis technology powered by renewable energy
                to produce zero-emission hydrogen at scale.
              </p>
              <ul>
                <li>PEM Electrolysis Systems</li>
                <li>Alkaline Electrolysis</li>
                <li>Solar-Powered Production</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon">🔋</div>
              <h3>Storage Solutions</h3>
              <p>
                Advanced storage systems ensuring safe and efficient hydrogen
                storage for various applications and scales.
              </p>
              <ul>
                <li>High-Pressure Storage</li>
                <li>Liquid Hydrogen Systems</li>
                <li>Metal Hydride Storage</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon">🚛</div>
              <h3>Distribution Network</h3>
              <p>
                Comprehensive logistics and distribution infrastructure for
                reliable hydrogen supply chain management.
              </p>
              <ul>
                <li>Pipeline Infrastructure</li>
                <li>Mobile Refueling Units</li>
                <li>Hydrogen Stations</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon">⚙️</div>
              <h3>System Integration</h3>
              <p>
                Complete integration services for hydrogen systems in industrial,
                commercial, and residential applications.
              </p>
              <ul>
                <li>Fuel Cell Integration</li>
                <li>Power-to-Gas Systems</li>
                <li>Industrial Applications</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon">📊</div>
              <h3>Consulting Services</h3>
              <p>
                Expert consultation for hydrogen project development,
                feasibility studies, and regulatory compliance.
              </p>
              <ul>
                <li>Feasibility Analysis</li>
                <li>Project Planning</li>
                <li>Regulatory Support</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon">🔬</div>
              <h3>R&D Partnership</h3>
              <p>
                Collaborative research and development programs to advance
                hydrogen technology and applications.
              </p>
              <ul>
                <li>Technology Development</li>
                <li>Pilot Projects</li>
                <li>Innovation Labs</li>
              </ul>
            </div>
          </div>

          <div className="industries-section">
            <h2>Industries We Serve</h2>
            <div className="industries-grid">
              <div className="industry-item">
                <span>🚗</span>
                <p>Transportation</p>
              </div>
              <div className="industry-item">
                <span>🏢</span>
                <p>Commercial Buildings</p>
              </div>
              <div className="industry-item">
                <span>🏭</span>
                <p>Manufacturing</p>
              </div>
              <div className="industry-item">
                <span>⚡</span>
                <p>Power Generation</p>
              </div>
              <div className="industry-item">
                <span>🌾</span>
                <p>Agriculture</p>
              </div>
              <div className="industry-item">
                <span>🏛️</span>
                <p>Government</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WhatWeDo;