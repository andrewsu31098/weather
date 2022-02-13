import * as ReactBootStrap from "react-bootstrap";
import "./Nav.css";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { useState, useEffect } from "react";
import { type } from "@testing-library/user-event/dist/type";

function Navvy(props) {
  const [cityJSON, setCityJSON] = useState([]);

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

  function onButtClick(event) {
    console.log("type: ", typeof cityJSON);
    // console.log("first 5");
    // for (let i = 0; i < 5; i++) {
    //   console.log(cityJSON[i]);
    // }
    console.log(cityJSON);
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
        <ReactBootStrap.Nav.Link href="#home" className="navvy-links">
          WEBSITE-FEATURES
        </ReactBootStrap.Nav.Link>
        <ReactBootStrap.Nav.Link href="#home" className="navvy-links">
          MY-GITHUB
        </ReactBootStrap.Nav.Link>
        <div id="navvy-auto-searchbar">
          <ReactSearchAutocomplete
            items={cityJSON}
            fuseOptions={{ keys: ["city"] }}
            resultStringKeyName="city"
            autoFocus
            placeholder="Search City"
          />
        </div>
      </ReactBootStrap.Container>
    </ReactBootStrap.Navbar>
  );
}

export default Navvy;
