import React from "react";
import { Alert } from "@mui/material";

function AlertCmp(props) {
  return (
    props.showAlert && (
      <div>
        <Alert
          severity={props.type}
          sx={{ position: "absolute", width: "97%" }}
        >
          {props.text}
        </Alert>
      </div>
    )
  );
}

export default AlertCmp;
