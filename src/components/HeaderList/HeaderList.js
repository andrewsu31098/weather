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
  return (
    <div className="HeaderList">
      <div className="H-Spacer"></div>

      <div className="H-Today">
        <span className="h-day">Sunday </span>
        <span className="h-day">16 January </span> <br></br>
        <p id="h-temperature">+76°F</p>
        <p id="h-description">Feels like 78°F</p>
        <p id="h-description-2">Slightly humid. Expect clouds later</p>
      </div>

      <div className="H-Details">
        <p id="h-detail-header">More Details:</p>
        <span className="h-label">Wind speed: </span>
        <span id="h-wind" className="h-detail">
          1-8 m/s.
        </span>{" "}
        <br></br>
        <span className="h-label">Air Humidity: </span>
        <span id="h-wind" className="h-detail">
          42-76%
        </span>{" "}
        <br></br>
        <span className="h-label">Pressure: </span>
        <span id="h-wind" className="h-detail">
          747-749 mm
        </span>{" "}
        <br></br>
        <span className="h-label">Precipitation probability: </span>
        <span id="h-wind" className="h-detail">
          2%
        </span>{" "}
        <br></br>
      </div>
    </div>
  );
}

export default HeaderList;
