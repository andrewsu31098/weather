import "./DayList.css";
import Day from "../Day/Day";

function DayList(props) {
  return (
    <div className="DayList">
      <Day day1 />
      <Day day2 />
      <Day day3 />
      <Day day4 />
      <Day day5 />
      <Day day6 />
      <Day day7 />
    </div>
  );
}

export default DayList;
