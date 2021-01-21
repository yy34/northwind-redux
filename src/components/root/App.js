import React from "react";
import { Container } from "reactstrap";
import Navi from "../navi/Navi";
import Yeni from "../Yeni";
import Dashboard from "./Dashboard";
function App() {
  return (
    <Container>
      <Navi />
      <Yeni />

      <Dashboard />
    </Container>
  );
}

export default App;
