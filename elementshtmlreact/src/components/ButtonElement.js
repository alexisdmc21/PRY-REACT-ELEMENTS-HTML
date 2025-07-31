function Boton(props){
    return(
        <button className="btn btn-primary btn-outline-success text-black btn-lg px-5 border-0" onClick={props.onClick}>
            {props.texto}
            </button>
    )
}

export default Boton;