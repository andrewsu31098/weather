import "./App.css";
import { useState, useEffect } from "react";

import Navvy from "./components/Navbar/Nav";
import WeatherBlock from "./components/WeatherBlock/WeatherBlock.js";
import MobileBlock from "./mobilecomponents/MobileBlock/MobileBlock";

import { API, JS } from "aws-amplify";
import { useMediaQuery } from "react-responsive";

const londonDefault = require("./assets/newyork.json");

function App() {
  const [weatherState, setWeatherState] = useState(londonDefault);

  useEffect(() => {
    console.log(document.body.classList);
    document.body.classList.remove(document.body.classList[0]);
    document.body.classList.add(weatherState.current.weather[0].main);
  });

  async function findNewWeather() {
    const weatherData = await API.get("weatherApi", "/weather?city=New York");
    setWeatherState(weatherData);
  }

  async function onCitySearch(city) {
    const weatherData = await API.get("weatherApi", `/weather?city=${city}`);
    setWeatherState(weatherData);
  }

  useEffect(() => {
    findNewWeather();
  }, []);

  const isMobileScreen = useMediaQuery({ query: "(max-width: 900px)" });

  return (
    <div id="weather">
      <Navvy onCitySearch={onCitySearch} />
      {isMobileScreen ? (
        <MobileBlock weatherState={weatherState} />
      ) : (
        <WeatherBlock weatherState={weatherState} />
      )}
    </div>
  );
}

export default App;
