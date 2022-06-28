import "./LocationList.css";

let regionNames = new Intl.DisplayNames(["en"], { type: "region" });

function LocationList(props) {
  return (
    <div className="LocationList">
      {props.mobileView ? null : <div className="L-Spacer"></div>}
      <div id="L-location-name">
        {" "}
        {props.city}, {regionNames.of(props.country)}{" "}
      </div>
    </div>
  );
}

export default LocationList;
