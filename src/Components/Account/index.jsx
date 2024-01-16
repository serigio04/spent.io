import React, { useState } from "react";
import privado from "../../assets/images/privado.svg";
import styled from "styled-components";
import ojo from "../../assets/images/ojo.svg";
import dinero from "../../assets/images/dinero.svg";
import { Icon, IconTheme } from "../../UI";
import { Btn } from "../../UI";
import { Box } from "../../UI";
import { Saldo } from "../../UI";
import { Detalle } from "../../UI";


const IconoMargin = styled(Icon)`
  margin-top: 2px;
`

const Account = () => {
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
          <Saldo >
            <Detalle>Q</Detalle> 8,621.50
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
