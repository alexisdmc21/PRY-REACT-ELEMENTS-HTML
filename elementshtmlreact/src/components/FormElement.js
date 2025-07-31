/*POR LO GENERAL MANTENGO UN ORDEN EN LOS IMPORTES

  PRIMERO LOS IMPORTES DE LIBRERIAS U OTROS
  SEGUNDO LOS IMPORTES DE FUNCIONES INTERNAS DEL PROYECTO*/

import { useForm } from "react-hook-form" /*ESTE CASO SE IMPORTA EL HOOK PARA VALIDACIONES REQUERDIAS COMO:
                                            -REQUIRED
                                            -MINLENGTH*/

import InputText from "./InputText";
import InputSearch from "./InputSearch";
import InputEmail from "./InputEmail";
import InputTel from "./InputTel ";
import InputPassword from "./InputPassword";
import InputURL from "./InputURL ";
import Boton from "./ButtonElement";

//FUNCION DEL COMPONENTE FORM
function Formulario() {

    /*CONSTANTE DONDE SE LLAMA LO NECESARIO PARA VALIDACIONES:
      
      register: ESTA FUNCION NOS AYUDA A REGISTRAR LOS CAMPOS, DE MANERA SIMILAR COMO PONER EL ATRIBUTO NAME A CADA INPUT
      handleSubmit: EVENTO PARA ENVIAR DATOS
      formState: FUNCIONA PARA ACCEDER AL ESTADO DEL FORM*/
    const { register, handleSubmit, formState: { errors }} = useForm();

    // MANEJADOR DE ENVÍO QUE MUESTRA LOS DATOS DEL FORMULARIO EN CONSOLA
    const onSubmit = handleSubmit((data) => {
        console.table(data)
    })

    return (
        <div className="m-3">


            {/*FORMULARIO*/}
            <form onSubmit={onSubmit}>

                {/*ENCAPSULO EN DIVS PARA TENER UN ESTILO DEBIDO A EL MANEJO DE VALIDACIONES*/}
                <div className="mb-1">
                    <label className="form-label fs-5 fw-semibold font-monospace">
                        Input de tipo texto:
                    </label>

                    {/*IMPORTE DEL INPUT DE TIPO TEXTO CON LAS SIGUIENTES COSAS:
                       
                       -REGISTRO DE LOS CAMPOS
                       -VALIDACION CON REQUIRED
                       -VALIDACION DE MINLENGTH
                       
                       SE DA UN VALUE Y MESSAGE A CADA UNO DE LAS VALIDACIONES*/}
                       
                    <InputText {...register("texto", {
                        required:{
                            value: true,
                            message: "Input texto requerido"
                        },
                        minLength:{
                            value: 3,
                            message: "Input requiere minimo 3 caracteres"
                        }
                    })} placeholder="Escribir texto aquí..." className="form-control" /> {/*SE IMPLEMENTA LOS PROPS RESTANTES COMO EL PLACEHOLDER Y SE DA ESTILO*/}
                    
                    {/*CAPTURA EL ERROR COMETIDO Y MUESTRA EL MESSAGE RESPECTIVO DEL ERROR*/}
                    {
                        errors.texto && <span className="fs-6 text-danger">{errors.texto.message}</span>
                    }
                </div>

                {/*PARA EL RESTO DE INPUTS SE MANEJA LA MISMA LOGICA*/}
                <div className="mb-1">
                    <label className="form-label fs-5 fw-semibold font-monospace">
                        Input de tipo URL:
                    </label>
                    <InputURL {...register("url", {
                        required:{
                            value: true,
                            message: "Input URL requerido"
                        }
                     })} placeholder="https://ejemplo.com" className="form-control" />
                    {
                        errors.url && <span className="fs-6 text-danger">{errors.url.message}</span>
                    }
                </div>

                <div className="mb-1">
                    <label className="form-label fs-5 fw-semibold font-monospace">
                        Input de tipo email:
                    </label>
                    <InputEmail {...register("email", { 
                        required:{
                            value: true,
                            message: "Input email requerido"
                        }
                     })} placeholder="usuario@email.com" className="form-control" />
                    {
                        errors.email && <span className="fs-6 text-danger">{errors.email.message}</span>
                    }
                </div>

                <div className="mb-1">
                    <label className="form-label fs-5 fw-semibold font-monospace">
                        Input de tipo teléfono:
                    </label>
                    <InputTel {...register("tel", { 
                        required:{
                            value: true,
                            message: "Input tel requerido"
                        },
                        maxLength:{
                            value: 10,
                            message: "Numero de telefono requiere maximo 10 caracteres"
                        }
                     })} placeholder="09XXXXXXXX" className="form-control" />
                    {
                        errors.tel && <span className="fs-6 text-danger">{errors.tel.message}</span>
                    }
                </div>

                <div className="mb-1">
                    <label className="form-label fs-5 fw-semibold font-monospace">
                        Input de tipo búsqueda:
                    </label>
                    <InputSearch {...register("search")} placeholder="Search..." className="form-control" />
                </div>

                <div className="mb-1">
                    <label className="form-label fs-5 fw-semibold font-monospace">
                        Input de tipo contraseña:
                    </label>
                    <InputPassword {...register("password", { 
                        required:{
                            value: true,
                            message: "Contraseña requerida"
                        }
                     })} placeholder="Contraseña" className="form-control" />
                    {
                        errors.password && <span className="fs-6 text-danger">{errors.password.message}</span>
                    }
                </div>

                {/*ESTE ES EL COMPONENTE BOTON IMPORTADO PARA EL ENVIO DEL FORMULARIO,
                   EL MISMO QUE MUESTRA SOLO POR CONSOLA LOS DATOS ENVIADOS MEDIANTE
                   EL EVENTO ONSUBMIT, USANDO LAS PROPS*/}
                <div className="text-center mt-4">
                    <Boton texto="Enviar" onClick={onSubmit} />
                </div>
            </form>
        </div>
    )
}

export default Formulario;