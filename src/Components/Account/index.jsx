import React, { useState } from "react";
import privado from "../../assets/images/privado.svg";
import styled from "styled-components";
import ojo from "../../assets/images/ojo.svg";
import dinero from "../../assets/images/dinero.svg";
import { Icon, IconTheme, Btn, Box, Saldo, Detalle } from "../../UI"; 

const IconoMargin = styled(Icon)`
  margin-top: 2px;
`

const Account = ({ cant }) => {
  const [toggleState, untoggle] = useState(true);

  const toggleHandler = () => {
    untoggle((toggleState) => !toggleState);
  };

  return (
    <Box>
      <h2>Cuenta</h2>
      <div style={{ fontSize: "26px", padding: "20px 0" }}>
        Saldo disponible
        <span>
          <IconTheme src={dinero} alt="Icono de saldo" />
        </span>
        {toggleState ? (
          <Saldo cant={cant}>
            <Detalle>Q</Detalle> {cant}
          </Saldo>
        ) : null}
      </div>

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
