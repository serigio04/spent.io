//Al presionar el botón de registrar nuevo el sistema retorna un formulario que como primer punto solicita el tipo de ingreso :  abono / cargo 
// si es abono: el sistema solicita la cantidad que se ingreso a la cuenta y actualiza la cantidad que aparece en pantalla
// si es cargo: el sistema solicita el tipo de gasto, algun detalle adicional y la cantidad, luego actualiza el listado de gastos registrados
import React from 'react'
import { useState } from "react";
import CampoTexto from "../CampoTexto/CampoTextp";
import { Btn } from "../../UI";

const FormularioIngreso = ({registrarIngreso}) => {

    const [cantidad, setCantidad] = useState("");

    const manejarEnvio = (e) => {
        e.preventDefault();
        let nuevoIngreso = {
            cantidad
        }
        registrarIngreso(nuevoIngreso);
        console.log(registrarIngreso);
    }

    return (
        <section className="formulario">
            <form onSubmit={manejarEnvio}>
                <h2>Ingrese una cantidad</h2>
                    <CampoTexto
                        title="Cantidad"
                        placeholder="Ingresar cantidad"
                        valor={cantidad}
                        setValor={setCantidad}
                    />
                <Btn type="submit">
                    Ingresar
                </Btn>
            </form>
        </section>
    );
};
export default FormularioIngreso
