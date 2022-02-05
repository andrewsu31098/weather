import "./Day.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloud,
  faSun,
  faCloudSun,
  faCloudShowersHeavy,
  faSnowflake,
} from "@fortawesome/free-solid-svg-icons";

function Day(props) {
  var date = new Date(0);
  date.setUTCSeconds(props.weatherDay.dt);

  const day = props.day;
  return (
    <div
      data-value={day}
      onMouseEnter={(e) => {
        props.onHover(day, e);
      }}
      className="Day"
    >
      <p id="day-name">
        {date
          .toLocaleString("default", {
            weekday: "long",
            timeZone: "America/Los_Angeles",
          })
          .toUpperCase()}
      </p>
      <p id="date">
        {date.getMonth() + 1}/{date.getDate()}/{date.getFullYear()}
      </p>
      <p id="weather-high">High: {parseInt(props.weatherDay.temp.max)}°F</p>
      <p id="weather-low">Low: {parseInt(props.weatherDay.temp.min)}°F</p>
      {/* <div id="icon">
        <FontAwesomeIcon icon={faSun} />
      </div> */}
      <img
        id="icon2"
        src={`http://openweathermap.org/img/wn/${props.weatherDay.weather[0].icon}@2x.png`}
      />

      <p id="description">{props.weatherDay.weather[0].main}</p>
    </div>
  );
}

export default Day;
