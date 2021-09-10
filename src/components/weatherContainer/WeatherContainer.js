import React from "react";
import WeatherDetail from "../weatherDetail/WeatherDetail";
import WeatherInput from "../weatherInput/WeatherInput";
import "./weatherContainer.css";


const WeatherContainer = (props) => {
  

  return (
    <div className="weather">
      <span className="title">React Weather App using Context</span>
      <br />
      <WeatherInput />

      <WeatherDetail />
    </div>
  );
};

export default WeatherContainer;
