import React, { useState } from "react";
import Box from "@mui/material/Box";
import ElevateAppBar from "./components/NavBar";
import BasicTextFields from "./components/FormBox";
import ResponsiveGrid from "./components/GriBox";
import "./App.css";

const conatainerStyle = {
  border: "1px solid blue",
  height: "800px",
  width: "100%",
  margin: "auto",
  padding: "0 2rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};
const boxStyle = {
  position: "absolute",
  top: "75px",
  border: "1px solid black",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
};

function App() {
  return (
    <div className="App">
      <Box sx={conatainerStyle}>
        <ElevateAppBar />
        <Box sx={boxStyle}>
          <BasicTextFields />
          <ResponsiveGrid />
        </Box>
      </Box>
    </div>
  );
}

export default App;
