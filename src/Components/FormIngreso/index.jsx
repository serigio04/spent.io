import React from 'react'
import { useState } from "react";
import FormularioIngreso from "./Ingreso";
import FormularioGasto from "./Gasto";
import { Btn } from "../../UI";
import { lista } from '../../info';

const Form = () => {
    const [tipoFormulario, setTipoFormulario] = useState(null);
    const [gasto, setGasto] = useState();

    const mostrarForm = (tipo) => {
        setTipoFormulario(tipo);
    }

    const registrarGasto = (nuevoGasto) =>{
        console.log(nuevoGasto);
        setGasto([...lista.cargos, nuevoGasto]);
      }

    return ( 
        <div>
            <h1>Seleccione una opción</h1>
            <Btn onClick={() => mostrarForm("Ingreso")}>Ingreso</Btn>
            <Btn onClick={() => mostrarForm("Gasto")}>Gasto</Btn>

            {tipoFormulario === "Ingreso" && <FormularioIngreso />}
            {tipoFormulario === "Gasto" && <FormularioGasto registrarGasto={registrarGasto}/>}
        </div>
    );
};

export default Form