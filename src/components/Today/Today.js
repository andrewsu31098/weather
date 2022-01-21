import "./Today.css";
// import ReactCSSTransitionGroup from "react-transition-group";
import { TransitionGroup, CSSTransition } from "react-transition-group";
function relativeDay(daysFromNow) {
  switch (daysFromNow) {
    case "0":
      return "Today";
    case "1":
      return "Tomorrow";
    case "2":
      return "In 2 Days";

    case "3":
      return "In 3 Days";

    case "4":
      return "In 4 Days";

    case "5":
      return "In 5 Days";

    case "6":
      return "In 6 Days";

    default:
      throw Error("Error in Today Header Component");
  }
}

function Today(props) {
  const days = ["0", "1", "2", "3", "4", "5", "6"];

  const items = days.map((day, i) => {
    return (
      <CSSTransition
        in={props.hoveredDay == day}
        timeout={500}
        classNames="example"
      >
        <div key={i}>{props.hoveredDay == day ? relativeDay(day) : null}</div>
      </CSSTransition>
    );
  });

  return (
    <div className="Today">
      {/* <CSSTransition
        in={props.hoveredDay == "0"}
        timeout={500}
        classNames="example"
      >
        <div>{props.hoveredDay == "0" ? relativeDay("0") : null}</div>
      </CSSTransition>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div> */}
      {items}
    </div>
  );
}

export default Today;
