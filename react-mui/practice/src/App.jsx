import Form from "./Form";
import About from "./About";
import Navbar from "./Navbar";
import Alert from "./Alert";
import { Container, Typography } from "@material-ui/core";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  const [showAlert, setShowAlert] = useState(false);

  const toggleMode = () => {
    if (mode === "light") {
      document.body.style.backgroundColor = "grey";
      setMode("dark");
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 1500);
    } else {
      document.body.style.backgroundColor = "white";
      setMode("light");
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 1500);
    }
  };

  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode}></Navbar>
      <Alert
        showAlert={showAlert}
        type={"success"}
        text={`Theme set to ${mode} mode`}
      ></Alert>
      <Container>
        <Typography
          variant="h1"
          align="center"
          sx={{ color: "white", zIndex: "modal" }}
        >
          Hello World
        </Typography>
        <Form mode={mode}></Form>
        <About heading="about1" mode={mode}></About>
        <About heading="about2" mode={mode}></About>
        <About heading="about3" mode={mode}></About>
      </Container>
    </>
  );
}

export default App;
