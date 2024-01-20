import React from "react";
import alimentacion from "../assets/images/alimentacion.svg";
import salud from "../assets/images/salud.svg";
import otros from "../assets/images/otros.svg";
import transporte from "../assets/images/transporte.svg";
import utilidades from "../assets/images/utilidades.svg";
import { Icon, IconTheme } from "../UI";

export default (type) => {
    const Images = {
        Restaurante: <IconTheme src={alimentacion} alt="restaurant" />,
        Salud: <IconTheme src={salud} alt="Salud" />,
        Transporte: <IconTheme src={transporte} alt="Transporte" />,
        Utilidades: <IconTheme src={utilidades} alt="Utilidades" />,
        Otros: <IconTheme src={otros} alt="Otros" />,
        default: <IconTheme src={otros} alt="Otros" />,
    }

    return Images[type] || Images["default"]
}