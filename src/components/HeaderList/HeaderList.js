import "./HeaderList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloud,
  faSun,
  faCloudSun,
  faCloudShowersHeavy,
  faSnowflake,
} from "@fortawesome/free-solid-svg-icons";

function HeaderList(props) {
  var date = new Date(0);
  date.setUTCSeconds(props.current.dt);

  return (
    <div className="HeaderList">
      {props.mobileView ? null : <div className="H-Spacer"></div>}

      <div className="H-Today">
        <div>
          <span className="h-day">
            {date.toLocaleString("default", {
              weekday: "long",
              timeZone: "America/Los_Angeles",
            })}
          </span>
          <span className="h-day"> {date.getDate()} </span>
          <span className="h-day">
            {date.toLocaleString("default", {
              month: "long",
              timeZone: "America/Los_Angeles",
            })}
          </span>
        </div>
        <p id="h-temperature">+{parseInt(props.current.temp)}°F</p>
        <p id="h-description">
          Feels like {parseInt(props.current.feels_like)}°F
        </p>
        <p id="h-description-2">
          {" "}
          {props.current.weather[0].main}. Expect{" "}
          {props.current.weather[0].description}.
        </p>
      </div>

      <div className="H-Details">
        <p id="h-detail-header">More Details:</p>
        <span className="h-label">Wind speed: </span>
        <span id="h-wind" className="h-detail">
          {props.current.wind_speed} mph.
        </span>{" "}
        <br></br>
        <span className="h-label">Air Humidity: </span>
        <span id="h-wind" className="h-detail">
          {props.current.humidity}%
        </span>{" "}
        <br></br>
        <span className="h-label">Cloud coverage: </span>
        <span id="h-wind" className="h-detail">
          {props.current.clouds}%
        </span>{" "}
        <br></br>
        <span className="h-label">Pressure: </span>
        <span id="h-wind" className="h-detail">
          {props.current.pressure} hPa
        </span>{" "}
        <br></br>
      </div>
    </div>
  );
}

export default HeaderList;
