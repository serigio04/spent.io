import {React, useState} from "react";
import styled from "styled-components";
import Title from "../Title";
import Account from "../Account";
import Lista from "../List";

const StyledContainer = styled.div`
  background-color: ${ ({ theme }) => theme.body};
  min-height: 90vh;
  padding: 0px 15vw;
`
const StyledContent = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 800px){
    flex-direction: column;
  }

`

const Container = () => {

  const [cant, setCant] = useState(1000.33);

  const actualizarCant = (nuevaCantidad) => {
    setCant((cantidad) => cantidad + nuevaCantidad);
  };

  return (
    <StyledContainer>
      <Title>Organiza tus gastos</Title>
      <StyledContent>
        <Account cant={cant}/>
        <Lista actualizarCant={actualizarCant}/>
      </StyledContent>
    </StyledContainer>
  );
};

export default Container;
