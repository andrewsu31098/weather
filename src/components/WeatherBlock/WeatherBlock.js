import "./WeatherBlock.css";

import Today from "../Today/Today";
import HeaderList from "../HeaderList/HeaderList.js";
import DayBar from "../DayBar/DayBar.js";
import DayList from "../DayList/DayList.js";

function WeatherBlock(props) {
  return (
    <div className="WeatherBlock">
      <div className="wb-spacer"></div>
      <Today />
      <HeaderList />
      <DayBar />
      <DayList />
    </div>
  );
}

export default WeatherBlock;
