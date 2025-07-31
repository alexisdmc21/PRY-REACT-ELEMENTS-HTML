import React from "react";

function Enlace(props){
    return(
            <a href={props.href} target={props.target}>
                {props.texto} 
            </a>
    );
}

export default Enlace;