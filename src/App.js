import "./App.css";
import { useState, useEffect } from "react";

import Navvy from "./components/Navbar/Nav";
import WeatherBlock from "./components/WeatherBlock/WeatherBlock.js";

import { API } from "aws-amplify";

const londonDefault = require("./assets/newyork.json");

function App() {
  const [weatherState, setWeatherState] = useState(londonDefault);

  useEffect(() => {
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
    console.log("type: ", typeof weatherData);
  }

  useEffect(() => {
    callApi();
  }, []);

  return (
    <div id="weather">
      <Navvy />
      <button onClick={findNewWeather}></button>
      <WeatherBlock weatherState={weatherState} />
    </div>
  );
}

export default App;
