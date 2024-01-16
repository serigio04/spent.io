import React from "react";
import Container from "./Components/Container";
import Header from "./Components/Header";
import GlobalStyled from "./globalStyle";
import { ThemeProvider } from "styled-components";
import { BtnTema } from "./UI";
import SwitcherTema from "./Components/SwitcherTema";
import { TemaClaro, TemaOscuro } from "./UI/Temas";
import { useState } from "react";

function App() {
  const [ tema, setTema ] = useState(true);

  const toggleTheme = () => {
    setTema((tema) => !tema);
  }

  return (
    <ThemeProvider theme={tema ? TemaClaro : TemaOscuro}>
        <GlobalStyled />
        <BtnTema onClick={toggleTheme}>
          <SwitcherTema theme={tema}/>
        </BtnTema>
        <Header />
        <Container />
    </ThemeProvider >
  );
}

export default App;
