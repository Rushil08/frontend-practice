import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
  btn: {
    backgroundColor: "black",
  },
  textf: {
    backgroundColor: "grey",
  },
});

function Form(props) {
  const classes = useStyle();
  const [text, setText] = useState("");

  function clickHandleUp() {
    setText(text.toUpperCase());
  }

  function clickHandleDown() {
    setText(text.toLowerCase());
  }

  function clickHandleClear() {
    setText("");
  }

  function ignoreSpace(word) {
    return !(word === "");
  }

  return (
    <div>
      <TextField
        className={props.mode === "dark" ? classes.textf : null}
        fullWidth
        multiline={true}
        rows={2}
        id="myBox"
        label="Textbox"
        placeholder="Enter text here"
        value={text}
        onChange={(event) => {
          setText(event.target.value);
        }}
        sx={{ color: "black" }}
      />

      <Button
        className={classes.btn}
        variant="contained"
        sx={{ my: 2, mx: 1 }}
        onClick={clickHandleUp}
      >
        {" "}
        Convert To Uppercase
      </Button>
      <Button
        variant="contained"
        sx={{ my: 2, mx: 1 }}
        onClick={clickHandleDown}
      >
        {" "}
        Convert To Lowercase
      </Button>
      <Button variant="contained" onClick={clickHandleClear}>
        Clear Text
      </Button>

      <Typography variant="h4" color="initial">
        Text Information
      </Typography>
      <Typography color="initial" sx={{ mx: 1 }}>
        No. of Words: {text.split(" ").filter(ignoreSpace).length}
      </Typography>
      <Typography color="initial" sx={{ mx: 1 }}>
        No. of Characters: {text.length}
      </Typography>
    </div>
  );
}

export default Form;
