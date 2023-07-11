import React from "react";
import Navbar from "./Navbar";
import News from "./News";
import Weather from "./Weather";

import "./styles.css";

import Container from "@mui/material/Container";

function App() {
  return (
    <>
      <Navbar></Navbar>
      

      <Weather></Weather>
      <Container maxWidth="xl">
        <News></News>
      </Container>
    </>
  );
}

export default App;
