import React, { useState } from "react";
import WeatherContainer from "./components/weatherContainer/WeatherContainer";

export const WeatherContext = React.createContext();
const API_KEY = "72286ce12d54b7b4c80ee1f25861e9a1";

const App = () => {
  const [data, setData] = useState();

  const fetchWeatherData = async (value) => {
    if (value) {
      const data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${value}&APPID=${API_KEY}`
      ).then((res) => {
        return res.json();
      });
      setData(data);
    }
  };

  return (
    <WeatherContext.Provider value={{ data, fetchWeatherData }}>
      <WeatherContainer/>
    </WeatherContext.Provider>
  );
};

export default App;
