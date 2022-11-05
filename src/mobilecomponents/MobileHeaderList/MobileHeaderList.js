import "./MobileHeaderList.css";
import HeaderList from "../../components/HeaderList/HeaderList";
import LocationList from "../../components/LocationList/LocationList";

// Mobile Version of City Name, Addon data like pressure, wind, humidity, etc.
let regionNames = new Intl.DisplayNames(["en"], { type: "region" });

export default function MobileHeaderList(props) {
  var date = new Date(0);
  date.setUTCSeconds(props.current.dt);

  return (
    <div className="ProWrapper">
      {/* CITY NAME AND WRAPPER */}
      <div className="MobileLocationList">
        <div className="MobileLocationName">
          {" "}
          {props.city}, {regionNames.of(props.country)}{" "}
        </div>
      </div>
      {/* ALL CITY WEATHER INFO */}
      <div className="MobileHeaderList">
        <div className="MobileFlexRow">
          <div className="M-Today">
            <div>
              <span className="m-day">
                {date.toLocaleString("default", {
                  weekday: "long",
                  timeZone: "America/Los_Angeles",
                })}
              </span>
              <span className="m-day"> {date.getDate()} </span>
              <span className="m-day">
                {date.toLocaleString("default", {
                  month: "long",
                  timeZone: "America/Los_Angeles",
                })}
              </span>
            </div>
            <p id="m-temperature">+{parseInt(props.current.temp)}°F</p>
            <p id="m-description">
              Feels like {parseInt(props.current.feels_like)}°F
            </p>
            <p id="m-description-2">
              {" "}
              {props.current.weather[0].main}. Expect{" "}
              {props.current.weather[0].description}.
            </p>
          </div>

          <div className="M-Details">
            <p id="m-detail-header">More Details:</p>
            <span className="m-label">Wind speed: </span>
            <span id="m-wind" className="m-detail">
              {props.current.wind_speed} mph.
            </span>{" "}
            <br></br>
            <span className="m-label">Air Humidity: </span>
            <span id="m-wind" className="m-detail">
              {props.current.humidity}%
            </span>{" "}
            <br></br>
            <span className="m-label">Cloud coverage: </span>
            <span id="m-wind" className="m-detail">
              {props.current.clouds}%
            </span>{" "}
            <br></br>
            <span className="m-label">Pressure: </span>
            <span id="m-wind" className="m-detail">
              {props.current.pressure} hPa
            </span>{" "}
            <br></br>
          </div>
        </div>
      </div>
    </div>
  );
}
