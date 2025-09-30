import React, { useState } from "react";
import "./TechDiagram.css";

export default function TechDiagram() {
  const [hoveredBubble, setHoveredBubble] = useState(null);

  const bubbles = [
    {
      id: 'electrolysis',
      position: 'top',
      title: 'PEM/AEM',
      subtitle: 'Electrolysis Stack',
      highlight: true
    },
    {
      id: 'membrane',
      position: 'top-right',
      title: 'Membrane',
      subtitle: 'Design'
    },
    {
      id: 'testing',
      position: 'bottom-right',
      title: 'Testing &',
      subtitle: 'Analysis'
    },
    {
      id: 'production',
      position: 'bottom',
      title: 'Production',
      subtitle: 'Process Design'
    },
    {
      id: 'cell',
      position: 'bottom-left',
      title: 'Cell',
      subtitle: 'Design'
    },
    {
      id: 'catalyst',
      position: 'top-left',
      title: 'Catalyst',
      subtitle: 'Electrode Design'
    }
  ];

  return (
    <div className="tech-diagram">
      {/* Center hub */}
      <div className="tech-center">
        <div className="tech-center-content">
          <h3>PRODUCTS</h3>
          <span>&amp; SERVICES</span>
        </div>
        <div className="tech-center-glow"></div>
      </div>

      {/* Connection lines */}
      <div className="tech-connections">
        {bubbles.map((bubble) => (
          <div
            key={bubble.id}
            className={`tech-connection tech-connection-${bubble.position}`}
          />
        ))}
      </div>

      {/* Bubbles */}
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className={`tech-bubble tech-bubble-${bubble.position} ${
            hoveredBubble === bubble.id ? 'hovered' : ''
          } ${bubble.highlight ? 'highlight' : ''}`}
          onMouseEnter={() => setHoveredBubble(bubble.id)}
          onMouseLeave={() => setHoveredBubble(null)}
        >
          <div className="tech-bubble-content">
            <div className="tech-bubble-title">{bubble.title}<br/>{bubble.subtitle}</div>
          </div>
        </div>
      ))}
    </div>
  );
}