import ListGroup from "react-bootstrap/esm/ListGroup";
import salchi from '../../../assets/Diabeticos/ent_salpiuconPulpo.png'
export interface SalpiconPulpoInterface {}

const SalpiconPulpo: React.FC<SalpiconPulpoInterface> = () => {

    return (
        <div className="container mt-5">
          <div className="row justify-content-center">
            <h1>Salpicón de pulpo</h1>
            <img className="col col-md-6 mt-4" src={salchi}/>
            <h4 className="text-start mt-5">
            Ingredientes para Salpicón de pulpo para 4 personas:
            </h4>
            <ListGroup className="mt-5 w-50">
              <ListGroup.Item action>Pollo – 1,5 kg</ListGroup.Item>
              <ListGroup.Item action variant="primary">
              Patas de pulpo – 3 unidades o unos 500 g
              </ListGroup.Item>
              <ListGroup.Item action variant="secondary">
              Pepino – ½ unidad
              </ListGroup.Item>
              <ListGroup.Item action variant="success">
              Cebolla roja – ½ unidad
              </ListGroup.Item>
              <ListGroup.Item action variant="danger">
              Tomate – 1 unidad
              </ListGroup.Item>
              <ListGroup.Item action variant="warning">
              Zumo de limón – el de ½ limón
              </ListGroup.Item>
              <ListGroup.Item action variant="info">
              Diente de ajo – 1 unidad
              </ListGroup.Item>
              <ListGroup.Item action variant="light">
              Perejil picado –2 cucharadas
              </ListGroup.Item>
              <ListGroup.Item action variant="dark">
              Aceite de oliva – 3 cucharadas
              </ListGroup.Item>
    
              <ListGroup.Item action variant="secondary">
              Vinagre balsámico – 2 cucharaditas
              </ListGroup.Item>
              <ListGroup.Item action variant="warning">
              Sal – al gusto
              </ListGroup.Item>
            </ListGroup>
          </div>
    
          <h5 className="text-start mt-5 mb-3">
          Sal – al gusto
Cómo hacer la receta de Salpicón de pulpo:

          </h5>
          <div className="row g2">
            <p className="col-md-6 text-start">
              1.- En nuestra receta usamos patas de pulpo cocidas que viene ya lista para usar. Si quieres utilizar pulpo fresco el proceso es más lento. Hay que limpiar el pulpo, retirando las tripas y limpiado las ventosas. Luego hay congelar el pulpo fresco durante 8 horas, para luego descongelarlo esté mas tierno.
            </p>
            <p className="col-md-6 text-start">
              2.- Una vez lo hemos tenido congelado 8 horas tenemos que cocer el pulpo. Prepara la olla exprés para que sea más rápido. Añade dos cucharaditas de aceite, la cebolla cortada, una hoja de laurel y el pulpo. ¡No añadas agua a la olla! El pulpo es más de un 90% agua si añades agua al cocer pulpo en la olla exprés puede ser peligroso (el pulpo luego soltará su agua y el recipiente podría explotar). Luego no se añade nunca agua al cocer pulpo en la olla exprés.

            </p>
            <p className="col-md-6 text-start">
              3.- Se añade solo el poco de aceite, la cebolla, el laurel y el pulpo. Cerrar la olla y programar 10 minutos. Transcurrido el tiempo dejamos que repose y ya podremos cortar el pulpo para la receta. Continuamos con la receta de salpicón de pulpo. Lavamos y troceamos las verduras.
            </p>
            <p className="col-md-6 text-start">
              4.- En un mortero majamos el ajo junto al perejil picado y un poco de sal. Luego añadimos aceite de oliva y el vinagre. Mezclar y reservar.

            </p>
            <p className="col-md-6 text-start">
              5.- Cortar las patas del pulpo en trozos añadir a una fuente y mezclar con las verduras. Añadir el majado de aceite, vinagre y perejil. El pulpo es salado y ya añadimos sal al prepara el majado.
            </p>
           
          </div>
        </div>
      );
}

export default SalpiconPulpo