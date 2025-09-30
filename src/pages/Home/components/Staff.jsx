import staff1 from "../assets/hoonheelee.png"
import staff2 from "../assets/wongminkim.png"
import staff3 from "../assets/jeahuh.png"

const teamMembers = [
    { 
      name: 'Hoonhee Lee', 
      position: 'CEO',
      description : "A leading expert in hydrogen technology, with 20 years of experience including Hyundai Motor Company's R&D center. His deep knowledge of PEM Fuel cells and electrolysis development is the foundation of Hyscape's technology. He has been at the forefront of the hydrogen revolution, designing and perfecting the core components for electrolyzers and fuel cells.",
      image : staff1
    },
    { 
      name: 'Yongmin Kim', 
      position: 'CSO',
      description : "Kim combines extensive experience from two industry giants. He spent 10 years at Hyundai Motor Company, where he specialized in hydrogen fuel cell development, and then led the charge in AEM electrolysis material and stack development for 4 years at Hanwha Solutions. His dual expertise in both fuel cells and electrolysis gives Hyscape a unique edge in developing integrated hydrogen solutions",      
      image : staff2
    },
    { 
      name: 'Jea Huh', 
      position: 'COO',
      description : "A seasoned entrepreneur with a keen eye for disruptive technology. As a hardware startup accelerator, he spent years discovering and investing in promising early-stage companies. His business acumen and strategic vision are crucial for commercializing our groundbreaking technology and building Hyscape into a global leader",
      image : staff3
    }
];

import { useState } from 'react';

const Staff = () => {
    const [selectedMember, setSelectedMember] = useState(0);

    return (
        <section className="team">
        <div className="container">
          <div className="flex" style={{gap:"2.0em", marginBottom:"4.0em"}}>
            <h2 className="section-title">Team</h2>
            <p>
              Hyscape was founded by three experts who share a common vision for a sustainable hydrogen future.
              Our team brings together decades of experience in hydrogen technology and a proven track record in innovation and business development
            </p>
          </div>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={`team-member ${selectedMember === index ? 'selected' : ''}`}
                onClick={() => setSelectedMember(index)}
                style={{ cursor: 'pointer' }}
              >
                <div className="member-image">
                  <img src={member.image} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <h3 className="member-name">{member.name}</h3>
                <p className="member-position">{member.position}</p>
              </div>
            ))}
          </div>
          {selectedMember !== null && (
            <div className="member-description-container">
              <div className="member-description">
                <h3>{teamMembers[selectedMember].name} - {teamMembers[selectedMember].position}</h3>
                <p>{teamMembers[selectedMember].description}</p>
              </div>
            </div>
          )}
        </div>
      </section>
    )
}

export default Staff