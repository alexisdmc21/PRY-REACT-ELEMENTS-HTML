/*SE IMPORTA EL INPUT GENERICO PARA SU USO Y REUTILIZARLO CON LOS PROPS DEFINIDOS*/
import Input from "./InputElement"

function InputText(props){
    return(
        <Input {...props} type="text"/>
    )
}


export default InputText;