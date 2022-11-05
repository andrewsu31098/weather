import "./MobileBlock.css";

import MobileDayList from "../MobileDayList/MobileDayList";
import MobileHeaderList from "../MobileHeaderList/MobileHeaderList";

function MobileBlock(props) {
  return (
    <div className="MobileBlock">
      <div className="MColOne">
        <MobileHeaderList
          city={props.weatherState.name}
          country={props.weatherState.country}
          current={props.weatherState.current}
        />
      </div>
      <div className="MColTwo">
        <MobileDayList
          current={props.weatherState.current}
          daily={props.weatherState.daily}
          onHover={props.onDayHover}
        />
      </div>
    </div>
  );
}

export default MobileBlock;
