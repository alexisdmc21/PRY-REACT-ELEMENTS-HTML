import React from "react";

function TituloElement(props){
    const Titulo= "h"+props.nivel|| 1;
    return(
        <div>
            <Titulo>
                {props.texto}
            </Titulo>
        </div>
    );
}

export default TituloElement;