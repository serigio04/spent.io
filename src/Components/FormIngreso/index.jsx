import React from 'react'
import { useState } from "react";
import FormularioIngreso from "./Ingreso";
import FormularioGasto from "./Gasto";
import { Btn } from "../../UI";

const Form = () => {
    const [tipoFormulario, setTipoFormulario] = useState(null);

    const mostrarForm = (tipo) => {
        setTipoFormulario(tipo);
    }

    return ( 
        <div>
            <h1>Seleccione una opción</h1>
            <Btn onClick={() => mostrarForm("Ingreso")}>Ingreso</Btn>
            <Btn onClick={() => mostrarForm("Gasto")}>Gasto</Btn>

            {tipoFormulario === "Ingreso" && <FormularioIngreso />}
            {tipoFormulario === "Gasto" && <FormularioGasto />}
        </div>
    );
};

export default Form