import React from "react";
import "./main.css";
import Card from "../Card/Card";
import Form from "../Form/Form";

function Main({ handleSearch, handleInput, search, weatherData, loading }) {
  return (
    <div className="main section-padding">
      <Form handleSearch={handleSearch} handleInput={handleInput} />
      <Card search={search} weatherData={weatherData} loading={loading} />
    </div>
  );
}

export default Main;
