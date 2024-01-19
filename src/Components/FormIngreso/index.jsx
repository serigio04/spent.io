//Al presionar el botón de registrar nuevo el sistema retorna un formulario que como primer punto solicita el tipo de ingreso :  abono / cargo 
// si es abono: el sistema solicita la cantidad que se ingreso a la cuenta y actualiza la cantidad que aparece en pantalla
// si es cargo: el sistema solicita el tipo de gasto, algun detalle adicional y la cantidad, luego actualiza el listado de gastos registrados

import { useState } from "react";
import CampoTexto from "../CampoTexto/CampoTextp";

const FormularioIngreso = (props) => {

    const [tipo, setTipo] = useState("");
    const [detalle, setDetalle] = useState("");
    const [precio, setPrecio] = useState("");

    const {registrarGasto} = props

    const manejarEnvio = (e) => {
        e.preventDefault();
        let datosAEnviar = {
            tipo,
            detalle,
            precio
        }
        registrarGasto(datosAEnviar)
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para ingresar un gasto</h2>
            <CampoTexto 
                title="Tipo" 
                placeholder="Ingresar tipo" 
                required 
                valor={tipo} 
                setValor={setTipo}
            />
            <CampoTexto 
                title="Detalle" 
                placeholder="Ingresar detalle"
                required
                valor={detalle} 
                setValor={setDetalle}
            />
            <CampoTexto 
                title="precio" 
                placeholder="Ingresar precio"
                valor={precio} 
                setValor={setPrecio}
            />
            <Boton>
                Ingresar
            </Boton>
        </form>
    </section>
}
export default FormularioIngreso
