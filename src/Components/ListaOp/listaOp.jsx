import { useState } from "react";
import { Select, InputLabel, MenuItem, FormControl} from "@mui/material"
import { lista } from "../../info";
import "./listaOp.css"

const ListaOpciones = (props) => {
    const [value, setValue] = useState(props.tipo || "");

    const handleChange = (e) => {
        setValue(e.target.value)
        props.setValor(e.target.value)
    };
    
    return (
    <>
        <FormControl className="listaTipos">
            <InputLabel id="label-for-select">Type</InputLabel >
            <Select
                id="select-team"
                onChange={handleChange}
                labelId="label-for-select"
                label="Otros"   
                value={value}         
            >
                <MenuItem disabled value="">
                <em>Select a type</em></MenuItem>
                { lista.cargos.map((cargo, index) => <MenuItem key={index} value={cargo}>{cargo}</MenuItem>) }
            </Select>
        </FormControl>
    </>
    )
}

export default ListaOpciones