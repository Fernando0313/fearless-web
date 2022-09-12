import ListGroup from "react-bootstrap/esm/ListGroup";
import atun from '../../../assets/Diabeticos/ent_atunTomate.png'
export interface AtunTomateInterface {}

const AtunTomate: React.FC<AtunTomateInterface> = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <h1>Atún con tomate</h1>
        <img className="col col-md-6 mt-4" src={atun}/>
        <h4 className="text-start mt-5">Ingredientes para 2 personas: </h4>
        <ListGroup className="mt-5 w-50">
        <ListGroup.Item action>Lomo de bonito - 300 gramos</ListGroup.Item>
        <ListGroup.Item action variant="primary">
          Tomates pera - 3 unidades
        </ListGroup.Item>
        <ListGroup.Item action variant="secondary">
          Cebolla - 1 unidad
        </ListGroup.Item>
        <ListGroup.Item action variant="success">
          Pimiento verde - 1 unidad pequeña
        </ListGroup.Item>
        <ListGroup.Item action variant="danger">
          Ajo - 1 diente
        </ListGroup.Item>
        <ListGroup.Item action variant="warning">
          Concentrado de tomate - 2 cucharadas
        </ListGroup.Item>
        <ListGroup.Item action variant="info">
          Azúcar - 1 cucharada
        </ListGroup.Item>
        <ListGroup.Item action variant="light">
          Aceite de oliva - 1 cucharada
        </ListGroup.Item>
        <ListGroup.Item action variant="dark">
          Sal - 1 cucharada pequeña
        </ListGroup.Item>

        <ListGroup.Item action variant="secondary">
          Pimienta - al gusto
        </ListGroup.Item>
        <ListGroup.Item action variant="success">
          Guindilla cayena - 1 unidad
        </ListGroup.Item>
      </ListGroup>
      </div>

     

      <h5 className="text-start mt-5 mb-3">
        Cómo hacer la receta de Atún con tomate. Receta fácil:
      </h5>
<div className="row g2">

<p className="col-md-6 text-start">
        1.- Para empezar escaldamos los tomates, ponemos una cazuela a hervir y
        los añadimos durante un minuto. Los sacamos, los pelamos, los cortamos
        por la mitad y retiramos las semillas y la pulpa, troceamos en cuadrados
        pequeños y reservamos. Después, limpiamos el pimiento y lo cortamos en
        juliana. Hacemos los mismo con la cebolla y picamos un ajo.
      </p>
      <p  className="col-md-6 text-start">
      2.- Añadimos un chorro de aceite a nuestra sartén o cazo y calentamos a fuego medio. Añadimos el ajo y doramos un poco, no mucho. Acto seguido añadimos el pimiento y la cebolla dejamos pochar removiendo, cocinamos unos 8 minutos.
      </p>
      <p  className="col-md-6 text-start">3.- A continuación, añadimos el tomate troceado y la pulpa que habíamos reservado y la colamos para que no caigan las semillas al cazo. Removemos y dejamos pochar unos 5 minutos.</p>
      <p  className="col-md-6 text-start">4.- Añadimos la cayena y las cucharadas de tomate concentrado, a los 2 minutos podemos retirar la cayena, en función de lo que te guste el picante podemos dejarla más o menos tiempo, o no añadirla en caso que no te guste el toque picante. Dejamos cocinar unos 10 minutos, hacia el final añadimos una cucharada de azúcar y removemos. Dejamos cocinar de nuevo.</p>
      <p className="col-md-6 text-start">5.- Apartamos un poco de la verdura y en ese hueco añadimos los trozos de bonito, les damos algunas vueltas para que se sellen por ambas partes y después removemos con toda la verdura. Dejamos cocinar unos 5 minutos, según te guste el punto del atún y ya tenemos el plato listo para presentar!</p>
</div>
    </div>
  );
};

export default AtunTomate;
