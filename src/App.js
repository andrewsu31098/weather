import "./App.css";
import { useState, useEffect } from "react";

import Navvy from "./components/Navbar/Nav";
import WeatherBlock from "./components/WeatherBlock/WeatherBlock.js";

const londonDefault = require("./assets/london.json");

function convertBackground(weatherType) {
  switch (weatherType) {
    case "Thunderstorm":
      return "./assets/m-rainy-1.png";
    case "Drizzle":
      return "./assets/m-rainy-1.png";
    case "Rain":
      return "./assets/m-rainy-1.png";
    case "Snow":
      return "./assets/m-snowy-1.png";
    case "Clear":
      return "./assets/m-sunny-1.png";
    case "Clouds":
      return "./assets/m-cloudy-1.png";
    default:
      return "./assets/m-sunny-1.png";
  }
}

function App() {
  const [weatherState, setWeatherState] = useState(londonDefault);
  // document.body.style.backgroundImage =
  //   "url(" + convertBackground(weatherState.current.weather[0].main) + ")";
  // document.body.style.backgroundImage = "url('./assets/m-rainy-1.png')";
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
