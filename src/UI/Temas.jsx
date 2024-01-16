import {
    fondoClaro, 
    contenidoClaro,
    textoFondoClaro,
    fondoOscuro,
    contenidoOscuro, 
    textoFondoOscuro,
} from "./variables"

export const TemaClaro = {
    body: fondoClaro,
    inside: contenidoClaro,
    text: textoFondoClaro,
    filter: "",
}

export const TemaOscuro = {
    body: fondoOscuro,
    inside: contenidoOscuro,
    text: textoFondoOscuro,
    filter: "invert(100%)"
}