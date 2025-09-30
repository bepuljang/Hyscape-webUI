import './Investor.css';
import blissvine from '../assets/investors/blissvine.png';
import schmidt from '../assets/investors/schmidt.png';
import koreasocialinvestment from '../assets/investors/koreasocialinvestment.png';

const Investor = () => {
  const investors = [
    {
      id: 1,
      name: 'Blissvine',
      logo: blissvine,
      alt: 'Blissvine',
      link: "https://blissvinevc.com/",
    },
    {
      id: 2,
      name: 'Schmidt',
      logo: schmidt,
      alt: 'Schmidt',
      link: 'https://schmidt.kr/',
    },
    {
      id: 3,
      name: 'Korea Social Investment',
      logo: koreasocialinvestment,
      alt: 'Korea Social Investment',
      link: 'https://www.social-investment.kr/eng/'
    }
  ];

  return (
    <section className="investor-section">
      <div className="container">
        <div className="investor-header">
          <h2 className="section-title">Investors</h2>
          <p>
            Trusted by leading investment partners
          </p>
        </div>
        <div className="investor-grid">
          {investors.map((investor) => (
            <a
              key={investor.id}
              href={investor.link}
              target="_blank"
              rel="noopener noreferrer"
              className="investor-item"
            >
              <img
                src={investor.logo}
                alt={investor.alt}
                className="investor-logo"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Investor;