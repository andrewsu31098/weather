import "./WeatherBlock.css";

import Today from "../Today/Today";
import HeaderList from "../HeaderList/HeaderList.js";
import DayBar from "../DayBar/DayBar.js";
import DayList from "../DayList/DayList.js";
import { useState } from "react";

function WeatherBlock(props) {
  const [hoveredDay, setHoveredDay] = useState("0");

  const onDayHover = (day) => {
    console.log(day);

    setHoveredDay(day);
  };

  return (
    <div className="WeatherBlock">
      <div className="wb-spacer"></div>
      <Today hoveredDay={hoveredDay} />
      <HeaderList />
      <DayBar />
      <DayList onHover={onDayHover} />
    </div>
  );
}

export default WeatherBlock;
