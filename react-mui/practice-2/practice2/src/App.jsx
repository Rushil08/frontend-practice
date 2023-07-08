import React from "react";
import Navbar from "./Navbar";
import News from "./News";
import "./styles.css";
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Container maxWidth="xl">
      <News></News> 
      </Container>
       
    </>
  );
}

export default App;
