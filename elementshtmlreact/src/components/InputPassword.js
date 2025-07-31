/*SE IMPORTA EL INPUT GENERICO PARA SU USO Y REUTILIZARLO CON LOS PROPS DEFINIDOS*/
import Input from "./InputElement";

function InputPassword(props){
    return(
        <Input {...props} type="password"/>
    )
}

export default InputPassword;