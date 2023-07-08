import React from "react";

function Form() {
  return (
    <div className="mb-3">
      <label htmlFor="myBox" className="form-label">
        Textbox
      </label>
      <input
        type="text"
        className="form-control"
        id="myBox"
        placeholder="Enter text here"
      />
    </div>
  );
}

export default Form;
