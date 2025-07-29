import Imagen from "./components/ImagenElement"
import Titulo from "./components/TituloElement";
import Parrafo from "./components/ParrafoElement";
import Enlace from "./components/EnlaceElement";
import Lista from "./components/ListaElement";
import Tabla from "./components/TablaElement";
import Formulario from "./components/FormElement";
import Boton from "./components/ButtonElement";
import Input from "./components/InputElement";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <div className="App-header">
      {/*ELEMENTOS BASICOS*/}
      <Titulo texto="ELEMENTOS BASICOS" nivel="1"/>
      <div>
        <Imagen src="https://th.bing.com/th/id/R.53cdc1d97c02399451d30432a3c4c08f?rik=kMpEugC8LbrV7A&pid=ImgRaw&r=0" alt="espe" width="800px" height="auto"/>
      </div>
      <div>
        <Titulo texto="Esta es una etiqueta H1" nivel="1"/>
        <Titulo texto="Esta es una etiqueta H2" nivel="2"/>
        <Titulo texto="Esta es una etiqueta H3" nivel="3"/>
        <Titulo texto="Esta es una etiqueta H4" nivel="4"/>
        <Titulo texto="Esta es una etiqueta H5" nivel="5"/>
        <Titulo texto="Esta es una etiqueta H6" nivel="6"/>
      </div>
      <div>
        <Parrafo texto="Parrafo" />
      </div>
      <div>
        <Enlace href="#" texto="ESTE ES UN ENLACE"/>
      </div>

      {/*LISTAS Y TABLAS*/}
      <div>
        <Lista elementos={["Primer elemento", "Segundo elemento", "Tercero elemento", "Cuarto elemento"]}/>
      </div>
      <div>
        <Tabla cabecera={['Nombre', 'Apellido', 'ID', 'Cedula', 'Nivel']} 
        datos={[
          ['Juan', 'Pérez', 'L00420328', '1750237812', 'Segundo'],
          ['María', 'González', 'L00567213', '1750849321', 'Primero'],
          ['Carlos', 'Ramírez', 'L00391827', '1750912834', 'Tercero'],
          ['Ana', 'Mendoza', 'L00654329', '1750628471', 'Octavo']
          ]} />
      </div>

      {/*FORMULARIOS*/}
      <div>
        <Formulario>
          <label>Este es un Formulario con children</label>
          <input type="text"/>
          <button>Enviar</button>
        </Formulario>
      </div>
      <div>
        <Boton onClick={""} texto="Este es mi boton"/>
      </div>
      <div>
        <Input type="text" placeholder="Este es el input generico" value="" onChange=""/>
      </div>
      </div>
    </div>
  );
}

export default App;
