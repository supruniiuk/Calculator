import { connect } from "react-redux";
import "./ResultWindow.css";

function ResultWindow(props) {
  return <input type="text" value={props.input} />;
}

const mapStateToProps = (state) => {
  return {
    input: state.calculator.input,
  };
};

export default connect(mapStateToProps)(ResultWindow);
