import React from 'react'
import { Box, Anchor } from "../../UI";
import { lista } from "../../info";
import Card from "../Card";
import Form from "../FormIngreso";

const Lista =  () =>{
    return <Box>
        {
            lista.cargos.map( (cargo, i) => {
                return <Card key={i} cargo={cargo} />              
            })
        }
        <Anchor href="../FormIngreso/index.jsx">Registrar nuevo</Anchor>
    </Box>
}

export default Lista