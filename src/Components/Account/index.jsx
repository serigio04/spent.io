import React, { useState } from "react";
import privado from "../../assets/images/privado.svg";
import styled from "styled-components";
import ojo from "../../assets/images/ojo.svg";
import dinero from "../../assets/images/dinero.svg";
import { Icon, IconTheme, Btn, Box, Saldo, Detalle } from "../../UI"; 
import FormularioIngreso from "../FormIngreso/Ingreso";

const IconoMargin = styled(Icon)`
  margin-top: 2px;
`

const Account = (actualizarCant) => {
  const [toggleState, untoggle] = useState(true);
  const [cant, setCant] = useState(1000.33);

  const toggleHandler = () => {
    untoggle((toggleState) => !toggleState);
  };

  const actualizarCantDesdeForm = (nuevaCant) => {
    setCant(cant + nuevaCant);
    if (actualizarCant){
      actualizarCant(cant + nuevaCant)
    }
  }

  return (
    <Box>
      <h2>Cuenta</h2>
      <div style={{ fontSize: "26px", padding: "20px 0" }}>
        Saldo disponible
        <span>
          <IconTheme src={dinero} alt="Icono de saldo" />
        </span>
        {toggleState ? (
          <Saldo>
            <Detalle>Q</Detalle> {cant}
          </Saldo>
        ) : null}
      </div>
      {/* <FormularioIngreso actualizarCantDesdeForm={actualizarCantDesdeForm}/> */}

      <Btn onClick={toggleHandler}>
        <IconoMargin
          src={toggleState ? privado : ojo}
          alt="Privacidad de saldo"
        />
      </Btn>
    </Box>
  );
};

export default Account;
