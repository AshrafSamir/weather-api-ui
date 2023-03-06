import React from "react";
import "./card.css";

function Card({ search, weatherData, loading }) {
  return (
    <div className="container">
      {weatherData.temperature ? (
        <div className="card">
          <div className="weather-icon reverse-section-padding">
            <img src={weatherData.weather_icons} alt="Sun" />
          </div>
          <div className="weather-info reverse-section-padding">
            <h1>{weatherData.temperature}°C</h1>
            <p>{weatherData.weather_descriptions}</p>
            <p>{weatherData.location}</p>
            <p>humidity: {weatherData.humidity + "%"}</p>
            <p>feelslike: {weatherData.feelslike + "°C"}</p>
          </div>
        </div>
      ) : (
        <div className="card">
          <div className="weather-info reverse-section-padding">
            <h1>{loading ? "Loading..." : ""}</h1>
          </div>
        </div>
      )}
    </div>
  );
}

export default Card;
