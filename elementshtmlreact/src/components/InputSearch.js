/*SE IMPORTA EL INPUT GENERICO PARA SU USO Y REUTILIZARLO CON LOS PROPS DEFINIDOS*/
import Input from "./InputElement";

function InputSearch(props){
    return(
        <Input {...props} type="search"/>
    )
}

export default InputSearch;