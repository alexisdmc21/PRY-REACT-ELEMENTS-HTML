import React from "react";


function Tabla(props) {

  /*CONSTANTES QUE GUARDAN LOS DATOS QUE MOSTRARA EN LA TABLA*/
  const cabecera = props.cabecera || [];
  const datos = props.datos || [];
  
  return (

    /*SE GENERA LA TABLA DE ACUERDO A LOS DATOS INGRESADOS A LOS PROPS*/
    <table className="table">
      {cabecera.length > 0 && (

        /*SE DA ESTILOS POR CADA COMPONENTE DE LA TABLA*/
        <thead className="table-primary border-1 border-black">
          <tr className="border-bottom border-black">

            {/*MEDIANTE EL METODO MAP RECORRE EL ARREGLO, EN ESTE CASO DE LA CABECERA*/}
            {cabecera.map((columna, index) => (
              <th key={index} scope="col" className="text-center py-3">
                {columna}
              </th>
            ))}
          </tr>
        </thead>
      )}

      {/*CUERPO DE LA TABLA*/}
      <tbody>

        {/*DEL MISMO MODO CON EL METODO MAP RECORRE EL ARRAY DE LOS DATOS Y LOS VA UBICANDO EN LA TABLA*/}
        {datos.map((fila, filaIndex) => (
          <tr key={filaIndex} className="border-bottom border-1 border-black">
            {fila.map((celda, celdaIndex) => (
              <td key={celdaIndex} className="text-center py-2">
                {celda}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Tabla;