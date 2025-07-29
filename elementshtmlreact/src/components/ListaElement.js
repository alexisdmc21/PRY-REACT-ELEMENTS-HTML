import React from "react";

function Lista(props){
    return(
        <div>
           <ul>
            {props.elementos.map((elemento, index) => (
                <li key={index}>{elemento}</li>
            ))}
            </ul> 
        </div>
    );
}

export default Lista;