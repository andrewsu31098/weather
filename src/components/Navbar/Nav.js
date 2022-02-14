import * as ReactBootStrap from "react-bootstrap";
import "./Nav.css";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { useState, useEffect } from "react";
import { type } from "@testing-library/user-event/dist/type";

function Navvy(props) {
  const [cityJSON, setCityJSON] = useState([]);
  const [searchCity, setSearchCity] = useState("");

  useEffect(() => {
    fetch("./cities.json")
      .then((r) => r.text())
      .then((text) => {
        return JSON.parse(text);
      })
      .then((jString) => {
        const map1 = jString.map((city) => {
          city["key"] = city.rank;
          return city;
        });
        return map1;
      })
      .then((keyedJString) => {
        setCityJSON(keyedJString.slice(0, 50));
      });
  }, []);

  function onSearchChange(string, results) {
    setSearchCity(string);
  }

  function onSearchSelect(item) {
    setSearchCity(item.city);
  }

  function onSubmitCity(e) {
    e.preventDefault();
    props.onCitySearch(searchCity);
  }

  return (
    <ReactBootStrap.Navbar>
      <ReactBootStrap.Container id="navvy">
        <ReactBootStrap.Navbar.Brand
          href="#home"
          id="navvy-title"
          className="navvy-links"
        >
          MINIMAL WEATHER
        </ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Nav.Link
          href="https://github.com/andrewsu31098/weather/blob/master/README.md"
          className="navvy-links"
        >
          WEBSITE-FEATURES
        </ReactBootStrap.Nav.Link>
        <ReactBootStrap.Nav.Link
          href="https://github.com/andrewsu31098"
          className="navvy-links"
        >
          MY-GITHUB
        </ReactBootStrap.Nav.Link>
        <div id="navvy-auto-searchbar">
          <form onSubmit={onSubmitCity}>
            <ReactSearchAutocomplete
              onSearch={onSearchChange}
              onSelect={onSearchSelect}
              items={cityJSON}
              fuseOptions={{ keys: ["city"] }}
              resultStringKeyName="city"
              autoFocus
              placeholder="Search City"
            />
          </form>
        </div>
      </ReactBootStrap.Container>
    </ReactBootStrap.Navbar>
  );
}

export default Navvy;
