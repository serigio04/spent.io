import React from "react";
import themeOn from "../../assets/images/themeOn.svg"
import themeOff from "../../assets/images/themeOff.svg"
import { Icon } from "../../UI";

export default ({theme}) => {
    const Claro = <Icon src={themeOn} alt="Tema Claro" />
    const Oscuro = <Icon src={themeOff} alt="Tema Oscuro" />

    return <>
    {theme ? Oscuro : Claro}
    </>
}