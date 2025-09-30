import { useState } from "react";

const tabs = [
    { id: 'stack', label: 'Electrolysis Stack' },
    { id: 'pem', label: 'PEM' },
    { id: 'aem', label: 'AEM' }
];

const technologyContent = {
    'stack': {
      title: 'Electrolysis Stack',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.'
    },
    'pem': {
      title: 'PEM Technology',
      description: 'Proton Exchange Membrane (PEM) electrolysis technology offers high efficiency and rapid response times. Our PEM stacks are designed for optimal performance in renewable energy applications, providing excellent dynamic operation capabilities and high purity hydrogen output suitable for various industrial applications.'
    },
    'aem': {
      title: 'AEM Technology',
      description: 'Anion Exchange Membrane (AEM) technology combines the benefits of alkaline and PEM electrolysis. Our AEM systems offer cost-effective solutions with reduced dependency on precious metals, while maintaining high efficiency and durability for long-term operation in demanding environments.'
    }
};

const Technology = () => {
    const [activeTab, setActiveTab] = useState('stack');

    return (
        <section className="technology">
        <div className="technology-container">
          <h2 className="section-title">Technology</h2>

          <div className="technology-content">
            <div className="technology-image">
              <div className="tech-placeholder"></div>
            </div>

            <div className="technology-info">
              <div className="technology-tabs">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="technology-description">
                <h3>{technologyContent[activeTab].title}</h3>
                <p>
                  {technologyContent[activeTab].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Technology