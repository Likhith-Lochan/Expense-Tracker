import styled from "styled-components";
import "./App.css";
import bg from "./img/bg.png";
import { MainLayout } from "./styles/Layout.js";
import Orb from "./components/Orb/Orb.js";
import Navigation from "./components/Navigation/Navigation.js";
import { useState } from "react";

function App() {

  const [active,setActive]=useState(1)
  return (
    <AppStyled bg={bg} className="App">
      <Orb/>
      <MainLayout>
        <Navigation active={active} setActive={setActive}/>
      </MainLayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${(props) => props.bg});
  position: relative;
`;

export default App;
