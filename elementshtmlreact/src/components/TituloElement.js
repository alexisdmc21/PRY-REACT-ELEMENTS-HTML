import React from "react";

function TituloElement(props){
    const Tag= "h"+ (props.nivel|| 1);
    return(
            <Tag className="text-black">
                {props.texto}
            </Tag>
    );
}

export default TituloElement;