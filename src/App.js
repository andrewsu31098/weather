import "./App.css";
import { useState, useEffect } from "react";

import Navvy from "./components/Navbar/Nav";
import WeatherBlock from "./components/WeatherBlock/WeatherBlock.js";

const londonDefault = require("./assets/newyork.json");

function App() {
  const [weatherState, setWeatherState] = useState(londonDefault);
  useEffect(() => {
    document.body.classList.add(weatherState.current.weather[0].main);
  });
  return (
    <div id="weather">
      <Navvy />
      <WeatherBlock weatherState={weatherState} />
    </div>
  );
}

export default App;
