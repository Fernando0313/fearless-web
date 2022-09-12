import ListGroup from "react-bootstrap/esm/ListGroup";
import pollo from '../../../assets/Diabeticos/ent_PolloAñhornoAjillo.jpeg'
export interface PolloHornoInterface {}

const PolloHorno: React.FC<PolloHornoInterface> = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <h1>Pollo al horno al ajillo</h1>
        <img className="col col-md-6 mt-4" src={pollo}/>
        <h4 className="text-start mt-5">
          Ingredientes para el pollo al horno al ajillo para 4 personas :{" "}
        </h4>
        <ListGroup className="mt-5 w-50">
          <ListGroup.Item action>Pollo – 1,5 kg</ListGroup.Item>
          <ListGroup.Item action variant="primary">
            Cebolla – ½ unidad
          </ListGroup.Item>
          <ListGroup.Item action variant="secondary">
            Dientes de ajo – 7 unidades
          </ListGroup.Item>
          <ListGroup.Item action variant="success">
            Laurel – 2 hojas
          </ListGroup.Item>
          <ListGroup.Item action variant="danger">
            Limón –½ unidad
          </ListGroup.Item>
          <ListGroup.Item action variant="warning">
            Hierbas provenzales – 1 cucharada
          </ListGroup.Item>
          <ListGroup.Item action variant="info">
            Vino blanco – 125 ml
          </ListGroup.Item>
          <ListGroup.Item action variant="light">
            Sal – al gusto
          </ListGroup.Item>
          <ListGroup.Item action variant="dark">
            Pimienta – ¼ cucharadita
          </ListGroup.Item>

          <ListGroup.Item action variant="secondary">
            Caldo de pollo – 150 ml
          </ListGroup.Item>
        </ListGroup>
      </div>

      <h5 className="text-start mt-5 mb-3">
        Cómo hacer la receta de Pollo al horno al ajillo:
      </h5>
      <div className="row g2">
        <p className="col-md-6 text-start">
          1.- Precalentar el horno a 180 grados.
        </p>
        <p className="col-md-6 text-start">
          2.- Pelamos los ajos, cortamos el limón en trozos. Introducimos 4
          dientes de ajo y el limón en el interior del pollo junto con un poco
          de sal y pimienta. También puedes preparar el pollo troceado y
          añadirle los trozos de limón a la fuente, esto va en gustos. Si lo
          prepararas troceado no lo tendrás que trinchar después, pero para
          fiestas y celebraciones servir el pollo asado entero queda mejor. Si
          preparas el pollo troceado en lugar de entero en el punto 4º te digo
          el tiempo de cocción (no es el mismo para entero que troceado).
        </p>
        <p className="col-md-6 text-start">
          3.- Cortamos fina la cebolla y el resto de los ajos que tenemos, los
          añadimos a una fuente de horno junto al laurel, las hierbas
          provenzales y el vino blanco. .
        </p>
        <p className="col-md-6 text-start">
          4.- Colocar el pollo en la fuente de horno. Agregar un poco de aceite
          por encima y hornear a 180 grados durante 35 minutos. A mitad de
          cocción le damos la vuelta al pollo y añadimos por encima un poco de
          caldo de pollo para evitar se nos seque la carne. Si cocinas esta
          receta con pollo troceado el tiempo son 25 minutos a 180 grados más
          cinco de reposo ya con el horno apagado.
        </p>
        <p className="col-md-6 text-start">
          5.- Continuar la cocción el tiempo previsto después de añadir el
          caldo. Luego dejamos reposar en el horno ya apagado cinco minutos. Una
          vez finalizada sacamos el pollo del horno, con cuidado lo retiramos de
          la fuente
        </p>
        <p className="col-md-6 text-start">
          6.- Vertemos el caldito que nos queda en el fondo (quitando las hojas de laurel) en un recipiente apto para batidora.

        </p>

        <p className="col-md-6 text-start">
          7.- Triturar y añadir un poco más de caldo de pollo. Esta salsa luego la usaremos para regar el pollo a la hora de emplatar.

        </p>
      </div>
    </div>
  );
};

export default PolloHorno;
