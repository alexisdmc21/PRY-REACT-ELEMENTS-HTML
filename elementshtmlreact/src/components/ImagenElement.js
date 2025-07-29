import React from "react";

function Imagen(props){
    return(
        <img
            src={props.src}
            alt={props.alt}
            width={props.width}
            height={props.height}
        />
    );
}

export default Imagen;