import { connect } from "react-redux";
import "./ResultWindow.css";

function ResultWindow(props) {
  const inputClasses = [];
  inputClasses.push(props.theme);
  return (
    <input type="text" id={inputClasses.join(" ")} value={props.input} />
  );
}

const mapStateToProps = (state) => {
  return {
    input: state.calculator.input,
    theme: state.calculator.theme,
  };
};

export default connect(mapStateToProps)(ResultWindow);
