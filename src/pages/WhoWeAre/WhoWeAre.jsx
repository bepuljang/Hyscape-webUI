import { member_list } from './data'
import './WhoWeAre.css';

function WhoWeAre() {
  return (
    <div className="who-we-are">
      <section className="page-header">
        <h1>Who We Are</h1>
      </section>

      <section className="about-section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Pioneering the Hydrogen Economy</h2>
              <p>
                Founded in 2020, Hyscape is at the forefront of the green hydrogen revolution.
                We are a team of passionate engineers, scientists, and visionaries dedicated to
                creating sustainable energy solutions that will power the world of tomorrow.
              </p>
              <p>
                Our mission is to accelerate the global transition to clean energy by making
                green hydrogen accessible, affordable, and efficient. We believe that hydrogen
                is not just an alternative energy source, but the key to a sustainable future.
              </p>
            </div>
          </div>

          <div className="values-grid">
            <div className="value-card">
              <h3>Our Vision</h3>
              <p>
                To become the global leader in green hydrogen technology, enabling a
                carbon-neutral world where clean energy is abundant and accessible to all.
              </p>
            </div>
            <div className="value-card">
              <h3>Our Mission</h3>
              <p>
                Developing innovative hydrogen solutions that are economically viable,
                environmentally sustainable, and technically superior to traditional energy sources.
              </p>
            </div>
            <div className="value-card">
              <h3>Our Values</h3>
              <ul>
                <li>Innovation through continuous research</li>
                <li>Sustainability in every decision</li>
                <li>Excellence in execution</li>
                <li>Collaboration with partners worldwide</li>
              </ul>
            </div>
          </div>

          <div className="team-section">
            <h2>Leadership Team</h2>
            <div className="team-grid">
              {member_list.map ((member, index)=>(
                <div key={"member"+index} className="team-member">
                  <div className="member-photo"></div>
                  <h4>{member.name}</h4>
                  <p>{member.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WhoWeAre;