import {React, useState} from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Container from "./Components/Container";
import Header from "./Components/Header";
import GlobalStyled from "./globalStyle";
import { ThemeProvider } from "styled-components";
import { BtnTema } from "./UI";
import SwitcherTema from "./Components/SwitcherTema";
import { TemaClaro, TemaOscuro } from "./UI/Temas";
import FormularioAyuda from "./Components/FormAyuda";


function App() {
  const [ tema, setTema ] = useState(true);

  const toggleTheme = () => {
    setTema((tema) => !tema);
  }

  return (
    <Router>
      <ThemeProvider theme={tema ? TemaClaro : TemaOscuro}>
        <GlobalStyled />
        <BtnTema onClick={toggleTheme}>
          <SwitcherTema theme={tema}/>
        </BtnTema>
        <Header />
        <Routes><Route path="/ayuda" Component={FormularioAyuda} /></Routes>
        <Container />
      </ThemeProvider >
    </Router>
  );
}

export default App;
