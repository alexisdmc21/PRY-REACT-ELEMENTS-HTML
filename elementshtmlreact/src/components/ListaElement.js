import React from "react";

function Lista(props){
    return(
           <ul>
            {props.elementos.map((elemento, index) => (
                <li key={index}>{elemento}</li>
            ))}
            </ul> 
    );
}

export default Lista;