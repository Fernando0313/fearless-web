import ent_atunTomate from "../../../assets/Diabeticos/ent_atunTomate.png";
import ent_bizcochoChocolateAzúcar from "../../../assets/Diabeticos/ent_bizcochoChocolateAzúcar.jpeg";
import ent_PolloAñhornoAjillo from "../../../assets/Diabeticos/ent_PolloAñhornoAjillo.jpeg";
import ent_salpiuconPulpo from "../../../assets/Diabeticos/ent_salpiuconPulpo.png";
import ent_sopaJuliana from "../../../assets/Diabeticos/ent_sopaJuliana.jpeg";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
export interface EntradasInterface {}

const Entradas: React.FC<EntradasInterface> = () => {
  return (
    <div className="container "style={{marginTop:'5.5rem'}}>
		<h2>Entradas</h2>
      <div className="row mt-5">
        <Card className="m-2" style={{ width: "18rem" }}>
          <Card.Img variant="top" src={ent_atunTomate} />
          <Card.Body>
            <Link to='/Diabeticos/Entradas/AtunTomate'> <Card.Title>Atún con tomate</Card.Title></Link>
           
            
          </Card.Body>
        </Card>
        
        <Card className="m-2"  style={{ width: "18rem" }}>
          <Card.Img variant="top" src={ent_PolloAñhornoAjillo} />
          <Card.Body>
          <Link to={'/Diabeticos/Entradas/PolloHorno'}>  <Card.Title>Pollo al horno al ajillo
		  
</Card.Title>
</Link>
            
          </Card.Body>
        </Card>
        <Card className="m-2"  style={{ width: "18rem" }}>
          <Card.Img variant="top" src={ent_salpiuconPulpo} />
          <Card.Body>
        <Link to={'/Diabeticos/Entradas/SalpiconPulpo'}>    <Card.Title>Salpicón de pulpo</Card.Title>
		</Link>
            
          </Card.Body>
        </Card>
        <Card className="m-2"  style={{ width: "18rem" }}>
          <Card.Img variant="top" src={ent_sopaJuliana} />
          <Card.Body>
           <Link to={'/Diabeticos/Entradas/SopaJuliana'}> <Card.Title>Sopa Juliana</Card.Title>
		   </Link>
            
          </Card.Body>
        </Card>
		<Card className="m-2" style={{ width: "18rem" }}>
          <Card.Img variant="top" src={ent_bizcochoChocolateAzúcar} />
          <Card.Body>
           <Link to='/Diabeticos/Entradas/Bizcocho' > <Card.Title>Bizcocho de chocolate sin azúcar
</Card.Title></Link>
            
            
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Entradas;
