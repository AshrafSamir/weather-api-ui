import React from "react";
import "./form.css";

function Form({ handleInput, handleSearch }) {
  return (
    <div className="input-form reverse-section-padding">
      <input type="text" placeholder="Enter Address" onChange={handleInput} />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default Form;
