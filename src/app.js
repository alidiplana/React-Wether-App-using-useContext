import React, { useState } from "react";
import Weather from "./components/weatherContainer/WeatherContainer";

export const WeatherContext = React.createContext();

const App = () => {
  const [data, setData] = useState();

  const setDataHandler = (data) => {
    setData(data);
    console.log("weather", data);
  };

  return (
    <WeatherContext.Provider value={data}>
      <Weather weather={data} setDataHandler={setDataHandler} />
    </WeatherContext.Provider>
  );
};

export default App;
