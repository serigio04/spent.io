import { Box, Btn } from "../../UI";
import { lista } from "../../info";
import Card from "../Card";

const Lista =  () =>{
    return <Box>
        {
            lista.cargos.map( (cargo, i) => {
                return <Card key={i} cargo={cargo} />              
            })
        }
        <Btn>Registrar nuevo</Btn>
    </Box>
}

export default Lista