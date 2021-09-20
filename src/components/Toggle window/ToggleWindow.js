import { connect } from "react-redux";
import Key from "../Key/Key";
import "./ToggleWindow.css";

function ToggleWindow(props) {
  const inputClasses = ["ToggleWindow"];
  inputClasses.push(props.theme);
  console.log("ToggleWindow", inputClasses.join("."))
  return (
    <div className={inputClasses.join(" ")}>
      <div>
        <Key value="7" />
        <Key value="8" />
        <Key value="9" />
        <Key value="DEL" cls="reset" />
        <Key value="4" />
        <Key value="5" />
        <Key value="6" />
        <Key value="+" operation="+" />
        <Key value="1" />
        <Key value="2" />
        <Key value="3" />
        <Key value="-" operation="-" />
        <Key value="." />
        <Key value="0" />
        <Key value="/" operation="/" />
        <Key value="×" operation="×" />
      </div>
      <div>
        <Key value="RESET" cls="reset" />
        <Key value="=" cls="equal" />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    theme: state.calculator.theme,
  };
};

export default connect(mapStateToProps)(ToggleWindow);
