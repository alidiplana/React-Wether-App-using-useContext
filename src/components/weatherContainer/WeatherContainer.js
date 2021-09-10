import React, { useContext } from "react";
import { WeatherContext } from "../../app";
import WeatherDetail from "../weatherDetail/WeatherDetail";
import WeatherInput from "../weatherInput/WeatherInput";
import "./weatherContainer.css";

const API_KEY = "72286ce12d54b7b4c80ee1f25861e9a1";

const Weather = (props) => {
  const weather = useContext(WeatherContext);

  const fetchWeatherData = async (value) => {
    if (value) {
      const data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${value}&APPID=${API_KEY}`
      ).then((res) => {
        return res.json();
      });
      props.setDataHandler(data);
    }
  };

  return (
    <div className="weather">
      <span className="title">React Weather App using Redux</span>
      <br />
      <WeatherInput getWeatherData={fetchWeatherData} />

      {weather ? (
        <div>
          <WeatherDetail data={props.weather} />
        </div>
      ) : null}
    </div>
  );
};

export default Weather;
