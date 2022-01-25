import * as ReactBootStrap from "react-bootstrap";
import "./Nav.css";

function Navvy(props) {
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
        <ReactBootStrap.Form className="d-flex" id="navvy-search">
          <ReactBootStrap.FormControl
            type="search"
            placeholder="Search City"
            className="me-2"
            aria-label="Search"
          />
          <ReactBootStrap.Button variant="outline-success">
            Search
          </ReactBootStrap.Button>
        </ReactBootStrap.Form>
      </ReactBootStrap.Container>
    </ReactBootStrap.Navbar>
  );
}

export default Navvy;
