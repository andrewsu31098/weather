import "./App.css";
import Navvy from "./components/Navbar/Nav";
import WeatherBlock from "./components/WeatherBlock/WeatherBlock.js";

function App() {
  return (
    <div id="weather">
      <Navvy />
      <WeatherBlock />
    </div>
  );
}

export default App;
