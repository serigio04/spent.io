import { Select, InputLabel, MenuItem, FormControl} from "@mui/material"
import { lista } from "../../info";
import "./listaOp.css"

const ListaOpciones = (props) => { 

    const handleChange = (e) => {
        props.setTipo(e.target.value)
    };
    
    return (
    <>
        <FormControl className="listaTipos">
        <InputLabel id="label-for-select">Type</InputLabel>
        <Select
          id="select-type"
          onChange={handleChange}
          labelId="label-for-select"
          label="Otros"
        >
          <MenuItem disabled value="">
            <em>Select a type</em>
          </MenuItem>
          {lista.cargos.map((cargo, index) => (
            <MenuItem key={index} value={cargo.type}>
              {cargo.type}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
    )
}

export default ListaOpciones