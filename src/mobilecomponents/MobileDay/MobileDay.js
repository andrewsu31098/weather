import "./MobileDay.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloud,
  faSun,
  faCloudSun,
  faCloudShowersHeavy,
  faSnowflake,
} from "@fortawesome/free-solid-svg-icons";

function MobileDay(props) {
  var date = new Date(0);
  date.setUTCSeconds(props.weatherDay.dt);

  const day = props.day;
  return (
    <div>
      <div
        data-value={day}
        onMouseEnter={(e) => {
          props.onHover(day, e);
        }}
        className="MobileDay"
      >
        <div>
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
        </div>
        <div>
          <p id="weather-high">High: {parseInt(props.weatherDay.temp.max)}°F</p>
          <p id="weather-low">Low: {parseInt(props.weatherDay.temp.min)}°F</p>
        </div>
        <div>
          <img
            id="icon2"
            src={`http://openweathermap.org/img/wn/${props.weatherDay.weather[0].icon}@2x.png`}
          />
        </div>
        <div>
          <p id="description">{props.weatherDay.weather[0].main}</p>
        </div>
      </div>
    </div>
  );
}

export default MobileDay;
