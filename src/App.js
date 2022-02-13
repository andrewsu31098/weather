import "./App.css";
import { useState, useEffect } from "react";

import Navvy from "./components/Navbar/Nav";
import WeatherBlock from "./components/WeatherBlock/WeatherBlock.js";

import { API, JS } from "aws-amplify";

const londonDefault = require("./assets/newyork.json");

function App() {
  const [weatherState, setWeatherState] = useState(londonDefault);

  useEffect(() => {
    console.log("First body class: ", document.body.classList[0]);
    document.body.classList.remove(document.body.classList[0]);
    document.body.classList.add(weatherState.current.weather[0].main);
  });

  async function callApi() {
    try {
      const peopleData = await API.get("weatherApi", "/weather");
      console.log("peopledata: ", peopleData);
    } catch (err) {
      console.log("error: ", err);
    }
  }
  async function findNewWeather() {
    const weatherData = await API.get("weatherApi", "/weather?city=Sacramento");
    setWeatherState(weatherData);
  }

  useEffect(() => {
    findNewWeather();
  }, []);

  return (
    <div id="weather">
      <Navvy />
      <WeatherBlock weatherState={weatherState} />
    </div>
  );
}

export default App;
