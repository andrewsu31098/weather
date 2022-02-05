import "./DayList.css";
import Day from "../Day/Day";

function DayList(props) {
  return (
    <div className="DayList">
      <Day day="0" onHover={props.onHover} />
      <Day day="1" onHover={props.onHover} />
      <Day day="2" onHover={props.onHover} />
      <Day day="3" onHover={props.onHover} />
      <Day day="4" onHover={props.onHover} />
      <Day day="5" onHover={props.onHover} />
      <Day day="6" onHover={props.onHover} />
    </div>
  );
}

export default DayList;
