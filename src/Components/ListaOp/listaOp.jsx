import { Select, InputLabel, MenuItem, FormControl} from "@mui/material"
import { lista } from "../../info";

const ListaOpciones = (props) => { 

    const handleChange = (e) => {
        props.setTipo(e.target.value)
      };
    
    <>
        <FormControl className="listaTipos">
            <InputLabel id="label-for-select">Type</InputLabel >
            <Select
                id="select-team"
                onChange={handleChange}
                labelId="label-for-select"
                label="Otros"            
            >
                <MenuItem disabled value="">
                <em>Select a type</em></MenuItem>
                { lista.cargos.map((cargo, index) => <MenuItem key={index} value={cargo}>{cargo}</MenuItem>) }
            </Select>
        </FormControl>
    </>
}

export default ListaOpciones