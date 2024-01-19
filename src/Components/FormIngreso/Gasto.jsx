import React, { useState } from 'react';
import { Btn } from '../../UI';
import CampoTexto from '../CampoTexto/CampoTextp';

const FormularioGasto = (props) => {
    const [tipo, setTipo] = useState("");
    const [detalle, setDetalle] = useState("");
    const [precio, setPrecio] = useState("");

    const { registrarGasto } = props;

    const manejarEnvio = (e) => {
        e.preventDefault();
        let datosAEnviar = {
            tipo,
            detalle,
            precio
        };

        registrarGasto(datosAEnviar);
    };

    return (
        <section className="formulario">
            <form onSubmit={manejarEnvio}>
                <h2>Registrar gasto</h2>
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
                        title="Precio"
                        placeholder="Ingresar precio"
                        valor={precio}
                        setValor={setPrecio}
                    />
                <Btn type="submit">
                    Ingresar
                </Btn>
            </form>
        </section>
    );
};

export default FormularioGasto;