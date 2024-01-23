import { TextField } from "@mui/material";
import "./campo-texto.css"

const CampoTexto = (props) => {

    const PlaceholderMod = `${props.placeholder}...`

    const manejarCambio = (e) => {
        props.setValor(e.target.value)
    
    }
    return <div className="campo-texto">
        <TextField 
            placeholder={PlaceholderMod}
            required={props.required}
            label={props.title.toUpperCase()}
            onChange={manejarCambio}
            variant="outlined"
            fullWidth
        />
    </div>
}

export default CampoTexto