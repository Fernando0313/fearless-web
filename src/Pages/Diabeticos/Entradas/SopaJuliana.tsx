import ListGroup from "react-bootstrap/esm/ListGroup";
import sopa from '../../../assets/Diabeticos/ent_sopaJuliana.jpeg'
export interface SopaJulianaInterface {}

const SopaJuliana: React.FC<SopaJulianaInterface> = () => {

    return (
        <div className="container mt-5">
          <div className="row justify-content-center">

            
            <h1>Sopa Juliana</h1>
            <img className="col col-md-6 mt-4" src={sopa}/>
            <h4 className="text-start mt-5">
            Los ingredientes:
            </h4>
            <ListGroup className="mt-5 w-50">
              <ListGroup.Item action>Caldo de pollo – 1 litro y medio</ListGroup.Item>
              <ListGroup.Item action variant="primary">
              Repollo – 150 gramos

              </ListGroup.Item>
              <ListGroup.Item action variant="secondary">
              Zanahoria – 2 unidades
              </ListGroup.Item>
              <ListGroup.Item action variant="success">
              Apio – 2 ramas
              </ListGroup.Item>
              <ListGroup.Item action variant="danger">
              Nabo – 1 unidad
              </ListGroup.Item>
              <ListGroup.Item action variant="warning">
              Puerro – 1 unidad
              </ListGroup.Item>
              <ListGroup.Item action variant="info">
              Mantequilla – 20 gramos
              </ListGroup.Item>
              <ListGroup.Item action variant="light">
              Sal – al gusto
              </ListGroup.Item>
    
            </ListGroup>
          </div>
    
          <h5 className="text-start mt-5 mb-3">
          Cómo hacer la receta de Sopa Juliana:

          </h5>
          <div className="row g2">
            <p className="col-md-6 text-start">
              1.- Empezamos como es lógico con la verdura, cortamos el repollo, la zanahoria, el apio, el nabo y el puerro en juliana, es decir, en tiras largas y finas.
            </p>
            <p className="col-md-6 text-start">
              2.- En la cazuela donde tenemos prevista hacer nuestra sopa juliana derretimos la mantequilla y salteamos la verdura durante 5 minutos, hasta que quede pocha.

            </p>
            <p className="col-md-6 text-start">
              3.- A continuación, añadimos el caldo de pollo, salamos al gusto y dejamos hervir unos 10 minutos aproximadamente.
            </p>
            <p className="col-md-6 text-start">
              4.- Cuando la sopa esté lista apagamos el fuego, retiramos y dejamos reposar unos minutos. Servimos calentita y disfrutamos de un plato que nos sentará de maravilla.

            </p>
           
           
          </div>
        </div>
      );
}

export default SopaJuliana