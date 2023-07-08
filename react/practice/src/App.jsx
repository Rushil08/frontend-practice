// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Navbar from "./Navbar";
import Form from "./Form";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar i1="home" i2="about"></Navbar>
      <div className="container">
        <Form></Form>
      </div>
    </div>
  );
}

export default App;
