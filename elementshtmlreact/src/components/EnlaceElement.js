import React from "react";

function Enlace(props){
    return(
        <div>
            <a href={props.href}>
                {props.texto} 
            </a>
        </div>
    );
}

export default Enlace;