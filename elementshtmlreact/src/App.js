import Imagen from "./components/ImagenElement"
import Titulo from "./components/TituloElement";
import Parrafo from "./components/ParrafoElement";
import Enlace from "./components/EnlaceElement";
import Lista from "./components/ListaElement";
import Tabla from "./components/TablaElement";
import Formulario from "./components/FormElement";
import Input from "./components/InputElement";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  return (
    <div className="App">
      <div className="App-header pt-4">

        {/*INDICACION: POR CADA COMPONENTE O ELEMENTO SE AGREGO UN COMPONENTE PARRAFO PARA 
           HACER REFERENCIA DEL ELEMENTO VALGA LA REDUNDANCIA*/}

        <div className="card mb-4">
          {/*ELEMENTOS BASICOS*/}
          <div className="card-header bg-primary">
            <Titulo texto="ELEMENTOS BÁSICOS" nivel="1" />
          </div>

          {/*AQUI SE ENCUENTRA EL ELEMENTO DE IMG*/}
          <Parrafo className="text-black text-center m-1 font-monospace fs-6 text-decoration-underline fw-bold" texto="Este es el elemento img" />
          <Imagen src="../image_element.png" alt="espe" width="800px" height="auto" />

          {/*AQUI SE ENCUENTRA LOS ELEMENTOS HEADERS DEL NIVEL 1 AL 6*/}
          <Parrafo className="text-black text-center m-1 font-monospace fs-6 text-decoration-underline fw-bold" texto="Estos son los elementos headers hasta el nivel 6" />

          {/*ELEMENTO TITULO DONDE SE DA LAS PROPS DE TEXTO Y NIVEL*/}
          <Titulo texto="Esta es una etiqueta H1" nivel="1" />
          <Titulo texto="Esta es una etiqueta H2" nivel="2" />
          <Titulo texto="Esta es una etiqueta H3" nivel="3" />
          <Titulo texto="Esta es una etiqueta H4" nivel="4" />
          <Titulo texto="Esta es una etiqueta H5" nivel="5" />
          <Titulo texto="Esta es una etiqueta H6" nivel="6" />

          {/*ELEMENTO PARRAFO QUE TIENE PROPS DE TEXTO Y SE ADICIONA EL CLASSNAME COMO PROPS 
             PARA LOS ESTILOS DESDE EL LLAMADO Y NO DESDE EL COMPONENTE MISMO*/}
          <Parrafo className="text-black text-center m-1 text-decoration-underline fs-6" texto="Este es el elemento parrafo, donde indica que en la parte de abajo se encuentra un enlace" />

          {/*ELEMENTO DE ENLACE DONDE SE PASA LOS PROPS DE href, texto COMO PIDE LA ACTIVIDAD 
             Y PARA NO PERDER LA PAGINA SE AGREGO UN TARGET,PARA RENDERIZAR EL ENLACE EN OTRA PAGINA*/}
          <div className="d-flex justify-content-center align-items-baseline gap-3">
            <Parrafo className="text-black fs-5 fw-bold font-monospace" texto="Elemento enlace --> " />
            <Enlace href="https://www.espe.edu.ec/" target="_blank" texto="Universidad de las Fuerzas Armadas - ESPE" />
          </div>
        </div>

        <div className="card mb-4">
          {/*LISTAS Y TABLAS*/}
          <div className="card-header bg-danger">
            <Titulo texto="LISTAS Y TABLAS" nivel="1" />
          </div>
          <div className="m-4">

            {/*ELEMENTO DE LISTA DESORDENADA (ul), QUE SE LE PASA COMO PROPS, LOS ELEMENTOS PARA LISTAR*/}
            <Parrafo className="text-center fw-bold font-monospace fs-6 text-decoration-underline" texto="Elemento de lista desordenadad (ul):" />
            <Lista elementos={["Primer elemento", "Segundo elemento", "Tercero elemento", "Cuarto elemento"]} />

            {/*COMPONENTE TABLE, CON LOS PROPS, CABECERA Y DATOS DE FORMA MANUAL MEDIANTE ARRAYS*/}
            <Parrafo className="text-center fw-bold font-monospace fs-6 text-decoration-underline" texto="Elemento table:" />
            <Tabla cabecera={['Nombre', 'Apellido', 'ID', 'Cedula', 'Nivel']}
              datos={[
                ['Juan', 'Pérez', 'L00420328', '1750237812', 'Segundo'],
                ['Alexis', 'Morales', 'L00420874', '1750522532', 'Sexto'],
                ['Carlos', 'Ramírez', 'L00391827', '1750912834', 'Tercero'],
                ['Ana', 'Mendoza', 'L00654329', '1750628471', 'Octavo']
              ]} />
          </div>
        </div>

        <div className="card mb-4">
          {/*FORMULARIOS*/}
          <div className="card-header bg-success w-100">
            <Titulo texto="FORMULARIOS" nivel="1" />
          </div>

          {/*EN ESTA PARTE DE HACE EL USO DEL FORMULARIO, EL MISMO QUE SE COMPONE DE LOS DIFERENTES INPUTS,
             TANTO EL GENERICO COMO LOS OTROS TIPOS DE INPUTS, PARA TENER UNA MEJOR PRESENTACION*/}
          <div className="card m-2">
            <div className="card bg-warning">

              {/*INPUT GENERICO DONDE SE PASA LOS PROPS DE type, placeholder, value, onChange, ESTE INPUT
                 SIRVIO PARA LA REUTILIZACION PARA DEMAS INPUTS*/}
              <Titulo texto="Input Generico" nivel="5" />
            </div>
            <label className="form-label fw-semibold m-2">Este es el input generico reutilizable para el resto de inputs</label>
            <Input type="text" placeholder="Input - Genérico" />
          </div>

          {/*ESTE ES EL COMPONENTE DE FORM, QUE CONTIENE LOS INPUTS DE DIFERENTES TIPOS JUNTO
             JUNTO CON EL BOTON PARA ENVIAR LOS DATOS DE LOS INPUTS*/}
          <Formulario />
        </div>
      </div>
    </div>
  );
}

export default App;
