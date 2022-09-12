import ListGroup from "react-bootstrap/esm/ListGroup";
import bizco from '../../../assets/Diabeticos/ent_bizcochoChocolateAzúcar.jpeg'
export interface BizcochoChocolateInterface {}

const BizcochoChocolate: React.FC<BizcochoChocolateInterface> = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <h1>Bizcocho de chocolate sin azúcar</h1>
        <img className="col col-md-6 mt-4" src={bizco}/>
        <h4 className="text-start mt-5">Ingredientes para un bizcocho: </h4>
        <h6 className="text-start mt-3">Para la masa:</h6>
        <ListGroup className="mt-5 w-50">
          <ListGroup.Item action>3 huevos</ListGroup.Item>
          <ListGroup.Item action variant="primary">
            1 yogurt sin azúcar (usaremos el vaso del yogurt como medida)
          </ListGroup.Item>
          <ListGroup.Item action variant="secondary">
            1 medida de aceite de girasol
          </ListGroup.Item>
          <ListGroup.Item action variant="success">
            3 medidas de harina
          </ListGroup.Item>
          <ListGroup.Item action variant="danger">
            15 gr de cacao en polvo
          </ListGroup.Item>
          <ListGroup.Item action variant="warning">
            30 gr de estevia en granillo (de apariencia como el azúcar blanco)
          </ListGroup.Item>
          <ListGroup.Item action variant="info">
            Una pizca de sal
          </ListGroup.Item>
          <ListGroup.Item action variant="light">
            15 gr de levadura
          </ListGroup.Item>
        </ListGroup>

        <h6 className="text-start mt-3">También necesitarás:</h6>
        <ListGroup className="mt-5 w-50">
          <ListGroup.Item action>Una ensaladera</ListGroup.Item>
          <ListGroup.Item action variant="primary">
            Un colador o tamiz
          </ListGroup.Item>
          <ListGroup.Item action variant="secondary">
            Una varilla
          </ListGroup.Item>
          <ListGroup.Item action variant="success">
            1 molde de plum cake (a poder ser de cristal)
          </ListGroup.Item>
        </ListGroup>
      </div>

      <h5 className="text-start mt-5 mb-3">
        Pasos de Bizcocho de chocolate sin azúcar
      </h5>
      <div className="row g2">
        <p className="col-md-6 text-start">
          1.- Para la elaboración de este sencillo bizcocho, solo hay que seguir
          unos pocos pasos.
        </p>
        <p className="col-md-6 text-start">
          2.- Antes que nada, precalienta el horno a 200º, seguido, junta los
          tres huevos con los 30 gramos de estevia y varillea enérgicamente.
        </p>
        <p className="col-md-6 text-start">
          3.- A esta mezcla, añádele el vaso de aceite, y si quieres, la
          ralladura de un limón. Vierte también el yogurt y una pizca de sal.
        </p>
        <p className="col-md-6 text-start">
          4.- Por último, añade los ingredientes secos, la harina, la levadura y
          el cacao en polvo.
        </p>
        <p className="col-md-6 text-start">
          5.- Pasa éstos por un colador primero y despues remueve con la varilla
          hasta que haya quedado una masa homogénea.
        </p>
        <p className="col-md-6 text-start">
          6.- Moja con aceite una servilleta y unta todo el interior del molde.
          También añade al molde una cucharada de harina y haz movimientos para
          repartir esta por el interior del molde, esto hará que luego el
          bizcocho se despegue con facilidad.
        </p>
        <p className="col-md-6 text-start">
          7.- Cuando el horno ya esté caliente, rellena el molde con toda la
          mezcla y mételo al horno, déjalo 10 minutos a 200 grados y despues
          bájalo a 180 grados durante 25 minutos. Pasados los 35 minutos, sácalo
          del horno y
        </p>
      </div>
    </div>
  );
};

export default BizcochoChocolate;
