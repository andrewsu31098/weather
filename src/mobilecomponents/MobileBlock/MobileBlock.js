import "./MobileBlock.css";

import HeaderList from "../../components/HeaderList/HeaderList";
import LocationList from "../../components/LocationList/LocationList";
import MobileDayList from "../MobileDayList/MobileDayList";

function MobileBlock(props) {
  return (
    <div className="MobileBlock">
      <div className="MColOne">
        <div className="mobileSpacer">A</div>
        <div>
          <LocationList
            mobileView
            city={props.weatherState.name}
            country={props.weatherState.country}
          />
          <HeaderList mobileView current={props.weatherState.current} />
        </div>
      </div>
      <div className="MColTwo">
        <div>
          <MobileDayList
            current={props.weatherState.current}
            daily={props.weatherState.daily}
            onHover={props.onDayHover}
          />
        </div>
        <div className="mobileSpacerB">D</div>
      </div>
    </div>
  );
}

export default MobileBlock;
