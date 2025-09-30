import bg from "../assets/bg.png"

const statsments = [
  {
    title: 'Mission',
    content : 'To pioneer the hydrogen economy by accelerating the development of advanced electrolysis and fuel cell technology.',
  },
  {
    title: 'Vision',
    content : 'To be the global leader in sustainable hydrogen solutions, powering a cleaner, greener future.',
  },
  {
    title: 'Goal',
    content : 'To contribute significantly to global decarbonization efforts through our innovative products.',
  },
  
]
  


const Mission = () => {
    return (
        <section className="hero">
        <div className="hero-background" style={{backgroundImage:'url('+bg+')', backgroundSize:'cover'}}></div>
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="hero-subtitle">Hyscape dreams of</span>
            <span className="hero-main-title">
              A hydrogen<br />
              energy landscape.
            </span>
          </h1>
          <p className="hero-description">
            We provide the most reliable and affordable water electrolyzers to<br />
            realize the green hydrogen production with renewable energies.
          </p>
        </div>

        <div className="cards-section">
          {statsments.map ((item,index)=>(
            <div className="card" key={"statement_"+index}>
              <h3 className="card-title">{item.title}</h3>
              <p className="card-description">
                {item.content}
              </p>
            </div>
          ))}
        </div>     
      </section>
    )
}

export default Mission;