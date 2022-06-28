import "./MobileDayList.css";
import MobileDay from "../MobileDay/MobileDay";

let items = ["0", "1", "2", "3", "4", "5", "6"];

function MobileDayList(props) {
  let itemList = items.map((item, index) => {
    return (
      <MobileDay
        key={index}
        day={item}
        weatherDay={props.daily[index]}
        onHover={props.onHover}
      />
    );
  });
  return <div className="MobileDayList">{itemList}</div>;
}

export default MobileDayList;
