/*SE IMPORTA EL INPUT GENERICO PARA SU USO Y REUTILIZARLO CON LOS PROPS DEFINIDOS*/
import Input from "./InputElement";

function InputTel(props){
    return(
        <Input {...props} type="tel"/>
    )
}


export default InputTel;