import "./WeatherBlock.css";

import LocationList from "../LocationList/LocationList";
import HeaderList from "../HeaderList/HeaderList.js";
import Today from "../Today/Today";
import DayBar from "../DayBar/DayBar.js";
import DayList from "../DayList/DayList.js";
import { useState } from "react";

function WeatherBlock(props) {
  const [hoveredDay, setHoveredDay] = useState("0");

  const onDayHover = (day) => {
    setHoveredDay(day);
  };

  return (
    <div className="WeatherBlock">
      <div className="wb-spacer"></div>
      <LocationList />
      <HeaderList />
      <Today hoveredDay={hoveredDay} />
      <DayBar />
      <DayList onHover={onDayHover} />
    </div>
  );
}

export default WeatherBlock;
