import React, { useState } from 'react';
import { Btn } from '../../UI';
import CampoTexto from '../CampoTexto/CampoTextp';
import { v4 as uid } from 'uuid';
import { lista } from "../../info";
import ListaOpciones from '../ListaOp/listaOp';

const FormularioGasto = ({registrarGasto}) => {
    const [tipo, setTipo] = useState("");
    const [detalle, setDetalle] = useState("");
    const [precio, setPrecio] = useState("");

    const manejarEnvio = (e) => {
        e.preventDefault();
        let nuevoGasto = {
            uid,
            tipo,
            detalle,
            precio
        };

        registrarGasto(nuevoGasto);
        console.log(nuevoGasto);
    };

    return (
        <section className="formulario">
            <form onSubmit={manejarEnvio}>
                <h2>Registrar gasto</h2>
                    <ListaOpciones 
                        valor={tipo}
                        setValor={setTipo}
                    />
                    <CampoTexto
                        title="from"
                        placeholder="Ingresar detalle"
                        required
                        valor={detalle}
                        setValor={setDetalle}
                        margin="dense"
                    />
                    <CampoTexto
                        title="value"
                        placeholder="Ingresar precio"
                        valor={precio}
                        setValor={setPrecio}
                        margin="dense"
                    />

                <Btn type="submit">
                    Ingresar gasto
                </Btn>
            </form>
        </section>
    );
};

export default FormularioGasto;