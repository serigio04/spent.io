import { v4 as uid } from "uuid";

export const lista = {
  cargos: [
    {
      id: uid(),
      type: "Comida",
      value: "Q450.00",
      date: "11 JUN",
      from: "Pizza Hut",
    },
    {
      id: uid(),
      type: "Utilidades",
      value: "Q340.00",
      date: "9 JUN",
      from: "Cuenta de luz",
    },
    {
      id: uid(),
      type: "Salud",
      value: "Q150.00",
      date: "8 JUN",
      from: "Farmacias A.",
    },
    {
      id: uid(),
      type: "Transporte",
      value: "Q55.00",
      date: "8 JUN",
      from: "Uber",
    },
    {
      id: uid(),
      type: "Otros",
      value: "Q1,500.00",
      date: "5 JUN",
      from: "Amazon",
    },
  ],
};
