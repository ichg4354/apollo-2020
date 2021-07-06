import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Detail from "../routes/Detail";
import Home from "../routes/Home";
import styled from "styled-components";

const Header = styled.div`
  height: 30vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(19, 9, 121, 1) 0%,
    rgba(0, 212, 255, 1) 100%
  );
`;

const HeaderText = styled.h1`
  color: whitesmoke;
  font-weight: bold;
  font-size: 45px;
`;

function App() {
  return (
    <div className="App">
      <Header>
        <HeaderText>APOLLO MOVIES</HeaderText>
      </Header>
      <Router>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/:id" component={Detail}></Route>
      </Router>
    </div>
  );
}

export default App;
