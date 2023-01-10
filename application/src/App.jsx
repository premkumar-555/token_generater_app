import React, { useState } from "react";
import Container from "@mui/material/Box";
import ElevateAppBar from "./components/NavBar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Container sx={{ border: "1px solid blue" }} fixed="true">
        <ElevateAppBar />
      </Container>
    </div>
  );
}

export default App;
