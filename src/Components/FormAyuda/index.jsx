//Al presionar el botón de ayuda el sistema retorna un formulario donde se le solicita al usuario llenar campos como: nombre, correo electronico, problema y comentario
import React from 'react'
import { useState } from "react";
import CampoTexto from "../CampoTexto/CampoTextp";
import { Btn } from "../../UI";

const FormularioAyuda = () => {

    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [problema, setProblema] = useState("");

    const manejarEnvio = (e) => {
        e.preventDefault();
        let datosAEnviar = {
            nombre,
            email,
            precio
        }
        console.log(datosAEnviar)
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para ingresar un gasto</h2>
            <CampoTexto 
                title="Nombre" 
                placeholder="Ingresar nombre" 
                required 
                valor={nombre} 
                setValor={setNombre}
            />
            <CampoTexto 
                title="Email" 
                placeholder="Ingresar email"
                required
                valor={email} 
                setValor={setEmail}
            />
            <CampoTexto 
                title="Comentario" 
                placeholder="Ingresar comentario"
                valor={problema} 
                setValor={setProblema}
            />
            <Btn>
                Enviar comentario
            </Btn>
        </form>
    </section>
}
export default FormularioAyuda
