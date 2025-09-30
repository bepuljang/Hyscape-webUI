import TechDiagram from "./TechDiagram"

const Technology = () => {

    return (
        <section className="technology">
        <div className="technology-container">
          <h2 className="section-title">Technology</h2>

          <div className="technology-content">
            <div className="technology-image">
              <TechDiagram/>
            </div>

            <div className="technology-info">
              

              <div>
                <h2 style={{marginBottom:"1.4em"}}>
                  Low temperature water electrolysis (PEM, AEM) stack for the commercialization of the green hydrogen.
                </h2>
                <p>
                  We will provide the innovative low temperature water electrolysis stacks to realize the cost-competitive green hydrogen production.
                  <br/><br/>
                  We will be a stepping stone to spread the green energy system in the earth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Technology