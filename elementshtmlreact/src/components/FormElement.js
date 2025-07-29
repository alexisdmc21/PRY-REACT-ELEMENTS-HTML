import InputText from "./InputText";
import InputSearch from "./InputSearch";
import InputEmail from "./InputEmail";
import InputTel from "./InputTel ";
import InputPassword from "./InputPassword";

function Formulario(){
    return(
        <div>
            <form>
                <InputText />
                <InputEmail />
                <InputTel />
                <InputSearch />
                <InputPassword />
            </form>
        </div>
    )
}

export default Formulario;