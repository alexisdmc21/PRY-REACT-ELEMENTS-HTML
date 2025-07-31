import React from "react";

function ParrafoElement(props){
    return(
        <p className={props.className}>{props.texto}</p>
    );
}

export default ParrafoElement;