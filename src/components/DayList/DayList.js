import "./DayList.css";
import Day from "../Day/Day";

let items = ["0", "1", "2", "3", "4", "5", "6"];

function DayList(props) {
  let itemList = items.map((item, index) => {
    return (
      <Day
        key={index}
        day={item}
        weatherDay={props.daily[index]}
        onHover={props.onHover}
      />
    );
  });
  return (
    <div className="DayList">
      {/* <Day day="0" weatherDay={props.current} onHover={props.onHover} /> */}
      {itemList}
    </div>
  );
}

export default DayList;
