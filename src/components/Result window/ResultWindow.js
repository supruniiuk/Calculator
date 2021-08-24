import { connect } from "react-redux";
import "./ResultWindow.css";

function ResultWindow(props) {
  console.log("hello", props.counter);
  return <input type="text" value={props.counter} />;
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter.input,
  };
};

export default connect(mapStateToProps)(ResultWindow);
