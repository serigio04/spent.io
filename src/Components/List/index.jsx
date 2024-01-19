import React from 'react'
import { Box, Btn } from "../../UI";
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
        <Btn onClick={Form}>Registrar nuevo</Btn>
    </Box>
}

export default Lista