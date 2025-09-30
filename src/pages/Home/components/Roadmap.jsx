import { useState } from "react";

const roadmapData = {
    '2026': {
      title: '250 kW Stack',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
    },
    '2028': {
      title: 'MW Stack',
      description: 'Development of megawatt-scale stack technology for industrial applications. This milestone represents a significant leap in our hydrogen production capacity, enabling large-scale green hydrogen production facilities to meet growing industrial demand for clean energy solutions.'
    },
    '2030': {
      title: 'Multi MW System',
      description: 'Implementation of multi-megawatt integrated systems for utility-scale hydrogen production. These advanced systems will feature enhanced efficiency, automated operation, and smart grid integration capabilities to support the global transition to renewable energy infrastructure.'
    }
  };

const Roadmap = ({active}) => {
    const [activeYear, setActiveYear] = useState('2026');

    return (
        <section className="roadmap">
        <div className="roadmap-container">
          <h2 className="section-title">Roadmap</h2>

          <div className="roadmap-content">
            <div className="roadmap-image">
              <div className="roadmap-image-placeholder"></div>
            </div>

            <div className="roadmap-main">
              <div className="roadmap-card">
                <h3 className="roadmap-card-year">{activeYear}</h3>
                <h4 className="roadmap-card-title">{roadmapData[activeYear].title}</h4>
                <p className="roadmap-card-description">
                  {roadmapData[activeYear].description}
                </p>
              </div>
            </div>

            <div className="roadmap-timeline">
              <div className="timeline-line">
                <div className={`timeline-marker ${activeYear === '2030' ? 'active' : ''}`}></div>
                <div className={`timeline-marker ${activeYear === '2028' ? 'active' : ''}`}></div>
                <div className={`timeline-marker ${activeYear === '2026' ? 'active' : ''}`}></div>
              </div>
              <div className="timeline-itemwrap">
              <div
                className={`timeline-item ${activeYear === '2030' ? 'active' : ''}`}
                onClick={() => setActiveYear('2030')}
              >
                <div className="timeline-content">
                  <span className="timeline-year">2030</span>
                  <span className="timeline-label">Multi MW System</span>
                </div>
              </div>
              <div
                className={`timeline-item ${activeYear === '2028' ? 'active' : ''}`}
                onClick={() => setActiveYear('2028')}
              >
                <div className="timeline-content">
                  <span className="timeline-year">2028</span>
                  <span className="timeline-label">MW Stack</span>
                </div>
              </div>
              <div
                className={`timeline-item ${activeYear === '2026' ? 'active' : ''}`}
                onClick={() => setActiveYear('2026')}
              >
                <div className="timeline-content">
                  <span className="timeline-year">2026</span>
                  <span className="timeline-label">250 kW Stack</span>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )    
}

export default Roadmap;