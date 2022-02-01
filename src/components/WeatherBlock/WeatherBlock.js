import "./WeatherBlock.css";

// import API from "aws-amplify";

import LocationList from "../LocationList/LocationList";
import HeaderList from "../HeaderList/HeaderList.js";
import Today from "../Today/Today";
import DayBar from "../DayBar/DayBar.js";
import DayList from "../DayList/DayList.js";
import { useState } from "react";
import { type } from "@testing-library/user-event/dist/type";

function WeatherBlock(props) {
  const [hoveredDay, setHoveredDay] = useState("0");

  const onDayHover = (day) => {
    setHoveredDay(day);
  };

  return (
    <div className="WeatherBlock">
      <div className="wb-spacer"></div>
      <LocationList
        city={props.weatherState.name}
        country={props.weatherState.country}
      />
      <HeaderList current={props.weatherState.current} />
      <Today hoveredDay={hoveredDay} />
      <DayBar />
      <DayList
        current={props.weatherState.current}
        daily={props.weatherState.daily}
        onHover={onDayHover}
      />
    </div>
  );
}

export default WeatherBlock;
