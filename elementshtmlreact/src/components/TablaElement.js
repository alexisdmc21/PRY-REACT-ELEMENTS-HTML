import React from "react";

function Tabla(props) {
  const cabecera = props.cabecera || [];
  const datos = props.datos || [];
  
  return (
    <table className="table">
      {cabecera.length > 0 && (
        <thead>
          <tr>
            {cabecera.map((columna, index) => (
              <th key={index} scope="col">{columna}</th>
            ))}
          </tr>
        </thead>
      )}
      <tbody>
        {datos.map((fila, filaIndex) => (
          <tr key={filaIndex}>
            {fila.map((celda, celdaIndex) => (
              <td key={celdaIndex}>{celda}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Tabla;