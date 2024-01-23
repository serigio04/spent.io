import React, { useState } from 'react';
import { Box, Btn } from '../../UI'; 
import { lista } from '../../info';
import Card from '../Card';
import Form from '../FormIngreso/index'

const Lista = () => {
    const [mostrarForm, setMostrarForm] = useState(false);

    const handlerMostrarForm = () => {
        setMostrarForm(!mostrarForm);
    };

    return (
    <Box>
      {mostrarForm ? (<Form />) : (
        <>
          {lista.cargos.map((cargo, i) => (
            <Card key={i} cargo={cargo} />
          ))}
        <Btn onClick={handlerMostrarForm}>Registrar nuevo</Btn>
        </>
      )}
    </Box>
  );
};

export default Lista;
