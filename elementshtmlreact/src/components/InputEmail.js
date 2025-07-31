/*SE IMPORTA EL INPUT GENERICO PARA SU USO Y REUTILIZARLO CON LOS PROPS DEFINIDOS*/
import Input from "./InputElement";

function InputEmail(props){
    return(
        <Input {...props} type="email"/>
    );
}

export default InputEmail;