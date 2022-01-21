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
  const day = props.day;
  return (
    <div
      data-value={day}
      onMouseEnter={(e) => {
        props.onHover(day);
      }}
      className="Day"
    >
      <p id="day-name">SUNDAY</p>
      <p id="date">01/16/22</p>
      <p id="weather-high">High: 76°F</p>
      <p id="weather-low">Low: 60°F</p>
      <div id="icon">
        <FontAwesomeIcon icon={faSnowflake} />
      </div>

      <p id="description">Cloudy</p>
    </div>
  );
}

export default Day;
